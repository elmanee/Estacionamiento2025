import usuarioController from "../controllers/usuarioControllers"
import { Router } from "express";

class UsuarioRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config(): void {
        
        this.router.get('/', usuarioController.list);
        this.router.post('/', usuarioController.create);
        this.router.delete('/:IdUsuario', usuarioController.delete);
        this.router.put('/:IdUsuario', usuarioController.update);
        this.router.get('/:IdUsuario',usuarioController.getOne);

    }
    }


const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;