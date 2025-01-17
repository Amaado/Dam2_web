var w = window.innerWidth,
    h = window.innerHeight;

var game; // Declarar la instancia del juego
var gameStarted = false; // Bandera para verificar si el juego está en progreso
let gameActive = false;
const startMatch = document.getElementById("startMatch");
const startButton = document.getElementById("startButton");

function preload() {
    // Carga de imágenes
    this.load.image('goldCC', 'assets/goldCC.png');
    this.load.image('goldCC_left', 'assets/goldCCIzq.png');
    this.load.image('goldCC_right', 'assets/goldCCDer.png');
    this.load.image('tomato', 'assets/tomatoFull.png');
    this.load.image('tomato_left', 'assets/tomatoIzq.png');
    this.load.image('tomato_right', 'assets/tomatoDer.png');
    this.load.image('tomatoGold', 'assets/tomatoGold.png');
    this.load.image('tomatoGold_left', 'assets/tomatoGoldIzq.png');
    this.load.image('tomatoGold_right', 'assets/tomatoGoldDer.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.image('bomb_left', 'assets/bombIzq.png');
    this.load.image('bomb_right', 'assets/bombDer.png');
    this.load.image('bombCammo', 'assets/bombCammo.png');
    this.load.image('bombCammo_left', 'assets/bombCammoIzq.png');
    this.load.image('bombCammo_right', 'assets/bombCammoDer.png');
    this.load.image('bombCammoGold', 'assets/bombCammoGold.png');
    this.load.image('bombCammoGold_left', 'assets/bombCammoGoldIzq.png');
    this.load.image('bombCammoGold_right', 'assets/bombCammoGoldDer.png');
    this.load.image('peace', 'assets/peace.png');
    this.load.image('peaceGold', 'assets/peaceGold.png');
    this.load.spritesheet('explosion', 'assets/explosion_spritesheet.png', 576, 576, 10);
    this.load.spritesheet('spark', 'assets/spark_spritesheet.png', 480, 480, 20);
    this.load.spritesheet('halo', 'assets/halo_spritesheet.png', 337, 337, 34);
    this.load.spritesheet('coin', 'assets/coin_spritesheet.png', 310, 310, 50);
}

var good_objects = [];
var bad_objects = [];
var slashes, line, scoreLabel, score = 0, points = [];
var fireRate = 1000;
var nextFire = 0;

function create() {
    // Iniciar el sistema de física
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 300;
    game.stage.backgroundColor = "#1c2128";

    // Crear grupos para cada tipo de objeto
    good_objects = [
        createGroup(4, 'goldCC'),
        createGroup(4, 'tomato'),
        createGroup(4, 'tomatoGold')
    ];

    bad_objects = [
        createGroup(4, 'bomb'),
        createGroup(4, 'bombCammo'),
        createGroup(4, 'bombCammoGold')
    ];

    // Configuración de efectos visuales
    slashes = game.add.graphics(0, 0);

    // Etiqueta de puntuación
    scoreLabel = game.add.text(10, 10, 'Tip: get the green ones!');
    scoreLabel.fill = 'white';

    // Configuración inicial del emisor
    emitter = game.add.emitter(0, 0, 300);
    emitter.makeParticles('peace');
    emitter.setScale(0.8, 0.5, 0.8, 0.5);
    emitter.gravity = 300;
    emitter.setYSpeed(-400, 400);
    emitter.alpha = 1; // Asegúrate de que sea completamente visible al inicio

    emitterGold = game.add.emitter(0, 0, 300);
    emitterGold.makeParticles('peaceGold');
    emitterGold.setScale(0.8, 0.5, 0.8, 0.5);
    emitterGold.gravity = 300;
    emitterGold.setYSpeed(-400, 400);
    emitterGold.alpha = 1; // Asegúrate de que sea completamente visible al inicio

    // Configuración del emitter
    emitterCoin = game.add.emitter(0, 0, 300); // Crea el emitter
    emitterCoin.makeParticles('coin'); // Usa el spritesheet como partículas
    emitterCoin.setScale(0.15, 0.1, 0.15, 0.1); // Escala de las partículas
    emitterCoin.gravity = 300; // Gravedad aplicada a las partículas
    emitterCoin.setYSpeed(-400, 400); // Velocidad vertical de las partículas
    emitterCoin.alpha = 1; // Opacidad inicial


    // Configurar partículas para animación personalizada
    emitterCoin.forEach(function (particle) {
        const totalFrames = 50; // Número total de frames del spritesheet

        // Generar un frame inicial aleatorio
        const startFrame = Math.floor(Math.random() * totalFrames);

        // Decidir aleatoriamente si la animación será normal o inversa
        const reverse = Math.random() < 0.5;

        // Configurar los frames de la animación
        let frames;
        if (reverse) {
            frames = Array.from({ length: totalFrames }, (_, i) => totalFrames - 1 - i); // Frames en orden inverso
        } else {
            frames = Array.from({ length: totalFrames }, (_, i) => i); // Frames en orden normal
        }

        // Agregar animación al sprite
        particle.animations.add('spin', frames); // Configurar los frames generados
        particle.animations.play('spin', 15, true, startFrame); // Reproducir la animación en bucle desde un frame aleatorio

        particle.rotation = Phaser.Math.degToRad(Math.random() * 360); // Rotación aleatoria en radianes
        particle.angle += Math.random() * 20 - 10; // Añadir un cambio de rotación aleatorio mientras está vivo
    });


    throwObject();
}


// Función para hacer desaparecer un emisor
function fadeOutEmitter(emitter) {
    // Mantener las partículas visibles por 1 segundo
    game.time.events.add(1000, () => {
        // Iterar sobre todas las partículas activas del emisor
        emitter.forEachAlive(particle => {
            // Desaparecer progresivamente durante 1 segundo
            game.add.tween(particle).to(
                { alpha: 0 }, // Cambiar la opacidad a 0
                1000,         // Duración de la animación
                Phaser.Easing.Linear.None, // Interpolación lineal
                true          // Iniciar inmediatamente
            ).onComplete.add(() => {
                particle.kill(); // Detener la partícula una vez desaparecida
            });
        });
    });
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
    if (gameActive && game.time.now > nextFire) {
        nextFire = game.time.now + fireRate;

        // Selecciona un objeto aleatorio de cada categoría para lanzar
        if (Math.random() > 0.5) {
            throwRandomObject(good_objects);
        } else {
            throwRandomObject(bad_objects);
        }
    }
}

function throwRandomObject(groups) {
    // Selecciona un grupo aleatorio de los grupos proporcionados
    var group = groups[Math.floor(Math.random() * groups.length)];
    var obj = group.getFirstDead();

    if (obj) {
        if (obj.key === 'bomb' || obj.key === 'bombCammo' || obj.key === 'bombCammoGold') {
            const spark = game.add.sprite(0, 0, 'spark');
            spark.anchor.setTo(0.5, 0.5);
            spark.scale.setTo(0.4); // Ajusta según el tamaño del GIF respecto al objeto
            spark.animations.add('spin');
            spark.animations.play('spin', 10, true); // Reproduce la animación en bucle a 10 FPS
            spark.x = -120; // Position X - marginLeft
            spark.y = -80; // Position Y - marginTop
            obj.addChild(spark); // Asigna el GIF como hijo de la bomba

        }else if (obj.key === 'goldCC') {
            // Crear el halo en el mundo del juego
            const halo = game.add.sprite(0, 0, 'halo'); // Crear el halo como sprite independiente
            halo.anchor.setTo(0.5, 0.5);
            halo.scale.setTo(1); // Ajustar el tamaño del halo
            halo.animations.add('spin');
            halo.animations.play('spin', 10, true); // Reproducir la animación en bucle a 10 FPS
            obj.halo = halo;

            // Configurar la posición inicial del goldCC
            obj.reset(game.world.centerX + Math.random() * 100 - Math.random() * 100, h);
            obj.anchor.setTo(0.5, 0.5);
            obj.scale.setTo(0.5);
        
            // Asegurar que el halo siga a goldCC
            obj.update = function () {
                halo.x = obj.x;
                halo.y = obj.y;
        
                // Verificar si el halo está fuera de los límites de la pantalla
                if (
                    halo.x < 0 ||
                    halo.x > game.world.width ||
                    halo.y < 0 ||
                    halo.y > game.world.height
                ) {
                    setTimeout(() => {
                        halo.destroy(); // Destruir el halo si sale de la pantalla    
                    }, 100);
                }
        
                // Sincronizar alpha del halo para efecto de parpadeo
                if (!halo._alphaDirection) {
                    halo._alphaDirection = 1; // Inicializar la dirección del parpadeo
                }
                const alphaSpeed = 0.01; // Velocidad del cambio de alpha
                halo.alpha += alphaSpeed * halo._alphaDirection;
        
                // Cambiar la dirección del alpha si alcanza los límites
                if (halo.alpha >= 0.4) {
                    halo._alphaDirection = -1;
                } else if (halo.alpha <= 0.2) {
                    halo._alphaDirection = 1;
                }
            };
            
            halo.offsetX = 0; // Desplazamiento horizontal
            halo.offsetY = 0; // Desplazamiento vertical

            // Asegurar que el halo se renderice detrás de goldCC
            halo.z = -1; // Halo detrás
            obj.z = 1;   // GoldCC al frente
            game.world.sort('z', Phaser.Group.SORT_ASCENDING); // Ordenar elementos por z-index
        
            // Generar un ángulo con tendencia hacia -90°
            var angle = Phaser.Math.degToRad(weightedAngle(-90, 50, -160, -20));
            var randomSpeed = 500 + Math.random() * 250;
        
            // Establecer una rotación inicial aleatoria
            obj.initialRotation = Phaser.Math.degToRad(Math.random() * 360 - 180); // Aleatorio entre -180° y 180°
        
            // Aplicar velocidad en la dirección del ángulo
            game.physics.arcade.velocityFromRotation(angle, randomSpeed, obj.body.velocity);
        }
        
        
        
        

        // Lógica general para otros objetos (excepto goldCC)
        if (obj.key !== 'goldCC') {
            obj.reset(game.world.centerX + Math.random() * 100 - Math.random() * 100, h);
            obj.anchor.setTo(0.5, 0.5);
            obj.scale.setTo(0.5);

            // Genera un ángulo con tendencia hacia -90°
            var angle = Phaser.Math.degToRad(weightedAngle(-90, 50, -160, -20));
            var randomSpeed = 500 + Math.random() * 250;

            // Establecer una rotación inicial aleatoria
            obj.initialRotation = Phaser.Math.degToRad(Math.random() * 360 - 180); // Aleatorio entre -180° y 180°

            // Aplicar velocidad en la dirección del ángulo
            game.physics.arcade.velocityFromRotation(angle, randomSpeed, obj.body.velocity);
        }
    }
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

    good_objects.forEach(group => group.forEachAlive(obj => adjustRotation(obj)));
    bad_objects.forEach(group => group.forEachAlive(obj => adjustRotation(obj)));

    function adjustRotation(obj) {
        // Rotación según la trayectoria
        const trajectoryRotation = Math.atan2(obj.body.velocity.y, obj.body.velocity.x);

        // Oscilación basada en el tiempo
        const oscillation = 0.1 * Math.sin(game.time.now / 200); // Variación de +/- 0.1 radianes

        // Combinación de rotación inicial, trayectoria y oscilación
        obj.rotation = obj.initialRotation + trajectoryRotation + oscillation;
    }

    // Resto del código para manejar los trazos e intersecciones
    points.push({ x: game.input.x, y: game.input.y });
    points = points.splice(points.length - 10, points.length);

    if (points.length < 1 || points[0].x == 0) return;

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

        good_objects.forEach(group => group.forEachExists(checkIntersects));
        bad_objects.forEach(group => group.forEachExists(checkIntersects));
    }
}



var contactPoint = new Phaser.Point(0, 0);
let gamePaused

function checkIntersects(fruit) {
    var l1 = new Phaser.Line(fruit.body.right - fruit.width, fruit.body.bottom - fruit.height, fruit.body.right, fruit.body.bottom);
    var l2 = new Phaser.Line(fruit.body.right - fruit.width, fruit.body.bottom, fruit.body.right, fruit.body.bottom - fruit.height);
    l2.angle = 90;

    if (Phaser.Line.intersects(line, l1, true) || Phaser.Line.intersects(line, l2, true)) {
        contactPoint.x = game.input.x;
        contactPoint.y = game.input.y;

        if (belongsToGroup(fruit, bad_objects)) {
                gamePaused = true;
                killFruit(fruit);

            setTimeout(() => {
                //game.pause = false
                gamePaused = false;
                resetScore();
                stopGame();
            }, 2000);

        } else if (belongsToGroup(fruit, good_objects)) {
            if(!gamePaused){
                killFruit(fruit); // Maneja el corte de un objeto bueno
            }
        }
    }
}


function stopGame() {
    gameActive = false; // Detener el lanzamiento de frutas
}

function resetScore() {
    // Reinicia la puntuación y la visibilidad del contenedor del botón
    var highscore = Math.max(score, localStorage.getItem("highscore") || 0);
    localStorage.setItem("highscore", highscore);

    good_objects.forEach(group => group.callAll('kill')); // Mata todos los objetos buenos
    bad_objects.forEach(group => group.callAll('kill')); // Mata todos los objetos malos

    score = 0;
    scoreLabel.text = 'Tip: get the green ones!'; // Reinicia el texto

    gameActive = false; // Marca que el juego ha terminado
    startMatch.style.display = 'flex'; // Muestra el contenedor del botón nuevamente
}

function render() {
}
/*
function despawnFruit(fruit){
    fruit.kill();
}*/

function spawnParticles(fruit) {
    let emitterToUse = fruit.key.includes('Gold') ? emitterGold : emitter;
    if(fruit.key === 'goldCC'){
        emitterToUse = emitterCoin;
    }
    emitterToUse.x = fruit.x;
    emitterToUse.y = fruit.y;
    emitterToUse.start(true, 2000, null, 4); // Genera partículas para la fruta
    
    fadeOutEmitter(emitterToUse); // Aplica el fade-out a las partículas generadas
}


function belongsToGroup(fruit, groupsArray) {
    return groupsArray.some(group => group.children.includes(fruit));
}

function killFruit(fruit) {
    // Crear las dos mitades
    let leftHalf, rightHalf, explosion;

    if(fruit.key === 'goldCC'){
        leftHalf = game.add.sprite(fruit.x, fruit.y, 'goldCC_left');
        rightHalf = game.add.sprite(fruit.x, fruit.y, 'goldCC_right');
    }else if (fruit.key === 'tomato'){
        leftHalf = game.add.sprite(fruit.x, fruit.y, 'tomato_left');
        rightHalf = game.add.sprite(fruit.x, fruit.y, 'tomato_right');
    }else if (fruit.key === 'tomatoGold'){
        leftHalf = game.add.sprite(fruit.x, fruit.y, 'tomatoGold_left');
        rightHalf = game.add.sprite(fruit.x, fruit.y, 'tomatoGold_right');
    }else if (fruit.key === 'bomb'){
        leftHalf = game.add.sprite(fruit.x, fruit.y, 'bomb_left');
        rightHalf = game.add.sprite(fruit.x, fruit.y, 'bomb_right');
    }else if (fruit.key === 'bombCammo'){
        leftHalf = game.add.sprite(fruit.x, fruit.y, 'bombCammo_left');
        rightHalf = game.add.sprite(fruit.x, fruit.y, 'bombCammo_right');
    }else if (fruit.key === 'bombCammoGold'){
        leftHalf = game.add.sprite(fruit.x, fruit.y, 'bombCammoGold_left');
        rightHalf = game.add.sprite(fruit.x, fruit.y, 'bombCammoGold_right');
    }


    if (fruit.key === 'tomato' || fruit.key === 'tomatoGold' || fruit.key === 'goldCC') {
        spawnParticles(fruit);
    }

    // Coordenadas del corte
    const cutAngle = Math.atan2(contactPoint.y - fruit.y, contactPoint.x - fruit.x);

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
    if(belongsToGroup(fruit, good_objects)){
        game.time.events.add(1000, () => { // Espera 1 segundo antes de comenzar el desvanecimiento
            const fadeOutTweenLeft = game.add.tween(leftHalf).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true); // Duración de 1 segundo
            const fadeOutTweenRight = game.add.tween(rightHalf).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true); // Duración de 1 segundo
    
            fadeOutTweenLeft.onComplete.add(() => {
                leftHalf.destroy(); // Elimina el elemento después de que desaparezca
            });
    
            fadeOutTweenRight.onComplete.add(() => {
                rightHalf.destroy(); // Elimina el elemento después de que desaparezca
            });
        });

        if (fruit.key === 'goldCC') {
            if (fruit.halo) {
                fruit.halo.destroy();
                delete fruit.halo; // Eliminar la referencia para liberar memoria
            }
        
            const resplandor = game.add.sprite(fruit.x, fruit.y, 'halo'); // Crea el sprite
            resplandor.anchor.setTo(0.5, 0.5); // Centra el sprite
            resplandor.scale.setTo(1); // Tamaño inicial
            resplandor.alpha = 1; // Completamente visible al inicio
            resplandor.z = -200; // Coloca detrás de otros elementos
            resplandor.offsetX = 0; // Desplazamiento horizontal
            resplandor.offsetY = 0; 
        
            // Agregar y reproducir la animación
            resplandor.animations.add('spin'); // Crear la animación con todos los frames del spritesheet
            resplandor.animations.play('spin', 15, true); // Reproducir a 15 FPS en bucle
        
            game.world.sort('z', Phaser.Group.SORT_ASCENDING);
        
            // Guardar la velocidad actual de fruit
            const fruitVelocity = {
                x: fruit.body.velocity.x,
                y: fruit.body.velocity.y
            };
        
            // Animación de escala (agrandamiento)
            const scaleTween = game.add.tween(resplandor.scale).to(
                { x: 2, y: 2 }, // Tamaño final
                600, // Duración de 600ms
                Phaser.Easing.Quadratic.Out, // Efecto de suavizado
                true // Inicia automáticamente
            );
        
            // Animación de opacidad (desaparecer)
            const fadeTween = game.add.tween(resplandor).to(
                { alpha: 0 }, // Transición a opacidad 0
                600, // Duración de 600ms
                Phaser.Easing.Linear.None, // Transición lineal
                true // Inicia automáticamente
            );
        
            // Actualizar la posición del resplandor según la velocidad original de fruit
            resplandor.update = function () {
                resplandor.x += fruitVelocity.x * game.time.physicsElapsed;
                resplandor.y += fruitVelocity.y * game.time.physicsElapsed;
            };
        
            // Destruir el sprite después de completar ambas animaciones
            fadeTween.onComplete.add(() => {
                resplandor.destroy(true); // Destruye completamente el sprite
            });
        }
        
        
        
        
        
        
        

    }else{
        const fadeOutTweenLeft = game.add.tween(leftHalf).to({ alpha: 0 }, 100, Phaser.Easing.Linear.None, true); // Duración de 1 segundo
        const fadeOutTweenRight = game.add.tween(rightHalf).to({ alpha: 0 }, 100, Phaser.Easing.Linear.None, true); // Duración de 1 segundo

        fadeOutTweenLeft.onComplete.add(() => {
            leftHalf.destroy(); // Elimina el elemento después de que desaparezca
        });

        fadeOutTweenRight.onComplete.add(() => {
            rightHalf.destroy(); // Elimina el elemento después de que desaparezca
        });

        const explosion = game.add.sprite(fruit.x, fruit.y, 'explosion'); // Crea el sprite
        explosion.anchor.setTo(0.5, 0.5); // Centra el sprite
        explosion.scale.setTo(0.5); // Ajusta el tamaño
    
        // Añade la animación desde el spritesheet
        const anim = explosion.animations.add('boom', null, 30, false); // No necesitas `Phaser.Animation.generateFrameNames`
        explosion.animations.play('boom'); // Reproduce la animación
    
        // Elimina la explosión después de reproducir la animación
        anim.onComplete.add(() => {
            explosion.destroy();
        });      
        
    }


    

    // Eliminar el objeto original
    fruit.kill();


    // Actualizar puntuación
    points = [];
    score++;
    scoreLabel.text = 'Score: ' + score;
}

document.addEventListener("DOMContentLoaded", function () {
    startButton.addEventListener("click", function () {
        if (!gameActive) {
            // Comienza el juego por primera vez
            startMatch.style.display = 'none'; // Oculta el contenedor del botón
            gameActive = true;
            document.getElementById("game").innerHTML = '';
            game = new Phaser.Game(w, h, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });
        } else {
            // Reinicia el juego si se terminó anteriormente
            startMatch.style.display = 'none'; // Oculta nuevamente
            gameActive = true;
            resetScore(); // Reinicia los parámetros del juego sin recargar
        }
    });
});

