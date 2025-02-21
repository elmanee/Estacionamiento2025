import{Request,Response}from'express';
import pool from "../database";

class VehiculoController{
    public async list(req: Request, resp: Response) {
        const vehiculo = await pool.query('SELECT * FROM vehiculo WHERE Estatus IS NULL');
        resp.setHeader('Cache-Control', 'no-store');
        resp.json(vehiculo);
    }
    

public async create(req: Request, resp: Response) {
    // Obtener la fecha actual y formatearla
    const fecha = new Date();
    const fechaMySQL = fecha.toISOString().slice(0, 19).replace('T', ' '); // 'YYYY-MM-DD HH:mm:ss'

    // Agregar la fecha formateada a los datos del vehículo
    const vehiculoData = {
      ...req.body,
      created_at: fechaMySQL, // Asegurarse de que la fecha esté en el formato adecuado para MySQL
    };

    console.log([vehiculoData]);

    // Insertar el vehículo con la fecha correctamente formateada
    await pool.query('INSERT INTO vehiculo set ?', [vehiculoData]);
    resp.json({ text: 'Vehículo creado con éxito' });
}

public async delete(req: Request, res: Response): Promise<Response> {  // Cambio aquí
    const { matricula } = req.params;

    // Ejecuta la consulta para buscar el vehículo
    const [rows]: any = await pool.query('SELECT * FROM vehiculo WHERE matricula = ?', [matricula]);

    // Verifica si el vehículo existe (rows es un arreglo de resultados)
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Vehículo no encontrado' });
    }

    // Eliminar el vehículo con la matrícula dada
    await pool.query('DELETE FROM vehiculo WHERE matricula = ?', [matricula]);

    // Responde con éxito
    return res.json({ message: 'Vehículo eliminado correctamente' });
  }



public async update(req:Request, resp:Response){
    const {matricula}=req.params;
    await pool.query('UPDATE vehiculo set ? WHERE matricula = ?',[req.body, matricula]);
    resp.json({message:'Updating a booking'});
}
public async getOne(req:Request, resp:Response){
    const {IdVehiculo}=req.params;
    const vehiculo = await pool.query('SELECT * FROM vehiculo WHERE IdVehiculo=?',[IdVehiculo]);
    if(vehiculo.length >0){
        return resp.json(vehiculo[0]);
    }
    resp.status(404).json({text: 'La matricula no existe'});
}

}
const vehiculoController = new VehiculoController();
export default vehiculoController;
