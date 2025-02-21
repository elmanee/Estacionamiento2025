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
class PagoController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const pago = yield database_1.default.query('SELECT * FROM pago');
            resp.json(pago);
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IDPago } = req.params;
            const pago = yield database_1.default.query('SELECT * FROM pago WHERE IDPago = ?', [IDPago]);
            if (pago.length > 0) {
                return resp.json(pago[0]);
            }
            resp.status(404).json({ text: "El pago no existe" });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPago = Object.assign(Object.assign({}, req.body), { Estatus: 'Pendiente' });
            try {
                yield database_1.default.query('INSERT INTO pago SET ?', newPago);
                resp.json({ message: 'Pago guardado' });
            }
            catch (error) {
                resp.status(500).json({ error: 'Error al guardar el pago' });
            }
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IDPago } = req.params;
            yield database_1.default.query('UPDATE pago set ? WHERE IDPago = ? ', [req.body, IDPago]);
            resp.json({ message: 'El pago fue actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IDPago } = req.params;
            yield database_1.default.query('UPDATE pago set Estatus = "Pagado" WHERE IDPago = ?', [IDPago]);
            res.json({ message: 'La actividad se eliminó' });
        });
    }
}
const pagoController = new PagoController();
exports.default = pagoController;
