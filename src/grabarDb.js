const { Users } = require('../modelos/db.Schema');

async function grabarDb(UsersI) {
  const UsersUsuario = {
    email: UsersI.correo,
    clave: UsersI.clave,
    whatsapp:UsersI.whatsapp,
    razonSocial: UsersI.razonSocial,
    ciudad: UsersI.ciudad,
  }

  try {
    let result = await Users.findOne({ email: UsersUsuario.email }).exec();

    if (result) {
      return result;
    } else {
      const nuevoDato = new Users(UsersUsuario);
      const resultado = await nuevoDato.save();
      result = null
      return result;
    }
  } catch (error) {
    return error;
  }
}

module.exports = { grabarDb };