"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const vehiculoRoutes_1 = __importDefault(require("./routes/vehiculoRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const pagoRoutes_1 = __importDefault(require("./routes/pagoRoutes"));
const wspRoutes_1 = __importDefault(require("./routes/wspRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/vehiculos', vehiculoRoutes_1.default);
        this.app.use('/api/usuario', usuarioRoutes_1.default);
        this.app.use('/api/login', loginRoutes_1.default);
        this.app.use('/api/pago', pagoRoutes_1.default);
        this.app.use('/api/whatsapp', wspRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on Port", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
