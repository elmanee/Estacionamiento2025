import loginController from "../controllers/loginControllers";
import { Router } from "express";

class PdfRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config(): void {

        this.router.post('/', loginController.login);
    }
}

const pdfRoutes = new PdfRoutes();
export default pdfRoutes.router;