const Datos = require('../modelos/db.Schema');

async function buscarDb(correo, clave) {
  try {
    const usuarioCorreo = await Datos.findOne({ email: correo }).select('email').exec();
    const usuarioClave = await Datos.findOne({ clave: clave }).select('clave').exec();

    const datosS = { correo: usuarioCorreo ? usuarioCorreo.email : null, clave: usuarioClave ? usuarioClave.clave : null };
    console.log(usuarioCorreo ? usuarioCorreo.email : null);
    console.log(usuarioClave ? usuarioClave.clave : null);
    return datosS;

  } catch (error) {
    console.error('Error al consultar el usuario:', error);
    throw error;
  }
}

module.exports = { buscarDb };