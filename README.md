node-curve25519
===============
[![npm version](https://img.shields.io/npm/v/curve25519-n.svg)](https://www.npmjs.com/package/curve25519-n)
[![npm downloads](https://img.shields.io/npm/dt/curve25519-n.svg)](https://www.npmjs.com/package/curve25519-n)
[![GitHub last commit](https://img.shields.io/github/last-commit/volschin/node-curve25519.svg)](https://github.com/volschin/node-curve25519)
![Node-CI](https://github.com/volschin/node-curve25519/workflows/Node-CI/badge.svg)
[![Appveyor Build status](https://img.shields.io/appveyor/ci/volschin/node-curve25519/master.svg?logo=appveyor)](https://ci.appveyor.com/project/volschin/node-curve25519)
[![Known Vulnerabilities](https://snyk.io/test/npm/curve25519-n/badge.svg)](https://snyk.io/test/npm/curve25519-n)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=volschin_node-curve25519&metric=alert_status)](https://sonarcloud.io/dashboard?id=volschin_node-curve25519)

This is a binding to the curve25519-donna library for node. Usage:

    const curve = require('curve25519-n');

Methods
=======

`curve.makeSecretKey(secret)`
-----------------------------
Returns a `Buffer`.

`curve.derivePublicKey(secret)`
-------------------------------
Provide it with your secret key as a 32-bytes-long `Buffer` and get a `Buffer` containing your public key as the result.

`curve.deriveSharedSecret(mysecret, hispublic)`
-----------------------------------------------
Derive your shared secret with someone else by giving this function two 32-bytes-long buffers containing your secret key and the other persons public key. Returns a `Buffer`.

Installing
==========
`npm i -S curve25519-n` or `yarn add curve25519-n`.

Testing
==========
`yarn test`
