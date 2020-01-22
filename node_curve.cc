#include <napi.h>
#include <stdio.h>

#include "curve25519-donna/curve25519-donna.c"

static Napi::Value Curve(const Napi::CallbackInfo& info) {
  if (info.Length() != 3) {
    Napi::Error::New(info.Env(), "Expected exactly three arguments")
        .ThrowAsJavaScriptException();
    return info.Env().Undefined();
  }
  
  if (!info[0].IsBuffer() || !info[1].IsBuffer() || !info[2].IsBuffer()) {
    Napi::Error::New(info.Env(), "All arguments must be Buffers")
        .ThrowAsJavaScriptException();
    return info.Env().Undefined();
  }

  unsigned char* arg0 = reinterpret_cast<unsigned char*>(info[0].As<Napi::Buffer<char>>().Data());
  unsigned char* arg1 = reinterpret_cast<unsigned char*>(info[1].As<Napi::Buffer<char>>().Data());
  unsigned char* arg2 = reinterpret_cast<unsigned char*>(info[2].As<Napi::Buffer<char>>().Data());

  curve25519_donna(arg0, arg1, arg2);

  return info.Env().Undefined();
}

static Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports["Curve"] = Napi::Function::New(env, Curve);
  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)
