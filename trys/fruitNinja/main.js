var w = window.innerWidth,
    h = window.innerHeight;

var game; // Declarar la instancia del juego
var gameStarted = false; // Bandera para verificar si el juego está en progreso
let gameActive = true;

function preload() {
    // Carga de imágenes
    this.load.image('tomato', 'assets/tomatoFull.png'); // Imagen para los objetos buenos
    this.load.image('tomato_left', 'assets/tomatoIzq.png'); // Mitad izquierda
    this.load.image('tomato_right', 'assets/tomatoDer.png'); // Mitad derecha
    this.load.image('bomb', 'assets/bomb.png'); // Imagen para los objetos malos
    this.load.image('peace', 'assets/peace.png'); // Opcional
}

var good_objects,
    bad_objects,
    slashes,
    line,
    scoreLabel,
    score = 0,
    points = [];

var fireRate = 1000;
var nextFire = 0;

function create() {
    // Iniciar el sistema de física
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 300;

    // Crear los grupos con las imágenes cargadas
    good_objects = createGroup(4, 'tomato'); // Usa la imagen de pan tostado para los buenos
    bad_objects = createGroup(4, 'bomb'); // Usa la imagen de pan quemado para los malos

    // Configuración de efectos visuales
    slashes = game.add.graphics(0, 0);

    // Etiqueta de puntuación
    scoreLabel = game.add.text(10, 10, 'Tip: get the green ones!');
    scoreLabel.fill = 'white';

    // Configuración del emisor de partículas
    emitter = game.add.emitter(0, 0, 300);
    emitter.makeParticles('peace');
    emitter.setScale(0.8, 0.3, 0.8, 0.3);
    emitter.gravity = 300;
    emitter.setYSpeed(-400, 400);

    throwObject();
}

function createGroup(numItems, spriteKey) {
    var group = game.add.group();
    group.enableBody = true;
    group.physicsBodyType = Phaser.Physics.ARCADE;
    group.createMultiple(numItems, spriteKey); // Usa las imágenes en lugar de bitmapData
    group.setAll('checkWorldBounds', true);
    group.setAll('outOfBoundsKill', true);
    return group;
}

function throwObject() {
    if (gameActive && game.time.now > nextFire && good_objects.countDead() > 0 && bad_objects.countDead() > 0) {
        nextFire = game.time.now + fireRate;
        console.log("Firerate: "+fireRate);
        throwGoodObject();
        if (Math.random() > 0.5) {
            throwBadObject();
        }
    }
}

function throwGoodObject() {
    var obj = good_objects.getFirstDead();

    // Posición inicial aleatoria en la base (parte inferior)
    obj.reset(game.world.centerX + Math.random() * 100 - Math.random() * 100, h);
    obj.anchor.setTo(0.5, 0.5);
    obj.scale.setTo(0.5); // Ajusta el tamaño del objeto

    // Genera un ángulo con tendencia hacia -90°
    var angle = Phaser.Math.degToRad(weightedAngle(-90, 50, -160, -20)); // Centro: -90°, Desviación: 50°

    // Asigna una velocidad aleatoria entre 500 y 750 en esa dirección
    var randomSpeed = 500 + Math.random() * 250; // Genera un número entre 500 y 750
    game.physics.arcade.velocityFromRotation(angle, randomSpeed, obj.body.velocity);

    // Ajusta la rotación del objeto para que coincida con su trayectoria
    obj.rotation = angle;
}

function throwBadObject() {
    var obj = bad_objects.getFirstDead();

    // Posición inicial aleatoria en la base (parte inferior)
    obj.reset(game.world.centerX + Math.random() * 100 - Math.random() * 100, h);
    obj.anchor.setTo(0.5, 0.5);
    obj.scale.setTo(0.5); // Ajusta el tamaño del objeto

    // Genera un ángulo con tendencia hacia -90°
    var angle = Phaser.Math.degToRad(weightedAngle(-90, 50, -160, -20)); // Centro: -90°, Desviación: 50°

    // Asigna una velocidad aleatoria entre 500 y 750 en esa dirección
    var randomSpeed = 500 + Math.random() * 250; // Genera un número entre 500 y 750
    game.physics.arcade.velocityFromRotation(angle, randomSpeed, obj.body.velocity);

    // Ajusta la rotación del objeto para que coincida con su trayectoria
    obj.rotation = angle;
}

/**
 * Genera un número con tendencia hacia un valor central dentro de un rango.
 * @param {number} mean - El valor hacia el cual queremos tener más frecuencia (en grados).
 * @param {number} deviation - Desviación estándar: cuánto varían los valores alrededor del centro.
 * @param {number} min - Valor mínimo permitido.
 * @param {number} max - Valor máximo permitido.
 * @returns {number} El ángulo generado (en grados).
 */
function weightedAngle(mean, deviation, min, max) {
    let angle;
    do {
        // Genera un valor usando una aproximación a una distribución normal
        angle = mean + deviation * (Math.random() + Math.random() + Math.random() - 1.5); // Tres números para simular curva normal
    } while (angle < min || angle > max); // Asegura que esté dentro del rango
    return angle;
}


function update() {
    throwObject();

    // Ajustar rotación dinámica de los objetos buenos
    good_objects.forEachAlive(obj => {
        obj.rotation = Math.atan2(obj.body.velocity.y, obj.body.velocity.x);
    });

    // Ajustar rotación dinámica de los objetos malos
    bad_objects.forEachAlive(obj => {
        obj.rotation = Math.atan2(obj.body.velocity.y, obj.body.velocity.x);
    });

    points.push({
        x: game.input.x,
        y: game.input.y
    });
    points = points.splice(points.length - 10, points.length);

    if (points.length < 1 || points[0].x == 0) {
        return;
    }

    slashes.clear();
    slashes.beginFill(0xFFFFFF);
    slashes.alpha = 0.5;
    slashes.moveTo(points[0].x, points[0].y);
    for (var i = 1; i < points.length; i++) {
        slashes.lineTo(points[i].x, points[i].y);
    }
    slashes.endFill();

    for (var i = 1; i < points.length; i++) {
        line = new Phaser.Line(points[i].x, points[i].y, points[i - 1].x, points[i - 1].y);
        game.debug.geom(line);

        good_objects.forEachExists(checkIntersects);
        bad_objects.forEachExists(checkIntersects);
    }
}

var contactPoint = new Phaser.Point(0, 0);

function checkIntersects(fruit, callback) {
    var l1 = new Phaser.Line(fruit.body.right - fruit.width, fruit.body.bottom - fruit.height, fruit.body.right, fruit.body.bottom);
    var l2 = new Phaser.Line(fruit.body.right - fruit.width, fruit.body.bottom, fruit.body.right, fruit.body.bottom - fruit.height);
    l2.angle = 90;

    if (Phaser.Line.intersects(line, l1, true) || Phaser.Line.intersects(line, l2, true)) {
        contactPoint.x = game.input.x;
        contactPoint.y = game.input.y;
        var distance = Phaser.Point.distance(contactPoint, new Phaser.Point(fruit.x, fruit.y));
        if (distance > 110) {
            return;
        }

        if (fruit.parent == good_objects) {
            killFruit(fruit);
        } else {
            resetScore();
            stopGame();
        }
    }
}

function stopGame() {
    gameActive = false; // Detener el lanzamiento de frutas
}

function resetScore() {
    var highscore = Math.max(score, localStorage.getItem("highscore"));
    localStorage.setItem("highscore", highscore);

    good_objects.forEachExists(despawnFruit);
    bad_objects.forEachExists(despawnFruit);

    score = 0;
    scoreLabel.text = 'Game Over!\nHigh Score: ' + highscore;

    document.getElementById('startButton').style.display = 'block'; // Muestra el botón nuevamente
}

function render() {
}

function despawnFruit(fruit) {
    fruit.kill();
}

function spawnParticles(fruit) {
    emitter.x = fruit.x;
    emitter.y = fruit.y;
    emitter.start(true, 2000, null, 4);
}

function killFruit(fruit) {
    if (fruit.parent === good_objects) {
        // Coordenadas del corte
        const cutAngle = Math.atan2(contactPoint.y - fruit.y, contactPoint.x - fruit.x);

        // Crear las dos mitades
        const leftHalf = game.add.sprite(fruit.x, fruit.y, 'tomato_left');
        const rightHalf = game.add.sprite(fruit.x, fruit.y, 'tomato_right');

        leftHalf.anchor.setTo(0.5, 0.5);
        rightHalf.anchor.setTo(0.5, 0.5);

        leftHalf.scale.setTo(0.5);
        rightHalf.scale.setTo(0.5);

        // Ajustar la rotación inicial
        leftHalf.rotation = cutAngle - Math.PI / 8; // Ajuste leve para que parezca más natural
        rightHalf.rotation = cutAngle + Math.PI / 8;

        // Aplicar física a las mitades
        game.physics.enable([leftHalf, rightHalf], Phaser.Physics.ARCADE);
        leftHalf.body.velocity.x = fruit.body.velocity.x - 150 * Math.cos(cutAngle);
        leftHalf.body.velocity.y = fruit.body.velocity.y - 150 * Math.sin(cutAngle);

        rightHalf.body.velocity.x = fruit.body.velocity.x + 150 * Math.cos(cutAngle);
        rightHalf.body.velocity.y = fruit.body.velocity.y + 150 * Math.sin(cutAngle);

        // Girar suavemente las mitades mientras se mueven
        game.add.tween(leftHalf).to({ rotation: leftHalf.rotation - Math.PI / 4 }, 500, Phaser.Easing.Linear.None, true);
        game.add.tween(rightHalf).to({ rotation: rightHalf.rotation + Math.PI / 4 }, 500, Phaser.Easing.Linear.None, true);

        // Desaparecen después de un tiempo
        game.time.events.add(4000, () => {
            leftHalf.destroy();
            rightHalf.destroy();
        });

        // Eliminar el objeto original
        fruit.kill();

        // Generar partículas
        spawnParticles(fruit);
    } else {
        fruit.kill();
    }

    // Actualizar puntuación
    points = [];
    score++;
    scoreLabel.text = 'Score: ' + score;
}

// Inicialización controlada del juego
document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");

    startButton.addEventListener("click", function () {
        if (!gameStarted) {
            startButton.style.display = "none";
            gameStarted = true;
            game = new Phaser.Game(w, h, Phaser.AUTO, 'game',
                { preload: preload, create: create, update: update, render: render });
        }else{
            window.location.href = window.location.href;
        }
    });
});
