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
/**
 * inicia el remplazo en la pagina principal
 * 
 */
window.onload = function() {
  var cuerpo = document.getElementById('cuerpo');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'registro.html', true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          cuerpo.innerHTML = xhr.responseText;
      }
  };
  xhr.send();
};
};


