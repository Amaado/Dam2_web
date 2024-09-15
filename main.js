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
});
