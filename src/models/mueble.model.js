"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.eliminarMueblePorId = exports.actualizarMueble = exports.insertarMuebleMateriaPrima = exports.insertarMuebleUsuario = exports.insertarMuebleListados = exports.insertarMueble = exports.buscarMateriasPrimasAsignadosMueble = exports.buscarUsuariosAsignadosMueble = exports.buscarMueblePorId = exports.buscarMueble = void 0;
var db_config_1 = require("./db.config");
var buscarMueble = function () {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("Select * from mueble", function (err, res) {
            var response = {};
            if (err) {
                response = __assign(__assign({}, response), { error: 400, mensaje: 'error' });
                reject(response);
            }
            else {
                response = { data: res, error: 200, mensaje: 'exito' };
                resolve(response);
            }
        });
    });
};
exports.buscarMueble = buscarMueble;
var buscarMueblePorId = function (id) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("Select * from mueble where idMueble =".concat(id), function (err, res) {
            var response = {};
            if (err) {
                response = __assign(__assign({}, response), { error: 400, mensaje: 'error' });
                reject(response);
            }
            else {
                response = { data: res[0], error: 200, mensaje: 'exito' };
                resolve(response);
            }
        });
    });
};
exports.buscarMueblePorId = buscarMueblePorId;
var buscarUsuariosAsignadosMueble = function (id) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("\n      select u.idUsuario,u.nombres, u.apellidos,r.nombre as nombreRol,mu.valor \n      from muebleusuario mu \n      inner join usuario u  on u.idUsuario = mu.idUsuario\n      inner join rol r on r.idRol = u.idRol\n      where mu.idMueble = ".concat(id), function (err, res) {
            var response = {};
            if (err) {
                response = __assign(__assign({}, response), { error: 400, mensaje: 'error' });
                reject(response);
            }
            else {
                response = { data: res, error: 200, mensaje: 'exito' };
                resolve(response);
            }
        });
    });
};
exports.buscarUsuariosAsignadosMueble = buscarUsuariosAsignadosMueble;
var buscarMateriasPrimasAsignadosMueble = function (id) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("\n      SELECT  mp.idMateriaPrima,mp.nombre,mp.valor,mp.unidades,mmp.unidades as unidadesDisponibles\n      FROM materiaprima mp \n      inner join mueblemateriaprima mmp on mp.idMateriaPrima = mmp.idMateriaPrima\n      where mmp.idMueble = ".concat(id), function (err, res) {
            var response = {};
            if (err) {
                response = __assign(__assign({}, response), { error: 400, mensaje: 'error' });
                reject(response);
            }
            else {
                response = { data: res, error: 200, mensaje: 'exito' };
                resolve(response);
            }
        });
    });
};
exports.buscarMateriasPrimasAsignadosMueble = buscarMateriasPrimasAsignadosMueble;
var insertarMueble = function (mueble) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("call insertmueble(\n      '".concat(mueble.nombre, "',\n      '").concat(mueble.descripcion, "',\n      '").concat(mueble.nombreCliente, "',\n      ").concat(mueble.costoMateriaPrima, ",\n      '").concat(mueble.fechaEstimadaEntrega, "',\n      ").concat(mueble.tipo, ",\n      '").concat(mueble.fechaFabricacion, "',\n      ").concat(mueble.estado, ",\n      ").concat(mueble.idUsuario, "\n    )"), function (err, res) {
            var response = {};
            if (err) {
                response = __assign(__assign({}, response), { error: 400, mensaje: 'error' });
                reject(response);
            }
            else {
                response = { data: res[0][0], error: 200, mensaje: 'exito' };
                resolve(response);
            }
        });
    });
};
exports.insertarMueble = insertarMueble;
var insertarMuebleListados = function (listados) {
    return new Promise(function (resolve, _reject) { return __awaiter(void 0, void 0, void 0, function () {
        var i, i, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < listados.usuarios.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, (0, exports.insertarMuebleUsuario)(listados.usuarios[i], listados.idMueble)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    i = 0;
                    _a.label = 5;
                case 5:
                    if (!(i < listados.materiaPrima.length)) return [3 /*break*/, 8];
                    return [4 /*yield*/, (0, exports.insertarMuebleMateriaPrima)(listados.materiaPrima[i], listados.idMueble)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 5];
                case 8:
                    response = {};
                    response = { data: null, error: 200, mensaje: 'exito' };
                    resolve(response);
                    return [2 /*return*/];
            }
        });
    }); });
};
exports.insertarMuebleListados = insertarMuebleListados;
var insertarMuebleUsuario = function (muebleUsuario, idMueble) {
    db_config_1["default"].query("call insertMuebleUsuario(\n    ".concat(idMueble, ",\n    ").concat(muebleUsuario.idUsuario, ",\n    ").concat(muebleUsuario.valor, "\n  )"), function (err, res) {
        console.log('res', res);
        console.log('err', err);
    });
};
exports.insertarMuebleUsuario = insertarMuebleUsuario;
var insertarMuebleMateriaPrima = function (muebleMateriaPrima, idMueble) {
    db_config_1["default"].query("call insertMuebleMateriaPrima(\n      ".concat(idMueble, ",\n      ").concat(muebleMateriaPrima.idMateriaPrima, ",\n      ").concat(muebleMateriaPrima.unidadesDisponibles, "\n    )"), function (_err, res) {
        console.log(res);
    });
};
exports.insertarMuebleMateriaPrima = insertarMuebleMateriaPrima;
var actualizarMueble = function (mueble) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("call updateMueble(\n        ".concat(mueble.idMueble, ",\n        '").concat(mueble.nombre, "',\n        '").concat(mueble.descripcion, "',\n        '").concat(mueble.nombreCliente, "',\n        ").concat(mueble.costoMateriaPrima, ",\n        '").concat(mueble.fechaEstimadaEntrega, "',\n        ").concat(mueble.tipo, "\n      )"), function (err, res) {
            var response = {};
            if (err) {
                response = __assign(__assign({}, response), { error: 400, mensaje: 'error' });
                reject(response);
            }
            else {
                response = { data: res, error: 200, mensaje: 'exito' };
                resolve(response);
            }
        });
    });
};
exports.actualizarMueble = actualizarMueble;
var eliminarMueblePorId = function (id) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("call deleteMueble (".concat(id, ") "), function (err, res) {
            var response = {};
            if (err) {
                response = __assign(__assign({}, response), { error: 400, mensaje: 'error' });
                reject(response);
            }
            else {
                response = { data: res, error: 200, mensaje: 'exito' };
                resolve(response);
            }
        });
    });
};
exports.eliminarMueblePorId = eliminarMueblePorId;
