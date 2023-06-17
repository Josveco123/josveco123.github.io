const mongoose = require('mongoose');

async function  conexionDb() {
  await mongoose.connect('mongodb+srv://Jvergara123:1234@cluster0.iukzc4w.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true // Asegúrate de proporcionar un valor válido aquí
  })
  .then(() => {
    console.log('Conexión exitosa a la base de Users');
  })
  .catch(error => {
    console.error('Error al conectar a la base de datos Users:', error);
  });
}

module.exports = conexionDb;