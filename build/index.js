"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
var cors = require('cors');
const usuario_routes_1 = __importDefault(require("./routes/usuario.routes"));
const rol_routes_1 = __importDefault(require("./routes/rol.routes"));
const permiso_routes_1 = __importDefault(require("./routes/permiso.routes"));
const autenticacion_routes_1 = __importDefault(require("./routes/autenticacion.routes"));
const materiaPrima_routes_1 = __importDefault(require("./routes/materiaPrima.routes"));
const mueble_routes_1 = __importDefault(require("./routes/mueble.routes"));
const venta_routes_1 = __importDefault(require("./routes/venta.routes"));
const app = (0, express_1.default)();
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(body_parser_1.default.json());
const PORT = process.env.PORT || 3050;
app.get('/ping', (_req, res) => {
    console.log('Api funcionando ya');
    res.send('ping yari dd');
});
app.use('/usuario', usuario_routes_1.default);
app.use('/rol', rol_routes_1.default);
app.use('/permiso', permiso_routes_1.default);
app.use('/autenticacion', autenticacion_routes_1.default);
app.use('/materiaPrima', materiaPrima_routes_1.default);
app.use('/mueble', mueble_routes_1.default);
app.use('/venta', venta_routes_1.default);
app.listen(PORT, () => {
    console.log(`El servidor esta en el puerto ${PORT}`);
});
