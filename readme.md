## "Simple TCP Based Daytime Service"
[![NPM version][npm-image]][npm-url]
![npm](https://img.shields.io/npm/dt/daytime)


```js
const nist = require("../lib/daytime");
let server = new nist.default.DayTime("banner");

//START TCP SERVICE (PORT 13)
server.Listen;
```

```bash
TCP:> 70701 20-05-20 03:22:50 0 0 0 701 UTC(banner)
```

RFC Document
> https://tools.ietf.org/html/rfc867

   [npm-image]: https://img.shields.io/npm/v/daytime.svg?style=flat 
   [npm-url]: https://npmjs.org/package/daytime 
