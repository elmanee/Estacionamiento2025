import {Router} from 'express';
import wspController from '../controllers/wspControllers';

class WspRoutes{
  public router:Router = Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.post('/send-message', wspController.sendMessage);
        
    }
}

const wspRoutes = new WspRoutes();
export default wspRoutes.router;
