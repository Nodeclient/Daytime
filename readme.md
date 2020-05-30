### NodeAuth2 DayTime Service (TCP)
[![NPM version][npm-image]][npm-url]
![npm](https://img.shields.io/npm/dt/daytime-service)

### NodeAuth2
> https://www.npmjs.com/package/nodeauth2

### Install Daytime
```bash
npm i daytime-service --save
```

```js
const nist = require("daytime-service");
let server = new nist.default.DayTime("NA2");
//TCP SERVICE (PORT 13)
server.Listen;
```

```bash
Tcp Response :> 58996 20-05-21 10:17:18 523 UTC(NA2) *
```

   [npm-image]: https://img.shields.io/npm/v/daytime-service.svg?style=flat 
   [npm-url]: https://npmjs.org/package/daytime-service 
