import { Router } from "express";
import {IndexController} from "../controllers/indexControllers";

class IndexRouter{
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', IndexController.index);
    }
}

const indexRoutes = new IndexRouter();
export default indexRoutes.router;
