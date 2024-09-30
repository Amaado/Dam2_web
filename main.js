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
  let coinsIhave = parseInt(coinsContainer.textContent);
  let helloMessage = document.getElementById("helloMessage");
  const checkboxLogin = document.getElementById('stayLoged');


  /* CAMBIOS DE ESTILO CUANDO CAMBIO DE TEMA */

  if (window.location.pathname.endsWith("horario.html")) {
    let a = document.getElementById("a");
    let escText = document.getElementById("escText");
    let esc = document.getElementById("esc");
    let esc2 = document.getElementById("esc2");
  }else{
    console.log("Error carga ESC");
  }

  checkbox.checked = localStorage.getItem("checkboxStatus") === 'true';
  
  function applyTheme() {
      if (checkbox.checked) {
          //console.log("Tema claro");
          body.style.backgroundColor = '#dddcb0';
          body.style.color = "#313842";
          cards.forEach(card => {
            card.style.borderColor = '#242e3ccb';
          });
          buttons.forEach(button => {
            button.style.backgroundColor = '#dddcb0';
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

            flechaa.src = "../img/flechaDay.png";
          }else{
            cursor.src = "img/cursors/cccc_veraniego.gif";
            cursorPurpleish.src = "img/cursors/cccc_veraniegoPurpleish.gif";

            flechaa.src = "img/flechaDay.png";
          }


      } else {
          //console.log("Tema oscuro");
          body.style.backgroundColor = '#1c2128';
          body.style.color = "#bfd4e9";
          cards.forEach(card => {
            card.style.borderColor = 'grey';
          });
          buttons.forEach(button => {
            button.style.backgroundColor = '#262b31';
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

            flechaa.src = "../img/flechaNight.png";
          }else{
            cursor.src = "img/cursors/cccc.gif";
            cursorPurpleish.src = "img/cursors/ccccPurpleish.gif";

            flechaa.src = "img/flechaNight.png";
          }
      }
  }


  applyTheme();

  /* ESTILOS HOVER PARA <a>HORARIO <a>LOGIN <a>REGISTER*/

  checkbox.addEventListener('change', () => {
      localStorage.setItem('checkboxStatus', checkbox.checked);
      applyTheme();
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






  
  // 6. Actualizar skinsUnlock de un usuario por id
  async function actualizarSkinsUnlockDeUsuario(idLogin, nuevoSkinsUnlock) {
    if (!nuevoSkinsUnlock || typeof nuevoSkinsUnlock !== 'string') {
      console.error('El valor de nuevoSkinsUnlock no es válido:', nuevoSkinsUnlock);
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
      errorLabelLogin.textContent = "";
      errorLabelLogin.style.color = "#bfd4e9";
      campoNameLogin.style.color = "#1c2128";
      campoPasswordLogin.style.outline = '4px solid #bfd4e9';
      
      try {
        const idLogeado = await verificarUsuarioInicioSesion(campoNameLogin.value, campoPasswordLogin.value);  // Espera a que la promesa se resuelva

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
        }else if (idLogeado === 0) {
          errorLabelLogin.textContent = "Username or password incorrect.";
          errorLabelLogin.style.color = "red";
          campoPasswordLogin.style.color = "red";
          campoPasswordLogin.style.outline = '4px solid red';
          campoNameLogin.style.color = "red";
          campoNameLogin.style.outline = '4px solid red';
          return;
        }


        if (checkboxLogin.checked) {
          localStorage.setItem('sesionAutomatica', 'true');
          localStorage.setItem('idLogeado', idLogeado);
        } else {
          localStorage.removeItem('sesionAutomatica');
          localStorage.removeItem('idLogeado');
        }

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
      const idLogeado = localStorage.getItem('idLogeado');

      if (sesionAutomatica) {
          try {

              /*Crear logout */

              actualizarHelloMessage(idLogeado);
              actualizarMonedas(idLogeado);
              actualizarSkins(idLogeado);

            
          } catch (error) {
              console.error("Error durante el inicio de sesión automático:", error);
          }
      }
  });


    /* ACTUALIZAR helloMessage */

  async function actualizarHelloMessage(idLogeado) {
    try {
        const nombrePorId = await obtenerUsuarioPorId(idLogeado);
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
        console.log("ID logeado:", idLogeado); // Añadir log
        const monedasLogeado = await obtenerMonedasDeUsuario(idLogeado);
        coinLabel.textContent = monedasLogeado;
  
        console.log("Monedas obtenidas:", monedasLogeado); // Añadir log
  
    } catch (error) {
        console.error("Error durante ACTUALIZAR MONEDAS:", error);
    }
  }
  



/* ACTUALIZAR SKINS */

async function actualizarSkins(idLogeado) {
  try {
      const skinsUnlock = await obtenerSkinsUnlockDeUsuario(idLogeado);
      quitarCandadosIniciales(skinsUnlock);
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

          // Quitamos el candado sin costo
          candado.style.opacity = "0%";
          skinContainerLock.style.opacity = "0%";
          skinContainerLock.style.visibility = "hidden";
          skinContainerNotVisible.style.opacity = "0%";
          skinContainerNotVisible.style.visibility = "hidden";
      }
  });
}

let isUnlocking = false;

const idLogeado = localStorage.getItem('idLogeado');
if (!idLogeado) {
  console.error("No se encontró idLogeado en localStorage");
}

async function manejarCandados() {
  const candados = document.querySelectorAll(".candado");

  for (let [index, candado] of candados.entries()) {
      candado.src = "img/lock.png";

      let skinContainer = candado.closest('.skinContainer');
      let skinContainerLock = skinContainer.querySelector('.skinContainerLock');
      let skinContainerNotVisible = skinContainer.querySelector('.skinContainerNotVisible');

      let priceElement = skinContainerNotVisible.querySelector('.price');
      let price = parseInt(priceElement.textContent);

      try {
          const monedasLogeado = await obtenerMonedasDeUsuario(idLogeado);

          candado.addEventListener('click', () => searchUnlockingStatus(candado, skinContainerLock, skinContainerNotVisible, price, index, idLogeado));
          skinContainerNotVisible.addEventListener('click', () => searchUnlockingStatus(candado, skinContainerLock, skinContainerNotVisible, price, index, idLogeado));

          setNormalPrice(skinContainer, price);
      } catch (error) {
          console.error("Error al obtener las monedas:", error);
      }
  }
}

function setNormalPrice(skinContainer, price) {
  let priceNormalElement = skinContainer.querySelector('.priceNormal');

  if (priceNormalElement) {
      priceNormalElement.textContent = price;
  }
}

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

  monedasLogeado -= price;
  await actualizarMonedasUsuario(idLogeado, monedasLogeado);

  document.querySelector('.coinLabel').textContent = monedasLogeado;

  setTimeout(async () => {
      candado.style.opacity = "0%";
      skinContainerLock.style.opacity = "0%";
      skinContainerLock.style.visibility = "hidden";
      skinContainerNotVisible.style.opacity = "0%";
      skinContainerNotVisible.style.visibility = "hidden";
      isUnlocking = false;

      await actualizarSkinsUnlockDeUsuario(idLogeado, skinIndex);
  }, 1100);
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


// Inicializamos los candados y actualizamos las skins desbloqueadas
manejarCandados();
actualizarSkins(idLogeado);






  

      /* CLICK PARA FARMEAR MONEDAS 

      function incrementCoins() {
        coinsIhave++;
        coinLabel.textContent = coinsIhave;
    }
    document.addEventListener('click', incrementCoins);*/
    
    

  /* EFECTO HOVER A ESC CUANDO event.key === "Escape" */

  if (window.location.pathname.endsWith("horario.html")) {
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {

            a.classList.add("aNight-hover");
            escText.classList.add("escTextNight-hover");
            esc.classList.add("escNight-hover");

            a.classList.add("aDay-hover");
            escText.classList.add("escTextDay-hover");
            esc.classList.add("escDay-hover");
            setTimeout(() => {
                a.classList.remove("aNight-hover", "aDay-hover");
                escText.classList.remove("escTextNight-hover", "escTextDay-hover");
                esc.classList.remove("escNight-hover", "escDay-hover");
                a.click();
            }, 175);
        }
      });
    }
    




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
          cursor.style.left = e.clientX + 'px';
          cursor.style.top = e.clientY + 'px';
          cursorPurpleish.style.left = e.clientX + 'px';
          cursorPurpleish.style.top = e.clientY + 'px';
          //console.log(e.clientX + 'left ' + e.clientY + 'top ');
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
      //cursorPurpleish.style.visibility = 'visible';
      //cursor.style.visibility = 'hidden';
    }
  });
  
  document.addEventListener('mouseout', function(e) {
    if (e.target.tagName === 'A' || e.target.closest('.card')
        || e.target.closest('.material-icons-round')  || e.target.closest('.background')
        || e.target.closest('.sun-moon')  || e.target.closest('span') || e.target.closest('#flechaa')
        || e.target.closest('.buttonTheme')) {
              cursorPurpleish.style.opacity = '1%';
      //cursorPurpleish.style.visibility = 'hidden';
      //cursor.style.visibility = 'visible';
    }
  });
  
  } else {
      console.error('Elementos de cursor no encontrados en el DOM.');
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
              console.log('Usando la ruta ../img/sfx_sound1.mp3');
          };
      
          audioTest.oncanplaythrough = function() {
              hoverAudio = audioTest;
              console.log('Usando la ruta img/sfx_sound1.mp3');
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
          link.addEventListener('mouseenter', playHoverAudio);
          link.addEventListener('mouseleave', playHoverAudio);
      });



      /* ACTIVAR MENU-SKINS */

      function addSkinsMenuActive() {
        flechaa.classList.add('active');
        skinsContainer.classList.add('active');
        flechaHitbloxPlus.classList.add('active');

        if (window.location.pathname.endsWith("horario.html")) {
        allESC.style.marginLeft = "10vw";
        }

        if (skinsContainer.classList.contains('active')) {
          coinsContainer.style.marginLeft = "10vw";
        }
      }
      
      function removeSkinsMenuActive() {
        flechaa.classList.remove('active');
        skinsContainer.classList.remove('active');
        flechaHitbloxPlus.classList.remove('active');

        if (window.location.pathname.endsWith("horario.html")) {
          allESC.style.marginLeft = "0vw"
        }

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
      




      
      /* DESBLOQUEO CANDADO */
/*

// Asegúrate de que idLogeado esté definido antes de usarlo.
let isUnlocking = false;

const idLogeado = localStorage.getItem('idLogeado');
if (!idLogeado) {
    console.error("No se encontró idLogeado en localStorage");
    return; // Salimos si no hay idLogeado
}

// Función asincrónica para manejar el desbloqueo de candados
async function manejarCandados(sonCandadosSinRestricciones) {
    let isUnlocking = false;
    let candados = document.querySelectorAll(".candado");
    let sonCandadosSinRestriccioness = this.sonCandadosSinRestricciones;

    for (let candado of candados) {
        candado.src = "img/lock.png";

        let skinContainer = candado.closest('.skinContainer');
        let skinContainerLock = skinContainer.querySelector('.skinContainerLock');
        let skinContainerNotVisible = skinContainer.querySelector('.skinContainerNotVisible');

        let priceElement = skinContainerNotVisible.querySelector('.price');
        let price = parseInt(priceElement.textContent);

        try {
            // Coloca await dentro de una función async
            const monedasLogeado = await obtenerMonedasDeUsuario(idLogeado);

            
            if(sonCandadosSinRestriccioness){
              unlockAnimationNoRestrict(candado, skinContainerLock, skinContainerNotVisible, price, monedasLogeado, idLogeado);
            }else{
              candado.addEventListener('click', () => searchUnlockingStatus(candado, skinContainerLock, skinContainerNotVisible, price, monedasLogeado, idLogeado));
              skinContainerNotVisible.addEventListener('click', () => searchUnlockingStatus(candado, skinContainerLock, skinContainerNotVisible, price, monedasLogeado, idLogeado));
            }

            setNormalPrice(skinContainer, price);
        } catch (error) {
            console.error("Error al obtener las monedas:", error);
        }
    }
}

async function unlockAnimationNoRestrict(){

  if (isUnlocking) return;

  if (monedasLogeado >= price) {
      isUnlocking = true;
      candado.src = "img/lock.gif";
      candado.style.pointerEvents = "none";
      skinContainerLock.style.pointerEvents = "none";

    
      setTimeout(() => {
          candado.style.opacity = "0%";
          skinContainerLock.style.opacity = "0%";
          skinContainerLock.style.visibility = "hidden";
          skinContainerNotVisible.style.opacity = "0%";
          skinContainerNotVisible.style.visibility = "hidden";
          isUnlocking = false;
      }, 1100);
  } else if (monedasLogeado < price) {
      lockedAnimation(candado);
  }
}



function setNormalPrice(skinContainer, price) {
    let priceNormalElement = skinContainer.querySelector('.priceNormal');

    if (priceNormalElement) {
        priceNormalElement.textContent = price;
    }
}

async function searchUnlockingStatus(candado, skinContainerLock, skinContainerNotVisible, price, monedasLogeado, idLogeado) {
    if (isUnlocking) return;

    if (monedasLogeado >= price) {
        isUnlocking = true;
        await unlockAnimation(candado, skinContainerLock, skinContainerNotVisible, price, monedasLogeado, idLogeado);
    } else if (monedasLogeado < price) {
        lockedAnimation(candado);
    }
}




async function unlockAnimation(candado, skinContainerLock, skinContainerNotVisible, price, monedasLogeado, idLogeado) {
    candado.src = "img/lock.gif";
    candado.style.pointerEvents = "none";
    skinContainerLock.style.pointerEvents = "none";

    monedasLogeado -= price;
    coinLabel.textContent = monedasLogeado;

    await actualizarMonedasUsuario(idLogeado, monedasLogeado);

    document.querySelector('.coinLabel').textContent = monedasLogeado;

    setTimeout(() => {
        candado.style.opacity = "0%";
        skinContainerLock.style.opacity = "0%";
        skinContainerLock.style.visibility = "hidden";
        skinContainerNotVisible.style.opacity = "0%";
        skinContainerNotVisible.style.visibility = "hidden";
        isUnlocking = false;
    }, 1100);
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

// Llamar a la función para manejar los candados
manejarCandados(false);


      
      */
  

    
    

});