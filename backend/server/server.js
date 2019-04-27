const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const moment = require('moment');
const Sala = require('./models/salaModel');

const app = express();

//CORS Enabled
const originsWhitelist = [
  'http://localhost:4200',  
];
const corsOptions = {
  origin: function(origin, callback){
        const isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}
app.use(cors(corsOptions)); 


//Midleware para parsear el body a JSON
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Rutas 

app.get('/salas', function (req, res) {
  repository = [
    {position: 1, nombre: 'Reunion 1', isReady: false, participantes:null},
    {position: 2, nombre: 'Revision de X proyecto', isReady: false, participantes:null}

  ];
    let respuesta = {'salas': repository};
  res.status(200).json(respuesta);
})

app.post('/salas', function(req, res) {

  let body = req.body;
  let hora = moment().unix();

  let nuevaSala = new Sala({
    titulo:  body.titulo,
    descripcion: body.descripcion,
    usuarios: null,
    isready: false,
    fechaHoraInicio: hora
  });

  if (body.titulo === undefined) {

      res.status(400).json({
          status: 'FAIL',
          mensaje: 'El titulo de la sala es necesario'
      });

  } else {

    nuevaSala.save( (error, salaCreada) => {

      if (error) {
        return res.status(400).json({
          status: 'FAIL',
          mensaje: 'no se pudo crear la sala',
          error: error
      });
      }

      res.status(201).json({
        status: 'OK',
        sala: salaCreada
    });
    });


      
  }

});
 

// Lanzamiento de la aplicacion
mongoose.connect('mongodb://localhost:27017/idukayDB', (error, response)=>{
  console.log('Conexion establecida con la DB');
});

app.listen(3000, ()=>{
    console.log('Server listo puerto 3000');
});