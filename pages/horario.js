document.addEventListener('DOMContentLoaded', function() {
  // Variables específicas para horario.html
  const a = document.getElementById("a");
  const escText = document.getElementById("escText");
  const esc = document.getElementById("esc");
  const esc2 = document.getElementById("esc2");
  const checkbox = document.getElementById("toggle");
  const body = document.body;
  var cursor = document.getElementById('customCursor');
  var cursorPurpleish = document.getElementById('customCursorPurpleish');
  let main = document.querySelector("main");
  const DEFAULT_DAY_CURSOR = '../img/cursors/cccc_veraniego.webp';
  const DEFAULT_NIGHT_CURSOR = '../img/cursors/cccc.webp';
  const fondo = document.getElementById('fondoGalaxy');
  const fondoGreen = document.getElementById('fondoGalaxyGreen');
  const cursorSize = 200;

  
  // Variables para almacenar los cursores seleccionados
  let dayCursorSrc = adjustCursorPathForHorario(localStorage.getItem('cursorDay')) || DEFAULT_DAY_CURSOR;
  let nightCursorSrc = adjustCursorPathForHorario(localStorage.getItem('cursorNight')) || DEFAULT_NIGHT_CURSOR;

  // Función para ajustar la ruta del cursor en horario.html
  function adjustCursorPathForHorario(cursorSrc) {
    if (!cursorSrc) return null;

    // Si la ruta comienza con 'img/', agregamos '../' al inicio
    if (cursorSrc.startsWith('img/')) {
      return '../' + cursorSrc;
    } else if (cursorSrc.startsWith('../img/')) {
      // Ya está ajustada
      return cursorSrc;
    } else {
      // Asumimos que es una ruta absoluta o ya está ajustada
      return cursorSrc;
    }


  }

  function handleSpecialCursor(cursorSrc) {
    if (cursorSrc.includes('cccc_krillin')) {
      cursorPurpleish.style.display = "none";
    }

    // Aquí podemos manejar cursores especiales que requieran acciones adicionales
    if (cursorSrc.includes('cccc_galaxy')) {
      cursor.src = '../img/cursors/cccc_galaxy.webp';
      cursor.style.opacity = "70%";
      fondo.style.display = "block";
      fondo.src = "../img/fondo.gif";
      fondoGreen.style.display = "block";
      fondoGreen.src = "../img/fondoGreen.gif";
      fondoGreen.style.opacity = "1%";
      cursorPurpleish.style.display = "none";
      cursor.style.transition = 'width 0.1s ease-in-out, height 0.1s ease-in-out, opacity 0.1s ease-in-out';


      let isMouseDown = false;


      var fecha = new Date(); // Obtener la fecha y hora actual
      var timestamp = fecha.getTime(); // Usar el timestamp como parámetro único

      // Actualizar la máscara con un nuevo parámetro para forzar la recarga
      fondo.style.maskImage = 'url("../img/cursors/cccc.webp?' + timestamp + '")';
      fondoGreen.style.maskImage = 'url("../img/cursors/cccc.webp?' + timestamp + '")';

      // Observer para manejar los cambios de clase y actualizar la posición de la máscara
  let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        // Actualiza la posición según el estado actual de 'clicked'
        const clicked = mutation.target.classList.contains('clicked');
        updateMaskPosition(lastEvent, clicked);
      }
    });
  });

  observer.observe(fondo, { attributes: true });
  observer.observe(fondoGreen, { attributes: true });

  // Evento para manejar el movimiento del ratón
  document.addEventListener('mousemove', function(e) {
    lastEvent = e; // Almacenar el último evento del ratón
    if (isMouseDown) { // Si el mouse está presionado, actualizar con offset
      updateMaskPosition(e, true);
    } else { // Si no está presionado, actualizar sin offset
      updateMaskPosition(e, false);
    }
  });

  // Evento cuando se presiona el ratón
  document.addEventListener('mousedown', function() {
    isMouseDown = true; // Establecer que el mouse está presionado
    fondo.classList.add('clicked');
    fondoGreen.classList.add('clicked');
  });

  // Evento cuando se suelta el ratón
  document.addEventListener('mouseup', function() {
    isMouseDown = false; // Establecer que el mouse ya no está presionado
    fondo.classList.remove('clicked');
    fondoGreen.classList.remove('clicked');
  });

  // Función para actualizar la posición de la máscara
  function updateMaskPosition(e, offset) {
    let x = e.clientX - cursorSize / 2;
    let y = e.clientY - cursorSize / 2;
    if (offset) {
      x -= 50; // Desplazar -100px en X
      y -= 50; // Desplazar -100px en Y
    }
    fondo.style.maskPosition = `${x}px ${y}px`;
    fondoGreen.style.maskPosition = `${x}px ${y}px`;
  }

  let lastEvent = null;

      document.addEventListener('mouseover', function(e) {
        if (
          e.target.tagName === 'A' ||
          e.target.closest('.card') ||
          e.target.closest('.material-icons-round') ||
          e.target.closest('.background') ||
          e.target.closest('.sun-moon') ||
          e.target.closest('span') ||
          e.target.closest('#flechaa') ||
          e.target.closest('.buttonTheme') ||
          e.target.closest('#logoutButton')
        ) {
          fondoGreen.style.opacity = '70%';
          isCursorOverSpecialElement = true;
        }
      });
    
      document.addEventListener('mouseout', function(e) {
        if (
          e.target.tagName === 'A' ||
          e.target.closest('.card') ||
          e.target.closest('.material-icons-round') ||
          e.target.closest('.background') ||
          e.target.closest('.sun-moon') ||
          e.target.closest('span') ||
          e.target.closest('#flechaa') ||
          e.target.closest('.buttonTheme') ||
          e.target.closest('#logoutButton')
        ) {
          fondoGreen.style.opacity = '1%';
          isCursorOverSpecialElement = false;
        }
      });
    
    }
  }

  // Función auxiliar para insertar 'Purpleish' antes de la extensión
  function insertPurpleishBeforeExtension(filename) {
    const lastDotIndex = filename.lastIndexOf('.');
    if (lastDotIndex === -1) {
      // Si no hay extensión, agregamos 'Purpleish' al final
      return filename + 'Purpleish';
    } else {
      // Insertamos 'Purpleish' antes de la extensión
      return filename.substring(0, lastDotIndex) + 'Purpleish' + filename.substring(lastDotIndex);
    }
  }

  // Leer el estado del tema desde localStorage
  checkbox.checked = localStorage.getItem("checkboxStatus") === 'true';

  // Aplicar el tema al cargar la página
  applyTheme();

  // Escuchar cambios en el checkbox
  checkbox.addEventListener('change', () => {
    localStorage.setItem('checkboxStatus', checkbox.checked);
    applyTheme();
  });

  // Función para aplicar el tema
  function applyTheme() {
    if (checkbox.checked) {
      // Tema claro
      body.style.backgroundColor = '#dddcb0';
      body.style.color = "#313842";
      a.classList.add("aDay");
      escText.classList.add("escTextDay");
      esc.classList.add("escDay");
      esc2.classList.add("esc2Day");

      a.classList.remove("aNight");
      escText.classList.remove("escTextNight");
      esc.classList.remove("escNight");
      esc2.classList.remove("esc2Night");
      
      if (cursor && cursorPurpleish) {
        cursor.style.opacity = "100%";
        cursorPurpleish.style.display = "block";
        cursor.style.transition = 'width 0.1s ease-in-out, height 0.1s ease-in-out, transform 0.1s ease-in-out, opacity 0.1s ease-in-out';
        fondo.style.display = "none";
        fondoGreen.style.display = "none";

        cursor.src = dayCursorSrc || DEFAULT_DAY_CURSOR;
        cursorPurpleish.src = insertPurpleishBeforeExtension(dayCursorSrc || DEFAULT_DAY_CURSOR);
        handleSpecialCursor(dayCursorSrc);

      }
      if(main){
        main.style.backgroundImage = 'url("../img/Calendario_Escolar_Day.png")';
      }
    } else {
      // Tema oscuro
      body.style.backgroundColor = '#1c2128';
      body.style.color = "#bfd4e9";
      a.classList.add("aNight");
      escText.classList.add("escTextNight");
      esc.classList.add("escNight");
      esc2.classList.add("esc2Night");

      a.classList.remove("aDay");
      escText.classList.remove("escTextDay");
      esc.classList.remove("escDay");
      esc2.classList.remove("esc2Day");

      if (cursor && cursorPurpleish) {
        cursor.style.opacity = "100%";
        cursorPurpleish.style.display = "block";
        cursor.style.transition = 'width 0.1s ease-in-out, height 0.1s ease-in-out, transform 0.1s ease-in-out, opacity 0.1s ease-in-out';
        fondo.style.display = "none";
        fondoGreen.style.display = "none";

        cursor.src = nightCursorSrc || DEFAULT_NIGHT_CURSOR;
        cursorPurpleish.src = insertPurpleishBeforeExtension(nightCursorSrc || DEFAULT_NIGHT_CURSOR);
        handleSpecialCursor(nightCursorSrc);
      }
      if(main){
        main.style.backgroundImage = 'url("../img/Calendario_Escolar_Night.png")';
      }
    }
  }

  // Manejador de eventos para la tecla 'Escape'
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      if (a && escText && esc) {
        a.classList.add("aNight-hover", "aDay-hover");
        escText.classList.add("escTextNight-hover", "escTextDay-hover");
        esc.classList.add("escNight-hover", "escDay-hover");

        setTimeout(() => {
          a.classList.remove("aNight-hover", "aDay-hover");
          escText.classList.remove("escTextNight-hover", "escTextDay-hover");
          esc.classList.remove("escNight-hover", "escDay-hover");
          a.click(); // Simulamos el clic para volver a la otra pantalla
        }, 175);
      }
    }
  });


  /* CUSTOM CURSOR ADJUSTMENTS */

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
        cursor.style.left = (e.clientX - cursorSize / 2) + 'px';
        cursor.style.top = (e.clientY - cursorSize / 2) + 'px';
        cursorPurpleish.style.left = (e.clientX - cursorSize / 2) + 'px';
        cursorPurpleish.style.top = (e.clientY - cursorSize / 2) + 'px';
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
          || e.target.closest('.sun-moon') || e.target.closest('span') || e.target.closest('#flechaa')
          || e.target.closest('.buttonTheme')) {
                cursorPurpleish.style.opacity = '100%';
      }
    });
    
    document.addEventListener('mouseout', function(e) {
      if (e.target.tagName === 'A' || e.target.closest('.card')
          || e.target.closest('.material-icons-round')  || e.target.closest('.background')
          || e.target.closest('.sun-moon')  || e.target.closest('span') || e.target.closest('#flechaa')
          || e.target.closest('.buttonTheme')) {
                cursorPurpleish.style.opacity = '1%';
      }
    });
    
  } else {
      console.error('Elementos de cursor no encontrados en el DOM.');
  }

});
