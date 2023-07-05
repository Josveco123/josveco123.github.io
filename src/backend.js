/**
 * 
 * Programa de acceso al server
 * 
 */

async function GETregistro() {
  const correo = document.getElementById("correo").value;
  const clave = document.getElementById("clave").value;

  // Validar correo
  const cadena = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const esValido = cadena.test(correo);
  if (!esValido) {
    mostrar("Correo no cumple las condiciones", "NADA");
    return;
  }

  // Validar clave
  if (clave.trim().length < 4) {
    mostrar("La clave tiene menos de 4 caracteres", "NADA");
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
        mostrar("No se registra ese correo", "NADA")
        return;
      }
      if (mensajeClave === null) {
        mostrar('la clave no es valida', 'NADA')
        return;
      } else {
        sessionStorage.setItem("correo", mensajeCorreo);
        return pagProductos()
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
  const whatsapp = document.getElementById("whatsapp").value;
  const razonSocial = document.getElementById("razonSocial").value;
  const ciudad = document.getElementById("ciudad").value;
  const datosI = {
    correo: correo,
    clave: clave,
    whatsapp: whatsapp,
    razonSocial: razonSocial,
    ciudad: ciudad,
  };

  // validar correo
  const cadena = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const esValido = cadena.test(correo);
  if (!esValido) {
    mostrar("Correo no cumple Las condiciones", "NADA");
    return;
  }

  // validar clave

  if (clave.trim().length < 4) {
    mostrar("La clave tiene menos de 4 caracteres", "NADA");
    return;
  }
  if (whatsapp.trim().length < 9) {
    mostrar("El numero tiene menos de 10 digito", "NADA");
    return;
  }

  // validar razonSocial
  if (razonSocial.trim().length < 1) {
    mostrar("La Razon Social no se ha definido", "NADA");
    return;
  }
  // validar ciudad
  if (ciudad.trim().length < 4) {
    mostrar("La  ciudad no es valida", "NADA");
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
      if ((data.mensaje?.email ?? null) !== null) {
        const Correo = data.mensaje?.email ?? null;
        mostrar('Ya existe un email, trate con otro', 'NADA');
      } else {
        sessionStorage.setItem('correo', correo)
        mostrar('Proceso existoso, continue', 'POST');
      }

    })
    .catch(function (error) {
      console.error("Error:", error);
      alert(error);
    });
  return
}
/**
 *funcion llamr proceso de consulta consumidor de pagina 
 *
 */

function fichaTecnica(event) {
  var productoC = event.target.id
  POSTfichaTecnica(productoC);
  verFichaTecnica(productoC);
}

/**
 * grabar consulta de visita
 * 
 */


async function POSTfichaTecnica(productoC) {
  var correoU = sessionStorage.getItem("correo");
  // para tomar fecha y hora colombiana
  var options = {
    timeZone: 'America/Bogota',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  var fechaActual = new Date().toLocaleString('es-CO', options);
  const datosConsulta = {
    correoC: correoU,
    productoC: productoC,
    fechaC: fechaActual,
  }
  const url = "/datos";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datosConsulta),
  })
    .then(function (response) {
      return response.json(); // Obtener los datos JSON de la respuesta
    })
    .then(function (data) {
      if ((data.mensaje?.email ?? null) !== null) {
        //mostrar('Grabacion exitosa', 'NADA');
      } else {
        //  mostrar('Error al grabar', 'POST');
      }
    })
    .catch(function (error) {
      console.error("Error:", error);
      alert(error);
    });
  return
}

/*

ficha tecnica impresion
*/

async function verFichaTecnica(productoC) {
  const archivoPDF = productoC + ".pdf";
  const url = "./src/print/printPDF.html?archivoPDF=" + encodeURIComponent(archivoPDF);
  window.open(url);
}

// envio del formulario de email-web ===============================================

