document.addEventListener("DOMContentLoaded", function () {
  var cursor = document.getElementById("customCursor");
  var cursorPurpleish = document.getElementById("customCursorPurpleish");
  const fondo = document.getElementById("fondoGalaxy");
  const fondoGreen = document.getElementById("fondoGalaxyGreen");
  const cursorSize = 200;
  let checkbox = document.getElementById("toggle");
  let body = document.body;
  let cards = document.querySelectorAll(".card");
  let card;
  let buttons = document.querySelectorAll("button");
  let button;
  let horario = document.getElementById("horario");
  let notas = document.getElementById("notas");
  let loginButton = document.getElementById("loginButton");
  let registerButton = document.getElementById("registerButton");
  let loginScreen = document.getElementById("loginScreen");
  let registerScreen = document.getElementById("registerScreen");
  let loginContainer = document.getElementById("loginContainer");
  let registerContainer = document.getElementById("registerContainer");
  const campoNameLogin = document.getElementById("campoNameLogin");
  const campoPasswordLogin = document.getElementById("campoPasswordLogin");
  const campoNameRegister = document.getElementById("campoNameRegister");
  const campoPasswordRegister = document.getElementById(
    "campoPasswordRegister"
  );
  const campoPasswordRepeatRegister = document.getElementById(
    "campoPasswordRepeatRegister"
  );
  const errorLabelLogin = document.getElementById("errorLabelLogin");
  const errorLabelRegister = document.getElementById("errorLabelRegister");
  const loginSubmit = document.getElementById("loginSubmit");
  const registerSubmit = document.getElementById("registerSubmit");
  let oval = this.querySelector(".svg-oval");
  const flechaaSkins = document.getElementById("flechaaSkins");
  const menuLabelSkins = document.getElementById("menuLabelSkins");
  const skinsContainer = document.getElementById("skinsContainer");
  const flechaHitbloxPlusSkins = document.getElementById(
    "flechaHitbloxPlusSkins"
  );
  const flechaaModifiers = document.getElementById("flechaaModifiers");
  const menuLabelModifiers = document.getElementById("menuLabelModifiers");
  const modifiersContainer = document.getElementById("modifiersContainer");
  const flechaHitbloxPlusModifiers = document.getElementById(
    "flechaHitbloxPlusModifiers"
  );
  let allESC = document.querySelector("nav");
  let switchThemeButton = document.querySelector(".container");
  let coinLabel = document.querySelector(".coinLabel");
  let coinsContainer = document.querySelector(".coinsContainer");
  let helloMessage = document.getElementById("helloMessage");
  const checkboxLogin = document.getElementById("stayLoged");
  let logoutButton = document.getElementById("logoutButton");
  let dayCursorSrc;
  let nightCursorSrc;
  let selectedDayButton = null;
  let selectedNightButton = null;
  const DEFAULT_DAY_CURSOR = "img/cursors/cccc_veraniego.webp";
  const DEFAULT_NIGHT_CURSOR = "img/cursors/cccc.webp";
  let underwater = document.getElementById("underwater");
  let underwaterTransi = document.getElementById("underwaterTransi");
  let filterUnderwater = document.getElementById("filterUnderwater");
  let filterUnderwaterDupe = document.getElementById("filterUnderwaterDupe");
  let rtxContainer = document.getElementById("rtxContainer");
  let rtxON = document.getElementById("rtxON");
  let rtxOFF = document.getElementById("rtxOFF");
  let rtxBLANK = document.getElementById("rtxBLANK");
  let rtxGREEN = document.getElementById("rtxGREEN");
  let settingsImgContainer = document.getElementById("settingsImgContainer");
  let settingsContainer = document.getElementById("settingsContainer");
  let settingsImgLight = document.getElementById("settingsImgLight");
  let settingsImg = document.getElementById("settingsImg");
  let volumenContainer = document.getElementById("volumenContainer");
  let isShowUnlockPass = false;
  let boxx = document.querySelector(".boxx");
  const horarioImg = document.getElementById("horarioImg");
  const paintContainers = document.querySelectorAll(".paint");
  const paletteContainer = document.getElementById("paletteContainer");
  const cursorPaintErase = document.getElementById("cursorPaintErase");
  const cursorPaint = document.getElementById("cursorPaint");
  let writeButton = document.getElementById("writeButton");
  let paintButton = document.getElementById("paintButton");
  let paints = document.getElementsByClassName("paint");
  let sizeVisualizer = document.getElementById("sizeVisualizer");
  const page1Hitbox = document.getElementById("page1hitbox");
  const paginasCargadas = {};
  const checkboxland = document.getElementById("checkboxland");
  let isMouseDown = false;
  const checkboxlandBackground = document.getElementById('checkboxlandBackground');
  const stage = document.querySelector(".stage");
  const notebookLogoLleno = document.getElementById('notebookLogoLleno');
  const notebookLogoVacio = document.getElementById('notebookLogoVacio');
  const pageNumber = document.getElementById("page-number");
  const notebook = document.getElementById("notebook");
  const controls = document.getElementById("controls");
  const volumenImg = document.getElementById("volumenImg");
  const volumenImgDropShadow = document.getElementById("volumenImgDropShadow");
  const wrapper = document.querySelector('.wrapper');
  const hitboxSlotWorld = document.getElementById("hitboxSlotWorld");
  const cageContainer = document.getElementById("cageContainer");
  const grocery = document.getElementById("grocery");
  const store = document.querySelector('.wrapper');
  const flechaHitbloxPlusModifiers2 = document.getElementById("flechaHitbloxPlusModifiers2");
  const flechaHitbloxPlusModifiers3 = document.getElementById("flechaHitbloxPlusModifiers3");
  const gorceryContextMenu = document.getElementById('gorceryContextMenu');
  const gorceryHiboxAreaContextMenu = document.getElementById('grocery');
  const modifiersSettingsContextMenu = document.getElementById('modifiersSettingsContextMenu');
  const modifiersSettingsHiboxAreaContextMenu = document.getElementById('modifiersSettings');

/* BUBBLES */
let animationFrameId;
let bubbles = []; // Lista global de burbujas
let particles = []; // Lista global de partículas para explosión
let ctx; // Contexto del canvas global
let canvas; // Referencia al canvas
let resizeListener, clickListener; // Referencias a los eventListeners dinámicos

// Función para activar el canvas y empezar la animación
function startBubbles() {
    // Verifica si el canvas ya existe
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'bubbleCanvas';
        document.body.appendChild(canvas);
        initializeCanvas(); // Inicializa el canvas y el contexto
    }

    // Añade los eventListeners necesarios
    addEventListeners();

    // Verifica si el contexto está configurado
    if (!ctx) {
        console.error('El contexto del canvas no se pudo inicializar.');
        return;
    }

    // Inicia la animación
    updateBubbles();
}

// Función para desactivar el canvas y detener la animación
function stopBubbles() {
    if (canvas) {
        cancelAnimationFrame(animationFrameId); // Detiene la animación
        canvas.remove(); // Elimina el canvas del DOM
        bubbles = []; // Limpia las burbujas para liberar memoria
        particles = []; // Limpia las partículas
        ctx = null; // Limpia el contexto
        canvas = null; // Limpia la referencia al canvas

        // Elimina los eventListeners para ahorrar recursos
        removeEventListeners();
    }
}

// Inicializa el canvas y su contexto
function initializeCanvas() {
    if (!canvas) return;

    ctx = canvas.getContext('2d'); // Asignar el contexto a la variable global

    // Ajusta el tamaño inicial del canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Añade los eventListeners necesarios
function addEventListeners() {
    if (!canvas) return;

    // Listener para redimensionar el canvas
    resizeListener = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeListener);

    // Listener para generar burbujas al hacer clic
    clickListener = (e) => {
        const numBubbles = Math.floor(Math.random() * 8) + 1; // Número aleatorio entre 1 y 8
        for (let i = 0; i < numBubbles; i++) {
            bubbles.push(createBubbleAt(e.clientX, e.clientY));
        }
    };
    window.addEventListener('click', clickListener);
}

// Elimina los eventListeners añadidos
function removeEventListeners() {
    if (resizeListener) {
        window.removeEventListener('resize', resizeListener);
        resizeListener = null;
    }
    if (clickListener) {
        window.removeEventListener('click', clickListener);
        clickListener = null;
    }
}

// Crea una burbuja con propiedades iniciales aleatorias
function createBubbleAt(x, y) {
    return {
        x: x,
        y: y,
        radius: Math.random() * 7 + 1, // Tamaño entre 1 y 8
        speed: Math.random() * 2 + 1, // Velocidad inicial entre 1 y 3
        oscillationAmplitude: Math.random() * 20 + 5, // Amplitud de oscilación
        oscillationSpeed: Math.random() * 0.04 + 0.01, // Velocidad de oscilación
        startX: x, // Posición inicial X para oscilación
        opacity: 0.3, // Opacidad inicial
        delay: Math.random() * 1000, // Retraso hasta 1 segundo
        startTime: Date.now(), // Tiempo de inicio
        active: false // Inactiva hasta que pase el retraso
    };
}

// Crea partículas para la explosión
function createExplosion(x, y) {
    for (let i = 0; i < 10; i++) { // 10 partículas por explosión
        particles.push({
            x: x,
            y: y,
            radius: Math.random() * 2 + 1, // Tamaño entre 1 y 3
            speedX: (Math.random() - 0.5) * 4, // Velocidad horizontal aleatoria
            speedY: (Math.random() - 0.5) * 4, // Velocidad vertical aleatoria
            opacity: 1, // Opacidad inicial
            decay: Math.random() * 0.05 + 0.01 // Velocidad de desvanecimiento
        });
    }
}

// Dibuja una burbuja
function drawBubble(bubble) {
    if (!ctx) return;

    const outerGradient = ctx.createRadialGradient(
        bubble.x, bubble.y, bubble.radius,
        bubble.x, bubble.y, bubble.radius * 1.5
    );
    outerGradient.addColorStop(0, `rgba(255, 255, 255, ${bubble.opacity})`);
    outerGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, bubble.radius * 1.5, 0, Math.PI * 2);
    ctx.fillStyle = outerGradient;
    ctx.fill();
}

// Dibuja una partícula
function drawParticle(particle) {
    if (!ctx) return;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
    ctx.fill();
}

// Actualiza las burbujas en la animación
function updateBubbles() {
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Actualiza las burbujas
    for (let i = 0; i < bubbles.length; i++) {
        const bubble = bubbles[i];

        if (!bubble.active && Date.now() - bubble.startTime >= bubble.delay) {
            bubble.active = true;
        }

        if (bubble.active) {
            bubble.y -= bubble.speed;
            bubble.x = bubble.startX + Math.sin(bubble.y * bubble.oscillationSpeed) * bubble.oscillationAmplitude;

            if (bubble.y + bubble.radius < 0) {
                createExplosion(bubble.x, bubble.y); // Crea la explosión
                bubbles.splice(i, 1);
                i--;
            } else {
                drawBubble(bubble);
            }
        }
    }

    // Actualiza las partículas
    for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.opacity -= particle.decay;

        if (particle.opacity <= 0) {
            particles.splice(i, 1);
            i--;
        } else {
            drawParticle(particle);
        }
    }

    animationFrameId = requestAnimationFrame(updateBubbles);
}






  /* CAMBIO DE CURSOR */

  let idLogeado = localStorage.getItem("idLogeado");

  if (idLogeado) {
    // Usuario logueado: cargar selecciones de cursor
    dayCursorSrc = localStorage.getItem("cursorDay") || DEFAULT_DAY_CURSOR;
    nightCursorSrc =
      localStorage.getItem("cursorNight") || DEFAULT_NIGHT_CURSOR;
  } else {
    // Usuario deslogueado: usar cursores predeterminados y limpiar selecciones previas
    dayCursorSrc = DEFAULT_DAY_CURSOR;
    nightCursorSrc = DEFAULT_NIGHT_CURSOR;
    localStorage.removeItem("cursorDay");
    localStorage.removeItem("cursorNight");
  }

  function addSkinButtonListeners() {
    const buttonThemeDayElements = document.querySelectorAll(".buttonThemeDay");
    const buttonThemeNightElements =
      document.querySelectorAll(".buttonThemeNight");

    buttonThemeDayElements.forEach((button) => {
      button.addEventListener("click", function () {
        handleCursorChange(this, "day");
      });
    });

    buttonThemeNightElements.forEach((button) => {
      button.addEventListener("click", function () {
        handleCursorChange(this, "night");
      });
    });
  }

  // Llamar a la función para agregar los event listeners
  addSkinButtonListeners();

  // Función para manejar el cambio de cursor
  function handleCursorChange(buttonElement, theme) {
    const imgElement = buttonElement.querySelector(".buttonThemeImg");
    const cursorSrc = imgElement.getAttribute("alt");
    const idLogeadoR = localStorage.getItem("idLogeado");

    if (!idLogeadoR) {
      console.error("No hay usuario logueado, no se puede cambiar el cursor");
      return;
    }

    if (!cursorSrc) {
      console.error("No se encontró la ruta del cursor en el atributo alt");
      return;
    }

    // Manejar el botón previamente seleccionado para el tema
    if (theme === "day") {
      if (selectedDayButton && selectedDayButton !== buttonElement) {
        // Restablecer el ícono del botón anterior a sunIcon.png
        const prevImgElement =
          selectedDayButton.querySelector(".buttonThemeImg");
        prevImgElement.src = "img/sunIcon.png";

        const prevBoxshadowDay = selectedDayButton
          .closest(".skinContainer")
          .querySelector(".boxshadowDay");
        prevBoxshadowDay.classList.remove("active");
      }
      // Establecer el nuevo botón seleccionado
      selectedDayButton = buttonElement;

      const boxshadowDay = buttonElement
        .closest(".skinContainer")
        .querySelector(".boxshadowDay");
      boxshadowDay.classList.add("active");
    } else if (theme === "night") {
      if (selectedNightButton && selectedNightButton !== buttonElement) {
        // Restablecer el ícono del botón anterior a moonIcon.png
        const prevImgElement =
          selectedNightButton.querySelector(".buttonThemeImg");
        prevImgElement.src = "img/moonIcon.png";

        const prevBoxshadowNight = selectedNightButton
          .closest(".skinContainer")
          .querySelector(".boxshadowNight");
        prevBoxshadowNight.classList.remove("active");
      }
      // Establecer el nuevo botón seleccionado
      selectedNightButton = buttonElement;

      const boxshadowNight = buttonElement
        .closest(".skinContainer")
        .querySelector(".boxshadowNight");
      boxshadowNight.classList.add("active");
    }

    // Cambiar el ícono del botón actual a tickCheck.png
    imgElement.src = "img/tickCheck.png";

    // Aplicar el cambio de cursor
    applyCursorChange(cursorSrc, theme);

    // Guardar la selección en la base de datos
    const idLogeado = localStorage.getItem("idLogeado");
    if (idLogeado) {
      saveCursorSelection(idLogeado, theme, cursorSrc);
    }
  }

  // Función para aplicar el cambio de cursor
  function applyCursorChange(cursorSrc, theme) {
    if (theme === "day") {
      // Actualizar el cursor para el tema de día
      dayCursorSrc = cursorSrc || DEFAULT_DAY_CURSOR;
    } else if (theme === "night") {
      // Actualizar el cursor para el tema de noche
      nightCursorSrc = cursorSrc || DEFAULT_NIGHT_CURSOR;
    }

    // Actualizar el cursor si el tema actual coincide
    if (
      (checkbox.checked && theme === "day") ||
      (!checkbox.checked && theme === "night")
    ) {
      if (cursor && cursorPurpleish) {
        cursor.src =
          cursorSrc ||
          (theme === "day" ? DEFAULT_DAY_CURSOR : DEFAULT_NIGHT_CURSOR);
        const cursorPurpleishSrc = insertPurpleishBeforeExtension(cursor.src);

        if (cursorPurpleishSrc.includes("cccc_krillin") || cursorPurpleishSrc.includes("cccc_jefeEstudios")) {
          cursorPurpleish.style.display = "none";
        }else{
          cursorPurpleish.src = cursorPurpleishSrc;
        }
      }
    }

    handleSpecialCursor(cursorSrc, theme);
  }

  function insertPurpleishBeforeExtension(filename) {
    const lastDotIndex = filename.lastIndexOf(".");
    if (lastDotIndex === -1) {
      // Si no hay extensión, agregamos 'Purpleish' al final
      return filename + "Purpleish";
    } else {
      // Insertamos 'Purpleish' antes de la extensión
      return (
        filename.substring(0, lastDotIndex) +
        "Purpleish" +
        filename.substring(lastDotIndex)
      );
    }
  }

  // Función para guardar la selección del cursor en la base de datos y en localStorage
  async function saveCursorSelection(idLogeado, theme, cursorSrc) {
    const fieldToUpdate = theme === "day" ? "cursorDay" : "cursorNight";
    const updateData = {};
    updateData[fieldToUpdate] = cursorSrc;

    // Guardar en localStorage
    localStorage.setItem(fieldToUpdate, cursorSrc);

    // Guardar en la base de datos
    const url = `${supabaseUrl}?id=eq.${idLogeado}`;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error(
          "Error al actualizar el cursor:",
          response.statusText,
          errorData
        );
        throw new Error(
          "Error en la actualización del cursor: " + response.statusText
        );
      }

      const data = await response.json();
      console.log(
        "Cursor actualizado correctamente en la base de datos:",
        data
      );
      return data;
    } catch (error) {
      console.error("Error al actualizar el cursor:", error);
    }
  }

  // Función para cargar la selección de cursores
  // Función para cargar la selección de cursores
  async function loadCursorSelection(idLogeado) {
    if (!idLogeado) {
      console.log("Usuario no logueado, no se cargan selecciones de cursor.");
      return;
    }

    // Intentar cargar desde localStorage
    dayCursorSrc = localStorage.getItem("cursorDay") || DEFAULT_DAY_CURSOR;
    nightCursorSrc =
      localStorage.getItem("cursorNight") || DEFAULT_NIGHT_CURSOR;

    // Si no existen en localStorage, cargar desde la base de datos
    if (
      (!localStorage.getItem("cursorDay") ||
        !localStorage.getItem("cursorNight")) &&
      idLogeado
    ) {
      const url = `${supabaseUrl}?id=eq.${idLogeado}`;
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          console.error("Error al obtener el cursor:", response.statusText);
          return;
        }

        const data = await response.json();
        if (data.length > 0) {
          const userData = data[0];
          dayCursorSrc = userData.cursorDay || DEFAULT_DAY_CURSOR;
          nightCursorSrc = userData.cursorNight || DEFAULT_NIGHT_CURSOR;

          // Guardar en localStorage
          localStorage.setItem("cursorDay", dayCursorSrc);
          localStorage.setItem("cursorNight", nightCursorSrc);
        }
      } catch (error) {
        console.error(
          "Error al obtener el cursor desde la base de datos:",
          error
        );
      }
    }

    // Actualizar los botones para reflejar la selección
    updateSkinButtons();

    // Aplicar el cursor según el tema actual
    if (checkbox.checked) {
      applyCursorChange(dayCursorSrc, "day");
    } else {
      applyCursorChange(nightCursorSrc, "night");
    }
  }

  function updateSkinButtons() {
    // Actualizar los botones para el tema de día
    const buttonThemeDayElements = document.querySelectorAll(".buttonThemeDay");
    buttonThemeDayElements.forEach((button) => {
      const imgElement = button.querySelector(".buttonThemeImg");
      const cursorAlt = imgElement.getAttribute("alt");
      const boxshadowDay = button
        .closest(".skinContainer")
        ?.querySelector(".boxshadowDay");
      if (cursorAlt === dayCursorSrc) {
        // Este es el botón seleccionado
        imgElement.src = "img/tickCheck.png";
        selectedDayButton = button;
        if (boxshadowDay) {
          boxshadowDay.classList.add("active");
        }
      } else {
        // Restablecer al ícono predeterminado
        imgElement.src = "img/sunIcon.png";
        if (boxshadowDay) {
          boxshadowDay.classList.remove("active");
        }
      }
    });

    // Actualizar los botones para el tema de noche
    const buttonThemeNightElements =
      document.querySelectorAll(".buttonThemeNight");
    buttonThemeNightElements.forEach((button) => {
      const imgElement = button.querySelector(".buttonThemeImg");
      const cursorAlt = imgElement.getAttribute("alt");
      const boxshadowNight = button
        .closest(".skinContainer")
        ?.querySelector(".boxshadowNight");
      if (cursorAlt === nightCursorSrc) {
        // Este es el botón seleccionado
        imgElement.src = "img/tickCheck.png";
        selectedNightButton = button;
        if (boxshadowNight) {
          boxshadowNight.classList.add("active");
        }
      } else {
        // Restablecer al ícono predeterminado
        imgElement.src = "img/moonIcon.png";
        if (boxshadowNight) {
          boxshadowNight.classList.remove("active");
        }
      }
    });
  }

  /* CAMBIOS DE ESTILO CUANDO CAMBIO DE TEMA */
  let checkboxStatus = localStorage.getItem("checkboxStatus");

  if (checkboxStatus === null) {
    checkboxStatus = "false";
    localStorage.setItem("checkboxStatus", checkboxStatus);
  }

  checkbox.checked = checkboxStatus === "true";

  function applyTheme() {
    if (checkbox.checked) {
      // Light theme
      body.style.backgroundColor = "#dddcb0";
      body.style.color = "#313842";

      cards.forEach((card) => {
        card.style.borderColor = "#242e3ccb";
        card.style.color = "#242e3ccb";
      });

      buttons.forEach((button) => {
        button.style.backgroundColor = "#dddcb0";
      });

      horarioImg.src = "img/Calendario_Escolar_Day.png";
      if(!horarioImg.classList.contains("active")){
        horarioImg.classList.add("horarioImgDay");
        if(horarioImg.classList.contains("horarioImgNight")){
          horarioImg.classList.remove("horarioImgNight");
        }
      }
     

      if (cursor && cursorPurpleish) {
        cursor.src = dayCursorSrc;
        if (dayCursorSrc.includes("cccc_krillin") || dayCursorSrc.includes("cccc_jefeEstudios")) {
          cursorPurpleish.style.display = "none";
        }else{
          cursorPurpleish.src = insertPurpleishBeforeExtension(dayCursorSrc);
        }
      }
      if (flechaaSkins) {
        flechaaSkins.src = "img/flechaDay.png";
      }
      if (flechaaModifiers) {
        flechaaModifiers.src = "img/flechaDay.png";
      }
      if (logoutButton) {
        //setImageFromCacheOrAssign(logoutButton,"logoutDay", "img/logoutDay.png");
        logoutButton.src = "img/logoutDay.png";
      }
      notebookLogoLleno.src="img/libsIconLleno_day.png";
      notebookLogoVacio.src="img/libsIconVacio_day.png";
      settingsImgLight.src="img/settingsDay.png";
      settingsImg.src="img/settingsDay.png";
      pageNumber.style.backgroundColor = "#71604E";
      pageNumber.style.color = "#dddcb0";
      controls.style.color = "#71604E";
      menuLabelSkins.style.color = "#313842";
      menuLabelModifiers.style.color = "#313842";
      modifiersSettingsHiboxAreaContextMenu.className = "day";

    } else {
      // Dark theme
      body.style.backgroundColor = "#1c2128";
      body.style.color = "#bfd4e9";
      
      cards.forEach((card) => {
        card.style.borderColor = "grey";
        card.style.color = "#bfd4e9";

      });

      buttons.forEach((button) => {
        button.style.backgroundColor = "#262b31";
      });

      horarioImg.src = "img/Calendario_Escolar_Night.png";
      if(!horarioImg.classList.contains("active")){
        horarioImg.classList.add("horarioImgNight");
        if(horarioImg.classList.contains("horarioImgDay")){
          horarioImg.classList.remove("horarioImgDay");
        }
      }


      if (cursor && cursorPurpleish) {
        cursor.src = nightCursorSrc;
        if (nightCursorSrc.includes("cccc_krillin") || nightCursorSrc.includes("cccc_jefeEstudios")) {
          cursorPurpleish.style.display = "none";
        }else{
          cursorPurpleish.src = insertPurpleishBeforeExtension(nightCursorSrc);
        }
      }
      if (flechaaSkins) {
        flechaaSkins.src = "img/flechaNight.png";
      }
      if (flechaaModifiers) {
        flechaaModifiers.src = "img/flechaNight.png";
      }
      if (logoutButton) {
        //setImageFromCacheOrAssign(logoutButton,"logoutNight", "img/logoutNight.png");
        logoutButton.src = "img/logoutNight.png";
      }
      notebookLogoLleno.src="img/libsIconLleno_night.png";
      notebookLogoVacio.src="img/libsIconVacio_night.png";
      settingsImgLight.src="img/settingsNight.png";
      settingsImg.src="img/settingsNight.png";
      pageNumber.style.backgroundColor = "#bfd4e9";
      pageNumber.style.color = "#313842";
      controls.style.color = "#bfd4e9";
      menuLabelSkins.style.color = "#bfd4e9";
      menuLabelModifiers.style.color = "#bfd4e9";
      modifiersSettingsHiboxAreaContextMenu.className = "night";
    }

    ajustesColorLoginYregister(checkbox);
  }

  applyTheme();

  function ajustesColorLoginYregister(checkbox) {
    if (checkbox.checked) {
      if (loginContainer) {
        loginContainer.style.backgroundColor = "#c4bc95f4";
      }
      if (registerContainer) {
        registerContainer.style.backgroundColor = "#c4bc95f4";
      }

      const formTitles = document.querySelectorAll(".formTittle");
      formTitles.forEach(function (title) {
        title.style.color = "#313842";
      });

      const formLabel = document.querySelectorAll(".formLabel");
      formLabel.forEach(function (label) {
        label.style.color = "#313842";
      });

      const formLabelCheckbox = document.querySelectorAll(".formLabelCheckbox");
      formLabelCheckbox.forEach(function (labelCheckbox) {
        labelCheckbox.style.color = "#313842";
      });

      volumenImg.className = "volumenImgDay";
      volumenImgDropShadow.className = "day";

      const sheet = document.styleSheets[0]; // Asume que es la primera hoja de estilos
      for (let i = 0; i < sheet.cssRules.length; i++) {
        const rule = sheet.cssRules[i];
        if (rule.selectorText === '#stayLoged[type="checkbox"]') {
          rule.style.borderColor = "#f3edcc"; // Cambiar color del borde
          rule.style.backgroundColor = "#dddcb0"; // Cambiar color de fondo
        }
        if (rule.selectorText === '#stayLoged[type="checkbox"]:checked') {
          rule.style.backgroundColor = "#313842"; // Cambiar color de fondo cuando está seleccionado
          rule.style.borderColor = "#313842"; // Cambiar color del borde cuando está seleccionado
        }
        if (
          rule.selectorText === '#stayLoged[type="checkbox"]:checked::before'
        ) {
          rule.style.color = "#dddcb0"; // Cambiar color del ✔
        }

        // Modificar la regla de estilo de input[type="text"] y input[type="password"]
        if (
          rule.selectorText === 'input[type="text"], input[type="password"]'
        ) {
          rule.style.backgroundColor = "#dddcb0"; // Cambiar color de fondo
          rule.style.color = "#313842"; // Cambiar color de texto
          rule.style.outline = "4px solid #f3edcc"; // Cambiar el outline
        }

        // Modificar la regla de estilo para cuando el input esté en foco
        if (
          rule.selectorText ===
          'input[type="text"]:focus, input[type="password"]:focus'
        ) {
          rule.style.outline = "4px solid #313842"; // Cambiar el outline cuando está en foco
          rule.style.color = "#313842"; // Cambiar color de texto
        }
        if (
          rule.selectorText ===
          'input[type="text"]::placeholder, input[type="password"]::placeholder'
        ) {
          rule.style.color = "#c4bc95f4"; // Cambiar el color del placeholder
        }

        if (rule.selectorText === "#loginSubmit") {
          rule.style.backgroundColor = "#f3edcc"; // Cambiar color de fondo del botón login
          rule.style.color = "#969073f4";
        }

        // Modificar la regla de estilo para el hover de #loginSubmit
        if (rule.selectorText === "#loginSubmit:hover") {
          rule.style.backgroundColor = "#dddcb0"; // Cambiar el color de fondo en hover del botón login
          rule.style.color = "#313842";
          rule.style.border = "2px solid #313842"; // Cambiar el borde en hover
        }

        // Modificar la regla de estilo de #registerSubmit
        if (rule.selectorText === "#registerSubmit") {
          rule.style.backgroundColor = "#f3edcc"; // Cambiar color de fondo del botón login
          rule.style.color = "#969073f4";
        }

        // Modificar la regla de estilo para el hover de #registerSubmit
        if (rule.selectorText === "#registerSubmit:hover") {
          rule.style.backgroundColor = "#dddcb0"; // Cambiar el color de fondo en hover del botón login
          rule.style.color = "#313842";
          rule.style.border = "2px solid #313842"; // Cambiar el borde en hover
        }
        
        if (rule.selectorText === "#modifiersContainer") {
          rule.style.background = `linear-gradient(0deg, #dddcb0 10%, #2d1e03 200%)`;
          rule.style.background = `-webkit-linear-gradient(0deg, #dddcb0 10%, #2d1e03 200%)`;
          rule.style.background = `-moz-linear-gradient(0deg, #dddcb0 10%, #2d1e03 200%)`;
        }
        if (rule.selectorText === "#modifiersContainer::-webkit-scrollbar-thumb") {
          rule.style.backgroundColor = "#313842";
        }
        if (
          rule.selectorText === "#modifiersContainer::-webkit-scrollbar-thumb:hover"
        ) {
          rule.style.backgroundColor = "#68654f";
        }

        /* SKINS CONTAINER COLOR */
        if (rule.selectorText === "#skinsContainer") {
          rule.style.background = `linear-gradient(180deg,#dddcb0 10%, #2d1e03 200%)`;
          rule.style.background = `-webkit-linear-gradient(180deg,#dddcb0 10%, #2d1e03 200%)`;
          rule.style.background = `-moz-linear-gradient(180deg,#dddcb0 10%, #2d1e03 200%)`;
        }
        if (rule.selectorText === "#skinsContainer::-webkit-scrollbar-thumb") {
          rule.style.backgroundColor = "#313842";
        }
        if (
          rule.selectorText === "#skinsContainer::-webkit-scrollbar-thumb:hover"
        ) {
          rule.style.backgroundColor = "#68654f";
        }

        if (rule.selectorText === ".titulo") {
          rule.style.color = "#313842";
          rule.style.filter =
            "drop-shadow(3px 0px 1px #31384289) drop-shadow(-3px 0px 1px #31384289)";
        }

        // Cambiar propiedades de color para la clase .hr
        if (rule.selectorText === ".hr") {
          rule.style.backgroundColor = "#313842";
        }

        if (rule.selectorText === ".skinContainer") {
          rule.style.borderColor = "#313842"; // Cambia 'nuevo_color' por el valor de color deseado
        }

        // Cambiar propiedades de color para la clase .skinContainerBackdropFilter
        if (rule.selectorText === ".skinContainerBackdropFilter") {
          rule.style.backgroundColor = "#bab58d"; // Cambia 'nuevo_color' por el valor de color deseado
        }

        if (rule.selectorText === ".skinContainerLock") {
          rule.style.backgroundColor = "rgba(45, 42, 34, 0.542)"; // Cambia 'nuevo_color' por el valor de color deseado
        }

        if (rule.selectorText === '.slider') {
          rule.style.backgroundColor = "#C4C28E";
        }
        if (rule.selectorText === '.slider::-webkit-slider-thumb') {
          rule.style.filter = "brightness(0) saturate(100%) invert(39%) sepia(11%) saturate(975%) hue-rotate(350deg) brightness(89%) contrast(82%)";
        }
        if (rule.selectorText === '.slider::-moz-range-thumb') {
          rule.style.filter = "brightness(0) saturate(100%) invert(39%) sepia(11%) saturate(975%) hue-rotate(350deg) brightness(89%) contrast(82%)";
        }
        if (rule.selectorText === '.tooltipVolume') {
          rule.style.backgroundColor = "#71604E";
          rule.style.color = "#dddcb0";
        }
        if (rule.selectorText === '.sliderPaint') {
          rule.style.backgroundColor = "#C4C28E";
        }
        if (rule.selectorText === '.sliderPaint::-webkit-slider-thumb') {
          rule.style.filter = "brightness(0) saturate(100%) invert(39%) sepia(11%) saturate(975%) hue-rotate(350deg) brightness(89%) contrast(82%)";
        }
        if (rule.selectorText === '.sliderPaint::-moz-range-thumb') {
          rule.style.filter = "brightness(0) saturate(100%) invert(39%) sepia(11%) saturate(975%) hue-rotate(350deg) brightness(89%) contrast(82%)";
        }
        if (rule.selectorText === '.tooltipPaint') {
          rule.style.backgroundColor = "#71604E";
          rule.style.color = "#dddcb0";
        }

        if (rule.selectorText === '.controlsButton') {
          rule.style.boxShadow = "0px 0px 20px -5px #0a07079f inset";
          rule.style.filter = "brightness(0) saturate(100%) invert(39%) sepia(11%) saturate(975%) hue-rotate(350deg) brightness(89%) contrast(82%)";
        }
        if (rule.selectorText === '#writeButton.active') {
          rule.style.backgroundColor = "#71604E";
          rule.style.filter = 'drop-shadow(0px 0px 2px #DEDCB2)';
          rule.style.backgroundImage = "url('img/writeIconDay.png')";
        }
        if (rule.selectorText === '#paintButton.active') {
          rule.style.backgroundColor = "#71604E";
          rule.style.filter = 'drop-shadow(0px 0px 2px #DEDCB2)';
          rule.style.backgroundImage = "url('img/paintIconDay.png')";
        }
        if (rule.selectorText === '.paletteColor.active') {
          rule.style.boxShadow = '0px 0px 0px 3px #fffedb';
          rule.style.filter = 'drop-shadow(0px 0px 5px #71604E)';
        }
        if (rule.selectorText === '.information') {
          rule.style.filter = 'brightness(0) saturate(100%) invert(20%) sepia(12%) saturate(792%) hue-rotate(176deg) brightness(87%) contrast(89%)';
        }
        if (rule.selectorText === '.tooltip-text') {
          rule.style.backgroundColor = "#dddcb0";
          rule.style.color = "#313842";
          rule.boxShadow = "0 0 5px 0px #313842 inset";
        }
        if (rule.selectorText === '.tooltip-textHighlight') {
          rule.style.filter = "drop-shadow(0px 0px 5px #313842)";
        }
        if (rule.selectorText === '.formTittle.animate::after') {
          rule.style.filter = "drop-shadow(0 0 3px #313842)";
          rule.style.color = "#434c59";
        }
      }
    } else {
      if (loginContainer) {
        loginContainer.style.backgroundColor = "#141a1ff4";
      }
      if (registerContainer) {
        registerContainer.style.backgroundColor = "#141a1ff4";
      }

      const formTitles = document.querySelectorAll(".formTittle");
      formTitles.forEach(function (title) {
        title.style.color = "#bfd4e9";
      });

      const formLabel = document.querySelectorAll(".formLabel");
      formLabel.forEach(function (label) {
        label.style.color = "#bfd4e9";
      });

      const formLabelCheckbox = document.querySelectorAll(".formLabelCheckbox");
      formLabelCheckbox.forEach(function (labelCheckbox) {
        labelCheckbox.style.color = "#bfd4e9";
      });

      volumenImg.className = "volumenImgNight";
      volumenImgDropShadow.className = "night";

      const sheet = document.styleSheets[0]; // Asume que es la primera hoja de estilos
      for (let i = 0; i < sheet.cssRules.length; i++) {
        const rule = sheet.cssRules[i];
        if (rule.selectorText === '#stayLoged[type="checkbox"]') {
          rule.style.borderColor = "#819db8"; // Cambiar color del borde
          rule.style.backgroundColor = "#bfd4e9"; // Cambiar color de fondo
        }
        if (rule.selectorText === '#stayLoged[type="checkbox"]:checked') {
          rule.style.backgroundColor = "#345178"; // Cambiar color de fondo cuando está seleccionado
          rule.style.borderColor = "#345178"; // Cambiar color del borde cuando está seleccionado
        }
        if (
          rule.selectorText === '#stayLoged[type="checkbox"]:checked::before'
        ) {
          rule.style.color = "#bfd4e9"; // Cambiar color del ✔
        }

        // Modificar la regla de estilo de input[type="text"] y input[type="password"]
        if (
          rule.selectorText === 'input[type="text"], input[type="password"]'
        ) {
          rule.style.backgroundColor = "#819db8"; // Cambiar color de fondo
          rule.style.color = "#1c2128"; // Cambiar color de texto
          rule.style.outline = "4px solid #bfd4e9"; // Cambiar el outline
        }

        // Modificar la regla de estilo para cuando el input esté en foco
        if (
          rule.selectorText ===
          'input[type="text"]:focus, input[type="password"]:focus'
        ) {
          rule.style.outline = "4px solid #345178"; // Cambiar el outline cuando está en foco
          rule.style.color = "#bfd4e9"; // Cambiar color de texto
        }
        if (
          rule.selectorText ===
          'input[type="text"]::placeholder, input[type="password"]::placeholder'
        ) {
          rule.style.color = "#bfd4e9"; // Cambiar el color del placeholder
        }

        if (rule.selectorText === "#loginSubmit") {
          rule.style.backgroundColor = "#345178"; // Cambiar color de fondo del botón login
          rule.style.color = "#bfd4e9";
        }

        // Modificar la regla de estilo para el hover de #loginSubmit
        if (rule.selectorText === "#loginSubmit:hover") {
          rule.style.backgroundColor = "#1c2128"; // Cambiar el color de fondo en hover del botón login
          rule.style.border = "2px solid #bfd4e9b1"; // Cambiar el borde en hover
          rule.style.color = "#bfd4e9";
        }

        // Modificar la regla de estilo de #registerSubmit
        if (rule.selectorText === "#registerSubmit") {
          rule.style.backgroundColor = "#345178"; // Cambiar color de fondo del botón login
          rule.style.color = "#bfd4e9";
        }

        // Modificar la regla de estilo para el hover de #registerSubmit
        if (rule.selectorText === "#registerSubmit:hover") {
          rule.style.backgroundColor = "#1c2128"; // Cambiar el color de fondo en hover del botón login
          rule.style.border = "2px solid #bfd4e9b1"; // Cambiar el borde en hover
          rule.style.color = "#bfd4e9";
        }
        
        if (rule.selectorText === "#modifiersContainer") {
          rule.style.background = `linear-gradient(0deg, #1c2128 10%, #737f8b 200%)`;
          rule.style.background = `-webkit-linear-gradient(0deg, #1c2128 10%, #737f8b 200%)`;
          rule.style.background = `-moz-linear-gradient(0deg, #1c2128 10%, #737f8b 200%)`;
        }
        
        if (rule.selectorText === "#modifiersContainer::-webkit-scrollbar-thumb") {
          rule.style.backgroundColor = "#737f8b";
        }
        if (
          rule.selectorText === "#modifiersContainer::-webkit-scrollbar-thumb:hover"
        ) {
          rule.style.backgroundColor = "#bfd4e9";
        }

        if (rule.selectorText === "#skinsContainer") {
          rule.style.background = `linear-gradient(180deg,#1c2128 10%, #737f8b 200%)`;
          rule.style.background = `-webkit-linear-gradient(180deg,#1c2128 10%, #737f8b 200%)`;
          rule.style.background = `-moz-linear-gradient(180deg,#1c2128 10%, #737f8b 200%)`;
        }
        if (rule.selectorText === "#skinsContainer::-webkit-scrollbar-thumb") {
          rule.style.backgroundColor = "#737f8b";
        }
        if (
          rule.selectorText === "#skinsContainer::-webkit-scrollbar-thumb:hover"
        ) {
          rule.style.backgroundColor = "#bfd4e9";
        }

        if (rule.selectorText === ".titulo") {
          rule.style.color = "#bfd4e9"; // Cambia 'nuevo_color' por el valor de color deseado
          rule.style.filter =
            "drop-shadow(3px 0px 1px #bfd4e97f) drop-shadow(-3px 0px 1px #bfd4e97f)";
        }

        // Cambiar propiedades de color para la clase .hr
        if (rule.selectorText === ".hr") {
          rule.style.backgroundColor = "#bfd4e9"; // Cambia 'nuevo_color' por el valor de color deseado
        }

        if (rule.selectorText === ".skinContainer") {
          rule.style.borderColor = "#bfd4e9"; // Cambia 'nuevo_color' por el valor de color deseado
        }

        // Cambiar propiedades de color para la clase .skinContainerBackdropFilter
        if (rule.selectorText === ".skinContainerBackdropFilter") {
          rule.style.backgroundColor = "#2d3541"; // Cambia 'nuevo_color' por el valor de color deseado
        }

        if (rule.selectorText === ".skinContainerLock") {
          rule.style.backgroundColor = "rgba(119, 119, 119, 0.342)"; // Cambia 'nuevo_color' por el valor de color deseado
        }

        if (rule.selectorText === '.slider') {
          rule.style.backgroundColor = "#bfd4e9ac";
        }
        if (rule.selectorText === '.slider::-webkit-slider-thumb') {
          rule.style.filter = "brightness(0) saturate(100%) invert(31%) sepia(16%) saturate(1647%) hue-rotate(174deg) brightness(89%) contrast(89%)";
        }
        if (rule.selectorText === '.slider::-moz-range-thumb') {
          rule.style.filter = "brightness(0) saturate(100%) invert(31%) sepia(16%) saturate(1647%) hue-rotate(174deg) brightness(89%) contrast(89%)";
        }
        if (rule.selectorText === '.tooltipVolume') {
          rule.style.backgroundColor = "#34527a";
          rule.style.color = "#bfd4e9ac";
        }
        if (rule.selectorText === '.sliderPaint') {
          rule.style.backgroundColor = "#bfd4e9ac";
        }
        if (rule.selectorText === '.sliderPaint::-webkit-slider-thumb') {
          rule.style.filter = "brightness(0) saturate(100%) invert(31%) sepia(16%) saturate(1647%) hue-rotate(174deg) brightness(89%) contrast(89%)";
        }
        if (rule.selectorText === '.sliderPaint::-moz-range-thumb') {
          rule.style.filter = "brightness(0) saturate(100%) invert(31%) sepia(16%) saturate(1647%) hue-rotate(174deg) brightness(89%) contrast(89%)";
        }
        if (rule.selectorText === '.tooltipPaint') {
          rule.style.backgroundColor = "#34527a";
          rule.style.color = "#bfd4e9ac";
        }

        if (rule.selectorText === '.controlsButton') {
          rule.style.boxShadow = "0px 0px 20px -5px #0a070741 inset";
          rule.style.filter = "brightness(0) saturate(100%) invert(87%) sepia(13%) saturate(470%) hue-rotate(175deg) brightness(97%) contrast(88%)";
        }
        if (rule.selectorText === '#writeButton.active') {
          rule.style.backgroundColor = "#bfd4e9";
          rule.style.filter = 'drop-shadow(0px 0px 2px #15181db9)';
          rule.style.backgroundImage = "url('img/writeIconNight.png')";
        }
        if (rule.selectorText === '#paintButton.active') {
          rule.style.backgroundColor = "#bfd4e9";
          rule.style.filter = 'drop-shadow(0px 0px 2px #15181db9)';
          rule.style.backgroundImage = "url('img/paintIconNight.png')";
        }
        if (rule.selectorText === '.paletteColor.active') {
          rule.style.boxShadow = '0px 0px 0px 3px #dbedff';
          rule.style.filter = 'drop-shadow(0px 0px 5px #dbedff)';
        }
        if (rule.selectorText === '.information') {
          rule.style.filter = 'brightness(0) saturate(100%) invert(88%) sepia(10%) saturate(755%) hue-rotate(181deg) brightness(95%) contrast(92%)';
        }
        if (rule.selectorText === '.tooltip-text') {
          rule.style.backgroundColor = "#1c2128";
          rule.style.color = "#bfd4e9";
          rule.boxShadow = "0 0 5px 0px #bfd4e9 inset";
        }
        if (rule.selectorText === '.tooltip-textHighlight') {
          rule.style.filter = "drop-shadow(0px 0px 5px #bfd4e9)";
        }
        if (rule.selectorText === '.formTittle.animate::after') {
          rule.style.filter = "drop-shadow(0 0 3px #bfd4e9)";
          rule.style.color = "#cce1f7";
        }
      }
    }
  }

  /* ESTILOS HOVER PARA <a>HORARIO <a>LOGIN <a>REGISTER*/

  checkbox.addEventListener("change", () => {
    localStorage.setItem("checkboxStatus", checkbox.checked);
    applyTheme();

    // Actualizar el cursor según el tema
    if (checkbox.checked) {
      // Tema de día
      applyCursorChange(dayCursorSrc, "day");
    } else {
      // Tema de noche
      applyCursorChange(nightCursorSrc, "night");
    }
  });

  if (horario) {
    horario.addEventListener("mouseenter", function () {
      if (checkbox.checked) {
        //console.log("Tema claro");
        horario.style.backgroundColor = "#edeba4";
      } else {
        //console.log("Tema oscuro");
        horario.style.backgroundColor = "#333c4a9d";
      }
    });

    horario.addEventListener("mouseleave", function () {
      horario.style.backgroundColor = "#333c4a00";
    });
  }

  if (loginButton) {
    loginButton.addEventListener("mouseenter", function () {
      if (checkbox.checked) {
        //console.log("Tema claro");
        loginButton.style.backgroundColor = "#edeba4";
      } else {
        //console.log("Tema oscuro");
        loginButton.style.backgroundColor = "#333c4a9d";
      }
    });

    loginButton.addEventListener("mouseleave", function () {
      loginButton.style.backgroundColor = "#333c4a00";
    });
  }

  if (registerButton) {
    registerButton.addEventListener("mouseenter", function () {
      if (checkbox.checked) {
        //console.log("Tema claro");
        registerButton.style.backgroundColor = "#edeba4";
      } else {
        //console.log("Tema oscuro");
        registerButton.style.backgroundColor = "#333c4a9d";
      }
    });

    registerButton.addEventListener("mouseleave", function () {
      registerButton.style.backgroundColor = "#333c4a00";
    });
  }

  if (notas) {
    notas.addEventListener("mouseenter", function () {
      if (checkbox.checked) {
        //console.log("Tema claro");
        notas.style.backgroundColor = "#edeba4";
      } else {
        //console.log("Tema oscuro");
        notas.style.backgroundColor = "#333c4a9d";
      }
    });

    notas.addEventListener("mouseleave", function () {
      notas.style.backgroundColor = "#333c4a00";
    });
  }

  /* FUNCIONES CONECTAR DATABASE */

  const supabaseUrl =
    "https://jlinrmkailmfvzjkdfni.supabase.co/rest/v1/usuario";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsaW5ybWthaWxtZnZ6amtkZm5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc1MzMwNjUsImV4cCI6MjA0MzEwOTA2NX0.0BmL21nXr61WxALojF7kRk7glhB522Ss87zbBVzpSPo";

  // Verificar si el usuario existe por nombre
  async function existeUsuario(nombre) {
    const url = `${supabaseUrl}?nombre=eq.${nombre}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data.length > 0; // Devuelve true si existe, false si no
  }

  // Obtener el último id de la tabla usuario
  async function obtenerUltimoId() {
    const url = `${supabaseUrl}?select=id&order=id.desc&limit=1`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.length > 0) {
      return data[0].id; // Devolver el último id
    } else {
      return 0; // Si no hay registros, devolver 0
    }
  }

  // Registrar un nuevo usuario con id autoincrementado manualmente
  async function registrarUsuario(nombre, password, coins, skinsUnlock) {
    try {
      const ultimoId = await obtenerUltimoId(); // Obtener el último id
      const nuevoId = ultimoId + 1; // Incrementar el id

      const nuevoUsuario = {
        id: nuevoId, // Incluir el nuevo id manualmente
        nombre: nombre,
        password: password,
        coins: parseInt(coins), // Convertir coins a entero si es necesario
        skinsUnlock: skinsUnlock,
      };

      const addResponse = await fetch(supabaseUrl, {
        method: "POST",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoUsuario),
      });

      if (addResponse.ok) {
        const data = await addResponse.json();
        console.log("Usuario agregado con éxito:", data);
        return data;
      } else {
        const errorData = await addResponse.text();
        console.error("Error al agregar el usuario:", errorData);
        throw new Error("Error en el registro del usuario");
      }
    } catch (error) {
      console.log("Error en el registro de usuario:", error);
    }
  }

  async function verificarUsuarioInicioSesion(nombre, password) {
    // Usamos directamente supabaseUrl ya que incluye '/rest/v1/usuario'
    const url = `${supabaseUrl}?nombre=eq.${encodeURIComponent(
      nombre
    )}&password=eq.${encodeURIComponent(password)}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.length > 0) {
      return parseInt(data[0].id, 10); // Devuelve el id del usuario si se encuentra
    } else {
      return 0; // Devuelve 0 si no se encuentra al usuario
    }
  }

  // 3. Obtener las monedas (coins) de un usuario por id
  async function obtenerMonedasDeUsuario(id) {
    const url = `${supabaseUrl}?id=eq.${id}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.length > 0) {
      return data[0].coins; // Devuelve el valor de coins
    } else {
      console.error("Usuario no encontrado");
      return null;
    }
  }

  // 4. Obtener skinsUnlock de un usuario por id
  async function obtenerSkinsUnlockDeUsuario(id) {
    const url = `${supabaseUrl}?id=eq.${id}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.length > 0) {
      return data[0].skinsUnlock; // Devuelve el valor de skinsUnlock
    } else {
      console.error("Usuario no encontrado");
      return null;
    }
  }

  // 5. Actualizar las monedas (coins) de un usuario por id
  async function actualizarMonedasUsuario(idLogin, monedasNuevas) {
    if (
      isNaN(monedasNuevas) ||
      monedasNuevas === null ||
      monedasNuevas === undefined
    ) {
      console.error("El valor de monedasNuevas no es válido:", monedasNuevas);
      return;
    }

    const url = `${supabaseUrl}?id=eq.${idLogin}`;
    const actualizarMonedas = { coins: parseInt(monedasNuevas) };

    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify(actualizarMonedas),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error(
          "Error al actualizar las monedas:",
          response.statusText,
          errorData
        );
        throw new Error(
          "Error en la actualización de monedas: " + response.statusText
        );
      }

      const data = await response.json();
      //console.log('Monedas actualizadas correctamente:', data);
      return data;
    } catch (error) {
      console.error("Error al actualizar las monedas:", error);
    }
  }

  // 7. Obtener un usuario por id
  async function obtenerUsuarioPorId(id) {
    // Comprobamos si el ID es válido
    if (!id) {
      console.error("ID no proporcionado");
      return null;
    }

    // Construimos la URL para buscar al usuario por su ID
    const url = `${supabaseUrl}?id=eq.${id}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
        },
      });

      // Verificamos si la respuesta es exitosa
      if (!response.ok) {
        console.error("Error en la solicitud:", response.statusText);
        return null; // Manejo de error
      }

      const data = await response.json();

      // Verificamos si encontramos un usuario
      if (data.length > 0) {
        return data[0].nombre; // Devuelve el nombre del usuario si se encuentra
      } else {
        console.error("Usuario no encontrado");
        return null; // Devuelve null si no se encuentra el usuario
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      return null; // Devuelve null en caso de error en la solicitud
    }
  }

  /* goTo LOGIN */
  let isAnimatingLogin = false;

  loginButton.addEventListener("click", function () {
    if (!loginScreen.classList.contains("active") && !isAnimatingLogin) {
      const loginTittle = document.querySelector(".formTittle.login");
      loginTittle.classList.remove("animate");
      void loginTittle.offsetWidth;
      loginTittle.classList.add("animate");

      isAnimatingLogin = true;
      loginScreen.classList.add("active");
      loginScreen.style.backdropFilter = "blur(5px)";
      loginScreen.style.opacity = "100%";
      loginContainer.style.opacity = "100%";
      checkboxLogin.checked = true;

      campoNameLogin.disabled = false;
      campoPasswordLogin.disabled = false;
      loginSubmit.disabled = false;
      registerSubmit.disabled = true;
      campoNameRegister.disabled = true;
      campoPasswordRegister.disabled = true;
      campoPasswordRepeatRegister.disabled = true;

      document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          loginSubmit.click();
        }
      });

      setTimeout(() => {
        isAnimatingLogin = false;
      }, 500);

      toggleUnlockPass("reset");
    }
  });

  loginScreen.addEventListener("click", function (event) {
    if (isAnimatingLogin) return;

    // Comprueba si el clic fue fuera del loginContainer
    if (!loginContainer.contains(event.target)) {
      isAnimatingLogin = true;
      loginScreen.style.backdropFilter = "blur(0)";
      loginScreen.style.opacity = "0%";
      loginContainer.style.opacity = "0%";

      setTimeout(() => {
        loginScreen.classList.remove("active");
        loginScreen.style.opacity = "0%";
        loginContainer.style.opacity = "0%";
        isAnimatingLogin = false;
        campoNameLogin.value = "";
        campoPasswordLogin.value = "";
        campoNameLogin.blur();
        campoPasswordLogin.blur();

        // Reiniciar mensajes de error y estilos
        campoNameLogin.removeAttribute("style");
        campoPasswordLogin.removeAttribute("style");
        campoNameRegister.removeAttribute("style");
        campoPasswordRegister.removeAttribute("style");
        campoPasswordRepeatRegister.removeAttribute("style");
        errorLabelLogin.style.visibility = "hidden";
        errorLabelRegister.style.visibility = "hidden";
        ajustesColorLoginYregister(checkbox);

        registerSubmit.disabled = true;
        campoNameRegister.disabled = true;
        campoPasswordRegister.disabled = true;
        campoPasswordRepeatRegister.disabled = true;
        campoNameLogin.disabled = true;
        campoPasswordLogin.disabled = true;
        loginSubmit.disabled = true;
      }, 500);
    }
  });

  document
    .querySelector(".formRowCheckbox")
    .addEventListener("click", function () {
      checkboxLogin.checked = !checkboxLogin.checked;
    });

  document.getElementById("stayLoged").addEventListener("click", function () {
    checkboxLogin.checked = !checkboxLogin.checked;
  });

  loginSubmit.addEventListener("click", async function () {
    // Reiniciar mensajes de error y estilos
    campoNameLogin.removeAttribute("style");
    campoPasswordLogin.removeAttribute("style");
    campoNameRegister.removeAttribute("style");
    campoPasswordRegister.removeAttribute("style");
    campoPasswordRepeatRegister.removeAttribute("style");
    errorLabelLogin.style.visibility = "hidden";
    errorLabelRegister.style.visibility = "hidden";

    // Validar campos vacíos antes de continuar
    if (
      campoNameLogin.value.trim() === "" ||
      campoPasswordLogin.value.trim() === ""
    ) {
      errorLabelLogin.style.visibility = "visible";
      errorLabelLogin.textContent = "All the information must be filled.";
      errorLabelLogin.style.color = "red";

      if (campoNameLogin.value.trim() === "") {
        campoNameLogin.style.color = "red";
        campoNameLogin.style.outline = "4px solid red";
      }

      if (campoPasswordLogin.value.trim() === "") {
        campoPasswordLogin.style.color = "red";
        campoPasswordLogin.style.outline = "4px solid red";
      }
      return; // Salir de la función si hay campos vacíos
    }

    try {
      // Intentar verificar las credenciales
      idLogeado = await verificarUsuarioInicioSesion(
        campoNameLogin.value,
        campoPasswordLogin.value
      );

      if (idLogeado === 0) {
        // Credenciales incorrectas
        errorLabelLogin.textContent = "Username or password incorrect.";
        errorLabelLogin.style.color = "red";
        campoPasswordLogin.style.color = "red";
        campoPasswordLogin.style.outline = "4px solid red";
        campoNameLogin.style.color = "red";
        campoNameLogin.style.outline = "4px solid red";
        return; // Salir de la función si las credenciales son incorrectas
      }

      // Inicio de sesión exitoso, actualizar información del usuario
      if (checkboxLogin.checked) {
        localStorage.setItem("sesionAutomatica", "true");
        localStorage.setItem("idLogeado", idLogeado);
      } else {
        localStorage.removeItem("sesionAutomatica");
        localStorage.setItem("idLogeado", idLogeado);
      }

      // Actualizar información en la interfaz
      await actualizarHelloMessage(idLogeado);
      await actualizarMonedas(idLogeado);
      await cargarSkins(idLogeado);
      applyTheme();
      ajustesColorLoginYregister(checkbox);

      actualizarEstadoElementosSesion();
      loadCursorSelection(idLogeado);

      cargarNotas(idLogeado);

      horarioImg.style.setProperty(
        "transform",
        "translateX(-10px) scale(0.02, 0.02)",
        "important"
      );

      // Cerrar el formulario de inicio de sesión
      loginScreen.click();
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      helloMessage.textContent =
        "Error en el servidor. Inténtalo de nuevo más tarde.";
    }
  });

  /* goTo REGISTER */

  let isAnimatingRegister = false;

  registerButton.addEventListener("click", function () {
    if (!registerScreen.classList.contains("active") && !isAnimatingRegister) {

      const registerTittle = document.querySelector(".formTittle.register");
      registerTittle.classList.remove("animate");
      void registerTittle.offsetWidth;
      registerTittle.classList.add("animate");

      isAnimatingRegister = true;
      registerScreen.classList.add("active");
      registerScreen.style.backdropFilter = "blur(5px)";
      registerScreen.style.opacity = "100%";
      registerContainer.style.opacity = "100%";

      campoNameLogin.disabled = true;
      campoPasswordLogin.disabled = true;
      loginSubmit.disabled = true;
      registerSubmit.disabled = false;
      campoNameRegister.disabled = false;
      campoPasswordRegister.disabled = false;
      campoPasswordRepeatRegister.disabled = false;

      document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          registerSubmit.click();
        }
      });

      setTimeout(() => {
        isAnimatingRegister = false;
      }, 500);

      toggleUnlockPass("reset");
    }
  });

  registerScreen.addEventListener("click", function (event) {
    if (isAnimatingRegister) return;

    // Comprueba si el clic fue fuera del registerContainer
    if (!registerContainer.contains(event.target)) {
      isAnimatingRegister = true;
      registerScreen.style.backdropFilter = "blur(0)";
      registerScreen.style.opacity = "0%";
      registerContainer.style.opacity = "0%";

      setTimeout(() => {
        registerScreen.classList.remove("active");
        registerScreen.style.opacity = "0%";
        registerContainer.style.opacity = "0%";
        isAnimatingRegister = false;
        campoNameRegister.value = "";
        campoPasswordRegister.value = "";
        campoPasswordRepeatRegister.value = "";
        campoNameRegister.blur();
        campoPasswordRegister.blur();
        campoPasswordRepeatRegister.blur();
        ajustesColorLoginYregister(checkbox);

        campoNameLogin.removeAttribute("style");
        campoPasswordLogin.removeAttribute("style");
        campoNameRegister.removeAttribute("style");
        campoPasswordRegister.removeAttribute("style");
        campoPasswordRepeatRegister.removeAttribute("style");
        errorLabelLogin.style.visibility = "hidden";
        errorLabelRegister.style.visibility = "hidden";

        registerSubmit.disabled = true;
        campoNameRegister.disabled = true;
        campoPasswordRegister.disabled = true;
        campoPasswordRepeatRegister.disabled = true;
        campoNameLogin.disabled = true;
        campoPasswordLogin.disabled = true;
        loginSubmit.disabled = true;
      }, 500);
    }
  });

  registerSubmit.addEventListener("click", async function () {
    // Reiniciar el estado de los estilos y mensajes de error
    campoNameLogin.removeAttribute("style");
    campoPasswordLogin.removeAttribute("style");
    campoNameRegister.removeAttribute("style");
    campoPasswordRegister.removeAttribute("style");
    campoPasswordRepeatRegister.removeAttribute("style");
    errorLabelLogin.style.visibility = "hidden";
    errorLabelRegister.style.visibility = "hidden";
    ajustesColorLoginYregister(checkbox);

    // Validar si algún campo está vacío
    if (
      campoNameRegister.value.trim() === "" ||
      campoPasswordRegister.value.trim() === "" ||
      campoPasswordRepeatRegister.value.trim() === ""
    ) {
      errorLabelRegister.style.visibility = "visible";
      errorLabelRegister.textContent = "All the information must be filled.";
      errorLabelRegister.style.color = "red";

      if (campoNameRegister.value.trim() === "") {
        // Resaltar campo vacío
        campoNameRegister.style.color = "red";
        campoNameRegister.style.outline = "4px solid red";
      }

      if (campoPasswordRegister.value.trim() === "") {
        // Resaltar campo vacío
        campoPasswordRegister.style.color = "red";
        campoPasswordRegister.style.outline = "4px solid red";
      }

      if (campoPasswordRepeatRegister.value.trim() === "") {
        // Resaltar campo vacío
        campoPasswordRepeatRegister.style.color = "red";
        campoPasswordRepeatRegister.style.outline = "4px solid red";
      }
    } else {
      // Validar si las contraseñas coinciden
      if (campoPasswordRegister.value !== campoPasswordRepeatRegister.value) {
        errorLabelRegister.style.visibility = "visible";
        errorLabelRegister.textContent = "The passwords don't match.";
        errorLabelRegister.style.color = "red";
        campoPasswordRegister.style.color = "red";
        campoPasswordRegister.style.outline = "4px solid red";
        campoPasswordRepeatRegister.style.color = "red";
        campoPasswordRepeatRegister.style.outline = "4px solid red";
      } else {
        // Verificar si el usuario ya existe
        const usuarioExiste = await existeUsuario(campoNameRegister.value); // Cambiado a `usuarioExiste`

        if (usuarioExiste) {
          // Cambiado a `usuarioExiste`
          errorLabelRegister.style.visibility = "visible";
          errorLabelRegister.textContent = "El usuario ya existe.";
          errorLabelRegister.style.color = "red";
          campoNameRegister.style.color = "red";
          campoNameRegister.style.outline = "4px solid red";
        } else {
          // Restablecer los estilos si todo es correcto
          errorLabelRegister.style.visibility = "visible";
          errorLabelRegister.textContent = "";
          errorLabelRegister.style.color = "#bfd4e9";
          campoNameRegister.style.color = "#1c2128";
          campoNameRegister.style.outline = "4px solid #bfd4e9";
          campoPasswordRegister.style.color = "#1c2128";
          campoPasswordRepeatRegister.style.color = "#1c2128";

          try {
            // Intentar registrar al usuario con id autoincrementado
            await registrarUsuario(
              campoNameRegister.value,
              campoPasswordRegister.value,
              "0",
              "11LLLLLLLLLLLLLL"
            );
            ajustesColorLoginYregister(checkbox);
            errorLabelRegister.style.visibility = "visible";
            errorLabelRegister.textContent = "User signed up correctly!";
            errorLabelRegister.style.color = "#bfd4e9";
          } catch (error) {
            errorLabelRegister.style.visibility = "visible";
            errorLabelRegister.textContent = "Error when signing up.";
            errorLabelRegister.style.color = "red";
            console.log(error);
          }
        }
      }
    }
  });

  /* HIDE/SHOW PASSWORD */
  function toggleUnlockPass(action = "toggle") {
    const calvoIcons = document.querySelectorAll(".unlockPassIconCalvo");

    if (action === "reset") {
      // Restablecer al estado por defecto
      const passwordFields = document.querySelectorAll(".passwordField");
      passwordFields.forEach((field) => {
        field.type = "password";
        field.dataset.isShowUnlockPass = "false";
      });

      const shadows = document.querySelectorAll(".unlockPassIconShadow");
      shadows.forEach((shadow) => {
        shadow.style.opacity = "100%";
      });

      const hands = document.querySelectorAll(".unlockPassIconHands");
      hands.forEach((hand) => {
        hand.classList.remove("active");
      });
    } else if (action === "toggle") {
      calvoIcons.forEach((icon) => {
        // Evitar añadir múltiples event listeners al mismo elemento
        icon.removeEventListener("click", handleIconClick);
        icon.addEventListener("click", handleIconClick);
      });
    }

    function handleIconClick() {
      const icon = this;
      // Encontrar el contenedor más cercano que puede ser 'formRow' o 'formRow2'
      const closestFormRow = icon.closest(".formRow, .formRow2");
      if (!closestFormRow) {
        console.error("No se encontró el contenedor del campo de contraseña.");
        return;
      }

      const closestPasswordField =
        closestFormRow.querySelector(".passwordField");
      const closestShadow = closestFormRow.querySelector(
        ".unlockPassIconShadow"
      );
      const closestHands = closestFormRow.querySelector(".unlockPassIconHands");

      if (closestPasswordField && closestShadow && closestHands) {
        // Obtener el estado actual del campo de contraseña
        let isShowUnlockPass =
          closestPasswordField.dataset.isShowUnlockPass === "true";

        if (isShowUnlockPass) {
          // Ocultar contraseña
          closestShadow.style.opacity = "100%";
          closestHands.classList.remove("active");
          closestPasswordField.type = "password";
          closestPasswordField.dataset.isShowUnlockPass = "false";
        } else {
          // Mostrar contraseña
          closestShadow.style.opacity = "0%";
          closestHands.classList.add("active");
          closestPasswordField.type = "text";
          closestPasswordField.dataset.isShowUnlockPass = "true";
        }
      } else {
        console.error(
          "unlockPassIconCalvo ERROR: No se encontraron los elementos más cercanos."
        );
      }
    }
  }

  toggleUnlockPass();

  /* GUARDAR SESION LOCALSTORAGE */

  window.addEventListener("load", async function () {
    const sesionAutomatica = localStorage.getItem("sesionAutomatica");
    idLogeado = localStorage.getItem("idLogeado");

    if (sesionAutomatica) {
      try {
        // Actualizar información del usuario
        await actualizarHelloMessage(idLogeado);
        await actualizarMonedas(idLogeado);
        await cargarSkins(idLogeado);
        await loadCursorSelection(idLogeado);
        cargarNotas(idLogeado);
        cargarDibujosEnTodasLasPaginas();
        actualizarEstadoElementosSesion();
      } catch (error) {
        console.error("Error durante el inicio de sesión automático:", error);
      }
    } else {
      // Usuario deslogueado: usar cursores predeterminados y limpiar selecciones
      dayCursorSrc = DEFAULT_DAY_CURSOR;
      nightCursorSrc = DEFAULT_NIGHT_CURSOR;
      localStorage.removeItem("cursorDay");
      localStorage.removeItem("cursorNight");
      localStorage.removeItem("idLogeado");
    }

    // Aplicar el tema
    applyTheme();
    // Actualizar estado de los elementos según la sesión
    actualizarEstadoElementosSesion();

    updateAudioMaster();
  });

  // ... (código existente)

  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      // Limpiar datos de sesión
      localStorage.removeItem("sesionAutomatica");
      localStorage.removeItem("idLogeado");

      // Limpiar selección de cursores
      localStorage.removeItem("cursorDay");
      localStorage.removeItem("cursorNight");

      // Restablecer cursores predeterminados
      dayCursorSrc = DEFAULT_DAY_CURSOR;
      nightCursorSrc = DEFAULT_NIGHT_CURSOR;
      applyTheme();

      // Limpiar información de la interfaz
      helloMessage.textContent = "";
      coinLabel.textContent = "";

      // Actualizar estado de los elementos
      actualizarEstadoElementosSesion();

      horarioImg.style.setProperty(
        "transform",
        "translateX(-75px) scale(0.02, 0.02)",
        "important"
      );

      location.reload();
    });
  }

  /* ACTUALIZAR helloMessage */

  async function actualizarHelloMessage(idLogeado) {
    try {
      const nombrePorId = await obtenerUsuarioPorId(idLogeado);
      helloMessage.textContent = "";
      helloMessage.textContent += getHelloMessage(
        capitalizeFirstLetter(nombrePorId)
      );
    } catch (error) {
      console.error("Error durante ACTUALIZAR helloMessage:", error);
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  function getHelloMessage(nombre) {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
    const hour = now.getHours(); // Hora actual en formato 24h
    const minute = now.getMinutes(); // Minutos actuales
    const totalMinutes = hour * 60 + minute;

    let helloMessage = "";

    // Definir rangos de horas por defecto
    if (hour >= 7 && hour < 14) {
      helloMessage = "¡Buenos días " + nombre + "!";
    } else if (hour >= 14 && hour < 21) {
      helloMessage = "¡Buenas tardes " + nombre + "!";
    } else if (hour >= 21 || hour < 1) {
      helloMessage = "💤 Buenas noches " + nombre + " 💤";
    } else {
      helloMessage = "¿Qué haces trasnochando " + nombre + "?";
    }

    // Empresas
    if (
      (dayOfWeek === 1 && totalMinutes >= 880 && totalMinutes < 980) ||
      (dayOfWeek === 5 && totalMinutes >= 930 && totalMinutes < 980)
    ) {
      const messages = [
        `¡Buenas tardes ${nombre}!`,
        "Ohh Mónica, Mónica... tu voz más melódica que una harmónica",
        "Ohh Mónica, Mónica... tu voz más melódica que una harmónica",
        "Ohh Mónica, Mónica... tu voz más melódica que una harmónica",
        "Ohh Mónica, Mónica... tu voz más melódica que una harmónica",
        "Ohh Mónica, Mónica... tu voz más melódica que una harmónica",
      ];

      helloMessage = messages[Math.floor(Math.random() * messages.length)];
    }

    // Moviles y datos SIN JUEVES
    if (
      (dayOfWeek === 1 && totalMinutes >= 980 && totalMinutes < 1150) ||
      // Martes de 15:30 (930 minutos) a 18:20 (1100 minutos)
      (dayOfWeek === 2 && totalMinutes >= 930 && totalMinutes < 1100) ||
      // Miércoles de 15:30 (930 minutos) a 17:10 (1030 minutos)
      (dayOfWeek === 3 && totalMinutes >= 930 && totalMinutes < 1030) ||
      // Viernes de 18:20 (1100 minutos) a 20:00 (1200 minutos)
      (dayOfWeek === 5 && totalMinutes >= 1100 && totalMinutes < 1200)
    ) {
      const messages = [
        `¡Buenas tardes ${nombre}!`,
        "O atiendes a Iván o te va a ir mal",
        "O atiendes a Iván o te va a ir mal",
        "O atiendes a Iván o te va a ir mal",
        "O atiendes a Iván o te va a ir mal",
        "O atiendes a Iván o te va a ir mal",
      ];

      helloMessage = messages[Math.floor(Math.random() * messages.length)];
    }

    // Moviles y datos JUEVES
    if (dayOfWeek === 4 && totalMinutes >= 880 && totalMinutes < 1200) {
      const messages = [
        `¡̵B̵u̵e̵n̵a̵s̵ ̵t̵a̵r̵d̵e̵s̵!̵  Las del jueves no son buenas...`,
        "Iván nos enseña bien con un poco de música Zen",
      ];

      helloMessage = messages[Math.floor(Math.random() * messages.length)];
    }

    //Interfaces
    if (
      (dayOfWeek === 1 && totalMinutes >= 1150 && totalMinutes < 1320) || // Lunes de 19:10 (1150 minutos) a 22:00 (1320 minutos)
      (dayOfWeek === 3 && totalMinutes >= 1150 && totalMinutes < 1320) || // Miércoles de 19:10 (1150 minutos) a 22:00 (1320 minutos)
      (dayOfWeek === 5 && totalMinutes >= 1220 && totalMinutes < 1320)
    ) {
      // Viernes de 20:20 (1220 minutos) a 22:00 (1320 minutos)
      const messages = [
        `¡${nombre}, no es la materia adecuada para relajarse!`,
        "¡Deja de mirar aquí y atiende a Fernando!",
        "Sprint final, ¡ánimos!",
      ];

      helloMessage = messages[Math.floor(Math.random() * messages.length)];
    }

    //Sistemas empresariales
    if (
      (dayOfWeek === 2 && totalMinutes >= 1150 && totalMinutes < 1320) || // Martes de 19:10 (1150 minutos) a 22:00 (1320 minutos)
      (dayOfWeek === 4 && totalMinutes >= 1220 && totalMinutes < 1320)
    ) {
      // Jueves de 20:20 (1220 minutos) a 22:00 (1320 minutos)
      const messages = [
        `¡Buenas tardes ${nombre}!`,
        `¡Hola ${nombre}, quieres trabajar en Odoo?`,
        `¡Hola ${nombre}, quieres trabajar en Odoo?`,
        `¡Hola ${nombre}, quieres trabajar en Odoo?`,
        `¡Hola ${nombre}, quieres trabajar en Odoo?`,
        `¡Hola ${nombre}, quieres trabajar en Odoo?`,
      ];

      helloMessage = messages[Math.floor(Math.random() * messages.length)];
    }

    //Servicios y procesos
    if (
      (dayOfWeek === 3 && totalMinutes >= 1055 && totalMinutes < 1150) || // Miércoles
      (dayOfWeek === 5 && totalMinutes >= 980 && totalMinutes < 1100)
    ) {
      // Viernes
      const messages = [
        `¡Buenas tardes ${nombre}!`,
        `Queres atender de una vez ${nombre}? Jose Miguel se merece más`,
        `Queres atender de una vez ${nombre}? Jose Miguel se merece más`,
        `Queres atender de una vez ${nombre}? Jose Miguel se merece más`,
        `Queres atender de una vez ${nombre}? Jose Miguel se merece más`,
        `Queres atender de una vez ${nombre}? Jose Miguel se merece más`,
      ];

      helloMessage = messages[Math.floor(Math.random() * messages.length)];
    }

    //Inglés
    if (
      (dayOfWeek === 2 && totalMinutes >= 1100 && totalMinutes < 1150) || // Martes
      (dayOfWeek === 3 && totalMinutes >= 880 && totalMinutes < 930)
    ) {
      // Miércoles
      const messages = [
        `Good afternoon ${nombre}!`,
        `¡Hello ${nombre}, Reading-1. Genshing Impact is a game originaly...`,
        `¡Hello ${nombre}, Reading-1. Genshing Impact is a game originaly...`,
        `¡Hello ${nombre}, Reading-1. Genshing Impact is a game originaly...`,
        `¡Hello ${nombre}, Reading-1. Genshing Impact is a game originaly...`,
        `¡Hello ${nombre}, Reading-1. Genshing Impact is a game originaly...`,
      ];

      helloMessage = messages[Math.floor(Math.random() * messages.length)];
    }

    // Comienzo recreo
    if (
      dayOfWeek >= 1 &&
      dayOfWeek <= 5 &&
      ((totalMinutes >= 1025 && totalMinutes < 1035) || // 17:05 (1025 minutos) a 17:15 (1035 minutos)
        (totalMinutes >= 1195 && totalMinutes < 1205))
    ) {
      // 19:55 (1195 minutos) a 20:05 (1205 minutos)
      const messages = [
        "¡Calienta que sales!",
        `Toca un descansillo... ¡menos mal!`,
      ];

      helloMessage = messages[Math.floor(Math.random() * messages.length)];
    }

    // Final recreo
    if (
      dayOfWeek >= 1 &&
      dayOfWeek <= 5 &&
      ((totalMinutes >= 1035 && totalMinutes < 1055) || // 17:15 (1035 minutos) a 17:35 (1055 minutos)
        (totalMinutes >= 1205 && totalMinutes < 1225))
    ) {
      // 20:05 (1205 minutos) a 20:25 (1225 minutos)
      const messages = [
        `¡Que pereza volver a este aula de m****a!`,
        "Otra vez a clase... ME DERRItOOOooo...",
      ];

      helloMessage = messages[Math.floor(Math.random() * messages.length)];
    }

    //Mensaje final del día
    if (
      dayOfWeek >= 1 &&
      dayOfWeek <= 5 &&
      totalMinutes >= 1305 &&
      totalMinutes < 1325
    ) {
      // 21:45 (1305 minutos) a 22:05 (1325 minutos)
      const messages = [
        `Queda poco, ¡venga ${nombre} un último sprint!`,
        "Me quiero ir a casaaaa",
        "Me voy a jugar un textMessage simulator cuando llegue a casa",
        "Esto de ser un simple mensaje y pasarse la eternidad aquí cansa más que cualquier ciclo superior de tarde en aEstrada...",
      ];

      helloMessage = messages[Math.floor(Math.random() * messages.length)];
    }

    return helloMessage;
  }

  // Función para programar la actualización a horas específicas
  function scheduleHelloMessageUpdates() {
    if (idLogeado) {
      const now = new Date();
      const secondsUntilNextUpdate = (60 - now.getSeconds()) * 1000; // Esperar hasta el próximo minuto

      // Programar la actualización a las horas específicas
      setTimeout(() => {
        actualizarHelloMessage(idLogeado); // Llamar a la función al minuto exacto

        // Luego programar las actualizaciones para las horas específicas del día siguiente
        const hoursToUpdate = [
          { hour: 1, minute: 0 },
          { hour: 7, minute: 0 },
          { hour: 14, minute: 0 },
          { hour: 14, minute: 30 },
          { hour: 15, minute: 30 },
          { hour: 16, minute: 20 },
          { hour: 17, minute: 5 },
          { hour: 17, minute: 25 },
          { hour: 17, minute: 35 },
          { hour: 18, minute: 20 },
          { hour: 19, minute: 10 },
          { hour: 19, minute: 55 },
          { hour: 20, minute: 25 },
          { hour: 21, minute: 10 },
          { hour: 21, minute: 45 },
        ];

        // Programar cada hora específica
        hoursToUpdate.forEach(({ hour, minute }) => {
          const updateTime = new Date();
          updateTime.setHours(hour, minute, 0, 0); // Establecer la hora de actualización

          // Si la hora ya pasó hoy, programar para mañana
          if (updateTime <= now) {
            updateTime.setDate(updateTime.getDate() + 1);
          }

          const timeUntilUpdate = updateTime - now; // Calcular tiempo hasta la próxima actualización
          setTimeout(() => {
            actualizarHelloMessage(idLogeado); // Llamar a la función en la hora específica
            scheduleHelloMessageUpdates(); // Volver a programar las actualizaciones
          }, timeUntilUpdate);
        });
      }, secondsUntilNextUpdate); // Esperar hasta el próximo minuto para empezar a programar
    }
  }

  // Iniciar el programa
  scheduleHelloMessageUpdates();

  /* ACTUALIZAR MONEDAS */
  let zIndexValue = 60; // Variable global para controlar el z-index
  let imageCounter = 0; // Contador para generar identificadores únicos
  let localCoinsCounter = 0; // Contador local para manejar la última cifra en las animaciones

  async function actualizarMonedas(idLogeado) {
    try {
      console.log("ID logeado:", idLogeado);
      const monedasLogeado = await obtenerMonedasDeUsuario(idLogeado);
      coinLabel.textContent = monedasLogeado;
      localCoinsCounter = monedasLogeado;
      console.log("Monedas obtenidas:", monedasLogeado);
    } catch (error) {
      console.error("Error durante ACTUALIZAR MONEDAS:", error);
    }
  }

  /* CLICK PARA FARMEAR MONEDAS */

  // Obtener idLogeado de localStorage al inicio
  const idLogeadoLoc = parseInt(localStorage.getItem("idLogeado"));
  if (!isNaN(idLogeadoLoc)) {
    actualizarLocalCoinsCounter(idLogeadoLoc);
  } else {
    console.error(
      "Usuario no logeado al intentar actualizar el contador local."
    );
  }

  async function actualizarLocalCoinsCounter(idLogeado) {
    try {
      const monedasLogeado = await obtenerMonedasDeUsuario(idLogeado);
      localCoinsCounter = monedasLogeado;
    } catch (error) {
      console.error("Error durante ACTUALIZAR MONEDAS:", error);
    }
  }

  async function incrementCoins(idLogeado, event) {
    // Incrementar contador local inmediatamente para manejar animaciones y evitar sobrecarga de clics
    localCoinsCounter++;
    let ultimaCifra = parseInt(localCoinsCounter.toString().slice(-1), 10);
    let longitud = localCoinsCounter.toString().length;
    // Animación basada en la última cifra calculada
    animationCoin(ultimaCifra, longitud);
    animationCoinCursor(event);

    // Esperar 3 segundos antes de actualizar la base de datos
    setTimeout(async function () {
      try {
        // Actualizar las monedas del usuario en la base de datos
        const nuevasMonedas = localCoinsCounter;
        await actualizarMonedasUsuario(idLogeado, nuevasMonedas);

        // Actualizar la interfaz de usuario (etiqueta de monedas)
        coinLabel.textContent = nuevasMonedas;
      } catch (error) {
        console.error(
          "Error durante la actualización de monedas en la base de datos:",
          error
        );
      }
    }, 2000);
  }

  let activeAnimations = 0;
  const maxAnimations = 15;

  function animationCoinCursor(event) {
    if (filterUnderwater.classList.contains("active")) {
      if (!estadoCheckboxRTX) {
        return;
      }
      
      if (activeAnimations >= maxAnimations) {
        console.log("Solo se pueden tener 15 monedas en la pantalla simultáneamente");
        return; // Salir de la función si se ha alcanzado el límite
      }
      
      // Obtener la altura de la pantalla
      const screenHeight = window.innerHeight;
      
      activeAnimations++;
      
      // Generar un número aleatorio entre 1 y 10
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      
      // Crear una imagen
      const img = document.createElement("img");
      img.src ="img/animationCoinsCursor/B/B" + "_" + randomNumber + ".gif" + "?t=" + new Date().getTime();
      
      console.log("img/animationCoinsCursor/B/B" + "_" + randomNumber + ".gif");
      
      // Agregar una clase para el estilo
      img.classList.add("fullscreenImage-CursorCoinAnim");
      
      // Posicionar la imagen donde se hizo clic (en `left` y `top`)
      img.style.left = `${event.clientX}px`;
      img.style.top = `${event.clientY}px`; // Establece la posición inicial en la altura del clic
      img.style.marginTop = "300px";
      
      // Agregar la imagen al cuerpo del documento
      filterUnderwater.appendChild(img);
      
      // Aplicar máscara y comenzar la animación en espiral con un ligero retraso
      img.style.maskImage = 'linear-gradient(to top, transparent 20%, black 20%)';
      img.style.webkitMaskImage = 'linear-gradient(to top, transparent 20%, black 20%)';
      
      setTimeout(() => {
        moverEnEspiral(img);
      }, 700);
      
      // Animar la imagen hacia abajo después de un pequeño retraso
      setTimeout(() => {
        img.style.marginTop = "800px";
      }, 500);
      
      setTimeout(() => {
        filterUnderwater.removeChild(img);
        activeAnimations--;
      }, 12000);
    }else{
            //Comprobar actividad estadoCheckboxRTX
      if (!estadoCheckboxRTX) {
        return;
      }

      if (activeAnimations >= maxAnimations) {
        console.log(
          "Solo se pueden tener 15 monedas en la pantalla simultaneamente"
        );
        return; // Salir de la función si se ha alcanzado el límite
      }

      // Obtener la altura de la pantalla y calcular la altura de cada sección
      const screenHeight = window.innerHeight;
      const sectionHeight = screenHeight / 29;

      // Calcular en qué sección se hizo clic
      const section = Math.floor(event.clientY / sectionHeight) + 1;

      if (section > 6) {
        return;
      }

      activeAnimations++;

      // Generar un número aleatorio entre 1 y 10
      const randomNumber = Math.floor(Math.random() * 10) + 1;

      // Crear una imagen
      const img = document.createElement("img");
      img.src =
        "img/animationCoinsCursor/" +
        section +
        "/" +
        section +
        "_" +
        randomNumber +
        ".gif" +
        "?t=" +
        new Date().getTime();

      console.log(
        "img/animationCoinsCursor/" +
          section +
          "/" +
          section +
          "_" +
          randomNumber +
          ".gif"
      );

      // Agregar una clase para el estilo
      img.classList.add("fullscreenImage-CursorCoinAnim");

      // Posicionar la imagen donde se hizo clic
      img.style.left = `${event.clientX}px`;

      img.style.maskImage = 'none';
      img.style.webkitMaskImage = 'none';

      // Agregar la imagen al cuerpo del documento
      filterUnderwater.appendChild(img);

      setTimeout(() => {
        img.style.opacity = "0%";
      }, 10500);
      setTimeout(() => {
        filterUnderwater.removeChild(img);
        activeAnimations--;
      }, 11500);
    }
  }


  const speed = 0.08; // Incremento más rápido del ángulo
  const expansionRate = 3; // Incremento del radio para expandir el movimiento en espiral rápidamente
  
  function moverEnEspiral(img) {
    // Restablece el ángulo y radio de cada imagen para iniciar en el origen
    img._angle = 0; // Ángulo inicial específico para cada imagen
    img._radius = 100; // Radio inicial específico para comenzar cerca del centro
    
    const maxRadius = 800; // Limitar el radio de movimiento a 800px en cada dirección
  
    function animar() {
      // Calcula el valor de margin-left para oscilar entre -800px y 800px
      const marginLeft = img._radius * Math.cos(img._angle);
  
      // Aplica el movimiento mediante margin-left
      img.style.marginLeft = `${marginLeft}px`;
  
      // Incrementa el ángulo para el movimiento en espiral
      img._angle += speed;
  
      // Incrementa el radio hasta el límite de 800px
      if (img._radius < maxRadius) {
        img._radius += expansionRate;
      }
  
      // Reinicia el radio y el ángulo para que la espiral vuelva a empezar
      if (img._angle >= 2 * Math.PI) { // Un ciclo completo
        img._angle = 0; 
      }
  
      // Llama a la función animar en el siguiente fotograma
      requestAnimationFrame(animar);
    }
  
    // Inicia la animación
    animar();
  }

  function animationCoin(ultimaCifra, longitud) {
    const coinsContainerAnimationContainer = document.getElementById(
      "coinsContainerAnimationContainer"
    );
    if (coinsContainerAnimationContainer) {
      // Eliminar imgNumberAnim e imgBackgroundAnim si existen antes de crear una nueva animación
      const existingImgNumberAnim =
        coinsContainerAnimationContainer.querySelector(
          ".coinsContainerAnimationNo"
        );
      const existingImgBackgroundAnim =
        coinsContainerAnimationContainer.querySelector(
          ".coinsContainerAnimationBackground"
        );
      if (existingImgNumberAnim) {
        setTimeout(() => {
          existingImgNumberAnim.remove();
        }, 50);
      }
      if (existingImgBackgroundAnim) {
        setTimeout(() => {
          existingImgBackgroundAnim.remove();
        }, 50);
      }

      let imgCoinAnim = document.createElement("img");
      let imgNumberAnim = document.createElement("img");
      let imgBackgroundAnim = document.createElement("img");
      let numeroDesplazamiento = 32;

      imgCoinAnim.src =
        "img/animationCoinsContainer/c" +
        ultimaCifra +
        ".gif" +
        "?t=" +
        new Date().getTime();
      imgCoinAnim.className = "coinsContainerAnimation";

      if (ultimaCifra === 0) {
        imgNumberAnim.src =
          "img/animationCoinsContainer/n9.gif" + "?t=" + new Date().getTime();
      } else {
        imgNumberAnim.src =
          "img/animationCoinsContainer/n" +
          (ultimaCifra - 1) +
          ".gif" +
          "?t=" +
          new Date().getTime();
      }

      imgNumberAnim.className = "coinsContainerAnimationNo";
      imgBackgroundAnim.src =
        "img/animationCoinsContainer/b.png" + "?t=" + new Date().getTime();
      imgBackgroundAnim.className = "coinsContainerAnimationBackground";
      imgBackgroundAnim.style.opacity = "100%";

      setTimeout(() => {
        imgCoinAnim.style.filter =
          "saturate(1.1) brightness(1) contrast(1.5) drop-shadow(-3px 3px 3px rgba(0, -2, 0, 0.3))";
      }, 200);

      setTimeout(() => {
        imgCoinAnim.style.filter =
          "saturate(1.1) brightness(1) contrast(1.5) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.0))";
      }, 900);

      imgBackgroundAnim.style.marginLeft =
        numeroDesplazamiento * (longitud - 1) + "px";
      imgNumberAnim.style.marginLeft =
        numeroDesplazamiento * (longitud - 1) + "px";
      setTimeout(() => {
        imgCoinAnim.style.marginLeft =
          numeroDesplazamiento * (longitud - 1) + "px";
      }, 250);

      let checkboxStatus;
      if (localStorage.getItem("checkboxStatus")) {
        checkboxStatus = JSON.parse(localStorage.getItem("checkboxStatus"));
      } else {
        checkboxStatus = true;
      }

      if (checkboxStatus === true) {
        // Tema de día
        imgBackgroundAnim.style.filter =
          "brightness(0) saturate(100%) invert(96%) sepia(10%) saturate(811%) hue-rotate(7deg) brightness(94%) contrast(87%)";
      } else {
        // Tema de noche
        imgBackgroundAnim.style.filter =
          "brightness(0) saturate(100%) invert(10%) sepia(9%) saturate(1370%) hue-rotate(175deg) brightness(92%) contrast(92%)";
      }

      checkbox.addEventListener("change", () => {
        if (checkboxStatus === false) {
          // Tema de día
          imgBackgroundAnim.style.filter =
            "brightness(0) saturate(100%) invert(96%) sepia(10%) saturate(811%) hue-rotate(7deg) brightness(94%) contrast(87%)";
        } else {
          // Tema de noche
          imgBackgroundAnim.style.filter =
            "brightness(0) saturate(100%) invert(10%) sepia(9%) saturate(1370%) hue-rotate(175deg) brightness(92%) contrast(92%)";
        }
      });

      imgCoinAnim.style.zIndex = zIndexValue;
      imgBackgroundAnim.style.zIndex = zIndexValue + 1;
      imgNumberAnim.style.zIndex = zIndexValue + 2;
      zIndexValue = zIndexValue < 198 ? zIndexValue + 1 : 60;

      imgNumberAnim.draggable = false;
      imgBackgroundAnim.draggable = false;
      imgBackgroundAnim.draggable = false;


      coinsContainerAnimationContainer.appendChild(imgNumberAnim);
      coinsContainerAnimationContainer.appendChild(imgCoinAnim);
      coinsContainerAnimationContainer.appendChild(imgBackgroundAnim);

      setTimeout(() => {
        if (imgBackgroundAnim) {
          imgBackgroundAnim.style.opacity = "0%";
          imgBackgroundAnim.remove();
        }
      }, 3000);

      setTimeout(() => {
        if (imgCoinAnim) {
          imgCoinAnim.remove();
        }
        if (imgNumberAnim) {
          imgNumberAnim.remove();
        }
      }, 3000);
    } else {
      console.error("Contenedor de animación no encontrado.");
    }
  }

  // Añadir el evento de clic para incrementar las monedas
  document.addEventListener("click", function (event) {
    const idLogeado = parseInt(localStorage.getItem("idLogeado"));
    const clickedElement = event.target;

    // Comprobar si el clic ocurrió en el div con la clase 'background' o en el checkbox o cualquier parte del interruptor
    if (
      clickedElement.closest(".background") ||
      clickedElement.closest(".switch") ||
      clickedElement.closest(".slider") ||
      clickedElement.closest("#settingsImgContainer") ||
      clickedElement.closest("#volumenImg") ||
      clickedElement.closest("#rtxContainer") ||
      clickedElement.closest("#loginScreen")
    ) {
      console.log("No se pueden farmear monedas al hacer clic en el checkbox");
      return; // Salir de la función si el clic fue en el div del checkbox o en cualquiera de sus elementos
    }

    // Si no estamos en el menú de skins y el idLogeado es válido, farmear monedas
    if (!isInMenu() && !isNaN(idLogeado)) {
      incrementCoins(idLogeado, event); // Llamada para incrementar monedas y generar la animación
    } else {
      if (isInMenu()) {
        console.log("No se pueden farmear monedas en el menú de skins");
      }
      if (isNaN(idLogeado)) {
        console.log("No se pueden farmear monedas sin loguearse");
      }
    }
  });

  function isInMenu() {
    return (
      (skinsContainer && skinsContainer.classList.contains("active")) ||
      (modifiersContainer && modifiersContainer.classList.contains("active"))
    );
  }

  /* SETTINGS MENU */

  let settingsEstado = false;
  let isSettingsAnimating = false; // Variable para prevenir el spam de clics

  settingsImgContainer.addEventListener("click", function () {
    if (!isSettingsAnimating) {
      isSettingsAnimating = true; // Bloquea nuevos clics

      settingsUpdate();
      settingsEstado = !settingsEstado;

      setTimeout(() => {
        isSettingsAnimating = false; // Permite clics después de 500ms
      }, 500); // 500 milisegundos de espera
    }
  });

  function settingsUpdate() {
    if (settingsEstado) {
      settingsContainer.classList.add("active");
      settingsContainer.classList.remove("notActive");

      switchThemeButton.classList.add("active");
      rtxContainer.classList.add("active");
      volumenContainer.classList.add("active");

      settingsImg.classList.add("active");
      settingsImgLight.classList.add("active");
    } else {
      settingsContainer.classList.remove("active");
      settingsContainer.classList.add("notActive");

      switchThemeButton.classList.remove("active");
      rtxContainer.classList.remove("active");
      volumenContainer.classList.remove("active");

      settingsImg.classList.remove("active");
      settingsImgLight.classList.remove("active");
    }
  }
  settingsUpdate();

  /* RTX BUTTON */
  let estadoCheckboxRTX = false;

  if (localStorage.getItem("estadoCheckboxRTX") === null) {
    localStorage.setItem("estadoCheckboxRTX", "false");
  } else {
    estadoCheckboxRTX = localStorage.getItem("estadoCheckboxRTX") === "true";
  }

  actualizarRtxCheckbox(estadoCheckboxRTX);

  rtxContainer.addEventListener("click", function () {
    estadoCheckboxRTX = !estadoCheckboxRTX;
    localStorage.setItem("estadoCheckboxRTX", estadoCheckboxRTX);
    actualizarRtxCheckbox(estadoCheckboxRTX);
  });

  function actualizarRtxCheckbox(estadoCheckboxRTX) {
    if (estadoCheckboxRTX) {
      rtxContainer.classList.remove("rtxInactivo");
      rtxContainer.classList.add("rtxActivo");
    } else {
      rtxContainer.classList.remove("rtxActivo");
      rtxContainer.classList.add("rtxInactivo");
    }
  }

  /* AUDIO FUNCTIONS */
  let hoverAudio;

  function loadAudio() {
    const audioTest = new Audio("img/sfx_sound1.mp3");

    audioTest.onerror = function () {
      hoverAudio = new Audio("..img/sfx_sound1.mp3");
      //console.log('Usando la ruta ..img/sfx_sound1.mp3');
    };

    audioTest.oncanplaythrough = function () {
      hoverAudio = audioTest;
      //console.log('Usando la ruta img/sfx_sound1.mp3');
    };

    audioTest.load();
  }

  loadAudio();

  function playHoverAudio() {
    if (hoverAudio) {
      hoverAudio.currentTime = 0;
      hoverAudio.play().catch((error) => {
        if (error.name === "NotAllowedError") {
          console.log(
            "No se permite reproducir audio sin interacción del usuario."
          ); // Personaliza el mensaje
        } else {
          console.log("Error al reproducir audio:", error); // Para otros errores
        }
      });
    }
  }

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseenter", playHoverAudio);
    card.addEventListener("mouseleave", playHoverAudio);
  });

  document.querySelectorAll("a").forEach((link) => {
    if (!link.closest("nav")) {
      link.addEventListener("mouseenter", playHoverAudio);
      link.addEventListener("mouseleave", playHoverAudio);
    }
  });

  /* VOLUMEN CONTROLLER */
  const slider = document.getElementById("volumeSlider");
  const tooltipVolume = document.getElementById("tooltipVolume");
  const toolttooltipLabelip = document.getElementById("tooltipLabel");
  const volumenImgUd = document.getElementById("volumenImgUd");
  let lastValue;

  // Función para actualizar el tooltipVolume y la imagen del volumen
  function updateTooltipAndImg() {
    let valueReal = slider.value;
    let value = slider.max - slider.value;

    toolttooltipLabelip.textContent = `${slider.max - value}`;
    // Posiciona el tooltipVolume en función del valor del slider
    const maxSliderValue = slider.max;
    const sliderHeight = 150; // Altura total del slider en píxeles
    const offset = sliderHeight - (value / maxSliderValue) * sliderHeight - 22;
    tooltipVolume.style.top = `${offset}px`;

    // Guardar el último valor si no es 0
    if (valueReal > 0) {
      lastValue = valueReal;
      localStorage.setItem("lastValue", lastValue);
    }

    if (valueReal == 100) {
      tooltipVolume.style.minWidth = "60px";
      volumenImgUd.style.left = "13px";
    } else if (valueReal > 9 && valueReal < 100) {
      tooltipVolume.style.minWidth = "50px";
      volumenImgUd.style.left = "3px";
    } else if (valueReal < 10) {
      tooltipVolume.style.minWidth = "37px";
      volumenImgUd.style.left = "-11px";
    }

    if (valueReal > 66 && valueReal <= 100) {
      volumenImg.src = "img/volumen3.png";
    } else if (valueReal > 33 && valueReal <= 66) {
      volumenImg.src = "img/volumen2.png";
    } else if (valueReal > 0 && valueReal <= 33) {
      volumenImg.src = "img/volumen1.png";
    } else if (valueReal == 0) {
      volumenImg.src = "img/volumenMute.png";
    }

    localStorage.setItem("sliderValue", slider.value);
    updateAudioMaster();
  }

  function updateAudioMaster() {
    const value = slider.max - slider.value;
    const volume = (slider.max - value) / 100;
    const mediaElements = document.querySelectorAll("audio, video");

    mediaElements.forEach((element) => {
      element.volume = volume;
    });

    if (hoverAudio) {
      hoverAudio.volume = volume;
    }
  }

  const initialValue =
    localStorage.getItem("sliderValue") !== null
      ? localStorage.getItem("sliderValue")
      : 100;
  slider.value = initialValue;

  updateTooltipAndImg();
  slider.addEventListener("input", updateTooltipAndImg);

  /* CLICK TO MUTE */

  // Función para silenciar o restaurar el volumen
  function clickToMute() {
    if (slider.value > 0) {
      // Guardar el último valor antes de silenciar
      lastValue = slider.value;
      localStorage.setItem("lastValue", lastValue);

      // Silenciar
      slider.value = 0;
      volumenImg.src = "img/volumenMute.png";
    } else {
      // Restaurar el volumen al último valor conocido o 100 si no se encuentra
      const restoredValue =
        localStorage.getItem("lastValue") !== null
          ? localStorage.getItem("lastValue")
          : 100;
      slider.value = restoredValue;

      // Actualizar la imagen del volumen según el valor restaurado
      if (restoredValue > 66) {
        volumenImg.src = "img/volumen3.png";
      } else if (restoredValue > 33) {
        volumenImg.src = "img/volumen2.png";
      } else if (restoredValue > 0) {
        volumenImg.src = "img/volumen1.png";
      } else {
        volumenImg.src = "img/volumenMute.png";
      }
    }

    // Actualizar el tooltipVolume y el volumen en la página
    updateTooltipAndImg();
    updateAudioMaster();
  }

  // Asignar el evento de clic al contenedor de configuración
  volumenImg.addEventListener("click", clickToMute);

  /* OCULTAR/MOSTRAR SLIDER */

  let hideTimeout;

  function showVolumeTooplip() {
    // Cancelamos el temporizador de esconder si existe
    clearTimeout(hideTimeout);

    slider.style.display = "block";

    setTimeout(() => {
      slider.style.opacity = "100%";
    }, 100);
  }

  function hideVolumeTooplip() {
    hideTimeout = setTimeout(() => {
      slider.style.opacity = "0%";

      setTimeout(() => {
        slider.style.display = "none";
      }, 200);
    }, 1000);
  }

  function hideVolumeTooplipWhithoutTimeout() {
    slider.style.opacity = "0%";

    setTimeout(() => {
      slider.style.display = "none";
    }, 200);
  }

  volumenImg.addEventListener("mouseenter", showVolumeTooplip);
  slider.addEventListener("mouseover", showVolumeTooplip);

  volumenImg.addEventListener("mouseleave", hideVolumeTooplip);
  slider.addEventListener("mouseleave", hideVolumeTooplip);
  settingsImgContainer.addEventListener("click", hideVolumeTooplip);
  document.addEventListener("click", function (event) {
    if (event.target !== volumenImg && event.target !== slider) {
      hideVolumeTooplipWhithoutTimeout();
    }
  });

  /* DROPSHADOW VOLUME */

  function volumeDropShadowShow() {
    volumenImgDropShadow.style.opacity = "100%";
  }

  function volumeDropShadowHide() {
    volumenImgDropShadow.style.opacity = "0%";
  }

  volumenImg.addEventListener("mouseenter", volumeDropShadowShow);
  volumenImg.addEventListener("mouseleave", volumeDropShadowHide);

  /* MOSTRAR tooltipVolume CUANDO FOCUS */
  function volumeTooltipHide() {
    tooltipVolume.style.opacity = "0%";
  }

  function volumeTooltipShow() {
    tooltipVolume.style.opacity = "100%";
  }

  slider.addEventListener("mousedown", volumeTooltipShow);
  slider.addEventListener("mouseup", volumeTooltipHide);

  /* ACTUALIZAR SKINS */

  // Función para cargar y manejar skins
  async function cargarSkins(idLogeado) {
    if (!idLogeado) {
      console.error("No se encontró idLogeado");
      return;
    }

    const skinsUnlock = await actualizarSkins(idLogeado);
    await manejarCandados(idLogeado, skinsUnlock);
  }

  async function actualizarSkins(idLogeado) {
    try {
      const skinsUnlock = await obtenerSkinsUnlockDeUsuario(idLogeado);
      quitarCandadosIniciales(skinsUnlock);
      return skinsUnlock; // Retornamos skinsUnlock
    } catch (error) {
      console.error("Error durante ACTUALIZAR SKINS:", error);
    }
  }

  function quitarCandadosIniciales(codigo) {
    const candados = document.querySelectorAll(".candado");

    codigo.split("").forEach((caracter, index) => {
      if (caracter === "1" && candados[index]) {
        const candado = candados[index];
        const skinContainer = candado.closest(".skinContainer");
        const skinContainerLock =
          skinContainer.querySelector(".skinContainerLock");
        const skinContainerNotVisible = skinContainer.querySelector(
          ".skinContainerNotVisible"
        );

        // Ocultar y deshabilitar eventos de puntero
        candado.style.opacity = "0%";
        candado.style.visibility = "hidden";
        candado.style.pointerEvents = "none";

        skinContainerLock.style.opacity = "0%";
        skinContainerLock.style.visibility = "hidden";
        skinContainerLock.style.pointerEvents = "none";

        skinContainerNotVisible.style.opacity = "0%";
        skinContainerNotVisible.style.visibility = "hidden";
        skinContainerNotVisible.style.pointerEvents = "none";
      }
    });
  }

  let isUnlocking = false;

  // Función para manejar los candados de las skins
  async function manejarCandados(idLogeado, skinsUnlock) {
    if (!idLogeado) {
      console.error("No se encontró idLogeado");
      return;
    }

    const candados = document.querySelectorAll(".candado");
    const totalSkins = candados.length;

    // Asegurar que skinsUnlock tiene la longitud correcta
    if (!skinsUnlock || skinsUnlock.length < totalSkins) {
      skinsUnlock = skinsUnlock.padEnd(totalSkins, "L");
    }

    for (let [index, candado] of candados.entries()) {
      candado.src = "img/lock.png";

      let skinContainer = candado.closest(".skinContainer");
      let skinContainerLock = skinContainer.querySelector(".skinContainerLock");
      let skinContainerNotVisible = skinContainer.querySelector(
        ".skinContainerNotVisible"
      );

      let priceElement = skinContainerNotVisible.querySelector(".price");
      let price; // Declaramos la variable fuera del if-else

      if (priceElement.textContent === "FREE") {
        price = 0; // Asignamos 0 si el texto es "FREE"
      } else {
        price = parseInt(priceElement.textContent); // Convertimos el precio en número si no es "FREE"
      }

      // Comprobar si la skin está desbloqueada
      if (skinsUnlock[index] === "1") {
        // La skin está desbloqueada; ocultar y deshabilitar eventos de puntero
        candado.style.opacity = "0%";
        candado.style.visibility = "hidden";
        candado.style.pointerEvents = "none";

        skinContainerLock.style.opacity = "0%";
        skinContainerLock.style.visibility = "hidden";
        skinContainerLock.style.pointerEvents = "none";

        skinContainerNotVisible.style.opacity = "0%";
        skinContainerNotVisible.style.visibility = "hidden";
        skinContainerNotVisible.style.pointerEvents = "none";

        continue; // Pasar a la siguiente iteración
      }

      try {
        // Agregar event listeners solo a skins bloqueadas
        candado.addEventListener("click", () =>
          searchUnlockingStatus(
            candado,
            skinContainerLock,
            skinContainerNotVisible,
            price,
            index,
            idLogeado
          )
        );
        skinContainerNotVisible.addEventListener("click", () =>
          searchUnlockingStatus(
            candado,
            skinContainerLock,
            skinContainerNotVisible,
            price,
            index,
            idLogeado
          )
        );

        //setNormalPrice(skinContainer, price);
      } catch (error) {
        console.error("Error al manejar los candados:", error);
      }
    }
  }

  /*
function setNormalPrice(skinContainer, price) {
  let priceNormalElement = skinContainer.querySelector('.priceNormal');

  if (priceNormalElement) {
    priceNormalElement.textContent = price;
  }
}*/

  async function searchUnlockingStatus(
    candado,
    skinContainerLock,
    skinContainerNotVisible,
    price,
    skinIndex,
    idLogeado
  ) {
    if (isUnlocking) return;

    let monedasLogeado = await obtenerMonedasDeUsuario(idLogeado);

    if (monedasLogeado >= price) {
      isUnlocking = true;
      await unlockAnimation(
        candado,
        skinContainerLock,
        skinContainerNotVisible,
        price,
        monedasLogeado,
        idLogeado,
        skinIndex
      );
      actualizarLocalCoinsCounter(idLogeado);
    } else {
      lockedAnimation(candado);
    }
  }

  async function unlockAnimation(
    candado,
    skinContainerLock,
    skinContainerNotVisible,
    price,
    monedasLogeado,
    idLogeado,
    skinIndex
  ) {
    candado.src = "img/lock.gif";
    candado.style.pointerEvents = "none";
    skinContainerLock.style.pointerEvents = "none";

    // Restar el precio y actualizar en la base de datos
    monedasLogeado -= price;

    // Actualizar el contador de monedas en la interfaz
    document.querySelector(".coinLabel").textContent = monedasLogeado;
    await actualizarMonedasUsuario(idLogeado, monedasLogeado);

    setTimeout(async () => {
      // Ocultar y deshabilitar eventos de puntero
      candado.style.opacity = "0%";
      candado.style.visibility = "hidden";
      candado.style.pointerEvents = "none";

      skinContainerLock.style.opacity = "0%";
      skinContainerLock.style.visibility = "hidden";
      skinContainerLock.style.pointerEvents = "none";

      skinContainerNotVisible.style.opacity = "0%";
      skinContainerNotVisible.style.visibility = "hidden";
      skinContainerNotVisible.style.pointerEvents = "none";

      isUnlocking = false;

      // Actualizar el código de skinsUnlock en la base de datos
      await unlockSkin(idLogeado, skinIndex);
    }, 1100);
  }

  async function unlockSkin(idLogin, skinIndex) {
    try {
      // Obtener el código actual de skinsUnlock del usuario
      let skinsUnlock = await obtenerSkinsUnlockDeUsuario(idLogin);

      const totalSkins = document.querySelectorAll(".candado").length;

      // Inicializar skinsUnlock si es necesario
      if (
        !skinsUnlock ||
        typeof skinsUnlock !== "string" ||
        skinsUnlock.length === 0
      ) {
        skinsUnlock = "L".repeat(totalSkins);
        console.warn("skinsUnlock no válido, inicializando con:", skinsUnlock);
      }

      // Ajustar la longitud de skinsUnlock si es necesario
      if (skinsUnlock.length < totalSkins) {
        skinsUnlock = skinsUnlock.padEnd(totalSkins, "L");
        console.warn(
          "skinsUnlock de longitud insuficiente, ajustando a:",
          skinsUnlock
        );
      }

      // Convertir a array para modificar
      let skinsArray = skinsUnlock.split("");

      // Verificar que skinIndex es válido
      if (skinIndex < 0 || skinIndex >= skinsArray.length) {
        console.error("skinIndex fuera de rango:", skinIndex);
        return;
      }

      // Actualizar el carácter correspondiente a '1'
      if (skinsArray[skinIndex] === "L") {
        skinsArray[skinIndex] = "1";
      } else {
        console.warn(
          "La skin ya está desbloqueada o tiene un valor inesperado:",
          skinsArray[skinIndex]
        );
      }

      // Unir el array en una cadena
      let nuevoSkinsUnlock = skinsArray.join("");

      // Actualizar en la base de datos
      await actualizarSkinsUnlockDeUsuario(idLogin, nuevoSkinsUnlock);
    } catch (error) {
      console.error("Error al desbloquear la skin:", error);
    }
  }

  function lockedAnimation(candado) {
    candado.style.transition = "margin 0.1s ease, filter 0.2s ease";
    candado.style.marginLeft = "0.75vw";
    candado.style.filter = "blur(0.7px)";

    setTimeout(() => {
      candado.style.marginLeft = "0";
      candado.style.marginRight = "0.75vw";
      candado.style.filter = "blur(0.7px)";

      setTimeout(() => {
        candado.style.marginLeft = "0.75vw";
        candado.style.marginRight = "0";
        candado.style.filter = "blur(0.7px)";

        setTimeout(() => {
          candado.style.marginLeft = "0";
          candado.style.filter = "none";
        }, 100);
      }, 100);
    }, 100);
  }

  async function actualizarSkinsUnlockDeUsuario(idLogin, nuevoSkinsUnlock) {
    if (typeof nuevoSkinsUnlock !== "string") {
      console.error(
        "El valor de nuevoSkinsUnlock no es una cadena:",
        nuevoSkinsUnlock
      );
      return;
    }

    const url = `${supabaseUrl}?id=eq.${idLogin}`;
    const actualizarSkins = { skinsUnlock: nuevoSkinsUnlock };

    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify(actualizarSkins),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error(
          "Error al actualizar skinsUnlock:",
          response.statusText,
          errorData
        );
        throw new Error(
          "Error en la actualización de skinsUnlock: " + response.statusText
        );
      }

      const data = await response.json();
      console.log("SkinsUnlock actualizado correctamente:", data);
      return data;
    } catch (error) {
      console.error("Error al actualizar skinsUnlock:", error);
    }
  }

  // Llamamos a cargarSkins al cargar la página
  cargarSkins(idLogeado);

  /* OCULTAR ELEMENTOS CUANDO LA SESION ESTÁ INICIADA */

  function actualizarEstadoElementosSesion() {
    const idLogeado = localStorage.getItem("idLogeado");

    if (idLogeado) {
      // El usuario ha iniciado sesión
      // Ocultar botones de Login y Register
      if (notas) {
        notas.disabled = false;
        notas.style.display = "flex";
      }
      if (loginButton) {
        loginButton.disabled = true;
        loginButton.style.display = "none";
      }
      if (registerButton) {
        registerButton.disabled = true;
        registerButton.style.display = "none";
      }

      // Mostrar botón de Logout si existe
      if (logoutButton) {
        logoutButton.style.display = "flex";
      }

      // Mostrar menú de skins y monedas
      if (skinsContainer) {
        skinsContainer.style.display = "flex";
      }
      if (coinsContainer) {
        coinsContainer.style.display = "flex";
      }
      if (flechaaSkins) {
        flechaaSkins.style.display = "flex";
      }
      if (modifiersContainer) {
        modifiersContainer.style.display = "flex";
      }
      if (flechaaModifiers) {
        flechaaModifiers.style.display = "flex";
      }
      if (flechaHitbloxPlusSkins) {
        flechaHitbloxPlusSkins.style.display = "flex";
      }
      if (flechaHitbloxPlusModifiers) {
        flechaHitbloxPlusModifiers.style.display = "flex";
      }
      if (menuLabelSkins) {
        menuLabelSkins.style.display = "flex";
      }
      if (menuLabelModifiers) {
        menuLabelModifiers.style.display = "flex";
      }
      if (rtxContainer) {
        rtxContainer.style.display = "flex";
      }

      // Habilitar los botones de skins
      const buttonThemeElements = document.querySelectorAll(".buttonTheme");
      buttonThemeElements.forEach((button) => {
        button.style.pointerEvents = "auto";
        button.style.opacity = "1";
      });

      //Actualizar distancia de boton Theme cuando usuario no está logueado
      const sheet = document.styleSheets[0];
      for (let i = 0; i < sheet.cssRules.length; i++) {
        const rule = sheet.cssRules[i];
        if (rule.selectorText === ".container.active") {
          rule.style.right = "0px";
        }
      }

      notebookLogoLleno.style.display = "block";
      notebookLogoVacio.style.display = "block";
      notebook.style.display = "none";
      stage.style.display = "none";
      
    } else {
      // El usuario no ha iniciado sesión
      // Mostrar botones de Login y Register
      if (notas) {
        notas.disabled = true;
        notas.style.display = "none";
      }
      if (loginButton) {
        loginButton.disabled = false;
        loginButton.style.display = "flex";
      }
      if (registerButton) {
        registerButton.disabled = false;
        registerButton.style.display = "flex";
      }

      // Ocultar botón de Logout si existe
      if (logoutButton) {
        logoutButton.style.display = "none";
      }

      // Ocultar menú de skins y monedas
      if (skinsContainer) {
        skinsContainer.style.display = "none";
      }
      if (coinsContainer) {
        coinsContainer.style.display = "none";
      }
      if (flechaaSkins) {
        flechaaSkins.style.display = "none";
      }
      if (modifiersContainer) {
        modifiersContainer.style.display = "none";
      }
      if (flechaaModifiers) {
        flechaaModifiers.style.display = "none";
      }
      if (flechaHitbloxPlusSkins) {
        flechaHitbloxPlusSkins.style.display = "none";
      }
      if (flechaHitbloxPlusModifiers) {
        flechaHitbloxPlusModifiers.style.display = "none";
      }
      if (menuLabelSkins) {
        menuLabelSkins.style.display = "none";
      }
      if (menuLabelModifiers) {
        menuLabelModifiers.style.display = "none";
      }
      if (rtxContainer) {
        rtxContainer.style.display = "none";
      }

      // Deshabilitar los botones de skins
      const buttonThemeElements = document.querySelectorAll(".buttonTheme");
      buttonThemeElements.forEach((button) => {
        button.style.pointerEvents = "none";
        button.style.opacity = "0.5";
      });

      // Restablecer los botones seleccionados y sus íconos
      if (selectedDayButton) {
        const imgElement = selectedDayButton.querySelector(".buttonThemeImg");
        imgElement.src = "img/sunIcon.png";
        selectedDayButton = null;
      }
      if (selectedNightButton) {
        const imgElement = selectedNightButton.querySelector(".buttonThemeImg");
        imgElement.src = "img/moonIcon.png";
        selectedNightButton = null;
      }

      const sheet = document.styleSheets[0];
      for (let i = 0; i < sheet.cssRules.length; i++) {
        const rule = sheet.cssRules[i];
        if (rule.selectorText === ".container.active") {
          rule.style.right = "-55px";
        }
      }

      notebookLogoLleno.style.display = "none";
      notebookLogoVacio.style.display = "none";
      notebook.style.display = "none";
      stage.style.display = "none";
    }
  }

  /* CUSTOM CURSOR ADJUSTMENTS */

  setTimeout(function () {
    cursorPurpleish.style.opacity = "1%";
  }, 1);

  let soloInicio = 0;
  let isCursorOverSpecialElement = false;

  if (cursor && cursorPurpleish) {
    const skinsContainer = document.getElementById("skinsContainer");

    document.addEventListener("mousemove", function (e) {
      soloInicio++;
      if (soloInicio == 1) {
        cursor.style.opacity = "100%";
      }

      // Cambiar la posición para centrar el cursor
      const cursorSize = 200;
      const cursorPaintSizeX = 220.5;
      const cursorPaintSizeY = 218;
      cursor.style.left = e.clientX - cursorSize / 2 + "px"; // Centrar en X
      cursor.style.top = e.clientY - cursorSize / 2 + "px"; // Centrar en Y
      cursorPurpleish.style.left = e.clientX - cursorSize / 2 + "px"; // Centrar en X
      cursorPurpleish.style.top = e.clientY - cursorSize / 2 + "px"; // Centrar en Y
      cursorPaint.style.left = e.clientX - cursorPaintSizeX / 2 + "px";
      cursorPaint.style.top = e.clientY - cursorPaintSizeY / 2 + "px";
      cursorPaintErase.style.left = e.clientX - cursorPaintSizeX / 2 + "px";
      cursorPaintErase.style.top = e.clientY - cursorPaintSizeY / 2 + "px";
      if(checkboxland){
        checkboxland.style.left = e.clientX - cursorSize / 2 + "px"; // Centrar en X
        checkboxland.style.top = e.clientY - cursorSize / 2 + "px"; // Centrar en Y
      }
    });

    document.addEventListener("mousedown", function () {
      cursor.classList.add("clicked");
      cursorPurpleish.classList.add("clicked");
      if(checkboxland){
        checkboxland.classList.add("clicked");
      }
    });

    document.addEventListener("mouseup", function () {
      cursor.classList.remove("clicked");
      cursorPurpleish.classList.remove("clicked");
      if(checkboxland){
        checkboxland.classList.remove("clicked");
      }
    });

    document.addEventListener("mouseover", function (e) {
      if (
        e.target.tagName === "A" ||
        e.target.closest(".card") ||
        e.target.closest(".material-icons-round") ||
        e.target.closest(".background") ||
        e.target.closest(".sun-moon") ||
        e.target.closest("span") ||
        e.target.closest("#flechaaSkins") ||
        e.target.closest("#flechaaModifiers") ||
        e.target.closest(".buttonTheme") ||
        e.target.closest("#logoutButton") ||
        e.target.closest("#rtxContainer") ||
        e.target.closest("#volumenImg") ||
        e.target.closest("#volumeSlider") ||
        e.target.closest("#settingsImgContainer")
      ) {
        cursorPurpleish.style.opacity = "100%";
        isCursorOverSpecialElement = true;
      }
    });

    document.addEventListener("mouseout", function (e) {
      if (
        e.target.tagName === "A" ||
        e.target.closest(".card") ||
        e.target.closest(".material-icons-round") ||
        e.target.closest(".background") ||
        e.target.closest(".sun-moon") ||
        e.target.closest("span") ||
        e.target.closest("#flechaaSkins") ||
        e.target.closest("#flechaaModifiers") ||
        e.target.closest(".buttonTheme") ||
        e.target.closest("#logoutButton") ||
        e.target.closest("#rtxContainer") ||
        e.target.closest("#volumenImg") ||
        e.target.closest("#volumeSlider") ||
        e.target.closest("#settingsImgContainer")
      ) {
        cursorPurpleish.style.opacity = "1%";
        isCursorOverSpecialElement = false;
      }
    });



    /* PURPLEISH EN EL SCROLL DE SKINS */

    if (skinsContainer) {
      skinsContainer.addEventListener("mousemove", function (e) {
        if (!isCursorOverSpecialElement) {
          const rect = skinsContainer.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const contentWidth = skinsContainer.clientWidth;

          if (mouseX >= contentWidth) {
            // El ratón está sobre el scrollbar
            cursorPurpleish.style.opacity = "100%";
          } else {
            // El ratón está dentro de skinsContainer pero no sobre el scrollbar
            cursorPurpleish.style.opacity = "1%";
          }
        }
      });

      skinsContainer.addEventListener("mouseleave", function () {
        if (!isCursorOverSpecialElement) {
          cursorPurpleish.style.opacity = "1%";
        }
      });
    }
  } else {
    console.error("Elementos de cursor no encontrados en el DOM.");
  }

  /*
    function handleSpecialCursor(cursorSrc, theme) {
      // Aquí podemos manejar cursores especiales que requieran acciones adicionales
      if (cursorSrc.includes('special_cursor_name')) {
        // Realizar acciones específicas para este cursor
        console.log('Cursor especial seleccionado:', cursorSrc);
        // Por ejemplo, cambiar otros elementos de la interfaz, reproducir un sonido, etc.
      }
    }*/

  if (sessionStorage.getItem("transicionBuceo") === null) {
    sessionStorage.setItem("transicionBuceo", "true");
  }

  function handleSpecialCursor(cursorSrc, theme) {
    /* DESACTIVAR SI NO SON LAS SKINS CORRECTAS */
    if (!cursorSrc.includes("cccc_krillin")) {
      cursorPurpleish.style.display = "block";
    }
    if (!cursorSrc.includes("cccc_galaxy")) {
      cursor.style.opacity = "100%";
      cursor.style.transition =
        "width 0.1s ease-in-out, height 0.1s ease-in-out, transform 0.1s ease-in-out, opacity 0.1s ease-in-out, margin-left 0.5s ease, margin-top 0.5s ease";
      fondo.style.display = "none";
      fondoGreen.style.display = "none";
    }
    if (!cursorSrc.includes("cccc_buceo")) {
      underwaterTransi.style.display = "none";
      underwaterTransi.className = "";
      underwater.style.display = "none";
      underwater.className = "";
      filterUnderwater.className = "";
      filterUnderwater.style.mask = "none";
      stopBubbles();
    }
    if (!cursorSrc.includes("cccc_jefeEstudios")) {
      cursorPurpleish.style.display = "block";
    }
    if (!cursorSrc.includes("cccc_checkbox")) {
      cursor.style.display = "block";
      cursorPurpleish.style.display = "block";
      checkboxland.style.display = "none";
      checkboxlandBackground.style.display = "none";
      stopAnimation();
      stopAnimationBackground();
      applyTheme();
    }



    /* HANDLE NO PURPLEISH CURSORS (there's more code) */

    if (cursorSrc.includes("cccc_krillin") || cursorSrc.includes("cccc_jefeEstudios")) {
      cursorPurpleish.style.display = "none";
    }


    /* SKIN CHECKBOX */

    if (cursorSrc.includes("cccc_checkbox")) {
      cursor.style.display = "none";
      cursorPurpleish.style.display = "none";
      checkboxland.style.display = "block";
      checkboxlandBackground.style.display = "block";
      if(checkbox.checked){
        checkboxland.classList.remove("night");
        checkboxlandBackground.classList.remove("night");
        checkboxland.classList.add("day");
        checkboxlandBackground.classList.add("day");
      }else{
        checkboxland.classList.remove("day");
        checkboxlandBackground.classList.remove("day");
        checkboxland.classList.add("night");
        checkboxlandBackground.classList.add("night");
      }

      setTimeout(() => {
        resetAnimation();
        resetAnimationBackground();

        const sheet = document.styleSheets[0];
        for (let i = 0; i < sheet.cssRules.length; i++) {
          const rule = sheet.cssRules[i];
          if (rule.selectorText === "#skinsContainer") {
            rule.style.background = `transparent`;
            rule.style.backdropFilter = `blur(3px) `;
          }
          if (rule.selectorText === "#modifiersContainer") {
            rule.style.background = `transparent`;
            rule.style.backdropFilter = `blur(3px) `;
          }
        }

      }, 500);     
    }

    /* SKIN BUCEO */
    let timeoutId; // Variable global para almacenar el ID del setTimeout

    function preloadImage(src, callback) {
      const img = new Image();
      img.src = src;
      img.onload = callback;
      img.onerror = () => {
        console.error("Error cargando la imagen: " + src);
        callback(); // Aún llamamos al callback para no bloquear la ejecución
      };
    }

    if (cursorSrc.includes("cccc_buceo")) {
      // Si el checkbox está marcado, salir de la función
      if (checkbox.checked) {
        return;
      }

      // Reinicia cualquier timeout pendiente
      if (timeoutId) {
        clearTimeout(timeoutId); // Cancela el setTimeout anterior
      }

      // Verifica si transicionBuceo está activa
      if (sessionStorage.getItem("transicionBuceo") === "true") {
        sessionStorage.setItem("transicionBuceo", "false"); // Cambia transicionBuceo a false

        // Cargar imágenes del fondo y las máscaras antes de iniciar la animación
        const backgroundSrc = "img/fondoBuceo.webp?t=" + new Date().getTime();
        const transiSrc = "img/fondoBuceoTransi.webp?t=" + new Date().getTime();
        const maskSrc =
          "img/fondoBuceoTransiMask.webp?t=" + new Date().getTime();

        // Preload las imágenes
        let loadedCount = 0;
        const totalToLoad = 3;

        function onImageLoad() {
          loadedCount++;
          if (loadedCount === totalToLoad) {
            startTransition();
          }
        }

        // Preload todas las imágenes
        preloadImage(backgroundSrc, onImageLoad);
        preloadImage(transiSrc, onImageLoad);
        preloadImage(maskSrc, onImageLoad);

        // Función para ejecutar la transición cuando las imágenes estén listas
        function startTransition() {
          // Configura la transición del fondo
          underwater.src = backgroundSrc;
          underwater.style.display = "block";
          underwater.className = "active";
          underwater.style.opacity = "1%";

          underwaterTransi.src = transiSrc;
          underwaterTransi.style.display = "block";
          underwaterTransi.className = "active";
          underwaterTransi.style.opacity = "100%";

          filterUnderwater.className = "active";
          filterUnderwater.style.mask = "none";

          // Clona filterUnderwater y configura el nuevo elemento
          const filterUnderwaterDupe = filterUnderwater.cloneNode(true);
          filterUnderwaterDupe.id = "filterUnderwaterDupe";

          // Elimina los elementos no deseados del clon
          const elementsToRemove = filterUnderwaterDupe.querySelectorAll(
            "#fondoGalaxyGreen, #fondoGalaxy, #customCursor, #customCursorPurpleish, #loginScreen, #registerScreen, #loginButton, #registerButton"
          );
          elementsToRemove.forEach((element) => element.remove());

          // Ajusta el toggle si existe
          const toggleInput = filterUnderwaterDupe.querySelector(".toggle");
          if (toggleInput) {
            toggleInput.removeAttribute("id");
            toggleInput.classList.add("toggle");
          }

          // Añadir el clon al DOM
          filterUnderwater.parentNode.appendChild(filterUnderwaterDupe);

          // Aplica las máscaras simultáneamente utilizando un único requestAnimationFrame
          requestAnimationFrame(() => {
            const currentTime = new Date().getTime();

            // Configura la máscara del primer elemento
            filterUnderwater.style.mask = `url(img/fondoBuceoTransi.webp?t=${currentTime})`;
            filterUnderwater.style.maskRepeat = "no-repeat";
            filterUnderwater.style.maskSize = "100%";
            filterUnderwater.style.maskPosition = "0 0";

            // Configura la máscara del clon con composiciones
            filterUnderwaterDupe.style.mask = `url(img/fondoBuceoTransiMask.webp?t=${currentTime})`;
            filterUnderwaterDupe.style.maskRepeat = "no-repeat";
            filterUnderwaterDupe.style.maskSize = "100%";
            filterUnderwaterDupe.style.maskPosition = "0 0";

            // Inicia el timeout justo después de comenzar las animaciones de las máscaras
            timeoutId = setTimeout(function () {
              underwaterTransi.style.display = "none";
              underwaterTransi.className = "";
              underwater.style.opacity = "100%";

              // Elimina el clon filterUnderwaterDupe del DOM
              if (filterUnderwaterDupe && filterUnderwaterDupe.parentNode) {
                filterUnderwaterDupe.parentNode.removeChild(
                  filterUnderwaterDupe
                );
              }

              // Limpia el ID del timeout después de que se complete
              timeoutId = null;
            }, 9600); // Ajusta el valor del timeout a 9600 ms después del inicio de la animación
          });
        }
      } else {
        // Si no hay transición activa, mostrar solo el fondo buceo sin transiciones
        underwater.src = "img/fondoBuceo.webp?t=" + new Date().getTime();
        underwater.style.display = "block";
        underwater.className = "active";
        underwater.style.opacity = "100%";

        underwaterTransi.style.display = "none";
        underwaterTransi.style.opacity = "0%";
        underwaterTransi.className = "";

        filterUnderwater.className = "active";
        syncTransition(filterUnderwater, underwaterTransi); // Sincroniza la transición si es necesario
      }
      startBubbles();
    }

    /* SKIN GALAXY */
    if (cursorSrc.includes("cccc_galaxy")) {
      cursor.src = "img/cursors/cccc_galaxy.webp";
      cursor.style.opacity = "70%";
      fondo.style.display = "block";
      fondo.src = "img/fondo.gif";
      fondoGreen.style.display = "block";
      fondoGreen.src = "img/fondoGreen.gif";
      fondoGreen.style.opacity = "1%";
      cursorPurpleish.style.display = "none";
      cursor.style.transition =
        "width 0.1s ease-in-out, height 0.1s ease-in-out, opacity 0.1s ease-in-out, margin-left 0.5s ease, margin-top 0.5s ease";

      let isMouseDown = false;

      var fecha = new Date(); // Obtener la fecha y hora actual
      var timestamp = fecha.getTime(); // Usar el timestamp como parámetro único

      // Actualizar la máscara con un nuevo parámetro para forzar la recarga
      fondo.style.maskImage = 'url("img/cursors/cccc.webp?' + timestamp + '")';
      fondoGreen.style.maskImage =
        'url("img/cursors/cccc.webp?' + timestamp + '")';

      // Observer para manejar los cambios de clase y actualizar la posición de la máscara
      let observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "class") {
            // Actualiza la posición según el estado actual de 'clicked'
            const clicked = mutation.target.classList.contains("clicked");
            updateMaskPosition(lastEvent, clicked);
          }
        });
      });

      observer.observe(fondo, { attributes: true });
      observer.observe(fondoGreen, { attributes: true });

      // Evento para manejar el movimiento del ratón
      document.addEventListener("mousemove", function (e) {
        lastEvent = e; // Almacenar el último evento del ratón
        if (isMouseDown) {
          // Si el mouse está presionado, actualizar con offset
          updateMaskPosition(e, true);
        } else {
          // Si no está presionado, actualizar sin offset
          updateMaskPosition(e, false);
        }
      });

      // Evento cuando se presiona el ratón
      document.addEventListener("mousedown", function () {
        isMouseDown = true; // Establecer que el mouse está presionado
        fondo.classList.add("clicked");
        fondoGreen.classList.add("clicked");
      });

      // Evento cuando se suelta el ratón
      document.addEventListener("mouseup", function () {
        isMouseDown = false; // Establecer que el mouse ya no está presionado
        fondo.classList.remove("clicked");
        fondoGreen.classList.remove("clicked");
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

      document.addEventListener("mouseover", function (e) {
        if (
          e.target.tagName === "A" ||
          e.target.closest(".card") ||
          e.target.closest(".material-icons-round") ||
          e.target.closest(".background") ||
          e.target.closest(".sun-moon") ||
          e.target.closest("span") ||
          e.target.closest("#flechaaSkins") ||
          e.target.closest("#flechaaModifiers") ||
          e.target.closest(".buttonTheme") ||
          e.target.closest("#logoutButton") ||
          e.target.closest("#rtxContainer") ||
          e.target.closest("#volumenImg") ||
          e.target.closest("#volumeSlider") ||
          e.target.closest("#settingsImgContainer")
        ) {
          fondoGreen.style.opacity = "70%";
          isCursorOverSpecialElement = true;
        }
      });

      document.addEventListener("mouseout", function (e) {
        if (
          e.target.tagName === "A" ||
          e.target.closest(".card") ||
          e.target.closest(".material-icons-round") ||
          e.target.closest(".background") ||
          e.target.closest(".sun-moon") ||
          e.target.closest("span") ||
          e.target.closest("#flechaaSkins") ||
          e.target.closest("#flechaaModifiers") ||
          e.target.closest(".buttonTheme") ||
          e.target.closest("#logoutButton") ||
          e.target.closest("#rtxContainer") ||
          e.target.closest("#volumenImg") ||
          e.target.closest("#volumeSlider") ||
          e.target.closest("#settingsImgContainer")
        ) {
          fondoGreen.style.opacity = "1%";
          isCursorOverSpecialElement = false;
        }
      });

      if (skinsContainer) {
        skinsContainer.addEventListener("mousemove", function (e) {
          if (!isCursorOverSpecialElement) {
            const rect = skinsContainer.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const contentWidth = skinsContainer.clientWidth;

            if (mouseX >= contentWidth) {
              // El ratón está sobre el scrollbar
              fondoGreen.style.opacity = "70%";
            } else {
              // El ratón está dentro de skinsContainer pero no sobre el scrollbar
              fondoGreen.style.opacity = "1%";
            }
          }
        });

        skinsContainer.addEventListener("mouseleave", function () {
          if (!isCursorOverSpecialElement) {
            fondoGreen.style.opacity = "1%";
          }
        });
      }
    }
  }

  function syncTransition(element1, element2) {
    if (element1 && element2) {
      requestAnimationFrame(() => {
        element1.style.transition = "opacity 2s ease-in-out";
        element2.style.transition = "opacity 2s ease-in-out";

        requestAnimationFrame(() => {
          element1.style.opacity = "1";
          element2.style.opacity = "1";
        });
      });
    } else {
      console.error("syncTransition: Uno o ambos elementos no existen.");
    }
  }

  /* CREAR ILUMINACION TEMA OSCURO / OVALO */

  function createOval() {
    const svgNS = "http://www.w3.org/2000/svg";

    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "1200");
    svg.setAttribute("height", "125");
    svg.setAttribute("viewBox", "0 0 1200 125");
    svg.setAttribute("class", "svg-oval");

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

    const image = document.createElementNS(svgNS, "image");
    image.setAttribute("href", "img/noise.png");
    image.setAttribute("x", "0");
    image.setAttribute("y", "0");
    image.setAttribute("width", "1000");
    image.setAttribute("height", "125");
    image.setAttribute("mask", "url(#oval-mask)");
    image.style.mixBlendMode = "darken";

    svg.appendChild(image);

    const oval = document.createElementNS(svgNS, "ellipse");
    oval.setAttribute("cx", "500");
    oval.setAttribute("cy", "62.5");
    oval.setAttribute("rx", "500");
    oval.setAttribute("ry", "62.5");
    oval.setAttribute("opacity", "0");

    svg.appendChild(oval);

    return svg;
  }

  document.querySelectorAll("a:has(.card)").forEach((link, index) => {
    let ovalTimeout;

    link.addEventListener("mouseenter", function () {
      let oval = this.querySelector(".svg-oval");

      if (oval) {
        clearTimeout(ovalTimeout);
        oval.classList.add("show");
      } else {
        oval = createOval();

        this.appendChild(oval);

        requestAnimationFrame(() => {
          oval.classList.add("show");
        });
      }
    });

    link.addEventListener("mouseleave", function () {
      const oval = this.querySelector(".svg-oval");
      if (oval) {
        oval.classList.remove("show");

        ovalTimeout = setTimeout(() => {
          if (oval) {
            this.removeChild(oval);
          }
        }, 400);
      }
    });
  });

  /* ACTIVAR MENU-SKINS */

  function addSkinsMenuActive() {
    flechaaSkins.classList.add("active");
    skinsContainer.classList.add("active");
    flechaHitbloxPlusSkins.classList.add("active");
    menuLabelSkins.classList.add("active");

    if (skinsContainer.classList.contains("active")) {
      coinsContainer.style.marginLeft = "15vw";
    }
  }

  function removeSkinsMenuActive() {
    flechaaSkins.classList.remove("active");
    skinsContainer.classList.remove("active");
    flechaHitbloxPlusSkins.classList.remove("active");
    menuLabelSkins.classList.remove("active");

    if (!skinsContainer.classList.contains("active")) {
      coinsContainer.style.marginLeft = "0vw";
    }
  }

  flechaaSkins.addEventListener("mouseenter", addSkinsMenuActive);
  flechaaSkins.addEventListener("mouseleave", removeSkinsMenuActive);
  skinsContainer.addEventListener("mouseenter", addSkinsMenuActive);
  skinsContainer.addEventListener("mouseleave", removeSkinsMenuActive);
  flechaHitbloxPlusSkins.addEventListener("mouseenter", addSkinsMenuActive);
  flechaHitbloxPlusSkins.addEventListener("mouseleave", removeSkinsMenuActive);
  menuLabelSkins.addEventListener("mouseenter", addSkinsMenuActive);
  menuLabelSkins.addEventListener("mouseleave", removeSkinsMenuActive);


  /* ACTIVAR MODIFIERS-SKINS */

  function addModifiersMenuActive() {
    flechaaModifiers.classList.add("active");
    modifiersContainer.classList.add("active");
    flechaHitbloxPlusModifiers.classList.add("active");
    menuLabelModifiers.classList.add("active");
    flechaHitbloxPlusModifiers2.classList.add("active");
    flechaHitbloxPlusModifiers3.classList.add("active");
    activateMouseListenerTendero();
    startCestaFrameAnimation();

    if (modifiersContainer.classList.contains("active")) {
      logoutButton.style.right = "16vw";
      if (settingsContainer.classList.contains("active")) {
        settingsContainer.style.marginRight = "15vw";
      }
      settingsImgContainer.style.marginRight = "15vw";

      cageContainer.style.marginRight = "15vw";
      hitboxSlotWorld.style.marginRight = "15vw";
      wrapper.style.marginRight = "15vw";
    }
  }

  function removeModifiersMenuActive(e) {
  /*  if (modifiersContainer.contains(e.relatedTarget)) {
      // El evento está dentro de modifiersContainer o de sus hijos
      return;
  }

  // Otras condiciones opcionales para otros elementos
  if (
      logoutButton.contains(e.relatedTarget) ||
      wrapper.contains(e.relatedTarget) ||
      flechaHitbloxPlusModifiers.contains(e.relatedTarget) ||
      grocery.contains(e.relatedTarget) ||
      store.contains(e.relatedTarget)
  ) {
      return;
  }*/


    flechaaModifiers.classList.remove("active");
    modifiersContainer.classList.remove("active");
    flechaHitbloxPlusModifiers.classList.remove("active");
    menuLabelModifiers.classList.remove("active");
    flechaHitbloxPlusModifiers2.classList.remove("active");
    flechaHitbloxPlusModifiers3.classList.remove("active");
    deactivateMouseListenerTendero();
    stopRandomCycle();
    gorceryContextMenu.style.display = 'none';
    modifiersSettingsContextMenu.style.display = 'none';


    if (!modifiersContainer.classList.contains("active")) {
      logoutButton.style.right = "30px";
      if (settingsContainer.classList.contains("active")) {
        settingsContainer.style.marginRight = "0vw";
      }
      settingsImgContainer.style.marginRight = "0vw";

      cageContainer.style.marginRight = "0vw";
      hitboxSlotWorld.style.marginRight = "0vw";
      wrapper.style.marginRight = "0vw";
    }
  }



  flechaaModifiers.addEventListener("mouseenter", addModifiersMenuActive);
  modifiersContainer.addEventListener("mouseenter", addModifiersMenuActive);
  flechaHitbloxPlusModifiers.addEventListener(
    "mouseenter",
    addModifiersMenuActive
  );
  flechaHitbloxPlusModifiers2.addEventListener(
    "mouseenter",
    removeModifiersMenuActive
  );

  flechaHitbloxPlusModifiers3.addEventListener(
    "mouseenter",
    removeModifiersMenuActive
  );

    
  /* FILTRO UNDERWATER */

  const turbulence = document.getElementById("turbulence");
  let time = 0; // Variable de tiempo para generar el ciclo

  function animateTurbulence() {
    time += 0.003; // Ajusta la velocidad de la animación aumentando o disminuyendo este valor

    // Usa una función sinusoidal para un movimiento cíclico suave
    const baseFreqX = 0.01 + 0.005 * Math.sin(time);
    const baseFreqY = 0.01 + 0.005 * Math.cos(time);

    turbulence.setAttribute("baseFrequency", baseFreqX + " " + baseFreqY);

    requestAnimationFrame(animateTurbulence); // Continuar la animación
  }

  animateTurbulence(); // Iniciar la animación

  /*

      //CREAR MEDIDAS ANIM
      function createColorColumn() {
        const container = document.getElementById('colorColumn');
        const totalSections = 29;
    
        for (let i = 1; i <= totalSections; i++) {
            const square = document.createElement('div');
            square.classList.add('colorSquare');
            
            // Asignar un color diferente a cada cuadrado
            square.style.backgroundColor = getRandomColor();
            
            // Añadir el número al cuadrado
            square.textContent = i;
            
            container.appendChild(square);
        }
    }
    
    // Función para generar un color aleatorio en formato hexadecimal
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let j = 0; j < 6; j++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    // Llamar a la función para crear la columna de colores
    createColorColumn();*/

  /* NOTAS TRANSICION */

  let notasEstado = false;
  let notasAnimating = false;

  notas.addEventListener("click", function () {
    if (horarioEstado) {
      return;
    }
    
    ejecutarAnim();
  
    function ejecutarAnim() {
      if (!notasAnimating) {
        notasAnimating = true;
  
        notasEstado = !notasEstado;
  
        if (notasEstado) {
          notebookContainer.style.display = "flex";
          notebook.style.display = "flex";
          controls.style.display = "flex";
          notas.classList.add("active");
          writeButton.click();
  
          setTimeout(() => {
            boxx.style.marginRight = "800px";
            allESC.style.marginLeft = "-400px";
            helloMessage.style.marginLeft = "-400px";
            horarioImg.style.setProperty(
              "transition",
              "margin-left 0.9s ease, margin-top 1.3s ease, transform 0.9s ease, filter 2s ease",
              "important"
            );
            horarioImg.style.setProperty(
              "transform",
              "translateX(-410px) scale(0.02, 0.02)",
              "important"
            );
            notebookLogoVacio.style.setProperty(
              "transition",
              "transform 0.9s ease",
              "important"
            );
            notebookLogoVacio.style.setProperty(
              "transform",
              "translateX(-400px)  translateY(10px)",
              "important"
            );
            notebookLogoLleno.style.setProperty(
              "transition",
              "transform 0.9s ease, opacity 0.2s ease",
              "important"
            );
            notebookLogoLleno.style.setProperty(
              "transform",
              "translateX(-400px)  translateY(10px)",
              "important"
            );


            stage.style.display = "block";
            notebookLogoLleno.style.opacity = "0";

            if(thisPaperReverse){
              stage.style.animation = 'appearReverse 2.2s ease';
            }else{
              stage.style.animation = 'appear 2.2s ease';
            }



            
            abrirPag();


          
  
            setTimeout(() => {
              notebook.style.opacity = "1";
              controls.style.opacity = "1";
            }, 1900);
  
            setTimeout(() => {
              stage.style.display = "none";
            }, 2200);
  
          }, 10);
        }
  
        if (!notasEstado) {
          notebook.style.opacity = "0";
          controls.style.opacity = "0";
          boxx.style.marginRight = "0px";
          allESC.style.marginLeft = "0px";
          helloMessage.style.marginLeft = "0px";
          notas.classList.remove("active");
          horarioImg.style.setProperty(
            "transition",
            "margin-left 0.9s ease, margin-top 1.3s ease, transform 0.9s ease, filter 2s ease",
            "important"
          );
          horarioImg.style.setProperty(
            "transform",
            "translateX(-10px) scale(0.02, 0.02)",
            "important"
          );
          notebookLogoLleno.style.setProperty(
            "transition",
            "transform 0.9s ease, opacity 0.2s ease",
            "important"
          );
          notebookLogoLleno.style.setProperty(
            "transform",
            "translateX(0px)  translateY(10px)",
            "important"
          );
          notebookLogoVacio.style.setProperty(
            "transition",
            "transform 0.9s ease",
            "important"
          );
          notebookLogoVacio.style.setProperty(
            "transform",
            "translateX(0px)  translateY(10px)",
            "important"
          );
          paintOF();
  

          clonePageLogic(thisPaper);
          cerrarPag();



          stage.style.display = "block";
          if(thisPaperReverse){
            stage.style.animation = 'disappearReverse 2.2s ease';
          }else{
            stage.style.animation = 'disappear 2.2s ease';
          }
  
          setTimeout(() => {
            stage.style.display = "none";
            notebookLogoLleno.style.opacity = "1";
          }, 2000);
  
          setTimeout(() => {
            notebook.style.display = "none";
            controls.style.display = "none";
            notebookContainer.style.display = "none";
          }, 1000);
        }
  
        setTimeout(() => {
          notasAnimating = false;
        }, 2300);
      }
    }
  });



  function selectPag0() {
    const paginasIzquierda = []; // Vacío porque no hay elementos en esta selección
    const paginasDerecha = document.querySelectorAll('.marcoPrincipal, .paginasIzq, .paginasDer, .contraportada');
    return { paginasIzquierda, paginasDerecha };
}

function selectPag3() {
    const paginasIzquierda = document.querySelectorAll('.marcoPrincipal');
    const paginasDerecha = document.querySelectorAll('.paginasIzq, .paginasDer, .contraportada');
    return { paginasIzquierda, paginasDerecha };
}

function selectPag10() {
    const paginasIzquierda = document.querySelectorAll('.marcoPrincipal, .paginasIzq');
    const paginasDerecha = document.querySelectorAll('.paginasDer, .contraportada');
    return { paginasIzquierda, paginasDerecha };
}

function selectPag34() {
    const paginasIzquierda = document.querySelectorAll('.marcoPrincipal, .paginasIzq, .paginasDer');
    const paginasDerecha = document.querySelectorAll('.contraportada');
    return { paginasIzquierda, paginasDerecha };
}

function selectPag36() {
    const paginasIzquierda = document.querySelectorAll('.marcoPrincipal, .paginasIzq, .paginasDer, .contraportada');
    const paginasDerecha = []; // Vacío porque no hay elementos en esta selección
    return { paginasIzquierda, paginasDerecha };
}



function abrirPag() {
    let paginasIzquierda = [];
    let paginasDerecha = [];

    // Selecciona los elementos según el valor de `thisPaper`
    if (thisPaper === 0 || thisPaper === 1) {
        ({ paginasIzquierda, paginasDerecha } = selectPag0());
        if (paginasIzquierda.length > 0) {
            paginasIzquierda.forEach((pagina) => {
                pagina.style.setProperty('--tx', '0px');
                pagina.style.setProperty('--ry', '0deg');
                pagina.style.setProperty('--tz-transition', '0px');

            });
        }
    
        if (paginasDerecha.length > 0) {
            paginasDerecha.forEach((pagina) => {
                pagina.style.setProperty('--tx', '0px');
                pagina.style.setProperty('--ry', '0deg');
                pagina.style.setProperty('--tz-transition', '0px');

            });
        }
        return;
    } else if (thisPaper === 2 || thisPaper === 3) {
        ({ paginasIzquierda, paginasDerecha } = selectPag3());
    } else if (thisPaper === 34 || thisPaper === 35) {
        ({ paginasIzquierda, paginasDerecha } = selectPag34());
    } else if (thisPaper === 36 || thisPaper === 37) {
        ({ paginasIzquierda, paginasDerecha } = selectPag36());

        if (paginasIzquierda.length > 0) {
            paginasIzquierda.forEach((pagina) => {
                pagina.style.setProperty('--tx', '0px');
                pagina.style.setProperty('--ry', '0deg');
                pagina.style.setProperty('--tz-transition', '0px');

            });
        }
    
        if (paginasDerecha.length > 0) {
            paginasDerecha.forEach((pagina) => {
                pagina.style.setProperty('--tx', '0px');
                pagina.style.setProperty('--ry', '0deg');
                pagina.style.setProperty('--tz-transition', '0px');

            });
        }
        return;
    } else {
        ({ paginasIzquierda, paginasDerecha } = selectPag10());
    }

    // Aplica los estilos a las páginas seleccionadas
    if (paginasIzquierda.length > 0) {
        paginasIzquierda.forEach((pagina) => {
            pagina.style.setProperty('--tx', '360px');
            pagina.style.setProperty('--ry', '0deg');
            pagina.style.setProperty('--tz-transition', '50px');
            pagina.style.transition = 'transform 1s 1.2s ease';
        });
    }

    if (paginasDerecha.length > 0) {
        paginasDerecha.forEach((pagina) => {
            pagina.style.setProperty('--tx', '360px');
            pagina.style.setProperty('--ry', '0deg');
            pagina.style.setProperty('--tz-transition', '0px');
            pagina.style.transition = 'transform 1s 1.2s ease';
        });
    }

    // Forzar reflujo
    document.body.offsetHeight;

    if (paginasIzquierda.length > 0) {
        paginasIzquierda.forEach((pagina) => {
            pagina.style.setProperty('--tx', '-360px');
            pagina.style.setProperty('--ry', '-180deg');
            pagina.style.setProperty('--tz-transition', '150px');
        });
    }

    if (paginasDerecha.length > 0) {
        paginasDerecha.forEach((pagina) => {
            pagina.style.setProperty('--tx', '360px');
            pagina.style.setProperty('--ry', '0deg');
            // Cambios adicionales si son necesarios
        });
    }
}


function cerrarPag() {
  let paginasIzquierda = [];
  let paginasDerecha = [];

  //console.log('Valor de thisPaper:', thisPaper);

  if (thisPaper === 0 || thisPaper === 1) {
      ({ paginasIzquierda, paginasDerecha } = selectPag0());
      if (paginasIzquierda.length > 0) {
          paginasIzquierda.forEach((pagina) => {
              pagina.style.setProperty('--tx', '0px');
              pagina.style.setProperty('--ry', '0deg');
              pagina.style.setProperty('--tz-transition', '0px');

          });
      }

      if (paginasDerecha.length > 0) {
          paginasDerecha.forEach((pagina) => {
              pagina.style.setProperty('--tx', '0px');
              pagina.style.setProperty('--ry', '0deg');
              pagina.style.setProperty('--tz-transition', '0px');

          });
      }
      return;
  } else if (thisPaper === 2 || thisPaper === 3) {
      ({ paginasIzquierda, paginasDerecha } = selectPag3());
  } else if (thisPaper === 34 || thisPaper === 35) {
      ({ paginasIzquierda, paginasDerecha } = selectPag34());
  } else if (thisPaper === 36 || thisPaper === 37) {
      ({ paginasIzquierda, paginasDerecha } = selectPag36());
      if (paginasIzquierda.length > 0) {
          paginasIzquierda.forEach((pagina) => {
              pagina.style.setProperty('--tx', '0px');
              pagina.style.setProperty('--ry', '0deg');
              pagina.style.setProperty('--tz-transition', '0px');

          });
      }

      if (paginasDerecha.length > 0) {
          paginasDerecha.forEach((pagina) => {
              pagina.style.setProperty('--tx', '0px');
              pagina.style.setProperty('--ry', '0deg');
              pagina.style.setProperty('--tz-transition', '0px');

          });
      }
      return;
      
  } else {
      ({ paginasIzquierda, paginasDerecha } = selectPag10());
  }


  // Aplica estilos a las páginas de la izquierda
  if (paginasIzquierda.length > 0) {
      paginasIzquierda.forEach((pagina) => {
          pagina.style.setProperty('--tx', '-360px');
          pagina.style.setProperty('--ry', '-180deg');
          pagina.style.setProperty('--tz-transition', '50px');
          pagina.style.transition = 'transform 1s ease';
      });
  }

  // Aplica estilos a las páginas de la derecha
  if (paginasDerecha.length > 0) {
      paginasDerecha.forEach((pagina) => {
          pagina.style.setProperty('--tx', '360px');
          pagina.style.setProperty('--ry', '0deg');
          pagina.style.setProperty('--tz-transition', '0px');
          pagina.style.transition = 'transform 1s ease';
      });
  }

  // Forzar reflujo
  document.body.offsetHeight;
  

  
  setTimeout(() => {
      if (paginasIzquierda.length > 0) {
          paginasIzquierda.forEach((pagina) => {
              pagina.style.setProperty('--tx', '-360px', 'important');
              pagina.style.setProperty('--ry', '-180deg', 'important');
          });
      }

      if (paginasDerecha.length > 0) {
          paginasDerecha.forEach((pagina) => {
            pagina.style.setProperty('--tx', '-360px', 'important');
            pagina.style.setProperty('--ry', '-180deg', 'important');

          });
      }
  }, 10);
}


function resetPag() {
  let paginasIzquierda = [];
  let paginasDerecha = [];

  //console.log('Valor de thisPaper:', thisPaper);

  if (thisPaper === 0 || thisPaper === 1) {
      ({ paginasIzquierda, paginasDerecha } = selectPag0());
      console.log('Estoy en el if de  selectPag0()');
      return;
  } else if (thisPaper === 2 || thisPaper === 3) {
      ({ paginasIzquierda, paginasDerecha } = selectPag3());
      console.log('Estoy en el if de  selectPag3()');
  } else if (thisPaper === 34 || thisPaper === 35) {
      ({ paginasIzquierda, paginasDerecha } = selectPag34());
      console.log('Estoy en el if de  selectPag34()');
  } else if (thisPaper === 36 || thisPaper === 37) {
      ({ paginasIzquierda, paginasDerecha } = selectPag36());
      console.log('Estoy en el if de  selectPag36()');
      return;
      
  } else {
      ({ paginasIzquierda, paginasDerecha } = selectPag10());
      console.log('Estoy en el if de  selectPag10()');
  }


  // Aplica estilos a las páginas de la izquierda
  if (paginasIzquierda.length > 0) {
      paginasIzquierda.forEach((pagina) => {
          pagina.style.setProperty('--tx', '0px');
          pagina.style.setProperty('--ry', '0deg');
      });
  }

  // Aplica estilos a las páginas de la derecha
  if (paginasDerecha.length > 0) {
      paginasDerecha.forEach((pagina) => {
          pagina.style.setProperty('--tx', '0px');
          pagina.style.setProperty('--ry', '0deg');
      });
  }

  document.body.offsetHeight;
  
}
  

  

/*
  function capturarImagen() {
    const notebook = document.getElementById('notebook');
    const page1 = notebook.querySelector('[page="1"]'); // Seleccionar la página 1

    if (page1) {
        html2canvas(page1, { backgroundColor: null }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const notebookImg = document.getElementById('portadaScreenthsoot');
            notebookImg.src = imgData;
            notebookImg.style.display = "flex";
        });
    } else {
        console.error('La página 1 no se encuentra en el notebook.');
    }
}*/

  /* HORARIO TRANSICION */

  let horarioEstado = false;
  let horarioAnimating = false;

  window.addEventListener("load", function () {
    horarioImg.style.transition = "none";

    horarioImg.style.setProperty("margin-left", "350px", "important");
    horarioImg.style.setProperty("margin-top", "47px", "important");
    if (idLogeado) {
      horarioImg.style.setProperty(
        "transform",
        "translateX(-10px) scale(0.02, 0.02)",
        "important"
      );
    } else {
      horarioImg.style.setProperty(
        "transform",
        "translateX(-75px) scale(0.02, 0.02)",
        "important"
      );
    }
    // Espera un tiempo adicional para asegurar que todo esté completamente renderizado
    setTimeout(() => {
      // Activa la transición en el primer clic
      horario.addEventListener("click", function () {
        if (notasEstado) {
          return;
        }
        if (!horarioAnimating) {
          horarioAnimating = true;

          // Activa la transición ahora que el elemento ya está en su estado inicial

          horarioEstado = !horarioEstado;

          if (horarioEstado) {
            horarioImg.classList.add("active");
            horarioImg.style.setProperty("display", "flex", "important");
            setTimeout(() => {
              // Configura el estilo para la animación de entrada
              horarioImg.style.setProperty(
                "transition",
                "margin-left 0.9s ease, margin-top 0.5s ease, transform 1s ease, filter 0.5s ease",
                "important"
              );
              horarioImg.style.setProperty("opacity", "1", "important");
              horarioImg.style.setProperty("margin-left", "750px", "important");
              horarioImg.style.setProperty(
                "transform",
                "translateX(-350px) scale(1, 1)",
                "important"
              );
              notebookLogoVacio.style.setProperty(
                "transition",
                "transform 0.9s ease",
                "important"
              );
              notebookLogoVacio.style.setProperty(
                "transform",
                "translateX(400px) translateY(10px)",
                "important"
              );
              notebookLogoLleno.style.setProperty(
                "transition",
                "transform 0.9s ease, opacity 0.2s ease",
                "important"
              );
              notebookLogoLleno.style.setProperty(
                "transform",
                "translateX(400px) translateY(10px)",
                "important"
              );

              if(horarioImg.classList.contains("horarioImgDay")){
                horarioImg.classList.remove("horarioImgDay");
              }
              if(horarioImg.classList.contains("horarioImgNight")){
                horarioImg.classList.remove("horarioImgNight");
              }

              horarioImg.style.setProperty("margin-top", "-420px", "important");
              boxx.style.marginLeft = "800px";
              allESC.style.marginLeft = "400px";
              helloMessage.style.marginLeft = "400px";
            }, 10);
          } else {
            // Configura el estilo para la animación de salida
            horarioImg.classList.remove("active");
            horarioImg.style.setProperty(
              "transition",
              "margin-left 0.9s ease, margin-top 1.3s ease, transform 1s ease, filter 2s ease",
              "important"
            );
            horarioImg.style.setProperty("opacity", "1", "important");
            horarioImg.style.setProperty("margin-left", "350px", "important");
            notebookLogoLleno.style.setProperty(
              "transition",
              "transform 0.9s ease, opacity 0.2s ease",
              "important"
            );
            notebookLogoLleno.style.setProperty(
              "transform",
              "translateX(0px) translateY(10px)",
              "important"
            );
            notebookLogoVacio.style.setProperty(
              "transition",
              "transform 0.9s ease",
              "important"
            );
            notebookLogoVacio.style.setProperty(
              "transform",
              "translateX(0px) translateY(10px)",
              "important"
            );

            if (idLogeado) {
              horarioImg.style.setProperty(
                "transform",
                "translateX(-10px) scale(0.02, 0.02)",
                "important"
              );
            } else {
              horarioImg.style.setProperty(
                "transform",
                "translateX(-75px) scale(0.02, 0.02)",
                "important"
              );
            }

            if(horarioImg.classList.contains("horarioImgDay") || horarioImg.classList.contains("horarioImgNight")){
              
            }else{
              if(checkbox.checked){
                horarioImg.classList.add("horarioImgDay");
              }else{
                horarioImg.classList.add("horarioImgNight");
              }
            }

            horarioImg.style.setProperty("margin-top", "47px", "important");
            boxx.style.marginLeft = "0px";
            allESC.style.marginLeft = "0px";
            helloMessage.style.marginLeft = "0px";
          }

          setTimeout(() => {
            horarioImg.style.setProperty("display", "flex", "important");
          }, 1000);

          setTimeout(() => {
            horarioAnimating = false;
          }, 1100);
        }
      });
    }, 200); // Tiempo adicional para asegurar que el navegador haya terminado de renderizar
  });

  /* SLIDER TAMAÑO PINCEL */

  const sliderPaint = document.querySelector(".sliderPaint");
  const tooltipPaint = document.querySelector(".tooltipPaint");
  const tooltipLabelPaint = document.getElementById("tooltipLabelPaint");
  const paintImgUd = document.getElementById("paintImgUd");
  let selectedRadius;

  function updateTooltipPaint() {
    let valueReal = sliderPaint.value;

    tooltipLabelPaint.textContent = `${parseInt(valueReal, 10) + 1}`;

    if (valueReal < 10) {
      tooltipPaint.style.minWidth = "42px";
      paintImgUd.style.left = "-6px";
    } else {
      tooltipPaint.style.minWidth = "50px";
      paintImgUd.style.left = "3px";
    }

    if (paintButton.classList.contains("active")) {
      cursorPaintSwitch();
    } else {
      cursor.style.marginLeft = "0px";
      cursor.style.marginTop = "0px";
      cursorPurpleish.style.marginLeft = "0px";
      cursorPurpleish.style.marginTop = "0px";
      fondo.style.marginLeft = "0px";
      fondo.style.marginTop = "0px";
      fondoGreen.style.marginLeft = "0px";
      fondoGreen.style.marginTop = "0px";
    }

    // Posiciona el tooltipVolume en función del valor del slider
    const sliderWidth = sliderPaint.offsetWidth;
    const thumbWidth = 25; // Ancho de la bola del slider
    const tooltipOffset =
      (valueReal / sliderPaint.max) * (sliderWidth - thumbWidth) +
      thumbWidth / 2;

    tooltipPaint.style.left = `${
      sliderPaint.offsetLeft + tooltipOffset - tooltipPaint.offsetWidth / 2
    }px`;
    tooltipPaint.style.top = `${sliderPaint.offsetTop - 35}px`; // Ajusta la posición vertical del tooltipVolume

    selectedRadius = sliderPaint.value;

    // Guarda el valor en el localStorage
    localStorage.setItem("sliderPaintValue", valueReal);
  }

  // Muestra el tooltipVolume cuando el ratón está presionado
  function showTooltip() {
    tooltipPaint.style.opacity = "1";
    isMouseDown = true;
  }

  // Oculta el tooltipVolume cuando el ratón se suelta
  function hideTooltip() {
    tooltipPaint.style.opacity = "0";
    isMouseDown = false;
  }

  // Solo actualiza el tooltipVolume si el ratón está presionado
  function handleSliderMove() {
    if (isMouseDown) {
      updateTooltipPaint();
    }
  }

  // Añadir los eventos de mostrar y ocultar tooltipVolume
  sliderPaint.addEventListener("mousedown", showTooltip);
  document.addEventListener("mouseup", hideTooltip);
  sliderPaint.addEventListener("input", handleSliderMove);

  // Iniciar el tooltipVolume con el valor del slider si está en localStorage
  if (localStorage.getItem("sliderPaintValue")) {
    sliderPaint.value = localStorage.getItem("sliderPaintValue");
    updateTooltipPaint();
    tooltipPaint.style.opacity = "0"; // Ocultar el tooltipVolume inicialmente
  }

  /* CONTROLAR QUE EL TEXTO DE LA LIBRETA NO SOBREPASE EL CONTENEDOR */

  const text = document.querySelector(".text");
  text.style.overflow = "hidden";
  text.style.maxHeight = "500px"; // Ajusta este valor según la altura deseada

  function checkContentHeight() {
    // Mientras el contenido exceda la altura máxima, elimina el último carácter
    while (text.scrollHeight > text.clientHeight) {
      text.innerText = text.innerText.slice(0, -1);
    }

    // Coloca el cursor al final del texto después de la modificación
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(text);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  text.addEventListener("input", checkContentHeight);

  text.addEventListener("paste", (event) => {
    event.preventDefault();

    // Obtén el texto del portapapeles y pégalo sin exceder los límites
    const clipboardText = (event.clipboardData || window.clipboardData).getData(
      "text"
    );
    text.innerText += clipboardText;

    // Verifica si el contenido excede la altura y recorta si es necesario
    checkContentHeight();
  });

  // Actualizar las notas de un usuario por id
  async function actualizarNotasUsuario(idLogeado, notas) {
    const url = `${supabaseUrl}?id=eq.${idLogeado}`;
    const actualizarNotas = { notas: notas }; // Aquí asignamos el contenido de 'notas'

    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify(actualizarNotas),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error(
          "Error al actualizar las notas:",
          response.statusText,
          errorData
        );
        throw new Error(
          "Error en la actualización de notas: " + response.statusText
        );
      }

      const data = await response.json();
      console.log("Notas actualizadas correctamente:", data);
      return data;
    } catch (error) {
      console.error("Error al actualizar las notas:", error);
    }
  }

  // Obtener las notas de un usuario por id
  async function obtenerNotasDeUsuario(idLogeado) {
    const url = `${supabaseUrl}?id=eq.${idLogeado}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error("Error en la solicitud:", response.statusText);
        return null;
      }

      const data = await response.json();

      if (data.length > 0) {
        return data[0].notas; // Devuelve el contenido de 'notas'
      } else {
        console.error("Usuario no encontrado");
        return null;
      }
    } catch (error) {
      console.error("Error al obtener las notas:", error);
      return null;
    }
  }

  // Seleccionamos todos los elementos con clase 'text'
  const textElements = document.querySelectorAll(".text");

  // Función para recoger y enviar las notas
  function enviarNotasActualizadas() {
    const notas = {};

    textElements.forEach((textElement) => {
      const pageElement = textElement.closest("[page]");
      const pageNumber = pageElement.getAttribute("page");
      const content = textElement.innerHTML;
      notas[pageNumber] = content;
    });

    const notasJSON = JSON.stringify(notas);

    actualizarNotasUsuario(idLogeado, notasJSON);
  }

  // Agregamos los listeners a cada elemento 'text'
  textElements.forEach((textElement) => {
    const updateFunction = () => {
      clearTimeout(textElement.updateTimeout);
      textElement.updateTimeout = setTimeout(() => {
        enviarNotasActualizadas();
      }, 500);
    };

    // Listener para 'input' event (se activa al escribir)
    textElement.addEventListener("input", updateFunction);

    // Listener para 'paste' event (se activa al pegar texto)
    textElement.addEventListener("paste", updateFunction);
  });

  async function cargarNotas(idLogeado) {
    const notasJSON = await obtenerNotasDeUsuario(idLogeado);
    if (notasJSON) {
      const notas = JSON.parse(notasJSON);

      // Iterar sobre todas las páginas de notas y verificar
      for (const pageNumber in notas) {
        const content = notas[pageNumber];
        const textElement = document.querySelector(
          `[page="${pageNumber}"] .text`
        );
        if (textElement) {
          textElement.innerHTML = content;
          //console.log(`Cargando contenido en la página ${pageNumber}:`, content);
        } else {
          //console.warn(`No se encontró el contenedor de texto para la página ${pageNumber}`);
        }
      }
    } else {
      console.log("No hay notas para cargar o ocurrió un error al obtenerlas.");
    }
  }

  let textSelected = true;
  let paintChangesBuffer = {};
  let saveTimeout = null;
  let dibujosCache = {}; // Cache local de dibujos
  let isPainting = false; // Estado para saber si está en modo de pintura

  writeButton.addEventListener("click", function () {
    if (!textSelected) {
      textSelected = !textSelected;
      writeButton.classList.add("active");
      paintButton.classList.remove("active");
      Array.from(paints).forEach((painting) => {
        painting.style.pointerEvents = "none";
      });
      paintOF(); // Asegura que se eliminen los event listeners de pintura
      writeButtonAction();
    }
  });

  function writeButtonAction() {}

  paintButton.addEventListener("click", function () {
    if (textSelected) {
      textSelected = !textSelected;
      paintButton.classList.add("active");
      writeButton.classList.remove("active");
      Array.from(paints).forEach((painting) => {
        painting.style.pointerEvents = "all";
      });
      paintON();
    }
  });

  function paintON() {
    configurarEventosDePintura();
    activarGeneracionDePixeles();

    paletteContainer.style.display = "flex";
    sliderPaint.style.display = "flex";

    cursorPaint.style.display = "block";
    cursorPaint.style.opacity = "1";

    cursorPaintSwitch();

    setTimeout(() => {
      paletteContainer.classList.add("active");
      sliderPaint.classList.add("active");
      sizeVisualizer.classList.add("active");
    }, 10);
  }

  function cursorPaintSwitch() {
    if (checkbox.checked) {
      //Theme Light
      switch (sliderPaint.value) {
        case "0":
          cursorPaint.src = "img/paintCursor/day/0.png";
          sizeVisualizer.src = "img/paintCursor/day/0.png";
          cursor.style.marginLeft = "50px";
          cursor.style.marginTop = "50px";
          cursorPurpleish.style.marginLeft = "50px";
          cursorPurpleish.style.marginTop = "50px";
          fondo.style.marginLeft = "50px";
          fondo.style.marginTop = "50px";
          fondoGreen.style.marginLeft = "50px";
          fondoGreen.style.marginTop = "50px";
          break;

        case "1":
          cursorPaint.src = "img/paintCursor/day/1.png";
          sizeVisualizer.src = "img/paintCursor/day/1.png";
          cursor.style.marginLeft = "53.3px";
          cursor.style.marginTop = "53.3px";
          cursorPurpleish.style.marginLeft = "53.3px";
          cursorPurpleish.style.marginTop = "53.3px";
          fondo.style.marginLeft = "53.3px";
          fondo.style.marginTop = "53.3px";
          fondoGreen.style.marginLeft = "53.3px";
          fondoGreen.style.marginTop = "53.3px";
          break;

        case "2":
          cursorPaint.src = "img/paintCursor/day/2.png";
          sizeVisualizer.src = "img/paintCursor/day/2.png";
          cursor.style.marginLeft = "56.6px";
          cursor.style.marginTop = "56.6px";
          cursorPurpleish.style.marginLeft = "56.6px";
          cursorPurpleish.style.marginTop = "56.6px";
          fondo.style.marginLeft = "56.6px";
          fondo.style.marginTop = "56.6px";
          fondoGreen.style.marginLeft = "56.6px";
          fondoGreen.style.marginTop = "56.6px";
          break;

        case "3":
          cursorPaint.src = "img/paintCursor/day/3.png";
          sizeVisualizer.src = "img/paintCursor/day/3.png";
          cursor.style.marginLeft = "60px";
          cursor.style.marginTop = "60px";
          cursorPurpleish.style.marginLeft = "60px";
          cursorPurpleish.style.marginTop = "60px";
          fondo.style.marginLeft = "60px";
          fondo.style.marginTop = "60px";
          fondoGreen.style.marginLeft = "60px";
          fondoGreen.style.marginTop = "60px";
          break;

        case "4":
          cursorPaint.src = "img/paintCursor/day/4.png";
          sizeVisualizer.src = "img/paintCursor/day/4.png";
          cursor.style.marginLeft = "63.3px";
          cursor.style.marginTop = "63.3px";
          cursorPurpleish.style.marginLeft = "63.3px";
          cursorPurpleish.style.marginTop = "63.3px";
          fondo.style.marginLeft = "63.3px";
          fondo.style.marginTop = "63.3px";
          fondoGreen.style.marginLeft = "63.3px";
          fondoGreen.style.marginTop = "63.3px";
          break;

        case "5":
          cursorPaint.src = "img/paintCursor/day/5.png";
          sizeVisualizer.src = "img/paintCursor/day/5.png";
          cursor.style.marginLeft = "66.6px";
          cursor.style.marginTop = "66.6px";
          cursorPurpleish.style.marginLeft = "66.6px";
          cursorPurpleish.style.marginTop = "66.6px";
          fondo.style.marginLeft = "66.6px";
          fondo.style.marginTop = "66.6px";
          fondoGreen.style.marginLeft = "66.6px";
          fondoGreen.style.marginTop = "66.6px";
          break;

        case "6":
          cursorPaint.src = "img/paintCursor/day/6.png";
          sizeVisualizer.src = "img/paintCursor/day/6.png";
          cursor.style.marginLeft = "70px";
          cursor.style.marginTop = "70px";
          cursorPurpleish.style.marginLeft = "70px";
          cursorPurpleish.style.marginTop = "70px";
          fondo.style.marginLeft = "70px";
          fondo.style.marginTop = "70px";
          fondoGreen.style.marginLeft = "70px";
          fondoGreen.style.marginTop = "70px";
          break;

        case "7":
          cursorPaint.src = "img/paintCursor/day/7.png";
          sizeVisualizer.src = "img/paintCursor/day/7.png";
          cursor.style.marginLeft = "73.3px";
          cursor.style.marginTop = "73.3px";
          cursorPurpleish.style.marginLeft = "73.3px";
          cursorPurpleish.style.marginTop = "73.3px";
          fondo.style.marginLeft = "73.3px";
          fondo.style.marginTop = "73.3px";
          fondoGreen.style.marginLeft = "73.3px";
          fondoGreen.style.marginTop = "73.3px";
          break;

        case "8":
          cursorPaint.src = "img/paintCursor/day/8.png";
          sizeVisualizer.src = "img/paintCursor/day/8.png";
          cursor.style.marginLeft = "76.6px";
          cursor.style.marginTop = "76.6px";
          cursorPurpleish.style.marginLeft = "76.6px";
          cursorPurpleish.style.marginTop = "76.6px";
          fondo.style.marginLeft = "76.6px";
          fondo.style.marginTop = "76.6px";
          fondoGreen.style.marginLeft = "76.6px";
          fondoGreen.style.marginTop = "76.6px";
          break;

        case "9":
          cursorPaint.src = "img/paintCursor/day/9.png";
          sizeVisualizer.src = "img/paintCursor/day/9.png";
          cursor.style.marginLeft = "80px";
          cursor.style.marginTop = "80px";
          cursorPurpleish.style.marginLeft = "80px";
          cursorPurpleish.style.marginTop = "80px";
          fondo.style.marginLeft = "80px";
          fondo.style.marginTop = "80px";
          fondoGreen.style.marginLeft = "80px";
          fondoGreen.style.marginTop = "80px";
          break;

        case "10":
          cursorPaint.src = "img/paintCursor/day/10.png";
          sizeVisualizer.src = "img/paintCursor/day/10.png";
          cursor.style.marginLeft = "83.3px";
          cursor.style.marginTop = "83.3px";
          cursorPurpleish.style.marginLeft = "83.3px";
          cursorPurpleish.style.marginTop = "83.3px";
          fondo.style.marginLeft = "83.3px";
          fondo.style.marginTop = "83.3px";
          fondoGreen.style.marginLeft = "83.3px";
          fondoGreen.style.marginTop = "83.3px";
          break;

        case "11":
          cursorPaint.src = "img/paintCursor/day/11.png";
          sizeVisualizer.src = "img/paintCursor/day/11.png";
          cursor.style.marginLeft = "86.6px";
          cursor.style.marginTop = "86.6px";
          cursorPurpleish.style.marginLeft = "86.6px";
          cursorPurpleish.style.marginTop = "86.6px";
          fondo.style.marginLeft = "86.6px";
          fondo.style.marginTop = "86.6px";
          fondoGreen.style.marginLeft = "86.6px";
          fondoGreen.style.marginTop = "86.6px";
          break;

        case "12":
          cursorPaint.src = "img/paintCursor/day/12.png";
          sizeVisualizer.src = "img/paintCursor/day/12.png";
          cursor.style.marginLeft = "90px";
          cursor.style.marginTop = "90px";
          cursorPurpleish.style.marginLeft = "90px";
          cursorPurpleish.style.marginTop = "90px";
          fondo.style.marginLeft = "90px";
          fondo.style.marginTop = "90px";
          fondoGreen.style.marginLeft = "90px";
          fondoGreen.style.marginTop = "90px";
          break;

        case "13":
          cursorPaint.src = "img/paintCursor/day/13.png";
          sizeVisualizer.src = "img/paintCursor/day/13.png";
          cursor.style.marginLeft = "93.3px";
          cursor.style.marginTop = "93.3px";
          cursorPurpleish.style.marginLeft = "93.3px";
          cursorPurpleish.style.marginTop = "93.3px";
          fondo.style.marginLeft = "93.3px";
          fondo.style.marginTop = "93.3px";
          fondoGreen.style.marginLeft = "93.3px";
          fondoGreen.style.marginTop = "93.3px";
          break;

        case "14":
          cursorPaint.src = "img/paintCursor/day/14.png";
          sizeVisualizer.src = "img/paintCursor/day/14.png";
          cursor.style.marginLeft = "96.6px";
          cursor.style.marginTop = "96.6px";
          cursorPurpleish.style.marginLeft = "96.6px";
          cursorPurpleish.style.marginTop = "96.6px";
          fondo.style.marginLeft = "96.6px";
          fondo.style.marginTop = "96.6px";
          fondoGreen.style.marginLeft = "96.6px";
          fondoGreen.style.marginTop = "96.6px";
          break;
      }
    } else {
      //Night theme
      switch (sliderPaint.value) {
        case "0":
          cursorPaint.src = "img/paintCursor/night/0.png";
          sizeVisualizer.src = "img/paintCursor/night/0.png";
          cursor.style.marginLeft = "50px";
          cursor.style.marginTop = "50px";
          cursorPurpleish.style.marginLeft = "50px";
          cursorPurpleish.style.marginTop = "50px";
          fondo.style.marginLeft = "50px";
          fondo.style.marginTop = "50px";
          fondoGreen.style.marginLeft = "50px";
          fondoGreen.style.marginTop = "50px";
          break;

        case "1":
          cursorPaint.src = "img/paintCursor/night/1.png";
          sizeVisualizer.src = "img/paintCursor/night/1.png";
          cursor.style.marginLeft = "53.3px";
          cursor.style.marginTop = "53.3px";
          cursorPurpleish.style.marginLeft = "53.3px";
          cursorPurpleish.style.marginTop = "53.3px";
          fondo.style.marginLeft = "53.3px";
          fondo.style.marginTop = "53.3px";
          fondoGreen.style.marginLeft = "53.3px";
          fondoGreen.style.marginTop = "53.3px";
          break;

        case "2":
          cursorPaint.src = "img/paintCursor/night/2.png";
          sizeVisualizer.src = "img/paintCursor/night/2.png";
          cursor.style.marginLeft = "56.6px";
          cursor.style.marginTop = "56.6px";
          cursorPurpleish.style.marginLeft = "56.6px";
          cursorPurpleish.style.marginTop = "56.6px";
          fondo.style.marginLeft = "56.6px";
          fondo.style.marginTop = "56.6px";
          fondoGreen.style.marginLeft = "56.6px";
          fondoGreen.style.marginTop = "56.6px";
          break;

        case "3":
          cursorPaint.src = "img/paintCursor/night/3.png";
          sizeVisualizer.src = "img/paintCursor/night/3.png";
          cursor.style.marginLeft = "60px";
          cursor.style.marginTop = "60px";
          cursorPurpleish.style.marginLeft = "60px";
          cursorPurpleish.style.marginTop = "60px";
          fondo.style.marginLeft = "60px";
          fondo.style.marginTop = "60px";
          fondoGreen.style.marginLeft = "60px";
          fondoGreen.style.marginTop = "60px";
          break;

        case "4":
          cursorPaint.src = "img/paintCursor/night/4.png";
          sizeVisualizer.src = "img/paintCursor/night/4.png";
          cursor.style.marginLeft = "63.3px";
          cursor.style.marginTop = "63.3px";
          cursorPurpleish.style.marginLeft = "63.3px";
          cursorPurpleish.style.marginTop = "63.3px";
          fondo.style.marginLeft = "63.3px";
          fondo.style.marginTop = "63.3px";
          fondoGreen.style.marginLeft = "63.3px";
          fondoGreen.style.marginTop = "63.3px";
          break;

        case "5":
          cursorPaint.src = "img/paintCursor/night/5.png";
          sizeVisualizer.src = "img/paintCursor/night/5.png";
          cursor.style.marginLeft = "66.6px";
          cursor.style.marginTop = "66.6px";
          cursorPurpleish.style.marginLeft = "66.6px";
          cursorPurpleish.style.marginTop = "66.6px";
          fondo.style.marginLeft = "66.6px";
          fondo.style.marginTop = "66.6px";
          fondoGreen.style.marginLeft = "66.6px";
          fondoGreen.style.marginTop = "66.6px";
          break;

        case "6":
          cursorPaint.src = "img/paintCursor/night/6.png";
          sizeVisualizer.src = "img/paintCursor/night/6.png";
          cursor.style.marginLeft = "70px";
          cursor.style.marginTop = "70px";
          cursorPurpleish.style.marginLeft = "70px";
          cursorPurpleish.style.marginTop = "70px";
          fondo.style.marginLeft = "70px";
          fondo.style.marginTop = "70px";
          fondoGreen.style.marginLeft = "70px";
          fondoGreen.style.marginTop = "70px";
          break;

        case "7":
          cursorPaint.src = "img/paintCursor/night/7.png";
          sizeVisualizer.src = "img/paintCursor/night/7.png";
          cursor.style.marginLeft = "73.3px";
          cursor.style.marginTop = "73.3px";
          cursorPurpleish.style.marginLeft = "73.3px";
          cursorPurpleish.style.marginTop = "73.3px";
          fondo.style.marginLeft = "73.3px";
          fondo.style.marginTop = "73.3px";
          fondoGreen.style.marginLeft = "73.3px";
          fondoGreen.style.marginTop = "73.3px";
          break;

        case "8":
          cursorPaint.src = "img/paintCursor/night/8.png";
          sizeVisualizer.src = "img/paintCursor/night/8.png";
          cursor.style.marginLeft = "76.6px";
          cursor.style.marginTop = "76.6px";
          cursorPurpleish.style.marginLeft = "76.6px";
          cursorPurpleish.style.marginTop = "76.6px";
          fondo.style.marginLeft = "76.6px";
          fondo.style.marginTop = "76.6px";
          fondoGreen.style.marginLeft = "76.6px";
          fondoGreen.style.marginTop = "76.6px";
          break;

        case "9":
          cursorPaint.src = "img/paintCursor/night/9.png";
          sizeVisualizer.src = "img/paintCursor/night/9.png";
          cursor.style.marginLeft = "80px";
          cursor.style.marginTop = "80px";
          cursorPurpleish.style.marginLeft = "80px";
          cursorPurpleish.style.marginTop = "80px";
          fondo.style.marginLeft = "80px";
          fondo.style.marginTop = "80px";
          fondoGreen.style.marginLeft = "80px";
          fondoGreen.style.marginTop = "80px";
          break;

        case "10":
          cursorPaint.src = "img/paintCursor/night/10.png";
          sizeVisualizer.src = "img/paintCursor/night/10.png";
          cursor.style.marginLeft = "83.3px";
          cursor.style.marginTop = "83.3px";
          cursorPurpleish.style.marginLeft = "83.3px";
          cursorPurpleish.style.marginTop = "83.3px";
          fondo.style.marginLeft = "83.3px";
          fondo.style.marginTop = "83.3px";
          fondoGreen.style.marginLeft = "83.3px";
          fondoGreen.style.marginTop = "83.3px";
          break;

        case "11":
          cursorPaint.src = "img/paintCursor/night/11.png";
          sizeVisualizer.src = "img/paintCursor/night/11.png";
          cursor.style.marginLeft = "86.6px";
          cursor.style.marginTop = "86.6px";
          cursorPurpleish.style.marginLeft = "86.6px";
          cursorPurpleish.style.marginTop = "86.6px";
          fondo.style.marginLeft = "86.6px";
          fondo.style.marginTop = "86.6px";
          fondoGreen.style.marginLeft = "86.6px";
          fondoGreen.style.marginTop = "86.6px";
          break;

        case "12":
          cursorPaint.src = "img/paintCursor/night/12.png";
          sizeVisualizer.src = "img/paintCursor/night/12.png";
          cursor.style.marginLeft = "90px";
          cursor.style.marginTop = "90px";
          cursorPurpleish.style.marginLeft = "90px";
          cursorPurpleish.style.marginTop = "90px";
          fondo.style.marginLeft = "90px";
          fondo.style.marginTop = "90px";
          fondoGreen.style.marginLeft = "90px";
          fondoGreen.style.marginTop = "90px";
          break;

        case "13":
          cursorPaint.src = "img/paintCursor/night/13.png";
          sizeVisualizer.src = "img/paintCursor/night/13.png";
          cursor.style.marginLeft = "93.3px";
          cursor.style.marginTop = "93.3px";
          cursorPurpleish.style.marginLeft = "93.3px";
          cursorPurpleish.style.marginTop = "93.3px";
          fondo.style.marginLeft = "93.3px";
          fondo.style.marginTop = "93.3px";
          fondoGreen.style.marginLeft = "93.3px";
          fondoGreen.style.marginTop = "93.3px";
          break;

        case "14":
          cursorPaint.src = "img/paintCursor/night/14.png";
          sizeVisualizer.src = "img/paintCursor/night/14.png";
          cursor.style.marginLeft = "96.6px";
          cursor.style.marginTop = "96.6px";
          cursorPurpleish.style.marginLeft = "96.6px";
          cursorPurpleish.style.marginTop = "96.6px";
          fondo.style.marginLeft = "96.6px";
          fondo.style.marginTop = "96.6px";
          fondoGreen.style.marginLeft = "96.6px";
          fondoGreen.style.marginTop = "96.6px";
          break;
      }
      console.log(cursorPaint.src);
    }
  }

  // Variables globales para almacenar los event listeners
  let colorSelectListener;
  let mouseDownListener;
  let mouseMoveListener;
  let mouseUpListener;

  // Configura eventos para selección de color y pintura
  function configurarEventosDePintura() {
    const paletteColors = document.querySelectorAll(".paletteColor");
    let selectedColor = "black";

    // Listener para seleccionar color
    colorSelectListener = function (event) {
      paletteColors.forEach((el) => el.classList.remove("active"));
      event.currentTarget.classList.add("active");
      selectedColor =
        getComputedStyle(event.currentTarget).backgroundColor || "black";
    };

    paletteColors.forEach((colorElement) => {
      colorElement.addEventListener("click", colorSelectListener);
    });

    // Listener para iniciar pintura
    mouseDownListener = (event) => {
      if (!textSelected && event.target.classList.contains("pixel")) {
        isPainting = true;
        iniciarPintura(event, selectedColor);
      }
    };

    // Listener para pintar mientras se arrastra
    mouseMoveListener = (event) => {
      if (isPainting && event.target.classList.contains("pixel")) {
        pintarArrastrando(event, selectedColor);
      }
    };

    // Listener para terminar la pintura y guardar cambios en grupo
    mouseUpListener = () => {
      if (isPainting) {
        isPainting = false; // Terminar pintura
        guardarDibujosActualizados(); // Guardar todos los cambios acumulados en una sola llamada
      }
    };

    document.addEventListener("mousedown", mouseDownListener);
    document.addEventListener("mousemove", mouseMoveListener);
    document.addEventListener("mouseup", mouseUpListener);
  }

  // Función para eliminar todos los event listeners de pintura
  function paintOF() {
    const paletteColors = document.querySelectorAll(".paletteColor");

    // Eliminar listeners de selección de color en la paleta
    paletteColors.forEach((colorElement) => {
      colorElement.removeEventListener("click", colorSelectListener);
    });

    // Eliminar listeners de pintura (mousedown, mousemove, mouseup)
    document.removeEventListener("mousedown", mouseDownListener);
    document.removeEventListener("mousemove", mouseMoveListener);
    document.removeEventListener("mouseup", mouseUpListener);

    // Restablece el estado de pintura
    isPainting = false;

    paletteContainer.classList.remove("active");
    sliderPaint.classList.remove("active");
    sizeVisualizer.classList.remove("active");
    cursorPaint.style.opacity = "0";
    cursorPaintErase.style.opacity = "0";

    cursor.style.marginLeft = "0px";
    cursor.style.marginTop = "0px";
    cursorPurpleish.style.marginLeft = "0px";
    cursorPurpleish.style.marginTop = "0px";
    fondo.style.marginLeft = "0px";
    fondo.style.marginTop = "0px";
    fondoGreen.style.marginLeft = "0px";
    fondoGreen.style.marginTop = "0px";

    cursorPaint.addEventListener(
      "transitionend",
      () => {
        if (cursorPaint.style.opacity === "0") {
          cursorPaint.style.display = "none";
        }
      },
      { once: true }
    );

    cursorPaintErase.addEventListener(
      "transitionend",
      () => {
        if (cursorPaintErase.style.opacity === "0") {
          cursorPaintErase.style.display = "none";
        }
      },
      { once: true }
    );
  }

  // Función para pintar píxeles en el lienzo
  function iniciarPintura(event, selectedColor) {
    if (event.target.classList.contains("pixel")) {
      isPainting = true;
      pintarConRadio(event.target, selectedColor, selectedRadius);
    }
  }

  // Mantener la función de pintura y arrastre sin cambios
  function pintarArrastrando(event, selectedColor) {
    if (isPainting && event.target.classList.contains("pixel")) {
      pintarConRadio(event.target, selectedColor, selectedRadius);
    }
  }

  // Finalizar la acción de pintar cuando se suelta el mouse
  function detenerPintura() {
    isPainting = false;
  }

  // Función para pintar un píxel y su área circundante con el radio seleccionado
  function pintarConRadio(pixel, color, radius) {
    const container = pixel.closest(".paint");
    const xCenter = parseInt(pixel.dataset.x);
    const yCenter = parseInt(pixel.dataset.y);

    for (let y = yCenter - radius; y <= yCenter + radius; y++) {
      for (let x = xCenter - radius; x <= xCenter + radius; x++) {
        if (Math.sqrt((x - xCenter) ** 2 + (y - yCenter) ** 2) <= radius) {
          const targetPixel = container.querySelector(
            `.pixel[data-x="${x}"][data-y="${y}"]`
          );
          if (targetPixel) {
            pintarPixel(targetPixel, color);
          }
        }
      }
    }
  }

  // Función para pintar píxeles y actualizar buffer de cambios
  function pintarPixel(pixel, color) {
    const container = pixel.closest(".paint");
    const pageElement = container.closest("[page]");
    const pageNumber = pageElement.getAttribute("page");

    // Cambiar el color visualmente
    pixel.style.backgroundColor =
      color === "rgba(0, 0, 0, 0)" ? "transparent" : color;
    pixel.dataset.color = color;

    // Acumular cambios en el buffer, sin llamar aún a la base de datos
    if (!paintChangesBuffer[pageNumber]) paintChangesBuffer[pageNumber] = [];
    paintChangesBuffer[pageNumber].push({
      x: pixel.dataset.x,
      y: pixel.dataset.y,
      color: color === "rgba(0, 0, 0, 0)" ? null : color,
    });
  }

  // Función para guardar solo los cambios nuevos
  function guardarDibujosActualizados() {
    const dibujos = { ...dibujosCache };

    for (const page in paintChangesBuffer) {
      if (!dibujos[page]) dibujos[page] = [];
      const pixelMap = {};
      dibujos[page].forEach((pixelData) => {
        pixelMap[`${pixelData.x},${pixelData.y}`] = pixelData;
      });

      paintChangesBuffer[page].forEach((change) => {
        const key = `${change.x},${change.y}`;
        if (change.color === null) {
          delete pixelMap[key];
        } else {
          pixelMap[key] = { x: change.x, y: change.y, color: change.color };
        }
      });

      dibujos[page] = Object.values(pixelMap);
    }

    actualizarDibujosUsuario(idLogeado, JSON.stringify(dibujos)); // Guardar los cambios acumulados
    paintChangesBuffer = {}; // Limpiar el buffer después de guardar
    dibujosCache = dibujos; // Actualizar la caché local
  }

  async function actualizarDibujosUsuario(idLogeado, dibujos) {
    const url = `${supabaseUrl}?id=eq.${idLogeado}`;
    const actualizarDibujos = { dibujos: dibujos };
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify(actualizarDibujos),
      });
      return response.ok ? await response.json() : null;
    } catch (error) {
      console.error("Error al actualizar los dibujos:", error);
    }
  }

  async function obtenerDibujosDeUsuario(idUsuario) {
    const url = `${supabaseUrl}?id=eq.${idUsuario}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("Dibujos obtenidos de la base de datos:", data);
      return data.length > 0 ? data[0].dibujos : null;
    } catch (error) {
      console.error("Error al obtener los dibujos:", error);
      return null;
    }
  }

  const h2 = document.querySelector(".h2");
  let thisPaper = 0;
  let thisPaperReverse = false;

  $("#notebook").turn({
    acceleration: true,
    gradients: false,
    autoCenter: true,
    when: {
      turning: function (event, page) {
        $("#page-number").val(page);
        $("#notebook")
          .find('[page="2"]')
          .toggleClass("fixed", page !== 1);
        $("#notebook")
          .find('[page="35"]')
          .toggleClass("fixed", page !== 36);
      },
      turned: function (event, page) {
        cargarDatosPaginasCercanas(page);
        clonePageLogic(page);
      },
    },
  });

  // Control de número de páginas
  var numberOfPages = 36;
  $(window).ready(function () {
    $("#number-pages").html(numberOfPages);
    cargarDatosPaginasCercanas(3);

    $("#page-number").keydown(function (e) {
      if (e.keyCode == 13) {
        $("#notebook").turn("page", $("#page-number").val());
        clonePageLogic($("#page-number").val());
      }
    });

    $("#page-number").blur(function () {
      $("#notebook").turn("page", $("#page-number").val());
    });
  });


  function clonePageLogic(page) {
    thisPaper = page;
    thisPaperReverse = false;
  
    if (page === 1 || page === 2 || page === 3) {
      let currentPaper = $(`#notebook [page="3"] .paper`);
      if (currentPaper.length > 0) {
        let clonedPaper = currentPaper.clone();
        clonedPaper.addClass("clone3");
  
        clonedPaper.removeClass(function (index, className) {
          return (className.match(/paper\d+(Left|Right)/) || []).join(" ");
        });
        clonedPaper.removeClass("paper").addClass("paperr");
        clonedPaper.find(".text").removeAttr("contenteditable");
  
        $("#clone3 .paperr").remove();
  
        $("#clone3").append(clonedPaper);
        //console.log("Elemento clonado/reemplazado en #clone3:", clonedPaper);
      }

    } else if (page === 34 || page === 35 || page === 36 || page === 37) {
      let currentPaper = $(`#notebook [page="34"] .paper`);
      if (currentPaper.length > 0) {
        let clonedPaper = currentPaper.clone();
        clonedPaper.addClass("clone34");
  
        clonedPaper.removeClass(function (index, className) {
          return (className.match(/paper\d+(Left|Right)/) || []).join(" ");
        });
        clonedPaper.removeClass("paper").addClass("paperr");
  
        $("#clone34 .paperr").remove();
  
        $("#clone34").append(clonedPaper);
        //console.log("Elemento clonado/reemplazado en #clone34:", clonedPaper);
      }
  
      if (page === 36 || page === 37) {
        thisPaperReverse = true;
      }

    } else {
      let leftPage = page % 2 === 0 ? page : page - 1; // Página izquierda
      let rightPage = page % 2 === 0 ? page + 1 : page; // Página derecha
  
      [leftPage, rightPage].forEach((targetPage) => {
        let currentPaper = $(`#notebook [page="${targetPage}"] .paper`);
        if (currentPaper.length > 0) {
          let clonedPaper = currentPaper.clone();
  
          let isLeft = targetPage % 2 === 0;
          clonedPaper.addClass(isLeft ? "cloneLeft" : "cloneRight");
  
          clonedPaper.removeClass(function (index, className) {
            return (className.match(/paper\d+(Left|Right)/) || []).join(" ");
          });
          clonedPaper.removeClass("paper").addClass("paperr");
  
          let targetContainer = isLeft ? "#cloneLeft" : "#cloneRight";
          $(`${targetContainer} .paperr`).remove();
  
          $(targetContainer).append(clonedPaper);
          console.log(
            `Elemento clonado/reemplazado en ${targetContainer}:`,
            clonedPaper
          );
        }
      });
    }
  }
  

  async function cargarDibujosEnTodasLasPaginas() {
    const dibujosJSON = await obtenerDibujosDeUsuario(idLogeado);

    if (!dibujosJSON) {
      console.log("No hay datos de dibujos disponibles o error al obtener.");
      return;
    }

    const dibujos = JSON.parse(dibujosJSON);
    dibujosCache = dibujos;

    Object.keys(dibujos).forEach((pageNumber) => {
      const pageElement = document.querySelector(`[page="${pageNumber}"]`);
      if (pageElement) {
        const paintContainer = pageElement.querySelector(".paint");

        if (paintContainer && !paintContainer.dataset.initialized) {
          generarCuadriculaDePixelesEnContenedor(paintContainer);
        }

        // Renderizar los dibujos
        renderizarDibujos(dibujos[pageNumber], paintContainer);
      }
    });
  }

  function activarGeneracionDePixeles() {
    const paintContainers = document.querySelectorAll(".paint");

    paintContainers.forEach((container) => {
      container.addEventListener(
        "click",
        function generarPixelesSiEsNecesario() {
          if (!container.dataset.initialized) {
            generarCuadriculaDePixelesEnContenedor(container);
            container.dataset.initialized = true;
            container.removeEventListener("click", generarPixelesSiEsNecesario);
          } else {
            console.log(
              "La cuadrícula ya está generada para este contenedor, no se vuelve a crear."
            );
          }
        }
      );
    });
  }

  function renderizarDibujos(pixelDataArray, container) {
    pixelDataArray.forEach((pixelData) => {
      const { x, y, color } = pixelData;
      const pixel = container.querySelector(
        `.pixel[data-x="${x}"][data-y="${y}"]`
      );
      if (pixel) {
        pixel.style.backgroundColor = color || "transparent"; // Aplica el color o transparente
        pixel.dataset.color = color || "transparent";
      } else {
        //console.warn(`No se encontró el píxel en (${x}, ${y}) en el contenedor de la página.`);
      }
    });
  }

  function generarCuadriculaDePixelesEnContenedor(container) {
    if (container.dataset.initialized) return;

    const pixelSize = 7;
    const containerWidth = 450;
    const containerHeight = 700;
    const pixelsHorizontal = Math.floor(containerWidth / pixelSize);
    const pixelsVertical = Math.floor(containerHeight / pixelSize);

    for (let y = 0; y < pixelsVertical; y++) {
      for (let x = 0; x < pixelsHorizontal; x++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        pixel.style.position = "absolute";
        pixel.style.left = `${x * pixelSize}px`;
        pixel.style.top = `${y * pixelSize}px`;
        pixel.style.backgroundColor = "transparent";
        pixel.dataset.x = x;
        pixel.dataset.y = y;
        container.appendChild(pixel);
      }
    }

    container.dataset.initialized = true;
  }

  function cargarDatosPaginasCercanas(paginaActual) {
    const paginasACargar = [
      paginaActual - 2,
      paginaActual - 1,
      paginaActual,
      paginaActual + 1,
      paginaActual + 2,
    ];

    paginasACargar.forEach((pagina) => {
      if (pagina > 0 && pagina <= $("#notebook").turn("pages")) {
        // Asegúrate de que la página esté dentro de los límites
        if (!paginasCargadas[pagina]) {
          // Verifica si la página ya fue cargada
          const paintContainer = document.querySelector(
            `[page="${pagina}"] .paint`
          );
          if (paintContainer)
            generarCuadriculaDePixelesEnContenedor(paintContainer);

          cargarDatosDePagina(pagina);
          paginasCargadas[pagina] = true; // Marca la página como cargada
        }
      }
    });
  }

  async function cargarDatosDePagina(pageNumber) {
    // Verifica si la página ya fue cargada
    if (paginasCargadas[pageNumber]) {
      console.log(`La página ${pageNumber} ya fue cargada anteriormente.`);
      return;
    }

    // Marcar la página como cargada antes de cargar datos para evitar duplicaciones
    paginasCargadas[pageNumber] = true;

    // Carga las notas de la página
    const notasJSON = await obtenerNotasDeUsuario(idLogeado);
    if (notasJSON) {
      const notas = JSON.parse(notasJSON);
      const content = notas[pageNumber];

      const textElement = document.querySelector(
        `[page="${pageNumber}"] .text`
      );
      if (textElement) {
        textElement.innerHTML = content;
        //console.log(`Notas cargadas en la página ${pageNumber}:`, content);
      } else {
        //console.warn(`No se encontró el contenedor de texto para la página ${pageNumber}`);
      }
    }

    // Carga los dibujos de la página
    const dibujosJSON = await obtenerDibujosDeUsuario(idLogeado);
    if (dibujosJSON) {
      const dibujos = JSON.parse(dibujosJSON);
      const paintContainer = document.querySelector(
        `[page="${pageNumber}"] .paint`
      );

      if (paintContainer && dibujos[pageNumber]) {
        renderizarDibujos(dibujos[pageNumber], paintContainer);
        //console.log(`Dibujos cargados en la página ${pageNumber}`);
      } else {
        //console.warn(`No se encontró el contenedor de dibujos para la página ${pageNumber}`);
      }
    }
  }




  /* TOOLTIPS */

const tooltipContainers = document.querySelectorAll('.tooltip-container');

tooltipContainers.forEach(tooltipContainer => {
  let timer; 
  let lastMousePosition = { x: 0, y: 0 };
  let tooltipVisible = false;
  let tooltip;

  tooltipContainer.addEventListener('mouseenter', function(e) {
    clearTimeout(timer);
    resetTimer(e);
  });

  tooltipContainer.addEventListener('mousemove', function(ev) {
    lastMousePosition.x = ev.clientX;
    lastMousePosition.y = ev.clientY;
    if (!tooltipVisible) {
      resetTimer(ev);
    } else if (tooltip) {
      positionTooltip(tooltip, ev.clientX, ev.clientY);
    }
  });

  tooltipContainer.addEventListener('mouseleave', function() {
    clearTimeout(timer);
    if (tooltip) {
      tooltip.style.opacity = '0';  // Inicia la transición de desaparición
      setTimeout(() => removeTooltip(), 100);  // Espera brevemente antes de eliminar
    }
    tooltipVisible = false;
  });

  function resetTimer(event) {
    clearTimeout(timer);
    if (tooltipContainer.classList.contains("tooltip-textTimerRtx")) {
      timer = setTimeout(() => showTooltip(lastMousePosition.x, lastMousePosition.y), 500);
    } else if (tooltipContainer.classList.contains("tooltip-textTimerInfo")) {
      timer = setTimeout(() => showTooltip(lastMousePosition.x, lastMousePosition.y), 10);
    }/* else {
      timer = setTimeout(() => showTooltip(lastMousePosition.x, lastMousePosition.y), 1500);
    }*/
  }

  function showTooltip(mouseX, mouseY) {
    if (!tooltipVisible) {
      tooltip = createTooltip();
      positionTooltip(tooltip, mouseX, mouseY);
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = '1';
      tooltipVisible = true;
    }
  }

  function createTooltip() {
    let newTooltip = document.createElement('div');
    newTooltip.className = 'tooltip-text';
  
    if (tooltipContainer.classList.contains("tooltip-text-left")) {
      newTooltip.classList.add('tooltip-text-left');
    }
  
    const mainText = document.createElement('div');
    mainText.textContent = tooltipContainer.getAttribute('data-tooltip');
    newTooltip.appendChild(mainText);
  
    const newTooltipHighlight = document.createElement('span');
    newTooltipHighlight.className = 'tooltip-textHighlight';
    newTooltipHighlight.textContent = "Intensidad: ";
    newTooltip.appendChild(newTooltipHighlight);
  
    const newTooltipState = document.createElement('span');
    newTooltipState.className = 'tooltip-textState';
    newTooltipState.textContent = tooltipContainer.getAttribute('data-tooltipState');
  
    if (newTooltipState.textContent == "Media") {
      newTooltipState.classList.add("media");
  
    }else if (newTooltipState.textContent == "Alta") {
      newTooltipState.style.width = "55px";
      newTooltipState.classList.add("alta");
      const imgAlta = document.createElement('img');
      imgAlta.src = 'img/tooltipFireEmoji.gif';
      imgAlta.className = 'tooltipFireEmoji tooltipFireEmojiAlta';
      
      newTooltipState.appendChild(imgAlta);
  
    } else if (newTooltipState.textContent == "Muy alta") {
      newTooltipState.style.width = "90px";
      newTooltipState.classList.add("muyAlta");
      const imgMuyAlta1 = document.createElement('img');
      imgMuyAlta1.src = 'img/tooltipFireEmoji.gif';
      imgMuyAlta1.className = 'tooltipFireEmoji tooltipFireEmojiMuyAlta';

      newTooltipState.appendChild(imgMuyAlta1);

    }else if (newTooltipState.textContent == "Extrema") {
      newTooltipState.classList.add("extrema");
      const imgExtrema = document.createElement('img');
      imgExtrema.src = 'img/tooltipFireSimulation.webp';
      imgExtrema.className = 'tooltipFireSimulation';
  
      newTooltipState.appendChild(imgExtrema);
    }
  
    newTooltipHighlight.appendChild(newTooltipState);
    document.body.appendChild(newTooltip);
    newTooltip.style.opacity = '0';
    return newTooltip;
  }

  function removeTooltip() {
    if (tooltip) {
      tooltip.remove();
      tooltip = null;
    }
  }

  function positionTooltip(tooltip, mouseX, mouseY) {
    tooltip.style.left = `${mouseX + 15}px`;
    tooltip.style.top = `${mouseY - 30}px`;
  }
});




/* HAMSTERS */
// JavaScript
const root = document.documentElement;

// Map para almacenar los intervalos de cada hámster
const hamsterIntervals = new Map();

// Variables para manejar el arrastre
let isDragging = false;
let currentHamster = null;
let offsetX = 0;
let offsetY = 0;
let originalX = 0;
let originalY = 0;
let originalParent = null;

// Variables globales para controlar la visibilidad de las tooltips
let checkboxTooltipsNamesShown = false;
let checkboxTooltipsStatesShown = false;

// Función para cargar los valores desde localStorage
function loadTooltipSettings() {
  // Cargar los valores del localStorage o usar los valores predeterminados (false)
  const savedNamesShown = localStorage.getItem('checkboxTooltipsNamesShown');
  const savedStatesShown = localStorage.getItem('checkboxTooltipsStatesShown');

  // Si no hay valores guardados en el localStorage, se usan los valores predeterminados (false)
  checkboxTooltipsNamesShown = savedNamesShown !== null ? JSON.parse(savedNamesShown) : false;
  checkboxTooltipsStatesShown = savedStatesShown !== null ? JSON.parse(savedStatesShown) : false;

  // Actualizar la visibilidad de los tooltips en base a los valores cargados
  updateTooltipVisibility();
  updateContextMenu(); // Actualizar el menú contextual al cargar
}

// Función para guardar los valores en localStorage
function saveTooltipSettings() {
  // Guardar los valores actuales de las variables en el localStorage
  localStorage.setItem('checkboxTooltipsNamesShown', JSON.stringify(checkboxTooltipsNamesShown));
  localStorage.setItem('checkboxTooltipsStatesShown', JSON.stringify(checkboxTooltipsStatesShown));
}

function activarShowTags(){
  checkboxTooltipsNamesShown = true;
  saveTooltipSettings(); // Guardar el estado en el localStorage
  updateTooltipVisibility(); // Actualizar la visibilidad de los tooltips
}

function desactivarShowTags(){
  checkboxTooltipsNamesShown = false;
  saveTooltipSettings(); // Guardar el estado en el localStorage
  updateTooltipVisibility(); // Actualizar la visibilidad de los tooltips
}

function activarShowStatsInTags(){
  checkboxTooltipsStatesShown = true;
  saveTooltipSettings(); // Guardar el estado en el localStorage
  updateTooltipVisibility(); // Actualizar la visibilidad de los tooltips
}

function desactivarShowStatsInTags(){
  checkboxTooltipsStatesShown = false;
  saveTooltipSettings(); // Guardar el estado en el localStorage
  updateTooltipVisibility(); // Actualizar la visibilidad de los tooltips
}

// Esta función actualiza la visibilidad de los tooltips basados en el estado actual de las variables
function updateTooltipVisibility(){
  let hamsterTooltipContainers = document.querySelectorAll(".hamsterTooltipContainer");
  let sliderHamsterContainers = document.querySelectorAll(".sliderHamsterContainer");

  // Actualizar la visibilidad de las tooltips de los nombres
  hamsterTooltipContainers.forEach((tooltip) => {
    if (checkboxTooltipsNamesShown) {
      tooltip.style.opacity = "1"; // Mostrar el tooltip de nombre
    } else {
      tooltip.style.opacity = "0"; // Ocultar el tooltip de nombre
    }
  });

  // Actualizar la visibilidad de las tooltips de los estados
  sliderHamsterContainers.forEach((container) => {
    if (checkboxTooltipsStatesShown) {
      container.style.opacity = "1"; // Mostrar el tooltip de estado
    } else {
      container.style.opacity = "0"; // Ocultar el tooltip de estado
    }
  });
}

// Función para actualizar el menú contextual
function updateContextMenu() {
  const contextMenuItems = document.querySelectorAll('.contextMenu li');
  
  contextMenuItems.forEach((item) => {
    if (item.textContent.includes("Show tags")) {
      if (checkboxTooltipsNamesShown) {
        item.textContent = "✔ Show tags"; // Marcamos la opción como activada
      } else {
        item.textContent = "Show tags"; // Marcamos la opción como desactivada
      }
    }
    if (item.textContent.includes("Show stats in tags")) {
      if (checkboxTooltipsStatesShown) {
        item.textContent = "✔ Show stats in tags"; // Marcamos la opción como activada
      } else {
        item.textContent = "Show stats in tags"; // Marcamos la opción como desactivada
      }
    }
  });
}




function initHamster() { 
  const wheel = document.querySelector('.wheel');
  const defaultHamsterEnergy = 1000;

  // Configuración del hámster animado en la rueda (inicialmente vacío)
  let hamster = {
    energy: defaultHamsterEnergy,
    speedFactor: 1.5,
    isRunning: false, // Inicialmente no hay hámster corriendo
  };

  // Función para ajustar la velocidad del hámster en la rueda
  const setHamsterSpeed = () => {
    wrapper.style.setProperty('--hamster-speed', `${1 / hamster.speedFactor}s`);
    wrapper.style.setProperty('--wheel-speed', `${2 / hamster.speedFactor}s`);
    wrapper.style.setProperty('--wheel-angle', `${0.4 * hamster.speedFactor}deg`);
  };

  // Intervalo para reducir la energía del hámster en la rueda
  setInterval(() => {
    if (hamster.isRunning) {
      hamster.energy -= (hamster.speedFactor * hamster.speedFactor);
      //console.log("hamster.energy: " + hamster.energy);
    }
    if (hamster.isRunning && hamster.energy < 0) {
      hamster.isRunning = false;
      wheel.classList.add('spinning');
      setTimeout(() => {
        hamster.energy = defaultHamsterEnergy;
        hamster.isRunning = true;
        wheel.classList.remove('spinning');
      }, 6 * 1000);
    }
  }, 500);

  setHamsterSpeed();

  // Configurar eventos y tipos para todos los hámsters
  const hamsters = document.querySelectorAll('.hamster');
  hamsters.forEach((hamsterElement) => {
    setHamster(hamsterElement);

    // Añadir eventos de hover al hamsterElement completo
    hamsterElement.addEventListener("mouseenter", function () {
      setStrokeHamster(hamsterElement);
      showTooltipHamster(hamsterElement);
    });

    hamsterElement.addEventListener("mouseleave", function () {
      setHamster(hamsterElement);
      hideTooltipHamster(hamsterElement);
    });

    // Añadir eventos de arrastre
    hamsterElement.addEventListener('mousedown', function (e) {
      startDragHamster(e, hamsterElement);
    });
  });

  const modifyHamsterSpeed = (hamster, setHamsterSpeed, targetValue, goto0) => {
    const step = 0.10; // Incremento o decremento progresivo
  
    if (goto0) {
      // Cambiar inmediatamente a 0 si goto0 es true
      hamster.speedFactor = 0;
      setHamsterSpeed(); // Actualizar visualmente
      return;
    }
  
    function adjustSpeed() {
      // Si la diferencia es menor que el paso, asignamos directamente el valor objetivo
      if (Math.abs(hamster.speedFactor - targetValue) < step) {
        hamster.speedFactor = targetValue;
        setHamsterSpeed(); // Actualizar visualmente
        return; // Terminar la función
      }
  
      // Incrementar o disminuir gradualmente hacia el valor objetivo
      if (hamster.speedFactor < targetValue) {
        hamster.speedFactor += step;
      } else {
        hamster.speedFactor -= step;
      }
  
      setHamsterSpeed();
      setTimeout(adjustSpeed, 20); // Intervalo de actualización
    }
    adjustSpeed();

  };
  

  setHamsterSpeed();

  return { hamster, setHamsterSpeed, modifyHamsterSpeed };

}

let { hamster, setHamsterSpeed, modifyHamsterSpeed } = initHamster();

window.addEventListener("load", function () {
  let hamsterTooltipContainers = document.querySelectorAll(".hamsterTooltipContainer");
  let sliderHamsterContainers = document.querySelectorAll(".sliderHamsterContainer");

  hamsterTooltipContainers.forEach((tooltip) => {
    if(checkboxTooltipsNamesShown){
      tooltip.style.opacity = "1";
    }else{
      tooltip.style.opacity = "0";
    }
  });
  
  sliderHamsterContainers.forEach((container) => {
    if(checkboxTooltipsStatesShown){
      container.style.opacity = "1";
    }else{
      container.style.opacity = "0";
    }
  });

  loadTooltipSettings();
});

function showTooltipHamster(hamsterElement){
  let tooltip = hamsterElement.querySelector(".hamsterTooltipContainer");
  if (!checkboxTooltipsNamesShown) {
    tooltip.style.opacity = "1";
  }
  
  let tooltipStates = hamsterElement.querySelector(".sliderHamsterContainer");
  if(checkboxTooltipsStatesShown){
    tooltipStates.style.opacity = "1";
  }
}

function hideTooltipHamster(hamsterElement){
  let tooltip = hamsterElement.querySelector(".hamsterTooltipContainer");
  if (!checkboxTooltipsNamesShown) {
    tooltip.style.opacity = "0";
  }

  let tooltipStates = hamsterElement.querySelector(".sliderHamsterContainer");
  if(checkboxTooltipsStatesShown){
    if(!checkboxTooltipsNamesShown){
      tooltipStates.style.opacity = "0";
    }
  }
}

function setHamster(hamsterElement){
  let type = getHamsterType(hamsterElement);
  const intervalId = hamsterIntervals.get(hamsterElement);
  if (intervalId) {
    clearInterval(intervalId);
    hamsterIntervals.delete(hamsterElement);
  }

  // Establecer las propiedades CSS para el hámster específico
  switch (type) {
    case "Biggie":
      hamsterElement.style.setProperty('--puff', "url('img/hamster/biggie/puffBiggie.png')");
      hamsterElement.style.setProperty('--puff-before', "url('img/hamster/biggie/puffBiggieBefore.png')");
      hamsterElement.style.setProperty('--bum', "url('img/hamster/biggie/puffBiggieBefore.png')");
      hamsterElement.style.setProperty('--ear', "url('img/hamster/biggie/earBiggie.png')");
      hamsterElement.style.setProperty('--ear-after', "url('img/hamster/biggie/earAfterBiggie.png')");
      hamsterElement.style.setProperty('--ear-after2', "url('img/hamster/biggie/earAfterBiggie2.png')");
      break;

    case "Coco":
      hamsterElement.style.setProperty('--puff', "url('img/hamster/coco/puffCoco.png')");
      hamsterElement.style.setProperty('--puff-before', "url('img/hamster/coco/puffCocoBefore.png')");
      hamsterElement.style.setProperty('--bum', "url('img/hamster/coco/puffCocoBefore.png')");
      hamsterElement.style.setProperty('--ear', "url('img/hamster/coco/earCoco.png')");
      hamsterElement.style.setProperty('--ear-after', "url('img/hamster/coco/earAfterCoco.png')");
      hamsterElement.style.setProperty('--ear-after2', "url('img/hamster/coco/earAfterCoco2.png')");
      break;

    case "Dior":
      hamsterElement.style.setProperty('--puff', "url('img/hamster/dior/puffDior.png')");
      hamsterElement.style.setProperty('--puff-before', "url('img/hamster/dior/puffDiorBefore.png')");
      hamsterElement.style.setProperty('--bum', "url('img/hamster/dior/puffDiorBefore.png')");
      hamsterElement.style.setProperty('--ear', "url('img/hamster/dior/earDior.png')");
      hamsterElement.style.setProperty('--ear-after', "url('img/hamster/dior/earAfterDior.png')");
      hamsterElement.style.setProperty('--ear-after2', "url('img/hamster/dior/earAfterDior2.png')");
      break;

    default:
      console.error('¡Tipo de hámster no reconocido!');
  }
}

function setStrokeHamster(hamsterElement) {
  let type = getHamsterType(hamsterElement);

  const intervalId = hamsterIntervals.get(hamsterElement);
  if (intervalId) {
    clearInterval(intervalId);
    hamsterIntervals.delete(hamsterElement);
  }

  let strokeIndex = 1; // Reiniciar el índice de stroke
  const maxStrokes = 3;

  // Iniciar un nuevo intervalo para el hámster específico
  const newIntervalId = setInterval(() => {
    switch (type) {
      case "Biggie":
        hamsterElement.style.setProperty('--puff', `url('img/hamster/biggie/stroke/puffBiggieStroke${strokeIndex}.png')`);
        hamsterElement.style.setProperty('--puff-before', `url('img/hamster/biggie/stroke/puffBiggieBeforeStroke${strokeIndex}.png')`);
        hamsterElement.style.setProperty('--bum', `url('img/hamster/biggie/stroke/puffBiggieBeforeStroke${strokeIndex}.png')`);
        hamsterElement.style.setProperty('--ear', `url('img/hamster/biggie/stroke/earBiggieStroke${strokeIndex}.png')`);
        hamsterElement.style.setProperty('--ear-after2', `url('img/hamster/biggie/stroke/earAfterBiggie2Stroke${strokeIndex}.png')`);
        break;

      case "Coco":
        hamsterElement.style.setProperty('--puff', `url('img/hamster/coco/stroke/puffCocoStroke${strokeIndex}.png')`);
        hamsterElement.style.setProperty('--puff-before', `url('img/hamster/coco/stroke/puffCocoBeforeStroke${strokeIndex}.png')`);
        hamsterElement.style.setProperty('--bum', `url('img/hamster/coco/stroke/puffCocoBeforeStroke${strokeIndex}.png')`);
        hamsterElement.style.setProperty('--ear', `url('img/hamster/coco/stroke/earCocoStroke${strokeIndex}.png')`);
        hamsterElement.style.setProperty('--ear-after2', `url('img/hamster/coco/stroke/earAfterCoco2Stroke${strokeIndex}.png')`);
        break;

      case "Dior":
        hamsterElement.style.setProperty('--puff', `url('img/hamster/dior/stroke/puffDiorStroke${strokeIndex}.png')`);
        hamsterElement.style.setProperty('--puff-before', `url('img/hamster/dior/stroke/puffDiorBeforeStroke${strokeIndex}.png')`);
        hamsterElement.style.setProperty('--bum', `url('img/hamster/dior/stroke/puffDiorBeforeStroke${strokeIndex}.png')`);
        hamsterElement.style.setProperty('--ear', `url('img/hamster/dior/stroke/earDiorStroke${strokeIndex}.png')`);
        hamsterElement.style.setProperty('--ear-after2', `url('img/hamster/dior/stroke/earAfterDior2Stroke${strokeIndex}.png')`);
        break;

      default:
        console.error('¡Tipo de stroke de hámster no reconocido!');
    }

    // Actualizar el índice de stroke
    strokeIndex = strokeIndex < maxStrokes ? strokeIndex + 1 : 1;
  }, 242);

  // Guardar el nuevo intervalo para este hámster
  hamsterIntervals.set(hamsterElement, newIntervalId);
}

// Funciones para manejar el arrastre
function startDragHamster(e, hamsterElement) {
  if (isDragging) return; // Prevenir arrastre si ya está en proceso

  isDragging = true;
  currentHamster = hamsterElement;


  if (hamsterElement.closest('.wrapper')) {
    modifyHamsterSpeed(hamster, setHamsterSpeed, 0.0, true);
  }
  


  // Obtener la posición actual del hámster
  const rect = hamsterElement.getBoundingClientRect();
  originalX = rect.left + window.scrollX;
  originalY = rect.top + window.scrollY;

  hamsterElement.classList.add("grabAnim");
  setHamster(hamsterElement);
  hideTooltipHamster(hamsterElement);




  // Guardar el padre original
  originalParent = hamsterElement.parentNode;

  // Si el hámster está dentro de .wrapper (la rueda)
  if (hamsterElement.closest('.wrapper')) {
    // Clonar el hámster y añadirlo al documento
    const clonedHamster = hamsterElement.cloneNode(true);

    // Añadir eventos al hámster clonado
    addHamsterEventListeners(clonedHamster);

    // Añadir el hámster clonado al documento
    document.body.appendChild(clonedHamster);

    // Remover el hámster original de la rueda
    hamsterElement.remove();

    // Actualizar el hámster actual al clonado
    currentHamster = clonedHamster;

    // Ajustar el estilo del hámster clonado
    clonedHamster.style.position = 'absolute';
    clonedHamster.style.left = originalX + 'px';
    clonedHamster.style.top = originalY + 'px';
    clonedHamster.style.zIndex = 1000;
  } else {
    // Configurar el hámster para posicionamiento absoluto
    hamsterElement.style.position = 'absolute';
    hamsterElement.style.left = originalX + 'px';
    hamsterElement.style.top = originalY + 'px';
    hamsterElement.style.zIndex = 1000;

    // Si el hámster estaba dentro de un hitbox, removerlo del hitbox
    if (hamsterElement.parentElement.classList.contains('hitbox')) {
      document.body.appendChild(hamsterElement);
    }
  }

  // Calcular el offset entre el mouse y el hámster
  offsetX = e.clientX - originalX;
  offsetY = e.clientY - originalY;

  // Añadir event listeners para el movimiento y fin del arrastre
  document.addEventListener('mousemove', onDragHamster);
  document.addEventListener('mouseup', stopDragHamster, hideTooltipHamster);

  e.preventDefault();
}


function onDragHamster(e) {
  if (!isDragging || !currentHamster) return;

  // Calcular nueva posición
  const x = e.clientX - offsetX + window.scrollX;
  const y = e.clientY - offsetY + window.scrollY;

  // Actualizar la posición del hámster
  currentHamster.style.left = x + 'px';
  currentHamster.style.top = y + 'px';
}


let isStoppingDrag = false;
function stopDragHamster(e) {
  if (!isDragging || !currentHamster || isStoppingDrag) return;
  isStoppingDrag = true;

  // Remover los event listeners
  document.removeEventListener('mousemove', onDragHamster);
  document.removeEventListener('mouseup', stopDragHamster, hideTooltipHamster);

  currentHamster.classList.remove("grabAnim");

  // Verificar si el hámster está sobre un hitbox
  const hamsterRect = currentHamster.getBoundingClientRect();
  const hitboxes = document.querySelectorAll('.hitbox');
  let droppedInHitbox = false;

  hitboxes.forEach((hitbox) => {
    const hitboxRect = hitbox.getBoundingClientRect();
    if (
      hamsterRect.left < hitboxRect.right &&
      hamsterRect.right > hitboxRect.left &&
      hamsterRect.top < hitboxRect.bottom &&
      hamsterRect.bottom > hitboxRect.top
    ) {
      droppedInHitbox = true;

      // Si es el contenedor especial `hitboxSlotWeel`
      if (hitbox.id === 'hitboxSlotWeel') {
        handleWheelContainer();
        resetDragVariables();
        modifyHamsterSpeed(hamster, setHamsterSpeed, 1.5, false);
        return;
      }

      // Para otros hitboxes, verificar si ya están ocupados
      const hamstersInHitbox = Array.from(hitbox.querySelectorAll('.hamster')).filter(h => h !== currentHamster);
      if (hamstersInHitbox.length > 0) {
        // Si está ocupado, devolver al contenedor original
        cloneHamsterToContainer(originalParent);
        resetDragVariables();
        if (originalParent.closest('.wrapper')) {
          modifyHamsterSpeed(hamster, setHamsterSpeed, 1.5, false);
        }
        return;
      }

      // Clonar el hámster y moverlo al hitbox
      cloneHamsterToContainer(hitbox);
      resetDragVariables();
      return;
    }
  });

  if (!droppedInHitbox) {
    // Si no se suelta en ningún hitbox, devolver al contenedor original
    cloneHamsterToContainer(originalParent);
    if (originalParent.closest('.wrapper')) {
      modifyHamsterSpeed(hamster, setHamsterSpeed, 1.5, false);
    }
  }

  resetDragVariables();
}

// Función específica para manejar el contenedor especial `wheel`
function handleWheelContainer() {
  const wheel = document.querySelector('.wheel');

  // Verificar si ya hay un hámster en la rueda
  const existingWheelHamster = wheel.querySelector('.hamster');
  if (existingWheelHamster) {
    // Si ya está ocupado, devolver al contenedor original
    cloneHamsterToContainer(originalParent);
    return;
  }

  // Clonar el hámster y agregarlo a la rueda
  const clonedHamster = currentHamster.cloneNode(true);

  // Añadir eventos al hámster clonado
  addHamsterEventListeners(clonedHamster);

  // Remover el hámster original
  currentHamster.remove();

  // Ajustar posición y estilo del hámster para la rueda
  clonedHamster.style.position = '';
  clonedHamster.style.left = '';
  clonedHamster.style.top = '';
  clonedHamster.style.transform = '';
  clonedHamster.style.zIndex = '';

  // Agregarlo a la rueda
  const wheelSupport = wheel.querySelector('.wheel-support');
  wheel.insertBefore(clonedHamster, wheelSupport.nextSibling);

  // Configurar imágenes
  setHamster(clonedHamster);
}

// Función para clonar el hámster al contenedor especificado
function cloneHamsterToContainer(container) {
  if (!container) return;

  const clonedHamster = currentHamster.cloneNode(true);

  // Añadir eventos al hámster clonado
  addHamsterEventListeners(clonedHamster);

  // Ajustar el hámster para el contenedor
  clonedHamster.style.position = 'absolute';
  clonedHamster.style.left = '';
  clonedHamster.style.top = '';
  clonedHamster.style.transform = '';
  clonedHamster.style.zIndex = '';

  // Remover el hámster original
  currentHamster.remove();

  // Agregar el hámster al contenedor
  container.appendChild(clonedHamster);

  // Configurar imágenes para el hámster clonado
  setHamster(clonedHamster);
}

// Función para resetear las variables de arrastre
function resetDragVariables() {
  isDragging = false;
  currentHamster = null;
  isStoppingDrag = false;
}



function getHamsterType(hamsterElement) {
  if (hamsterElement.classList.contains('dior')) {
    return "Dior";
  } else if (hamsterElement.classList.contains('biggie')) {
    return "Biggie";
  } else if (hamsterElement.classList.contains('coco')) {
    return "Coco";
  } else {
    console.error('Tipo de hámster no reconocido para:', hamsterElement);
    return "Unknown";
  }
}

function addHamsterEventListeners(hamsterElement) {
  setHamster(hamsterElement);

  // Añadir eventos de hover
  hamsterElement.addEventListener("mouseenter", function () {
    setStrokeHamster(hamsterElement);
    showTooltipHamster(hamsterElement);
  });

  hamsterElement.addEventListener("mouseleave", function () {
    setHamster(hamsterElement);
    hideTooltipHamster(hamsterElement);
  });

  // Añadir evento de arrastre
  hamsterElement.addEventListener('mousedown', function (e) {
    startDragHamster(e, hamsterElement);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(initHamster, 10);
});





/* TENDERO HEAD ANIMATIONS */

const tenderoHead = document.getElementById('tenderoHead');
const tenderoHeadHitbox = document.getElementById('tenderoHeadHitbox');
const tenderoHeadShadow = document.getElementById('tenderoHeadShadow');

function mouseMoveListenerTenderoHead(event) {
    const mouseX = event.clientX; // Posición del cursor en el eje X
    const tenderoRect = tenderoHeadHitbox.getBoundingClientRect(); // Posición y tamaño del hitbox
    
    // Calculamos la distancia relativa al centro del hitbox
    const tenderoCenterX = tenderoRect.left + tenderoRect.width / 2; // Centro del hitbox en el eje X
    const distanceX = mouseX - tenderoCenterX; // Distancia relativa (negativa si está a la izquierda)

    function updateMaskClass(element, newClass) {
      const regex = /^tenderoHeadShadowMask/; // Busca clases que empiecen por tenderoHeadShadowMask
      const currentClasses = element.className.split(" ");
      const filteredClasses = currentClasses.filter(cls => !regex.test(cls)); // Elimina clases coincidentes
      filteredClasses.push(newClass); // Añade la nueva clase
      element.className = filteredClasses.join(" "); // Asigna las clases actualizadas
  }
  
  if (distanceX > -10 && distanceX < 10) { // Muy cerca (entre -10 y 10)
      tenderoHead.src = "img/hamster/tendero/head/head4.png";
      updateMaskClass(tenderoHeadShadow, "tenderoHeadShadowMask4");
  } else if (distanceX >= 10 && distanceX < 50) { // A la derecha (10 a 50)
      tenderoHead.src = "img/hamster/tendero/head/head5.png";
      updateMaskClass(tenderoHeadShadow, "tenderoHeadShadowMask5");
  } else if (distanceX > -50 && distanceX <= -10) { // A la izquierda (-50 a -10)
      tenderoHead.src = "img/hamster/tendero/head/head3.png";
      updateMaskClass(tenderoHeadShadow, "tenderoHeadShadowMask3");
  } else if (distanceX >= 50 && distanceX < 100) { // Más a la derecha (50 a 100)
      tenderoHead.src = "img/hamster/tendero/head/head6.png";
      updateMaskClass(tenderoHeadShadow, "tenderoHeadShadowMask6");
  } else if (distanceX > -100 && distanceX <= -50) { // Más a la izquierda (-100 a -50)
      tenderoHead.src = "img/hamster/tendero/head/head2.png";
      updateMaskClass(tenderoHeadShadow, "tenderoHeadShadowMask2");
  } else if (distanceX >= 100) { // Muy a la derecha (100+)
      tenderoHead.src = "img/hamster/tendero/head/head7.png";
      updateMaskClass(tenderoHeadShadow, "tenderoHeadShadowMask7");
  } else if (distanceX <= -100) { // Muy a la izquierda (-100 o menos)
      tenderoHead.src = "img/hamster/tendero/head/head1.png";
      updateMaskClass(tenderoHeadShadow, "tenderoHeadShadowMask1");
  }
}

function activateMouseListenerTendero() {
    document.addEventListener("mousemove", mouseMoveListenerTenderoHead);
}

function deactivateMouseListenerTendero() {
    document.removeEventListener("mousemove", mouseMoveListenerTenderoHead);
}





/* TENDERO CESTA ANIMATIONS */
const tenderoCesta = document.getElementById('tenderoCesta');

let tenderoCestaAnimationActive = false; // Control de la animación visual
let randomCycleActive = false; // Control del ciclo lógico
let tenderoCestaRandomTimeout; // Referencia al timeout del ciclo
let tenderoCestaFrameTimeout; // Referencia al timeout de los frames
let currentFrameIndex = 0; // Índice del frame actual

const cycles = [
    [ // Ciclo 1: 1 -> 2 -> 3 -> 2 -> 1
        "img/hamster/tendero/cesta/cesta1.png",
        "img/hamster/tendero/cesta/cesta2.png",
        "img/hamster/tendero/cesta/cesta3.png",
        "img/hamster/tendero/cesta/cesta2.png",
        "img/hamster/tendero/cesta/cesta1.png"
    ],
    [ // Ciclo 2: 1 -> 2 -> 1
        "img/hamster/tendero/cesta/cesta1.png",
        "img/hamster/tendero/cesta/cesta2.png",
        "img/hamster/tendero/cesta/cesta1.png"
    ]
];

let currentCycle = cycles[0]; 

let frameSpeed = 300;

const minCycleDelay = 2000;
const maxCycleDelay = 7000;

function generateRandomDelay() {
    return Math.random() * (maxCycleDelay - minCycleDelay) + minCycleDelay;
}

function selectRandomCycle() {
    const randomIndex = Math.floor(Math.random() * cycles.length);
    currentCycle = cycles[randomIndex];
    //onsole.log("Ciclo seleccionado:", currentCycle);
}

function playFrameAnimation(callback) {
    if (currentFrameIndex < currentCycle.length) {
        if (tenderoCestaAnimationActive && currentCycle[currentFrameIndex]) {
            tenderoCesta.src = currentCycle[currentFrameIndex];
        } else if (!currentCycle[currentFrameIndex]) {
            tenderoCesta.src = "";
        }

        if(currentFrameIndex == 2){
          frameSpeed=600;
        }else{
          frameSpeed=300;
        }
        //console.log(`Frame actual: ${currentCycle[currentFrameIndex]}, frameSpeed: ${frameSpeed}`);
        currentFrameIndex++; 

        tenderoCestaFrameTimeout = setTimeout(() => {
            playFrameAnimation(callback);
        }, frameSpeed);
    } else {
        currentFrameIndex = 0; 
        if (typeof callback === "function") callback();
    }
}

function startCestaFrameAnimation() {
    if (!tenderoCestaAnimationActive) {
        tenderoCestaAnimationActive = true;
        //console.log("Animación activada.");
        playFrameAnimation(() => {
            //console.log("Ciclo de animación completado.");
        });
    }
}

function startRandomCycle() {
  if (!randomCycleActive) {
      randomCycleActive = true;

      function initiateCycle() {
          selectRandomCycle(); 
          if (tenderoCestaAnimationActive) {
              playFrameAnimation(() => {
                  //console.log("Ciclo completo.");
              });
          }

          tenderoCestaRandomTimeout = setTimeout(initiateCycle, generateRandomDelay());
      }

      const initialDelay = generateRandomDelay();
      //console.log(`Primer ciclo retrasado por: ${initialDelay} ms`);
      tenderoCestaRandomTimeout = setTimeout(initiateCycle, initialDelay);
  }
}

function stopRandomCycle() {
    if (randomCycleActive) {
        randomCycleActive = false;
        clearTimeout(tenderoCestaFrameTimeout);
        currentFrameIndex = 0;
        tenderoCestaAnimationActive = false; 
        //console.log("Ciclos detenidos.");
    }
}

startRandomCycle();






// Evitar el menú contextual predeterminado en toda la página
document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});



/* MENÚ CONTEXTUAL GROCERY */
const showContextMenuGorcery = (event) => {
  event.preventDefault(); // Evita el menú contextual predeterminado

  modifiersSettingsContextMenu.style.display = 'none';
  gorceryContextMenu.style.top = `${event.clientY}px`;
  gorceryContextMenu.style.left = `${event.clientX}px`;
  gorceryContextMenu.style.display = 'block';
};

const showContextMenuModifiersSettings = (event) => {
event.preventDefault(); // Evita el menú contextual predeterminado
gorceryContextMenu.style.display = 'none';
modifiersSettingsContextMenu.style.display = 'block';
};

// Mostrar el menú para "grocery" con clic derecho
gorceryHiboxAreaContextMenu.addEventListener('contextmenu', (event) => {
showContextMenuGorcery(event);
});

// Mostrar el menú para "modifiersSettings" con clic izquierdo
modifiersSettingsHiboxAreaContextMenu.addEventListener('click', (event) => {
console.log("modifiersSettingsHiboxAreaContextMenu.addEventListener('click'"); 
showContextMenuModifiersSettings(event);
});

// Ocultar los menús cuando se hace clic en cualquier lugar de la página
document.addEventListener('click', (event) => {
  // Verificar si el clic ocurrió dentro de modifiersSettingsHiboxAreaContextMenu
  if (modifiersSettingsHiboxAreaContextMenu.contains(event.target)) {
    gorceryContextMenu.style.display = 'none';
    return;
  }

  // Si el clic no es dentro de modifiersSettings, ocultamos los menús
  gorceryContextMenu.style.display = 'none';
  modifiersSettingsContextMenu.style.display = 'none';
});

// Manejar clics en las opciones de los menús
gorceryContextMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
      if(event.target.textContent){

      }
      gorceryContextMenu.style.display = 'none';
  }
});

modifiersSettingsContextMenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      if(event.target.textContent.includes("stats")){
        // Opción 2
        if(event.target.textContent.includes("✔ ")){
          event.target.textContent = "Show stats in tags";
          desactivarShowStatsInTags();
        } else {
          event.target.textContent = "✔ Show stats in tags";
          activarShowStatsInTags();
        }
      } else {
        // Opción 1
        if(event.target.textContent.includes("✔ ")){
          event.target.textContent = "Show tags";
          desactivarShowTags();
        } else {
          event.target.textContent = "✔ Show tags";
          activarShowTags();
        }
      }
      modifiersSettingsContextMenu.style.display = 'none'; // Ocultar el menú contextual
    }
});





function initTenderoRotate() {
  tenderoHead.style.display = "none";
  tenderoCesta.style.display = "none";
  
  const images = [
    'img/hamster/tendero/girando/right/fin/tenderoGirandoRight1.png',
    'img/hamster/tendero/girando/right/fin/tenderoGirandoRight2.png',
    'img/hamster/tendero/girando/right/fin/tenderoGirandoRight3.png',
    'img/hamster/tendero/girando/right/fin/tenderoGirandoRight4.png',
    'img/hamster/tendero/girando/right/fin/tenderoGirandoRight5.png',
    'img/hamster/tendero/girando/right/fin/tenderoGirandoRight6.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight1.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight2.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight3.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight4.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight5.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight6.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight7.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight8.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight9.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight10.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight11.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight12.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight13.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight14.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight15.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight16.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight17.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight18.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight19.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight20.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight21.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight22.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight23.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight24.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight25.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight26.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight27.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight28.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight29.png',
    'img/hamster/tendero/corriendo/right/fin/tenderoCaminandoRight30.png'
  ];
  
  let tenderoIndex = 0;

  setInterval(() => {
    tenderoBody.src = images[tenderoIndex];
    tenderoIndex = (tenderoIndex + 1) % images.length; // Resetea al 0 cuando llegue al final
  }, 100);
}

initTenderoRotate();




});
