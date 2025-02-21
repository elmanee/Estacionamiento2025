"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehiculoControllers_1 = __importDefault(require("../controllers/vehiculoControllers"));
class VehiculoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', vehiculoControllers_1.default.list);
        this.router.post('/', vehiculoControllers_1.default.create);
        this.router.delete('/:matricula', vehiculoControllers_1.default.delete);
        this.router.put('/:matricula', vehiculoControllers_1.default.update);
        this.router.get('/:IdVehiculo', vehiculoControllers_1.default.getOne);
    }
}
const vehiculoRoutes = new VehiculoRoutes();
exports.default = vehiculoRoutes.router;
