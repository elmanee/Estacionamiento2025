import{Request,Response}from'express';
import pool from "../database";

class UsuarioController{
public async list(req: Request,resp:Response){
    const usuario= await pool.query('SELECT * FROM usuario')
   resp.json(usuario);
}

public async create(req:Request, resp:Response){
    console.log([req.body]);
    await pool.query('INSERT INTO usuario set ?',[req.body])
    resp.json({text:'creating a user'}); 
}
public async delete(req:Request, resp:Response){
    const {IdUsuario}=req.params;
    await pool.query('DELETE FROM usuario WHERE IdUsuario=?',[IdUsuario]);
    resp.json({message:'deleting a user'});
}
public async update(req:Request, resp:Response){
    const {IdUsuario}=req.params;
    await pool.query('UPDATE usuario set ? WHERE IdUsuario = ?',[req.body, IdUsuario]);
    resp.json({message:'Updating a user'});
}
public async getOne(req:Request, resp:Response){
    const {IdUsuario}=req.params;
    const usuario = await pool.query('SELECT * FROM usuario WHERE IdUsuario=?',[IdUsuario]);
    if(usuario.length >0){
        return resp.json(usuario[0]);
    }
    resp.status(404).json({text: 'the user doesnt exists'});
}


}
const usuarioController = new UsuarioController();
export default usuarioController ;