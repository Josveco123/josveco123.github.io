const Datos = require('../modelos/db.Schema');

async function grabarDb(datosI) {
  const datosUsuario = {
    email: datosI.correo,
    clave: datosI.clave,
    razonSocial: datosI.razonSocial,
    ciudad: datosI.ciudad,
  }

  try {
    let result = await Datos.findOne({ email: datosUsuario.email }).exec();

    if (result) {
      return result;
    } else {
      const nuevoDato = new Datos(datosUsuario);
      const resultado = await nuevoDato.save();
      result = null
      return result;
    }
  } catch (error) {
    return error;
  }
}

module.exports = { grabarDb };