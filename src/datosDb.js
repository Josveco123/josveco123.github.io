
const grabarDb = require('./grabarDb');

async function datosDb (datosI) {
  const datos = {
    email: datosI.correo,
    clave: datosI.clave,
    razonSocial: datosI.razonSocial,
    ciudad: datosI.ciudad,
  };

  return await grabarDb(datos);
}

module.exports = { datosDb };