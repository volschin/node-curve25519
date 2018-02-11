node-curve25519
===============
[![npm version](https://badge.fury.io/js/curve25519-n.svg)](https://badge.fury.io/js/curve25519-n)
[![Build Status](https://travis-ci.org/volschin/node-curve25519.svg?branch=master)](https://travis-ci.org/volschin/node-curve25519)
[![Build status](https://ci.appveyor.com/api/projects/status/ge3jjijetqp2lf4h?svg=true)](https://ci.appveyor.com/project/volschin/node-curve25519)
[![Known Vulnerabilities](https://snyk.io/test/npm/curve25519-n/badge.svg)](https://snyk.io/test/npm/curve25519-n)
[![Greenkeeper badge](https://badges.greenkeeper.io/volschin/node-curve25519.svg)](https://greenkeeper.io/)

This is a binding to the curve25519-donna library for node. Usage:

    var curve = require('curve25519-n');

Methods
=======

`curve.makeSecretKey(secret)`
-----------------------------
Provide it with a 32-bytes-long `Buffer` and it will be modified in-place in order to be a usable secret key. Doesn't return anything.

`curve.derivePublicKey(secret)`
-------------------------------
Provide it with your secret key as a 32-bytes-long `Buffer` and get a `Buffer` containing your public key as the result.

`curve.deriveSharedSecret(mysecret, hispublic)`
-----------------------------------------------
Derive your shared secret with someone else by giving this function two 32-bytes-long buffers containing your secret key and the other persons public key. Returns a `Buffer`.

Installing
==========
`npm i -S curve25519-n` or `yarn add curve25519-n`.
