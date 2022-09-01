"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var cors = require('cors');
var usuario_routes_1 = require("./routes/usuario.routes");
var rol_routes_1 = require("./routes/rol.routes");
var permiso_routes_1 = require("./routes/permiso.routes");
var autenticacion_routes_1 = require("./routes/autenticacion.routes");
var materiaPrima_routes_1 = require("./routes/materiaPrima.routes");
var mueble_routes_1 = require("./routes/mueble.routes");
var venta_routes_1 = require("./routes/venta.routes");
var app = (0, express_1["default"])();
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(body_parser_1["default"].urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(body_parser_1["default"].json());
var PORT = 3000;
app.get('/ping', function (_req, res) {
    console.log('Api funcionando ya');
    res.send('ping yari dd');
});
app.use('/usuario', usuario_routes_1["default"]);
app.use('/rol', rol_routes_1["default"]);
app.use('/permiso', permiso_routes_1["default"]);
app.use('/autenticacion', autenticacion_routes_1["default"]);
app.use('/materiaPrima', materiaPrima_routes_1["default"]);
app.use('/mueble', mueble_routes_1["default"]);
app.use('/venta', venta_routes_1["default"]);
app.listen(PORT, function () {
    console.log("El servidor esta en el puerto ".concat(PORT));
});
