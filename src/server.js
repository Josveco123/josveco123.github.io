const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const conexionDb = require('./conexionDb.js');
const { grabarDb }= require('./grabarDb.js');
const { datosDb } = require('./datosDb.js');
const app = express();
const port = 3000;

conexionDb();
// Middleware para analizar el cuerpo de las solicitudes HTTP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/images', express.static(path.join(__dirname, '..', 'images')));
app.use('/src', express.static(path.join(__dirname, '..', 'src')));

// Ruta de ejemplo
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, '..', 'public', 'index.html');
  res.sendFile(indexPath);
});

app.post('/grabar', async (req, res) => {
  const datoD = req.body; 
  try {
    const resultado = await datosDb(datoD);
    console.log('resultados de las acciones sobre datosDb = ' + resultado + ' - hora: ' + new Date().toLocaleTimeString());
    res.json({ mensaje: resultado });
  } catch (error) {
    console.error('Error al ejecutar datosDb:', error);
    res.status(500).json({ mensaje: 'Error al ejecutar datosDb' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});