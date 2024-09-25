document.addEventListener('DOMContentLoaded', function() {
    const fondo = document.getElementById('fondo');

    document.addEventListener('mousemove', function(e) {
        // Ajusta la posición de la máscara
        fondo.style.maskPosition = `${e.clientX}px ${e.clientY}px`;
    });

    document.addEventListener('mousedown', function() {
        fondo.classList.add('clicked');
    });

    document.addEventListener('mouseup', function() {
        fondo.classList.remove('clicked');
    });
});
