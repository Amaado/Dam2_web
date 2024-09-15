document.addEventListener('DOMContentLoaded', function() {
    var cursor = document.getElementById('customCursor');
    var cursorPurpleish = document.getElementById('customCursorPurpleish');


	setTimeout(function() {
		cursorPurpleish.style.visibility = 'hidden';
		
	}, 1);


    // Verifica que los elementos existen antes de agregar eventos
    if (cursor && cursorPurpleish) {
        // Inicialmente fija la posición del cursor
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursorPurpleish.style.left = e.clientX + 'px';
            cursorPurpleish.style.top = e.clientY + 'px';
        });

        // Maneja el cambio de estado de clic para ambos cursores
        document.addEventListener('mousedown', function() {
            cursor.classList.add('clicked');
            cursorPurpleish.classList.add('clicked');
        });
        
        document.addEventListener('mouseup', function() {
            cursor.classList.remove('clicked');
            cursorPurpleish.classList.remove('clicked');
        });

        // Maneja la visibilidad del cursor cuando se pasa sobre un enlace
		document.addEventListener('mouseover', function(e) {
			if (e.target.tagName === 'A' || e.target.closest('.card')  || e.target.closest('.material-icons-round')) {
				// Verifica si el ratón está sobre un enlace o un elemento con la clase 'card'
				cursorPurpleish.style.visibility = 'visible'; // Cambia la visibilidad del cursor
				//cursor.style.visibility = 'hidden';
			}
		});
		
		document.addEventListener('mouseout', function(e) {
			if (e.target.tagName === 'A' || e.target.closest('.card')  || e.target.closest('.material-icons-round')) {
				// Verifica si el ratón ha salido de un enlace o un elemento con la clase 'card'
				cursorPurpleish.style.visibility = 'hidden';
				//cursor.style.visibility = 'visible';
			}
		});
		
    } else {
        console.error('Elementos de cursor no encontrados en el DOM.');
    }
});
