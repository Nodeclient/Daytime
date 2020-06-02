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
import * as ns from '../lib/daytime';
let daytime = new ns.DayTime("NA2");
```

```js 
/* print only */
    console.log( daytime.GetTime );
```  

```js
/* listen tcp server */
    daytime.Listen
 ```  

```bash
Tcp Response :> 58996 20-05-21 10:17:18 523 UTC(NA2) *
```

   [npm-image]: https://img.shields.io/npm/v/daytime-service.svg?style=flat 
   [npm-url]: https://npmjs.org/package/daytime-service 
