#include <napi.h>
#include <stdio.h>

#include "curve25519-donna/curve25519-donna.c"

static Napi::Value Curve(const Napi::CallbackInfo& info) {
  if (info.Length() != 2) {
    Napi::Error::New(info.Env(), "Expected exactly three arguments")
        .ThrowAsJavaScriptException();
    return info.Env().Undefined();
  }
  
  if (!info[0].IsBuffer() || !info[1].IsBuffer()) {
    Napi::Error::New(info.Env(), "All arguments must be Buffers")
        .ThrowAsJavaScriptException();
    return info.Env().Undefined();
  }

  unsigned char tempBuffer[32];
  Napi::Buffer<char> buf0 = Napi::Buffer<char>::Copy(info.Env(), info[0].As<Napi::Buffer<char>>().Data(), 32);
  Napi::Buffer<char> buf1 = Napi::Buffer<char>::Copy(info.Env(), info[1].As<Napi::Buffer<char>>().Data(), 32);

  curve25519_donna(tempBuffer, (const unsigned char*)buf0.Data(), (const unsigned char*)buf1.Data());

  return Napi::Buffer<char>::Copy(info.Env(), (const char *)tempBuffer, 32);
}

static Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports["Curve"] = Napi::Function::New(env, Curve);
  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)
