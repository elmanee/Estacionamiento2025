"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pagoControllers_1 = __importDefault(require("../controllers/pagoControllers"));
class PagoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', pagoControllers_1.default.list);
        this.router.get('/:IDPago', pagoControllers_1.default.getOne);
        this.router.post('/', pagoControllers_1.default.create);
        this.router.put('/:IDPago', pagoControllers_1.default.update);
        this.router.delete('/:IDPago', pagoControllers_1.default.delete);
        this.router.get('/download-historial-pdf', pagoControllers_1.default.downloadHistorialPdf);
    }
}
const pagoRoutes = new PagoRoutes();
exports.default = pagoRoutes.router;
