import { Request, Response, query } from "express";
import pool from "../database";
import PDFDocument from "pdfkit";

class PagoController {
  public async list(req: Request,resp:Response){
    const pago= await pool.query('SELECT * FROM pago')
    resp.json(pago);
}

  public async getOne(req:Request, resp:Response): Promise<any>{
    const {IDPago} = req.params;
    const pago = await pool.query('SELECT * FROM pago WHERE IDPago = ?', [IDPago]);
    if (pago.length > 0) {
      return resp.json(pago[0]);
    }
    resp.status(404).json({text:"El pago no existe"});
  }
  

  public async create(req: Request, resp: Response): Promise<void> {
    const newPago = { ...req.body, Estatus: 'Pendiente' };
  
    try {
      await pool.query('INSERT INTO pago SET ?', newPago);
      resp.json({ message: 'Pago guardado' });
    } catch (error) {
      resp.status(500).json({ error: 'Error al guardar el pago' });
    }
  }
  
  public async update (req:Request, resp:Response): Promise<void>{
    const {IDPago} = req.params;
    await pool.query('UPDATE pago set ? WHERE IDPago = ? ', [req.body, IDPago]);
    resp.json({message: 'El pago fue actualizado'});
  }
  public async delete(req: Request, res: Response): Promise<void> {
    const { IDPago } = req.params;
    try {
        await pool.query('DELETE FROM pago WHERE IDPago = ?', [IDPago]);
        res.json({ message: 'Pago eliminado' });
    } catch (error) {
        console.error('Error al eliminar el pago:', error);
        res.status(500).json({ error: 'Error al eliminar el pago' });
    }
}

  public async downloadHistorialPdf(req: Request, res: Response): Promise<void> {
    try {
        const doc = new PDFDocument();
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
    } catch (error) {
        console.error('Error generando el PDF:', error);
        res.status(500).json({ error: 'Error al generar el PDF' });
    }
}
  
  
}

  
  
    
  

  const pagoController = new PagoController();
  export default pagoController;

  