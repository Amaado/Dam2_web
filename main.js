document.addEventListener('DOMContentLoaded', function() {
    var cursor = document.getElementById('customCursor');
    var cursorPurpleish = document.getElementById('customCursorPurpleish');


	setTimeout(function() {
		cursorPurpleish.style.opacity = '1%';
		
	}, 1);


    if (cursor && cursorPurpleish) {
        document.addEventListener('mousemove', function(e) {
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
			if (e.target.tagName === 'A' || e.target.closest('.card')  || e.target.closest('.material-icons-round')) {
                cursorPurpleish.style.opacity = '100%';
				//cursorPurpleish.style.visibility = 'visible';
				//cursor.style.visibility = 'hidden';
			}
		});
		
		document.addEventListener('mouseout', function(e) {
			if (e.target.tagName === 'A' || e.target.closest('.card')  || e.target.closest('.material-icons-round')) {
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
        oval.setAttribute("fill", "white");
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





      

      const hoverAudio = new Audio('img/sfx_sound1.mp3'); // Reemplaza con la URL de tu archivo de audio

      // Función para reproducir el audio
      function playHoverAudio() {
        hoverAudio.currentTime = 0; // Reiniciar el audio desde el principio
        hoverAudio.play().catch(error => {
          console.error('No se pudo reproducir el audio:', error);
        });
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

      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
	  var colors = [ "#544F66", "#B27887", "#B27887","#544F66","#544F66","#E2CCC1"];	
	  var fps = 15;
	  var now;
	  var then = Date.now();
	  var num = 2;
	  var delta;
	  var tamanho = 50;
	  var ismobile = false;
	 	  var varpi = 2 * Math.PI;
	  var interval = 1000/fps;
	  var objforDraw = new Array();
	  
		$(document).ready(function() {
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame || window
            .webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
            function(callback) {
                return window.setTimeout(callback,
                    1000 / fps)
            }
    })();
    window.cancelRequestAnimFrame = (function() {
        return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
            window.mozCancelRequestAnimationFrame ||
            window.oCancelRequestAnimationFrame ||
            window.msCancelRequestAnimationFrame ||
            clearTimeout
    })();
    var ShadowObject = function(color) {
        this.x = ((Math.random() * canvas.width) + 10);
        this.y = ((Math.random() * canvas.height) + 10);
        this.color = color;
        this.size = tamanho;
        this.dirX = Math.random() < 0.5 ? -1 : 1;
        this.dirY = Math.random() < 0.5 ? -1 : 1;
        this.checkIsOut = function() {
            if ((this.x > canvas.width + (this.size /
                    2)) || (this.x < 0 - (this.size /
                    2))) {
                this.dirX = this.dirX * -1
            };
            if ((this.y > canvas.height + (this.size /
                    2)) || (this.y < 0 - (this.size /
                    2))) {
                this.dirY = this.dirY * -1
            }
        };
        this.move = function() {
		
            this.x += this.dirX*2;
            this.y += this.dirY*2
			
        }
    };

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
		var len = objforDraw.length;
        for (i = 0; i < len; i++) {
            context.beginPath();
            context.arc(objforDraw[i].x, objforDraw[i].y, objforDraw[i].size, 0, varpi, false);
            context.fillStyle = objforDraw[i].color;
            context.shadowColor = objforDraw[i].color;
			if(ismobile == false){
            context.shadowBlur = 50;
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
			}
            context.fill();
            objforDraw[i].checkIsOut();
            objforDraw[i].move()
        }
    };

    function animloop() {
        requestAnimFrame(animloop);
        now = Date.now();
        delta = now - then;
        if (delta > interval) {
            draw();
            then = now - (delta % interval)
        }
    };
    document.body.onload = function(e) {
        for (i = 0; i < colors.length * num; i++) {
            var color = ((i >= colors.length) ? colors[(i -
                colors.length)] : colors[i]);
            objforDraw.push(new ShadowObject(color))
        };
        animloop()
    };


    
});




