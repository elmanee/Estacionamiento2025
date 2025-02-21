import { Router } from "express";
import vehiculoController from "../controllers/vehiculoControllers";

class VehiculoRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', vehiculoController.list);
        this.router.post('/', vehiculoController.create);
        this.router.delete('/:matricula', vehiculoController.delete);
        this.router.put('/:matricula', vehiculoController.update);
        this.router.get('/:IdVehiculo',vehiculoController.getOne);
    }
}

const vehiculoRoutes = new VehiculoRoutes();
export default vehiculoRoutes.router;