import { Request, Response, query } from "express";
import pool from "../database";

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
  public async delete(req: Request, res: Response): Promise<void>{
    const { IDPago} = req.params;
    await pool.query('UPDATE pago set Estatus = "Pagado" WHERE IDPago = ?', [IDPago]); 
    res.json({ message: 'La actividad se eliminó' });
  }
    
  }

  const pagoController = new PagoController();
  export default pagoController;

  