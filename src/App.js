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


function contactos() {
  document.getElementById('inicio').style.display = "block";
  // Obtener referencia al contenedor
  var contacto = document.getElementById("cajon");
  contacto.innerHTML = `
  <section id="pag-contactos">
  <div id="nombre-contacto"> CONTACTOS</div>
<div class="figura0"></div>
<div class="figura1">
  <div id="contactos-p">
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
  <div id="form-correo">
      <div id="correos">
          <h2 class="tit-pag4D">Queremos escucharte!</h2>
          <div id="correosPag">
              <form id="formulario-correo">
                  <label class="label-correo" for="nombre">Nombre:</label>
                  <input type="text" id="nombre" name="name" required />

                  <label class="label-correo" for="correo">Correo:</label>
                  <input type="email" id="correo" name="email" required />

                  <label class="label-correo" for="telefono">Teléfono:</label>
                  <input type="text" id="telefono" name="phone" required />

                  <label class="label-correo" for="mensaje">Mensaje:</label>
                  <textarea id="mensaje" name="message" rows="4" required></textarea><br />
                  <button id="enviar-btn" class="enviar" name="submit" type="submit">Enviar</button><br />
              </form>
          </div>
      </div>
  </div>
</div>
</section>
`;
  const form = document.getElementById('formulario-correo');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value
    };

    fetch('/email-web', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        form.reset();
        mostrar('Su mensaje fue enviado con exito. Gracias.', 'NADA');
      })
      .catch(function (error) {
        console.error(error);
      });
  });
}

/**
 *
 * // comienza importe de pagina NOSOTROS--------------------
 *
 */


async function fNosotros() {
  await functionNosotros();
}

function functionNosotros() {
  document.getElementById('inicio').style.display = "block";
  // Obtener referencia al contenedor
  var nosotros = document.getElementById("cajon");
  nosotros.innerHTML = `
  <section id="pag-nosotros">
  <div id="figuraN">
    <div id="figura1">
      <span> ACERCA DE NOSOTROS </span>
    </div>
    <div id="linea1nosotros"></div>
  </div>

  <div id="nosotros">
    <div class="nos">
      <div id="nos11" class="nosT">
        <h2 id="denosotros" class="tit-nos">Reseña historica.</h2>
        <br />
      </div>
      <div id="nos12" class="nosC">
        <p>
          <span>
            Laboratorio del caribe S.A.S. inició labores en Sincelejo el 20 de
            marzo de 1984. Se obtiene el primer Registro Sanitario para el
            producto comercializado bajo la marca Artrixin iniciándose la
            expansión y posicionamiento en todo el territorio Nacional.
            <br />
            A través de los años Laboratorio del Caribe S.A.S. ha crecido de
            manera importante en el mercado Nacional, manteniendo una posición
            de liderazgo y prestigio ante el cuerpo médico por la calidad de sus
            productos.
            <br />  <br />
          Laboratorio del Caribe S.A.S., fue certificado con Buenas Prácticas de
          Manufactura en el año 2002, lo que le permitirá en el siglo XXI
          continuar ofreciendo medicamentos de excelente calidad seguros y
          confiables al sistema de salud.
          </span>
        </p>
      </div>
    </div>
    <div class="nos">
      <div id="nos21" class="nosT">
        <h2 id="politica-calidad" class="tit-nos">Politícas de la calidad.</h2>
        <br />
      </div>
      <div id="nos22" class="nosC">
        <p>
          <span>Laboratorio del Caribe S.A.S., es una empresa farmacéutica que está
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
      </div>
    </div>
    <div class="nos">
      <div id="nos31" class="nosT">
        <h2 id="politica-calidad" class="tit-nos">Objetivo de la calidad.</h2>
        <br />
      </div>
      <div id="nos32" class="nosC">
        <p>
          <span>
            Lograr el cumplimiento de las expectativas del cliente, entregando
            productos a tiempo, efectivos, seguros y confiables para el
            bienestar Social. Optimizar los tiempos de respuesta al cliente.
          </span>
        </p>
        <p>• Lograr el compromiso de cada uno de nuestros Colaboradores a través
          del mejoramiento Continuo de nuestros recursos.
        </p>
        <p>• Generar excelente rentabilidad con el manejo efectivo de los
          recursos.
        </p>
      </div>
    </div>
    <div class="nos">
      <div id="nos41" class="nosT">
        <h2 id="politica-calidad" class="tit-nos">Misión.</h2>
        <br />
      </div>
      <div id="nos42" class="nosC">
        <p>
          <span>
            Laboratorio del Caribe S.A.S., es una empresa farmacéutica que tiene
            como misión, comercializar productos de excelente calidad,
            cumpliendo con todas las Normas exigidas por las entidades que nos
            vigilan, respetando el medio ambiente y generando de esta forma
            bienestar a la comunidad.
            <br /><br />
            Laboratorio del Caribe S.A.S. propenderá por el desarrollo integral de sus
            colaboradores al mismo tiempo que satisface las expectativas de sus
            socios.
            <br /><br />
          </span>
        </p>
      </div>
    </div>
    <div class="nos">
      <div id="nos51" class="nosT">
        <h2 id="politica-calidad" class="tit-nos">Visión.</h2>
        <br />
      </div>
      <div id="nos52" class="nosC">
        <p>
          <span>
            Laboratorios del Caribe S.A.S. para el año 2030 pretende ser uno de
            los más reconocidos Laboratorios farmacéuticos de Colombia, y estar
            presente en todo el territorio nacional, así como iniciar su
            expansión a centro América ampliando su línea de productos cada año,
            para hacer una contribución a la región, construyendo herramientas
            para ser más competitivos y posicionarse como uno de los principales
            laboratorios farmacéuticos en las regiones donde hace presencia.
          </span>
        </p>
        <br />
      </div>
    </div>
    <div class="nos">
      <div id="nos61" class="nosT">
        <h2 id="politica-calidad" class="tit-nos">Valores corporativos.</h2>
        <br />
      </div>
      <div id="nos62" class="nosC">
        <p>
          <span class="list-container">
            <span><strong>Respeto:</strong> Aceptamos las decisiones y acciones de
              los clientes internos y externos siendo tolerantes.</span>         <br />        <br />
            <span><strong>Compromiso:</strong> Damos lo máximo de cada uno de
              nosotros con sentido de pertenencia hacia la empresa.</span> <br>        <br />
            <span><strong>Honestidad:</strong> Actuamos conforme a los intereses
              comunes y no particulares de acuerdo a la ley y las
              costumbres.</span>         <br />        <br />
            <span><strong>Lealtad:</strong> Somos fieles frente a los compromisos y
              objetivos de la empresa.</span>         <br />        <br />
            <span><strong>Responsabilidad:</strong> Somos conscientes de nuestras
              actuaciones, cumpliendo cabalmente de forma que se logren los
              objetivos de la empresa.</span>
          </span>
        </p>
      </div>
    </div>
  </div>
  </div>
</section>
  `;
}

/**
 *
 *
 * funcion producto oermite registrarte si no estas registrado
 *
 */

function producto() {
  document.getElementById('inicio').style.display = "block";
  var valorCorreo = sessionStorage.getItem("correo");
  if (valorCorreo === null) {
    var producto = document.querySelector("#cuerpo");
    producto.style.display = "block"
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
        <a id="olvido-clave" onClick="buscarClave()" href="#">Olvide la contraseña</a>
        <div id="ejecutar">
              <button id="boton-registro" onclick="GETregistro()">
                Verificar
              </button>
              <a id="ocultar" href="/index.html">Exit</a>
            </div>
     </div>
    </div>
  `;
  } else {
    return pagProductos()
  }
}
/**
 * Buscar clave Olvidada con el correo 
 * 
 */

function buscarClave() {
  document.getElementById('contraseña').style.display = 'none';

  const olvido = document.getElementById('boton-registro');
  olvido.innerText = "Enviar Email";
  olvido.onclick = enviarCorreo;

  const clave = document.getElementById('olvido-clave');
  clave.style.marginLeft = '32px';
  clave.style.marginTop = '-80px';
  clave.style.width = '83%';
  clave.style.height = '80px';
  clave.innerText = "Verifica que el email registrado este en el recuadro y procede a enviar email para que te llegue la calve registrada al correo registrado";
}

// fun cion para enviar correo olvidado
//
async function enviarCorreo() {
  const correoEntrada = document.getElementById('correo');
  const correo = correoEntrada.value;
  const Data = {
    email: correo,
    clave: "",
  };

  try {
    const response = await fetch('/email_clave', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Data)
    });

    const data = await response.json();
    if (data.message === null) {
      mostrar('Correo no registra en la base de datos', 'NADA')
      return
    } else {
      mostrar('Su clave fue enviada al correo. Revíselo e intente de nuevo', 'NADA')
    }
  } catch (error) {
    console.error(error);
    return
  }
  var producto = document.querySelector("#cuerpo");
  producto.style.display = "block"
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
      <a id="olvido-clave" onClick="buscarClave()" href="#">Olvide la contraseña</a>
      <div id="ejecutar">
            <button id="boton-registro" onclick="GETregistro()">
              Verificar
            </button>
            <a id="ocultar" href="/index.html">Exit</a>
          </div>
   </div>
  </div>
`;
}



/*
area de creacion de usuarios registrarse
*/

function registro() {
  document.getElementById('inicio').style.display = "block";
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
/**
 * 
 * area programa pagina productos
 * 
 * 
 */
function pagProductos() {
  document.getElementById('inicio').style.display = "block";
  document.getElementById("cuerpo").innerHTML = ""
  // Obtener referencia al contenedor
  var pProductos = document.getElementById("cajon");
  pProductos.innerHTML = `
  <div id="cabezaProducto">
    <div id="cabeza">PRODUCTOS</div>
    <div class="cajonProducto">

      <!-- 
            1  titulos> 
     -->
    
             <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="/images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="/images/favorite.png" alt="" />
        </div>
        <div class="imageProducto">
          <img src="/images/productos/producto1.png" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                  Artrixin gel 
          </span>
          <span class="presentacion">
                  Display x 25 sobres x 12g
          </span>
          <span class="contenido">
                  “Para inflamación y dolor Artrixin gel es lo mejor”
          </span>
          <button id="artrixin25" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>
      <!--        
          2
      -->
      <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="/images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="/images/favorite.png" alt="" />
        </div>
        <!-- titulos>  -->
        <div class="imageProducto">
          <img src="/images/productos/producto2.jpg" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                Artrixin gel 
          </span>
          <span class="presentacion">
                Tubo x 30g  
          </span>
          <span class="contenido">
                “Para inflamación y dolor Artrixin gel es lo mejor”
          </span>
          <button id="artrixin30" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>
      <!-- 
           3 
            -->
      <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="/images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="/images/favorite.png" alt="" />
        </div>
        <!-- titulos>  -->
        <div class="imageProducto">
          <img src="/images/productos/producto3.jpg" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                Nomante pastillas  
          </span>
          <span class="presentacion">
                Caja x 24 sobres x 4 pastillas 
          </span>
          <span class="contenido">
                “Garganta fresca y despejada Nomante es la indicada”
          </span>
          <button id="nomante" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>
      <!-- 
            4
            -->

      <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="/images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="/images/favorite.png" alt="" />
        </div>
        <!-- titulos>  -->
        <div class="imageProducto">
          <img src="/images/productos/producto4.jpg" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                Aceite de Almendra 
          </span>
          <span class="presentacion">
                Frasco x 30ml  
          </span>
          <span class="contenido">
                “Excelente producto de almendra”
          </span>
          <button id="aceiteAlmendra" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>
      <!-- 
            5
            -->

      <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="/images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="/images/favorite.png" alt="" />
        </div>
        <!-- titulos>  -->
        <div class="imageProducto">
          <img src="/images/productos/producto5.jpg" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                Aceite de Coco
          </span>
          <span class="presentacion">
                Frasco x 30ml  
          </span>
          <span class="contenido">
                “Excelente producto de coco”
          </span>
          <button id="aceiteCoco" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>
      <!-- 
            6
            -->

      <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="/images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="/images/favorite.png" alt="" />
        </div>
        <!-- titulos>  -->
        <div class="imageProducto">
          <img src="/images/productos/producto6.jpg" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                Aceite de Comer
          </span>
          <span class="presentacion">
                Frasco x 30ml  
          </span>
          <span class="contenido">
                “Excelente producto de para la alimentacion”
          </span>
          <button id="aceiteComer" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>

      <!-- 
            7
            -->
      <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="/images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="/images/favorite.png" alt="" />
        </div>
        <!-- titulos>  -->
        <div class="imageProducto">
          <img src="/images/productos/producto7.jpg" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                Acido Borico 
          </span>
          <span class="presentacion">
                Caja x 25 sobres x 10g
          </span>
          <span class="contenido">
                “Excelente producto”
          </span>
          <button id="acidoBorico" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>

      <!-- 
            8
            -->

      <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="/images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="/images/favorite.png" alt="" />
        </div>
        <!-- titulos>  -->
        <div class="imageProducto">
          <img src="/images/productos/producto8.jpg" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                Acido Salicilico
          </span>
          <span class="presentacion">
                Caja x 25 sobres x 7g
          </span>
          <span class="contenido">
                “Excelente producto”
          </span>
          <button id="aceiteSalicilico" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>

      <!-- 
            9
            -->

      <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="/images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="/images/favorite.png" alt="" />
        </div>
        <!-- titulos>  -->
        <div class="imageProducto">
          <img src="/images/productos/producto9.jpg" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                Alcanfor 
          </span>
          <span class="presentacion">
                Caja x 25 sobres x 7g  
          </span>
          <span class="contenido">
                “Excelente producto ”
          </span>
          <button id="Alcanfor" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>
      <!-- 
            10
            -->

            <div class="itemProducto">
              <div class="tituloProducto">
                <img id="imgProducto1" src="/images/medicina.png" alt="" />
                <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <img id="imgProducto2" src="/images/favorite.png" alt="" />
              </div>
              <!-- titulos>  -->
              <div class="imageProducto">
                <img src="/images/productos/producto10.jpg" alt="" />
              </div>
              <!-- imagen  -->
              <div class="info">
              <span class="descripcionPorducto">
                    Alumbre 
              </span>
              <span class="presentacion">
                    Caja x 25 sobres x 20g 
              </span>
              <span class="contenido">
                    “Excelente producto”
              </span>
              <button id="alumbre" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
            </div>
            </div>
      <!-- 
            11
            -->

            <div class="itemProducto">
              <div class="tituloProducto">
                <img id="imgProducto1" src="/images/medicina.png" alt="" />
                <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <img id="imgProducto2" src="/images/favorite.png" alt="" />
              </div>
              <!-- titulos>  -->
              <div class="imageProducto">
                <img src="/images/productos/producto11.jpg" alt="" />
              </div>
              <!-- imagen  -->
              <div class="info">
              <span class="descripcionPorducto">
                    Azucar de leche 
              </span>
              <span class="presentacion">
                    Caja x 25 sobres x 10g
              </span>
              <span class="contenido">
                    “Excelente producto”
              </span>
              <button id="aceiteAlmendra" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
            </div>
            </div>
      <!-- 
            12
            -->

            <div class="itemProducto">
              <div class="tituloProducto">
                <img id="imgProducto1" src="/images/medicina.png" alt="" />
                <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <img id="imgProducto2" src="/images/favorite.png" alt="" />
              </div>
              <!-- titulos>  -->
              <div class="imageProducto">
                <img src="/images/productos/producto12.jpg" alt="" />
              </div>
              <!-- imagen  -->
              <div class="info">
              <span class="descripcionPorducto">
                    Bicarbonato de sodio 
              </span>
              <span class="presentacion">
                    Caja x 25 sobres x 20g
              </span>
              <span class="contenido">
                    “Excelente producto”
              </span>
              <button id="bicarbonato" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
            </div>
            </div>
      <!-- 
            13
            -->

            <div class="itemProducto">
              <div class="tituloProducto">
                <img id="imgProducto1" src="/images/medicina.png" alt="" />
                <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <img id="imgProducto2" src="/images/favorite.png" alt="" />
              </div>
              <!-- titulos>  -->
              <div class="imageProducto">
                <img src="/images/productos/producto13.jpg" alt="" />
              </div>
              <!-- imagen  -->
              <div class="info">
              <span class="descripcionPorducto">
                    Glicerina
              </span>
              <span class="presentacion">
                    Frasco x 30ml  
              </span>
              <span class="contenido">
                    “Excelente producto”
              </span>
              <button id="aceiteAlmendra" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
            </div>
            </div>
      <!-- 
            14
            -->

            <div class="itemProducto">
              <div class="tituloProducto">
                <img id="imgProducto1" src="/images/medicina.png" alt="" />
                <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <img id="imgProducto2" src="/images/favorite.png" alt="" />
              </div>
              <!-- titulos>  -->
              <div class="imageProducto">
                <img src="/images/productos/producto14.jpg" alt="" />
              </div>
              <!-- imagen  -->
              <div class="info">
              <span class="descripcionPorducto">
                    Sal de Epsom 
              </span>
              <span class="presentacion">
                    Caja x 25 sobres x20g
              </span>
              <span class="contenido">
                    “Excelente producto”
              </span>
              <button id="salEpson" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
            </div>
            </div>
                  <!-- 
            15
            -->

            <div class="itemProducto">
              <div class="tituloProducto">
                <img id="imgProducto1" src="/images/medicina.png" alt="" />
                <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <img id="imgProducto2" src="/images/favorite.png" alt="" />
              </div>
              <!-- titulos>  -->
              <div class="imageProducto">
                <img src="/images/productos/producto15.jpg" alt="" />
              </div>
              <!-- imagen  -->
              <div class="info">
              <span class="descripcionPorducto">
                    Sal Glauber 
              </span>
              <span class="presentacion">
                    Caja x 25 sobres x 20g  
              </span>
              <span class="contenido">
                    “Excelente producto”
              </span>
              <button id="salGluber" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
            </div>
            </div>
             <!-- 
            16
            -->

            <div class="itemProducto">
              <div class="tituloProducto">
                <img id="imgProducto1" src="/images/medicina.png" alt="" />
                <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <img id="imgProducto2" src="/images/favorite.png" alt="" />
              </div>
              <!-- titulos>  -->
              <div class="imageProducto">
                <img src="/images/productos/producto16.jpg" alt="" />
              </div>
              <!-- imagen  -->
              <div class="info">
              <span class="descripcionPorducto">
                    Vaselina Pura 
              </span>
              <span class="presentacion">
                    Pote x 20g, y x 100g 
              </span>
              <span class="contenido">
                    “Excelente producto”
              </span>
              <button id="vacelina" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
            </div>
            </div>
          </div>
    </div>
  </div>
  `;
}
/**
 * 
 * parte para distribuidores
 */
function distribuidores() {
  document.getElementById('inicio').style.display = "block";
  // Obtener referencia al contenedor
  var contacto = document.getElementById("cajon");
  contacto.innerHTML = `
  <div id="contenedor-distr">
  <div id="dist-titulo">
    <h1 id="titulo">DISTRIBUIDORES</h1>
  </div>
  <DIV class="dist-contenido">
    <h1 id="oficinas-distri"><Span>Distribuidores</Span> en Colombia</h1>
    <div class="dist-nombre">
    <img src="images/distribuidor0.png" alt="">
    </div>
    <div class="dist-nombre">
    <img src="images/distribuidor1.png" alt="">
    </div>
    <div class="dist-nombre">
      <img src="images/distribuidor2.png" alt="">
    </div>
    <div class="dist-nombre">
      <img src="images/distribuidor3.png" alt="">
    </div>
    <div class="dist-nombre">
      <img src="images/distribuidor4.png" alt="">
    </div>
    <div class="dist-nombre">
      <img src="images/distribuidor5.png" alt="">
    </div>
    <div class="dist-nombre">
      <img src="images/distribuidor6.png" alt="">
    </div>
    <div class="dist-nombre">
    <img src="images/distribuidor7.png" alt="">
    </div>

    <div class="dist-nombre">
    <img src="images/distribuidor8.png" alt="">
  </div>
  <div class="dist-nombre">
    <img src="images/distribuidor9.png" alt="">
  </div>
  <div class="dist-nombre">
    <img src="images/distribuidor10.png" alt="">
  </div>
  <div class="dist-nombre">
  <img src="images/distribuidor11.png" alt="">
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
    // termina prueba
  };
  if (parametro2 === 'POST') {
    location.reload(true)
  }
  var alerta = document.querySelector('#cuerpo1');
  alerta.parentNode.removeChild(alerta);
}

