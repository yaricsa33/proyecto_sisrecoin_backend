const express = require("express");

//GET para consultas -> se le puede enviar informacion por url
//POST para agregar o actualizar -> se le envia informacion en el body
//delete para eliminar

const puerto = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/list/personas', (peticion, respuesta) => {
  console.log(peticion.query.id);
  let persona = {
    id: peticion.query.id
  }
  respuesta.json(persona);
});



// Una vez definidas nuestras rutas podemos iniciar el servidor
app.listen(puerto, err => {
    if (err) {
        // Aquí manejar el error
        console.error("Error escuchando: ", err);
        return;
    }
    // Si no se detuvo arriba con el return, entonces todo va bien ;)
    console.log(`Escuchando en el puerto :${puerto}`);
});