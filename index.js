/* eslint-disable no-param-reassign */
/* eslint-disable no-bitwise */
const binding = require('bindings')('Curve');

function basepoint() {
  const buf = Buffer.alloc(32).fill(0);
  buf[0] = 9;
  return buf;
}

/**
 * Make secret key
 * @param {*} mysecret
 * @return {Buffer} secretKey
 */

function makeSecretKey(mysecret) {
  const buf = Buffer.alloc(mysecret.length);
  mysecret.copy(buf, 0, 0, mysecret.length);

  if (!(buf instanceof Buffer)) { throw new Error('mysecret must be a Buffer'); }
  if (buf.length !== 32) { throw new Error('mysecret must be 32 bytes long'); }

  buf[0] &= 248;
  buf[31] &= 127;
  buf[31] |= 64;

  return buf;
}

/**
 *
 * @param {Buffer} mysecret
 * @return {Buffer} publicLey
 */
function derivePublicKey(mysecret) {
  if (mysecret.length !== 32) { throw new Error('mysecret must be 32 bytes long'); }
  const mypublic = Buffer.alloc(32);
  binding.Curve(mypublic, mysecret, basepoint());
  return mypublic;
}

/**
 *
 * @param {Buffer} mysecret
 * @param {Buffer} hispublic
 * @return {Buffer} sharedSecret
 */
function deriveSharedSecret(mysecret, hispublic) {
  if (mysecret.length !== 32) { throw new Error('mysecret must be 32 bytes long'); }
  if (hispublic.length !== 32) { throw new Error('hispublic must be 32 bytes long'); }

  const sharedSecret = Buffer.alloc(32);
  binding.Curve(sharedSecret, mysecret, hispublic);
  return sharedSecret;
}

module.exports = {
  makeSecretKey,
  derivePublicKey,
  deriveSharedSecret,
};
