/**
 * 
 * Recargar pagina inical
 */

function recargarHome() {
  location.reload();
}
/**
 * 
 * aqui va el codigo para ejecutar busqueda de lupa
 */
function submitForm() {
  var input = document.getElementById('inputBuscar').value.trim();
  if (input !== '') {
    var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(input);
    window.open(searchUrl, '_blank');
  }
}

function expandir() {
  var searchForm = document.getElementById('mnu-search');
  searchForm.classList.remove('collapsed'); // Quitamos la clase 'collapsed'
}

function recojer() {
  var searchForm = document.getElementById('mnu-search');
  searchForm.classList.add('collapsed'); // Agregamos la clase 'collapsed'
}
/**
 * 
 * Este codigo ejecuta el avance de los slider de la primera pagina
 */

var index = 0;
var slides = document
  .getElementsByClassName("slider")[0]
  .getElementsByTagName("img");

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



function contactos() {
  // Obtener referencia al contenedor
  var contacto = document.querySelector("#cajon");

  // Crear un elemento div para contener el fragmento HTML
  contacto.innerHTML = `
  <section id="pagina4">
  <h2 class="tit-nos-pag4">CONTACTOS
  </h2>
  <div id="linea-horizontal4"></div>
  <br />
  <div id="contactoPag">
    <div id="direcciones">
      <h2 class="tit-pag4">INFORMACIÓN POR ZONAS</h2>
      <div id="ContactoCorreos">
        <p>
          <span><strong>SINCELEJO, SUCRE</strong></span><br />
          <span>CELULAR: (+57) 3135120781</span><br />
          <span>E-mail: sincelejo@laboratoriodelcaribe.com</span>
        </p>
        <p>
          <span><strong>BARRANQUILLA, ATLÁNTICO</strong></span><br />
          <span>CELULAR: (+57) 3126873831</span><br />
          <span>E-mail:</span><br />
          <span>barranquilla@laboratoriodelcaribe.com</span><br />
          <span>barranquilla1@laboratoriodelcaribe.com</span>
        </p>
        <p>
          <span><strong>MONTERÍA, CÓRDOBA</strong></span><br />
          <span>CELULAR: (+57) 3126874903</span><br />
          <span>E-mail: monteria@laboratoriodelcaribe.com</span>
        </p>
        <p>
          <span><strong>BUCARAMANGA, SANTANDER</strong></span><br />
          <span>CELULAR: (+57) 3126874922</span><br />
          <span>Email: bucaramanga@laboratoriodelcaribe.com</span>
        </p>
        <p>
          <span><strong>CARTAGENA, BOLIVAR</strong></span><br />
          <span>CELULAR: (+57) 3216987967</span><br />
          <span>E-mail: cartagena@laboratoriodelcaribe.com</span>
        </p>
        <p>
          <span><strong>VALLEDUPAR, CESAR</strong></span><br />
          <span>CELULAR: (+57) 3126703794</span><br />
          <span>E-mail: valledupar@laboratoriodelcaribe.com</span>
        </p>
        <p>
          <span><strong>CÚCUTA, NORTE DE SANTANDER</strong></span><br />
          <span>CELULAR: (+57) 3145247471</span><br />
          <span>E-mail: cucuta@laboratoriodelcaribe.com</span>
        </p>
      </div>
    </div>
    <div id="correos">
      <h2 class="tit-pag4D">Queremos escucharte!</h2>
      <div id="correosPag">
        <form id="formulario-correo" action="procesar_formulario.php" method="POST">
          <label class="label-correo" for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label class="label-correo" for="correo">Correo:</label>
          <input type="email" id="correo" name="correo" required />

          <label class="label-correo" for="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" required />

          <label class="label-correo" for="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4" required></textarea><br /><br />

          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  </div>

  <div id="gogle-map">
    <h2 id="tit-map">laboratorio del Caribe</h2>
    <iframe id="mapa-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1968.8334407712973!2d-75.41080065071586!3d9.274028265514518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5914ed96a19587%3A0x476cf87d89af0f53!2sLABORATORIO%20DEL%20CARIBE!5e0!3m2!1sen!2sco!4v1684946281250!5m2!1sen!2sco"
      width="100%" height="450" style="border: 0" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</section>
`;

  // Insertar el fragmento HTML dentro del contenedor
  document.getElementById("flecha").style.display = "block";
}

/**
 *
 * // comienza importe de pagina NOSOTROS--------------------
 *
 */


async function fNosotros() {
  await functionNosotros();
  document.getElementById("flecha").style.display = "block";
}

function functionNosotros() {
  // Obtener referencia al contenedor
  var nosotros = document.getElementById("cajon");
  nosotros.innerHTML = `
    <section id="pagina2">
      <div id="mnunos">
        <div id="nosotros-I" class="css-pag">
          <h2 id="denosotros" class="tit-nos">ACERCA DE NOSOTROS</h2>
          <br />
          <p>
            <span>
              Laboratorio del Caribe S.A. inició labores en Sincelejo el 20 de
              marzo de 1984. Se obtiene el primer Registro Sanitario para el
              producto comercializado bajo la marca Artrixin iniciándose la
              expansión y posicionamiento en todo el territorio Nacional.
              <br /><br />
              A través de los años Laboratorio del Caribe S.A. ha crecido de
              manera importante en el mercado Nacional, manteniendo una posición
              de liderazgo y prestigio ante el cuerpo médico por la calidad de sus
              productos.
            </span>
            <br /><br />
          </p>
          <div id="cuadrado">
            <span>
              Laboratorio del Caribe S.A., fue certificado con Buenas Prácticas de
              Manufactura en el año 2002, lo que le permitirá en el siglo XXI
              continuar ofreciendo medicamentos de excelente calidad seguros y
              confiables al sistema de salud.
            </span>
          </div>
          <br />
          <br />
          <h2 id="politica-calidad" class="tit-nos">POLÍTICAS DE CALIDAD</h2>
          <br />
          <p>
            <span>Laboratorio del Caribe S.A., es una empresa farmacéutica que está
              en un mejoramiento continuo, ofreciendo productos y servicios
              confiables que cumplan con las normas de Buenas Prácticas de
              Manufactura, para contribuir de esta forma al bienestar de la
              Sociedad.
              <br />
              <br />
              Con ética y responsabilidad ofrecemos al mercado productos de
              excelente calidad, seguros y efectivos, que satisfacen las
              necesidades del cliente, cumpliendo con normas Nacionales e
              Internacionales, y respetando el medio ambiente.
              <br /><br />
              A través de la gestión adecuada de los recursos y el compromiso
              asumido por nuestros colaboradores, Laboratorio del Caribe S.A.,
              genera el nivel de rentabilidad acorde a las expectativas de los
              socios, permitiendo el desarrollo integral de los miembros de
              nuestra organización.
            </span>
          </p>
          <br />
          <h2 id="politica-calidad" class="tit-nos">OBJETIVOS DE CALIDAD.</h2>
          <br />
          <p>
            <span>
              Lograr el cumplimiento de las expectativas del cliente, entregando
              productos a tiempo, efectivos, seguros y confiables para el
              bienestar Social. Optimizar los tiempos de respuesta al cliente.
            </span>
          </p>
          <p>
            <span>
              >Lograr el compromiso de cada uno de nuestros Colaboradores a través
              del mejoramiento Continuo de nuestros recursos.
            </span>
          </p>
          <p>
            <span>
              >Generar excelente rentabilidad con el manejo efectivo de los
              recursos.
            </span>
          </p>
        </div>
        <!-- Inicio segunda columna -->
        <div id="nosotros-D" class="css-pag">
          <h2 id="politica-calidad" class="tit-nos">MISIÓN.</h2>
          <br />
          <p>
            <span>
              Laboratorio del Caribe S.A., es una empresa farmacéutica que tiene
              como misión, comercializar productos de excelente calidad,
              cumpliendo con todas las Normas exigidas por las entidades que nos
              vigilan, respetando el medio ambiente y generando de esta forma
              bienestar a la comunidad.
              <br /><br />
              Laboratorio del Caribe propenderá por el desarrollo integral de sus
              colaboradores al mismo tiempo que satisface las expectativas de sus
              socios.
              <br /><br />
            </span>
          </p>
          <h2 id="politica-calidad" class="tit-nos">VISIÓN.</h2>
          <br />
          <p>
            <span>
              LABORATORIO DEL CARIBE S.A.S. para el año 2030 pretende ser uno de
              los más reconocidos Laboratorios farmacéuticos de Colombia, y estar
              presente en todo el territorio nacional, así como iniciar su
              expansión a centro América ampliando su línea de productos cada año,
              para hacer una contribución a la región, construyendo herramientas
              para ser más competitivos y posicionarse como uno de los principales
              laboratorios farmacéuticos en las regiones donde hace presencia.
            </span>
          </p>
          <br />
          <h2 id="politica-calidad" class="tit-nos">VALORES CORPORATIVOS</h2>
          <br />
          <p>
            <span class="list-container">
              <span><strong>RESPETO:</strong> Aceptamos las decisiones y acciones de
                los clientes internos y externos siendo tolerantes.</span>
              <span><strong>COMPROMISO:</strong> Damos lo máximo de cada uno de
                nosotros con sentido de pertenencia hacia la empresa.</span>
              <span><strong>HONESTIDAD:</strong> Actuamos conforme a los intereses
                comunes y no particulares de acuerdo a la ley y las
                costumbres.</span>
              <span><strong>LEALTAD:</strong> Somos fieles frente a los compromisos y
                objetivos de la empresa.</span>
              <span><strong>RESPONSABILIDAD:</strong> Somos conscientes de nuestras
                actuaciones, cumpliendo cabalmente de forma que se logren los
                objetivos de la empresa.</span>
            </span>
          </p>
          <div id="foto"><img src="/images/foto.png" alt="" /> </div>
        </div>
      </div>
    </section>
  `;
  const mnunos = document.getElementById('mnunos');
  mnunos.style.height = 'auto';
  mnunos.style.display = 'flex';
  mnunos.style.flexDirection = 'row';
  mnunos.style.justifyContent = 'space-between';
}

/**
 *
 *
 *
 *
 */

function producto() {
  var producto = document.querySelector("#cuerpo");
  producto.innerHTML = `
    <div id="contenedor-producto">
      <div id="cont-producto">
        <div id="tit1">
          <h1>Ingresa tu cuenta</h1>
        </div>

        <form id="datos-captura" action="">
          <div id="E-mail" class="datos-correo">
            <p>Email Empresa o Persona</p>
            <input
            id="correo"
            class="correo"
            type="text"
            placeholder="Correo electrónico"
            />
          </div>

          <div id="contraseña" class="datos-correo">
            <p>Contraseña de acceso</p>
            <input
            id="clave"
            class="clave"
            type="text"
             placeholder="Contraseña"
            />
          </div>      
        </form>
        <a id="olvido-clave" href="/index.html">Olvide la contraseña</a>
        <div id="ejecutar">
              <button id="boton-registro" onclick="GETregistro()">
                Verificar
              </button>
              <a id="ocultar" href="/index.html">Exit</a>
            </div>
     </div>
     <div id="bienvenida">
          Bienvenido a Laboratorios del caribe. <br />Su Cuenta Fue creada con
          exito. <br /><br />
          <a href="index.html">Click Continuar</a>
      </div>
    </div>
  `;
}

function registro() {
  var registro = document.querySelector("body");
  registro.innerHTML += `
    <div id="cuerpo">
      <div id="contenedor-contacto">
        <div id="cont-registro">
          <div id="tit1">
              <h1>Ingresa tu cuenta</h1>
          </div>
          <form id="datos-captura" action="">
              <div id="E-mail" class="datos-correo">
                  <p class="pCaptura">Email Empresa o Persona</p>
                  <input id="correo" class="correo" type="text" placeholder="Correo electrónico" />
              </div>
              <div id="contraseña" class="datos-correo">
                  <p class="pCaptura">Contraseña de acceso</p>
                  <input id="clave" class="clave" type="text" placeholder="Contraseña" />
              </div>
              <div id="razon-social" class="datos-correo">
                  <p class="pCaptura">Razon Social de la empresa</p>
                  <input id="razonSocial" class="razonSocial" type="text" placeholder="Razon Social" />
              </div>
              <div id="whatsapp-numero" class="datos-correo">
                  <p class="pCaptura">Whatsapp Numero</p>
                  <input id="whatsapp" class="whatsapp" type="number" placeholder="Whatsapp" />
              </div>
              <div id="Ciudad" class="datos-correo">
                  <p class="pCaptura">Ciudad de residencia</p>
                  <input id="ciudad" class="ciudad" type="text" placeholder="Donde Reside" />
              </div>
          </form>
          <div id="ejecutar">
              <button id="boton-registro" onclick="POSTregistro()">
                  Registrarse
              </button>
               <a id="ocultar" href="/index.html">Exit</a>
          </div>
        </div>
        <p id="bienvenida">
          Bienvenido a Laboratorios del Caribe. <br />Su cuenta ha sido creada
          con éxito. <br /><br />
          <a href="index.html">Continuar</a>
        </p>
        </div>  
      </div>
    </div>
  `;
}
/*
area de programa de alertas
*/

function mostrar(mostrar, valor) {
  var alerta = document.createElement('div');
  alerta.id = 'cuerpo1';

  var mensaje = document.createElement('div');
  mensaje.className = 'cuerpo1-message';
  mensaje.textContent = mostrar;

  var botonCerrar = document.createElement('button');
  botonCerrar.textContent = 'Continuar';
  botonCerrar.onclick = cerrarAlerta.bind(null, mostrar, valor);

  alerta.appendChild(mensaje);
  alerta.appendChild(botonCerrar);

  // Agrega la alerta al cuerpo del documento
  document.body.appendChild(alerta);

  // Muestra la alerta
  alerta.classList.add('show');
}

function cerrarAlerta(parametro1, parametro2) {
  if (parametro2 === 'GET') {

    location.reload(true);
    // termina prueba
  };
  if (parametro2 === 'POST') {
    location.reload()
  }
  var alerta = document.querySelector('#cuerpo1');
  alerta.parentNode.removeChild(alerta);
}