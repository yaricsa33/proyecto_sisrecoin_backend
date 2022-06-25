import express from 'express';
import bodyParser from 'body-parser';
var cors = require('cors')



import usuarioRouter from './routes/usuario.routes'
import rolRouter from './routes/rol.routes'
import permisoRouter from './routes/permiso.routes'
import authRouter from './routes/autenticacion.routes'
import materiaPrimaRouter from './routes/materiaPrima.routes'
import muebleRouter from './routes/mueble.routes'
import ventaRouter from './routes/venta.routes'




const app = express();

app.use(cors())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('Api funcionando ya');
  res.send('ping yari dd');
});

app.use('/usuario', usuarioRouter);
app.use('/rol', rolRouter);
app.use('/permiso', permisoRouter)
app.use('/autenticacion', authRouter)
app.use('/materiaPrima', materiaPrimaRouter)
app.use('/mueble', muebleRouter)
app.use('/venta', ventaRouter);


app.listen(PORT, () => {
  console.log(`El servidor esta en el puerto ${PORT}`)
});