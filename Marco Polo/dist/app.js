"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let index = (req, res) => {
    let end = parseInt(req.query.end) || 1000;
    let N = (end <= 1000) ? end + 1 : 1001;
    let data = Array.apply(null, { length: N }).map(Number.call, Number);
    data.shift();
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element % 28 == 0) {
            data[i] = "marcopolo";
        }
        else {
            if (element % 7 == 0)
                data[i] = "polo";
            if (element % 4 == 0)
                data[i] = "marco";
        }
    }
    for (let j = 0; j < end; j = j + N - 1) {
        let resp = data;
        if (end - j < N)
            resp = resp.slice(0, end - j);
        resp = resp.map((el) => { return (typeof el == "number") ? el + j : el; });
        res.write(resp.toString() + "\n\n");
    }
    res.send();
};
const app = express_1.default();
app.set("port", process.env.PORT || 3000);
app.get("/", index);
const server = app.listen(app.get("port"), () => {
    console.log("  App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
exports.default = server;
//# sourceMappingURL=app.js.map