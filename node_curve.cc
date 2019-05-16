#include <string.h>
#include <stdlib.h>
#ifdef _WIN32
  #include <io.h>
#else
  #include <unistd.h>
#endif
#include "curve25519-donna.c"

#include <nan.h>

static NAN_METHOD(DoCurve) {
  Nan::HandleScope scope;
  const char *usage = "usage: curve(a, b, c)";
  if (info.Length() != 3) {
    return Nan::ThrowSyntaxError(usage);
  }
  unsigned char* arg0 = (unsigned char*) node::Buffer::Data(Nan::To<v8::String>(info[0]);
  unsigned char* arg1 = (unsigned char*) node::Buffer::Data(Nan::To<v8::String>(info[1]);
  unsigned char* arg2 = (unsigned char*) node::Buffer::Data(Nan::To<v8::String>(info[2]);
  curve25519_donna(arg0, arg1, arg2);
}

extern "C" NAN_MODULE_INIT(init) {
  Nan::HandleScope scope;
  Nan::SetMethod(target, "curve", DoCurve);
}


NODE_MODULE(NODE_GYP_MODULE_NAME, init)
