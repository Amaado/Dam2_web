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
  let loginButton = document.getElementById("loginButton");
  let registerButton = document.getElementById("registerButton");
  let loginScreen = document.getElementById("loginScreen");
  let registerScreen = document.getElementById("registerScreen");
  let loginContainer = document.getElementById("loginContainer");
  let registerContainer = document.getElementById("registerContainer");
  const campoNameLogin = document.getElementById('campoNameLogin');
  const campoPasswordLogin = document.getElementById('campoPasswordLogin');
  const campoNameRegister = document.getElementById('campoNameRegister');
  const campoPasswordRegister = document.getElementById('campoPasswordRegister');
  const campoPasswordRepeatRegister = document.getElementById('campoPasswordRepeatRegister');
  const errorLabelLogin = document.getElementById('errorLabelLogin');
  const errorLabelRegister = document.getElementById('errorLabelRegister');
  const loginSubmit = document.getElementById('loginSubmit');
  const registerSubmit = document.getElementById('registerSubmit');
  let oval = this.querySelector('.svg-oval');
  const flechaa = document.getElementById('flechaa');
  const skinsContainer = document.getElementById('skinsContainer');
  const flechaHitbloxPlus = document.getElementById('flechaHitbloxPlus');
  let allESC = document.querySelector('nav');
  let coinLabel = document.querySelector('.coinLabel');
  let coinsContainer = document.querySelector('.coinsContainer');
  let helloMessage = document.getElementById("helloMessage");
  const checkboxLogin = document.getElementById('stayLoged');
  let logoutButton = document.getElementById("logoutButton");
  let dayCursorSrc;
  let nightCursorSrc;
  let selectedDayButton = null;
  let selectedNightButton = null;
  const DEFAULT_DAY_CURSOR = 'img/cursors/cccc_veraniego.gif';
  const DEFAULT_NIGHT_CURSOR = 'img/cursors/cccc.gif';

  /* CAMBIO DE CURSOR */

  // Agregar event listeners a los botones de skins
  function handleSpecialCursor(cursorSrc, theme) {
    // Aquí podemos manejar cursores especiales que requieran acciones adicionales
    if (cursorSrc.includes('special_cursor_name')) {
      // Realizar acciones específicas para este cursor
      console.log('Cursor especial seleccionado:', cursorSrc);
      // Por ejemplo, cambiar otros elementos de la interfaz, reproducir un sonido, etc.
    }
  }
  
  let idLogeado = localStorage.getItem('idLogeado');

  if (idLogeado) {
    // Usuario logueado: cargar selecciones de cursor
    dayCursorSrc = localStorage.getItem('cursorDay') || DEFAULT_DAY_CURSOR;
    nightCursorSrc = localStorage.getItem('cursorNight') || DEFAULT_NIGHT_CURSOR;
  } else {
    // Usuario deslogueado: usar cursores predeterminados y limpiar selecciones previas
    dayCursorSrc = DEFAULT_DAY_CURSOR;
    nightCursorSrc = DEFAULT_NIGHT_CURSOR;
    localStorage.removeItem('cursorDay');
    localStorage.removeItem('cursorNight');
  }

  function addSkinButtonListeners() {
    const buttonThemeDayElements = document.querySelectorAll('.buttonThemeDay');
    const buttonThemeNightElements = document.querySelectorAll('.buttonThemeNight');

    buttonThemeDayElements.forEach(button => {
      button.addEventListener('click', function() {
        handleCursorChange(this, 'day');
      });
    });

    buttonThemeNightElements.forEach(button => {
      button.addEventListener('click', function() {
        handleCursorChange(this, 'night');
      });
    });
  }

  // Llamar a la función para agregar los event listeners
  addSkinButtonListeners();



  // Función para manejar el cambio de cursor
  function handleCursorChange(buttonElement, theme) {
    const imgElement = buttonElement.querySelector('.buttonThemeImg');
    const cursorSrc = imgElement.getAttribute('alt');
    const idLogeadoR = localStorage.getItem('idLogeado');

    if (!idLogeadoR) {
      console.error('No hay usuario logueado, no se puede cambiar el cursor');
      return;
    }
  
    if (!cursorSrc) {
      console.error('No se encontró la ruta del cursor en el atributo alt');
      return;
    }
  
    // Manejar el botón previamente seleccionado para el tema
    if (theme === 'day') {
      if (selectedDayButton && selectedDayButton !== buttonElement) {
        // Restablecer el ícono del botón anterior a sunIcon.png
        const prevImgElement = selectedDayButton.querySelector('.buttonThemeImg');
        prevImgElement.src = 'img/sunIcon.png';
      }
      // Establecer el nuevo botón seleccionado
      selectedDayButton = buttonElement;
    } else if (theme === 'night') {
      if (selectedNightButton && selectedNightButton !== buttonElement) {
        // Restablecer el ícono del botón anterior a moonIcon.png
        const prevImgElement = selectedNightButton.querySelector('.buttonThemeImg');
        prevImgElement.src = 'img/moonIcon.png';
      }
      // Establecer el nuevo botón seleccionado
      selectedNightButton = buttonElement;
    }
  
    // Cambiar el ícono del botón actual a tickCheck.png
    imgElement.src = 'img/tickCheck.png';
  
    // Aplicar el cambio de cursor
    applyCursorChange(cursorSrc, theme);
  
    // Guardar la selección en la base de datos
    const idLogeado = localStorage.getItem('idLogeado');
    if (idLogeado) {
      saveCursorSelection(idLogeado, theme, cursorSrc);
    }
  }
  


  // Función para aplicar el cambio de cursor
  function applyCursorChange(cursorSrc, theme) {
    if (theme === 'day') {
      // Actualizar el cursor para el tema de día
      dayCursorSrc = cursorSrc || DEFAULT_DAY_CURSOR;
    } else if (theme === 'night') {
      // Actualizar el cursor para el tema de noche
      nightCursorSrc = cursorSrc || DEFAULT_NIGHT_CURSOR;
    }
  
    // Actualizar el cursor si el tema actual coincide
    if ((checkbox.checked && theme === 'day') || (!checkbox.checked && theme === 'night')) {
      if (cursor && cursorPurpleish) {
        cursor.src = cursorSrc || (theme === 'day' ? DEFAULT_DAY_CURSOR : DEFAULT_NIGHT_CURSOR);
        const cursorPurpleishSrc = insertPurpleishBeforeExtension(cursor.src);
        cursorPurpleish.src = cursorPurpleishSrc;
      }
    }
  
    // Manejar cursores especiales si es necesario
    handleSpecialCursor(cursorSrc, theme);
  }


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

// Función para guardar la selección del cursor en la base de datos y en localStorage
async function saveCursorSelection(idLogeado, theme, cursorSrc) {
  const fieldToUpdate = (theme === 'day') ? 'cursorDay' : 'cursorNight';
  const updateData = {};
  updateData[fieldToUpdate] = cursorSrc;

  // Guardar en localStorage
  localStorage.setItem(fieldToUpdate, cursorSrc);

  // Guardar en la base de datos
  const url = `${supabaseUrl}?id=eq.${idLogeado}`;
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Error al actualizar el cursor:', response.statusText, errorData);
      throw new Error('Error en la actualización del cursor: ' + response.statusText);
    }

    const data = await response.json();
    console.log('Cursor actualizado correctamente en la base de datos:', data);
    return data;
  } catch (error) {
    console.error('Error al actualizar el cursor:', error);
  }
}


   // Función para cargar la selección de cursores
  // Función para cargar la selección de cursores
  async function loadCursorSelection(idLogeado) {
    if (!idLogeado) {
      console.log('Usuario no logueado, no se cargan selecciones de cursor.');
      return;
    }
  
    // Intentar cargar desde localStorage
    dayCursorSrc = localStorage.getItem('cursorDay') || DEFAULT_DAY_CURSOR;
    nightCursorSrc = localStorage.getItem('cursorNight') || DEFAULT_NIGHT_CURSOR;
  
    // Si no existen en localStorage, cargar desde la base de datos
    if ((!localStorage.getItem('cursorDay') || !localStorage.getItem('cursorNight')) && idLogeado) {
      const url = `${supabaseUrl}?id=eq.${idLogeado}`;
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json'
          }
        });
  
        if (!response.ok) {
          console.error('Error al obtener el cursor:', response.statusText);
          return;
        }
  
        const data = await response.json();
        if (data.length > 0) {
          const userData = data[0];
          dayCursorSrc = userData.cursorDay || DEFAULT_DAY_CURSOR;
          nightCursorSrc = userData.cursorNight || DEFAULT_NIGHT_CURSOR;
  
          // Guardar en localStorage
          localStorage.setItem('cursorDay', dayCursorSrc);
          localStorage.setItem('cursorNight', nightCursorSrc);
        }
      } catch (error) {
        console.error('Error al obtener el cursor desde la base de datos:', error);
      }
    }
  
    // Actualizar los botones para reflejar la selección
    updateSkinButtons();

    // Aplicar el cursor según el tema actual
    if (checkbox.checked) {
      applyCursorChange(dayCursorSrc, 'day');
    } else {
      applyCursorChange(nightCursorSrc, 'night');
    }
  }


  function updateSkinButtons() {
    // Actualizar los botones para el tema de día
    const buttonThemeDayElements = document.querySelectorAll('.buttonThemeDay');
    buttonThemeDayElements.forEach(button => {
      const imgElement = button.querySelector('.buttonThemeImg');
      const cursorAlt = imgElement.getAttribute('alt');
      if (cursorAlt === dayCursorSrc) {
        // Este es el botón seleccionado
        imgElement.src = 'img/tickCheck.png';
        selectedDayButton = button;
      } else {
        // Restablecer al ícono predeterminado
        imgElement.src = 'img/sunIcon.png';
      }
    });
  
    // Actualizar los botones para el tema de noche
    const buttonThemeNightElements = document.querySelectorAll('.buttonThemeNight');
    buttonThemeNightElements.forEach(button => {
      const imgElement = button.querySelector('.buttonThemeImg');
      const cursorAlt = imgElement.getAttribute('alt');
      if (cursorAlt === nightCursorSrc) {
        // Este es el botón seleccionado
        imgElement.src = 'img/tickCheck.png';
        selectedNightButton = button;
      } else {
        // Restablecer al ícono predeterminado
        imgElement.src = 'img/moonIcon.png';
      }
    });
  }




  /* CAMBIOS DE ESTILO CUANDO CAMBIO DE TEMA */

  checkbox.checked = localStorage.getItem("checkboxStatus") === 'true';
  
  function applyTheme() {
    if (checkbox.checked) {
      // Light theme settings
      body.style.backgroundColor = '#dddcb0';
      body.style.color = "#313842";
      cards.forEach(card => {
        card.style.borderColor = '#242e3ccb';
      });
      buttons.forEach(button => {
        button.style.backgroundColor = '#dddcb0';
      });

      if (cursor && cursorPurpleish) {
        cursor.src = dayCursorSrc;
        cursorPurpleish.src = insertPurpleishBeforeExtension(dayCursorSrc);
      }
      if (flechaa) {
        flechaa.src = "img/flechaDay.png";
      }
      if (logoutButton) {
        logoutButton.src = "img/logoutDay.png";
      }/*
      if(loginContainer){
        loginContainer.backgroundColor = ""
      }*/

    } else {
      // Dark theme settings
      body.style.backgroundColor = '#1c2128';
      body.style.color = "#bfd4e9";
      cards.forEach(card => {
        card.style.borderColor = 'grey';
      });
      buttons.forEach(button => {
        button.style.backgroundColor = '#262b31';
      });

      if (cursor && cursorPurpleish) {
        cursor.src = nightCursorSrc;
        cursorPurpleish.src = insertPurpleishBeforeExtension(nightCursorSrc);
      }
      if (flechaa) {
        flechaa.src = "img/flechaNight.png";
      }
      if (logoutButton) {
        logoutButton.src = "img/logoutNight.png";
      }
    }
  }


  applyTheme();
  


  /* ESTILOS HOVER PARA <a>HORARIO <a>LOGIN <a>REGISTER*/

  checkbox.addEventListener('change', () => {
    localStorage.setItem('checkboxStatus', checkbox.checked);
    applyTheme();
  
    // Actualizar el cursor según el tema
    if (checkbox.checked) {
      // Tema de día
      applyCursorChange(dayCursorSrc, 'day');
    } else {
      // Tema de noche
      applyCursorChange(nightCursorSrc, 'night');
    }
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

  if (loginButton) {
    loginButton.addEventListener('mouseenter', function() {
        if (checkbox.checked) {
            //console.log("Tema claro");
            loginButton.style.backgroundColor = '#edeba4';
        } else {
            //console.log("Tema oscuro");
            loginButton.style.backgroundColor = '#333c4a9d';
        }
    });

    loginButton.addEventListener('mouseleave', function() {
      loginButton.style.backgroundColor = '#333c4a00';
    });
  }

  if (registerButton) {
    registerButton.addEventListener('mouseenter', function() {
        if (checkbox.checked) {
            //console.log("Tema claro");
            registerButton.style.backgroundColor = '#edeba4';
        } else {
            //console.log("Tema oscuro");
            registerButton.style.backgroundColor = '#333c4a9d';
        }
    });

    registerButton.addEventListener('mouseleave', function() {
      registerButton.style.backgroundColor = '#333c4a00';
    });
  }


  /* FUNCIONES CONECTAR DATABASE */

  const supabaseUrl = 'https://jlinrmkailmfvzjkdfni.supabase.co/rest/v1/usuario';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsaW5ybWthaWxtZnZ6amtkZm5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc1MzMwNjUsImV4cCI6MjA0MzEwOTA2NX0.0BmL21nXr61WxALojF7kRk7glhB522Ss87zbBVzpSPo';
  
  // Verificar si el usuario existe por nombre
  async function existeUsuario(nombre) {
    const url = `${supabaseUrl}?nombre=eq.${nombre}`;
  
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
      }
    });
  
    const data = await response.json();
  
    return data.length > 0; // Devuelve true si existe, false si no
  }
  
  
  // Obtener el último id de la tabla usuario
  async function obtenerUltimoId() {
    const url = `${supabaseUrl}?select=id&order=id.desc&limit=1`;
  
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
      }
    });
  
    const data = await response.json();
  
    if (data.length > 0) {
      return data[0].id;  // Devolver el último id
    } else {
      return 0;  // Si no hay registros, devolver 0
    }
  }
  
  
  // Registrar un nuevo usuario con id autoincrementado manualmente
  async function registrarUsuario(nombre, password, coins, skinsUnlock) {
    try {
      const ultimoId = await obtenerUltimoId();  // Obtener el último id
      const nuevoId = ultimoId + 1;  // Incrementar el id
  
      const nuevoUsuario = {
        id: nuevoId,                 // Incluir el nuevo id manualmente
        nombre: nombre,
        password: password,
        coins: parseInt(coins),       // Convertir coins a entero si es necesario
        skinsUnlock: skinsUnlock
      };
  
      const addResponse = await fetch(supabaseUrl, {
        method: 'POST',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoUsuario)
      });
  
      if (addResponse.ok) {
        const data = await addResponse.json();
        console.log('Usuario agregado con éxito:', data);
        return data;
      } else {
        const errorData = await addResponse.text();
        console.error('Error al agregar el usuario:', errorData);
        throw new Error('Error en el registro del usuario');
      }
    } catch (error) {
      console.log('Error en el registro de usuario:', error);
    }
  }
  
  
  
  async function verificarUsuarioInicioSesion(nombre, password) {
    // Usamos directamente supabaseUrl ya que incluye '/rest/v1/usuario'
    const url = `${supabaseUrl}?nombre=eq.${encodeURIComponent(nombre)}&password=eq.${encodeURIComponent(password)}`;
  
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
      }
    });
  
    const data = await response.json();
  
    if (data.length > 0) {
      return parseInt(data[0].id, 10);  // Devuelve el id del usuario si se encuentra
    } else {
      return 0;  // Devuelve 0 si no se encuentra al usuario
    }
  }
  
  
  
  
  
  // 3. Obtener las monedas (coins) de un usuario por id
  async function obtenerMonedasDeUsuario(id) {
    const url = `${supabaseUrl}?id=eq.${id}`;
  
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
      }
    });
  
    const data = await response.json();
  
    if (data.length > 0) {
      return data[0].coins;  // Devuelve el valor de coins
    } else {
      console.error('Usuario no encontrado');
      return null;
    }
  }
  
  // 4. Obtener skinsUnlock de un usuario por id
  async function obtenerSkinsUnlockDeUsuario(id) {
    const url = `${supabaseUrl}?id=eq.${id}`;
  
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
      }
    });
  
    const data = await response.json();
  
    if (data.length > 0) {
      return data[0].skinsUnlock;  // Devuelve el valor de skinsUnlock
    } else {
      console.error('Usuario no encontrado');
      return null;
    }
  }
  
// 5. Actualizar las monedas (coins) de un usuario por id
async function actualizarMonedasUsuario(idLogin, monedasNuevas) {
  if (isNaN(monedasNuevas) || monedasNuevas === null || monedasNuevas === undefined) {
    console.error('El valor de monedasNuevas no es válido:', monedasNuevas);
    return;
  }

  const url = `${supabaseUrl}?id=eq.${idLogin}`;
  const actualizarMonedas = { coins: parseInt(monedasNuevas) };

  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      },
      body: JSON.stringify(actualizarMonedas),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Error al actualizar las monedas:', response.statusText, errorData);
      throw new Error('Error en la actualización de monedas: ' + response.statusText);
    }

    const data = await response.json();
    console.log('Monedas actualizadas correctamente:', data);
    return data;
  } catch (error) {
    console.error('Error al actualizar las monedas:', error);
  }
}


  
  // 7. Obtener un usuario por id
  async function obtenerUsuarioPorId(id) {
    // Comprobamos si el ID es válido
    if (!id) {
        console.error('ID no proporcionado');
        return null;
    }

    // Construimos la URL para buscar al usuario por su ID
    const url = `${supabaseUrl}?id=eq.${id}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json'
            }
        });

        // Verificamos si la respuesta es exitosa
        if (!response.ok) {
            console.error('Error en la solicitud:', response.statusText);
            return null; // Manejo de error
        }

        const data = await response.json();

        // Verificamos si encontramos un usuario
        if (data.length > 0) {
            return data[0].nombre;  // Devuelve el nombre del usuario si se encuentra
        } else {
            console.error('Usuario no encontrado');
            return null;  // Devuelve null si no se encuentra el usuario
        }
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        return null; // Devuelve null en caso de error en la solicitud
    }
}
  



 /* goTo LOGIN */
    let isAnimatingLogin = false;

    loginButton.addEventListener("click", function() {
      if (!loginScreen.classList.contains("active") && !isAnimatingLogin) {
        isAnimatingLogin = true;
        loginScreen.classList.add("active");
        loginScreen.style.backdropFilter = "blur(5px)";
        loginScreen.style.opacity = "100%";
        loginContainer.style.opacity = "100%";
        checkboxLogin.checked = true;


        setTimeout(() => {
          isAnimatingLogin = false;
        }, 500);
      }
    });
    
    loginScreen.addEventListener("click", function(event) {
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
          campoNameLogin.value = '';
          campoPasswordLogin.value = '';
          campoNameLogin.blur();
          campoPasswordLogin.blur();
        }, 500);
      }
    });



    document.querySelector('.formRowCheckbox').addEventListener('click', function() {
      checkboxLogin.checked = !checkboxLogin.checked;
    });

    document.getElementById("stayLoged").addEventListener('click', function() {
      checkboxLogin.checked = !checkboxLogin.checked;
    });

    
    loginSubmit.addEventListener('click', async function() {
      // Reiniciar mensajes de error y estilos
      errorLabelLogin.textContent = "";
      errorLabelLogin.style.color = "#bfd4e9";
      campoNameLogin.style.color = "#1c2128";
      campoNameLogin.style.outline = '4px solid #bfd4e9';
      campoPasswordLogin.style.color = "#1c2128";
      campoPasswordLogin.style.outline = '4px solid #bfd4e9';

      // Validar campos vacíos antes de continuar
      if (campoNameLogin.value.trim() === '' || campoPasswordLogin.value.trim() === '') {
        errorLabelLogin.textContent = "All the information must be filled.";
        errorLabelLogin.style.color = "red";
    
        if (campoNameLogin.value.trim() === '') {
          campoNameLogin.style.color = "red";
          campoNameLogin.style.outline = '4px solid red';
        }
    
        if (campoPasswordLogin.value.trim() === '') {
          campoPasswordLogin.style.color = "red";
          campoPasswordLogin.style.outline = '4px solid red';
        }
        return; // Salir de la función si hay campos vacíos
      }
    
      try {
        // Intentar verificar las credenciales
        const idLogeado = await verificarUsuarioInicioSesion(campoNameLogin.value, campoPasswordLogin.value);
    
        if (idLogeado === 0) {
          // Credenciales incorrectas
          errorLabelLogin.textContent = "Username or password incorrect.";
          errorLabelLogin.style.color = "red";
          campoPasswordLogin.style.color = "red";
          campoPasswordLogin.style.outline = '4px solid red';
          campoNameLogin.style.color = "red";
          campoNameLogin.style.outline = '4px solid red';
          return; // Salir de la función si las credenciales son incorrectas
        }
    


        // Inicio de sesión exitoso, actualizar información del usuario
        if (checkboxLogin.checked) {
          localStorage.setItem('sesionAutomatica', 'true');
          localStorage.setItem('idLogeado', idLogeado);
        } else {
          localStorage.removeItem('sesionAutomatica');
          localStorage.removeItem('idLogeado');
        }
    
        // Actualizar información en la interfaz
        await actualizarHelloMessage(idLogeado);
        await actualizarMonedas(idLogeado);
        await cargarSkins(idLogeado);
    
        actualizarEstadoElementosSesion();
        loadCursorSelection(idLogeado);

        // Cerrar el formulario de inicio de sesión
        loginScreen.click();
    
      } catch (error) {
        console.error("Error durante el inicio de sesión:", error);
        helloMessage.textContent = "Error en el servidor. Inténtalo de nuevo más tarde.";
      }
    });
    
  
    
    

    
    

    /* goTo REGISTER */


    let isAnimatingRegister = false;

    registerButton.addEventListener("click", function() {
      if (!registerScreen.classList.contains("active") && !isAnimatingRegister) {
        isAnimatingRegister = true;
        registerScreen.classList.add("active");
        registerScreen.style.backdropFilter = "blur(5px)";
        registerScreen.style.opacity = "100%";
        registerContainer.style.opacity = "100%";
        
        setTimeout(() => {
          isAnimatingRegister = false;
        }, 500);
      }
    });
    
    registerScreen.addEventListener("click", function(event) {
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
          campoNameRegister.value = '';
          campoPasswordRegister.value = '';
          campoPasswordRepeatRegister.value = '';
          campoNameRegister.blur();
          campoPasswordRegister.blur();
          campoPasswordRepeatRegister.blur();
          // Reiniciar el estado de los estilos y mensajes de error
          errorLabelRegister.textContent = "";
          errorLabelRegister.style.color = "#bfd4e9";
          campoNameRegister.style.color = "#1c2128";
          campoNameRegister.style.outline = '4px solid #bfd4e9';
          campoPasswordRegister.style.color = "#1c2128";
          campoPasswordRegister.style.outline = '4px solid #bfd4e9';
          campoPasswordRepeatRegister.style.color = "#1c2128";
          campoPasswordRepeatRegister.style.outline = '4px solid #bfd4e9';
        }, 500);
      }
    });

    registerSubmit.addEventListener('click', async function() { 
      // Reiniciar el estado de los estilos y mensajes de error
      errorLabelRegister.textContent = "";
      errorLabelRegister.style.color = "#bfd4e9";
      campoNameRegister.style.color = "#1c2128";
      campoNameRegister.style.outline = '4px solid #bfd4e9';
      campoPasswordRegister.style.color = "#1c2128";
      campoPasswordRegister.style.outline = '4px solid #bfd4e9';
      campoPasswordRepeatRegister.style.color = "#1c2128";
      campoPasswordRepeatRegister.style.outline = '4px solid #bfd4e9';
    
      // Validar si algún campo está vacío
      if (campoNameRegister.value.trim() === '' || campoPasswordRegister.value.trim() === '' || campoPasswordRepeatRegister.value.trim() === '') {
        errorLabelRegister.textContent = "All the information must be filled.";
        errorLabelRegister.style.color = "red";
        
        if (campoNameRegister.value.trim() === '') { // Resaltar campo vacío
          campoNameRegister.style.color = "red";
          campoNameRegister.style.outline = '4px solid red';
        }
    
        if (campoPasswordRegister.value.trim() === '') { // Resaltar campo vacío
          campoPasswordRegister.style.color = "red";
          campoPasswordRegister.style.outline = '4px solid red';
        }
    
        if (campoPasswordRepeatRegister.value.trim() === '') { // Resaltar campo vacío
          campoPasswordRepeatRegister.style.color = "red";
          campoPasswordRepeatRegister.style.outline = '4px solid red';
        }
      } else {
        // Validar si las contraseñas coinciden
        if (campoPasswordRegister.value !== campoPasswordRepeatRegister.value) {
          errorLabelRegister.textContent = "The passwords don't match.";
          errorLabelRegister.style.color = "red";
          campoPasswordRegister.style.color = "red";
          campoPasswordRegister.style.outline = '4px solid red';
          campoPasswordRepeatRegister.style.color = "red";
          campoPasswordRepeatRegister.style.outline = '4px solid red';
    
        } else {
          // Verificar si el usuario ya existe
          const usuarioExiste = await existeUsuario(campoNameRegister.value); // Cambiado a `usuarioExiste`
            
          if (usuarioExiste) { // Cambiado a `usuarioExiste`
              errorLabelRegister.textContent = "El usuario ya existe.";
              errorLabelRegister.style.color = "red";
              campoNameRegister.style.color = "red";
              campoNameRegister.style.outline = '4px solid red';
          } else {
            // Restablecer los estilos si todo es correcto
            errorLabelRegister.textContent = "";
            errorLabelRegister.style.color = "#bfd4e9";
            campoNameRegister.style.color = "#1c2128";
            campoNameRegister.style.outline = '4px solid #bfd4e9';
            campoPasswordRegister.style.color = "#1c2128";
            campoPasswordRepeatRegister.style.color = "#1c2128";
    
            try {
              // Intentar registrar al usuario con id autoincrementado
              await registrarUsuario(campoNameRegister.value, campoPasswordRegister.value, "0", "LLLL");
              errorLabelRegister.textContent = "User signed up correctly!";
              errorLabelRegister.style.color = "#bfd4e9";
            } catch (error) {
              errorLabelRegister.textContent = "Error when signing up.";
              errorLabelRegister.style.color = "red";
              console.log(error);
            }
          }
        }
      }
    });





  /* GUARDAR SESION LOCALSTORAGE */

  window.addEventListener('load', async function() {
    const sesionAutomatica = localStorage.getItem('sesionAutomatica');
    idLogeado = localStorage.getItem('idLogeado');
  
    if (sesionAutomatica && idLogeado) {
      try {
        // Actualizar información del usuario
        await actualizarHelloMessage(idLogeado);
        await actualizarMonedas(idLogeado);
        await cargarSkins(idLogeado);
        await loadCursorSelection(idLogeado);
      } catch (error) {
        console.error("Error durante el inicio de sesión automático:", error);
      }
    } else {
      // Usuario deslogueado: usar cursores predeterminados y limpiar selecciones
      dayCursorSrc = DEFAULT_DAY_CURSOR;
      nightCursorSrc = DEFAULT_NIGHT_CURSOR;
      localStorage.removeItem('cursorDay');
      localStorage.removeItem('cursorNight');
    }
  
    // Aplicar el tema
    applyTheme();
  
    // Actualizar estado de los elementos según la sesión
    actualizarEstadoElementosSesion();
  });

  // ... (código existente)

  if (logoutButton) {
    logoutButton.addEventListener('click', function() {
      // Limpiar datos de sesión
      localStorage.removeItem('sesionAutomatica');
      localStorage.removeItem('idLogeado');
  
      // Limpiar selección de cursores
      localStorage.removeItem('cursorDay');
      localStorage.removeItem('cursorNight');
  
      // Restablecer cursores predeterminados
      dayCursorSrc = DEFAULT_DAY_CURSOR;
      nightCursorSrc = DEFAULT_NIGHT_CURSOR;
      applyTheme();
  
      // Limpiar información de la interfaz
      helloMessage.textContent = '';
      coinLabel.textContent = '';
  
      // Actualizar estado de los elementos
      actualizarEstadoElementosSesion();
  
      // Recargar la página o redirigir si es necesario
      location.reload();
    });
  }

    /* ACTUALIZAR helloMessage */

  async function actualizarHelloMessage(idLogeado) {
    try {
        const nombrePorId = await obtenerUsuarioPorId(idLogeado);
        helloMessage.textContent = "";
        helloMessage.textContent += "Hola, " + capitalizeFirstLetter(nombrePorId);
      
    } catch (error) {
        console.error("Error durante ACTUALIZAR helloMessage:", error);
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }


  /* ACTUALIZAR MONEDAS */

  async function actualizarMonedas(idLogeado) {
    try {
        console.log("ID logeado:", idLogeado);
        const monedasLogeado = await obtenerMonedasDeUsuario(idLogeado);
        coinLabel.textContent = monedasLogeado;
  
        console.log("Monedas obtenidas:", monedasLogeado);
  
    } catch (error) {
        console.error("Error durante ACTUALIZAR MONEDAS:", error);
    }
  }

  
    /* CLICK PARA FARMEAR MONEDAS */

    async function incrementCoins(idLogeado) {
      try {
        const monedasLogeado = await obtenerMonedasDeUsuario(idLogeado);
    
        const nuevasMonedas = monedasLogeado + 1;
        coinLabel.textContent = nuevasMonedas;
    
        await actualizarMonedasUsuario(idLogeado, nuevasMonedas);
    
      } catch (error) {
        console.error("Error durante AÑADIR MONEDAS CLICK:", error);
      }
    }
    
    document.addEventListener('click', function(event) {
      const idLogeado = parseInt(localStorage.getItem('idLogeado'));
      
      // Verificar si el usuario está en el menú de skins
      if (!isInSkinsMenu()) {
        if (idLogeado) {
          incrementCoins(idLogeado);
        } else {
          console.error("Usuario no logeado.");
        }
      }
    });
    
    // Función para verificar si el usuario está en el menú de skins
    function isInSkinsMenu() {
      // Obtenemos el contenedor del menú de skins por su ID
      const skinsMenu = document.getElementById('skinsContainer');
      
      // Verificamos si el menú de skins tiene la clase 'active'
      if (skinsMenu && skinsMenu.classList.contains('active')) {
        return true;  // Si tiene la clase 'active', estamos en el menú de skins
      }
    
      return false;  // No estamos en el menú de skins
    }



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
  const candados = document.querySelectorAll('.candado');

  codigo.split('').forEach((caracter, index) => {
    if (caracter === '1' && candados[index]) {
      const candado = candados[index];
      const skinContainer = candado.closest('.skinContainer');
      const skinContainerLock = skinContainer.querySelector('.skinContainerLock');
      const skinContainerNotVisible = skinContainer.querySelector('.skinContainerNotVisible');

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
    skinsUnlock = skinsUnlock.padEnd(totalSkins, 'L');
  }

  for (let [index, candado] of candados.entries()) {
    candado.src = "img/lock.png";

    let skinContainer = candado.closest('.skinContainer');
    let skinContainerLock = skinContainer.querySelector('.skinContainerLock');
    let skinContainerNotVisible = skinContainer.querySelector('.skinContainerNotVisible');

    let priceElement = skinContainerNotVisible.querySelector('.price');
    let price;  // Declaramos la variable fuera del if-else
    
    if (priceElement.textContent === "FREE") {
      price = 0;  // Asignamos 0 si el texto es "FREE"
    } else {
      price = parseInt(priceElement.textContent);  // Convertimos el precio en número si no es "FREE"
    }

    // Comprobar si la skin está desbloqueada
    if (skinsUnlock[index] === '1') {
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
      candado.addEventListener('click', () => searchUnlockingStatus(candado, skinContainerLock, skinContainerNotVisible, price, index, idLogeado));
      skinContainerNotVisible.addEventListener('click', () => searchUnlockingStatus(candado, skinContainerLock, skinContainerNotVisible, price, index, idLogeado));

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

async function searchUnlockingStatus(candado, skinContainerLock, skinContainerNotVisible, price, skinIndex, idLogeado) {
  if (isUnlocking) return;

  let monedasLogeado = await obtenerMonedasDeUsuario(idLogeado);

  if (monedasLogeado >= price) {
    isUnlocking = true;
    await unlockAnimation(candado, skinContainerLock, skinContainerNotVisible, price, monedasLogeado, idLogeado, skinIndex);
  } else {
    lockedAnimation(candado);
  }
}

async function unlockAnimation(candado, skinContainerLock, skinContainerNotVisible, price, monedasLogeado, idLogeado, skinIndex) {
  candado.src = "img/lock.gif";
  candado.style.pointerEvents = "none";
  skinContainerLock.style.pointerEvents = "none";

  // Restar el precio y actualizar en la base de datos
  monedasLogeado -= price;

  // Actualizar el contador de monedas en la interfaz
  document.querySelector('.coinLabel').textContent = monedasLogeado;
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
    if (!skinsUnlock || typeof skinsUnlock !== 'string' || skinsUnlock.length === 0) {
      skinsUnlock = 'L'.repeat(totalSkins);
      console.warn('skinsUnlock no válido, inicializando con:', skinsUnlock);
    }

    // Ajustar la longitud de skinsUnlock si es necesario
    if (skinsUnlock.length < totalSkins) {
      skinsUnlock = skinsUnlock.padEnd(totalSkins, 'L');
      console.warn('skinsUnlock de longitud insuficiente, ajustando a:', skinsUnlock);
    }

    // Convertir a array para modificar
    let skinsArray = skinsUnlock.split('');

    // Verificar que skinIndex es válido
    if (skinIndex < 0 || skinIndex >= skinsArray.length) {
      console.error('skinIndex fuera de rango:', skinIndex);
      return;
    }

    // Actualizar el carácter correspondiente a '1'
    if (skinsArray[skinIndex] === 'L') {
      skinsArray[skinIndex] = '1';
    } else {
      console.warn('La skin ya está desbloqueada o tiene un valor inesperado:', skinsArray[skinIndex]);
    }

    // Unir el array en una cadena
    let nuevoSkinsUnlock = skinsArray.join('');

    // Actualizar en la base de datos
    await actualizarSkinsUnlockDeUsuario(idLogin, nuevoSkinsUnlock);
  } catch (error) {
    console.error('Error al desbloquear la skin:', error);
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
  if (typeof nuevoSkinsUnlock !== 'string') {
    console.error('El valor de nuevoSkinsUnlock no es una cadena:', nuevoSkinsUnlock);
    return;
  }

  const url = `${supabaseUrl}?id=eq.${idLogin}`;
  const actualizarSkins = { skinsUnlock: nuevoSkinsUnlock };

  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      },
      body: JSON.stringify(actualizarSkins),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Error al actualizar skinsUnlock:', response.statusText, errorData);
      throw new Error('Error en la actualización de skinsUnlock: ' + response.statusText);
    }

    const data = await response.json();
    console.log('SkinsUnlock actualizado correctamente:', data);
    return data;
  } catch (error) {
    console.error('Error al actualizar skinsUnlock:', error);
  }
}

// Llamamos a cargarSkins al cargar la página
cargarSkins(idLogeado);





    





  /* OCULTAR ELEMENTOS CUANDO LA SESION ESTÁ INICIADA */

  function actualizarEstadoElementosSesion() {
    const sesionAutomatica = localStorage.getItem('sesionAutomatica');
    const idLogeado = localStorage.getItem('idLogeado');
  
    if (sesionAutomatica && idLogeado) {
      // El usuario ha iniciado sesión
      // Ocultar botones de Login y Register
      if (loginButton) {
        loginButton.disabled = true;
        loginButton.style.display = 'none';
      }
      if (registerButton) {
        registerButton.disabled = true;
        registerButton.style.display = 'none';
      }
  
      // Mostrar botón de Logout si existe
      if (logoutButton) {
        logoutButton.style.display = 'flex';
      }
  
      // Mostrar menú de skins y monedas
      if (skinsContainer) {
        skinsContainer.style.display = 'flex';
      }
      if (coinsContainer) {
        coinsContainer.style.display = 'flex';
      }
      if (flechaa) {
        flechaa.style.display = 'flex';
      }
      if (flechaHitbloxPlus) {
        flechaHitbloxPlus.style.display = 'flex';
      }

    // Habilitar los botones de skins
    const buttonThemeElements = document.querySelectorAll('.buttonTheme');
    buttonThemeElements.forEach(button => {
      button.style.pointerEvents = 'auto';
      button.style.opacity = '1';
    });
    } else {
      // El usuario no ha iniciado sesión
      // Mostrar botones de Login y Register
      if (loginButton) {
        loginButton.disabled = false;
        loginButton.style.display = 'flex';
      }
      if (registerButton) {
        registerButton.disabled = false;
        registerButton.style.display = 'flex';
      }
  
      // Ocultar botón de Logout si existe
      if (logoutButton) {
        logoutButton.style.display = 'none';
      }
  
      // Ocultar menú de skins y monedas
      if (skinsContainer) {
        skinsContainer.style.display = 'none';
      }
      if (coinsContainer) {
        coinsContainer.style.display = 'none';
      }
      if (flechaa) {
        flechaa.style.display = 'none';
      }
      if (flechaHitbloxPlus) {
        flechaHitbloxPlus.style.display = 'none';
      }

          // Deshabilitar los botones de skins
      const buttonThemeElements = document.querySelectorAll('.buttonTheme');
      buttonThemeElements.forEach(button => {
        button.style.pointerEvents = 'none';
        button.style.opacity = '0.5';
      });
  
      // Restablecer los botones seleccionados y sus íconos
      if (selectedDayButton) {
        const imgElement = selectedDayButton.querySelector('.buttonThemeImg');
        imgElement.src = 'img/sunIcon.png';
        selectedDayButton = null;
      }
      if (selectedNightButton) {
        const imgElement = selectedNightButton.querySelector('.buttonThemeImg');
        imgElement.src = 'img/moonIcon.png';
        selectedNightButton = null;
      }
    }
  }
  
  



    /* CUSTOM CURSOR ADJUSTMENTS */

    setTimeout(function() {
      cursorPurpleish.style.opacity = '1%';
    }, 1);
    
    let soloInicio = 0;
    let isCursorOverSpecialElement = false;
    
    if (cursor && cursorPurpleish) {
      const skinsContainer = document.getElementById('skinsContainer');
    
      document.addEventListener('mousemove', function(e) {
        soloInicio++;
        if (soloInicio == 1) {
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
          cursorPurpleish.style.opacity = '100%';
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
          cursorPurpleish.style.opacity = '1%';
          isCursorOverSpecialElement = false;
        }
      });
    
      if (skinsContainer) {
        skinsContainer.addEventListener('mousemove', function(e) {
          if (!isCursorOverSpecialElement) {
            const rect = skinsContainer.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const contentWidth = skinsContainer.clientWidth;
        
            if (mouseX >= contentWidth) {
              // El ratón está sobre el scrollbar
              cursorPurpleish.style.opacity = '100%';
            } else {
              // El ratón está dentro de skinsContainer pero no sobre el scrollbar
              cursorPurpleish.style.opacity = '1%';
            }
          }
        });
    
        skinsContainer.addEventListener('mouseleave', function() {
          if (!isCursorOverSpecialElement) {
            cursorPurpleish.style.opacity = '1%';
          }
        });
      }
    } else {
      console.error('Elementos de cursor no encontrados en el DOM.');
    }


  /* PURPLEISH EN EL SCROLL DE SKINS */



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
  
      document.querySelectorAll('a:has(.card)').forEach((link, index) => {
        if (index === 0) return;
      
        let ovalTimeout;
      
        link.addEventListener('mouseenter', function() {
          let oval = this.querySelector('.svg-oval');
      
          if (oval) {
            clearTimeout(ovalTimeout);
            oval.classList.add('show');
          } else {
            oval = createOval();
            
            this.appendChild(oval);
      
           requestAnimationFrame(() => {
              oval.classList.add('show');
            });
          }
        });
      
        link.addEventListener('mouseleave', function() {
          const oval = this.querySelector('.svg-oval');
          if (oval) {
            oval.classList.remove('show');
            
            ovalTimeout = setTimeout(() => {
              if (oval) {
                this.removeChild(oval);
              }
            }, 400);
          }
        });
      });



      /* AUDIO FUNCTIONS */
      let hoverAudio;

      function loadAudio() {
          const audioTest = new Audio('img/sfx_sound1.mp3');
          
          audioTest.onerror = function() {
              hoverAudio = new Audio('../img/sfx_sound1.mp3');
              //console.log('Usando la ruta ../img/sfx_sound1.mp3');
          };
      
          audioTest.oncanplaythrough = function() {
              hoverAudio = audioTest;
              //console.log('Usando la ruta img/sfx_sound1.mp3');
          };
      
          audioTest.load();
      }
      
      loadAudio();
      
      function playHoverAudio() {
          if (hoverAudio) {
              hoverAudio.currentTime = 0;
              hoverAudio.play()
                  .catch((error) => {
                      if (error.name === 'NotAllowedError') {
                          console.log("No se permite reproducir audio sin interacción del usuario."); // Personaliza el mensaje
                      } else {
                          console.log("Error al reproducir audio:", error); // Para otros errores
                      }
                  });
          }
      }
      
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', playHoverAudio);
        card.addEventListener('mouseleave', playHoverAudio);
    });
    
    document.querySelectorAll('a').forEach(link => {
        if (!link.closest('nav')) {
            link.addEventListener('mouseenter', playHoverAudio);
            link.addEventListener('mouseleave', playHoverAudio);
        }
    });
    



      /* ACTIVAR MENU-SKINS */

      function addSkinsMenuActive() {
        flechaa.classList.add('active');
        skinsContainer.classList.add('active');
        flechaHitbloxPlus.classList.add('active');

        if (skinsContainer.classList.contains('active')) {
          coinsContainer.style.marginLeft = "10vw";
        }
      }
      
      function removeSkinsMenuActive() {
        flechaa.classList.remove('active');
        skinsContainer.classList.remove('active');
        flechaHitbloxPlus.classList.remove('active');

        if (!skinsContainer.classList.contains('active')) {
          coinsContainer.style.marginLeft = "0vw";
        }
      }
      
      flechaa.addEventListener('mouseenter', addSkinsMenuActive);
      flechaa.addEventListener('mouseleave', removeSkinsMenuActive);
      skinsContainer.addEventListener('mouseenter', addSkinsMenuActive);
      skinsContainer.addEventListener('mouseleave', removeSkinsMenuActive);
      flechaHitbloxPlus.addEventListener('mouseenter', addSkinsMenuActive);
      flechaHitbloxPlus.addEventListener('mouseleave', removeSkinsMenuActive);
      
    
    

});