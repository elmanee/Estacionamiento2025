import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import vehiculoRoutes from './routes/vehiculoRoutes';
import morgan from 'morgan';
import cors from 'cors';
import usuarioRoutes from './routes/usuarioRoutes';
import loginRoutes from './routes/loginRoutes';
import pagoRoutes from './routes/pagoRoutes';
import whatsappRoutes from './routes/wspRoutes';

class Server{
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }


    config():void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    routes():void{
        this.app.use(indexRoutes);
        this.app.use('/', indexRoutes)
        this.app.use('/api/vehiculos',vehiculoRoutes)
        this.app.use('/api/usuario',usuarioRoutes)
        this.app.use('/api/login',loginRoutes)
        this.app.use('/api/pago', pagoRoutes);
        this.app.use('/api/whatsapp', whatsappRoutes);
        
    }
    start():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log("Server on Port",this.app.get('port'))

        });
    }

}
const server = new Server();
server.start();