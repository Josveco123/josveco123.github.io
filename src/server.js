const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const conexionDb = require('./conexionDb.js');
const app = express();
require('dotenv').config();
// modulo de correo
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//////////////////////
app.set('port', process.env.PORT || 4000);

conexionDb();
// Middleware para analizar el cuerpo de las solicitudes HTTP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/images', express.static(path.join(__dirname, '..', 'images')));
app.use('/src', express.static(path.join(__dirname, '..', 'src')));

// Ruta para iniciar Programa INDEX
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, '..', 'public', 'index.html');
  res.sendFile(indexPath);
});

// ruta para Grabar COrrreo
//
app.use(require('./routes/index'));

// Iniciar el servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor iniciado en http://localhost:${app.get('port')}`);
});