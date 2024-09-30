document.addEventListener('DOMContentLoaded', function() {
    // Variables específicas para horario.html
    const a = document.getElementById("a");
    const escText = document.getElementById("escText");
    const esc = document.getElementById("esc");
    const esc2 = document.getElementById("esc2");
    const checkbox = document.getElementById("toggle");
    const body = document.body;
    
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
  
    // ... cualquier otro código específico de horario.html
  });
  