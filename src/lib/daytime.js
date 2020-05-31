"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayTime = void 0;
const net = __importStar(require("net"));
class TIME_UTC {
    constructor(flag) {
        this.bn = flag || "NIST";
    }
    get getUTC() {
        var now = new Date;
        var local = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds()));
        const uarr = local.toISOString().split(/\D/);
        const Shortyr = String(local.getFullYear()).slice(2, 4);
        const month = String(uarr[1]);
        const day = String(uarr[2]);
        const hr = String(uarr[3]);
        const mn = String(uarr[4]);
        const se = String(uarr[5]);
        const ms = String(local.getMilliseconds());
        const Shortjj = String(Math.floor((local.valueOf() / (1000 * 60 * 60 * 24)) - 1) + (2440588)).slice(2, 7);
        var sDayTime = String(Shortjj).concat(" ").concat(Shortyr).concat("-").concat(month).concat("-").concat(day).concat(" ").concat(hr).concat(":").concat(mn).concat(":").concat(se).concat(" ").concat(ms).concat(" ").concat("UTC(" + this.bn + ")");
        return "\n" + String(sDayTime).concat(" ").concat("*").concat("\r\n");
    }
}
class DayTime {
    constructor(flag) {
        this.port = 13;
        this.bnn = flag;
    }
    get GetTime() {
        const tFlag = this.bnn;
        const date = new TIME_UTC(tFlag);
        return date.getUTC;
    }
    get Listen() {
        const tFlag = this.bnn;
        return net.createServer((s) => {
            s.setTimeout(500);
            ntsmsg(s, tFlag);
        }).listen(this.port, function () {
            const date = new TIME_UTC(tFlag);
            console.log(`(Daytime Service) Port:13\r\n${date.getUTC}`);
        }).on('error', function (err) {
            ntserr(err);
        });
    }
}
exports.DayTime = DayTime;
var ntsmsg = (s, b) => {
    const date = new TIME_UTC(b);
    return s.write(Buffer.from(date.getUTC));
};
var ntserr = (s) => {
    console.log(s.message);
};
