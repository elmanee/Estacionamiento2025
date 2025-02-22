"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wspControllers_1 = __importDefault(require("../controllers/wspControllers"));
class WspRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/send-message', wspControllers_1.default.sendMessage);
    }
}
const wspRoutes = new WspRoutes();
exports.default = wspRoutes.router;
