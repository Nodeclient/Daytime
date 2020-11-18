### NodeAuth2 Time Service
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
 
```TIME FORMAT : MJD YY-MM-DD HH:MM:SS MS UTC(NA2) *```
```bash
   OUTPUT :> 58996 20-05-21 10:17:18 523 UTC(NA2) *
```

RFC-1119, RFC-1059, RFC-958

  [npm-image]: https://img.shields.io/npm/v/daytime-service.svg?style=flat 
  [npm-url]: https://npmjs.org/package/daytime-service 
