var curve = require("bindings")("curve");

var buf1 = new Buffer.alloc(32);
var secretKeyAlice = new Buffer.from('77076d0a7318a57d3c16c17251b26645df4c2f87ebc0992ab177fba51db92c2a', 'hex');
var expectedPublicKeyBob = new Buffer.from('de9edb7d7b7dc1b4d35b61c2ece435373f8343c85b78674dadfc7e146f882b4f', 'hex');
var starttime = new Date().getTime();
var endtime;
var iterations = 10000;
console.log('Starting ' + iterations + ' rounds.');
for (i = 0; i < iterations; i++) {
    curve.curve(buf1,secretKeyAlice,expectedPublicKeyBob);
}
endtime= new Date().getTime();
var timediff=endtime-starttime;
console.log('Dauer: ' + timediff/1000 + ' s');
