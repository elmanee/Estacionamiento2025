import { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Definir constantes globales fuera de la clase
const WHATSAPP_API_URL = `https://graph.facebook.com/v19.0/${process.env.PHONE_NUMBER_ID}/messages`;
const TOKEN = `Bearer ${process.env.WHATSAPP_TOKEN}`;
const DEFAULT_PHONE = "521234567890"; // Número predefinido

class WspController {
    async sendMessage(req: Request, res: Response) {
        try {
            const { message } = req.body; // Solo el mensaje

            const response = await axios.post(WHATSAPP_API_URL, {
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
        } catch (error) {
            const err = error as any; // Manejar error de Axios
            res.status(500).json({ success: false, error: err.response?.data || 'Error desconocido' });
        }
    }
}

const wspController = new WspController();
export default wspController;
