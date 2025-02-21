"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuarioControllers_1 = __importDefault(require("../controllers/usuarioControllers"));
const express_1 = require("express");
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usuarioControllers_1.default.list);
        this.router.post('/', usuarioControllers_1.default.create);
        this.router.delete('/:IdUsuario', usuarioControllers_1.default.delete);
        this.router.put('/:IdUsuario', usuarioControllers_1.default.update);
        this.router.get('/:IdUsuario', usuarioControllers_1.default.getOne);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
