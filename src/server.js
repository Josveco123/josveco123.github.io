const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const conexionDb = require('./conexionDb.js');
const { grabarDb, grabarHistorico }= require('./grabarDb.js');
const { buscarDb }= require('./buscarDb.js');
const app = express();
app.set('port', process.env.PORT || 3000);

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
app.post('/grabar', async (req, res) => {
  const datoD = req.body; 
  try {
    const resultado = await grabarDb(datoD);
    console.log('resultados = ' + (resultado ?? 'null') + ' - hora: ' + new Date().toLocaleTimeString());
    res.json({ mensaje: resultado });
  } catch (error) {
    console.error('Error al ejecutar grabarDb:', error);
    res.status(500).json({ mensaje: 'Error al ejecutar datosDb' });
  }
});
/*

ruta de buscar correo si existe
*/

app.get('/buscar', async (req, res) => {
    const { correo, clave } = req.query; 
    try {
    const resultado = await buscarDb(correo, clave);
  // Perform the necessary operations based on correo and clave
  console.log('resultados = ' + (resultado ?? 'null') + ' - hora: ' + new Date().toLocaleTimeString());
  res.json({ mensaje: resultado });
  // Assuming you have a result object containing the desired data
} catch (error) {
  console.error('Error al ejecutar datosDb:', error);
  res.status(500).json({ mensaje: 'Error al ejecutar datosDb' });
}
  });

  app.post('/datos', async (req, res) => {
    const datosC = req.body; 
    try {
      const resultado = await grabarHistorico(datosC);
      console.log('resultados = ' + (resultado ?? 'null') + ' - hora: ' + new Date().toLocaleTimeString());
      res.json({ mensaje: resultado });
    } catch (error) {
      console.error('Error al ejecutar grabarDb:', error);
      res.status(500).json({ mensaje: 'Error al ejecutar datosDb' });
    }
  });

// Iniciar el servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor iniciado en http://localhost:${app.get('port')}`);
});