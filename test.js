var curve = require("bindings")("curve");

var buf1 = new Buffer.alloc(32);
var secretKeyAlice = new Buffer.from('77076d0a7318a57d3c16c17251b26645df4c2f87ebc0992ab177fba51db92c2a', 'hex');
var expectedPublicKeyBob = new Buffer.from('de9edb7d7b7dc1b4d35b61c2ece435373f8343c85b78674dadfc7e146f882b4f', 'hex');
console.log(buf1.toString('base64'));
curve.curve(buf1,secretKeyAlice,expectedPublicKeyBob);
console.log(buf1.toString('hex'));
if (buf1.toString('base64') == 'TX5zmcW3e8VSzbjMoMQJqdY2ASjiOQIJJ92nDaq9QHU=') {
	console.log('Result matches - OK!');
} else {
	console.log('Result doesnt match - FALSE!');
	return (false);
}
