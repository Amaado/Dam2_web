document.addEventListener('DOMContentLoaded', function() {
  var cursor = document.getElementById('customCursor');
  var cursorPurpleish = document.getElementById('customCursorPurpleish');
  let checkbox = document.getElementById("toggle");
  let body = document.body;
  let cards = document.querySelectorAll(".card");
  let card
  let buttons  = document.querySelectorAll("button");
  let button
  let horario = document.getElementById("horario");
  let flecha = document.getElementById("flecha");
  let oval = this.querySelector('.svg-oval');

  if (window.location.pathname.endsWith("horario.html")) {
    let a = document.getElementById("a");
    let escText = document.getElementById("escText");
    let esc = document.getElementById("esc");
    let esc2 = document.getElementById("esc2");
  }else{
    console.log("Error carga ESC");
  }



  checkbox.checked = localStorage.getItem("checkboxStatus") === 'true';
  
  // Aplicar el tema correspondiente según el estado del checkbox
  function applyTheme() {
      if (checkbox.checked) {
          //console.log("Tema claro");
          body.style.backgroundColor = '#dddcb0'; // Color claro
          body.style.color = "#313842";
          cards.forEach(card => {
            card.style.borderColor = '#242e3ccb'; // Cambia el color del borde a #bfd4e9
          });
          buttons.forEach(button => {
            button.style.backgroundColor = '#dddcb0'; // Cambia el color del borde a #bfd4e9
          });

          if (window.location.pathname.endsWith("horario.html")) {
            a.classList.add("aDay");
            escText.classList.add("escTextDay");
            esc.classList.add("escDay");
            esc2.classList.add("esc2Day");

            a.classList.remove("aNight");
            escText.classList.remove("escTextNight");
            esc.classList.remove("escNight");
            esc2.classList.remove("esc2Night");
          }else{
            console.log("Error carga esc Day");
          }

          if(window.location.pathname.endsWith("horario.html")){
            cursor.src = "../img/cursors/cccc_veraniego.gif";
            cursorPurpleish.src = "../img/cursors/cccc_veraniegoPurpleish.gif";
          }else{
            cursor.src = "img/cursors/cccc_veraniego.gif";
            cursorPurpleish.src = "img/cursors/cccc_veraniegoPurpleish.gif";
          }

      } else {
          //console.log("Tema oscuro");
          body.style.backgroundColor = '#1c2128'; // Color oscuro (inicial)
          body.style.color = "#bfd4e9";
          cards.forEach(card => {
            card.style.borderColor = 'grey'; // Cambia el color del borde a #bfd4e9
          });
          buttons.forEach(button => {
            button.style.backgroundColor = '#262b31'; // Cambia el color del borde a #bfd4e9
          });

          if (window.location.pathname.endsWith("horario.html")) {
            a.classList.add("aNight");
            escText.classList.add("escTextNight");
            esc.classList.add("escNight");
            esc2.classList.add("esc2Night");
            
            a.classList.remove("aDay");
            escText.classList.remove("escTextDay");
            esc.classList.remove("escDay");
            esc2.classList.remove("esc2Day");
          }else{
            console.log("Error carga esc Night");
          }

          if(window.location.pathname.endsWith("horario.html")){
            cursor.src = "../img/cursors/cccc.gif";
            cursorPurpleish.src = "../img/cursors/ccccPurpleish.gif";
          }else{
            cursor.src = "img/cursors/cccc.gif";
            cursorPurpleish.src = "img/cursors/ccccPurpleish.gif";
          }
      }
  }

  // Llamar a applyTheme al cargar la página para aplicar el tema guardado
  applyTheme();

  // Guardar el estado del checkbox en Local Storage cuando cambie su valor
  checkbox.addEventListener('change', () => {
      localStorage.setItem('checkboxStatus', checkbox.checked);
      applyTheme(); // Aplicar el tema de acuerdo al nuevo estado
  });


    
    if (horario) {
      horario.addEventListener('mouseenter', function() {
          if (checkbox.checked) {
              //console.log("Tema claro");
              horario.style.backgroundColor = '#edeba4';
          } else {
              //console.log("Tema oscuro");
              horario.style.backgroundColor = '#333c4a9d';
          }
      });
  
      horario.addEventListener('mouseleave', function() {
          horario.style.backgroundColor = '#333c4a00';
      });
  }

  if (window.location.pathname.endsWith("horario.html")) {
// Detectar la tecla "Esc" y activar el efecto hover
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
      // Agregar clases que simulan el hover
      a.classList.add("aNight-hover"); // Si estás en modo noche, aplica la clase que activa el hover
      escText.classList.add("escTextNight-hover");
      esc.classList.add("escNight-hover");

      // Si estás en modo día, aplica las clases correspondientes
      a.classList.add("aDay-hover");
      escText.classList.add("escTextDay-hover");
      esc.classList.add("escDay-hover");
      // Después de 0.5s, realizar la acción de clic en el enlace
      setTimeout(() => {
          // Remover el efecto hover
          a.classList.remove("aNight-hover", "aDay-hover");
          escText.classList.remove("escTextNight-hover", "escTextDay-hover");
          esc.classList.remove("escNight-hover", "escDay-hover");
          // Simular el clic en el enlace <a>
          a.click();
      }, 175);
  }
});

  }


  if (flecha) {
    flecha.addEventListener('mouseenter', function() {
        if (checkbox.checked) {
            //console.log("Tema claro");
            flecha.style.backgroundColor = '#edeba4';
        } else {
            //console.log("Tema oscuro");
            flecha.style.backgroundColor = '#333c4a9d';
        }
    });

    flecha.addEventListener('mouseleave', function() {
      flecha.style.backgroundColor = '#333c4a00';
    });
  }
    


    setTimeout(function() {
      cursorPurpleish.style.opacity = '1%';
      
    }, 1);

    let soloInicio = 0;
    if (cursor && cursorPurpleish) {
      document.addEventListener('mousemove', function(e) {
          soloInicio++;
          if(soloInicio == 1){
            cursor.style.opacity = "100%";
          }
          cursor.style.left = e.clientX + 'px';
          cursor.style.top = e.clientY + 'px';
          cursorPurpleish.style.left = e.clientX + 'px';
          cursorPurpleish.style.top = e.clientY + 'px';
      });

      document.addEventListener('mousedown', function() {
          cursor.classList.add('clicked');
          cursorPurpleish.classList.add('clicked');
      });
      
      document.addEventListener('mouseup', function() {
          cursor.classList.remove('clicked');
          cursorPurpleish.classList.remove('clicked');
      });

  document.addEventListener('mouseover', function(e) {
    if (e.target.tagName === 'A' || e.target.closest('.card')
        || e.target.closest('.material-icons-round')  || e.target.closest('.background')
        || e.target.closest('.sun-moon') || e.target.closest('span')) {
              cursorPurpleish.style.opacity = '100%';
      //cursorPurpleish.style.visibility = 'visible';
      //cursor.style.visibility = 'hidden';
    }
  });
  
  document.addEventListener('mouseout', function(e) {
    if (e.target.tagName === 'A' || e.target.closest('.card')
        || e.target.closest('.material-icons-round')  || e.target.closest('.background')
        || e.target.closest('.sun-moon')  || e.target.closest('span')) {
              cursorPurpleish.style.opacity = '1%';
      //cursorPurpleish.style.visibility = 'hidden';
      //cursor.style.visibility = 'visible';
    }
  });
  
  } else {
      console.error('Elementos de cursor no encontrados en el DOM.');
  }




    // Función para crear un óvalo SVG
    function createOval() {
        const svgNS = "http://www.w3.org/2000/svg";
        
        // Crear el SVG
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", "1200");
        svg.setAttribute("height", "125");
        svg.setAttribute("viewBox", "0 0 1200 125"); // Asegúrate de que el viewBox coincide con el tamaño del SVG
        svg.setAttribute("class", "svg-oval");
        
        // Crear la máscara
        const defs = document.createElementNS(svgNS, "defs");
        const mask = document.createElementNS(svgNS, "mask");
        mask.setAttribute("id", "oval-mask");
        
        const ovalMask = document.createElementNS(svgNS, "ellipse");
        ovalMask.setAttribute("cx", "500");
        ovalMask.setAttribute("cy", "62.5");
        ovalMask.setAttribute("rx", "500");
        ovalMask.setAttribute("ry", "62.5");
        ovalMask.setAttribute("fill", "white");
        
        mask.appendChild(ovalMask);
        defs.appendChild(mask);
        svg.appendChild(defs);
        
        // Añadir la imagen con la máscara y el blend mode
        const image = document.createElementNS(svgNS, "image");
        image.setAttribute("href", "img/noise.png"); // Reemplaza con la URL de tu imagen
        image.setAttribute("x", "0");
        image.setAttribute("y", "0");
        image.setAttribute("width", "1000");
        image.setAttribute("height", "125");
        image.setAttribute("mask", "url(#oval-mask)"); // Aplicar la máscara
        image.style.mixBlendMode = "darken"; // Ajusta el blend mode según tus necesidades
        
        svg.appendChild(image);
        
        // Crear el óvalo
        const oval = document.createElementNS(svgNS, "ellipse");
        oval.setAttribute("cx", "500");
        oval.setAttribute("cy", "62.5");
        oval.setAttribute("rx", "500");
        oval.setAttribute("ry", "62.5");
        oval.setAttribute("opacity", "0"); // Inicialmente invisible
        
        svg.appendChild(oval);
        
        return svg;
    }
  
      // Función para manejar el evento de hover (mouseenter y mouseleave)
      document.querySelectorAll('a').forEach((link, index) => {
        // Verificar si el índice es 0, para omitir el primer <a>
        if (index === 0) return;
      
        let ovalTimeout;
      
        link.addEventListener('mouseenter', function() {
          let oval = this.querySelector('.svg-oval');
      
          // Si el óvalo ya existe, simplemente restauramos su opacidad
          if (oval) {
            clearTimeout(ovalTimeout);
            oval.classList.add('show');
          } else {
            // Crear un nuevo óvalo si no existe
            oval = createOval();
            
            this.appendChild(oval);
      
            // Forzar reflujo para que la transición de opacidad funcione
            requestAnimationFrame(() => {
              oval.classList.add('show');
            });
          }
        });
      
        link.addEventListener('mouseleave', function() {
          const oval = this.querySelector('.svg-oval');
          if (oval) {
            oval.classList.remove('show');
            
            // Establecer un temporizador para eliminar el óvalo después de la transición
            ovalTimeout = setTimeout(() => {
              if (oval) {
                this.removeChild(oval);
              }
            }, 400); // Coincide con la duración de la transición
          }
        });
      });





      let hoverAudio;

      function loadAudio() {
        const audioTest = new Audio('img/sfx_sound1.mp3');
    
        audioTest.onerror = function() {
            // Si falla la primera ruta, intenta la segunda
            hoverAudio = new Audio('../img/sfx_sound1.mp3');
            console.log('Usando la ruta ../img/sfx_sound1.mp3');
        };
    
        audioTest.oncanplaythrough = function() {
            // Si la primera ruta es correcta
            hoverAudio = audioTest;
            console.log('Usando la ruta img/sfx_sound1.mp3');
        };
    
        audioTest.load(); // Inicia la carga del audio para verificar la ruta
    }
    
    // Llamamos a la función para cargar el audio
    loadAudio();


      // Función para reproducir el audio
      function playHoverAudio() {
        hoverAudio.currentTime = 0; // Reiniciar el audio desde el principio
      }
      
      // Añadir un event listener a todos los elementos con la clase .card
      document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', playHoverAudio);
      });
      
      // Añadir un event listener a todos los elementos <a>
      document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', playHoverAudio);
      });


      document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseleave', playHoverAudio);
      });
      
      // Añadir un event listener a todos los elementos <a>
      document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseleave', playHoverAudio);
      });

});




