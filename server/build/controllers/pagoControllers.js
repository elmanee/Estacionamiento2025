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
const pdfkit_1 = __importDefault(require("pdfkit"));
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
            try {
                yield database_1.default.query('DELETE FROM pago WHERE IDPago = ?', [IDPago]);
                res.json({ message: 'Pago eliminado' });
            }
            catch (error) {
                console.error('Error al eliminar el pago:', error);
                res.status(500).json({ error: 'Error al eliminar el pago' });
            }
        });
    }
    downloadHistorialPdf(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const doc = new pdfkit_1.default();
                let filename = 'historial.pdf';
                // Configura los encabezados de la respuesta
                res.setHeader('Content-disposition', `attachment; filename="${filename}"`);
                res.setHeader('Content-type', 'application/pdf');
                // Envía el PDF al cliente
                doc.pipe(res); // Aquí es donde se envía el PDF al cliente
                // Genera el contenido del PDF
                doc.fontSize(25).text('Este es un PDF de prueba', { align: 'center' });
                doc.moveDown();
                doc.fontSize(12).text('Contenido de prueba.');
                doc.end(); // Finaliza el documento
            }
            catch (error) {
                console.error('Error generando el PDF:', error);
                res.status(500).json({ error: 'Error al generar el PDF' });
            }
        });
    }
}
const pagoController = new PagoController();
exports.default = pagoController;
