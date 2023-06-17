const Users = require('../modelos/db.Schema');

async function buscarDb(correo, clave) {
  try {
    const usuarioCorreo = await Users.findOne({ email: correo }).select('email').exec();
    const usuarioClave = await Users.findOne({ clave: clave }).select('clave').exec();

    const UsersS = { correo: usuarioCorreo ? usuarioCorreo.email : null, clave: usuarioClave ? usuarioClave.clave : null };
    console.log(usuarioCorreo ? usuarioCorreo.email : null);
    console.log(usuarioClave ? usuarioClave.clave : null);
    return UsersS;

  } catch (error) {
    console.error('Error al consultar el usuario:', error);
    throw error;
  }
}

module.exports = { buscarDb };