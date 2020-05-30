## "Simple TCP Based Internet Time Service"
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
Tcp Port(13) :> 58996 20-05-23 11:17:18 0 0 0 031 UTC(NIST) *
```
## Computer Time Synchronization Document
> JJJJJ YR-MO-DA HH:MM:SS TT L UT1 msADV UTC(NIST) <OTM>
> https://tf.nist.gov/service/pdf/computertime.pdf
   
### RFC Document
> https://tools.ietf.org/html/rfc867

   [npm-image]: https://img.shields.io/npm/v/daytime-service.svg?style=flat 
   [npm-url]: https://npmjs.org/package/daytime-service 
