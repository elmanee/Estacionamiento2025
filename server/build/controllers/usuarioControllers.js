"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UsuarioController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield database_1.default.query('SELECT * FROM usuario');
            resp.json(usuario);
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log([req.body]);
            yield database_1.default.query('INSERT INTO usuario set ?', [req.body]);
            resp.json({ text: 'creating a user' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdUsuario } = req.params;
            yield database_1.default.query('DELETE FROM usuario WHERE IdUsuario=?', [IdUsuario]);
            resp.json({ message: 'deleting a user' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdUsuario } = req.params;
            yield database_1.default.query('UPDATE usuario set ? WHERE IdUsuario = ?', [req.body, IdUsuario]);
            resp.json({ message: 'Updating a user' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdUsuario } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM usuario WHERE IdUsuario=?', [IdUsuario]);
            if (usuario.length > 0) {
                return resp.json(usuario[0]);
            }
            resp.status(404).json({ text: 'the user doesnt exists' });
        });
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
