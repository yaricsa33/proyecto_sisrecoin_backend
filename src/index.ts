import express from "express";
import bodyParser from "body-parser";
var cors = require("cors");

import usuarioRouter from "./routes/usuario.routes";
import rolRouter from "./routes/rol.routes";
import permisoRouter from "./routes/permiso.routes";
import authRouter from "./routes/autenticacion.routes";
import materiaPrimaRouter from "./routes/materiaPrima.routes";
import muebleRouter from "./routes/mueble.routes";
import ventaRouter from "./routes/venta.routes";
import dashboardRouter from "./routes/dashboard.routes";

const app = express();

app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

const PORT = process.env.PORT || 3050;

app.get("/ping", (_req, res) => {
  console.log("Api funcionando ya");
  res.send("ping yari dd");
});

app.use("/usuario", usuarioRouter);
app.use("/rol", rolRouter);
app.use("/permiso", permisoRouter);
app.use("/autenticacion", authRouter);
app.use("/materiaPrima", materiaPrimaRouter);
app.use("/mueble", muebleRouter);
app.use("/venta", ventaRouter);
app.use("/dashboard", dashboardRouter);

app.listen(PORT, () => {
  console.log(`El servidor esta en el puerto ${PORT}`);
});
