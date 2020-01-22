const { Curve } = require('bindings')('Curve');

const secretKeyAlice = Buffer.from('77076d0a7318a57d3c16c17251b26645df4c2f87ebc0992ab177fba51db92c2a', 'hex');
const expectedPublicKeyBob = Buffer.from('de9edb7d7b7dc1b4d35b61c2ece435373f8343c85b78674dadfc7e146f882b4f', 'hex');
const starttime = new Date().getTime();
const iterations = 10000;
console.log(`Starting ${iterations} rounds.`);
for (let i = 0; i < iterations; i += 1) {
  Curve(secretKeyAlice, expectedPublicKeyBob);
}
const endtime = new Date().getTime();
const timediff = endtime - starttime;
console.log(`Dauer: ${timediff / 1000} s`);
