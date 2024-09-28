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
  let oval = this.querySelector('.svg-oval');
  const flechaa = document.getElementById('flechaa');
  const skinsContainer = document.getElementById('skinsContainer');
  const flechaHitbloxPlus = document.getElementById('flechaHitbloxPlus');
  let allESC = document.querySelector('nav');
  let coinLabel = document.querySelector('.coinLabel');
  let coinsContainer = document.querySelector('.coinsContainer');
  let coinsIhave = parseInt(coinsContainer.textContent);
  


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
  
      document.querySelectorAll('a').forEach((link, index) => {
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
        hoverAudio.currentTime = 0;
      }
      
      document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', playHoverAudio);
      });
      
      document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', playHoverAudio);
      });

      document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseleave', playHoverAudio);
      });
      
      document.querySelectorAll('a').forEach(link => {
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

});




