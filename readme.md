## "Simple TCP Based Daytime Service"
[![NPM version][npm-image]][npm-url]
![npm](https://img.shields.io/npm/dt/daytime-service)

### Install Daytime
```bash
npm i daytime-service --save
```

```js
const nist = require("daytime-service");
let server = new nist.default.DayTime("banner");

//TCP SERVICE (PORT 13)
server.Listen;
```

```bash
Tcp Response :> 58996 20-05-21 10:17:18 0 0 0 131.2 UTC(NIST) *
```

RFC Document
> https://tools.ietf.org/html/rfc867

   [npm-image]: https://img.shields.io/npm/v/daytime-service.svg?style=flat 
   [npm-url]: https://npmjs.org/package/daytime-service 
