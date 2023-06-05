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
      console.log(response);
      if (response.ok) {
        return response.json();
      }

      throw new Error("Error de respuesta HTTP");
    })
    .then(function (data) {
      console.log(data);
      if (data !== null) {
        if (data.mensaje === true) {
          alert("Ya existe este email en la base de datos. Use otro email");
        } else {
          var btnAceptar = document.getElementById("bienvenida");
          btnAceptar.style.visibility = "visible";
        }
      }
    })
    .catch(function (error) {
      console.error("Error:", error);
      alert(error);
    });
}
