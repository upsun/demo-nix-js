"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const figlet_1 = __importDefault(require("figlet"));
const config = require("platformsh-config").config();
const app = (0, express_1.default)();
const port = config.isValidPlatform() ? config.port : 3000;
app.get("/", (_req, res) => {
    const txt = figlet_1.default.textSync("NodeJS!");
    res.send(`<pre style="word-wrap: break-word; white-space: pre-wrap;">${txt}</pre>`);
});
app.listen(port);