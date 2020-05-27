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
    constructor(banner) {
        this.bn = banner || "NIST";
    }
    get getUTC() {
        const local = new Date();
        const utc = local.toISOString();
        const uarr = utc.split(/\D/);
        const year = String(uarr[0]).slice(2, utc.length);
        const month = String(uarr[1]);
        const day = String(uarr[2]);
        const hr = String(uarr[3]);
        const mn = String(uarr[4]);
        const se = String(uarr[5]);
        const ms = String(uarr[6]);
        const Shortjj = String(Math.floor((new Date(utc).valueOf() / (1000 * 60 * 60 * 24)) - 1) + (2440588)).slice(2, 7);
        var sDayTime = String(Shortjj).concat(" ")
            .concat(year).concat("-").concat(month).concat("-")
            .concat(day).concat(" ").concat(hr).concat(":")
            .concat(mn).concat(":").concat(se).concat(" ")
            .concat("50 0 0").concat(" ").concat(ms)
            .concat(" ").concat("UTC(" + this.bn + ")");
        return "\n" + String(sDayTime).concat(" ").concat("*").concat(" ").concat("\r\n");
    }
}
class DayTime {
    constructor(banner) {
        this.port = 13;
        this.bnn = banner;
    }
    get Listen() {
        const banner = this.bnn;
        return net.createServer((s) => {
            s.setTimeout(500);
            ntsmsg(s, banner);
        }).listen(this.port, function () {
            const date = new TIME_UTC(banner);
            console.log(`(Daytime Service) Port:13\r\n${date.getUTC}`);
        }).on('error', function (err) {
            ntserr(err);
        });
    }
}
exports.DayTime = DayTime;
var ntsmsg = (s, b) => {
    const date = new TIME_UTC(b);
    return s.write(new Buffer(date.getUTC, "ascii"));
};
var ntserr = (s) => {
    console.log(s.message);
};
