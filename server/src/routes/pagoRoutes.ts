import { Router } from 'express';
import pagoController from '../controllers/pagoControllers';

class PagoRoutes{
    public router: Router=Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', pagoController.list);
        this.router.get('/:IDPago',pagoController.getOne);
        this.router.post('/',pagoController.create);
        this.router.put('/:IDPago', pagoController.update);
        this.router.delete('/:IDPago', pagoController.delete);
    }
}

const pagoRoutes = new PagoRoutes();
export default pagoRoutes.router;

