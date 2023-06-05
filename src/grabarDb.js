const Datos = require('../modelos/db.Schema');

async function grabarDb(datos) {
  const email = datos.email;

  try {
    const result = await Datos.findOne({ email }).exec();

    if (result) {
      const resultado=true;
      return resultado;
    } else {
      const nuevoDato = new Datos(datos);
      const Resultado = await nuevoDato.save();
      return Resultado;
    }
  } catch (error) {
    return error;
  }
}

module.exports = grabarDb;