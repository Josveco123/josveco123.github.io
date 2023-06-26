const { Users, Datos } = require('../modelos/db.Schema');

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


async function grabarHistorico(datosH) {
  const  historico = {
    email:datosH.correoC,
    producto: datosH.productoC,
    fecha: datosH.fechaC,
  }

  try {
     if (historico) {
      const nuevoDato = new Datos(historico);
      const resultado = await nuevoDato.save();
      return resultado;
    } else {
      const resultado="null"
      return resultado;
    }
  } catch (error) {
    return error;
  }
}


module.exports = { grabarDb, grabarHistorico };