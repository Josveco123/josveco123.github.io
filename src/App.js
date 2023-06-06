var index = 0;
var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");

function mostrarSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

function siguienteSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  mostrarSlide();
}

function anteriorSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  mostrarSlide();
}

mostrarSlide();



/*
leer el area a copiar para remplazar
*/
function registro() {
  fetch('/registro.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('cuerpo').innerHTML = html;
    });

  window.onload = function () {
    var cuerpo = document.getElementById('cuerpo');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'registro.html', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        cuerpo.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  };
};

function contactos() {
  // Obtener referencia al contenedor
  var contacto = document.querySelector('#areacomun');

  // Crear un elemento div para contener el fragmento HTML
  var htmlFragment = document.createElement('div');
  htmlFragment.innerHTML = `
  <section id="pagina4">
  <h2 class="tit-nos-pag4">CONTACTOS</h2>
  <div id="linea-horizontal4"></div>
  <br />
  <!-- pagina 4.1 -->
  <div id="direcciones">
    <div id="direcciones-I">
      <h2 class="tit-pag4 pag4-I">CUENTAS CORRIENTES</h2>
      <p>
        <span>BANCO DE COLOMBIA</span><br />
        <span>50604761202</span><br />
        <span>BANCO BBVA</span><br />
        <span>826007817 NIT: 892200917-3</span>
      </p>
      <br />
      <h2 class="tit-pag4 pag4-I">LISTA DE PRECIOS 2017</h2>
      <p>
        <span><strong> Descarga aquí</strong></span
        ><br />
      </p>
      <br />
      <h2 class="tit-pag4 pag4-I">FORMATO DE PEDIDO</h2>
      <p>
        <span><strong> Descarga aquí</strong></span
        ><br />
      </p>
    </div>
    <div id="direcciones-D">
      <h2 class="tit-pag4 pag4-D">INFORMACIÓN POR ZONAS</h2>
      <div id="zonaID">
        <div id="zonaI">
          <p>
            <span><strong>SINCELEJO, SUCRE</strong></span
            ><br />
            <span>CELULAR: (+57) 3135120781</span><br />
            <span>E-mail: sincelejo@laboratoriodelcaribe.com</span><br />
          </p>
          <p>
            <span><strong>BARRANQUILLA, ATLÁNTICO</strong></span
            ><br />
            <span>CELULAR: (+57) 3126873831</span><br />
            <span>E-mail:</span><br />
            <span>barranquilla@laboratoriodelcaribe.com</span><br />
            <span>barranquilla1@laboratoriodelcaribe.com</span><br />
          </p>
          <p>
            <span><strong>MONTERÍA, CÓRDOBA</strong></span
            ><br />
            <span>CELULAR: (+57) 3126874903</span><br />
            <span>E-mail: monteria@laboratoriodelcaribe.com</span><br />
          </p>
          <p>
            <span><strong>BUCARAMANGA, SANTANDER</strong></span
            ><br />
            <span>CELULAR: (+57) 3126874922</span><br />
            <span>Email: bucaramanga@laboratoriodelcaribe.com</span><br />
          </p>
        </div>
        <div id="zonaD">
          <p>
            <span><strong>CARTAGENA, BOLIVAR</strong></span
            ><br />
            <span>CELULAR: (+57) 3216987967</span><br />
            <span>E-mail: cartagena@laboratoriodelcaribe.com</span><br />
          </p>
          <p>
            <span><strong>VALLEDUPAR, CESAR</strong></span
            ><br />
            <span>CELULAR: (+57) 3126703794</span><br />
            <span>E-mail: valledupar@laboratoriodelcaribe.com</span><br />
          </p>
          <p>
            <span><strong>CÚCUTA, NORTE DE SANTANDER</strong></span
            ><br />
            <span>CELULAR: (+57) 3145247471</span><br />
            <span>E-mail: cucuta@laboratoriodelcaribe.com</span><br />
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- pagina 4.2 -->
  <div id="correos">
    <div id="correosI">
      <h2 class="tit-pag4">CORREOS DE LA COMPAÑÍA</h2>
      <p>
        administrativo@laboratoriodelcaribe.com
        barranquilla@laboratoriodelcaribe.com
        barranquilla1@laboratoriodelcaribe.com
        barranquilla2@laboratoriodelcaribe.com
        bucaramanga@laboratoriodelcaribe.com
        bucaramanga1@laboratoriodelcaribe.com
        cartagena@laboratoriodelcaribe.com
        comercial@laboratoriodelcaribe.com
        contabilidad@laboratoriodelcaribe.com
        cucuta@laboratoriodelcaribe.com
        direcciontecnica@laboratoriodelcaribe.com
        gerencia@laboratoriodelcaribe.com
        gerenciaventas@laboratoriodelcaribe.com
        monteria@laboratoriodelcaribe.com
        sincelejo@laboratoriodelcaribe.com
        sincelejo1@laboratoriodelcaribe.com
        valledupar@laboratoriodelcaribe.com
        ventas@laboratoriodelcaribe.com comercial@laboratoriodelcaribe.com
      </p>
    </div>
    <div id="correosD">
      <h2 class="tit-pag4D">Queremos escucharte!</h2>

      <form
        id="formulario-correo"
        action="procesar_formulario.php"
        method="POST"
      >
        <label class="label-correo" for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label class="label-correo" for="correo">Correo:</label>
        <input type="email" id="correo" name="correo" required />

        <label class="label-correo" for="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" required />

        <label class="label-correo" for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea
        ><br /><br />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  </div>
  <!-- pagina 4.3 -->
  <div id="gogle-map">
    <h2 id="tit-map">laboratorio del Caribe</h2>
    <iframe
      id="mapa-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1968.8334407712973!2d-75.41080065071586!3d9.274028265514518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5914ed96a19587%3A0x476cf87d89af0f53!2sLABORATORIO%20DEL%20CARIBE!5e0!3m2!1sen!2sco!4v1684946281250!5m2!1sen!2sco"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  </section>
`;

  // Insertar el fragmento HTML dentro del contenedor
  contacto.parentNode.replaceChild(htmlFragment, contacto);
}

