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
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Definir constantes globales fuera de la clase
const WHATSAPP_API_URL = `https://graph.facebook.com/v19.0/${process.env.PHONE_NUMBER_ID}/messages`;
const TOKEN = `Bearer ${process.env.WHATSAPP_TOKEN}`;
const DEFAULT_PHONE = "521234567890"; // Número predefinido
class WspController {
    sendMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { message } = req.body; // Solo el mensaje
                const response = yield axios_1.default.post(WHATSAPP_API_URL, {
                    messaging_product: "whatsapp",
                    to: DEFAULT_PHONE,
                    type: "text",
                    text: { body: message }
                }, {
                    headers: {
                        Authorization: TOKEN,
                        'Content-Type': 'application/json'
                    }
                });
                res.json({ success: true, data: response.data });
            }
            catch (error) {
                const err = error; // Manejar error de Axios
                res.status(500).json({ success: false, error: ((_a = err.response) === null || _a === void 0 ? void 0 : _a.data) || 'Error desconocido' });
            }
        });
    }
}
const wspController = new WspController();
exports.default = wspController;
