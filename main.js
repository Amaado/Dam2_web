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
  let singinButton = document.getElementById("singinButton");
  let loginScreen = document.getElementById("loginScreen");
  let singinScreen = document.getElementById("singinScreen");
  let loginContainer = document.getElementById("loginContainer");
  let singinContainer = document.getElementById("singinContainer");
  const campoNameLogin = document.getElementById('campoNameLogin');
  const campoPasswordLogin = document.getElementById('campoPasswordLogin');
  const campoNameRegister = document.getElementById('campoNameRegister');
  const campoPasswordRegister = document.getElementById('campoPasswordRegister');
  const campoPasswordRepeatRegister = document.getElementById('campoPasswordRepeatRegister');
  const errorLabelLogin = document.getElementById('errorLabelLogin');
  const errorLabelSingin = document.getElementById('errorLabelSingin');
  const loginSubmit = document.getElementById('loginSubmit');
  const singinSubmit = document.getElementById('singinSubmit');
  let oval = this.querySelector('.svg-oval');
  const flechaa = document.getElementById('flechaa');
  const skinsContainer = document.getElementById('skinsContainer');
  const flechaHitbloxPlus = document.getElementById('flechaHitbloxPlus');
  let allESC = document.querySelector('nav');
  let coinLabel = document.querySelector('.coinLabel');
  let coinsContainer = document.querySelector('.coinsContainer');
  let coinsIhave = parseInt(coinsContainer.textContent);
  let idLogeado;
  let helloMessage = document.getElementById("helloMessage");


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

  /* ESTILOS HOVER PARA <a>HORARIO <a>LOGIN <a>SINGIN*/

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

  if (singinButton) {
    singinButton.addEventListener('mouseenter', function() {
        if (checkbox.checked) {
            //console.log("Tema claro");
            singinButton.style.backgroundColor = '#edeba4';
        } else {
            //console.log("Tema oscuro");
            singinButton.style.backgroundColor = '#333c4a9d';
        }
    });

    singinButton.addEventListener('mouseleave', function() {
      singinButton.style.backgroundColor = '#333c4a00';
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
  async function actualizarMonedasDeUsuario(id, nuevasMonedas) {
    const url = `${supabaseUrl}?id=eq.${id}`;
  
    const actualizarMonedas = { coins: nuevasMonedas };
  
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(actualizarMonedas)
    });
  
    if (response.ok) {
      console.log('Monedas actualizadas correctamente:', await response.json());
    } else {
      console.error('Error al actualizar las monedas:', response.statusText);
    }
  }
  
  // 6. Actualizar skinsUnlock de un usuario por id
  async function actualizarSkinsUnlockDeUsuario(id, nuevoSkinsUnlock) {
    const url = `${supabaseUrl}?id=eq.${id}`;
  
    const actualizarSkins = { skinsUnlock: nuevoSkinsUnlock };
  
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(actualizarSkins)
    });
  
    if (response.ok) {
      console.log('SkinsUnlock actualizado correctamente:', await response.json());
    } else {
      console.error('Error al actualizar skinsUnlock:', response.statusText);
    }
  }
  
  
  // 7. Obtener un usuario por id
  async function obtenerUsuarioPorId(id) {
    // Construimos la URL para buscar al usuario por su ID
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
      return data[0].nombre;  // Devuelve el nombre del usuario si se encuentra
    } else {
      console.error('Usuario no encontrado');
      return null;  // Devuelve null si no se encuentra el usuario
    }
  }
  



 /* LOGIN */
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
      const checkbox = document.getElementById('stayLoged');
      checkbox.checked = !checkbox.checked;
    });

    
    loginSubmit.addEventListener('click', async function() {
      try {
        const idLogeado = await verificarUsuarioInicioSesion(campoNameLogin.value, campoPasswordLogin.value);  // Espera a que la promesa se resuelva
        console.log(idLogeado);
        
        // Si no se encuentra el usuario, evita continuar con las demás operaciones
        if (idLogeado === 0) {
          helloMessage.textContent = "Nombre de usuario o contraseña incorrectos";
          return;
        }
    
        // Si el usuario es válido, continúa con las demás operaciones
        const monedasLogeado = await obtenerMonedasDeUsuario(idLogeado);
        const skinsUnlockLogeado = await obtenerSkinsUnlockDeUsuario(idLogeado);
    
        // Actualizamos monedas y skins desbloqueados
        await actualizarMonedasDeUsuario(idLogeado, "777");
        await actualizarSkinsUnlockDeUsuario(idLogeado, "1LLL");
    
        // Obtenemos el nombre del usuario por su ID y lo mostramos en el helloMessage
        const nombrePorId = await obtenerUsuarioPorId(idLogeado);
        helloMessage.textContent = nombrePorId;
    
      } catch (error) {
        console.error("Error durante el inicio de sesión:", error);
        helloMessage.textContent = "Error en el servidor. Inténtalo de nuevo más tarde.";
      }
    });
    
    

    
    

    /* SINGIN */


    let isAnimatingSingin = false;

    singinButton.addEventListener("click", function() {
      if (!singinScreen.classList.contains("active") && !isAnimatingSingin) {
        isAnimatingSingin = true;
        singinScreen.classList.add("active");
        singinScreen.style.backdropFilter = "blur(5px)";
        singinScreen.style.opacity = "100%";
        singinContainer.style.opacity = "100%";
        
        setTimeout(() => {
          isAnimatingSingin = false;
        }, 500);
      }
    });
    
    singinScreen.addEventListener("click", function(event) {
      if (isAnimatingSingin) return;
    
      // Comprueba si el clic fue fuera del singinContainer
      if (!singinContainer.contains(event.target)) {
        isAnimatingSingin = true;
        singinScreen.style.backdropFilter = "blur(0)";
        singinScreen.style.opacity = "0%";
        singinContainer.style.opacity = "0%";
    
        setTimeout(() => {
          singinScreen.classList.remove("active");
          singinScreen.style.opacity = "0%";
          singinContainer.style.opacity = "0%";
          isAnimatingSingin = false;
          campoNameRegister.value = '';
          campoPasswordRegister.value = '';
          campoPasswordRepeatRegister.value = '';
          campoNameRegister.blur();
          campoPasswordRegister.blur();
          campoPasswordRepeatRegister.blur();
          // Reiniciar el estado de los estilos y mensajes de error
          errorLabelSingin.textContent = "";
          errorLabelSingin.style.color = "#bfd4e9";
          campoNameRegister.style.color = "#1c2128";
          campoNameRegister.style.outline = '4px solid #bfd4e9';
          campoPasswordRegister.style.color = "#1c2128";
          campoPasswordRegister.style.outline = '4px solid #bfd4e9';
          campoPasswordRepeatRegister.style.color = "#1c2128";
          campoPasswordRepeatRegister.style.outline = '4px solid #bfd4e9';
        }, 500);
      }
    });

    singinSubmit.addEventListener('click', async function() { 
      // Reiniciar el estado de los estilos y mensajes de error
      errorLabelSingin.textContent = "";
      errorLabelSingin.style.color = "#bfd4e9";
      campoNameRegister.style.color = "#1c2128";
      campoNameRegister.style.outline = '4px solid #bfd4e9';
      campoPasswordRegister.style.color = "#1c2128";
      campoPasswordRegister.style.outline = '4px solid #bfd4e9';
      campoPasswordRepeatRegister.style.color = "#1c2128";
      campoPasswordRepeatRegister.style.outline = '4px solid #bfd4e9';
    
      // Validar si algún campo está vacío
      if (campoNameRegister.value.trim() === '' || campoPasswordRegister.value.trim() === '' || campoPasswordRepeatRegister.value.trim() === '') {
        errorLabelSingin.textContent = "All the information must be filled.";
        errorLabelSingin.style.color = "red";
        
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
          errorLabelSingin.textContent = "The passwords don't match.";
          errorLabelSingin.style.color = "red";
          campoPasswordRegister.style.color = "red";
          campoPasswordRegister.style.outline = '4px solid red';
          campoPasswordRepeatRegister.style.color = "red";
          campoPasswordRepeatRegister.style.outline = '4px solid red';
    
        } else {
          // Verificar si el usuario ya existe
          const usuarioExiste = await existeUsuario(campoNameRegister.value); // Cambiado a `usuarioExiste`
            
          if (usuarioExiste) { // Cambiado a `usuarioExiste`
              errorLabelSingin.textContent = "El usuario ya existe.";
              errorLabelSingin.style.color = "red";
              campoNameRegister.style.color = "red";
              campoNameRegister.style.outline = '4px solid red';
          } else {
            // Restablecer los estilos si todo es correcto
            errorLabelSingin.textContent = "";
            errorLabelSingin.style.color = "#bfd4e9";
            campoNameRegister.style.color = "#1c2128";
            campoNameRegister.style.outline = '4px solid #bfd4e9';
            campoPasswordRegister.style.color = "#1c2128";
            campoPasswordRepeatRegister.style.color = "#1c2128";
    
            try {
              // Intentar registrar al usuario con id autoincrementado
              await registrarUsuario(campoNameRegister.value, campoPasswordRegister.value, "0", "LLLL");
              errorLabelSingin.textContent = "User signed up correctly!";
              errorLabelSingin.style.color = "#bfd4e9";
            } catch (error) {
              errorLabelSingin.textContent = "Error when signing up.";
              errorLabelSingin.style.color = "red";
              console.log(error);
            }
          }
        }
      }
    });
    
    
    
    

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


let isUnlocking = false;
let candados = document.querySelectorAll(".candado");

candados.forEach(candado => {
    candado.src = "img/lock.png";

    let skinContainer = candado.closest('.skinContainer');
    let skinContainerLock = skinContainer.querySelector('.skinContainerLock');
    let skinContainerNotVisible = skinContainer.querySelector('.skinContainerNotVisible');

    let priceElement = skinContainerNotVisible.querySelector('.price');
    let price = parseInt(priceElement.textContent);

    candado.addEventListener('click', () => searchUnlockingStatus(candado, skinContainerLock, skinContainerNotVisible, price));
    skinContainerNotVisible.addEventListener('click', () => searchUnlockingStatus(candado, skinContainerLock, skinContainerNotVisible, price));
    
    setNormalPrice(skinContainer, price);
  });


  function setNormalPrice(skinContainer, price) {
    let priceNormalElement = skinContainer.querySelector('.priceNormal');
    
    if (priceNormalElement) {
        priceNormalElement.textContent = price;
    }
  }

  function searchUnlockingStatus(candado, skinContainerLock,skinContainerNotVisible, price) {
      if (isUnlocking) return;

      if (coinsIhave >= price) {
          isUnlocking = true;
          unlockAnimation(candado, skinContainerLock, skinContainerNotVisible, price);
      }else if(coinsIhave < price) {
          lockedAnimation(candado);
      }
  }

  function unlockAnimation(candado, skinContainerLock, skinContainerNotVisible, price) {
      candado.src = "img/lock.gif";
      candado.style.pointerEvents = "none";
      skinContainerLock.style.pointerEvents = "none";

      coinsIhave -= price;

      document.querySelector('.coinLabel').textContent = coinsIhave;

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

      
      
      
      
    /* CLICK PARA FARMEAR MONEDAS */

    function incrementCoins() {
        coinsIhave++;
        coinLabel.textContent = coinsIhave;
    }
    document.addEventListener('click', incrementCoins);






    
    /*    
    agregarUsuarioSiNoExiste(2, 'juan', 'abc123.', 1000, '1L1LL1');
    
    verificarUsuarioInicioSesion('andres', 'abc123.').then(id => {
      if (id !== 0) {
        console.log('Inicio de sesión exitoso, ID del usuario:', id);
      } else {
        console.log('Nombre de usuario o contraseña incorrectos');
      }
    });
    
    obtenerMonedasDeUsuario(1).then(coins => {
      if (coins !== null) {
        console.log('Monedas del usuario:', coins);
      }
    });
    
    obtenerSkinsUnlockDeUsuario(1).then(skinsUnlock => {
      if (skinsUnlock !== null) {
        console.log('SkinsUnlock del usuario:', skinsUnlock);
      }
    });
    
    actualizarMonedasDeUsuario(1, 2000);
    
    actualizarSkinsUnlockDeUsuario(1, '2L2LL2');*/
    

    
    

});