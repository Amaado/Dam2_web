document.addEventListener("DOMContentLoaded", function () {
  var cursor = document.getElementById("customCursor");
  var cursorPurpleish = document.getElementById("customCursorPurpleish");
  var cursorReflectLeft = document.getElementById("customCursorReflectLeft");
  var cursorReflectRight = document.getElementById("customCursorReflectRight");
  const fondo = document.getElementById("fondoGalaxy");
  const fondoGalaxySkin = document.getElementById("fondoGalaxySkin");
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
  const modifiersSettingsCont = document.getElementById('modifiersSettingsCont');
  const modifiersSettingsHiboxAreaContextMenu = document.getElementById('modifiersSettings');
  const modifiersEmailCont = document.getElementById('modifiersEmailCont');
  const modifiersEmail = document.getElementById('modifiersEmail');
  const modifiersInformationCont = document.getElementById('modifiersInformationCont');
  const modifiersInformation = document.getElementById('modifiersInformation');
  const contextMenus = document.querySelectorAll('.contextMenu');
  
  const tomatoLabel = document.getElementById('tomatoLabel');
  const tomatoContainer = document.querySelector('.tomatoContainer');
  const tomatoSliceLabel = document.getElementById('tomatoSliceLabel');
  const tomatoSliceContainer = document.querySelector('.tomatoSliceContainer');


  const cestaHibox = document.getElementById('cestaHibox');
  const hitboxSlotBuyBiggie = document.getElementById('hitboxSlotBuyBiggie');
  const hitboxSlotBuyCoco = document.getElementById('hitboxSlotBuyCoco');
  const hitboxSlotBuyDior = document.getElementById('hitboxSlotBuyDior');
  const hitboxSlotBuyBiggieClick = document.getElementById('hitboxSlotBuyBiggieClick');
  const hitboxSlotBuyCocoClick = document.getElementById('hitboxSlotBuyCocoClick');
  const hitboxSlotBuyDiorClick = document.getElementById('hitboxSlotBuyDiorClick');
  const groceryJaleDior = document.getElementById('groceryJaleDior');
  const groceryJaleCoco = document.getElementById('groceryJaleCoco');
  const groceryJaleBiggie = document.getElementById('groceryJaleBiggie');
  const groceryJaleChains = document.getElementById('groceryJaleChains');


  const dialogContainer = document.getElementById('dialogContainer');
  const dialogFlex = document.getElementById('dialogFlex');
  const iconDialogElement = document.getElementById('iconDialogElement');
  const iconDialogCoin = document.getElementById('iconDialogCoin');
  const buttonMenos = document.getElementById('buttonMenos');
  const buttonMas = document.getElementById('buttonMas');
  const buttonV = document.getElementById('buttonV');
  const buttonX = document.getElementById('buttonX');
  const buttonsImg = document.getElementById('buttonsImg');
  const buttonsImgSpinner = document.getElementById('buttonsImgSpinner');
  const coinsContainerHitbox = document.querySelector('.coinsContainerHitbox');
  const coinsHoverTooltip = document.querySelector('.coinsHoverTooltip');
  const coinsContainerAnimationContainer = document.getElementById("coinsContainerAnimationContainer");
  const tomatoContainerHitbox = document.querySelector('.tomatoContainerHitbox');
  const tomatoHoverTooltipUsage = document.querySelector('.tomatoHoverTooltipUsage');
  const tomatoHoverTooltip = document.querySelector('.tomatoHoverTooltip');
  const tomatoSliceContainerHitbox = document.querySelector('.tomatoSliceContainerHitbox');
  const tomatoSliceHoverTooltip = document.querySelector('.tomatoSliceHoverTooltip');
  const glassLeft = document.getElementById("glassLeft");
  const glassRight = document.getElementById("glassRight");
  const glassLeftHitbox = document.getElementById("glassLeftHitbox");
  const glassRightHitbox = document.getElementById("glassRightHitbox");


  let defaultTittle = "D A M";
  let warningTittle = "";
  let defaultFavicon = "img/favicon.png";
  let favicon = document.querySelector("link[rel*='icon']");


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
          
        cursorReflectLeft.src = insertReflejoBeforeExtension(cursor.src);
        cursorReflectRight.src = insertReflejoBeforeExtension(cursor.src);
        const cursorPurpleishSrc = insertPurpleishBeforeExtension(cursor.src);

        if (cursorPurpleishSrc.includes("cccc_krillin") || cursorPurpleishSrc.includes("cccc_jefeEstudios")) {
          cursorPurpleish.style.display = "none";
        }else{
          cursorPurpleish.src = cursorPurpleishSrc;
        }
        
        if(cursorPurpleishSrc.includes("cccc_ghostRider")){
          cursorPurpleish.style.filter = "hue-rotate(-25deg) saturate(1.8)";
        }else{
          cursorPurpleish.style.filter = "";
        }
      }
    }

    handleSpecialCursor(cursorSrc, theme);
  }

  function insertReflejoBeforeExtension(filename) {
    const lastDotIndex = filename.lastIndexOf(".");
    if (lastDotIndex === -1) {
      // Si no hay extensión, agregamos 'Reflejo' al final
      return filename + "Reflejo";
    } else {
      // Insertamos 'Reflejo' antes de la extensión
      return (
        filename.substring(0, lastDotIndex) +
        "Reflejo" +
        filename.substring(lastDotIndex)
      );
    }
  }

  function insertPurpleishBeforeExtension(filename) {
    // Si el nombre contiene "Reflejo.", reemplázalo por "Purpleish."
    if (filename.includes("Reflejo.")) {
      return filename.replace("Reflejo.", "Purpleish.");
    }
    
    // Si no se encuentra "Reflejo.", busca el último punto para ubicar la extensión
    const lastDotIndex = filename.lastIndexOf('.');
    if (lastDotIndex === -1) {
      // No hay extensión, se añade "Purpleish" al final
      return filename + "Purpleish";
    } else {
      // Se inserta "Purpleish" antes de la extensión
      return filename.substring(0, lastDotIndex) + "Purpleish" + filename.substring(lastDotIndex);
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
        cursorReflectLeft.src = insertReflejoBeforeExtension(dayCursorSrc);
        cursorReflectRight.src = insertReflejoBeforeExtension(dayCursorSrc);

        if (dayCursorSrc.includes("cccc_krillin") || dayCursorSrc.includes("cccc_jefeEstudios")) {
          cursorPurpleish.style.display = "none";
        }else{
          cursorPurpleish.src = insertPurpleishBeforeExtension(dayCursorSrc);
        }
        
        if (dayCursorSrc.includes("cccc_ghostRider")) {
          cursorPurpleish.style.filter = "hue-rotate(-25deg) saturate(1.8)";
        }else{
          cursorPurpleish.style.filter = "";
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
      modifiersSettingsCont.className = "day";
      modifiersSettingsHiboxAreaContextMenu.className = "day";
      modifiersEmailCont.className = "day";
      modifiersEmail.className = "day";
      modifiersInformationCont.className = "day";
      modifiersInformation.className = "day";
      contextMenus.forEach((contextMenu) => {
        if (!contextMenu.classList.contains("day")) {
          contextMenu.classList.add("day");
        }
      });

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
        cursorReflectLeft.src = insertReflejoBeforeExtension(nightCursorSrc);
        cursorReflectRight.src = insertReflejoBeforeExtension(nightCursorSrc);

        if (nightCursorSrc.includes("cccc_krillin") || nightCursorSrc.includes("cccc_jefeEstudios")) {
          cursorPurpleish.style.display = "none";
        }else{
          cursorPurpleish.src = insertPurpleishBeforeExtension(nightCursorSrc);
        }
        
        if (nightCursorSrc.includes("cccc_ghostRider")) {
          cursorPurpleish.style.filter = "hue-rotate(-25deg) saturate(1.8)";
        }else{
          cursorPurpleish.style.filter = "";
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
      modifiersSettingsCont.className = "night";
      modifiersSettingsHiboxAreaContextMenu.className = "night";
      modifiersEmailCont.className = "night";
      modifiersEmail.className = "night";
      modifiersInformationCont.className = "night";
      modifiersInformation.className = "night";
      contextMenus.forEach((contextMenu) => {
        if (!contextMenu.classList.contains("night")) {
          contextMenu.classList.add("night");
        }
      });

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

  let monedasUpdateInterval;
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
      await actualizarTomatos(idLogeado);
      await cargarSkins(idLogeado);
      await loadCursorSelection(idLogeado);
      cargarNotas(idLogeado);
      cargarDibujosEnTodasLasPaginas();
      applyTheme();
      ajustesColorLoginYregister(checkbox);

      actualizarEstadoElementosSesion();
      loadCursorSelection(idLogeado);

      cargarHamstersDesdeBDF();
      updateStatsHamsters();

      cargarNotas(idLogeado);
      updateAudioMaster();


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
              "11LLLLLLLLLLLLLLLLL"
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
        await actualizarTomatos(idLogeado);
        await cargarSkins(idLogeado);
        await loadCursorSelection(idLogeado);
        cargarNotas(idLogeado);
        cargarDibujosEnTodasLasPaginas();
        actualizarEstadoElementosSesion();
        ajustesColorLoginYregister(checkbox);
        cargarHamstersDesdeBDF();
        updateStatsHamsters();

        cargarNotas(idLogeado);
        horarioImg.style.setProperty(
          "transform",
          "translateX(-10px) scale(0.02, 0.02)",
          "important"
        );
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
      //console.log("ID logeado:", idLogeado);
      const monedasLogeado = await obtenerMonedasDeUsuario(idLogeado);
      coinLabel.textContent = monedasLogeado;

      await atualizarCoinsContainerHitboxWidth(monedasLogeado);

      localCoinsCounter = monedasLogeado;
      console.log("Monedas obtenidas:", monedasLogeado);
    } catch (error) {
      console.error("Error durante ACTUALIZAR MONEDAS:", error);
    }
  }

  async function atualizarCoinsContainerHitboxWidth(monedas){
    const monedasLength = String(Math.abs(monedas)).length;
    let pixelesAsumar1 = monedasLength*30 + 30 + 65;
    let pixelesAsumar2 = monedasLength*30 + 60 + 60;
    coinsContainerHitbox.style.width = pixelesAsumar1+"px";
    coinsHoverTooltip.style.left = pixelesAsumar2+"px";
  }

  async function atualizarTomatoContainerHitboxWidth(tomatos){
    const tomatosLength = String(Math.abs(tomatos)).length;
    let pixelesAsumar1 = tomatosLength*30 + 65;
    let pixelesAsumar2 = tomatosLength*30 + 30 + 60;
    tomatoContainerHitbox.style.width = pixelesAsumar1+"px";
    tomatoHoverTooltip.style.left = pixelesAsumar2+"px";
    tomatoHoverTooltipUsage.style.left = pixelesAsumar2+"px";
  }

  async function atualizarTomatoSliceContainerHitboxWidth(tomatosSlice){
    const tomatosSliceLength = String(Math.abs(tomatosSlice)).length;
    let pixelesAsumar1 = tomatosSliceLength*30 + 30 + 30;
    let pixelesAsumar2 = tomatosSliceLength*30 + 60 + 25;
    tomatoSliceContainerHitbox.style.width = pixelesAsumar1+"px";
    tomatoSliceHoverTooltip.style.left = pixelesAsumar2+"px";
  }

  let timeoutId; // Variable para rastrear el timeout
  function coinsContainerHitboxEnter(container, tomatoHoverTooltipUsage) {
      // Si hay un timeout pendiente, se cancela
      if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null; // Limpia la referencia al timeout
      }
      container.style.display = "flex";
      container.style.opacity = "1";

      if(tomatoHoverTooltipUsage){
        tomatoHoverTooltipUsage.style.display = "flex";
        tomatoHoverTooltipUsage.style.opacity = "1";
      }
  }
  
  function coinsContainerHitboxLeave(container, tomatoHoverTooltipUsage) {
      container.style.opacity = "0";
      if(tomatoHoverTooltipUsage){
        tomatoHoverTooltipUsage.style.opacity = "0";
      }

      timeoutId = setTimeout(() => {
          container.style.display = "none";
          if(tomatoHoverTooltipUsage){
            tomatoHoverTooltipUsage.style.display = "none";
          }

          timeoutId = null; // Limpia la referencia al timeout
      }, 400); // Tiempo en milisegundos
  }
  
  coinsContainerHitbox.addEventListener("mouseenter", () => coinsContainerHitboxEnter(coinsHoverTooltip));
  coinsContainerHitbox.addEventListener("mouseleave", () => coinsContainerHitboxLeave(coinsHoverTooltip));
  
  tomatoContainerHitbox.addEventListener("mouseenter", () => coinsContainerHitboxEnter(tomatoHoverTooltip, tomatoHoverTooltipUsage));
  tomatoContainerHitbox.addEventListener("mouseleave", () => coinsContainerHitboxLeave(tomatoHoverTooltip, tomatoHoverTooltipUsage));

  tomatoSliceContainerHitbox.addEventListener("mouseenter", () => coinsContainerHitboxEnter(tomatoSliceHoverTooltip));
  tomatoSliceContainerHitbox.addEventListener("mouseleave", () => coinsContainerHitboxLeave(tomatoSliceHoverTooltip));



  /* CLICK PARA FARMEAR MONEDAS */

  // Obtener idLogeado de localStorage al inicio
  const idLogeadoLoc = parseInt(localStorage.getItem("idLogeado"));
  if (!isNaN(idLogeadoLoc)) {
    actualizarLocalCoinsCounter(idLogeadoLoc);
    actualizarTomatos(idLogeadoLoc);
    actualizarTomatosSlice(idLogeadoLoc);
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

        await atualizarCoinsContainerHitboxWidth(nuevasMonedas);
      } catch (error) {
        console.error(
          "Error durante la actualización de monedas en la base de datos:",
          error
        );
      }
    }, 2000);
  }

  /* ACTUALIZAR TOMATOS */
  async function actualizarTomatosUsuario(idLogin, tomatosNuevos) {
    if (
      isNaN(tomatosNuevos) ||
      tomatosNuevos === null ||
      tomatosNuevos === undefined
    ) {
      console.error("El valor de tomatosNuevos no es válido:", tomatosNuevos);
      return;
    }

    const url = `${supabaseUrl}?id=eq.${idLogin}`;
    const actualizarTomatos = { tomatos: parseInt(tomatosNuevos) };

    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify(actualizarTomatos),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error(
          "Error al actualizar los tomatos:",
          response.statusText,
          errorData
        );
        throw new Error(
          "Error en la actualización de tomatos: " + response.statusText
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al actualizar los tomatos:", error);
    }
  }

async function obtenerTomatosDeUsuario(id) {
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
      const tomatos = data[0].tomatos;
      if (tomatos === null) {
        console.warn("Tomatos obtenidos: null. Inicializando tomatos a 0.");
        await actualizarTomatosUsuario(id, 0);
        return 0;
      }
      return tomatos; // Devuelve el valor de tomatos
    } else {
      console.warn("Usuario no encontrado. Inicializando tomatos a 0.");
      await actualizarTomatosUsuario(id, 0);
      return 0;
    }
}

let zIndexValueTomatos = 60; // Variable global para controlar el z-index para tomatos
let imageCounterTomatos = 0; // Contador para generar identificadores únicos para tomatos
let localTomatosCounter = 0; // Contador local para manejar la última cifra en las animaciones de tomatos

async function actualizarTomatos(idLogeado) {
  try {
    const tomatosLogeado = await obtenerTomatosDeUsuario(idLogeado);
    await atualizarTomatoContainerHitboxWidth(tomatosLogeado);
    tomatoLabel.textContent = tomatosLogeado;
    localTomatosCounter = tomatosLogeado;
    console.log("Tomatos obtenidos:", tomatosLogeado);
  } catch (error) {
    console.error("Error durante ACTUALIZAR TOMATOS:", error);
  }
}


// Obtener idLogeado de localStorage al inicio
const idLogeadoTomatosLoc = parseInt(localStorage.getItem("idLogeado"));
if (!isNaN(idLogeadoTomatosLoc)) {
  actualizarLocalTomatosCounter(idLogeadoTomatosLoc);
} else {
  console.error(
    "Usuario no logeado al intentar actualizar el contador local de tomatos."
  );
}

async function actualizarLocalTomatosCounter(idLogeado) {
  try {
    const tomatosLogeado = await obtenerTomatosDeUsuario(idLogeado);
    localTomatosCounter = tomatosLogeado;
  } catch (error) {
    console.error("Error durante ACTUALIZAR TOMATOS:", error);
  }
}

async function incrementTomatos(idLogeado, tomatesAnhadir) {
  // Incrementar contador local inmediatamente para manejar animaciones y evitar sobrecarga de clics
  localTomatosCounter = localTomatosCounter + tomatesAnhadir;

  // Esperar 3 segundos antes de actualizar la base de datos
  setTimeout(async function () {
    try {
      // Actualizar los tomatos del usuario en la base de datos
      const nuevosTomatos = localTomatosCounter;
      await actualizarTomatosUsuario(idLogeado, nuevosTomatos);
      await atualizarTomatoContainerHitboxWidth(nuevosTomatos);

      // Actualizar la interfaz de usuario (etiqueta de tomatos)
      tomatoLabel.textContent = nuevosTomatos;
    } catch (error) {
      console.error(
        "Error durante la actualización de tomatos en la base de datos:",
        error
      );
    }
  }, 790);
}



/* TOMATOS SLICE DB CONNECTION */

async function obtenerTomatosSliceDeUsuario(id) {
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

      if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
          const tomatosSlice = data[0].tomatos_slice; // Ahora usa "tomatos_slice"

          if (tomatosSlice === null || tomatosSlice === undefined) {
              console.warn(`tomatos_slice es ${tomatosSlice}. Se inicializa a 0.`);
              await actualizarTomatosSliceUsuario(id, 0);
              return 0;
          }

          return tomatosSlice;
      } else {
          console.warn("Usuario no encontrado. Inicializando tomatos_slice a 0.");
          await actualizarTomatosSliceUsuario(id, 0);
          return 0;
      }
  } catch (error) {
      console.error("Error obteniendo tomatos_slice:", error);
      return 0; // Retorna 0 en caso de fallo para evitar interrupciones
  }
}

async function actualizarTomatosSlice(idLogeado) {
  try {
      console.log("ID logeado:", idLogeado);
      const tomatosSliceLogeado = await obtenerTomatosSliceDeUsuario(idLogeado);
      await atualizarTomatoSliceContainerHitboxWidth(tomatosSliceLogeado);

      if (tomatoSliceLabel) {
          tomatoSliceLabel.textContent = tomatosSliceLogeado;
      } else {
          console.warn("Elemento slicesInfoContainer no encontrado en el DOM.");
      }

      console.log("tomatos_slice obtenidos:", tomatosSliceLogeado);
  } catch (error) {
      console.error("Error al actualizar tomatos_slice:", error);
  }
}

async function actualizarTomatosSliceUsuario(id, nuevaCantidad) {
  if (!id || nuevaCantidad === undefined || nuevaCantidad === null) {
      console.error("ID o nueva cantidad de tomatos_slice no válidos.");
      return;
  }

  const url = `${supabaseUrl}?id=eq.${id}`;

  try {
      const response = await fetch(url, {
          method: "PATCH",
          headers: {
              apikey: supabaseKey,
              Authorization: `Bearer ${supabaseKey}`,
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ tomatos_slice: nuevaCantidad }), // Solo actualiza el campo tomatos_slice
      });

      if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
      }

      //console.log(`Tomatos_slice actualizados correctamente a ${nuevaCantidad} para el usuario con ID ${id}`);
  } catch (error) {
      console.error("Error actualizando tomatos_slice:", error);
  }
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
      if (modifiersContainer.classList.contains("active")) {
        settingsContainer.style.marginRight = "30vh";
      }else{
        settingsContainer.style.marginRight = "0vw";
      }
      settingsContainer.classList.add("active");
      settingsContainer.classList.remove("notActive");

      switchThemeButton.classList.add("active");
      rtxContainer.classList.add("active");
      volumenContainer.classList.add("active");

      settingsImg.classList.add("active");
      settingsImgLight.classList.add("active");
    } else {
      if (modifiersContainer.classList.contains("active")) {
        settingsContainer.style.marginRight = "-15vw";
      }else{
        settingsContainer.style.marginRight = "0vw";
      }
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

  function quitarCandadosIniciales(skinsUnlock) {
    // Convertimos el string en un array de IDs (si no hay, es un array vacío)
    const unlockedSkinIds = skinsUnlock && skinsUnlock.trim() !== ""
      ? skinsUnlock.split(",")
      : [];
  
    // Recorremos cada contenedor de skin
    const skinContainers = document.querySelectorAll(".skinContainer");
    skinContainers.forEach((skinContainer) => {
      const skinId = skinContainer.getAttribute("skinId");
      if (unlockedSkinIds.includes(skinId)) {
        // Si la skin está desbloqueada, quitamos los candados
        const candado = skinContainer.querySelector(".candado");
        const skinContainerLock = skinContainer.querySelector(".skinContainerLock");
        const skinContainerNotVisible = skinContainer.querySelector(".skinContainerNotVisible");
  
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

  // Convertir el listado de skins desbloqueadas en un array.
  const unlockedSkinIds = skinsUnlock && skinsUnlock.trim() !== ""
    ? skinsUnlock.split(",")
    : [];

  const candados = document.querySelectorAll(".candado");

  // Recorrer cada candado y configurar su funcionamiento.
  candados.forEach((candado) => {
    // Reiniciamos la imagen del candado
    candado.src = "img/lock.png";

    const skinContainer = candado.closest(".skinContainer");
    const skinId = skinContainer.getAttribute("skinId");
    const skinContainerLock = skinContainer.querySelector(".skinContainerLock");
    const skinContainerNotVisible = skinContainer.querySelector(".skinContainerNotVisible");

    let priceElement = skinContainerNotVisible.querySelector(".price");
    let price = (priceElement.textContent === "FREE")
      ? 0
      : parseInt(priceElement.textContent);

    // Si la skin ya está desbloqueada, quitar el candado y pasar a la siguiente.
    if (unlockedSkinIds.includes(skinId)) {
      candado.style.opacity = "0%";
      candado.style.visibility = "hidden";
      candado.style.pointerEvents = "none";

      skinContainerLock.style.opacity = "0%";
      skinContainerLock.style.visibility = "hidden";
      skinContainerLock.style.pointerEvents = "none";

      skinContainerNotVisible.style.opacity = "0%";
      skinContainerNotVisible.style.visibility = "hidden";
      skinContainerNotVisible.style.pointerEvents = "none";
      return; // saltamos a la siguiente skin
    }

    try {
      // Agregar event listeners para las skins bloqueadas, pasando skinId en lugar de un índice
      const handler = (event) =>
        searchUnlockingStatus(
          candado,
          skinContainerLock,
          skinContainerNotVisible,
          price,
          skinId,
          idLogeado,
          event
        );

      candado.addEventListener("click", handler);
      skinContainerNotVisible.addEventListener("click", handler);
    } catch (error) {
      console.error("Error al manejar los candados:", error);
    }
  });
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
  skinId,
  idLogeado,
  event
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
      skinId,
      event
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
    skinId,
    event
  ) {
    candado.src = "img/lock.gif";
    candado.style.pointerEvents = "none";
    skinContainerLock.style.pointerEvents = "none";


    // Limpia el intervalo existente, si lo hay
    if (monedasUpdateInterval) {
      clearInterval(monedasUpdateInterval);
    }

    let monedasViejas = parseInt(monedasLogeado, 10);
    monedasLogeado -= price;
    let monedasNuevas = parseInt(monedasLogeado, 10); // Asegúrate de que `data` contiene las monedas nuevas como un número

    // Calcular la cantidad de pasos y la duración de cada paso
    const pasos = Math.abs(monedasViejas - monedasNuevas);
    const intervaloDuracion = pasos > 0 ? 2000 / pasos : 0; // Duración en ms por paso (2 segundos en total)

    // Intervalo para animar la actualización de monedas
    monedasUpdateInterval = setInterval(() => {
      if (monedasViejas === monedasNuevas) {
        clearInterval(monedasUpdateInterval); // Detener el intervalo si los valores coinciden
        return;
      }

      if (monedasViejas < monedasNuevas) {
        monedasViejas++; // Incrementa hacia el valor deseado
      } else if (monedasViejas > monedasNuevas) {
        monedasViejas--; // Decrementa hacia el valor deseado
      }

      // Actualiza el contenido de coinLabel
      coinLabel.textContent = monedasViejas;
    }, intervaloDuracion); // Ajusta la velocidad de la animación aquí
    coinsContainerAnimationContainer.innerHTML = "";


    // Actualizar el contador de monedas en la interfaz
    //document.querySelector(".coinLabel").textContent = monedasLogeado;
    await actualizarMonedasUsuario(idLogeado, monedasLogeado);
    await descontarMonedasSoloAnim(price, event);

    await atualizarCoinsContainerHitboxWidth(monedasLogeado);

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
  
      // Actualizar el listado de skins desbloqueadas en la base de datos usando skinId
      await unlockSkin(idLogeado, skinId);
    }, 1100);
  }

  async function unlockSkin(idLogin, skinId) {
    try {
      // Obtener el listado actual de skins desbloqueadas, por ejemplo "1,3,5"
      let skinsUnlock = await obtenerSkinsUnlockDeUsuario(idLogin);
      let unlockedSkinIds = skinsUnlock && skinsUnlock.trim() !== ""
        ? skinsUnlock.split(",")
        : [];
  
      if (!unlockedSkinIds.includes(skinId)) {
        unlockedSkinIds.push(skinId);
      } else {
        console.warn("La skin ya está desbloqueada:", skinId);
      }
  
      let nuevoSkinsUnlock = unlockedSkinIds.join(",");
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

      cageContainer.style.display = "block";
      tomatoContainer.style.display = "flex";
      tomatoSliceContainer.style.display = "flex";
      wrapper.style.display = "block";
      
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

      cageContainer.style.display = "none";
      tomatoContainer.style.display = "none";
      tomatoSliceContainer.style.display = "none";
      wrapper.style.display = "none";

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

      const containerRectLeft = cursorReflectLeft.parentNode.getBoundingClientRect();
      const relativeXLeft = e.clientX - containerRectLeft.left;
      const relativeYLeft = e.clientY - containerRectLeft.top;

      const relativeXLeftMarginRight = e.clientX - containerRectLeft.right;
      let distanceRecLeftMarginRight = relativeXLeftMarginRight / 7;
      let distanceRecTopMarginTop = relativeYLeft / 5;

      const containerRectRight = cursorReflectRight.parentNode.getBoundingClientRect();
      const relativeXRight = e.clientX - containerRectRight.left;
      const relativeYRight = e.clientY - containerRectRight.top;

      const relativeXRightMarginRight = e.clientX - containerRectRight.left;
      let distanceRecRightMarginRight = relativeXRightMarginRight / 7;

      // Cambiar la posición para centrar el cursor
      const cursorSize = 200;
      const cursorPaintSizeX = 220.5;
      const cursorPaintSizeY = 218;
      cursor.style.left = e.clientX - cursorSize / 2 + "px"; // Centrar en X
      cursor.style.top = e.clientY - cursorSize / 2 + "px"; // Centrar en Y
      if(!isTransitioning){
        cursorReflectLeft.style.display = "block";
        cursorReflectRight.style.display = "block";
      }
      if(glassLeft.classList.contains("active")){
        cursorReflectLeft.style.removeProperty("left");
        cursorReflectLeft.style.right = ((relativeXLeft - cursorSize / 2) + distanceRecLeftMarginRight) + "px";
      }else{
        cursorReflectLeft.style.removeProperty("right");
        cursorReflectLeft.style.left = ((relativeXLeft - cursorSize / 2) + distanceRecLeftMarginRight) + "px";
      }
      cursorReflectLeft.style.top = ((relativeYLeft - cursorSize / 2) + distanceRecTopMarginTop) + "px";
      if(glassRight.classList.contains("active")){
        cursorReflectRight.style.removeProperty("left");
        cursorReflectRight.style.right = ((relativeXRight - cursorSize / 2)+distanceRecRightMarginRight) + "px";
      }else{
        cursorReflectRight.style.removeProperty("right");
        cursorReflectRight.style.left = ((relativeXRight - cursorSize / 2)+distanceRecRightMarginRight) + "px";
      }
      cursorReflectRight.style.top = ((relativeYRight - cursorSize / 2)+distanceRecTopMarginTop) + "px";
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
      cursorReflectLeft.classList.add("clicked");
      cursorReflectRight.classList.add("clicked");
      cursorPurpleish.classList.add("clicked");
      if(checkboxland){
        checkboxland.classList.add("clicked");
      }
    });

    document.addEventListener("mouseup", function () {
      cursor.classList.remove("clicked");
      cursorReflectLeft.classList.remove("clicked");
      cursorReflectRight.classList.remove("clicked");
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
        e.target.closest("#settingsImgContainer") ||
        e.target.closest(".hamster") ||
        e.target.closest("#hitboxSlotBuyDiorClick") ||
        e.target.closest("#hitboxSlotBuyCocoClick") ||
        e.target.closest("#hitboxSlotBuyBiggieClick") ||
        e.target.closest("#cestaHibox") ||
        e.target.closest("#buttonV") ||
        e.target.closest("#buttonX") ||
        e.target.closest("#buttonMas") ||
        e.target.closest("#buttonMenos") ||
        e.target.closest("li") ||
        e.target.closest("#modifiersInformationCont") ||
        e.target.closest("#modifiersEmailCont") ||
        e.target.closest("#modifiersSettingsCont") ||
        e.target.closest(".paletteColor") ||
        e.target.closest("#writeButton") ||
        e.target.closest("#paintButton") ||
        e.target.closest(".sliderPaint") ||
        e.target.closest("#page-number")
      ) {
        if (e.target.closest(".hamster") && e.target.closest(".hamster").dataset.onAction){
          return;
        }
        cursorPurpleish.style.opacity = "100%";
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
        e.target.closest("#settingsImgContainer") ||
        e.target.closest(".hamster") ||
        e.target.closest("#hitboxSlotBuyDiorClick") ||
        e.target.closest("#hitboxSlotBuyCocoClick") ||
        e.target.closest("#hitboxSlotBuyBiggieClick") ||
        e.target.closest("#cestaHibox") ||
        e.target.closest("#buttonV") ||
        e.target.closest("#buttonX") ||
        e.target.closest("#buttonMas") ||
        e.target.closest("#buttonMenos") ||
        e.target.closest("li") ||
        e.target.closest("#modifiersInformationCont") ||
        e.target.closest("#modifiersEmailCont") ||
        e.target.closest("#modifiersSettingsCont") ||
        e.target.closest(".paletteColor") ||
        e.target.closest("#writeButton") ||
        e.target.closest("#paintButton") ||
        e.target.closest(".sliderPaint") ||
        e.target.closest("#page-number")
      ) {
        if (e.target.closest(".hamster") && e.target.closest(".hamster").dataset.onAction){
          return;
        }
        cursorPurpleish.style.opacity = "1%";
        fondoGreen.style.opacity = "1%";
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
      cursorReflectLeft.style.transition =
        "width 0.1s ease-in-out, height 0.1s ease-in-out, transform 0.1s ease-in-out, opacity 0.1s ease-in-out, margin-left 0.5s ease, margin-top 0.5s ease";
      cursorReflectRight.style.transition =
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
      cursorReflectLeft.style.display = "block";
      cursorReflectRight.style.display = "block";
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
      cursorReflectLeft.style.display = "none";
      cursorReflectRight.style.display = "none";
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
      cursorReflectLeft.src = "img/cursors/cccc_galaxyReflejo.webp";
      cursorReflectRight.src = "img/cursors/cccc_galaxyReflejo.webp";
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

  
  const scrollThreshold = 0;
  const startPosY = 100;
  const endPosY = 0;

  function updateBackgroundPositionGalaxyPortada() {
    const scrollTop = skinsContainer.scrollTop;
    const maxScroll = skinsContainer.scrollHeight - skinsContainer.clientHeight;
    const progress = scrollTop / maxScroll;
    
    // Remapea el progreso: cuando progress es igual a scrollThreshold (50%), effectiveProgress = 0
    // y cuando progress es 1 (100%), effectiveProgress = 1.
    let effectiveProgress = (progress - scrollThreshold) / (1 - scrollThreshold);
    if (effectiveProgress < 0) effectiveProgress = 0;
    if (effectiveProgress > 1) effectiveProgress = 1;
    
    // Mapea effectiveProgress al rango deseado (startPosY a endPosY)
    const posY = startPosY + effectiveProgress * (endPosY - startPosY);
    
    fondoGalaxySkin.style.backgroundPosition = `center ${posY}%`;
  }

  // Actualiza en cada scroll
  skinsContainer.addEventListener('scroll', updateBackgroundPositionGalaxyPortada);
  // Llamada inicial
  updateBackgroundPositionGalaxyPortada();





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
    logoutButton.style.left = "16vw";

    if (skinsContainer.classList.contains("active")) {
      coinsContainer.style.marginLeft = "15vw";
      tomatoContainer.style.marginLeft = "15vw";
      tomatoSliceContainer.style.marginLeft = "15vw";
    }
  }

  function removeSkinsMenuActive() {
    flechaaSkins.classList.remove("active");
    skinsContainer.classList.remove("active");
    flechaHitbloxPlusSkins.classList.remove("active");
    menuLabelSkins.classList.remove("active");
    logoutButton.style.left = "30px";

    if (!skinsContainer.classList.contains("active")) {
      coinsContainer.style.marginLeft = "0vw";
      tomatoContainer.style.marginLeft = "0vw";
      tomatoSliceContainer.style.marginLeft = "0vw";
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

    if (modifiersContainer.classList.contains("active")) {
      if (settingsContainer.classList.contains("active")) {
        settingsContainer.style.marginRight = "15vw";
      }
      settingsImgContainer.style.marginRight = "15vw";

      cageContainer.style.marginRight = "15vw";
      hitboxSlotWorld.style.marginRight = "15vw";
      wrapper.style.marginRight = "15vw";
      cestaHibox.style.display = "block";
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
    gorceryContextMenu.style.display = 'none';
    modifiersSettingsContextMenu.style.display = 'none';
    hideDialog();


    if (!modifiersContainer.classList.contains("active")) {
      if (settingsContainer.classList.contains("active")) {
        settingsContainer.style.marginRight = "0vw";
      }
      settingsImgContainer.style.marginRight = "0vw";

      cageContainer.style.marginRight = "0vw";
      hitboxSlotWorld.style.marginRight = "0vw";
      wrapper.style.marginRight = "0vw";
      cestaHibox.style.display = "none";
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
  function showTooltipSliderPaint() {
    tooltipPaint.style.opacity = "1";
    isMouseDown = true;
  }

  // Oculta el tooltipVolume cuando el ratón se suelta
  function hideTooltipSliderPaint() {
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
  sliderPaint.addEventListener("mousedown", showTooltipSliderPaint);
  document.addEventListener("mouseup", hideTooltipSliderPaint);
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
          cursor.style.marginLeft = "70px";
          cursor.style.marginTop = "70px";
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
      //console.log("Dibujos obtenidos de la base de datos:", data);
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
let fillComederosAuto = false;
let payWaterAuto = false;
let helpIconWarnings = false;

// Función para cargar los valores desde localStorage
function loadTooltipSettings() {
  // Cargar los valores del localStorage o usar los valores predeterminados (false)
  const savedNamesShown = localStorage.getItem('checkboxTooltipsNamesShown');
  const savedStatesShown = localStorage.getItem('checkboxTooltipsStatesShown');
  const savedFillComederosAuto = localStorage.getItem('fillComederosAuto');
  const savedPayWaterAuto = localStorage.getItem('payWaterAuto');
  const savedIconHelpShown = localStorage.getItem('helpIconWarnings');

  // Si no hay valores guardados en el localStorage, se usan los valores predeterminados (false)
  checkboxTooltipsNamesShown = savedNamesShown !== null ? JSON.parse(savedNamesShown) : false;
  checkboxTooltipsStatesShown = savedStatesShown !== null ? JSON.parse(savedStatesShown) : false;
  fillComederosAuto = savedFillComederosAuto !== null ? JSON.parse(savedFillComederosAuto) : false;
  payWaterAuto = savedPayWaterAuto !== null ? JSON.parse(savedPayWaterAuto) : false;
  helpIconWarnings = savedIconHelpShown !== null ? JSON.parse(savedIconHelpShown) : false;

  // Actualizar la visibilidad de los tooltips en base a los valores cargados
  updateTooltipVisibility();
  updateContextMenu(); // Actualizar el menú contextual al cargar
}

// Función para guardar los valores en localStorage
function saveTooltipSettings() {
  // Guardar los valores actuales de las variables en el localStorage
  localStorage.setItem('checkboxTooltipsNamesShown', JSON.stringify(checkboxTooltipsNamesShown));
  localStorage.setItem('checkboxTooltipsStatesShown', JSON.stringify(checkboxTooltipsStatesShown));
  localStorage.setItem('fillComederosAuto', JSON.stringify(fillComederosAuto));
  localStorage.setItem('payWaterAuto', JSON.stringify(payWaterAuto));
  localStorage.setItem('helpIconWarnings', JSON.stringify(helpIconWarnings));
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

function desactivarFillComederosAuto(){
  fillComederosAuto = false;
  saveTooltipSettings();
}
function activarFillComederosAuto(){
  fillComederosAuto = true;
  saveTooltipSettings();
  autoFillComederos();
}

function desactivarPayWaterAuto(){
  payWaterAuto = false;
  saveTooltipSettings();
}
function activarPayWaterAuto(){
  payWaterAuto = true;
  saveTooltipSettings();
}


function desactivarhelpIconWarnings(){
  helpIconWarnings = false;
  saveTooltipSettings();
}
function activarhelpIconWarnings(){
  helpIconWarnings = true;
  saveTooltipSettings();
}

// Esta función actualiza la visibilidad de los tooltips basados en el estado actual de las variables
function updateTooltipVisibility(){
  let hamsterTooltipContainers = document.querySelectorAll(".hamsterTooltipContainer");
  let sliderHamsterContainers = document.querySelectorAll(".sliderHamsterContainer");
  let sliderHamsterWarningIconss = document.querySelectorAll(".sliderHamsterWarningIcons");

  // Actualizar la visibilidad de las tooltips de los nombres
  hamsterTooltipContainers.forEach((tooltip) => {
    let hamster = tooltip.closest('.hamster');
    let hitbox = hamster.parentElement.id;
    if (hitbox === 'hitboxSlotBuyDior' ||
        hitbox === 'hitboxSlotBuyCoco' ||
        hitbox === 'hitboxSlotBuyBiggie'){
          
      tooltip.style.opacity = "0";
    }else{
      if (checkboxTooltipsNamesShown) {
        tooltip.style.opacity = "0.8";
      } else {
        tooltip.style.opacity = "0";
      }
    }
  });

  // Actualizar la visibilidad de las tooltips de los estados
  sliderHamsterContainers.forEach((container) => {
    if (checkboxTooltipsStatesShown) {
      container.style.opacity = "1";
    } else {
      container.style.opacity = "0";
    }
  });

  sliderHamsterWarningIconss.forEach((container) => {
    if (checkboxTooltipsStatesShown) {
      container.style.opacity = "1";
    } else {
      container.style.opacity = "0";
    }
  });

  const comidaHitboxes = document.querySelectorAll(".comidaHitbox");
  comidaHitboxes.forEach(hitbox => {
    // Obtenemos el id del tooltip correspondiente, por ejemplo "comida1Tooltip"
    const tooltipId = hitbox.id.replace('Hitbox', 'Tooltip');
    const tooltip = document.getElementById(tooltipId);
    if (checkboxTooltipsStatesShown) {
      tooltip.style.transition = "clip-path 0.3s ease 0.1s, margin-top 0.7s ease";
      tooltip.classList.add('active');
    }else{
      tooltip.style.transition = "clip-path 0.3s ease 0.18s, margin-top 0.7s ease";
      tooltip.classList.remove('active');
    }
  });
}

// Función para actualizar el menú contextual
function updateContextMenu() {
  const contextMenuItems = document.querySelectorAll('.contextMenu li');
  
  contextMenuItems.forEach((item) => {
    const itemText = item.textContent.trim();

    if (itemText.includes("Mostrar etiquetas") || itemText.includes("✔ Mostrar etiquetas")) {
      if (checkboxTooltipsNamesShown) {
        item.textContent = "✔ Mostrar etiquetas";
      } else {
        item.textContent = "Mostrar etiquetas";
      }
    }

    else if (itemText.includes("Mostrar estadísticas en las etiquetas") || itemText.includes("✔ Mostrar estadísticas en las etiquetas")) {
      if (checkboxTooltipsStatesShown) {
        item.textContent = "✔ Mostrar estadísticas en las etiquetas";
      } else {
        item.textContent = "Mostrar estadísticas en las etiquetas";
      }
    }

    else if (itemText.includes("Rellenar comederos automáticamente") || itemText.includes("✔ Rellenar comederos automáticamente")) {
      if (fillComederosAuto) {
        item.textContent = "✔ Rellenar comederos automáticamente";
      } else {
        item.textContent = "Rellenar comederos automáticamente";
      }
    }

    else if (itemText.includes("Pagar factura del agua automáticamente") || itemText.includes("✔ Pagar factura del agua automáticamente")) {
      if (payWaterAuto) {
        item.textContent = "✔ Pagar factura del agua automáticamente";
      } else {
        item.textContent = "Pagar factura del agua automáticamente";
      }
    }

    else if (itemText.includes("Mostrar estadísticas en las etiquetas") || itemText.includes("✔ Mostrar estadísticas en las etiquetas")) {
      if (checkboxTooltipsStatesShown) {
        item.textContent = "✔ Mostrar estadísticas en las etiquetas";
      } else {
        item.textContent = "Mostrar estadísticas en las etiquetas";
      }
    }

    else if (itemText.includes("Ayuda icono de venana para warnings") || itemText.includes("✔ Ayuda icono de venana para warnings" )) {
      if (helpIconWarnings) {
        item.textContent = "✔ Ayuda icono de venana para warnings";
      } else {
        item.textContent = "Ayuda icono de venana para warnings";
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

window.addEventListener("load", async function () {
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

let tooltipHamsterFlag = false;

function showTooltipHamster(hamsterElement){
  let tooltip = hamsterElement.querySelector(".hamsterTooltipContainer");
  let tooltipStates = hamsterElement.querySelector(".sliderHamsterContainer");
  let sliderHamsterWarningIcons = hamsterElement.querySelector(".sliderHamsterWarningIcons");

  if(tooltipHamsterFlag){
    return;
  }

  if (!checkboxTooltipsNamesShown) {
    tooltip.style.opacity = "1";
  }
  
  if(checkboxTooltipsStatesShown){
    tooltipStates.style.opacity = "1";
    sliderHamsterWarningIcons.style.opacity = "1";
  }
}


function hideTooltipHamster(hamsterElement){
  let tooltip = hamsterElement.querySelector(".hamsterTooltipContainer");
  let tooltipStates = hamsterElement.querySelector(".sliderHamsterContainer");
  let sliderHamsterWarningIcons = hamsterElement.querySelector(".sliderHamsterWarningIcons");

  if (!checkboxTooltipsNamesShown) {
    tooltip.style.opacity = "0";
  }

  if(checkboxTooltipsStatesShown){
    if(!checkboxTooltipsNamesShown){
      tooltipStates.style.opacity = "0";
      sliderHamsterWarningIcons.style.opacity = "0";
    }
  }
}

function showTooltipHamsterForce(hamsterElement){
  let tooltip = hamsterElement.querySelector(".hamsterTooltipContainer");
  let tooltipStates = hamsterElement.querySelector(".sliderHamsterContainer");
  let sliderHamsterWarningIcons = hamsterElement.querySelector(".sliderHamsterWarningIcons");

  
  tooltip.style.visibility = "visible";
  tooltipStates.style.visibility = "visible";
  sliderHamsterWarningIcons.style.visibility = "visible";

  tooltipHamsterFlag = false;
}

function hideTooltipHamsterForce(hamsterElement){
  let tooltip = hamsterElement.querySelector(".hamsterTooltipContainer");
  let tooltipStates = hamsterElement.querySelector(".sliderHamsterContainer");
  let sliderHamsterWarningIcons = hamsterElement.querySelector(".sliderHamsterWarningIcons");

  tooltip.style.visibility = "hidden";
  tooltipStates.style.visibility = "hidden";
  sliderHamsterWarningIcons.style.visibility = "hidden";

  tooltipHamsterFlag = true;
}


function setHamster(hamsterElement){
  if(hamsterElement.dataset.onAction){return;}

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


// Función para precargar las imágenes de los hámsters
function preloadHamsterImages() {
  const hamsterTypes = ["Biggie", "Coco", "Dior"];
  const strokeCount = 3; // Número de frames de stroke

  hamsterTypes.forEach(type => {
    // Convertimos el tipo a minúsculas para construir la ruta de la imagen
    const typeLower = type.toLowerCase();
    for (let i = 1; i <= strokeCount; i++) {
      // Definimos las URLs de las imágenes según el patrón utilizado en setStrokeHamster
      // Nota: En el caso de '--bum' se utiliza la misma imagen que '--puff-before', 
      // por lo que solo es necesario precargarla una vez.
      const imageUrls = [
        `img/hamster/${typeLower}/stroke/puff${type}Stroke${i}.png`,
        `img/hamster/${typeLower}/stroke/puff${type}BeforeStroke${i}.png`,
        `img/hamster/${typeLower}/stroke/ear${type}Stroke${i}.png`,
        `img/hamster/${typeLower}/stroke/earAfter${type}2Stroke${i}.png`
      ];

      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        // Opcional: puedes agregar un listener para confirmar que se precargó correctamente
        // img.onload = () => console.log(`Imagen precargada: ${url}`);
      });
    }
  });
}

window.addEventListener("load", preloadHamsterImages);


function setStrokeHamster(hamsterElement) {
  if(hamsterElement.dataset.onAction){return;}
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



function setHamsterBackAnimation(idHamster, action, moving){
  let thisHamster = document.getElementById(idHamster);
  if(thisHamster.parentElement.id === "hitboxSlowWorld"
  || thisHamster.parentElement.id === "hitboxSlotBuyBiggie"
  || thisHamster.parentElement.id === "hitboxSlotBuyCoco"
  || thisHamster.parentElement.id === "hitboxSlotBuyDior"
  || thisHamster.parentElement.classList.contains("wheel")
  || thisHamster.parentElement.id === "filterUnderwater"){
    return;
  }

  thisHamster.dataset.onAction = "true";

  if(!moving){
    resetHmasterClassList(thisHamster);

    thisHamster.classList.add("pointingBack");
    setTimeout(() => {
      if(thisHamster.parentElement.id === "hitboxSlotDown"){
        thisHamster.style.animation = "actionGoBackDown 2s forwards";
      }else{
        thisHamster.style.animation = "actionGoBack 2s forwards";
      }
    }, 500);

    setTimeout(() => {
      thisHamster.classList.add("headMove");
      if(thisHamster.parentElement.id === "hitboxSlotUpLeft"){
        if(action == "eat"){
          let comida1Gif = document.getElementById("comida1Gif");
          comida1Gif.style.display = "block";
          comida1Gif.src = 'img/hamster/eatPraticles.gif' + "?t=" + new Date().getTime();
          setTimeout(() => {
            comida1Gif.style.display = "none";
            resetHmasterClassList(thisHamster);
            let tooltip1 = document.getElementById("comida1Tooltip");
            modifyFood("1", tooltip1, "-");
            fillHunger(thisHamster);
            startDecreasingStats(thisHamster);
            autoFillComederos("comida1");
            eructo(thisHamster);
            delete thisHamster.dataset.onAction;
          }, 10000);

        }else if(action == "drink"){
          let bebiendo1Gif = document.getElementById("bebiendo1Gif");
          bebiendo1Gif.style.display = "block";
          bebiendo1Gif.src = 'img/hamster/drinkPraticles.gif' + "?t=" + new Date().getTime();
          setTimeout(() => {
            bebiendo1Gif.style.display = "none";
            resetHmasterClassList(thisHamster);
            delete thisHamster.dataset.onAction;
          }, 10000);
        }
       
      }else if(thisHamster.parentElement.id === "hitboxSlotUpRight"){
        if(action == "eat"){
          let comida2Gif = document.getElementById("comida2Gif");
          comida2Gif.style.display = "block";
          comida2Gif.src = 'img/hamster/eatPraticles.gif' + "?t=" + new Date().getTime();
          setTimeout(() => {
            comida2Gif.style.display = "none";
            resetHmasterClassList(thisHamster);
            let tooltip2 = document.getElementById("comida2Tooltip");
            modifyFood("2", tooltip2, "-");
            fillHunger(thisHamster);
            startDecreasingStats(thisHamster);
            autoFillComederos("comida2");
            eructo(thisHamster);
            delete thisHamster.dataset.onAction;
          }, 10000);

        }else if(action == "drink"){
          let bebiendo2Gif = document.getElementById("bebiendo2Gif");
          bebiendo2Gif.style.display = "block";
          bebiendo2Gif.src = 'img/hamster/drinkPraticles.gif' + "?t=" + new Date().getTime();
          setTimeout(() => {
            bebiendo2Gif.style.display = "none";
            resetHmasterClassList(thisHamster);
            delete thisHamster.dataset.onAction;
          }, 10000);
        }
      }else if(thisHamster.parentElement.id === "hitboxSlotDown"){
        if(action == "eat"){
          let comida3Gif = document.getElementById("comida3Gif");
          comida3Gif.style.display = "block";
          comida3Gif.src = 'img/hamster/eatPraticles.gif' + "?t=" + new Date().getTime();
          setTimeout(() => {
            comida3Gif.style.display = "none";
            resetHmasterClassList(thisHamster);
            let tooltip3 = document.getElementById("comida3Tooltip");
            modifyFood("3", tooltip3, "-");
            fillHunger(thisHamster);
            startDecreasingStats(thisHamster);
            autoFillComederos("comida3");
            eructo(thisHamster);
            delete thisHamster.dataset.onAction;
          }, 10000);

        }else if(action == "drink"){
          let bebiendo3Gif = document.getElementById("bebiendo3Gif");
          bebiendo3Gif.style.display = "block";
          bebiendo3Gif.src = 'img/hamster/drinkPraticles.gif' + "?t=" + new Date().getTime();
          setTimeout(() => {
            bebiendo3Gif.style.display = "none";
            resetHmasterClassList(thisHamster);
            delete thisHamster.dataset.onAction;
          }, 10000);
        }
      }
    }, 2500);
  
    if(thisHamster.id === "dior"){
      thisHamster.style.setProperty('--puff', "url('img/hamster/dior/puffDiorEating.png')");
      thisHamster.style.setProperty('--puff-pointingBack-head', "url('img/hamster/dior/puffDiorEatingHead.png')");
      thisHamster.style.setProperty('--ear', "url('img/hamster/dior/earDiorEating.png')");
      setTimeout(() => {
        thisHamster.style.setProperty('--puff', "url('img/hamster/dior/puffDior.png')");
        thisHamster.style.setProperty('--ear', "url('img/hamster/dior/earDior.png')");
      }, 12500);
    }else if(thisHamster.id === "coco"){
      thisHamster.style.setProperty('--puff', "url('img/hamster/coco/puffCocoEating.png')");
      thisHamster.style.setProperty('--puff-pointingBack-head', "url('img/hamster/coco/puffCocoEatingHead.png')");
      setTimeout(() => {
        thisHamster.style.setProperty('--puff', "url('img/hamster/coco/puffCoco.png')");
      }, 12500);
    }else if(thisHamster.id === "biggie"){
      thisHamster.style.setProperty('--puff', "url('img/hamster/biggie/puffBiggieEating.png')");
      thisHamster.style.setProperty('--puff-pointingBack-head', "url('img/hamster/biggie/puffBiggieEatingHead.png')");
      setTimeout(() => {
        thisHamster.style.setProperty('--puff', "url('img/hamster/biggie/puffBiggie.png')");
      }, 12500);
    }

  }else{
    //right en %
    if(thisHamster.parentElement.id === "hitboxSlotUpLeft"){
      //console.log("setHamsterBackAnimation: hitboxSlotUpLeft");
      //rightBeber: 48%
      //rightComer: 77%
      if(action == "drink"){
        moveHamsterTo(thisHamster, 48, "drink");
      }else if(action == "eat"){
        moveHamsterTo(thisHamster, 77, "eat");
      }

    }else if(thisHamster.parentElement.id === "hitboxSlotUpRight"){
      //console.log("setHamsterBackAnimation: hitboxSlotUpRight");
      //rightBeber: 37%
      //rightComer: 13%
      if(action == "drink"){
        moveHamsterTo(thisHamster, 37, "drink");
      }else if(action == "eat"){
        moveHamsterTo(thisHamster, 13, "eat");
      }

    }else if(thisHamster.parentElement.id === "hitboxSlotDown"){
      //console.log("setHamsterBackAnimation: hitboxSlotDown");
      //rightBeber: 46%
      //rightComer: 72%
      if(action == "drink"){
        moveHamsterTo(thisHamster, 46, "drink");
      }else if(action == "eat"){
        moveHamsterTo(thisHamster, 72, "eat");
      }

    }
  }
  


}

modifiersInformationCont.addEventListener("click", serAllEructo);

function serAllEructo(){
  const hamsters = document.querySelectorAll(".hamster");
  hamsters.forEach(hamster => {
    eructo(hamster);
  });
}

function eructo(hamster) {
  if (Math.random() <= 0.4) {
    hamster.classList.add("eructando");
    hamster.classList.add("eructandokrp");

    setTimeout(() => {
      hamster.classList.remove("eructando");
    }, 1000);
    setTimeout(() => {
      hamster.classList.remove("eructandokrp");
    }, 2000);
  }
}

function moveHamsterTo(hamster, targetRight, action) {
  const hamsterTooltipContainer = hamster.querySelector(".hamsterTooltipContainer");

  // Definir factor de velocidad (puedes ajustar este valor)
  let speedFactor = parseFloat(5) || 1; 

  // Aseguramos que targetRight esté entre 0 y 100%
  targetRight = Math.max(0, Math.min(100, targetRight));

  // Obtener la posición actual usando el atributo "pos"
  let currentPos = parseFloat(hamster.getAttribute("pos"));
  if (isNaN(currentPos)) {
    currentPos = 0;
    hamster.setAttribute("pos", "0");
  }

  // Si ya está en la posición deseada, finalizar y llamar a setHamsterBackAnimation
  if (currentPos === targetRight) {
    hamster.classList.remove("walkAnim");
    hamster.setAttribute("y", "");
    hamster.classList.remove("y");
    hamsterTooltipContainer.classList.remove("y");
    setHamsterBackAnimation(hamster.id, action, false);
    return;
  }

  // Determinar la dirección de movimiento
  let direction = targetRight > currentPos ? 1 : -1;

  // Verificar que speedFactor esté definido y sea mayor que cero
  if (typeof speedFactor === "undefined" || speedFactor <= 0) {
    console.error("speedFactor no está definido o es <= 0. Abortando movimiento.");
    return;
  }

  // Calcular el tamaño del paso y el número total de pasos
  const step = 0.2 * speedFactor;
  const totalDistance = Math.abs(targetRight - currentPos);
  const totalSteps = Math.ceil(totalDistance / step);
  let currentStep = 0;

  // Agregar la clase que indica movimiento
  hamster.classList.add("walkAnim");

  const moveInterval = setInterval(() => {

    // Si se han completado los pasos necesarios, finalizar el movimiento
    if (currentStep >= totalSteps) {
      clearInterval(moveInterval);
      hamster.classList.remove("walkAnim");
      hamster.setAttribute("y", "");
      hamster.classList.remove("y");
      hamsterTooltipContainer.classList.remove("y");
      setHamsterBackAnimation(hamster.id, action, false);
      // Se ha eliminado la llamada a startCycle() para que no interfiera una vez finalizado el movimiento.
      return;
    }

    // Actualizar la posición según el paso y la dirección
    currentPos += direction * step;
    // Evitar sobrepasar el destino
    if ((direction > 0 && currentPos > targetRight) || (direction < 0 && currentPos < targetRight)) {
      currentPos = targetRight;
    }
    currentPos = Math.max(0, Math.min(100, currentPos));

    // Actualizar el estilo visual y el atributo "pos"
    hamster.style.right = `${currentPos}%`;
    hamster.setAttribute("pos", currentPos);

    // Actualizar clases según la dirección (opcional)
    if (direction < 0) {
      hamster.setAttribute("y", "true");
      hamster.classList.add("y");
      hamsterTooltipContainer.classList.add("y");
    } else {
      hamster.setAttribute("y", "");
      hamster.classList.remove("y");
      hamsterTooltipContainer.classList.remove("y");
    }

    currentStep++;
  }, 50); // Actualización cada 50ms
}



/* COMEDEROS */

const comidaHitboxes = document.querySelectorAll(".comidaHitbox");

// Variable global para almacenar el objeto de resourcesFoodDrink
let currentResourcesFoodDrink = null;

comidaHitboxes.forEach(hitbox => {
  // Obtenemos el id del tooltip correspondiente, por ejemplo "comida1Tooltip"
  const tooltipId = hitbox.id.replace('Hitbox', 'Tooltip');
  const tooltip = document.getElementById(tooltipId);

  hitbox.addEventListener('mouseenter', () => {
    tooltip.style.transition = "clip-path 0.3s ease 0.1s, margin-top 0.7s ease";
    tooltip.classList.add('active');
  });

  hitbox.addEventListener('mouseleave', () => {
    if(checkboxTooltipsStatesShown){return;}
    tooltip.style.transition = "clip-path 0.3s ease 0.18s, margin-top 0.7s ease";
    tooltip.classList.remove('active');
  });

  hitbox.addEventListener('click', () => {
    const indexStr = hitbox.id.match(/\d+/)[0];
    modifyFood(indexStr, tooltip, "+");
  });
});

function modifyFood(indexStr, tooltip, action){
  const currentTooltipValue = Number(tooltip.textContent);
  const currentTomatoSliceValue = Number(tomatoSliceLabel.textContent);

  if (currentTooltipValue <= 10 && currentTooltipValue >= 0 && currentTomatoSliceValue > 0) {
    let newTooltipValue;
    if (action === "+") {
      if (currentTooltipValue >= 10) { return; }
      if(parseInt(tomatoSliceLabel.textContent) < 1){return;}
      newTooltipValue = currentTooltipValue + 1;

      tomatoSliceLabel.textContent = currentTomatoSliceValue - 1;
      actualizarTomatosSliceUsuario(idLogeado, currentTomatoSliceValue - 1);
    } else if (action === "-") {
      if (currentTooltipValue <= 0) { return; }
      newTooltipValue = currentTooltipValue - 1;
    }    
    tooltip.textContent = newTooltipValue;
    setResourcesFoodDrinkInDB(idLogeado, indexStr, newTooltipValue);

    let comida = document.getElementById("comida" + indexStr);
    
    if (newTooltipValue === 0) {
      // Si el nuevo valor es 0, ocultamos la imagen y removemos el src
      comida.style.display = "none";
      comida.removeAttribute("src");
    } else {
      // Si es mayor que 0, mostramos la imagen y asignamos el src correcto
      comida.style.display = "block";
      comida.src = "img/hamster/comida/comida" + newTooltipValue + ".png";
    }
  }
}

getResourcesFoodDrinkFromDB(idLogeado);






/******************************************************
 * 1) OBTENER RESOURCES FOOD DRINK DE LA BASE DE DATOS
 * - Se sigue la misma estructura de conexión que en los métodos iniciales.
 * - Si no existe o es inválido, se crea un objeto por defecto.
 * - Se asigna cada valor del arreglo "feeders" a los tooltips (.comidaTooltip)
 ******************************************************/
async function getResourcesFoodDrinkFromDB(idLogeado) {
  try {
    const url = `${supabaseUrl}?id=eq.${idLogeado}`;
    
    const response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
    });
    
    if (!response.ok) {
      console.error("Error al obtener resourcesFoodDrink:", response.statusText);
      return null;
    }
    
    const data = await response.json();
    
    // Si no existe el registro, se crea uno por defecto
    if (data.length === 0) {
      console.warn("No se encontró el registro del usuario. Creando por defecto...");
      const defaultResources = getDefaultResourcesFoodDrink();
      await setResourcesFoodDrinkInDB(idLogeado, defaultResources);
      assignFeedersToTooltips(defaultResources.feeders);
      currentResourcesFoodDrink = defaultResources;
      return defaultResources;
    }
    
    // Se obtiene el contenido del campo resourcesFoodDrink (almacenado como JSON)
    let resourcesText = data[0].resourcesFoodDrink;
    
    // Si el campo está vacío, se crea el objeto por defecto
    if (!resourcesText) {
      console.warn("El campo resourcesFoodDrink está nulo/vacío. Creando por defecto...");
      const defaultResources = getDefaultResourcesFoodDrink();
      await setResourcesFoodDrinkInDB(idLogeado, defaultResources);
      assignFeedersToTooltips(defaultResources.feeders);
      currentResourcesFoodDrink = defaultResources;
      return defaultResources;
    }
    
    // Intentamos parsear el texto a objeto
    let resourcesObj;
    try {
      resourcesObj = JSON.parse(resourcesText);
    } catch (err) {
      console.error("Error al parsear JSON de resourcesFoodDrink. Se usará objeto por defecto:", err);
      const defaultResources = getDefaultResourcesFoodDrink();
      await setResourcesFoodDrinkInDB(idLogeado, defaultResources);
      assignFeedersToTooltips(defaultResources.feeders);
      currentResourcesFoodDrink = defaultResources;
      return defaultResources;
    }
    
    // Validamos la estructura: debe tener un arreglo "feeders"
    if (!resourcesObj.feeders || !Array.isArray(resourcesObj.feeders)) {
      console.warn("Estructura inválida en resourcesFoodDrink. Creando por defecto...");
      const defaultResources = getDefaultResourcesFoodDrink();
      await setResourcesFoodDrinkInDB(idLogeado, defaultResources);
      assignFeedersToTooltips(defaultResources.feeders);
      currentResourcesFoodDrink = defaultResources;
      return defaultResources;
    }
    
    // Asignamos cada valor del arreglo a los tooltips (.comidaTooltip)
    assignFeedersToTooltips(resourcesObj.feeders);
    currentResourcesFoodDrink = resourcesObj;
    
    return resourcesObj;
  } catch (error) {
    console.error("Error en getResourcesFoodDrinkFromDB:", error);
    return null;
  }
}

/**
 * Asigna los valores del arreglo "feeders" a los elementos con la clase .comidaTooltip,
 * en el orden en que se encuentren en el DOM.
 */
function assignFeedersToTooltips(feedersArray) {
  const tooltips = document.querySelectorAll('.comidaTooltip');
  for (let i = 0; i < feedersArray.length && i < tooltips.length; i++) {
    tooltips[i].textContent = feedersArray[i];
    
    // Obtenemos la imagen correspondiente (usando i+1, ya que los IDs son comida1, comida2, etc.)
    let comida = document.getElementById("comida" + (i + 1));
    if (feedersArray[i] === 0) {
      // Si el valor es 0, ocultamos la imagen y removemos el src
      comida.style.display = "none";
      comida.removeAttribute("src");
    } else {
      // Si es mayor que 0, mostramos la imagen y actualizamos el src
      comida.style.display = "block";
      comida.src = "img/hamster/comida/comida" + feedersArray[i] + ".png";
    }
  }
}

/******************************************************
 * 2) GUARDAR RESOURCES FOOD DRINK EN LA BASE DE DATOS
 * Permite dos formas de uso:
 *   a) Actualizar el objeto completo (se pasa un objeto como segundo argumento).
 *   b) Actualizar un único valor: se pasa una cadena ("1", "2" o "3") y, como tercer argumento,
 *      el nuevo valor para esa posición.
 * En ambos casos, NO se re-asignan los tooltips.
 ******************************************************/
async function setResourcesFoodDrinkInDB(idLogeado, param, newValue) {
  // Caso (a): Se actualiza el objeto completo.
  if (typeof param === "object" && newValue === undefined) {
    currentResourcesFoodDrink = param;
    return await patchResourcesFoodDrink(idLogeado, currentResourcesFoodDrink);
  }
  // Caso (b): Se actualiza un único valor.
  else if (typeof param === "string" && newValue !== undefined) {
    // Usamos la variable global en lugar de llamar nuevamente a getResourcesFoodDrinkFromDB
    let resourcesObj = currentResourcesFoodDrink;
    if (!resourcesObj) {
      resourcesObj = getDefaultResourcesFoodDrink();
      currentResourcesFoodDrink = resourcesObj;
    }
    // Convertimos la cadena "1", "2" o "3" en un índice (0, 1 o 2)
    const index = parseInt(param, 10) - 1;
    if (index < 0 || index >= resourcesObj.feeders.length) {
      console.error("Índice inválido para feeders:", param);
      return null;
    }
    // Actualizamos el valor del feeder en la posición indicada (aseguramos que sea numérico)
    resourcesObj.feeders[index] = Number(newValue);
    currentResourcesFoodDrink = resourcesObj;
    return await patchResourcesFoodDrink(idLogeado, resourcesObj);
  } else {
    console.error("Parámetros inválidos para setResourcesFoodDrinkInDB");
    return null;
  }
}

/**
 * Función auxiliar que envía la petición PATCH para actualizar resourcesFoodDrink en la base de datos.
 * No se actualizan los tooltips aquí, ya que se hace manualmente en el click.
 */
async function patchResourcesFoodDrink(idLogeado, resourcesObj) {
  try {
    const url = `${supabaseUrl}?id=eq.${idLogeado}`;
    const body = {
      resourcesFoodDrink: JSON.stringify(resourcesObj),
    };
    
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(body),
    });
    
    if (!response.ok) {
      const errorData = await response.text();
      console.error("Error al guardar resourcesFoodDrink:", response.statusText, errorData);
      throw new Error("Error en la actualización de resourcesFoodDrink: " + response.statusText);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en patchResourcesFoodDrink:", error);
    return null;
  }
}

/******************************************************
 * 3) OBJETO POR DEFECTO (resourcesFoodDrink)
 * Inicializa:
 *   - feeders: Arreglo con tres valores 0 (cada valor representa un comedero, rango 0-10)
 ******************************************************/
function getDefaultResourcesFoodDrink() {
  return {
    feeders: [0, 0, 0],
  };
}








let explosionTimeoutId;
let isResetToContainer = false;
// Funciones para manejar el arrastre
function startDragHamster(e, hamsterElement) {
  if (hamsterElement.dataset.onAction) return;
  if (isDragging) return; // Prevenir arrastre si ya está en proceso

  if (hamsterElement.checkForNeedFoodInterval) {
    clearInterval(hamsterElement.checkForNeedFoodInterval);
    delete hamsterElement.checkForNeedFoodInterval;
  }

  isDragging = true;
  currentHamster = hamsterElement;


  if (hamsterElement.closest('.wrapper')) {
    currentHamster.classList.remove("exhaust");
    currentHamster.classList.remove("exhaustSingle");
    currentHamster.classList.remove("tong");
    currentHamster.classList.remove("tongU");
    modifyHamsterSpeed(hamster, setHamsterSpeed, 0.0, true);
  }

  if (explosionTimeoutId) {
    clearTimeout(explosionTimeoutId); // Cancelar la creación de la imagen de explosión
    explosionTimeoutId = null; // Limpiar el identificador
    //console.log("Hamster rescatado en el aire, imagen de explosión cancelada.");
  }

  // Obtener la posición actual del hámster
  const rect = hamsterElement.getBoundingClientRect();
  originalX = rect.left + window.scrollX;
  originalY = rect.top + window.scrollY;

  if(hamsterElement.getAttribute("y")){
    hamsterElement.classList.add("grabAnimY");
  }else{
    hamsterElement.classList.add("grabAnim");
  }

  setHamster(hamsterElement);
  hideTooltipHamster(hamsterElement);
  hideTooltipHamsterForce(hamsterElement);




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


function estaOcupadoHitbox(currentHamster, hitbox) {
  if (hitbox.id === 'hitboxSlotWeel') {
    // Para el hitbox de la rueda, revisamos en el contenedor .wheel
    const wheelHamsters = Array.from(document.querySelectorAll('.wheel .hamster'))
      .filter(ham => ham !== currentHamster);
    return wheelHamsters.length > 0 ? 1 : 0;
  } else {
    // Para los demás hitboxes, comprobamos directamente en el elemento
    const hitboxHamsters = Array.from(hitbox.querySelectorAll('.hamster'))
      .filter(ham => ham !== currentHamster);
    return hitboxHamsters.length > 0 ? 1 : 0;
  }
}

let isStoppingDrag = false;
function stopDragHamster(e) {
  if (!isDragging || !currentHamster || isStoppingDrag) return;
  isStoppingDrag = true;

  // Remover los event listeners
  document.removeEventListener('mousemove', onDragHamster);
  document.removeEventListener('mouseup', stopDragHamster, hideTooltipHamster);

  if(currentHamster.getAttribute("y")){
    currentHamster.classList.remove("grabAnimY");
  }else{
    currentHamster.classList.remove("grabAnim");
  }
  
  hideTooltipHamsterForce(currentHamster);

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

      // Calcular la posición del hámster relativa al hitbox
      const offsetX = e.clientX - hitboxRect.left;
      const offsetY = e.clientY - hitboxRect.top;


      let estaOcupHitbox = estaOcupadoHitbox(currentHamster, hitbox);
      if (estaOcupHitbox > 0 && hitbox.id !== 'hitboxSlotWorld') {
        // Si está ocupado, devolver al contenedor original
        if (originalParent.closest('.wheel')) {
          //console.log("originalParent.closest('.wheel')");

          console.log("stopDragHamster: Ocupado, devolviendo a wheel");
          isResetToContainer = true;
          handleWheelContainer(originalParent, originalParent);
          modifyHamsterSpeed(hamster, setHamsterSpeed, 1.5, false);
          stopSpecificInterval(currentHamster.id, "energy");
          startDecreasingEnergy(currentHamster.id);

          startPeriodicStatsUpdate(idLogeado);
          resetDragVariables();
        }else{
          //console.log("!originalParent.closest('.wheel')");

          console.log("stopDragHamster: Ocupado, devolviendo a Normal");
          currentHamster.style.transition = "";
          isResetToContainer = true;
          cloneHamsterToContainer(originalParent, offsetX, offsetY);

          stopSpecificInterval(currentHamster.id, "energy");
          startFillingEnergy(currentHamster.id);
          startDecreasingStats(currentHamster.id);
          if (originalParent.id === 'hitboxSlotWorld') {}else{
            checkForNeedFood(currentHamster);
          }

          resetDragVariables();
        }
        //console.log("Return if wheel ocupate");
        return;
      }
    
      

      if (hitbox.id === 'hitboxSlotWeel') {
        const wheel = document.querySelector('.wheel');
        const existingWheelHamster = wheel.querySelector('.hamster');
        if (!existingWheelHamster) {
          actualizarSlotHamster(currentHamster, hitbox);
        }
        //console.log("stopDragHamster: Moviendo a hitboxSlotWeel");

        isResetToContainer = false;
        handleWheelContainer(originalParent, hitbox);
        modifyHamsterSpeed(hamster, setHamsterSpeed, 1.5, false);
        stopSpecificInterval(currentHamster.id, "energy");
        startDecreasingEnergy(currentHamster.id);

        startPeriodicStatsUpdate(idLogeado);
        resetDragVariables();
        return;
      }

      if (hitbox.id === 'hitboxSlotWorld') {
        //console.log("stopDragHamster: Moviendo a hitboxSlotWorld");

        hideTooltipHamsterForce(currentHamster);
        isResetToContainer = false;
        currentHamster.setAttribute("pos", "");
        cloneHamsterToContainer(hitbox, offsetX, offsetY);
        actualizarSlotHamster(currentHamster, hitbox);

        stopSpecificInterval(currentHamster.id, "energy");
        startFillingEnergy(currentHamster.id);
        startDecreasingStats(currentHamster.id);

        resetDragVariables();
        return;
      }

      //console.log("stopDragHamster: Moviendo a Noramal");
      // Clonar el hámster y moverlo al hitbox
      currentHamster.setAttribute("pos", "");
      isResetToContainer = false;
      hideTooltipHamsterForce(currentHamster);
      cloneHamsterToContainer(hitbox, offsetX, offsetY);
      actualizarSlotHamster(currentHamster, hitbox);

      stopSpecificInterval(currentHamster.id, "energy");
      startFillingEnergy(currentHamster.id);
      startDecreasingStats(currentHamster.id);
      checkForNeedFood(currentHamster);

      resetDragVariables();
      return;
    }
  });

  if (!droppedInHitbox) {
    // Si no se suelta en ningún hitbox, devolver al contenedor original
    
    //console.log("stopDragHamster: No se dropeó en una hitbox");
    if (originalParent.closest('.wheel')) {
      isResetToContainer = true;
      handleWheelContainer(originalParent, originalParent);
      modifyHamsterSpeed(hamster, setHamsterSpeed, 1.5, false);
      stopSpecificInterval(currentHamster.id, "energy");
      startDecreasingEnergy(currentHamster.id);

      startPeriodicStatsUpdate(idLogeado);
      resetDragVariables();
    }else{
      isResetToContainer = true;
      cloneHamsterToContainer(originalParent, offsetX, offsetY);

      stopSpecificInterval(currentHamster.id, "energy");
      startFillingEnergy(currentHamster.id);
      startDecreasingStats(currentHamster.id);
      if (originalParent.id === 'hitboxSlotWorld') {}else{
        checkForNeedFood(currentHamster);
      }

      resetDragVariables();
    }
  }

  resetDragVariables();
}




function setPositionHamster(currentHamster, hitbox, originalContainer) {
  //console.log("Start moving...");
  //console.log("hitbox");
  //console.log(hitbox);
  //console.log("originalContainer");
  //console.log(originalContainer);
  
  const hamsterTooltipContainer = currentHamster.querySelector(".hamsterTooltipContainer");

  if(hitbox.id == "hitboxSlotWeel" || originalContainer.classList == "wheel"){
      currentHamster.setAttribute("y", "");
      currentHamster.classList.remove("y");
      hamsterTooltipContainer.classList.remove("y");
      currentHamster.classList.remove("grabAnim");
      currentHamster.classList.remove("grabAnimY");
      currentHamster.classList.remove("fallingCloseAnim");
      currentHamster.classList.remove("fallingLess30Anim");
      currentHamster.classList.remove("fallingLess30AnimY");
      currentHamster.classList.remove("fallingAnim");
      currentHamster.classList.remove("fallingAnimY");

    return;
  }

  let pos = parseFloat(currentHamster.getAttribute("pos")) || 50; // Posición inicial centrada
  let isMovingUp = Math.random() < 0.5; // Dirección inicial aleatoria

  let speedFactor;
  let restFactor;

  if (hitbox.id == "hitboxSlotWorld") {
    speedFactor = parseFloat(1) || 1; // Factor de velocidad
    restFactor = parseFloat(1) || 1; // Factor de tiempo de detención
  } else {
    speedFactor = parseFloat(5) || 1; // Factor de velocidad
    restFactor = parseFloat(6) || 1; // Factor de tiempo de detención
  }

  function walk(distance, direction) {
    const step = 0.2 * speedFactor; // Tamaño del paso ajustado por velocidad
    let targetPos = pos + direction * distance; // Posición objetivo inicial
  
    // Asegurar que el hamster llegue al borde si es necesario
    if (targetPos > 100) {
      targetPos = 100;
      direction = -1; // Cambiar dirección después de llegar al borde derecho
    } else if (targetPos < 0) {
      targetPos = 0;
      direction = 1; // Cambiar dirección después de llegar al borde izquierdo
    }
  
    const totalDistance = Math.abs(targetPos - pos);
    const totalSteps = Math.ceil(totalDistance / step); // Número total de pasos
    let currentStep = 0;
    currentHamster.classList.add("walkAnim");
  
    const walkInterval = setInterval(() => {
      // Si se activa la acción, detener el ciclo y esperar a que vuelva a ser false
      if (currentHamster.dataset.onAction) {
        clearInterval(walkInterval);
        currentHamster.classList.remove("walkAnim");
        // Esperar a que se desactive onAction para reiniciar el ciclo desde la posición actual
        const waitForActionFalse = setInterval(() => {
          if (!currentHamster.dataset.onAction) {
            clearInterval(waitForActionFalse);
            // Actualizamos la variable pos a la posición actual del hamster
            pos = parseFloat(currentHamster.getAttribute("pos"));
            startCycle(); // Inicia un nuevo ciclo desde el pos actual
          }
        }, 100); // Comprobar cada 100ms
        return;
      }
  
      // Pausa aleatoria durante el movimiento
      if (Math.random() < 0.02) { // 2% de probabilidad de pausa
        clearInterval(walkInterval);
        currentHamster.classList.remove("walkAnim");
        setTimeout(() => {
          walk(targetPos - pos, direction); // Continúa desde donde pausó
        }, Math.random() * 3000 + 500); // Pausa entre 0.5s y 3.5s
        return;
      }
  
      // Simular interacción con otros hamsters
      if (Math.random() < 0.05) { // 5% de probabilidad de interacción
        direction = -direction; // Cambiar dirección al cruzarse
        clearInterval(walkInterval);
        currentHamster.classList.remove("walkAnim");
        walk(distance, direction); // Reiniciar movimiento en la nueva dirección
        return;
      }
  
      if (currentStep >= totalSteps) {
        clearInterval(walkInterval);
        currentHamster.classList.remove("walkAnim");
        // Detenerse entre 1 y 5 segundos ajustado por el factor de detención
        const restTime = (Math.random() * 9000 + 1000) * restFactor;
        setTimeout(() => {
          // 50% de probabilidad de girar
          if (Math.random() < 0.5) {
            direction = -direction;
          }
          startCycle(); // Reiniciar el ciclo
        }, restTime);
        return;
      }
  
      // Actualizar posición
      pos += direction * step;
      pos = Math.max(0, Math.min(100, pos)); // Limitar la posición entre 0% y 100%
      currentHamster.style.right = `${pos}%`;
      currentHamster.setAttribute("pos", pos);
  
      // Actualizar clases y atributos según la dirección
      if (direction < 0) {
        currentHamster.setAttribute("y", "true");
        currentHamster.classList.add("y");
        hamsterTooltipContainer.classList.add("y");
      } else {
        currentHamster.setAttribute("y", "");
        currentHamster.classList.remove("y");
        hamsterTooltipContainer.classList.remove("y");
      }
  
      currentStep++;
    }, 50); // Actualización cada 50ms
  }
  
  // Función para iniciar un ciclo de movimiento
  function startCycle() {
    // Generar una distancia aleatoria entre 10 y 70
    const distance = Math.random() * (70 - 10) + 10;
  
    // Determinar dirección: 1 para derecha, -1 para izquierda
    let direction = Math.random() < 0.5 ? -1 : 1;
  
    // Ajustar dirección si el hamster está cerca de un borde
    if (pos + direction * distance > 100) {
      direction = -1;
    } else if (pos + direction * distance < 0) {
      direction = 1;
    }
  
    // Iniciar el movimiento desde la posición actual (guardada en pos)
    walk(distance, direction);
  }
  
  // Iniciar el primer ciclo
  startCycle();
}







async function handleWheelContainer(originalContainer, hitbox) {
  const wheel = document.querySelector('.wheel');

  // Verificar si ya hay un hámster en la rueda
  const existingWheelHamster = wheel.querySelector('.hamster');
  if (existingWheelHamster) {
    // Clonar el hámster y devolverlo al contenedor original
    const clonedHamster = currentHamster.cloneNode(true);

    // Añadir eventos al hámster clonado
    addHamsterEventListeners(clonedHamster);

    // Ajustar estilos del clon
    clonedHamster.style.position = 'absolute';
    clonedHamster.style.zIndex = '';
    clonedHamster.style.left = '';
    clonedHamster.style.right = '';
    clonedHamster.style.top = '';
    clonedHamster.style.bottom = '';
    clonedHamster.style.transform = '';

    let pos = clonedHamster.getAttribute("pos");
    clonedHamster.style.right = `${pos}%`;
    if (originalContainer.id === 'hitboxSlotWorld') {
      clonedHamster.style.bottom = '0px';
    }
    if (originalContainer.id === 'hitboxSlotUpLeft') {
      clonedHamster.style.bottom = '13px';
    }
    if (originalContainer.id === 'hitboxSlotUpRight') {
      clonedHamster.style.bottom = '13px';
    }
    if (originalContainer.id === 'hitboxSlotDown') {
      clonedHamster.style.bottom = '30px';
    }

    // Remover el hámster original
    currentHamster.remove();

    // Agregar el clon al contenedor original
    originalContainer.appendChild(clonedHamster);

    currentHamster.setAttribute("slot", originalContainer.id);
    // Configurar imágenes para el hámster clonado
    setHamster(clonedHamster);
    return; // Salir de la función
  }

  // Si la rueda está libre, agregar el hámster
  const clonedHamster = currentHamster.cloneNode(true);

  // Añadir eventos al hámster clonado
  addHamsterEventListeners(clonedHamster);

  // Remover el hámster original
  currentHamster.remove();

  // Ajustar posición y estilo del hámster para la rueda
  clonedHamster.style.position = '';
  clonedHamster.style.left = '';
  clonedHamster.style.top = '';
  clonedHamster.style.bottom = '';
  clonedHamster.style.transform = '';
  clonedHamster.style.zIndex = '';

  // Agregarlo a la rueda
  const wheelSupport = wheel.querySelector('.wheel-support');
  wheel.insertBefore(clonedHamster, wheelSupport.nextSibling);

  clonedHamster.setAttribute("slot", hitbox.id);

  // Configurar imágenes
  setHamster(clonedHamster);
  clonedHamster.style.removeProperty("right");
  showTooltipHamsterForce(clonedHamster);
  setPositionHamster(clonedHamster, hitbox, originalContainer);
}


// Función para clonar el hámster al contenedor especificado
async function cloneHamsterToContainer(container, offsetX, offsetY) {
  if (!container) return;

  isInWheel = false;

  const clonedHamster = currentHamster.cloneNode(true);

  // Añadir eventos al hámster clonado
  addHamsterEventListeners(clonedHamster);

  // Remover el hámster original
  currentHamster.remove();

  // Agregar el hámster al contenedor
  container.appendChild(clonedHamster);

  // Actualizar el `currentHamster` al clon
  currentHamster = clonedHamster;

  currentHamster.setAttribute("slot", container.id);

  posicionarHamsterAlDrop(currentHamster, offsetX, offsetY, container);
}

function posicionarHamsterAlDrop(currentHamster, offsetX, offsetY, hitbox) {
  // Obtener las dimensiones del hitbox
  const hitboxWidth2 = hitbox.offsetWidth;
  const hitboxHeight2 = hitbox.offsetHeight;

  // Calcular las posiciones en porcentaje desde el borde derecho e inferior
  const rightPercentage = ((hitboxWidth2 - offsetX) / hitboxWidth2) * 100;
  const bottomPercentage = ((hitboxHeight2 - offsetY) / hitboxHeight2) * 100;

    // Ajustar el hámster para el contenedor
    currentHamster.style.position = 'absolute';
    currentHamster.style.zIndex = '';
    currentHamster.style.left = '';
    currentHamster.style.top = '';
    currentHamster.style.zIndex = '';
    currentHamster.style.transition = 'none'; // Sin transición al principio
    currentHamster.classList.remove("grabAnim");
    currentHamster.classList.remove("grabAnimY");

    if (hitbox.id === 'hitboxSlotBuyDior' ||
       hitbox.id === 'hitboxSlotBuyCoco' ||
       hitbox.id === 'hitboxSlotBuyBiggie'
    ) {
      currentHamster.style.zIndex = '-100';
    }

    let hitboxHeight = hitbox.offsetHeight;
    let releasePercentage = ((hitboxHeight - offsetY) / hitboxHeight) * 100;

    let setTimeoutMs = 1000;
    if(currentHamster.getAttribute("pos")){
      let pos = currentHamster.getAttribute("pos");
      currentHamster.style.right = `${pos}%`;

      if (hitbox.id === 'hitboxSlotWorld') {
        currentHamster.style.bottom = '0px';
      }
      if (hitbox.id === 'hitboxSlotUpLeft') {
        currentHamster.style.bottom = '13px';
      }
      if (hitbox.id === 'hitboxSlotUpRight') {
        currentHamster.style.bottom = '13px';
      }
      if (hitbox.id === 'hitboxSlotDown') {
        currentHamster.style.bottom = '30px';
      }
      
      if (hitbox.id === 'hitboxSlotBuyDior' ||
        hitbox.id === 'hitboxSlotBuyCoco' ||
        hitbox.id === 'hitboxSlotBuyBiggie'
      ) {
        currentHamster.style.bottom = '3px';
      }
    }else{
      currentHamster.style.right = `${rightPercentage}%`;
      currentHamster.setAttribute("pos", rightPercentage);
      //console.log(currentHamster.classList);
      //console.log(currentHamster.getAttribute("pos"));
      currentHamster.style.bottom = `${bottomPercentage}%`;

      if (hitbox.id === 'hitboxSlotWorld') {
        if (releasePercentage > 35) {
          if(currentHamster.getAttribute("y")){
            currentHamster.classList.add("fallingAnimY");
          }else{
            currentHamster.classList.add("fallingAnim");
          }
          currentHamster.classList.add("active");

          setTimeoutMs = 2000;
        } else if (releasePercentage < 15) { 
          currentHamster.classList.add("fallingCloseAnim");

        } else {
          if(currentHamster.getAttribute("y")){
            currentHamster.classList.add("fallingLess30AnimY");
          }else{
            currentHamster.classList.add("fallingLess30Anim");
          }
        }

      }else if(hitbox.id === 'hitboxSlotUpLeft' || hitbox.id === 'hitboxSlotUpRight'
      || hitbox.id === 'hitboxSlotDown'){
        currentHamster.classList.add("fallingCloseAnim");
      }

      hideTooltipHamsterForce(currentHamster);
      hideTooltipHamster(currentHamster);
    }



    // Configurar la transición después de agregar el clon
    requestAnimationFrame(() => {
      currentHamster.style.transition = 'bottom 1s ease-in-out'; // Activar transición
      currentHamster.style.bottom = '0px';
      if (hitbox.id === 'hitboxSlotWorld') {
        currentHamster.style.bottom = '0px';
      }
      if (hitbox.id === 'hitboxSlotUpLeft') {
        currentHamster.style.bottom = '13px';
      }
      if (hitbox.id === 'hitboxSlotUpRight') {
        currentHamster.style.bottom = '13px';
      }
      if (hitbox.id === 'hitboxSlotDown') {
        currentHamster.style.bottom = '30px';
      }
      if (hitbox.id === 'hitboxSlotBuyDior' ||
        hitbox.id === 'hitboxSlotBuyCoco' ||
        hitbox.id === 'hitboxSlotBuyBiggie'
      ) {
        currentHamster.style.bottom = '3px';
      }
    });

    if (hitbox.id === 'hitboxSlotWorld') {
      if (releasePercentage > 35) {
        const bumpImg = document.createElement('img');
        bumpImg.src = 'img/hamster/drop/bump.gif' + "?t=" + new Date().getTime();
        bumpImg.classList.add("bumpImg");
        bumpImg.style.right = `${rightPercentage}%`;
        bumpImg.style.bottom = "-25px";

        if(!isResetToContainer){
          explosionTimeoutId = setTimeout(() => {
            currentHamster.classList.remove("active");
            hitbox.appendChild(bumpImg);
            //console.log("Imagen de explosión creada.");
            explosionTimeoutId = null; // Limpiar el identificador después de que se ejecute
          }, 800);
        }

        setTimeout(() => {
          hitbox.removeChild(bumpImg);
        }, 1900);
      }
    }


    setTimeout(() => {
      if (hitbox.id === 'hitboxSlotWorld') {
        if (releasePercentage > 35) {
          if(currentHamster.getAttribute("y")){
            currentHamster.classList.remove("fallingAnimY");
          }else{
            currentHamster.classList.remove("fallingAnim");
          }

        } else if (releasePercentage < 15) { 
          currentHamster.classList.remove("fallingCloseAnim");

        } else {
          if(currentHamster.getAttribute("y")){
            currentHamster.classList.remove("fallingLess30AnimY");
          }else{
            currentHamster.classList.remove("fallingLess30Anim");
          }
        }
        
      }else if(hitbox.id === 'hitboxSlotUpLeft' || hitbox.id === 'hitboxSlotUpRight'
      || hitbox.id === 'hitboxSlotDown'){
        currentHamster.classList.remove("fallingCloseAnim");
      }

      showTooltipHamsterForce(currentHamster);
      setPositionHamster(currentHamster, hitbox, hitbox);
      resetHmasterClassList(currentHamster);
    }, setTimeoutMs);

}

function resetHmasterClassList(currentHamster) {
  currentHamster.classList.remove("grabAnim");
  currentHamster.classList.remove("grabAnimY");
  currentHamster.classList.remove("fallingCloseAnim");
  currentHamster.classList.remove("fallingLess30Anim");
  currentHamster.classList.remove("fallingLess30AnimY");
  currentHamster.classList.remove("fallingAnim");
  currentHamster.classList.remove("fallingAnimY");
  currentHamster.classList.remove("walkAnim");
  currentHamster.classList.remove("exhaust");
  currentHamster.classList.remove("exhaustSingle");
  currentHamster.classList.remove("tong");
  currentHamster.classList.remove("tongU");
  currentHamster.classList.remove("pointingBack");
  currentHamster.style.animation = "";
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

function mouseMoveListenerTenderoHead(event) {
    const mouseX = event.clientX; // Posición del cursor en el eje X
    const tenderoRect = tenderoHeadHitbox.getBoundingClientRect(); // Posición y tamaño del hitbox
    
    // Calculamos la distancia relativa al centro del hitbox
    const tenderoCenterX = tenderoRect.left + tenderoRect.width / 2; // Centro del hitbox en el eje X
    const distanceX = mouseX - tenderoCenterX; // Distancia relativa (negativa si está a la izquierda)
    //console.log("Distancia relativa a hitbox: "+distanceX);

  
  if (distanceX > -10 && distanceX < 10) { // Muy cerca (entre -10 y 10)
      tenderoHead.src = "img/hamster/tendero/head/head4.png";
  } else if (distanceX >= 10 && distanceX < 50) { // A la derecha (10 a 50)
      tenderoHead.src = "img/hamster/tendero/head/head5.png";
  } else if (distanceX > -50 && distanceX <= -10) { // A la izquierda (-50 a -10)
      tenderoHead.src = "img/hamster/tendero/head/head3.png";
  } else if (distanceX >= 50 && distanceX < 100) { // Más a la derecha (50 a 100)
      tenderoHead.src = "img/hamster/tendero/head/head6.png";
  } else if (distanceX > -100 && distanceX <= -50) { // Más a la izquierda (-100 a -50)
      tenderoHead.src = "img/hamster/tendero/head/head2.png";
  } else if (distanceX >= 100) { // Muy a la derecha (100+)
      tenderoHead.src = "img/hamster/tendero/head/head7.png";
  } else if (distanceX <= -100) { // Muy a la izquierda (-100 o menos)
      tenderoHead.src = "img/hamster/tendero/head/head1.png";
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
const cycles = [
    "img/hamster/tendero/cesta/cesta1.png",
    "img/hamster/tendero/cesta/cesta2.png",
    "img/hamster/tendero/cesta/cesta3.png",
    "img/hamster/tendero/cesta/cesta2.png",
    "img/hamster/tendero/cesta/cesta1.png"
];

let currentFrameIndex = 0;
let frameSpeed = 300;

function changeImage() {
    tenderoCesta.src = cycles[currentFrameIndex];
    currentFrameIndex = (currentFrameIndex + 1) % cycles.length; // Reinicia el índice al final del array
    setTimeout(changeImage, frameSpeed);
}

// Iniciar el cambio continuo de imágenes
changeImage();

cestaHibox.addEventListener("mouseenter", habilitarCesta);
cestaHibox.addEventListener("mousemove", habilitarCesta);
cestaHibox.addEventListener("mouseleave", deshabilitarCesta);

// Función para mostrar la cesta y cambiar la imagen del tendero
function habilitarCesta() {
  if(isDialogActive){
    if(dialogFlex.textContent.includes("5")){
      return;
    }
  }

  if (tenderoCesta && tenderoBody) {
    if(tenderoMoving){
      return;
    }
    tenderoCesta.style.display = "block"; // Muestra la cesta
    tenderoBody.src = "img/hamster/tendero/body.png"; // Cambia la imagen del tendero
    //console.log("habilitarCesta");
  }
}

// Función para ocultar la cesta y cambiar la imagen del tendero
function deshabilitarCesta() {
  if(isDialogActive){
    if(!dialogFlex.textContent.includes("5")){
      return;
    }
  }

  if (tenderoCesta && tenderoBody) {
    if(tenderoMoving){
      return;
    }
    tenderoCesta.style.display = "none"; // Oculta la cesta
    tenderoBody.src = "img/hamster/tendero/girando/right/fin/tenderoGirandoRight1_noHead.png"; // Cambia la imagen del tendero
    //console.log("deshabilitarCesta");
  }
}




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
  filterContContextMenu.style.display = 'none';
};

const showContextMenuModifiersSettings = (event) => {
  event.preventDefault(); // Evita el menú contextual predeterminado
  gorceryContextMenu.style.display = 'none';
  filterContContextMenu.style.display = 'none';
  modifiersSettingsContextMenu.style.display = 'block';
};

gorceryHiboxAreaContextMenu.addEventListener('contextmenu', (event) => {
  showContextMenuGorcery(event);
});

modifiersSettingsHiboxAreaContextMenu.addEventListener('click', (event) => {
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



const filterCont = document.getElementById("filterCont");
const filterContSelected = document.getElementById("filterContSelected");
const filterContContextMenu = document.getElementById("filterContContextMenu");
const flechaComboBox = document.querySelector(".flechaComboBox");
const filterContImg = document.getElementById("filterContImg");
const skinsSearch = document.getElementById("skinsSearch");

filterCont.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName === "LI") return;
  
  if (filterContContextMenu.style.display === "block") {
    filterContContextMenu.style.display = "none";
    flechaComboBox.classList.remove("rotate");
  } else {
    filterContContextMenu.style.display = "block";
    flechaComboBox.classList.add("rotate");
  }
});


function simulateStartFilter(){
  const options = document.querySelectorAll("#filterContContextMenu li");
  
  // Busca el LI que contenga "Rareza ⭡"
  const targetOption = Array.from(options).find(option =>
    option.textContent.trim().includes("Rareza ⭡")
  );
  
  if (targetOption) {
    // Simula un clic en ese elemento
    targetOption.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
  }
}
setTimeout(() => {
  simulateStartFilter();
}, 100);

filterContContextMenu.addEventListener("click", (event) => {
  if (event.target.tagName === 'LI') {
    filterContSelected.textContent = event.target.textContent;

    if (event.target.textContent.includes("Precio ⭣")) {
      filterContImg.src="img/iconCoin.png";
    } else if (event.target.textContent.includes("Precio ⭡")) {
      filterContImg.src="img/iconCoin.png";
    } else if (event.target.textContent.includes("Rareza ⭣")) {
      filterContImg.src="img/iconTier.png";
    } else if (event.target.textContent.includes("Rareza ⭡")) {
      filterContImg.src="img/iconTier.png";
    } else if (event.target.textContent.includes("Fecha ⭣")) {
      filterContImg.src="img/iconDate.png";
    } else if (event.target.textContent.includes("Fecha ⭡")) {
      filterContImg.src="img/iconDate.png";
    } else if (event.target.textContent.includes("Grupo ⭣")) {
      filterContImg.src="img/iconGroup.png";
    } else if (event.target.textContent.includes("Grupo ⭡")) {
      filterContImg.src="img/iconGroup.png";
    }

    // Determina el criterio y el orden basándote en el texto de la opción
    let criteria, order;
    if (event.target.textContent.includes("Precio")) {
      criteria = "Precio";
    } else if (event.target.textContent.includes("Rareza")) {
      criteria = "Rareza";
    } else if (event.target.textContent.includes("Fecha")) {
      criteria = "Fecha";
    } else if (event.target.textContent.includes("Grupo")) {
      criteria = "Grupo";
    }
    // Suponiendo que "⭣" indica orden descendente y "⭡" indica ascendente:
    order = event.target.textContent.includes("⭣") ? "desc" : "asc";

    // Llamamos a la función auxiliar para ordenar las skins
    sortSkins(criteria, order);
    updateBackgroundPositionGalaxyPortada();

    filterContContextMenu.style.display = "none";
    flechaComboBox.classList.remove("rotate");
  }
});


skinsSearch.addEventListener('input', function() {
  // Función auxiliar para quitar todos los espacios y pasar a minúsculas
  const cleanString = (str) => str.replace(/\s+/g, '').toLowerCase();
  
  // Obtenemos la cadena de búsqueda "limpia"
  const query = cleanString(this.textContent);
  
  // Seleccionamos todos los contenedores de skins
  const skinContainers = document.querySelectorAll('.skinContainer');
  
  skinContainers.forEach((skin) => {
    let match = false;
    
    // Comprobamos el título de la skin
    const titleEl = skin.querySelector('.tituloSkin');
    if (titleEl) {
      const titleText = cleanString(titleEl.textContent);
      if (titleText.includes(query)) {
        match = true;
      }
    }
    
    // Comprobamos también el atributo "skinSearch" del contenedor
    const skinSearchAttr = skin.getAttribute('skinSearch');
    if (skinSearchAttr) {
      const skinSearchText = cleanString(skinSearchAttr);
      if (skinSearchText.includes(query)) {
        match = true;
      }
    }
    
    // Si coincide en alguno, se muestra; si no, se oculta.
    skin.style.display = match ? "" : "none";
  });
});


document.addEventListener("click", (event) => {
  if (filterCont.contains(event.target) || filterContSelected.contains(event.target)) {
    if(event.target.tagName === 'LI'){
      filterContContextMenu.style.display = "none";
      flechaComboBox.classList.remove("rotate");
    }
    return;
  }else{
    filterContContextMenu.style.display = "none";
    flechaComboBox.classList.remove("rotate");
  }
});


function sortSkins(criteria, order) {
  const skinsContainer = document.getElementById("skinsContainer");
  // Convertimos la NodeList en array para poder ordenarlo
  const skinElements = Array.from(skinsContainer.querySelectorAll('.skinContainer'));

  skinElements.sort((a, b) => {
    let aValue, bValue;
    
    if (criteria === "Precio") {
      // Primero comprobamos si el título contiene "?" para asignarle el mayor precio.
      const titleA = a.querySelector(".tituloSkin").textContent.trim();
      const titleB = b.querySelector(".tituloSkin").textContent.trim();
      
      if (titleA.includes('?')) {
        aValue = Infinity;
      } else {
        aValue = a.querySelector(".priceNormal") 
          ? a.querySelector(".priceNormal").textContent.trim() 
          : a.querySelector(".price").textContent.trim();
        aValue = aValue.toUpperCase() === "FREE" ? 0 : parseFloat(aValue);
      }
      
      if (titleB.includes('?')) {
        bValue = Infinity;
      } else {
        bValue = b.querySelector(".priceNormal") 
          ? b.querySelector(".priceNormal").textContent.trim() 
          : b.querySelector(".price").textContent.trim();
        bValue = bValue.toUpperCase() === "FREE" ? 0 : parseFloat(bValue);
      }
      
    } else if (criteria === "Rareza") {
      // Obtenemos la rareza, pero si el título contiene "?", asignamos el valor máximo.
      const titleA = a.querySelector(".tituloSkin").textContent.trim();
      const titleB = b.querySelector(".tituloSkin").textContent.trim();
      const tierTextA = a.querySelector(".tier").textContent.trim();
      const tierTextB = b.querySelector(".tier").textContent.trim();
      
      const tierOrder = { "Common": 1, "Rare": 2, "Epic": 3, "Legendary": 4 };
      
      aValue = titleA.includes('?') ? Infinity : (tierOrder[tierTextA] || 0);
      bValue = titleB.includes('?') ? Infinity : (tierOrder[tierTextB] || 0);
      
    } else if (criteria === "Fecha") {
      // Obtenemos la fecha desde el elemento "releaseDate"
      // Se asume el formato "Released: dd/mm/yyyy"
      const aDateStr = a.querySelector(".releaseDate").textContent.replace("Released:", "").trim();
      const bDateStr = b.querySelector(".releaseDate").textContent.replace("Released:", "").trim();
      const parseDate = (str) => {
        const parts = str.split("/");
        return new Date(parts[2], parts[1] - 1, parts[0]).getTime();
      };
      aValue = parseDate(aDateStr);
      bValue = parseDate(bDateStr);
      
    } else if (criteria === "Grupo") {
      // Usamos el contenido del elemento con clase "tituloSkin" para ordenar alfabéticamente
      aValue = a.querySelector(".tituloSkin").textContent.trim().toLowerCase();
      bValue = b.querySelector(".tituloSkin").textContent.trim().toLowerCase();
    }
    
    let comparison = 0;
    if (aValue < bValue) {
      comparison = -1;
    } else if (aValue > bValue) {
      comparison = 1;
    }
    // Si el orden es ascendente, usamos 'comparison', si es descendente lo invertimos.
    comparison = order === "asc" ? comparison : -comparison;

    // Si los valores son iguales, se aplica la subordenación por skinId de forma ascendente
    if (comparison === 0) {
      const skinIdA = parseInt(a.getAttribute("skinId"), 10);
      const skinIdB = parseInt(b.getAttribute("skinId"), 10);
      
      if (skinIdA < skinIdB) {
        comparison = -1;
      } else if (skinIdA > skinIdB) {
        comparison = 1;
      }
      // En caso de igualdad completa, comparison seguirá siendo 0.
    }
    
    return comparison;
  });

  // Reinsertamos los elementos ordenados en el contenedor
  skinElements.forEach(el => skinsContainer.appendChild(el));
}




// Manejar clics en las opciones de los menús
gorceryContextMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
      gorceryContextMenu.style.display = 'none';
      if(event.target.textContent.includes("Move")){
        moveAndInitTendero();
      }else{

      }
      
  }
});

modifiersSettingsContextMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const itemText = event.target.textContent.trim();
  
    if (itemText.includes("Mostrar etiquetas") && !itemText.includes("estadísticas")) {
      if (itemText.startsWith("✔")) {
        event.target.textContent = "Mostrar etiquetas";
        desactivarShowTags();
      } else {
        event.target.textContent = "✔ Mostrar etiquetas";
        activarShowTags();
      }
    } 

    else if (itemText.includes("Mostrar estadísticas en las etiquetas")) {
      if (itemText.startsWith("✔")) {
        event.target.textContent = "Mostrar estadísticas en las etiquetas";
        desactivarShowStatsInTags();
      } else {
        event.target.textContent = "✔ Mostrar estadísticas en las etiquetas";
        activarShowStatsInTags();
      }
    }

    else if (itemText.includes("Rellenar comederos automáticamente")) {
      if (itemText.startsWith("✔")) {
        event.target.textContent = "Rellenar comederos automáticamente";
        desactivarFillComederosAuto();
      } else {
        event.target.textContent = "✔ Rellenar comederos automáticamente";
        activarFillComederosAuto();
      }
    } 

    else if (itemText.includes("Pagar factura del agua automáticamente")) {
      if (itemText.startsWith("✔")) {
        event.target.textContent = "Pagar factura del agua automáticamente";
        desactivarPayWaterAuto();
      } else {
        event.target.textContent = "✔ Pagar factura del agua automáticamente";
        activarPayWaterAuto();
      }
    } 
    
    else if (itemText.includes("Ayuda icono de venana para warnings")) {
      if (itemText.startsWith("✔")) {
        event.target.textContent = "Ayuda icono de venana para warnings";
        desactivarhelpIconWarnings();
      } else {
        event.target.textContent = "✔ Ayuda icono de venana para warnings";
        activarhelpIconWarnings();
      }
    }
  
    modifiersSettingsContextMenu.style.display = 'none'; // Ocultar el menú contextual
  }
});


function preloadImages(imagePaths, callback) {
  let loadedImages = 0;
  const totalImages = imagePaths.length;

  imagePaths.forEach((path) => {
    const img = new Image();
    img.src = path;

    img.onload = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        callback(); // Llama al callback una vez que todas las imágenes están cargadas
      }
    };

    img.onerror = () => {
      console.error(`Error al cargar la imagen: ${path}`);
      loadedImages++;
      if (loadedImages === totalImages) {
        callback();
      }
    };
  });
}

const imagesTenderoCaminandoRight = [
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

const imagesTenderoGirandoRight = [
  'img/hamster/tendero/girando/right/fin/tenderoGirandoRight1.png',
  'img/hamster/tendero/girando/right/fin/tenderoGirandoRight2.png',
  'img/hamster/tendero/girando/right/fin/tenderoGirandoRight3.png',
  'img/hamster/tendero/girando/right/fin/tenderoGirandoRight4.png',
  'img/hamster/tendero/girando/right/fin/tenderoGirandoRight5.png',
  'img/hamster/tendero/girando/right/fin/tenderoGirandoRight6.png'
];

const imagesTenderoGirandoRightBackwords = [
  'img/hamster/tendero/girando/right/fin/tenderoGirandoRight6.png',
  'img/hamster/tendero/girando/right/fin/tenderoGirandoRight5.png',
  'img/hamster/tendero/girando/right/fin/tenderoGirandoRight4.png',
  'img/hamster/tendero/girando/right/fin/tenderoGirandoRight3.png',
  'img/hamster/tendero/girando/right/fin/tenderoGirandoRight2.png',
  'img/hamster/tendero/girando/right/fin/tenderoGirandoRight1.png'
];

const imagesTenderoCaminandoLeft = [
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft1.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft2.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft3.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft4.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft5.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft6.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft7.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft8.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft9.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft10.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft11.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft12.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft13.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft14.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft15.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft16.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft17.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft18.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft19.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft20.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft21.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft22.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft23.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft24.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft25.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft26.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft27.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft28.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft29.png',
  'img/hamster/tendero/corriendo/left/fin/tenderoCaminandoLeft30.png'
];

const imagesTenderoGirandoLeft = [
  'img/hamster/tendero/girando/left/fin/tenderoGirandoLeft1.png',
  'img/hamster/tendero/girando/left/fin/tenderoGirandoLeft2.png',
  'img/hamster/tendero/girando/left/fin/tenderoGirandoLeft3.png',
  'img/hamster/tendero/girando/left/fin/tenderoGirandoLeft4.png',
  'img/hamster/tendero/girando/left/fin/tenderoGirandoLeft5.png',
  'img/hamster/tendero/girando/left/fin/tenderoGirandoLeft6.png'
];

const imagesTenderoGirandoLeftBackwords = [
  'img/hamster/tendero/girando/left/fin/tenderoGirandoLeft6.png',
  'img/hamster/tendero/girando/left/fin/tenderoGirandoLeft5.png',
  'img/hamster/tendero/girando/left/fin/tenderoGirandoLeft4.png',
  'img/hamster/tendero/girando/left/fin/tenderoGirandoLeft3.png',
  'img/hamster/tendero/girando/left/fin/tenderoGirandoLeft2.png',
  'img/hamster/tendero/girando/left/fin/tenderoGirandoLeft1.png'
];

// Precargar todas las imágenes
const allImages = [
  ...imagesTenderoCaminandoRight,
  ...imagesTenderoGirandoRight,
  ...imagesTenderoGirandoRightBackwords,
  ...imagesTenderoCaminandoLeft,
  ...imagesTenderoGirandoLeft,
  ...imagesTenderoGirandoLeftBackwords
];

preloadImages(allImages, () => {
  //console.log("moveAndInitTendero: Todas las imagenes cargadas");
});

let tenderoMoving = false;
function moveAndInitTendero() {
  tenderoCesta.style.display = "none";
  
  // Función para mover el tendero a una posición aleatoria
  function moveTendero() {
    if (tenderoMoving) return; // No mover si ya está en movimiento
    tenderoMoving = true;

    // Obtener la posición actual del tendero en vh
    const currentPosVh = parseInt(tenderoBody.style.marginLeft) || 0; // Posición en vh
    const targetPosVh = Math.floor(Math.random() * 22) - 12; // Posición aleatoria entre -12vh y 10vh

    let moveDirection = 'right'; // Dirección de movimiento predeterminada
    if (targetPosVh < currentPosVh) {
      moveDirection = 'left'; // Si la posición de destino es menor, se mueve hacia la izquierda
    }

    let imagesCaminando, imagesGirando, imagesGirandoBackwords, imagesCaminandoMask, imagesGirandoMask, imagesGirandoBackwordsMask;

    // Asignación de imágenes según la dirección de movimiento
    if (moveDirection === 'right') {
      imagesCaminando = imagesTenderoCaminandoRight;
      imagesGirando = imagesTenderoGirandoRight;
      imagesGirandoBackwords = imagesTenderoGirandoRightBackwords;
    } else {
      imagesCaminando = imagesTenderoCaminandoLeft;
      imagesGirando = imagesTenderoGirandoLeft;
      imagesGirandoBackwords = imagesTenderoGirandoLeftBackwords;
    }

    let stepCount = 0;

    // Primero mostrar la animación de giro
    function rotateHeadInterval() {
      let headStepCount = 0;
      let headDirection = moveDirection === 'right' ? 11 : -3;

      let rotateInterval = setInterval(() => {
        tenderoHead.src = `img/hamster/tendero/head/head${headDirection}.png`;
        headStepCount++;
        if (headStepCount === 3) {
          clearInterval(rotateInterval);
          moveCaminando(); // Empezar la animación de caminar
        }

        // Ajustar el número en la ruta de la imagen para girar
        headDirection = moveDirection === 'right' ? headDirection + 1 : headDirection - 1;
      }, 100);
    }

    
    // Primero mostrar la animación de giro
    let rotateInterval = setInterval(() => {
      tenderoHead.style.display = "none";
      tenderoBody.style.display = "block";
      tenderoBody.src = imagesGirando[stepCount];

      stepCount++;
      if (stepCount === imagesGirando.length) {
        clearInterval(rotateInterval);
        stepCount = 0;
        moveCaminando(); // Empezar la animación de caminar
      }
    }, 100);

    // Función para mover al tendero mientras camina
    function moveCaminando() {
      let moveInterval = setInterval(() => {
        // Ajustar la posición con el movimiento
        tenderoBody.src = imagesCaminando[stepCount];

        // Calcular el nuevo valor de margin-left en vh
        const newMarginVh = currentPosVh + (targetPosVh - currentPosVh) * (stepCount / imagesCaminando.length);
        tenderoBody.style.marginLeft = newMarginVh + "vh";
        tenderoCesta.style.marginLeft = newMarginVh + "vh";
        dialogContainer.style.right = (17 - newMarginVh) + "vh"
        tenderoHead.style.marginLeft = newMarginVh + "vh";
        tenderoHeadHitbox.style.right = (13 - newMarginVh) + "vh";

        stepCount++;
        if (stepCount === imagesCaminando.length) {
          clearInterval(moveInterval);
          stepCount = 0;
          finishMovement(); // Terminar el movimiento y la animación
        }
      }, 100);
    }

    // Finalizar el movimiento con la animación de vuelta
    function finishMovement() {
      let reverseStepCount = 0;
      let reverseInterval = setInterval(() => {
        tenderoBody.src = imagesGirandoBackwords[reverseStepCount];
        reverseStepCount++;
        if (reverseStepCount === imagesGirandoBackwords.length) {
          clearInterval(reverseInterval);
          tenderoMoving = false; // Permitir que se mueva nuevamente
          tenderoHead.style.display = "block";
        }
      }, 100);
    }


    
  }

  moveTendero();
}




let isDialogActive = false; // Indica si el diálogo está activo
let isClickBlocked = false; // Evita el spam de clics

modifiersContainer.addEventListener("click", function (event) {
  const target = event.target;

  // Si los clics están bloqueados, simplemente ignora la acción
  if (isClickBlocked || isDialogActive) return;

  // Verificar en qué elemento se hizo clic
  if (target === cestaHibox || 
      target === hitboxSlotBuyBiggieClick || 
      target === hitboxSlotBuyCocoClick || 
      target === hitboxSlotBuyDiorClick) {
    blockClicks(); // Bloquea clics mientras se muestra
    showDialog(target);
    setTimeout(() => {
      unblockClicks(); // Desbloquea clics después de la animación
    }, 600);
  }
});




// Función que posiciona el elemento en el cursor
function positionCoinsDiscoundAnimAtCursor(element, event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  element.style.left = `${mouseX-220}px`;
  element.style.top = `${mouseY}px`;

  document.addEventListener('mousemove', (event2) => {
      // Obtener las coordenadas del cursor
      const mouseX = event2.clientX;
      const mouseY = event2.clientY;

      // Ajustar la posición del elemento
      element.style.left = `${mouseX-220}px`;
      element.style.top = `${mouseY}px`;
  });
}


/* Existe la llamada duplicada a este método, por ello la flag */
let descontarMonedasSoloAnimFlag = false;
async function descontarMonedasSoloAnim(price, event) {
  if (descontarMonedasSoloAnimFlag) {
      return;
  }
  descontarMonedasSoloAnimFlag = true;

  try {
      let coinRestar = document.createElement("div");
      document.body.appendChild(coinRestar);
      coinRestar.classList.add("coinRestar");
      coinRestar.style.display = "block";
      coinRestar.textContent = "-" + price;

      let longitud = coinLabel.textContent.toString().length;
      let marginLeftCoinRestar = 50 + longitud * 30;
      coinRestar.style.marginLeft = `${marginLeftCoinRestar}px`;

      // Posicionar el elemento en el cursor
      positionCoinsDiscoundAnimAtCursor(coinRestar, event);

      setTimeout(() => {
          descontarMonedasSoloAnimFlag = false;
      }, 500);
      setTimeout(() => {
          coinRestar.style.display = "none";
          coinRestar.remove();
      }, 2000);
  } catch (error) {
      console.error(
          "Error durante la actualización de monedas en descontarMonedasSoloAnim",
          error
      );
  }
}

async function descontarMonedas(price, event) {
  try {
          // Limpia el intervalo existente, si lo hay
    if (monedasUpdateInterval) {
      clearInterval(monedasUpdateInterval);
    }

    let monedasViejas = parseInt(localCoinsCounter, 10);
    localCoinsCounter = localCoinsCounter - price;
    let monedasNuevas = parseInt(localCoinsCounter, 10); // Asegúrate de que `data` contiene las monedas nuevas como un número

    // Calcular la cantidad de pasos y la duración de cada paso
    const pasos = Math.abs(monedasViejas - monedasNuevas);
    const intervaloDuracion = pasos > 0 ? 1000 / pasos : 0; // Duración en ms por paso (2 segundos en total)

    // Intervalo para animar la actualización de monedas
    monedasUpdateInterval = setInterval(() => {
      if (monedasViejas === monedasNuevas) {
        clearInterval(monedasUpdateInterval); // Detener el intervalo si los valores coinciden
        return;
      }

      if (monedasViejas < monedasNuevas) {
        monedasViejas++; // Incrementa hacia el valor deseado
      } else if (monedasViejas > monedasNuevas) {
        monedasViejas--; // Decrementa hacia el valor deseado
      }

      // Actualiza el contenido de coinLabel
      coinLabel.textContent = monedasViejas;
    }, intervaloDuracion); // Ajusta la velocidad de la animación aquí
    coinsContainerAnimationContainer.innerHTML = "";


      await actualizarMonedasUsuario(idLogeado, monedasNuevas);


      let coinRestar = document.createElement("div");
      document.body.appendChild(coinRestar);
      coinRestar.classList.add("coinRestar");
      coinRestar.style.display = "block";
      coinRestar.textContent = "-" + price;

      let longitud = coinLabel.textContent.toString().length;
      let marginLeftCoinRestar = 50 + longitud * 30;
      coinRestar.style.marginLeft = `${marginLeftCoinRestar}px`;

      // Posicionar el elemento en el cursor
      positionCoinsDiscoundAnimAtCursor(coinRestar, event);

      setTimeout(() => {
          coinRestar.style.display = "none";
          coinRestar.remove();
      }, 2000);
  } catch (error) {
      console.error(
          "Error durante la actualización de monedas en la base de datos:",
          error
      );
  }
}

async function añadirMonedasWheel(price) {
  try {
      let coinRestar = document.createElement("div");
      document.body.appendChild(coinRestar);
      coinRestar.classList.add("coinRestar");
      coinRestar.style.display = "block";
      coinRestar.textContent = "+" + price;

      let longitud = coinLabel.textContent.toString().length;
      let marginLeftCoinRestar = 50 + longitud * 30;
      coinRestar.style.marginLeft = `${marginLeftCoinRestar}px`;

      
      for (let i = 0; i < price; i++) {
        setTimeout(() => {
            incrementCoins(idLogeado);
        }, i * 100);
    }

      if (modifiersContainer.classList.contains("active")) {
        coinRestar.style.right = `calc(${Math.floor(Math.random() * 101) + 100}px + 15vw)`;

      }else{
        coinRestar.style.right = `calc(${Math.floor(Math.random() * 101) + 100}px + 0vw)`;
      }

      coinRestar.style.bottom = `${Math.floor(Math.random() * 131) + 50}px`;

      setTimeout(() => {
          coinRestar.style.display = "none";
          coinRestar.remove();
      }, 2000);
  } catch (error) {
      console.error(
          "Error durante la actualización de monedas en la base de datos:",
          error
      );
  }
}



function tomatoAnimStart() {
  let initialMarginLeft = 13;
  const longitud = tomatoLabel.textContent.toString().length - 1;
  const marginLeftTomatoAnim = initialMarginLeft + longitud * 25;

  const existingTomatoAnims = tomatoContainer.querySelectorAll(".tomatoAnim");
  existingTomatoAnims.forEach((element) => element.remove());

  let tomatoAnim = document.createElement("img");
  tomatoAnim.classList.add("tomatoAnim");
  tomatoAnim.src =
    "img/hamster/icons/tomatoAnim.gif" + "?t=" + new Date().getTime();
  
  tomatoContainer.appendChild(tomatoAnim);

  setTimeout(() => {
    tomatoAnim.style.marginLeft = `${marginLeftTomatoAnim}px`;
  }, 100);

  setTimeout(() => {
    tomatoAnim.style.opacity = "0";
  }, 2000);
}



buttonV.addEventListener("click", async function (event) {
  hideDialog();
  setTimeout(() => {
    unblockClicks();
  }, 600);
  let monedasLogeado = await obtenerMonedasDeUsuario(idLogeado);
  let messages = ["¡Trabaja y gana monedas!", "¡No te llegan las monedas!", "¡La calderilla no llega!"];
  let textDefaultMessage = messages[Math.floor(Math.random() * messages.length)];
  
  if (iconDialogElement.src.includes("iconBiggie")) {
    if (monedasLogeado < 500) {
      setTimeout(() => {
        showDialogDefault(textDefaultMessage);
      }, 700);
      return;
    }

    hitboxSlotBuyBiggieClick.style.display = "none";
    hitboxSlotBuyBiggie.style.display = "none";
    groceryJaleBiggie.style.display = "none";
    if(hitboxSlotBuyCoco.style.display === "none" && hitboxSlotBuyDior.style.display === "block"){
      groceryJaleChains.style.display = "block";
    }else{
      groceryJaleChains.style.display = "none";
    }
    currentHamster = document.querySelector(".biggie");
    await descontarMonedas(500, event);
    intentarClonarHamster3Hitbox(currentHamster);
    /*
        // Restar el precio y actualizar en la base de datos
        monedasLogeado -= 500;
        // Actualizar el contador de monedas en la interfaz
        document.querySelector(".coinLabel").textContent = monedasLogeado;
        await actualizarMonedasUsuario(idLogeado, monedasLogeado);
        await actualizarLocalCoinsCounter(idLogeado);*/

  } else if (iconDialogElement.src.includes("iconDior")) {
    if (monedasLogeado < 500) {
      setTimeout(() => {
        showDialogDefault(textDefaultMessage);
      }, 700);
      return;
    }

    hitboxSlotBuyDiorClick.style.display = "none";
    hitboxSlotBuyDior.style.display = "none";
    groceryJaleDior.style.display = "none";
    groceryJaleChains.style.display = "none";
    currentHamster = document.querySelector(".dior");
    await descontarMonedas(500, event);
    intentarClonarHamster3Hitbox(currentHamster);

  } else if (iconDialogElement.src.includes("iconCocco")) {
    if (monedasLogeado < 500) {
      setTimeout(() => {
        showDialogDefault(textDefaultMessage);
      }, 700);
      return;
    }

    hitboxSlotBuyCocoClick.style.display = "none";
    hitboxSlotBuyCoco.style.display = "none";
    groceryJaleCoco.style.display = "none";
    if(hitboxSlotBuyBiggie.style.display === "none" && hitboxSlotBuyDior.style.display === "block"){
      groceryJaleChains.style.display = "block";
    }else{
      groceryJaleChains.style.display = "none";
    }
    currentHamster = document.querySelector(".coco");
    await descontarMonedas(500, event);
    intentarClonarHamster3Hitbox(currentHamster);

  }else if (iconDialogElement.src.includes("iconTomato")) {
    if (monedasLogeado < countTomatos2Recive*10) {
      setTimeout(() => {
        showDialogDefault(textDefaultMessage);
      }, 700);
      return;
    }

    await descontarMonedas(countTomatos2Recive*10, event);
    await incrementTomatos(idLogeado, countTomatos2Recive);
    tomatoAnimStart();

  }

});

buttonX.addEventListener("click", function () {
  hideDialog();
  setTimeout(() => {
    unblockClicks();
  }, 600);
});




// Valor inicial: 1 tomate (1 tomate = 10 monedas)
let countTomatos2Recive = 1;

function updateDialog() {
  // Convertir countTomatos2Recive a cadena para comprobar la cantidad de dígitos.
  const countStr = countTomatos2Recive.toString();
  let spacing;

  if(countStr.length === 1){
    spacing = "ㅤㅤㅤ";
    iconDialogElement.style.transform = "translateX(0vh)";
    iconDialogCoin.style.transform = "translateX(0vh)";
  }else{
    spacing = "ㅤㅤ";
    iconDialogElement.style.transform = "translateX(0.7vh)";
    iconDialogCoin.style.transform = "translateX(0.9vh)";
  }
  // Actualizar el contenido, usando el espaciado adecuado
  dialogFlex.textContent = `Quieres comprar ${countTomatos2Recive}${spacing}por ${countTomatos2Recive * 10}ㅤㅤ?`;
}

// Función para incrementar (máximo 99)
function increment() {
  if (countTomatos2Recive < 99) {
    countTomatos2Recive++;
    updateDialog();
  }
}

// Función para decrementar (mínimo 1)
function decrement() {
  if (countTomatos2Recive > 1) {
    countTomatos2Recive--;
    updateDialog();
  }
}

/*
  --- IMPLEMENTACIÓN DEL HOLD (mantener pulsado) ---
  Para que al mantener pulsado se incremente/decremente “rápido” usaremos:
   - Un timer de retardo (300 ms) que, una vez cumplido, inicia un setInterval.
   - Al soltar el botón (mouseup o salir con el ratón, mouseleave) se detiene el intervalo.
   - Se usa una bandera para que, en el click normal (cuando no se mantiene pulsado),
     se ejecute la acción una única vez.
*/

// ----- Botón AUMENTAR (buttonMas) -----
let pressTimerMas, intervalMas;
let masAutoIncremented = false;

buttonMas.addEventListener("mousedown", function () {
  // Reseteamos la bandera
  masAutoIncremented = false;
  // Iniciamos un timeout: si se mantiene pulsado 300 ms,
  // comenzamos a incrementar cada 50 ms.
  pressTimerMas = setTimeout(() => {
    intervalMas = setInterval(() => {
      masAutoIncremented = true; // ya se está auto-incrementando
      increment();
    }, 50); // velocidad de incremento continuo (ajusta este valor a tu gusto)
  }, 300);
});

// Al soltar o salir del botón se cancelan los timers
buttonMas.addEventListener("mouseup", function () {
  clearTimeout(pressTimerMas);
  clearInterval(intervalMas);
});
buttonMas.addEventListener("mouseleave", function () {
  clearTimeout(pressTimerMas);
  clearInterval(intervalMas);
});

// Además, para clicks rápidos (sin mantener pulsado) se ejecuta una única acción:
buttonMas.addEventListener("click", function () {
  // Si no se ha activado el auto-incremento, incrementamos una sola vez
  if (!masAutoIncremented) {
    increment();
  }
  setTimeout(() => {
    unblockClicks();
  }, 600);
});

// ----- Botón DISMINUIR (buttonMenos) -----
let pressTimerMenos, intervalMenos;
let menosAutoIncremented = false;

buttonMenos.addEventListener("mousedown", function () {
  menosAutoIncremented = false;
  pressTimerMenos = setTimeout(() => {
    intervalMenos = setInterval(() => {
      menosAutoIncremented = true;
      decrement();
    }, 50); // velocidad de decremento continuo
  }, 300);
});

buttonMenos.addEventListener("mouseup", function () {
  clearTimeout(pressTimerMenos);
  clearInterval(intervalMenos);
});
buttonMenos.addEventListener("mouseleave", function () {
  clearTimeout(pressTimerMenos);
  clearInterval(intervalMenos);
});

buttonMenos.addEventListener("click", function () {
  if (!menosAutoIncremented) {
    decrement();
  }
  setTimeout(() => {
    unblockClicks();
  }, 600);
});


function showDialogDefault(texto) {
  console.log("showDialogDefault");
  isDialogActive = true; // Marcar el diálogo como activo
  dialogContainer.style.display = "flex";
  dialogContainer.style.animation = "dialogShow 0.6s forwards";

  dialogFlex.textContent = texto;
  iconDialogElement.style.display = "none";
  iconDialogCoin.style.display = "none";
  buttonV.style.display = "none";
  buttonX.style.display = "none";
  buttonsImg.style.display = "none";

  buttonsImg.classList.remove("active");
  buttonsImgSpinner.classList.remove("active");
  buttonMenos.classList.remove("active");
  buttonMas.classList.remove("active");
  buttonV.classList.remove("active");
  buttonX.classList.remove("active");

  setTimeout(() => {
    hideDialog();
  }, 2000);
}

function showDialog(hitbox) {
  isDialogActive = true; // Marcar el diálogo como activo
  dialogContainer.style.display = "flex";
  dialogContainer.style.animation = "dialogShow 0.6s forwards";

  iconDialogElement.style.display = "block";
  iconDialogCoin.style.display = "block";
  buttonV.style.display = "flex";
  buttonX.style.display = "flex";
  buttonsImg.style.display = "block";

  buttonsImg.classList.remove("active");
  buttonsImgSpinner.classList.remove("active");
  buttonMenos.classList.remove("active");
  buttonMas.classList.remove("active");
  buttonV.classList.remove("active");
  buttonX.classList.remove("active");
  iconDialogElement.style.transform = "translateX(0vh)";
  iconDialogCoin.style.transform = "translateX(0vh)";
  countTomatos2Recive = 1;

  if (hitbox.id === "hitboxSlotBuyBiggieClick") {
    dialogFlex.textContent = "Quieres comprar 1ㅤㅤㅤpor 500ㅤㅤ?";
    iconDialogElement.src = "img/hamster/icons/iconBiggie.png";
    iconDialogCoin.className = "iconDialog icon500";

  } else if (hitbox.id === "hitboxSlotBuyDiorClick") {
    dialogFlex.textContent = "Quieres comprar 1ㅤㅤㅤpor 500ㅤㅤ?";
    iconDialogElement.src = "img/hamster/icons/iconDior.png";
    iconDialogCoin.className = "iconDialog icon500";

  } else if (hitbox.id === "hitboxSlotBuyCocoClick") {
    dialogFlex.textContent = "Quieres comprar 1ㅤㅤㅤpor 500ㅤㅤ?";
    iconDialogElement.src = "img/hamster/icons/iconCocco.png";
    iconDialogCoin.className = "iconDialog icon500";

  } else if (hitbox.id === "cestaHibox") {
    dialogFlex.textContent = "Quieres comprar 1ㅤㅤㅤpor 10ㅤㅤ?";
    iconDialogElement.src = "img/hamster/icons/iconTomato.png";
    iconDialogCoin.className = "iconDialog icon10";
    buttonsImg.classList.add("active");
    buttonsImgSpinner.classList.add("active");
    buttonMenos.classList.add("active");
    buttonMas.classList.add("active");
    buttonV.classList.add("active");
    buttonX.classList.add("active");
  }
}

function hideDialog() {
  dialogContainer.style.animation = "dialogHide 0.6s forwards";
  setTimeout(() => {
    dialogContainer.style.display = "none";
    isDialogActive = false; // Marcar el diálogo como inactivo
    deshabilitarCesta();
  }, 600);
}

function blockClicks() {
  isClickBlocked = true; // Bloquea los clics
}

function unblockClicks() {
  isClickBlocked = false; // Desbloquea los clics
}



async function actualizarSlotHamster(hamster, contenedor) {
  if (!hamster || !contenedor) {
    console.error("El hámster o el contenedor no son válidos.");
    return;
  }

  // Identificar el tipo de hámster según su clase
  const hamsterClasses = [...hamster.classList];
  let campoSlot;

  if (hamsterClasses.includes("biggie")) {
    campoSlot = "slotHamsterBiggie";
  } else if (hamsterClasses.includes("coco")) {
    campoSlot = "slotHamsterCoco";
  } else if (hamsterClasses.includes("dior")) {
    campoSlot = "slotHamsterDior";
  } else {
    console.error("No se pudo determinar el tipo de hámster.");
    return;
  }

  // ID del contenedor (hitbox)
  const idHitbox = contenedor.id;

  if (!idHitbox) {
    console.error("El contenedor no tiene un ID válido.");
    return;
  }

  // Construir el objeto para la actualización
  const datosActualizacion = {};
  datosActualizacion[campoSlot] = idHitbox; // Campo dinámico basado en el hámster

  // URL correcta para el endpoint
  const url = `${supabaseUrl}?id=eq.${idLogeado}`; // Cambiar `idUsuario` por el ID real del usuario

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(datosActualizacion),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error(
        `Error al actualizar el slot del hámster (${campoSlot}):`,
        response.statusText,
        errorData
      );
      throw new Error(`Error en la actualización: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`Slot del hámster (${campoSlot}) actualizado correctamente:`, data);
    return data;
  } catch (error) {
    console.error("Error al actualizar el slot del hámster:", error);
  }
}

async function cargarHamstersDesdeBD() {
  try {
    // URL para obtener los datos del usuario
    const url = `${supabaseUrl}?id=eq.${idLogeado}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error al obtener los datos del usuario:", response.statusText);
      return;
    }

    const data = await response.json();
    if (data.length === 0) {
      console.warn("No se encontraron datos del usuario en la base de datos.");
      return;
    }

    const usuario = data[0]; // Obtener el primer registro del usuario
    const slotsHamsters = {
      biggie: usuario.slotHamsterBiggie,
      coco: usuario.slotHamsterCoco,
      dior: usuario.slotHamsterDior,
    };

    // Verificar si algún campo es null o undefined y actualizar en la base de datos
    const valoresPredeterminados = {
      biggie: "hitboxSlotBuyBiggie",
      coco: "hitboxSlotBuyCoco",
      dior: "hitboxSlotBuyDior",
    };

    let necesitaActualizar = false;
    const actualizaciones = {};

    Object.entries(slotsHamsters).forEach(([hamster, slotId]) => {
      if (!slotId) {
        console.warn(`El slot de ${hamster} es nulo o no está definido. Se asignará un valor predeterminado.`);
        actualizaciones[`slotHamster${hamster.charAt(0).toUpperCase() + hamster.slice(1)}`] =
          valoresPredeterminados[hamster];
        necesitaActualizar = true;
      }
    });

    // Actualizar la base de datos si es necesario
    if (necesitaActualizar) {
      const updateUrl = `${supabaseUrl}?id=eq.${idLogeado}`;
      const updateResponse = await fetch(updateUrl, {
        method: "PATCH",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify(actualizaciones),
      });

      if (!updateResponse.ok) {
        console.error("Error al actualizar los slots predeterminados:", updateResponse.statusText);
        return;
      }

      console.log("Slots predeterminados actualizados en la base de datos:", await updateResponse.json());

      // Actualizar los slots en memoria después de la actualización
      Object.assign(slotsHamsters, valoresPredeterminados);
    }

    
    const slotIds = []; // Array para almacenar todos los slotId

    Object.entries(slotsHamsters).forEach(([hamster, slotId]) => {
      if (slotId) {
        slotIds.push(slotId); // Agregar el slotId al array
      }
    });

    if (
      slotIds.includes("hitboxSlotBuyDior") &&
      !slotIds.includes("hitboxSlotBuyCoco") &&
      !slotIds.includes("hitboxSlotBuyBiggie")
    ) {
      groceryJaleChains.style.display = "block";
    } else {
      //console.log("No se cumplen las condiciones.");
      groceryJaleChains.style.display = "none";
    }

    
    let foundHamsterInWheel = false;
    // Clonar y posicionar los hámsters según sus slots
    Object.entries(slotsHamsters).forEach(([hamster, slotId]) => {
      const hamsterElemento = document.querySelector(`.hamster.${hamster}`);
      currentHamster = hamsterElemento;

      const contenedor = document.getElementById(slotId);
      //console.log("Hamster:", hamsterElemento);
      //console.log("Contenedor:", contenedor);

      if (!hamsterElemento || !contenedor) {
        console.log(`No se encontró el hámster (${hamster}) o el contenedor (${slotId}).`);
        return;
      }

      const offsetX = Math.floor(Math.random() * 801); // Entre 0 y 800 (incluidos)
      const offsetY = window.innerHeight-100; // Entre 0 y 500 (incluidos)

      switch (contenedor.id) {
        case "hitboxSlotWeel":
          foundHamsterInWheel = true;
          isResetToContainer = false;
          currentHamster.style.display = 'flex';
          handleWheelContainer(contenedor, contenedor);
          modifyHamsterSpeed(currentHamster, setHamsterSpeed, 1.5, false);
          stopSpecificInterval(currentHamster.id, "energy");
          startDecreasingEnergy(currentHamster.id);

          startPeriodicStatsUpdate(idLogeado);
          resetDragVariables();
          break;

        case "hitboxSlotWorld":
          isResetToContainer = false;
          cloneHamsterToContainer(contenedor, offsetX, offsetY);
          currentHamster.style.display = 'flex';

          stopSpecificInterval(currentHamster.id, "energy");
          startFillingEnergy(currentHamster.id);
          startDecreasingStats(currentHamster.id);
  
          resetDragVariables();

          break;

        case "hitboxSlotBuyBiggie":
          currentHamster.setAttribute("pos", "");
          isResetToContainer = false;
          cloneHamsterToContainer(contenedor, offsetX, offsetY);
          currentHamster.style.display = 'flex';

          resetDragVariables();

          hitboxSlotBuyBiggieClick.style.display = "block";
          hitboxSlotBuyBiggie.style.display = "block";
          groceryJaleBiggie.style.display = "block";
          break;

        case "hitboxSlotBuyDior":
          currentHamster.setAttribute("pos", "");
          isResetToContainer = false;
          cloneHamsterToContainer(contenedor, offsetX, offsetY);
          currentHamster.style.display = 'flex';

          resetDragVariables();

          hitboxSlotBuyDiorClick.style.display = "block";
          hitboxSlotBuyDior.style.display = "block";
          groceryJaleDior.style.display = "block";
          break;

        case "hitboxSlotBuyCoco":
          currentHamster.setAttribute("pos", "");
          isResetToContainer = false;
          cloneHamsterToContainer(contenedor, offsetX, offsetY);
          currentHamster.style.display = 'flex';

          resetDragVariables();

          hitboxSlotBuyCocoClick.style.display = "block";
          hitboxSlotBuyCoco.style.display = "block";
          groceryJaleCoco.style.display = "block";
          break;

        default:
          isResetToContainer = false;
          cloneHamsterToContainer(contenedor, offsetX, offsetY);
          currentHamster.style.display = 'flex';

          stopSpecificInterval(currentHamster.id, "energy");
          startFillingEnergy(currentHamster.id);
          startDecreasingStats(currentHamster.id);
          checkForNeedFood(currentHamster);
    
          resetDragVariables();
          
          break;
      }

      updateTooltipVisibility();
      //console.log(`Hámster ${hamster} posicionado en el slot ${slotId}.`);
    });

    if (!foundHamsterInWheel) {
      wrapper.style.setProperty('--wheel-speed', '0');
    }
  } catch (error) {
    console.error("Error al cargar los hámsters desde la base de datos:", error);
  }
}



async function cargarHamstersDesdeBDF(){
  try {
    if (idLogeado) {
      console.log("Cargando hámsters desde la base de datos...");
      await cargarHamstersDesdeBD();
      console.log("Hámsters cargados correctamente.");
    } else {
      console.log("El usuario no está logueado. No se pueden cargar los hámsters.");
    }
  } catch (error) {
    console.log("Error al cargar los hámsters:", error);
  }
}



  function intentarClonarHamster3Hitbox(hamster) {
    if (!hamster) {
      console.log("El hámster no es válido.");
      return;
    }
  
    // Lista de contenedores en orden de prioridad
    const contenedorIds = ["hitboxSlotDown", "hitboxSlotUpRight", "hitboxSlotUpLeft"];
    let clonado = false;
  
    contenedorIds.some((contenedorId) => {
      const contenedor = document.getElementById(contenedorId);
  
      if (!contenedor) {
        console.log(`El contenedor con ID ${contenedorId} no existe.`);
        return false; // Continuar con el siguiente contenedor
      }
  
      // Comprobar si el contenedor ya tiene un hámster
      const hamsterEnContenedor = contenedor.querySelector(".hamster");
  
      if (!hamsterEnContenedor) {
        isResetToContainer = false;
        cloneHamsterToContainer(contenedor, offsetX, offsetY);
        wrapper.style.setProperty('--wheel-speed', '0');
        actualizarSlotHamster(currentHamster, contenedor);
        
        stopSpecificInterval(currentHamster.id, "energy");
        startFillingEnergy(currentHamster.id);
        startDecreasingStats(currentHamster.id);
        checkForNeedFood(currentHamster);
        
        showTooltipHamsterForce(currentHamster);
        updateTooltipVisibility();
        resetDragVariables();
      }
  
      console.log(`El contenedor ${contenedorId} ya está ocupado.`);
      return false; // Continuar con el siguiente contenedor
    });
  
    if (!clonado) {
      console.log("No se pudo clonar el hámster. Todos los contenedores están ocupados.");
    }
  }
  


  






  /* HAMSTER STATS */

/******************************************************
 * 1) OBTENER ESTADÍSTICAS (Lee el JSON de hamstersStats)
 ******************************************************/
async function getHamsterStatsFromDB(idLogeado) {
  try {
    // Usa la misma estructura que saveCursorSelection:
    // -> supabaseUrl ya debe incluir la ruta base de tu tabla (por ejemplo ".../rest/v1/usuario")
    const url = `${supabaseUrl}?id=eq.${idLogeado}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error al obtener hamstersStats:", response.statusText);
      return null;
    }

    const data = await response.json();

    // Si no hay registro o viene vacío
    if (data.length === 0) {
      console.warn("No se encontró el registro del usuario. Creando por defecto...");
      const defaultStats = getDefaultHamsterStats();
      await setHamsterStatsInDB(idLogeado, defaultStats);
      return defaultStats;
    }

    // Tomamos la columna hamstersStats (TEXT) del primer registro:
    let statsText = data[0].hamstersStats;

    // Si el campo está nulo, undefined o cadena vacía:
    if (!statsText) {
      console.warn("El campo hamstersStats está nulo/vacío. Creando por defecto...");
      const defaultStats = getDefaultHamsterStats();
      await setHamsterStatsInDB(idLogeado, defaultStats);
      return defaultStats;
    }

    // Intentar parsear a objeto
    let statsObj;
    try {
      statsObj = JSON.parse(statsText);
    } catch (err) {
      console.error("Error al parsear JSON. Se usará objeto por defecto:", err);
      const defaultStats = getDefaultHamsterStats();
      await setHamsterStatsInDB(idLogeado, defaultStats);
      return defaultStats;
    }

    // Validar estructura
    if (!statsObj.hamsters || !Array.isArray(statsObj.hamsters)) {
      console.warn("Estructura inválida en hamstersStats. Creando por defecto...");
      const defaultStats = getDefaultHamsterStats();
      await setHamsterStatsInDB(idLogeado, defaultStats);
      return defaultStats;
    }

    // Si todo está OK, devolver el objeto
    return statsObj;
  } catch (error) {
    console.error("Error en getHamsterStatsFromDB:", error);
    return null;
  }
}

/******************************************************
 * 2) GUARDAR ESTADÍSTICAS (Escribe el JSON en hamstersStats)
 ******************************************************/
async function setHamsterStatsInDB(idLogeado, newStatsObj) {
  try {
    // Usa la misma estructura que saveCursorSelection:
    const url = `${supabaseUrl}?id=eq.${idLogeado}`;

    // Convertir el objeto JS a texto JSON
    const body = {
      hamstersStats: JSON.stringify(newStatsObj),
    };

    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Error al guardar hamstersStats:", response.statusText, errorData);
      throw new Error("Error en la actualización de hamstersStats: " + response.statusText);
    }

    const data = await response.json();
    //console.log("hamstersStats actualizado correctamente:", data);
    return data;
  } catch (error) {
    console.error("Error en setHamsterStatsInDB:", error);
    return null;
  }
}

/******************************************************
 * 3) OBJETO POR DEFECTO (hamsters al 1000)
 ******************************************************/
function getDefaultHamsterStats() {
  return {
    hamsters: [
      { id: "dior",   energy: 1000, hunger: 1000, thirst: 1000 },
      { id: "coco",   energy: 1000, hunger: 1000, thirst: 1000 },
      { id: "biggie", energy: 1000, hunger: 1000, thirst: 1000 },
    ],
  };
}


/******************************************************
 * Timers / Lógicas de decremento y recuperación
 ******************************************************/

function fillEnergy(hamsterId, speed) {
  const hamsterEl = document.getElementById(hamsterId);
  if (!hamsterEl) return;

  // Llenar progresivamente la energía en función de la velocidad
  let currentEnergy = Number(hamsterEl.getAttribute("energy")) || 0;
  const maxEnergy = 1000;  // Valor máximo de energía
  if (currentEnergy < maxEnergy) {
    currentEnergy += speed;
    if (currentEnergy > maxEnergy) currentEnergy = maxEnergy;
  }

  hamsterEl.setAttribute("energy", currentEnergy);
  const slider = hamsterEl.querySelector(".sliderEnergy");
  if (slider) {
    slider.value = currentEnergy;
    actualizarSlider(slider);
  }

  hamsterEl.classList.remove("exhaust");
  hamsterEl.classList.remove("exhaustSingle");
  hamsterEl.classList.remove("tong");
}

// Función para llenar el hambre con velocidad
function fillHunger(hamsterEl) {
  if (!hamsterEl) return;
  let currentHunger = Number(hamsterEl.getAttribute("hunger")) || 0;
  let newHunger = currentHunger + 300;

  hamsterEl.setAttribute("hunger", newHunger);
  const slider = hamsterEl.querySelector(".sliderHunger");
  if (slider) {
    slider.value = newHunger;
    actualizarSlider(slider);
  }
}

function checkForNeedFood(hamsterEl) {
  // Guardamos el id del intervalo en el propio elemento
  hamsterEl.checkForNeedFoodInterval = setInterval(() => {
    if (!hamsterEl) {
      //console.log("checkForNeedFood return1");
      return;
    }
    if (!hamsterEl.parentElement.id) {
      //console.log("checkForNeedFood return2");
      return;
    }
    if (
      hamsterEl.parentElement.id === "hitboxSlowWorld" ||
      hamsterEl.parentElement.id === "hitboxSlotBuyBiggie" ||
      hamsterEl.parentElement.id === "hitboxSlotBuyCoco" ||
      hamsterEl.parentElement.id === "hitboxSlotBuyDior" ||
      hamsterEl.parentElement.classList.contains("wheel") ||
      hamsterEl.parentElement.id === "filterUnderwater"
    ) {
      //console.log("checkForNeedFood return3");
      return;
    }

    let tooltip;
    if (hamsterEl.parentElement.id === "hitboxSlotUpLeft") {
      tooltip = document.getElementById("comida1Tooltip");
    } else if (hamsterEl.parentElement.id === "hitboxSlotUpRight") {
      tooltip = document.getElementById("comida2Tooltip");
    } else if (hamsterEl.parentElement.id === "hitboxSlotDown") {
      tooltip = document.getElementById("comida3Tooltip");
    }

    let currentHunger = Number(hamsterEl.getAttribute("hunger")) || 0;

    // Si el hamster ya está en cooldown, salimos sin hacer nada.
    if (hamsterEl.dataset.eatingCooldown) return;

    // Solo se actúa si el hunger es menor a 750 y el tooltip muestra un valor >= 1
    if (currentHunger < 700 && Number(tooltip.textContent) >= 1) {
      //console.log("Puede comer");
      // La probabilidad será:
      // - 30% cuando currentHunger es 750,
      // - 100% cuando currentHunger es 0,
      // y de forma lineal entre esos extremos.
      let probability = 0.3 + ((750 - currentHunger) / 750) * 0.7;
      if (Math.random() < probability) {
        // Ejecutar la animación de comer
        setHamsterBackAnimation(hamsterEl.id, "eat", true);
        // Activar el cooldown: no podrá comer de nuevo hasta 20 segundos.
        hamsterEl.dataset.eatingCooldown = "true";
        hamsterEl.dataset.onAction = "true";
        setTimeout(() => {
          delete hamsterEl.dataset.eatingCooldown;
        }, 20000);
      }
    }
  }, 5000);
}

function autoFillComederos(comedero){
  if(fillComederosAuto){
    if(comedero){
      let thisComedero = document.getElementById(comedero+"Hitbox");
      let thisComederoNumber = Number(document.getElementById(comedero+"Tooltip").textContent);
      if(thisComederoNumber < 1){

        //Se intenta rellenar 10 veces
        let count = 0;
        const interval = setInterval(() => {
          thisComedero.click();
          count++;
          if (count === 10) {
            clearInterval(interval);
          }
        }, 200);

      }
    }else{
      const comidaHitboxes = document.querySelectorAll(".comidaHitbox");

      comidaHitboxes.forEach(hitbox => {
        // Obtenemos el id del tooltip correspondiente, por ejemplo "comida1Tooltip"
        const tooltipId = hitbox.id.replace('Hitbox', 'Tooltip');
        const tooltip = Number(document.getElementById(tooltipId).textContent);

        if(tooltip < 1){
          //Se intenta rellenar 10 veces
          let count = 0;
          const interval = setInterval(() => {
            hitbox.click();
            count++;
            if (count === 10) {
              clearInterval(interval);
            }
          }, 200);
        }

      });
    }

  }
}


// Función para llenar la sed con velocidad
function fillThirst(hamsterId, speed) {
  const hamsterEl = document.getElementById(hamsterId);
  if (!hamsterEl) return;

  let currentThirst = Number(hamsterEl.getAttribute("thirst")) || 0;
  hamsterEl.setAttribute("thirst", currentThirst);
  const slider = hamsterEl.querySelector(".sliderWater");
  if (slider) {
    slider.value = currentThirst;
    actualizarSlider(slider);
  }
}

function numeroDeHamsters() {
  // Lista de IDs de los elementos a verificar
  const ids = [
    "hitboxSlotBuyDior",
    "hitboxSlotBuyCoco",
    "hitboxSlotBuyBiggie"
  ];

  let contador = 0;

  // Itera sobre cada ID y verifica si el elemento tiene display none
  ids.forEach(id => {
    const elemento = document.getElementById(id);
    if (elemento) {
      const estilo = window.getComputedStyle(elemento);
      if (estilo.display === "none") {
        contador++;
      }
    }
  });

  return contador;
}

/**
 * Decrementa energía en `amount` (ej: 16.7 por segundo)
 * y actualiza el atributo y slider en el DOM.
 */
function decrementEnergy(hamsterId, amount) {
  const hamsterEl = document.getElementById(hamsterId);
  if (!hamsterEl) return;

  // Leer valor actual (string -> number)
  let currentEnergy = Number(hamsterEl.getAttribute("energy")) || 0;
  currentEnergy -= amount;
  if (currentEnergy < 0) currentEnergy = 0;

  // Actualizar DOM
  hamsterEl.setAttribute("energy", currentEnergy);
  const slider = hamsterEl.querySelector(".sliderEnergy");
  if (slider) slider.value = currentEnergy;
  actualizarSlider(slider);

  startStatsUpdate(idLogeado);

  if (slider.value <= 0) {
    hamsterEl.classList.add("tong");
    hamsterEl.classList.remove("tongU");
    hamsterEl.classList.add("exhaust");
    hamsterEl.classList.remove("exhaustSingle");
    if (hamsterEl.closest('.wrapper')) {
      modifyHamsterSpeed(hamster, setHamsterSpeed, 0.0, true);
    }
  } else if (slider.value < 333) {
    hamsterEl.classList.remove("tong");
    hamsterEl.classList.add("tongU");
    hamsterEl.classList.add("exhaust");
    hamsterEl.classList.remove("exhaustSingle");
    modifyHamsterSpeed(hamsterEl, setHamsterSpeed, 1.5, false);
  } else if (slider.value < 666) {
    hamsterEl.classList.remove("tong");
    hamsterEl.classList.add("tongU");
    hamsterEl.classList.remove("exhaust");
    hamsterEl.classList.add("exhaustSingle");
    modifyHamsterSpeed(hamsterEl, setHamsterSpeed, 1.5, false);
  } else{
    hamsterEl.classList.remove("tong");
    hamsterEl.classList.add("tongU");
    hamsterEl.classList.remove("exhaust");
    hamsterEl.classList.remove("exhaustSingle");
    modifyHamsterSpeed(hamsterEl, setHamsterSpeed, 1.5, false);
  }

  if(slider.value < 1000 && slider.value > 0){
    let valor = numeroDeHamsters();
    añadirMonedasWheel(valor);
  }
  
}

/**
 * Decrementa hambre en `amount` (ej: 0.83 por segundo)
 * y actualiza en el DOM.
 */
function decrementHunger(hamsterId, amount) {
  const hamsterEl = document.getElementById(hamsterId);
  if (!hamsterEl) return;

  let currentHunger = Number(hamsterEl.getAttribute("hunger")) || 0;
  currentHunger -= amount;
  if (currentHunger < 0) currentHunger = 0;

  hamsterEl.setAttribute("hunger", currentHunger);
  const slider = hamsterEl.querySelector(".sliderHunger");
  if (slider) slider.value = currentHunger;
  actualizarSlider(slider);
  startStatsUpdate(idLogeado);
}

/**
 * Decrementa sed en `amount` (ej: 0.56 por segundo)
 * y actualiza en el DOM.
 */
function decrementThirst(hamsterId, amount) {
  const hamsterEl = document.getElementById(hamsterId);
  if (!hamsterEl) return;

  let currentThirst = Number(hamsterEl.getAttribute("thirst")) || 0;
  currentThirst -= amount;
  if (currentThirst < 0) currentThirst = 0;

  hamsterEl.setAttribute("thirst", currentThirst);
  const slider = hamsterEl.querySelector(".sliderWater");
  if (slider) slider.value = currentThirst;
  actualizarSlider(slider);
  startStatsUpdate(idLogeado);
}


function fillFullStats(hamsterId){
  const hamsterEl = document.getElementById(hamsterId);
  if (!hamsterEl) return;

  let currentMax = Number(1000);

  hamsterEl.setAttribute("energy", currentMax);
  hamsterEl.setAttribute("hunger", currentMax);
  hamsterEl.setAttribute("thirst", currentMax);
  const sliders = hamsterEl.querySelectorAll(".sliderHamster");
  sliders.forEach(slider => {
    if (slider) slider.value = currentMax;
    actualizarSlider(slider);
  });
  startStatsUpdate(idLogeado);
}



function startPeriodicStatsUpdate(idLogeado) {
  return;
  // Si ya se inició el intervalo, no creamos uno nuevo.
  if (startPeriodicStatsUpdate.intervalId) {
    //console.log("La actualización periódica ya está en ejecución.");
    return;
  }

  // Se ejecutará cada 5 segundos
  startPeriodicStatsUpdate.intervalId = setInterval(async () => {
    // 1) Tomar todos los hamsters del DOM
    const hamsterEls = document.querySelectorAll(".hamster");
    const statsObj = { hamsters: [] };

    hamsterEls.forEach((el) => {
      // Identifica el hamsterId por la clase dior, coco, biggie, etc.
      let hamsterId = "";
      if (el.classList.contains("dior")) {
        hamsterId = "dior";
      } else if (el.classList.contains("coco")) {
        hamsterId = "coco";
      } else if (el.classList.contains("biggie")) {
        hamsterId = "biggie";
      }

      // Lee los atributos y convierte a número
      const energy = Number.isNaN(Number(el.getAttribute("energy")))
        ? (console.warn("Fallo al guardar: energy"), 0)
        : Number(el.getAttribute("energy"));

      const hunger = Number.isNaN(Number(el.getAttribute("hunger")))
        ? (console.warn("Fallo al guardar: hunger"), 0)
        : Number(el.getAttribute("hunger"));

      const thirst = Number.isNaN(Number(el.getAttribute("thirst")))
        ? (console.warn("Fallo al guardar: thirst"), 0)
        : Number(el.getAttribute("thirst"));

      // Añade los datos al array
      statsObj.hamsters.push({
        id: hamsterId,
        energy,
        hunger,
        thirst,
      });
    });

    // 2) Enviar con UNA sola petición a la base de datos
    await setHamsterStatsInDB(idLogeado, statsObj);
    //console.log('%c Actualización global de stats en BD: %o', 'background: blue; color: white; padding: 4px;', statsObj);
  }, 5000);
}

async function startStatsUpdate(idLogeado) {
  // 1) Tomar todos los hamsters del DOM
  const hamsterEls = document.querySelectorAll(".hamster");
  const statsObj = { hamsters: [] };

  hamsterEls.forEach((el) => {
    // Identifica el hamsterId por la clase dior, coco, biggie, etc.
    let hamsterId = "";
    if (el.classList.contains("dior")) {
      hamsterId = "dior";
    } else if (el.classList.contains("coco")) {
      hamsterId = "coco";
    } else if (el.classList.contains("biggie")) {
      hamsterId = "biggie";
    }

    // Lee los atributos y convierte a número
    const energy = Number.isNaN(Number(el.getAttribute("energy")))
      ? (console.warn("Fallo al guardar: energy"), 0)
      : Number(el.getAttribute("energy"));

    const hunger = Number.isNaN(Number(el.getAttribute("hunger")))
      ? (console.warn("Fallo al guardar: hunger"), 0)
      : Number(el.getAttribute("hunger"));

    const thirst = Number.isNaN(Number(el.getAttribute("thirst")))
      ? (console.warn("Fallo al guardar: thirst"), 0)
      : Number(el.getAttribute("thirst"));

    // Añade los datos al array
    statsObj.hamsters.push({
      id: hamsterId,
      energy,
      hunger,
      thirst,
    });
  });

  // 2) Enviar con UNA sola petición a la base de datos
  await setHamsterStatsInDB(idLogeado, statsObj);
}


//ACTUALIZACION DEL ::BEFORE DE LOS SLIDER STATS
function actualizarSlider(slider) {
  // Actualización del slider (por ejemplo, interpolando un ancho)
  const max = slider.max || 1000;
  const percentage = slider.value / max;
  const thumbWidth = percentage * 60; // Si value=0 → 0px, si value=1000 → 60px
  slider.style.setProperty('--thumb-width', `${thumbWidth}px`);

  // -----------------------------
  // Buscar el icono warning correspondiente
  // -----------------------------
  // 1. Encontrar el contenedor de sliders (su contenedor padre más cercano)
  const slidersContainer = slider.closest('.sliderHamsterSliders');
  if (!slidersContainer) return; // Si no se encuentra, abortamos

  // 2. Obtener el índice del slider dentro de ese contenedor
  const sliderElements = Array.from(slidersContainer.querySelectorAll('.sliderHamster'));
  const index = sliderElements.indexOf(slider);

  // 3. Buscar el contenedor de iconos, asumiendo que es el hermano anterior
  const warningContainer = slidersContainer.previousElementSibling;
  if (!warningContainer) return;

  // 4. Obtener todos los iconos warning dentro de ese contenedor
  const warningIcons = Array.from(warningContainer.querySelectorAll('img.warning'));
  
  // 5. Verificar que exista un icono en la posición 'index'
  if (index >= 0 && index < warningIcons.length) {
    const warningIcon = warningIcons[index];
    // Convertir el valor del slider a número
    const value = Number(slider.value);

    if(warningIcon.classList.contains("warningWater") || warningIcon.classList.contains("warningHunger")){
      if (value < 150) {
        warningIcon.src = "img/errorRed.png";
        warningIcon.classList.add("active");
      } else if (value < 350) {
        warningIcon.src = "img/errorYellow.png";
        warningIcon.classList.add("active");
      } else {
        warningIcon.classList.remove("active");
      }
    }
  }

  // -----------------------------
  // Actualizar el favicon según el conteo global de iconos warning
  // -----------------------------
  // Si helpIconWarnings es true, se cuentan globalmente los iconos warning
  if (helpIconWarnings) {
    // Obtener todos los warning icons en el documento
    const allWarningIcons = document.querySelectorAll('img.warning');
    let redCount = 0;
    let yellowCount = 0;
    allWarningIcons.forEach(icon => {
      if (icon.classList.contains("active") && icon.src.includes("Red")) redCount++;
      if (icon.classList.contains("active") && icon.src.includes("Yellow")) yellowCount++;
    });
    
    // Si existe exactamente un icono rojo, usar el favicon rojo.
    // Si no, pero existe exactamente un icono amarillo, usar el favicon amarillo.
    // En cualquier otro caso se usa el favicon por defecto.
    if (redCount > 0) {
      favicon.href = "img/errorRedFav.png";
    } else if (yellowCount > 0) {
      favicon.href = "img/errorYellowFav.png";
    } else {
      favicon.href = defaultFavicon;
    }
  } else {
    favicon.href = defaultFavicon;
  }
}



// Asignamos el event listener a cada slider y forzamos la actualización inicial
document.querySelectorAll('.sliderHamster').forEach(slider => {
  slider.addEventListener('input', () => {
    actualizarSlider(slider);
  });
  
  // Actualización inicial sin necesidad de dispatchEvent
  actualizarSlider(slider);
});


/******************************************************
 * Uso típico al cargar página, según si un hamster se compró o no
 ******************************************************/


// Objeto que contiene los intervalos para cada hamster
const hamsterIntervalsStats = {};

function startFillingEnergy(hamsterId) {
  // Asegurarnos de que no haya intervalos duplicados
  if (!hamsterIntervalsStats[hamsterId]) {
    hamsterIntervalsStats[hamsterId] = {};
  }

  // Intervalo para llenar la energía
  if (!hamsterIntervalsStats[hamsterId].energy) {
    hamsterIntervalsStats[hamsterId].energy = setInterval(() => {
      fillEnergy(hamsterId, 25);
    }, 1000);
  }
}


function startDecreasingStats(hamsterId) {
  // Asegurarnos de que no haya intervalos duplicados
  if (!hamsterIntervalsStats[hamsterId]) {
    hamsterIntervalsStats[hamsterId] = {};
  }

  // Intervalo para decrementar hambre
  if (!hamsterIntervalsStats[hamsterId].hunger) {
    hamsterIntervalsStats[hamsterId].hunger = setInterval(() => {
      decrementHunger(hamsterId, 1.67);
    }, 1000);
  }

  // Intervalo para decrementar sed
  if (!hamsterIntervalsStats[hamsterId].thirst) {
    hamsterIntervalsStats[hamsterId].thirst = setInterval(() => {
      decrementThirst(hamsterId, 1.11);
    }, 1000);
  }

  startPeriodicStatsUpdate(idLogeado);
}

// Función para asignar el intervalo de energía
function startDecreasingEnergy(hamsterId) {
  // Asegurarnos de que no haya intervalos duplicados
  if (!hamsterIntervalsStats[hamsterId]) {
    hamsterIntervalsStats[hamsterId] = {};
  }

  // Intervalo para decrementar energía
  if (!hamsterIntervalsStats[hamsterId].energy) {
    hamsterIntervalsStats[hamsterId].energy = setInterval(() => {
      decrementEnergy(hamsterId, 16.67);
    }, 1000);
  }
}

// Función para detener un intervalo específico de un hamster (por estadística)
function stopSpecificInterval(hamsterId, stat) {
  if (hamsterIntervalsStats[hamsterId] && hamsterIntervalsStats[hamsterId][stat]) {
    clearInterval(hamsterIntervalsStats[hamsterId][stat]);
    delete hamsterIntervalsStats[hamsterId][stat];  // Limpiar el objeto del intervalo de esa estadística
    //console.log(`Intervalo de ${stat} para el hamster con id: ${hamsterId} detenido.`);
  } else {
    //console.log(`No se encontró el intervalo de ${stat} para el hamster con id: ${hamsterId}.`);
  }
}


async function updateStatsHamsters() {
  // 1) Cargar stats desde la BD
  let userHamstersStats = await getHamsterStatsFromDB(idLogeado);

  // Si la función devolvió null, forzamos valores por defecto y guardamos
  if (!userHamstersStats) {
    userHamstersStats = getDefaultHamsterStats();
    await setHamsterStatsInDB(idLogeado, userHamstersStats);
  }

  console.log("Hamster Stats al iniciar:", userHamstersStats);

  // 2) Esperar 2s (o lo que necesites) y luego recorrer los hamsters del DOM
  setTimeout(() => {
    const hamsterElements = document.querySelectorAll(".hamster");

    hamsterElements.forEach((hamsterEl) => {
      // 2.1) Identificar cuál hamster es (dior, coco, biggie)
      let hamsterId = "";
      if (hamsterEl.classList.contains("dior")) {
        hamsterId = "dior";
      } else if (hamsterEl.classList.contains("coco")) {
        hamsterId = "coco";
      } else if (hamsterEl.classList.contains("biggie")) {
        hamsterId = "biggie";
      }

      // 2.2) Encontrar sus estadísticas en userHamstersStats
      const hamsterData = userHamstersStats.hamsters.find(h => h.id === hamsterId);
      if (hamsterData) {
        hamsterEl.setAttribute("energy", hamsterData.energy);
        hamsterEl.setAttribute("hunger", hamsterData.hunger);
        hamsterEl.setAttribute("thirst", hamsterData.thirst);

        const sliderEnergy = hamsterEl.querySelector(".sliderEnergy");
        if (sliderEnergy) {
          sliderEnergy.value = hamsterData.energy;
          actualizarSlider(sliderEnergy);
        }

        const sliderHunger = hamsterEl.querySelector(".sliderHunger");
        if (sliderHunger) {
          sliderHunger.value = hamsterData.hunger;
          actualizarSlider(sliderHunger);
        }

        const sliderThirst = hamsterEl.querySelector(".sliderWater");
        if (sliderThirst) {
          sliderThirst.value = hamsterData.thirst;
          actualizarSlider(sliderThirst);
        }
      }

      // 2.4) Si el hamster está en la tienda (ej: id incluye "hitboxSlotBuy"), lo llenamos a tope
      if (hamsterEl.parentElement.id.includes("hitboxSlotBuy")) {
        fillFullStats(hamsterId);
      } else {
        // 2.5) Si está fuera de la tienda, iniciamos decrementos y la actualización periódica
        startDecreasingStats(hamsterId);  // Inicia todos los intervalos para el hamster con id
      }
    });
  }, 2000);
}




/* SKINS HOVER */

const setProp = (el, prop, value) => el.style.setProperty(prop, value);

const onMouseUpdate = (e, el, container) => {
    const elRect = el.getBoundingClientRect();

    // Coordenadas relativas al contenedor
    const XRel = e.clientX - elRect.left;
    const YRel = e.clientY - elRect.top;
    const width = elRect.width;

    const scaleFactor = 12; // Cantidad de perspectiva
    const YAngle = -(0.5 - (XRel / width)) * scaleFactor;
    const XAngle = (0.5 - (YRel / width)) * scaleFactor;

    setProp(el, '--dy', `${YAngle}deg`);
    setProp(el, '--dx', `${XAngle}deg`);

    // Calcular el drop-shadow en función de la perspectiva
    const shadowFactor = 2; // Ajusta este valor para modificar la intensidad de la sombra
    const offsetX = -YAngle * shadowFactor;
    const offsetY = XAngle * shadowFactor;
    const shadowBlur = 10; // Valor de desenfoque de la sombra
    const shadowColor = 'rgba(0, 0, 0, 0.4)'; // Color de la sombra

    el.style.filter = `drop-shadow(${offsetX}px ${offsetY}px ${shadowBlur}px ${shadowColor})`;
};

const resetProps = (el) => {
    el.style.setProperty('--dy', '0');
    el.style.setProperty('--dx', '0');
    el.style.filter = 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.4))'; // Restablece el drop-shadow
};

const container = document.getElementById("skinsContainer");
const elements = container.querySelectorAll('.skinContainer');

const adjustHitboxes = (activeEl) => {
    elements.forEach(el => {
        if (el !== activeEl) {
            el.style.pointerEvents = "none"; // Desactiva eventos para evitar colisiones
        }
    });
};

const resetHitboxes = () => {
    elements.forEach(el => {
        el.style.height = ""; // Restablece la altura original
        el.style.pointerEvents = ""; // Reactiva los eventos
    });
};

elements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        el.classList.add('active');
        el.style.zIndex = "180";
        adjustHitboxes(el); // Ajusta las hitboxes de los demás elementos
        onMouseUpdate(e, el, container);
    }, false);

    el.addEventListener('mouseenter', (e) => {
        el.classList.add('active');
        el.style.zIndex = "180";
        adjustHitboxes(el); // Ajusta las hitboxes al entrar
        onMouseUpdate(e, el, container);
    }, false);

    el.addEventListener('mouseleave', () => {
        el.classList.remove('active');
        el.style.zIndex = "0";
        resetHitboxes(); // Restablece las hitboxes al salir
        resetProps(el);
    }, false);
});


/* HREF FRUIT NINJA */
tomatoContainerHitbox.addEventListener("click", function () {
  window.location.href = "pages/Findex.html";
});





    /* CAGE CRISTALS */
let isTransitioning = false;
let transitionTimeout;
let leftHideTimeout;
let rightHideTimeout;

function triggerTransitioning() {
  isTransitioning = true;
  clearTimeout(transitionTimeout);
  transitionTimeout = setTimeout(() => {
    isTransitioning = false;
  }, 700);
}

function hideLeftCursor() {
  clearTimeout(leftHideTimeout);
  cursorReflectLeft.style.display = "none";
}

function hideRightCursor() {
  clearTimeout(rightHideTimeout);
  cursorReflectRight.style.display = "none";
}

function handleLeave(event) {
  if (!isDragging) return;
  const hamsters = document.querySelectorAll('.hamster');
  const comidaHitboxs = document.querySelectorAll('.comidaHitbox');
  if (
    glassRight.contains(event.relatedTarget) ||
    glassLeft.contains(event.relatedTarget) ||
    glassRightHitbox.contains(event.relatedTarget) ||
    glassLeftHitbox.contains(event.relatedTarget) ||
    Array.from(hamsters).some(hamster => hamster.contains(event.relatedTarget)) ||
    Array.from(comidaHitboxs).some(comidaHitbox => comidaHitbox.contains(event.relatedTarget)) ||
    wrapper.contains(event.relatedTarget)
  ) {
    return;
  }
  glassLeft.classList.remove("active");
  glassRight.classList.remove("active");
  cursorReflectLeft.classList.remove("right");
  cursorReflectRight.classList.remove("right");
  hideLeftCursor();
  hideRightCursor();
  triggerTransitioning();
}

glassLeftHitbox.addEventListener("mouseleave", handleLeave);
glassRightHitbox.addEventListener("mouseleave", handleLeave);
glassLeft.addEventListener("mouseleave", handleLeave);
glassRight.addEventListener("mouseleave", handleLeave);

glassLeftHitbox.addEventListener("mouseenter", function() {
  if (!isDragging) return;
  glassLeft.classList.add("active");
  cursorReflectLeft.classList.add("right");
  hideLeftCursor();
});

glassRightHitbox.addEventListener("mouseenter", function() {
  if (!isDragging) return;
  glassRight.classList.add("active");
  cursorReflectRight.classList.add("right");
  hideRightCursor();
  triggerTransitioning();
});

glassLeft.addEventListener("mouseenter", function() {
  if (!isDragging) return;
  glassLeft.classList.add("active");
  cursorReflectLeft.classList.add("right");
  hideLeftCursor();
  triggerTransitioning();
});

glassRight.addEventListener("mouseenter", function() {
  if (!isDragging) return;
  glassRight.classList.add("active");
  cursorReflectRight.classList.add("right");
  hideRightCursor();
  triggerTransitioning();
});

glassLeft.addEventListener("click", function() {
  if (isDragging) return;
  glassLeft.classList.toggle("active");
  cursorReflectLeft.classList.toggle("right");
  hideLeftCursor();
  triggerTransitioning();
});

glassRight.addEventListener("click", function() {
  if (isDragging) return;
  glassRight.classList.toggle("active");
  cursorReflectRight.classList.toggle("right");
  hideRightCursor();
  triggerTransitioning();
});



/* GOTAS DE AGUA */
// Función auxiliar para obtener un delay aleatorio entre 'min' y 'max' segundos
function getRandomDelay(minSeconds, maxSeconds) {
  // Convierte segundos a milisegundos
  const minMs = minSeconds * 1000;
  const maxMs = maxSeconds * 1000;
  return Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
}

// Recarga (reinicia) un GIF concreto forzando al navegador a pedirlo de nuevo
function reloadGif(img) {
  const baseSrc = img.src.split("?")[0]; // quitamos cualquier ?t= anterior
  img.src = baseSrc + "?t=" + Date.now();
}

// Programa la recarga del GIF con un delay aleatorio entre 1 y 10 segundos.
// Cada vez que recarga, vuelve a programar la siguiente recarga.
function scheduleGifRefresh(img) {
  const randomDelay = getRandomDelay(1, 5); // entre 1s y 10s
  setTimeout(() => {
    reloadGif(img);
    scheduleGifRefresh(img); // se reprograma a sí misma para continuar
  }, randomDelay);
}

// Función principal: inicia el bucle de recargas independientes para cada .bebidaGif
function startRandomGifRefreshIndividually() {
  const gifs = document.querySelectorAll(".bebidaGif");
  gifs.forEach((gif) => {
    scheduleGifRefresh(gif);
  });
}

// Llamada inicial, por ejemplo al cargar la página:
startRandomGifRefreshIndividually();


  //TODO !: tooltip-text in perspective with skins
  //TODO !: ocultar y guardar caja -> congelarla temporalmente
  //TODO !: fondos en las skinsCc cuando estén activas
  //TODo !: skins animadas en la portada

  //TODO: posibilidad de mover los containers de tomates/sliceTomates a dentro de Modifiers (opción en modifiersSettings)

  //TODOmini: infoButtonModifiersContainer: tutorial
  
  //TOCREATE: rareza animada en la portada
  //TOCREATE: manera para ordenar skins
  //TOCREATE: cerrar grocery por las noches (+posibilidad de tocar al timbre)
  //TOCREATE: email compañía del agua. Pagar tasas
  //TOCREATE: perder al hamster y llamar al inspector (posible secuestro en furgoneta negra)
  //TOCREATE: hamster con enfermedades y posible muerte + reunir bolas del dragón y llamar a Shenlog para revivir hamster
  //TOCREATE: Tendero descansando en la ventana
  //TOCREATE: ruleta diaria
  
  //TOCREATE_note: Funcionalidad audio



});

