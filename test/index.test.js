const { it } = require('mocha');
const { expect } = require('chai');
const { makeSecretKey, derivePublicKey, deriveSharedSecret } = require('../index');

it('Compare two shared secret keys', (done) => {
  const secret1 = Buffer.from('abcdefghijklmnopqrstuvwxyz123456');
  expect(secret1.length).to.equal(32);
  const secret2 = Buffer.from('654321zyxwvutsrqponmlkjihgfedcba');
  expect(secret2.length).to.equal(32);
  const priv1 = makeSecretKey(secret1);
  const pub1 = derivePublicKey(priv1);

  const priv2 = makeSecretKey(secret2);
  const pub2 = derivePublicKey(priv2);

  const shared12 = deriveSharedSecret(priv1, pub2);
  const shared21 = deriveSharedSecret(priv2, pub1);

  expect(shared12.toString()).to.equal(shared21.toString());

  done();
});
