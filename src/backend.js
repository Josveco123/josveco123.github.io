/**
 * 
 * Programa de acceso al server
 * 
 */

async function GETregistro() {
  const correo = document.getElementById("correo").value;
  const clave = document.getElementById("clave").value;

  // Validar correo
  const cadena = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const esValido = cadena.test(correo);
  if (!esValido) {
    alert("Correo no cumple las condiciones");
    return;
  }

  // Validar clave
  if (clave.trim().length < 4) {
    alert("La clave tiene menos de 4 caracteres");
    return;
  }

  const url = `/buscar?correo=${encodeURIComponent(correo)}&clave=${encodeURIComponent(clave)}`;
  await fetch(url, {
    method: "GET"
  })
    .then(function (response) {
      return response.json(); // Obtener los datos JSON de la respuesta
    })
    .then(function (data) {
      const mensajeCorreo = data.mensaje?.correo ?? null;
      const mensajeClave = data.mensaje?.clave ?? null;

      if (mensajeCorreo === null) {
        alert("No se encontró ningún usuario con ese correo");
        return;
      }
      if (mensajeClave === null) {
        mostrar('la clave no es valida', 'NADA')
        return;
      } else {
        localStorage.setItem("correo", mensajeCorreo);
      mostrar(`Valido = ${mensajeCorreo}`, 'GET');
      return;
    }
    })
    .catch(function (error) {
      console.error("Error:", error);
      alert(error);
    });
}

/**
 * 
 * Programa de acceso al server   POST
 * 
 */
async function POSTregistro() {

  const correo = document.getElementById("correo").value;
  const clave = document.getElementById("clave").value;
  const razonSocial = document.getElementById("razonSocial").value;
  const ciudad = document.getElementById("ciudad").value;
  const datosI = {
    correo: correo,
    clave: clave,
    razonSocial: razonSocial,
    ciudad: ciudad,
  };

  // validar correo
  const cadena = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const esValido = cadena.test(correo);
   if (!esValido) {
    alert("Correo no cumple Las condiciones");
    return;
  }

  // validar clave
  
  if (clave.trim().length < 4) {
    alert("La clave tiene menos de 4 caracteres");
    return;
  }

  // validar razonSocial
  if (razonSocial.trim().length  < 1) {
    alert("La Razon Social no se ha definido");
    return;
  }
  // validar ciudad
  if (ciudad.trim().length  < 4) {
    alert("La  ciudad no es valida");
    return;
  }

  const url = "/grabar";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datosI),
  })
  .then(function (response) {
    return response.json(); // Obtener los datos JSON de la respuesta
  })
  .then(function (data) {
    if ((data.mensaje ?? null) !== null) {
      const Correo = data.mensaje?.email ?? null;
      const Clave = data.mensaje?.clave ?? null;
      mostrar('Ya existe un email, trate con otro', 'NADA');
    } else { 
     mostrar('Proceso existoso, continue', 'POST');
    }

  })
  .catch(function (error) {
    console.error("Error:", error);
    alert(error);
  });
  return
}
