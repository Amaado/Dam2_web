var w = window.innerWidth,
    h = window.innerHeight;

var game; // Declarar la instancia del juego
var gameStarted = false; // Bandera para verificar si el juego está en progreso
let gameActive = false;
const startMatchContainer = document.getElementById("startMatchContainer");
const startMatchContainerFull = document.getElementById("startMatchContainerFull");
const startMatchContainerImg = document.getElementById("startMatchContainerImg");
const endContainer = document.getElementById("endContainer");
const startButton = document.getElementById("startButton");
const tomatosBet = document.getElementById("tomatosBet");
const tomatosCuted = document.getElementById("tomatosCuted");
const coinsColected = document.getElementById("coinsColected");
const winGif = document.getElementById("winGif");
const sliceIt = document.getElementById("sliceIt");

const multiNTomato = document.querySelector("multiNTomato");
const multiNTomatoGold = document.querySelector("multiNTomatoGold");
const multiNBomb = document.querySelector("multiNBomb");
const multiNCammoBomb = document.querySelector("multiNCammoBomb");
const multiNCammoGoldBomb = document.querySelector("multiNCammoGoldBomb");

/* MODE CHECKBOX */
const modoLocoDefault = document.querySelector(".modoLocoDefault");
const modoLocoDefaulR = document.querySelector(".modoLocoDefaultR");
const modoLocoActive = document.querySelector(".modoLocoActive");
const modoLocoActiveR = document.querySelector(".modoLocoActiveR");
const multiModeLabel = document.querySelector(".multiModeLabel");
const multiModeLabelR = document.querySelector(".multiModeLabelR");
const checkboxSwitch = document.getElementById("switch");
/* BET SLIDER VALUE ADJUST */
const sliderTomatoes = document.getElementById('sliderTomatoes');
const betValueSelect = document.getElementById('betValueSelect');
const multiBetValue = document.getElementById('multiBetValue');
/* sliderTomatoesContainer WIDTH ADJUST */
const betValueDB = document.getElementById('betValueDB');
const betContainer = document.querySelector('.betContainer');
    /* STATS WIDTH ADJUST */
const statsContainer = document.querySelector('.statsContainer');
const statsTittleContainer = document.querySelector('.statsTittleContainer');
const blank = document.querySelector('.blank');
const informationContainer = document.getElementById("informationContainer");
const rewardsContainer = document.getElementById("rewardsContainer");
const historyContainer = document.getElementById("historyContainer");
const infoContainer = document.getElementById("infoContainer");
const rewardsModeCosts = document.querySelector(".rewardsModeCosts");
const rewardsBet = document.querySelector(".rewardsBet");
const rewardsTomatos = document.querySelector(".rewardsTomatos");
const rewardsTomatosFinal = document.querySelector(".rewardsTomatosFinal");
const rewardsMulti = document.querySelector(".rewardsMulti");
const rewardsCoins = document.querySelector(".rewardsCoins");

const mistakeImgs = document.querySelectorAll(".mistakeImg");
const warningMessageContainer = document.querySelector(".warningMessageContainer");
const warningMessage = document.querySelector(".warningMessage");
const warningImg = document.getElementById("warningImg");
const flechaDoubles = document.querySelectorAll(".flechaDouble");
let tomatosMistakedVar = 0;
let action;

const idLogeado = localStorage.getItem("idLogeado");
if (!idLogeado || isNaN(parseInt(idLogeado)) || parseInt(idLogeado) === 0) {
    handleWarningMessage("flex", "Hay un fallo de registro. Prueba a volver a la página principal y loguearte", "red");
}

const supabaseUrl =
"https://jlinrmkailmfvzjkdfni.supabase.co/rest/v1/usuario";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsaW5ybWthaWxtZnZ6amtkZm5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc1MzMwNjUsImV4cCI6MjA0MzEwOTA2NX0.0BmL21nXr61WxALojF7kRk7glhB522Ss87zbBVzpSPo";

// 3. Obtener las monedas (coins) de un usuario por id
async function obtenerMonedasDeUsuario(id) {
const url = `${supabaseUrl}?id=eq.${id}`;

const response = await fetch(url, {
method: "GET",
headers: {
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,
    "Content-Type": "application/json",
},
});

const data = await response.json();

if (data.length > 0) {
return data[0].coins; // Devuelve el valor de coins
} else {
console.error("Usuario no encontrado");
return null;
}
}

async function actualizarMonedas(idLogeado) {
try {
    //console.log("ID logeado:", idLogeado);
    const monedasLogeado = await obtenerMonedasDeUsuario(idLogeado);
    multiValueDB.textContent = monedasLogeado;

    console.log("Monedas obtenidas:", monedasLogeado);
} catch (error) {
    console.error("Error durante ACTUALIZAR MONEDAS:", error);
}
}
actualizarMonedas(idLogeado);




async function obtenerTomatosDeUsuario(id) {
const url = `${supabaseUrl}?id=eq.${id}`;

const response = await fetch(url, {
    method: "GET",
    headers: {
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,
    "Content-Type": "application/json",
    },
});

const data = await response.json();

if (data.length > 0) {
    const tomatos = data[0].tomatos;
    if (tomatos === null) {
    console.warn("Tomatos obtenidos: null. Inicializando tomatos a 0.");
    await actualizarTomatosUsuario(id, 0);
    return 0;
    }
    return tomatos; // Devuelve el valor de tomatos
} else {
    console.warn("Usuario no encontrado. Inicializando tomatos a 0.");
    await actualizarTomatosUsuario(id, 0);
    return 0;
}
}

async function actualizarTomatos(idLogeado) {
try {
    console.log("ID logeado:", idLogeado);
    const tomatosLogeado = await obtenerTomatosDeUsuario(idLogeado);
    betValueDB.textContent = tomatosLogeado;
    sliderTomatoes.max = tomatosLogeado;

    console.log("Tomatos obtenidos:", tomatosLogeado);
} catch (error) {
    console.error("Error durante ACTUALIZAR TOMATOS:", error);
}
}
actualizarTomatos(idLogeado);



function preload() {
    // Carga de imágenes
    this.load.image('goldCC', '../img/fruitNinja//goldCC.png');
    this.load.image('goldCC_left', '../img/fruitNinja//goldCCIzq.png');
    this.load.image('goldCC_right', '../img/fruitNinja//goldCCDer.png');
    this.load.image('tomatoShadow', '../img/fruitNinja//tomatoFullShadow.png');
    this.load.image('tomato', '../img/fruitNinja//tomatoFull.png');
    this.load.image('tomato_left_Shadow', '../img/fruitNinja//tomatoIzqShadow.png');
    this.load.image('tomato_left', '../img/fruitNinja//tomatoIzq.png');
    this.load.image('tomato_right_Shadow', '../img/fruitNinja//tomatoDerShadow.png');
    this.load.image('tomato_right', '../img/fruitNinja//tomatoDer.png');
    this.load.image('tomatoGold', '../img/fruitNinja//tomatoGold.png');
    this.load.image('tomatoGold_left', '../img/fruitNinja//tomatoGoldIzq.png');
    this.load.image('tomatoGold_right', '../img/fruitNinja//tomatoGoldDer.png');
    this.load.image('bombShadow', '../img/fruitNinja//bombShadow.png');
    this.load.image('bomb', '../img/fruitNinja//bomb.png');
    this.load.image('bomb_left_Shadow', '../img/fruitNinja//bombIzqShadow.png');
    this.load.image('bomb_left', '../img/fruitNinja//bombIzq.png');
    this.load.image('bomb_right_Shadow', '../img/fruitNinja//bombDerShadow.png');
    this.load.image('bomb_right', '../img/fruitNinja//bombDer.png');
    this.load.image('bombCammoShadow', '../img/fruitNinja//bombCammoShadow.png');
    this.load.image('bombCammo', '../img/fruitNinja//bombCammo.png');
    this.load.image('bombCammo_left_Shadow', '../img/fruitNinja//bombCammoIzqShadow.png');
    this.load.image('bombCammo_left', '../img/fruitNinja//bombCammoIzq.png');
    this.load.image('bombCammo_right_Shadow', '../img/fruitNinja//bombCammoDerShadow.png');
    this.load.image('bombCammo_right', '../img/fruitNinja//bombCammoDer.png');
    this.load.image('bombCammoGold', '../img/fruitNinja//bombCammoGold.png');
    this.load.image('bombCammoGold_left', '../img/fruitNinja//bombCammoGoldIzq.png');
    this.load.image('bombCammoGold_right', '../img/fruitNinja//bombCammoGoldDer.png');
    this.load.image('peace', '../img/fruitNinja//peace.png');
    this.load.image('peace2', '../img/fruitNinja//peace2.png');
    this.load.image('peace3', '../img/fruitNinja//peace3.png');
    this.load.image('peace4', '../img/fruitNinja//peace4.png');
    this.load.image('peace5', '../img/fruitNinja//peace5.png');
    this.load.image('peaceShadow', '../img/fruitNinja//peaceShadow.png');
    this.load.image('peace2Shadow', '../img/fruitNinja//peace2Shadow.png');
    this.load.image('peace3Shadow', '../img/fruitNinja//peace3Shadow.png');
    this.load.image('peace4Shadow', '../img/fruitNinja//peace4Shadow.png');
    this.load.image('peace5Shadow', '../img/fruitNinja//peace5Shadow.png');
    this.load.image('peaceGold', '../img/fruitNinja//peaceGold.png');
    this.load.image('peaceGold2', '../img/fruitNinja//peaceGold2.png');
    this.load.image('peaceGold3', '../img/fruitNinja//peaceGold3.png');
    this.load.image('peaceGold4', '../img/fruitNinja//peaceGold4.png');
    this.load.image('peaceGold5', '../img/fruitNinja//peaceGold5.png');
    this.load.image('fireDificulty', '../img/fruitNinja//fireDificulty.png');
    this.load.spritesheet('explosion', '../img/fruitNinja//explosion_spritesheet.png', 576, 576, 10);
    this.load.spritesheet('spark', '../img/fruitNinja//spark_spritesheet.png', 480, 480, 20);
    this.load.spritesheet('halo', '../img/fruitNinja//halo_spritesheet.png', 337, 337, 34);
    this.load.spritesheet('coin', '../img/fruitNinja//coin_spritesheet.png', 300, 300, 50);
    this.load.spritesheet('coinShadow', '../img/fruitNinja//coinShadow_spritesheet.png', 300, 300, 50);
    this.load.spritesheet('circle', '../img/fruitNinja//circle.png', 500, 500, 27);
}
const peaces = ['peace', 'peace2', 'peace3', 'peace4', 'peace5'];
const peacesGold = ['peaceGold', 'peaceGold2', 'peaceGold3', 'peaceGold4', 'peaceGold5'];
const peacesShadow = ['peaceShadow', 'peace2Shadow', 'peace3Shadow', 'peace4Shadow', 'peace5Shadow'];
const peacesGoldShadow = ['peaceShadow', 'peace2Shadow', 'peace3Shadow', 'peace4Shadow', 'peace5Shadow'];

var good_objects = [];
var bad_objects = [];
var slashes, line, score = 0, scoreCoins = 0, points = [];
var fireRate = 1000;
var nextFire = 0;

function create() {
    // Iniciar el sistema de física
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 300;
    game.stage.backgroundColor = "#1c2128";

    if (game && game.input) {
        game.input.onDown.add(() => {
            isClicking = true;
            points = []; // Reinicia el trazado cuando se hace clic
        });
    
        game.input.onUp.add(() => {
            isClicking = false;  // Indica que ya no se está haciendo clic
            slashes.clear();     // Borra cualquier trazado previo
            points = [];
        });
        
        window.addEventListener("mouseout", () => {
            isClicking = false;  // Indica que ya no se está haciendo clic
            slashes.clear();     // Borra cualquier trazado previo
            points = [];
        });
        
    } else {
        console.error("Game or game.input is not available.");
    }

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

    throwObject();
    //manageDificultyGame();
}

function manageDificultyGame(){
    // Calculamos la posición basada en vw y vh
    var xPos = window.innerWidth * 0.02; // 2vw
    var yPos = window.innerHeight * 0.10; // 10vh

    var emitter = game.add.emitter(xPos, yPos, 200); // Posición basada en vw/vh
    
    emitter.makeParticles('fireDificulty'); // Usar la textura cargada
    
    // Configuración del efecto de fuego
    emitter.setYSpeed(-200, -100); // Velocidad hacia arriba
    emitter.setXSpeed(-50, 50); // Movimiento lateral aleatorio
    emitter.setScale(0.5, 0, 0.5, 0, 2000, Phaser.Easing.Sinusoidal.Out); // Disminuye el tamaño progresivamente
    emitter.setAlpha(1, 0, 2000, Phaser.Easing.Quadratic.Out); // Desaparece suavemente
    emitter.gravity = 0; // Sin gravedad
    emitter.setRotation(0, 0); // Sin rotación de partículas
    emitter.setAll('blendMode', Phaser.blendModes.ADD); // Modo de fusión para efectos de fuego
    emitter.setAll('tint', 0xfacc22); // Color inicial amarillo

    emitter.start(false, 2400, 50); // No explota, duración de partículas, cada 50ms

    // Cambio de color progresivo (imitando `colorEase`)
    game.time.events.loop(500, function() {
        emitter.forEachAlive(function(p) {
            p.tint = Phaser.Color.interpolateColor(0xfacc22, 0x9f0404, 4, game.rnd.integerInRange(0, 3), 1);
        });
    });

    // Ajustar tamaño del juego al cambiar la ventana
    window.addEventListener('resize', function() {
        game.scale.setGameSize(window.innerWidth, window.innerHeight);
        emitter.x = window.innerWidth * 0.02;
        emitter.y = window.innerHeight * 0.10;
    });



    ///difficultyLevel
}


// Función para hacer desaparecer un emisor
function fadeOutEmitter(emitter) {
    // Mantener las partículas visibles por 1 segundo
    game.time.events.add(750, () => {
        // Iterar sobre todas las partículas activas del emisor
        emitter.forEachAlive(particle => {
            // Desaparecer progresivamente durante 1 segundo
            game.add.tween(particle).to(
                { alpha: 0 }, // Cambiar la opacidad a 0
                750,         // Duración de la animación
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
    group.setAll('outOfBoundsKill', false);

    // Configurar evento para interceptar salida de los límites
    group.forEach(function (obj) {
        obj.events.onOutOfBounds.add(handleOutOfBounds, this);
    });
    return group;
}


function handleOutOfBounds(obj) {
    // Si el objeto salió por el marco superior
    if (obj.y < 0) {
        // Ajustar la posición para que vuelva a caer
        obj.body.velocity.y = Math.abs(obj.body.velocity.y); // Asegurar que la velocidad sea positiva (hacia abajo)
        return;
    }

    // Manejar salida por los demás bordes (laterales e inferior)
    if (obj.y > game.world.height || obj.x < 0 || obj.x > game.world.width) {
        if (obj.key === 'tomato' && gameActive) {
            handleMistakes(); // Incrementar el contador de errores solo si es un tomate
        }
        removeFromScreenList(obj); // Eliminar el objeto del contador en pantalla
        obj.kill(); // Destruir el objeto solo si está fuera de los límites inferiores o laterales
    }
}


function removeFromScreenList(obj) {
    if(obj.key === 'bomb'){
        objScreen.bomb--;
    }else if(obj.key === 'bombCammo'){
        objScreen.bombCammo--;
    }else if(obj.key === 'bombCammoGold'){
        objScreen.bombGold--;
    }else if(obj.key === 'goldCC'){
        objScreen.goldCC--;
    }else if(obj.key === 'tomato'){
        objScreen.tomato--;
    }else if(obj.key === 'tomatoGold'){
        objScreen.tomatoGold--;
    }
}

const mistake1 = document.querySelector(".mistake1");
const mistake2 = document.querySelector(".mistake2");
const mistake3 = document.querySelector(".mistake3");

function handleMistakes(){
    tomatosMistakedVar++;
    if(tomatosMistakedVar==1){
        mistake1.style.display = "flex";
        setTimeout(() => {
            mistake1.classList.add("active");
        }, 100);
    }else if(tomatosMistakedVar==2){
        mistake2.style.display = "flex";
        setTimeout(() => {
            mistake2.classList.add("active");
        }, 100);
    }else if(tomatosMistakedVar==3){
        mistake3.style.display = "flex";
        setTimeout(() => {
            mistake3.classList.add("active");
        }, 100);
        stopGame();
        action="lose";
        showMenu(endContainer);
    }else{

    }
}


// Configuración de probabilidades iniciales
var probabilitiesToReset = {
    tomato: 60,          // 50
    tomatoGold: 20,      // 7
    bomb: 50,            // 30
    bombCammo: 13,       // 20
    bombGold: 7,        // 3
    goldCC: 2           // 2
};
var probabilities = {
    tomato: 60,          // 50
    tomatoGold: 20,      // 7
    bomb: 50,            // 30
    bombCammo: 13,       // 20
    bombGold: 7,        // 3
    goldCC: 2           // 2
};
var dynamicStatesToReset = {
    bombCammoBoost: false,   // Aumenta si sale un tomato
    bombGoldBoost: false,    // Aumenta si sale un tomatoGold
    bombCammoChance: probabilities.bombCammo, // Probabilidad dinámica para bombCammo
    bombGoldChance: probabilities.bombGold,   // Probabilidad dinámica para bombGold
    fireRate: 1000,          // Frecuencia inicial de aparición
    burstMode: false,        // Indica si se está en "modo agrupación"
    burstCount: 0            // Número de objetos restantes en la agrupación
};
var dynamicStates = {
    bombCammoBoost: false,   // Aumenta si sale un tomato
    bombGoldBoost: false,    // Aumenta si sale un tomatoGold
    bombCammoChance: probabilities.bombCammo, // Probabilidad dinámica para bombCammo
    bombGoldChance: probabilities.bombGold,   // Probabilidad dinámica para bombGold
    fireRate: 1500,          // Frecuencia inicial de aparición
    burstMode: false,        // Indica si se está en "modo agrupación"
    burstCount: 0            // Número de objetos restantes en la agrupación
};

let burstProbability;
let fireRateReduction;
let burstReduction;

// Función para lanzar objetos
function throwObject() {
    if (gameActive && game.time.now > nextFire) {
        if (dynamicStates.burstMode) {
            // Reducir el número de objetos restantes en el modo burst
            dynamicStates.burstCount--;
        
            if (dynamicStates.burstCount <= 0) {
                dynamicStates.burstMode = false; // Salir del modo burst
            } else {
                // Ajustar el retardo entre lanzamientos en burstMode, reduciendo hasta 0ms
                burstReduction = Math.max(75 - tomatosCuted.textContent * 1.5, 0);
                nextFire = game.time.now + Math.random() * burstReduction;
            }
        } else {
            // 🔹 Ajustar la frecuencia de lanzamiento fuera de burstMode
            fireRateReduction = Math.floor(tomatosCuted.textContent / 5) * 100;
            dynamicStates.fireRate = Math.max(Math.random() * (1500 - fireRateReduction), 0);
            nextFire = game.time.now + dynamicStates.fireRate;
        
            // 🔹 Ajustar la probabilidad de entrar en burstMode (40% - 90%)
            let minProb = 0.4; // Probabilidad base (40%)
            let maxProb = 0.9; // Probabilidad máxima (90%)
            let scalingFactor = 0.0005; // Aumento gradual
            burstProbability = Math.min(minProb + tomatosCuted.textContent * scalingFactor, maxProb); // ← Definimos burstProbability
        
            if (Math.random() < burstProbability) { 
                dynamicStates.burstMode = true;
                
                // Determinar el rango dinámico de objetos en burstMode
                let minBurst = Math.min(2 + Math.floor(tomatosCuted.textContent / 10), 12);
                let maxBurst = minBurst + 3;
                dynamicStates.burstCount = Math.floor(Math.random() * (maxBurst - minBurst + 1)) + minBurst;
        
                // Iniciar inmediatamente el primer objeto del burstMode
                nextFire = game.time.now;
            }
        }
        
        let difficultyLevel = calculateDifficulty(burstProbability);

        console.log("---------------");
        console.log("nextFire=" + (nextFire / 10000).toFixed(3));
        console.log("burstMode=" + dynamicStates.burstMode);
        console.log("difficultyLevel=" + difficultyLevel.toFixed(1));
        console.log("---------------");
        
        nextFire = game.time.now + dynamicStates.fireRate;

        let totalProbability = probabilities.tomato + probabilities.bomb + dynamicStates.bombCammoChance +
                               probabilities.tomatoGold + dynamicStates.bombGoldChance + probabilities.goldCC;

        let random = Math.random() * totalProbability;
        let cumulative = 0;
        let selectedObject;

        if (random < (cumulative += probabilities.tomato)) {
            selectedObject = spawnObject(good_objects, 'tomato');
            dynamicStates.bombCammoBoost = true; // Activar boost para bombCammo
        } else if (random < (cumulative += probabilities.bomb)) {
            selectedObject = spawnObject(bad_objects, 'bomb');
        } else if (random < (cumulative += dynamicStates.bombCammoChance)) {
            selectedObject = spawnObject(bad_objects, 'bombCammo');
        } else if (random < (cumulative += probabilities.tomatoGold)) {
            selectedObject = spawnObject(good_objects, 'tomatoGold');
            dynamicStates.bombGoldBoost = true; // Activar boost para bombGold
        } else if (random < (cumulative += dynamicStates.bombGoldChance)) {
            selectedObject = spawnObject(bad_objects, 'bombCammoGold');
        } else if (random < (cumulative += probabilities.goldCC)) {
            selectedObject = spawnObject(good_objects, 'goldCC');
        }
        /*
        console.log(`----------------------------------`);
        console.log(`----------------------------------`);
        if (selectedObject && selectedObject.key) {
            console.log(`Objeto lanzado: ${selectedObject.key}`);
        } else {
            console.log('selectedObject es nulo o no tiene la propiedad "key".');
        }
        console.log('Probabilidades actuales:');
        console.log(`Tomato: ${(probabilities.tomato / totalProbability * 100).toFixed(2)}%`);
        console.log(`TomatoGold: ${(probabilities.tomatoGold / totalProbability * 100).toFixed(2)}%`);
        console.log(`Bomb: ${(probabilities.bomb / totalProbability * 100).toFixed(2)}%`);
        console.log(`BombCammo: ${(dynamicStates.bombCammoChance / totalProbability * 100).toFixed(2)}%`);
        console.log(`BombGold: ${(dynamicStates.bombGoldChance / totalProbability * 100).toFixed(2)}%`);
        console.log(`GoldCC: ${(probabilities.goldCC / totalProbability * 100).toFixed(2)}%`);
        */
        if (selectedObject) {
            throwRandomObject(selectedObject);
        }

        adjustFireRate();
    }
}

function calculateDifficulty(burstProbability) { // ← Ahora recibe burstProbability como argumento
    // Factores de dificultad ponderados (ajusta los valores si es necesario)
    let weightFireRate = 0.25;  // Menor fireRate aumenta la dificultad
    let weightBurstMode = 0.20; // Mayor probabilidad de burstMode aumenta la dificultad
    let weightBurstCount = 0.15; // Más objetos en burstMode aumentan la dificultad
    let weightBurstDelay = 0.15; // Menor retardo en burstMode aumenta la dificultad
    let weightBadObjects = 0.25; // Mayor presencia de bombas aumenta la dificultad

    // Normalizar valores entre 0 y 1
    let normalizedFireRate = (2500 - dynamicStates.fireRate) / 2500; // 0 cuando fireRate es 2500ms, 1 cuando es 0ms
    let normalizedBurstMode = (burstProbability - 0.4) / (0.9 - 0.4); // ← Ahora usamos el argumento en lugar de una variable global
    let normalizedBurstCount = (dynamicStates.burstCount - 2) / (15 - 2); // 0 cuando es 2, 1 cuando es 15
    let normalizedBurstDelay = (75 - Math.max(75 - tomatosCuted.textContent * 1.5, 0)) / 75; // 0 cuando es 75ms, 1 cuando es 0ms
    
    // Normalizar la cantidad de bombas
    let totalProbability = probabilities.tomato + probabilities.bomb + dynamicStates.bombCammoChance +
                           probabilities.tomatoGold + dynamicStates.bombGoldChance + probabilities.goldCC;
    let badObjectsProbability = (probabilities.bomb + dynamicStates.bombCammoChance + dynamicStates.bombGoldChance) / totalProbability; // Ratio de bombas en relación al total

    // Calcular el nivel de dificultad
    let difficultyLevel = (
        weightFireRate * normalizedFireRate +
        weightBurstMode * normalizedBurstMode +
        weightBurstCount * normalizedBurstCount +
        weightBurstDelay * normalizedBurstDelay +
        weightBadObjects * badObjectsProbability
    ) * 100; // Convertir a porcentaje

    // Asegurar que la dificultad esté entre 0% y 100%
    difficultyLevel = Math.min(100, Math.max(0, difficultyLevel));
    return difficultyLevel;
}

function addShadowToObject(obj, shadowAlpha = 0.3, maxOffset = 10, minOffset = 30) {
    // Crear la sombra como una imagen basada en el tipo de objeto
    let shadow;
    if (obj.key === 'bomb') {
        shadow = game.add.image(obj.x, obj.y, "bombShadow");
    } else if (obj.key === 'bombCammo' || obj.key === 'bombCammoGold') {
        shadow = game.add.image(obj.x, obj.y, "bombCammoShadow");
    } else if (obj.key === 'goldCC') {
        return; // No se aplica sombra para 'goldCC'
    } else if (obj.key === 'tomato' || obj.key === 'tomatoGold') {
        shadow = game.add.image(obj.x, obj.y, "tomatoShadow");
    }else if(obj.key === 'bomb_left'){
        shadow = game.add.image(obj.x, obj.y, "bomb_left_Shadow");
    }else if(obj.key === 'bomb_right'){
        shadow = game.add.image(obj.x, obj.y, "bomb_right_Shadow");
    } else if (obj.key === 'bombCammo_left' || obj.key === 'bombCammoGold_left') {
        shadow = game.add.image(obj.x, obj.y, "bombCammo_left_Shadow");
    } else if (obj.key === 'bombCammo_right' || obj.key === 'bombCammoGold_right') {
        shadow = game.add.image(obj.x, obj.y, "bombCammo_right_Shadow");
    } else if (obj.key === 'tomato_left' || obj.key === 'tomatoGold_left') {
        shadow = game.add.image(obj.x, obj.y, "tomato_left_Shadow");
    } else if (obj.key === 'tomato_right' || obj.key === 'tomatoGold_right') {
        shadow = game.add.image(obj.x, obj.y, "tomato_right_Shadow");
    }else{
        console.error("No hay sombra para esta mitad");
    }

    // Configurar propiedades de la sombra
    shadow.alpha = shadowAlpha; // Ajustar opacidad de la sombra
    shadow.tint = 0x000000; // Aplicar tinte negro a la sombra

    // Configurar el punto de anclaje en el centro del objeto y la sombra
    obj.anchor.setTo(0.5, 0.5); // Centro del objeto
    shadow.anchor.setTo(0.5, 0.5); // Centro de la sombra

    // Ajustar la escala de la sombra para que coincida con el objeto
    shadow.scale.setTo(obj.scale.x, obj.scale.y);

    // Asociar la sombra al objeto
    obj.shadow = shadow;

    // Función para mantener la sombra sincronizada con el objeto
    obj.update = function () {
        // Sincronizar la posición y rotación de la sombra con el objeto
        shadow.x = obj.x;
        shadow.rotation = obj.rotation;

        // Calcular dinámicamente el offsetDistance basado en la posición vertical del objeto
        const relativeY = Math.max(0, Math.min(1, obj.y / game.world.height)); // Normalizar obj.y entre 0 y 1
        const offsetDistance = maxOffset - (relativeY * (maxOffset - minOffset)); // Interpolación lineal

        // Calcular la posición vertical de la sombra
        shadow.y = Math.min(game.world.height - offsetDistance, obj.y + offsetDistance);

        // Sincronizar la escala de la sombra con el objeto
        shadow.scale.setTo(obj.scale.x, obj.scale.y);

        // Asegurar que la sombra esté detrás del objeto
        shadow.z = obj.z - 2;
        game.world.sort('z', Phaser.Group.SORT_ASCENDING);

        // Si el objeto sale del borde inferior, eliminar la sombra
        if (obj.y > game.world.height) {
            shadow.destroy(); // Destruir la sombra
            obj.shadow = null; // Limpiar la referencia a la sombra
        }
    };
}







// Función para manejar la aparición de objetos
function spawnObject(groups, key) {
    let group = groups.find(g => g.children[0].key === key);
    let obj = group.getFirstDead();

    if (key === 'tomato') {
        dynamicStates.bombCammoChance = 100; // Aumentar probabilidad de bombCammo
    } else if (key === 'tomatoGold') {
        dynamicStates.bombGoldChance = 100; // Aumentar probabilidad de bombGold
    } else if (key === 'bombCammo') {
        dynamicStates.bombCammoChance = probabilities.bombCammo; // Reducir probabilidad de bombCammo
    } else if (key === 'bombCammoGold') {
        dynamicStates.bombGoldChance = probabilities.bombGold; // Reducir probabilidad de bombGold
    }

    if (obj) {
        addShadowToObject(obj);
        return obj;
    }
    return null;
}

// Ajustar velocidad de aparición
function adjustFireRate() {
    dynamicStates.fireRate = Math.max(400, dynamicStates.fireRate - 10);
}


var objHistory = {
    tomato: 0,
    tomatoGold: 0,
    bomb: 0,
    bombCammo: 0,
    bombGold: 0,
    goldCC: 0
};

function addObjToHistory(obj){
    if(obj.key === 'bomb'){
        objHistory.bomb++;
    }else if(obj.key === 'bombCammo'){
        objHistory.bombCammo++;
    }else if(obj.key === 'bombCammoGold'){
        objHistory.bombGold++;
    }else if(obj.key === 'goldCC'){
        objHistory.goldCC++;
    }else if(obj.key === 'tomato'){
        objHistory.tomato++;
    }else if(obj.key === 'tomatoGold'){
        objHistory.tomatoGold++;
    }
}

var objScreen = {
    tomato: 0,
    tomatoGold: 0,
    bomb: 0,
    bombCammo: 0,
    bombGold: 0,
    goldCC: 0
};

function addObjToScreen(obj){
    if(obj.key === 'bomb'){
        objScreen.bomb++;
    }else if(obj.key === 'bombCammo'){
        objScreen.bombCammo++;
    }else if(obj.key === 'bombCammoGold'){
        objScreen.bombGold++;
    }else if(obj.key === 'goldCC'){
        objScreen.goldCC++;
    }else if(obj.key === 'tomato'){
        objScreen.tomato++;
    }else if(obj.key === 'tomatoGold'){
        objScreen.tomatoGold++;
    }
}

function throwRandomObject(obj) {
    /*console.log("tomatosBet.textContent: "+tomatosBet.textContent);
    console.log("tomatosCuted.textContent: "+tomatosCuted.textContent);*/
    if(tomatosCuted.textContent == tomatosBet.textContent && gameActive){
        /*console.log("Dentro del if");*/ 
        stopGame();
        action = "win";
        showMenu(endContainer);
        return;
    }

    addObjToScreen(obj);
    addObjToHistory(obj);

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

    // Verificar si las frutas han salido del límite superior
    good_objects.forEach(group => group.forEachAlive(obj => adjustRotation(obj)));
    bad_objects.forEach(group => group.forEachAlive(obj => adjustRotation(obj)));

    if (!isClicking) {
        game.debug.stop();
        return;
    }

    // Manejo del trazado e intersecciones
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
        if (isClicking) {
            game.debug.geom(line);
        }

        good_objects.forEach(group => group.forEachExists(checkIntersects));
        bad_objects.forEach(group => group.forEachExists(checkIntersects));
    }
}

function adjustRotation(obj) {
    // Rotación según la trayectoria
    const trajectoryRotation = Math.atan2(obj.body.velocity.y, obj.body.velocity.x);

    // Oscilación basada en el tiempo
    const oscillation = 0.1 * Math.sin(game.time.now / 200); // Variación de +/- 0.1 radianes

    // Combinación de rotación inicial, trayectoria y oscilación
    obj.rotation = obj.initialRotation + trajectoryRotation + oscillation;
}


var contactPoint = new Phaser.Point(0, 0);
let isClicking = false;

function checkIntersects(fruit) {
    var l1 = new Phaser.Line(fruit.body.right - fruit.width, fruit.body.bottom - fruit.height, fruit.body.right, fruit.body.bottom);
    var l2 = new Phaser.Line(fruit.body.right - fruit.width, fruit.body.bottom, fruit.body.right, fruit.body.bottom - fruit.height);
    l2.angle = 90;

    if (Phaser.Line.intersects(line, l1, true) || Phaser.Line.intersects(line, l2, true)) {
        contactPoint.x = game.input.x;
        contactPoint.y = game.input.y;

        if (belongsToGroup(fruit, bad_objects)&&gameActive) {
            killFruit(fruit);
            stopGame();
            action = "lose";
            handleMistakes();
            handleMistakes();
            handleMistakes();
            showMenu(endContainer);

        } else if (belongsToGroup(fruit, good_objects)&&gameActive) {
            killFruit(fruit);
        }
    }
}


function stopGame() {
    gameActive = false; // Detener el lanzamiento de frutas
}

async function showMenu(menuPass) {
    // Reinicia la puntuación y la visibilidad del contenedor del botón
    /*var highscore = Math.max(score, localStorage.getItem("highscore") || 0);
    localStorage.setItem("highscore", highscore);*/
    let menu;
    if(menuPass.id == "startMatchContainer"){
        menu = startMatchContainerFull;
    }else if(menuPass.id == "endContainer"){
        menu = endContainer;

        while (!allGifsLoaded) {
            await new Promise(resolve => setTimeout(resolve, 100)); // Espera 100ms antes de volver a comprobar
        }
    }else{
        console.err("Error en showMenu()");
    }
    
    setTimeout(() => {
        menu.style.display = 'flex';
        setTimeout(() => {
            menu.style.opacity = "1";
        }, 50);
    }, 700);

    if(menuPass.id == "endContainer"){
        setTimeout(async () => {
            // Animaciones
            for (let index = 0; index < 4; index++) {
                let container;

                if (index === 0) {
                    container = informationContainer;
                } else if (index === 1) {
                    container = historyContainer;
                } else if (index === 2) {
                    container = rewardsContainer;
                } else if (index === 3) {
                    infoContainer.classList.add("active");
                    nextButton.classList.add("active");
                    return;
                } else {
                    console.error("Fallo en showMenu(endContainer)");
                    return;
                }

                let rewardsRows = container.querySelectorAll(".rewardsRow");
                let rewardsTittles = container.querySelectorAll(".rewardsTittle");
                let rewardsTittleBlanks = container.querySelectorAll(".rewardsTittleBlank");
                let rewardsTittleImgs = container.querySelectorAll(".rewardsTittleImg");
                await delay(500);
                rewardsRows.forEach(rewardsRow => {
                    rewardsRow.classList.add("active");
                });
                rewardsTittles.forEach(rewardsTittle => {
                    rewardsTittle.classList.add("active");
                });
                rewardsTittleBlanks.forEach(rewardsTittleBlank => {
                    rewardsTittleBlank.classList.add("active");
                });
                rewardsTittleImgs.forEach(rewardsTittleImg => {
                    rewardsTittleImg.classList.add("active");
                });
            }
        }, 1200);



        // Texto de etiquetas
        flechaDoubles.forEach(flechaDouble => {
            flechaDouble.style.opacity = "1";
        });
        if(checkboxSwitch.checked){    
            modoLocoDefaulR.style.opacity = "0";
            modoLocoActiveR.style.opacity = "1";
            multiModeLabelR.classList.add("active");
            multiModeLabelR.textContent = "Modo Loco";
            let rewardsRow = rewardsModeCosts.closest(".rewardsRow");
            let flechaDoubleCloseModo = rewardsRow.querySelector(".flechaDouble");
            let flechaStandCloseModo = rewardsRow.querySelector(".flechaStand");
            flechaDoubleCloseModo.style.opacity = "0";
            flechaStandCloseModo.style.opacity = "1";
        }else{
            modoLocoDefaulR.style.opacity = "1";
            modoLocoActiveR.style.opacity = "0";
            multiModeLabelR.classList.remove("active");
            multiModeLabelR.textContent = "Modo Normal";
            let rewardsRow = rewardsModeCosts.closest(".rewardsRow");
            let flechaDoubleCloseModo = rewardsRow.querySelector(".flechaDouble");
            let flechaStandCloseModo = rewardsRow.querySelector(".flechaStand");
            flechaDoubleCloseModo.style.opacity = "1";
            flechaStandCloseModo.style.opacity = "0";
        }

        rewardsBet.textContent = betValueSelect.textContent;
        rewardsModeCosts.textContent = multiCostsFinal.textContent;

        const rewardsRowsHistory = document.querySelectorAll("#historyContainer .rewardsRow");
        rewardsRowsHistory.forEach(row => {
            const img = row.querySelector(".item"); // Primera imagen en la fila
            const numberElement = row.querySelector(".rewardsRowNumber");

            if (!img || !numberElement) return; // Si no hay imagen o número, saltar
            // Obtener el nombre del archivo de imagen sin extensión
            const imgSrc = img.src.split('/').pop().split('.')[0];

            if (imgSrc == "tomatoFull") {
                numberElement.textContent = objHistory.tomato;
            } else if (imgSrc == "tomatoGold") {
                numberElement.textContent = objHistory.tomatoGold;
            } else if (imgSrc == "bomb") {
                numberElement.textContent = objHistory.bomb;
            } else if (imgSrc == "bombCammo") {
                numberElement.textContent = objHistory.bombCammo;
            } else if (imgSrc == "bombCammoGold") {
                numberElement.textContent = objHistory.bombGold;
            } else if (imgSrc == "goldCC") {
                numberElement.textContent = objHistory.goldCC;
            }
        });

        updateRewards();


        if(action == "win"){
            executeAction(action);
        }else if(action == "lose"){
            executeAction(action);
        }
    }


    if(menuPass.id == "startMatchContainer"){
        actualizarMonedas(idLogeado);
        actualizarTomatos(idLogeado);
        await delay(0); //Reverse delay
        setTimeout(() => {
            startMatchContainerImg.classList.add("active");
            startMatchContainer.classList.add("active");
            sliceIt.classList.remove("out");
        }, 500);
    }
}

function updateRewards(){
    if(checkboxSwitch.checked){
        rewardsTomatos.style.display = "block";
        rewardsMulti.style.display = "block";
        rewardsTomatosFinal.style.display = "block";

        // Calcula los tomates cortados multiplicados por 2
        rewardsTomatos.textContent = tomatosCuted.textContent * 2;

        // Calcula el multiplicador con dos decimales y el prefijo "x"
        let multiplier = (sliderMulti.value / 100).toFixed(2);

        // Calcula el resultado final antes de redondear
        let finalValue = parseFloat(multiplier) * parseInt(rewardsTomatos.textContent);

        // Redondeo según la condición
        let roundedValue = Math.round(finalValue);
        let difference = Math.abs(finalValue - roundedValue);

        // Determinar si hay que redondear con símbolo "≃" o "="
        // Siempre pondrá "=" en caso de que la diferencia sea <= 0.10
        let symbol = (difference > 0.10) ? " ≃ " : " = ";

        // Mostrar los valores finales
        rewardsTomatosFinal.textContent = roundedValue;
        rewardsMulti.textContent = "x" + multiplier + symbol;

    }else{
        rewardsTomatos.style.display = "none";
        rewardsMulti.style.display = "none";
        rewardsTomatosFinal.style.display = "block";
        rewardsTomatosFinal.textContent = tomatosCuted.textContent*2;
    }
    
    rewardsCoins.textContent = scoreCoins;


    if(action == "lose"){
        rewardsTomatos.style.display = "none";
        rewardsMulti.style.display = "none";
        rewardsCoins.textContent = 0;
        rewardsTomatosFinal.textContent = 0;
    }
    
    //Update flechaStand
    let rewardsRowC = rewardsCoins.closest(".rewardsRow");
    let flechaDoubleCloseCoinsC = rewardsRowC.querySelector(".flechaDouble");
    let flechaStandCloseCoinsC = rewardsRowC.querySelector(".flechaStand");
    if(rewardsCoins.textContent == 0){
        flechaDoubleCloseCoinsC.style.opacity = "0";
        flechaStandCloseCoinsC.style.opacity = "1";
    }else{
        flechaDoubleCloseCoinsC.style.opacity = "1";
        flechaStandCloseCoinsC.style.opacity = "0";
    }

    let rewardsRowT = rewardsTomatosFinal.closest(".rewardsRow");
    let flechaDoubleCloseCoinsT = rewardsRowT.querySelector(".flechaDouble");
    let flechaStandCloseCoinsT = rewardsRowT.querySelector(".flechaStand");
    if(rewardsTomatosFinal.textContent == 0){
        flechaDoubleCloseCoinsT.style.opacity = "0";
        flechaStandCloseCoinsT.style.opacity = "1";
    }else{
        flechaDoubleCloseCoinsT.style.opacity = "1";
        flechaStandCloseCoinsT.style.opacity = "0";
    }
}



const canvas = document.getElementById("gifCanvas"); // Usamos el canvas existente
const ctx = canvas.getContext("2d");

let gifFrames = { win: [], lose: [] }; // Guardamos los frames de cada GIF
let frameIndex = 0;
const frameDelay = 10; // 🔹 10ms entre cada frame (100 FPS)
let playing = false;
let reverseMode = false; // 🔹 Para reproducir en reversa
let allGifsLoaded = false; // 🔹 Bandera para indicar si los GIFs han terminado de cargar

// URLs de los GIFs
const gifs = {
    win: "../img/fruitNinja/winner.gif",
    lose: "../img/fruitNinja/foul.gif",
};

// Contador para verificar que todos los GIFs han cargado
let gifsToLoad = Object.keys(gifs).length;
let gifsLoaded = 0;

// Cargar los GIFs al inicio sin crear elementos extra
function preloadGifs() {
    for (const key in gifs) {
        loadGif(gifs[key], key);
    }
}

function loadGif(url, action) {
    let img = document.createElement("img");
    img.src = url;
    img.style.display = "none"; // Ocultamos la imagen
    img.style.position = "absolute";
    img.style.pointerEvents = "none";
    document.body.appendChild(img);

    let gif = new SuperGif({
        gif: img,
        auto_play: false,
        draw_while_loading: false, // Evita dibujar automáticamente
        progressbar_height: 0, // Oculta la barra de carga
        loop_mode: false, // Evita loops innecesarios
    });

    gif.load(() => {
        let frames = gif.get_length();
        for (let i = 0; i < frames; i++) {
            gif.move_to(i);
            let frameCanvas = gif.get_canvas();
            let frameCtx = frameCanvas.getContext("2d");
            gifFrames[action].push(frameCtx.getImageData(0, 0, frameCanvas.width, frameCanvas.height));
        }

        // Ajustar el tamaño del canvas una sola vez
        if (gifFrames[action].length > 0) {
            canvas.width = gifFrames[action][0].width;
            canvas.height = gifFrames[action][0].height;
        }

        // Incrementar el contador de GIFs cargados
        gifsLoaded++;

        // Si todos los GIFs se han cargado, cambiar la bandera a `true`
        if (gifsLoaded === gifsToLoad) {
            allGifsLoaded = true;
        }
    });
}

function playGif(action, reverse = false) {
    if (!gifFrames[action].length) {
        console.error(`No se encontraron frames para ${action}`);
        return;
    }

    playing = true;
    frameIndex = reverse ? gifFrames[action].length - 1 : 0; // 🔹 Inicia en el primer o último frame según reverseMode
    reverseMode = reverse;

    function animate() {
        if (!playing) return;

        ctx.putImageData(gifFrames[action][frameIndex], 0, 0);

        if (reverseMode) {
            if (frameIndex === 0) {
                playing = false; // 🔹 Se congela en el primer frame
            } else {
                frameIndex--;
                setTimeout(animate, frameDelay);
            }
        } else {
            if (frameIndex === gifFrames[action].length - 1) {
                playing = false; // 🔹 Se congela en el último frame
            } else {
                frameIndex++;
                setTimeout(animate, frameDelay);
            }
        }
    }

    animate();
}

// 🔹 Preload GIFs al cargar la página
preloadGifs();

function executeAction(action) {
    let gifCanvas = document.getElementById("gifCanvas");
    let borderAnim = document.querySelector(".borderAnim");

    let rewardsTittles = document.querySelectorAll(".rewardsTittle");
    rewardsTittles.forEach(rewardsTittle => {
        rewardsTittle.classList.remove("lose");
        rewardsTittle.classList.remove("win");
        if (action === "win") {
            rewardsTittle.classList.add("win");
        } else if (action === "lose") {
            rewardsTittle.classList.add("lose");
        }
    });

    let rewardsTittleImgs = document.querySelectorAll(".rewardsTittleImg");
    rewardsTittleImgs.forEach(rewardsTittleImg => {
        rewardsTittleImg.classList.remove("lose");
        rewardsTittleImg.classList.remove("win");
        if (action === "win") {
            rewardsTittleImg.classList.add("win");
        } else if (action === "lose") {
            rewardsTittleImg.classList.add("lose");
        }
    });

    if (action === "win") {
        playGif("win");
        gifCanvas.classList.remove("lose");
        gifCanvas.classList.add("win");
        borderAnim.classList.remove("lose");
        borderAnim.classList.add("win");
    } else if (action === "lose") {
        playGif("lose");
        gifCanvas.classList.remove("win");
        gifCanvas.classList.add("lose");
        borderAnim.classList.remove("win");
        borderAnim.classList.add("lose");
    }
}

function executeReverse(action) {
    if (action === "win") {
        playGif("win", true);
    } else if (action === "lose") {
        playGif("lose", true);
    }
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function hideMenu(menuPass) {
    let menu;
    if(menuPass.id == "startMatchContainer"){
        menu = startMatchContainerFull;
        startMatchContainerImg.classList.remove("active");
        startMatchContainer.classList.remove("active");
        sliceIt.classList.add("out");
        mistakerContainer.classList.add("active");

        for (let index = 0; index < 3; index++) {
            let container;

            if (index === 0) {
                container = informationContainer;
            } else if (index === 1) {
                container = historyContainer;
            } else if (index === 2) {
                container = rewardsContainer;
            } else {
                console.error("Fallo en hideMenu(startMatchContainer)");
                return;
            }

            let rewardsRows = container.querySelectorAll(".rewardsRow");
            let rewardsTittles = container.querySelectorAll(".rewardsTittle");
            let rewardsTittleBlanks = container.querySelectorAll(".rewardsTittleBlank");
            let rewardsTittleImgs = container.querySelectorAll(".rewardsTittleImg");
            rewardsRows.forEach(rewardsRow => {
                rewardsRow.classList.remove("active");
            });
            rewardsTittles.forEach(rewardsTittle => {
                rewardsTittle.classList.remove("active");
            });
            rewardsTittleBlanks.forEach(rewardsTittleBlank => {
                rewardsTittleBlank.classList.remove("active");
            });
            rewardsTittleImgs.forEach(rewardsTittleImg => {
                rewardsTittleImg.classList.remove("active");
            });
        }

    }else if(menuPass.id == "endContainer"){
        if(action == "win"){
            executeReverse(action);
        }else if(action == "lose"){
            executeReverse(action);
        }
        await delay(700);//Reverse delay
        menu = endContainer;
        mistakerContainer.style.transition = "";
        mistakerContainer.classList.remove("active");
        mistakerContainer.style.transition = "all 1s ease";
        setTimeout(() => {
            mistakeImgs.forEach(mistakeImg => {
                mistakeImg.classList.remove("active");
            });
        }, 1000);
    }else{
        console.err("Error en hideMenu()");
    }
    
    menu.style.opacity = "0";
    setTimeout(() => {
        menu.style.display = 'none';
    }, 500);
}

function startGame(){
    isClicking = false;

    score = 0;
    scoreCoins = 0;

    tomatosMistakedVar = 0;
    action = "";

    tomatosCuted.textContent = "0";
    coinsColected.textContent = "0";

    Object.keys(objHistory).forEach(key => {
        objHistory[key] = 0;
    });
    Object.keys(objScreen).forEach(key => {
        objHistory[key] = 0;
    });

    for (let key in probabilitiesToReset) {
        if (probabilitiesToReset.hasOwnProperty(key)) {
            probabilities[key] = probabilitiesToReset[key];
        }
    }
    for (let key in dynamicStatesToReset) {
        if (dynamicStatesToReset.hasOwnProperty(key)) {
            dynamicStates[key] = dynamicStatesToReset[key];
        }
    }

    burstProbability = 0.4; // Restablecer la probabilidad inicial de burstMode


    mistakerContainer.classList.add("active");
    infoContainer.classList.remove("active");
    nextButton.classList.remove("active");

    // Asumiendo que el orden en el HTML de las .multiF es:
    const probKeys = ["tomato", "tomatoGold", "bomb", "bombCammo", "bombGold", "goldCC"];
    
    // Selecciona las 6 celdas .multiF en su orden
    const multiFElements = document.querySelectorAll(".multiF");
    
    // Recorre cada .multiF y asigna a probabilities
    multiFElements.forEach((elem, index) => {
        const finalRateText = elem.textContent.replace("%", "").trim();
        const finalRate = parseFloat(finalRateText) || 0; // por si está vacío
        probabilities[probKeys[index]] = finalRate;       // Ej: probabilities["tomato"] = 44.64
    });

    // A partir de aquí, probabilities ya está actualizado 
    // con los valores que aparecen en multiF
}

function render() {

}

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function spawnParticles(fruit, cutAngle) {
    let emitterToUse, emitterCoin;

    if (fruit.key === 'goldCC') {
        emitterCoin = game.add.emitter(fruit.x, fruit.y, 35); // 35 partículas para goldCC
        emitterCoin.makeParticles('coin');
        emitterCoin.setScale(0.15, 0.1, 0.15, 0.1);
        emitterCoin.gravity = 0; // Sin gravedad inicial para que siga la dirección del corte

        configureCoinAnimation(emitterCoin); // Configurar animación para partículas de monedas

        // Asegurar que las partículas tengan una vida suficientemente larga
        emitterCoin.setAll('lifespan', 3000);  

        // Emitir partículas
        emitterCoin.start(true, 3000, null, 35); 

        // Definir el punto de atracción
        let targetX = 60; // Coordenada X en la esquina superior izquierda
        let targetY = 80; // Coordenada Y en la esquina superior izquierda

        let laGordaStart = Math.floor(Math.random() * (800 - 400 + 1)) + 400;
        game.time.events.add(laGordaStart, function () {
            emitterCoin.forEachAlive(function (particle) {
                let dx = targetX - particle.x;
                let dy = targetY - particle.y;
        
                let fuerza = 1500 + Math.random() * 500; // Variar la fuerza aleatoriamente entre 1500 y 2000
        
                // Aplicar la nueva gravedad con ligeras variaciones
                particle.body.gravity.x = (dx * fuerza / game.world.width) + Math.random() * 20 - 10; // Variación de -10 a 10
                particle.body.gravity.y = (dy * fuerza / game.world.height) + Math.random() * 20 - 10; // Variación de -10 a 10
            });
        
            game.time.events.add(200, function () {
                setTimeout(() => {
                    scoreCoinsUpdate(100);
                }, 1500);
        
                emitterCoin.forEachAlive(function (particle) {
                    let randomOffsetX = Math.random() * 20 - 10; // Variación en X (-10 a 10)
                    let randomOffsetY = Math.random() * 20 - 10; // Variación en Y (-10 a 10)
                    let randomDuration = 1500 + Math.random() * 400; // Variación en la duración del tween (1500-1900ms)
        
                    // Usamos un Tween para hacer que las partículas se junten progresivamente con ligeras variaciones
                    let tween = game.add.tween(particle).to(
                        { x: targetX + randomOffsetX, y: targetY + randomOffsetY },
                        randomDuration, // Duración variable
                        Phaser.Easing.Quadratic.Out, // Movimiento suavizado
                        true
                    );
        
                    // Desactivar la gravedad para que no interfiera en la agrupación
                    particle.body.gravity.x = 0;
                    particle.body.gravity.y = 0;
                    particle.body.velocity.setTo(0, 0);
        
                    // Cuando el tween termine, eliminar la partícula con una animación de desaparición
                    tween.onComplete.add(function () {
                        game.add.tween(particle).to(
                            { alpha: 0 }, // Desvanecer hasta desaparecer
                            10, // Duración de la animación de desaparición
                            Phaser.Easing.Linear.None,
                            true
                        ).onComplete.add(function () {
                            if (particle.shadow) {
                                particle.shadow.destroy(); // Destruir la sombra antes de matar la partícula
                                particle.shadow = null; // Limpiar referencia a la sombra
                            }
                            if (particle) {
                                particle.kill();
                            }
                        });
                    });
                });
            });
        });
        

    } else if (fruit.key === 'tomatoGold') {
        // Crear el primer emisor para peaceGold
        emitterToUse = game.add.emitter(fruit.x, fruit.y, getRandomBetween(4, 10)); // Entre 4 y 10 partículas
        emitterToUse.makeParticles(peacesGold);
        emitterToUse.setScale(0.8, 0.5, 0.8, 0.5);
        emitterToUse.gravity = 0;

        emitterToUse.start(true, 2000, null, getRandomBetween(4, 10));
        fadeOutEmitterWithShadow(emitterToUse);

        
        //------------
        //------------

        emitterCoin = game.add.emitter(fruit.x, fruit.y, 35); // 35 partículas para goldCC
        emitterCoin.makeParticles('coin');
        emitterCoin.setScale(0.15, 0.1, 0.15, 0.1);
        emitterCoin.gravity = 0; // Sin gravedad inicial para que siga la dirección del corte

        configureCoinAnimation(emitterCoin); // Configurar animación para partículas de monedas

        // Asegurar que las partículas tengan una vida suficientemente larga
        emitterCoin.setAll('lifespan', 3000);  

        // Emitir partículas
        emitterCoin.start(true, 3000, null, 35); 

        // Definir el punto de atracción
        let targetX = 60; // Coordenada X en la esquina superior izquierda
        let targetY = 80; // Coordenada Y en la esquina superior izquierda

        let laGordaStart = Math.floor(Math.random() * (800 - 400 + 1)) + 400;
        game.time.events.add(laGordaStart, function () {
            emitterCoin.forEachAlive(function (particle) {
                let dx = targetX - particle.x;
                let dy = targetY - particle.y;
        
                let fuerza = 1500 + Math.random() * 500; // Variar la fuerza aleatoriamente entre 1500 y 2000
        
                // Aplicar la nueva gravedad con ligeras variaciones
                particle.body.gravity.x = (dx * fuerza / game.world.width) + Math.random() * 20 - 10; // Variación de -10 a 10
                particle.body.gravity.y = (dy * fuerza / game.world.height) + Math.random() * 20 - 10; // Variación de -10 a 10
            });
        
            game.time.events.add(200, function () {
                setTimeout(() => {
                    scoreCoinsUpdate(10);
                }, 1500);
        
                emitterCoin.forEachAlive(function (particle) {
                    let randomOffsetX = Math.random() * 20 - 10; // Variación en X (-10 a 10)
                    let randomOffsetY = Math.random() * 20 - 10; // Variación en Y (-10 a 10)
                    let randomDuration = 1500 + Math.random() * 400; // Variación en la duración del tween (1500-1900ms)
        
                    // Usamos un Tween para hacer que las partículas se junten progresivamente con ligeras variaciones
                    let tween = game.add.tween(particle).to(
                        { x: targetX + randomOffsetX, y: targetY + randomOffsetY },
                        randomDuration, // Duración variable
                        Phaser.Easing.Quadratic.Out, // Movimiento suavizado
                        true
                    );
        
                    // Desactivar la gravedad para que no interfiera en la agrupación
                    particle.body.gravity.x = 0;
                    particle.body.gravity.y = 0;
                    particle.body.velocity.setTo(0, 0);
        
                    // Cuando el tween termine, eliminar la partícula con una animación de desaparición
                    tween.onComplete.add(function () {
                        game.add.tween(particle).to(
                            { alpha: 0 }, // Desvanecer hasta desaparecer
                            20, // Duración de la animación de desaparición
                            Phaser.Easing.Linear.None,
                            true
                        ).onComplete.add(function () {
                            if (particle.shadow) {
                                particle.shadow.destroy(); // Destruir la sombra antes de matar la partícula
                                particle.shadow = null; // Limpiar referencia a la sombra
                            }
                            if (particle) {
                                particle.kill();
                            }
                        });
                    });
                });
            });
        });
        

    } else {
        // Crear un emisor único para partículas estándar (peace)
        emitterToUse = game.add.emitter(fruit.x, fruit.y, getRandomBetween(4, 10)); // Entre 4 y 10 partículas
        emitterToUse.makeParticles(peaces);
        emitterToUse.setScale(0.8, 0.5, 0.8, 0.5);
        emitterToUse.gravity = 0;

        emitterToUse.start(true, 2000, null, getRandomBetween(4, 10));
        fadeOutEmitterWithShadow(emitterToUse);
    }

    // 2) Parámetros para dispersar las partículas
    const baseForce = 200;        // Fuerza base (más alta que 100)
    const velocityVariation = 200; // Rango de fuerza adicional aleatoria
    const angleSpread = 1;       // Rango de dispersión en radianes ±0.6 (~±34°)

    // 3) Ajustar velocidad/dirección de las partículas del emitter principal
    if (emitterToUse) {
        emitterToUse.forEachAlive(particle => {
            // Variación de ángulo (± angleSpread/2)
            const angleOffset = (Math.random() - 0.5) * angleSpread;
            const finalAngle = cutAngle + angleOffset;

            // Calcular magnitud de la velocidad
            const speed = baseForce + Math.random() * velocityVariation;

            particle.body.velocity.x = Math.cos(finalAngle) * speed;
            particle.body.velocity.y = Math.sin(finalAngle) * speed;

            particle.rotation = Math.random() * 2 * Math.PI; 
            addShadowToParticleTomato(particle, fruit);
        });
    }

    // 4) Ajustar velocidad/dirección de las partículas de monedas (si hay emitterCoin)
    if (emitterCoin) {
        emitterCoin.forEachAlive(particle => {
            const angleOffset = (Math.random() - 0.5) * angleSpread;
            const finalAngle = cutAngle + angleOffset;
            const speed = baseForce + Math.random() * velocityVariation;

            particle.body.velocity.x = Math.cos(finalAngle) * speed;
            particle.body.velocity.y = Math.sin(finalAngle) * speed;

            particle.rotation = Math.random() * 2 * Math.PI;
            addShadowToParticleCoin(particle, fruit);
        });
    }

    // 5) Reordenar jerarquía para que las sombras/quiebres se dibujen en orden
    game.world.sort('z', Phaser.Group.SORT_ASCENDING);
}

function addShadowToParticleTomato(particle, fruit, shadowAlpha = 0.25, maxOffset = 10, minOffset = 30) {
    let shadow, shadowKey;

    const index = fruit.key === 'tomato' 
        ? peaces.indexOf(particle.key) 
        : peacesGold.indexOf(particle.key);

    if (index === -1) {
        console.error(`Particle key "${particle.key}" not found in the corresponding array.`);
        return; // Salir si el índice no es válido
    }

    shadowKey = fruit.key === 'tomato' 
        ? peacesShadow[index] 
        : peacesGoldShadow[index];

    shadow = game.add.image(particle.x, particle.y, shadowKey);
    shadow.scale.setTo(particle.scale.x, particle.scale.y);

    // Configurar propiedades de la sombra
    shadow.alpha = shadowAlpha; // Ajustar opacidad
    shadow.tint = 0x000000; // Aplicar tinte negro

    // Configurar el punto de anclaje en el centro del objeto y la sombra
    particle.anchor.setTo(0.5, 0.5); // Centro de la partícula
    shadow.anchor.setTo(0.5, 0.5); // Centro de la sombra

    // Asociar la sombra a la partícula
    particle.shadow = shadow;

    // Sincronizar la sombra con la partícula
    particle.update = function () {
        if (!shadow) return;

        // Sincronizar la posición y rotación de la sombra con la partícula
        shadow.x = particle.x;
        shadow.rotation = particle.rotation;

        // Calcular dinámicamente el offsetDistance basado en la posición vertical de la partícula
        const relativeY = Math.max(0, Math.min(1, particle.y / game.world.height)); // Normalizar particle.y entre 0 y 1
        const offsetDistance = maxOffset - (relativeY * (maxOffset - minOffset)); // Interpolación lineal

        // Calcular la posición vertical de la sombra
        shadow.y = Math.min(game.world.height - offsetDistance, particle.y + offsetDistance);

        // Sincronizar la escala de la sombra con la partícula
        shadow.scale.setTo(particle.scale.x, particle.scale.y);

        // Asegurar que la sombra esté detrás de la partícula
        shadow.z = particle.z - 2;
        game.world.sort('z', Phaser.Group.SORT_ASCENDING);

        // Si la partícula sale del borde inferior, eliminar la sombra
        if (particle.y > game.world.height) {
            shadow.destroy(); // Destruir la sombra
            particle.shadow = null; // Limpiar la referencia a la sombra
        }
    };
}

function addShadowToParticleCoin(particle, fruit, shadowAlpha = 0.2, maxOffset = 10, minOffset = 30) {
    let shadow;

    shadow = game.add.sprite(particle.x, particle.y, 'coinShadow');

    // Obtener las propiedades de la animación actual de la partícula
    if (particle.animations && particle.animations.currentAnim) {
        const currentAnim = particle.animations.currentAnim;

        // Copiar los frames y la dirección de la animación
        const totalFrames = currentAnim._frames.length;
        const isReversed = currentAnim.isReversed;
        const startFrame = currentAnim.currentFrame.index;

        // Generar los frames de la sombra
        let shadowFrames;
        if (isReversed) {
            shadowFrames = Array.from({ length: totalFrames }, (_, i) => totalFrames - 1 - i);
        } else {
            shadowFrames = Array.from({ length: totalFrames }, (_, i) => i);
        }

        // Configurar la animación de la sombra
        shadow.animations.add('spin', shadowFrames);
        shadow.animations.play('spin', currentAnim.frameRate, true, startFrame);

        //console.log(`Sombra creada con frame inicial: ${startFrame}, reversa: ${isReversed}`);
    }

    // Ajustar la escala para goldCC
    if (fruit.key === 'goldCC') {
        shadow.scale.setTo(particle.scale.x * 0.21, particle.scale.y * 0.21);
    } else {
        shadow.scale.setTo(particle.scale.x, particle.scale.y);
    }

    // Configurar propiedades de la sombra
    shadow.alpha = shadowAlpha; // Ajustar opacidad
    shadow.tint = 0x000000; // Aplicar tinte negro

    // Configurar el punto de anclaje en el centro del objeto y la sombra
    particle.anchor.setTo(0.5, 0.5); // Centro de la partícula
    shadow.anchor.setTo(0.5, 0.5); // Centro de la sombra

    // Asociar la sombra a la partícula
    particle.shadow = shadow;

    // Sincronizar la sombra con la partícula
    particle.update = function () {
        if (!shadow) return;

        // Sincronizar la posición y rotación de la sombra con la partícula
        shadow.x = particle.x;
        shadow.rotation = particle.rotation;

        // Calcular dinámicamente el offsetDistance basado en la posición vertical de la partícula
        const relativeY = Math.max(0, Math.min(1, particle.y / game.world.height)); // Normalizar particle.y entre 0 y 1
        const offsetDistance = maxOffset - (relativeY * (maxOffset - minOffset)); // Interpolación lineal

        // Calcular la posición vertical de la sombra
        shadow.y = Math.min(game.world.height - offsetDistance, particle.y + offsetDistance);

        // Sincronizar la escala de la sombra con la partícula
        shadow.scale.setTo(particle.scale.x, particle.scale.y);

        // Asegurar que la sombra esté detrás de la partícula
        shadow.z = particle.z - 2;
        game.world.sort('z', Phaser.Group.SORT_ASCENDING);

        // Si la partícula sale del borde inferior, eliminar la sombra
        if (particle.y > game.world.height) {
            shadow.destroy(); // Destruir la sombra
            particle.shadow = null; // Limpiar la referencia a la sombra
        }
    };
}


function fadeOutEmitterWithShadow(emitter) {
    if(emitter){
        game.time.events.add(750, () => {
            emitter.forEachAlive(particle => {
                // Desvanecer partícula
                const fadeOut = game.add.tween(particle).to({ alpha: 0 }, 750, Phaser.Easing.Linear.None, true);
                fadeOut.onComplete.add(() => {
                    if (particle.shadow) {
                        particle.shadow.destroy(); // Destruir la sombra antes de matar la partícula
                        particle.shadow = null; // Limpiar referencia a la sombra
                    }
                    if(particle){
                        particle.kill();
                    }
                });

                // Desvanecer sombra si existe
                if (particle.shadow) {
                    game.add.tween(particle.shadow).to({ alpha: 0 }, 750, Phaser.Easing.Linear.None, true);
                }
            });
        });
    }
}




function configureCoinAnimation(emitter) {
    emitter.forEachAlive(function (particle) {
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
}




function belongsToGroup(fruit, groupsArray) {
    return groupsArray.some(group => group.children.includes(fruit));
}

function killFruit(fruit) {
    // Crear las dos mitades
    let leftHalf, rightHalf;

    if(fruit.key === 'goldCC'){
        leftHalf = game.add.sprite(fruit.x, fruit.y, 'goldCC_left');
        rightHalf = game.add.sprite(fruit.x, fruit.y, 'goldCC_right');
        
    }else if (fruit.key === 'tomato'){
        leftHalf = game.add.sprite(fruit.x, fruit.y, 'tomato_left');
        rightHalf = game.add.sprite(fruit.x, fruit.y, 'tomato_right');
        score++;
    }else if (fruit.key === 'tomatoGold'){
        leftHalf = game.add.sprite(fruit.x, fruit.y, 'tomatoGold_left');
        rightHalf = game.add.sprite(fruit.x, fruit.y, 'tomatoGold_right');
        score++;
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


    // Coordenadas del corte
    const cutAngle = Math.atan2(contactPoint.y - fruit.y, contactPoint.x - fruit.x);

    if (fruit.key === 'tomato' || fruit.key === 'tomatoGold' || fruit.key === 'goldCC') {
        spawnParticles(fruit, cutAngle);
    }

    leftHalf.anchor.setTo(0.5, 0.5);
    rightHalf.anchor.setTo(0.5, 0.5);

    leftHalf.scale.setTo(0.5);
    rightHalf.scale.setTo(0.5);

    if(fruit.key !== 'goldCC'){
        addShadowToObject(leftHalf);
        addShadowToObject(rightHalf);
    }

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
    if (belongsToGroup(fruit, good_objects)) {
        game.time.events.add(1000, () => {
            // Fade out de las mitades y sus sombras
            if (leftHalf.shadow) {
                const shadowFadeOutLeft = game.add.tween(leftHalf.shadow).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
                shadowFadeOutLeft.onComplete.add(() => {
                    if (leftHalf.shadow) { // Verificar que la sombra aún existe antes de destruirla
                        leftHalf.shadow.destroy();
                    }
                });
            }
            const fadeOutTweenLeft = game.add.tween(leftHalf).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            fadeOutTweenLeft.onComplete.add(() => leftHalf.destroy());
    
            if (rightHalf.shadow) {
                const shadowFadeOutRight = game.add.tween(rightHalf.shadow).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
                shadowFadeOutRight.onComplete.add(() => {
                    if (rightHalf.shadow) { // Verificar que la sombra aún existe antes de destruirla
                        rightHalf.shadow.destroy();
                    }
                });
            }
            const fadeOutTweenRight = game.add.tween(rightHalf).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            fadeOutTweenRight.onComplete.add(() => rightHalf.destroy());
        });

        if (fruit.key === 'goldCC') {
            if (fruit.halo) {
                fruit.halo.destroy();
                delete fruit.halo; // Eliminar la referencia para liberar memoria
            }
        
            const resplandor = game.add.sprite(0, 0, 'halo'); // Crear como sprite independiente
            resplandor.anchor.setTo(0.5, 0.5); // Centrar
            resplandor.scale.setTo(1); // Tamaño inicial
            resplandor.animations.add('spin');
            resplandor.animations.play('spin', 15, true); // Animación a 15 FPS en bucle
        
            // Crear el círculo
            const circle = game.add.sprite(0, 0, 'circle'); // Crear como sprite independiente
            circle.anchor.setTo(0.5, 0.5); // Centrar
            circle.scale.setTo(1); // Tamaño inicial
            circle.animations.add('spin');
            circle.animations.play('spin', 30, true); // Animación a 30 FPS en bucle
        
            // Configurar para que ambos sigan al fruit
            fruit.update = function () {
                // Resplandor sigue al fruit
                resplandor.x = fruit.x;
                resplandor.y = fruit.y;
        
                // Circle sigue al fruit
                circle.x = fruit.x;
                circle.y = fruit.y;
            };
            
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
        
            fadeTween.onComplete.add(() => {
                resplandor.destroy(); // Destruir completamente el sprite
            });



        
            const scaleTweenCircle = game.add.tween(circle.scale).to(
                { x: 1.75, y: 1.75 }, // Tamaño final
                1100, // Duración de 600ms
                Phaser.Easing.Quadratic.Out, // Efecto de suavizado
                true // Inicia automáticamente
            );
        
            // Animación de opacidad (desaparecer)
            const fadeTweenCircle = game.add.tween(circle).to(
                { alpha: 0 }, // Transición a opacidad 0
                900, // Duración de 600ms
                Phaser.Easing.Linear.None, // Transición lineal
                true // Inicia automáticamente
            );
        
            fadeTweenCircle.onComplete.add(() => {
                circle.destroy(); // Destruir completamente el sprite
            });
        
            // Asegurar que el resplandor y el círculo se rendericen en el orden correcto
            resplandor.z = -1; // Resplandor detrás
            circle.z = -1; // Circle también detrás
            game.world.sort('z', Phaser.Group.SORT_ASCENDING); // Ordenar elementos por z-index
        }
        
        
        
        
        
        
        
        

    } else {
        // Fade out para las mitades y sombras de los objetos malos
        if (leftHalf.shadow) {
            const shadowFadeOutLeft = game.add.tween(leftHalf.shadow).to({ alpha: 0 }, 300, Phaser.Easing.Linear.None, true);
            shadowFadeOutLeft.onComplete.add(() => {
                if (leftHalf.shadow) { // Verificar que la sombra aún existe antes de destruirla
                    leftHalf.shadow.destroy();
                }
            });
        }
        const fadeOutTweenLeft = game.add.tween(leftHalf).to({ alpha: 0 }, 300, Phaser.Easing.Linear.None, true);
        fadeOutTweenLeft.onComplete.add(() => leftHalf.destroy());

        if (rightHalf.shadow) {
            const shadowFadeOutRight = game.add.tween(rightHalf.shadow).to({ alpha: 0 }, 300, Phaser.Easing.Linear.None, true);
            shadowFadeOutRight.onComplete.add(() => {
                if (rightHalf.shadow) { // Verificar que la sombra aún existe antes de destruirla
                    rightHalf.shadow.destroy();
                }
            });
        }
        const fadeOutTweenRight = game.add.tween(rightHalf).to({ alpha: 0 }, 300, Phaser.Easing.Linear.None, true);
        fadeOutTweenRight.onComplete.add(() => rightHalf.destroy());
        
        const explosion = game.add.sprite(fruit.x, fruit.y, 'explosion');
        explosion.anchor.setTo(0.5, 0.5);
        explosion.scale.setTo(0.5);
        
        // Define y reproduce la animación
        const anim = explosion.animations.add('boom', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 30, false);
        
        if (anim) {
            // Reproduce la animación
            explosion.animations.play('boom');
        
            // Cuando termine la animación, destruye el sprite y limpia eventos
            anim.onComplete.add(() => {
                explosion.destroy(); // Elimina el sprite
            });
        
            // Limpia eventos para evitar fugas de memoria
            anim.onComplete.removeAll();
        } else {
            console.error("La animación no pudo ser creada.");
        }
        
    }

    


    removeFromScreenList(fruit);
    if(fruit.key !== 'goldCC'){
        fruit.shadow.destroy();
    }

    fruit.kill();

    // Actualizar puntuación
    points = [];
    tomatosCuted.textContent = score;



    if (fruit.key === 'tomato' || fruit.key === 'tomatoGold') {
        /*console.log("tomatosBet.textContent: "+tomatosBet.textContent);
        console.log("tomatosCuted.textContent: "+tomatosCuted.textContent);*/
        if(tomatosBet.textContent == tomatosCuted.textContent){
            stopGame();
            action="win";
            showMenu(endContainer, "win");
            return;
        }
    }
}


let monedasUpdateInterval;

function scoreCoinsUpdate(price){
    // Limpia el intervalo existente, si lo hay
    if (monedasUpdateInterval) {
        clearInterval(monedasUpdateInterval);
    }

    let monedasViejas = scoreCoins;
    let monedasNuevas = monedasViejas+price;
    
    // Calcular la cantidad de pasos y la duración de cada paso
    const pasos = Math.abs(monedasViejas - monedasNuevas);
    const intervaloDuracion = pasos > 0 ? 1000 / pasos : 0; // Duración en ms por paso (2 segundos en total)

    // Intervalo para animar la actualización de monedas
    monedasUpdateInterval = setInterval(() => {
        if (monedasViejas === monedasNuevas) {
        clearInterval(monedasUpdateInterval); // Detener el intervalo si los valores coinciden
        return;
        }

        if (monedasViejas < monedasNuevas) {
        monedasViejas++; // Incrementa hacia el valor deseado
        } else if (monedasViejas > monedasNuevas) {
        monedasViejas--; // Decrementa hacia el valor deseado
        }

        // Actualiza el contenido de coinLabel
        coinsColected.textContent = monedasViejas;
    }, intervaloDuracion); // Ajusta la velocidad de la animación aquí

    scoreCoins = scoreCoins+price;
}


function handleWarningMessage(container, message, color){
    if(container == "none"){
        warningMessageContainer.style.display = "none";
    }else if(container == "flex"){
        warningMessageContainer.style.display = "flex";
    }else{
        console.log("ERROR. handleWarningMessage -> container: "+container);
    }

    if(message){
        warningMessage.textContent = message;
    }else{
        console.log("ERROR. handleWarningMessage -> message: "+message);
    }

    if(color == "blue"){
        warningMessage.style.color = "#bfd4e9";
        warningImg.src = "../img/charge.gif";
        warningImg.className = "chargeGif";
    }else if(color == "green"){
        warningMessage.style.color = "#11ff00";
        warningImg.src = "../img/tickCheck.png";
        warningImg.className = "messageTick";
    }else if(color == "red"){
        warningMessage.style.color = "#CA2128";
        warningImg.src = "../img/error.png";
        warningImg.className = "messageError";
    }else{
        console.log("ERROR. handleWarningMessage -> color: "+color);
    }
}

let firstTime = 0;
document.addEventListener("DOMContentLoaded", function () {
    let gifUrl = ""; // Cambia esto con la URL de tu GIF
    const canvas = document.getElementById("gifCanvas");
    const ctx = canvas.getContext("2d");
    let gifFrames = [];
    let frameIndex = 0;
    const frameDelay = 10; // 🔹 Fijamos el tiempo por frame en 10ms (100 FPS)
    let playing = true;

    startMatchContainer.classList.add("active");
    startMatchContainerImg.classList.add("active");

    startButton.addEventListener("click", function () {
        if (!idLogeado || isNaN(parseInt(idLogeado)) || parseInt(idLogeado) === 0) {
            handleWarningMessage("flex", "Hay un fallo de registro. Prueba a volver a la página principal y loguearte", "red");
            return;
        }
        if(!gameActive){
            startGame();
            hideMenu(startMatchContainer);
            warningMessageContainer.style.display = "none";
            tomatosBet.textContent = sliderTomatoes.value;
            gameActive = true;
        }
        firstTime++;
        if(firstTime == 1){
            document.getElementById("game").innerHTML = '';
            game = new Phaser.Game(w, h, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });
        }
    });


    let nextButtonPressed = 0;
    nextButton.addEventListener("click", function () {
        nextButtonPressed++;
        if(nextButtonPressed !== 1){
            return;
        }
        setTimeout(() => {
            nextButtonPressed = 0;
        }, 1000);
        if(!gameActive){
            hideMenu(endContainer);
            showMenu(startMatchContainer);
        }
    });


    /* BET SLIDER VALUE ADJUST */
    const sliderMulti = document.getElementById('sliderMulti');
    const thumbMulti = document.querySelector('.thumbMulti');
    const thumbX = document.querySelector('.thumbX');
    const thumbMultiCont = document.querySelector('.thumbMultiCont');
    const multiValueLabel = document.getElementById("multiValueLabel");
    
    function updateThumbPosition(offsetWidth) {
        let sliderWidth = sliderMulti.offsetWidth;
        if(offsetWidth){
            sliderWidth = offsetWidth;
        }
        sliderWidth = sliderWidth - 2;
        const sliderMin = sliderMulti.min;           // Valor mínimo del slider
        const sliderMax = sliderMulti.max;           // Valor máximo del slider
    
        // Calcular la posición en porcentaje
        const valuePercent = (sliderMulti.value - sliderMin) / (sliderMax - sliderMin);
    
        // Calcular la posición del contenedor del thumb
        const thumbOffset = valuePercent * sliderWidth; // Posición relativa al ancho del slider
    
        // Mover el contenedor para que siga el thumb
        thumbMultiCont.style.left = `calc(${thumbOffset}px + 110px)`; // Ajustar con un margen opcional
    }
    
    function formatValue(value) {
        // Convertir el valor a cadena y agregar el punto después de la primera cifra
        const valueStr = value.toString();
        if (valueStr.length > 1) {
            return `${valueStr[0]}.${valueStr.slice(1)}`;
        }
        return valueStr; // Devuelve el valor original si es de una sola cifra
    }
    

    thumbMulti.textContent = formatValue(sliderMulti.value);
    multiValueLabel.textContent = formatValue(sliderMulti.value);
    sliderMulti.addEventListener('input', function () {
        thumbMulti.textContent = formatValue(this.value); // Actualizar el contenido del texto con el formato
        multiValueLabel.textContent = formatValue(this.value);
        updateThumbPosition();
        if(!blockCoinsFree){updateFinalCostMulti();}
        updateFinalProbMulti();
    });

    sliderMulti.addEventListener('mouseenter', function () {
        thumbMulti.classList.add("active");
        thumbX.classList.add("active");
        thumbMultiCont.classList.add("active");
    });
    sliderMulti.addEventListener('mouseleave', function () {
        thumbMulti.classList.remove("active");
        thumbX.classList.remove("active");
        thumbMultiCont.classList.remove("active");
    });
    sliderMulti.addEventListener('mousedown', function () {
        thumbMultiCont.classList.add("activeBlur");
    });
    sliderMulti.addEventListener('mouseup', function () {
        thumbMultiCont.classList.remove("activeBlur");
    });




    const multiHelpContainer = document.querySelector('.multiHelpContainer');
    const multiHelp = document.getElementById("multiHelp");
    multiHelpContainer.addEventListener('mouseenter', function () {
        if(blockCoinsFree){return;}
        thumbMultiCont.style.transition = "all 0.3s ease";
        multiHelp.classList.add("active");
        sliderMulti.style.width = "30px";
        updateThumbPosition(30);
    });
    multiHelpContainer.addEventListener('mouseleave', function () {
        setTimeout(() => {
            thumbMultiCont.style.transition = "";
        }, 500);
        multiHelp.classList.remove("active");
        sliderMulti.style.width = "90px";
        updateThumbPosition(90);
    });

    const multiCostsFinal = document.getElementById("multiCostsFinal");
    function updateFinalCostMulti() {
        // Convertir thumbMulti y betValueSelect a números
        const thumbValue = parseFloat(thumbMulti.textContent); // Convertir a número flotante
        const betValue = parseInt(betValueSelect.textContent, 10); // Convertir a número entero

        // Calcular el costo final y redondear hacia arriba
        const finalCost = Math.ceil(thumbValue * betValue);

        // Asignar el valor redondeado como texto
        multiCostsFinal.textContent = finalCost;
    }

    function updateFinalProbMulti() {
        // 1) Obtener multiplicador
        const thumbValue = parseFloat(thumbMulti.textContent) || 1;
      
        // 2) Seleccionar todas las filas de estadísticas
        const statRows = document.querySelectorAll(".statRow");
      
        // Array para guardar la info intermedia de cada fila
        let rowData = [];
      
        // ---------- PRIMERA PASADA: calcular "newRate" ----------
        statRows.forEach(row => {
          const itemNameEl = row.querySelector(".itemName");
          const itemPercentageEl = row.querySelector(".itemPercentage");
          const multiNEl = row.querySelector(".multiN");
          const multiFEl = row.querySelector(".multiF");
      
          // Comprobamos que existan
          if (!itemNameEl || !itemPercentageEl || !multiNEl || !multiFEl) return;
      
          const itemName = itemNameEl.textContent.trim().toLowerCase();
          // Ej. "44.64%" => quitar símbolo para parsear
          const percentageText = itemPercentageEl.textContent.replace("%", "").trim();
          const baseRate = parseFloat(percentageText) || 0;
      
          // Por defecto, la probabilidad modificada es la misma
          let newRate = baseRate;
          let multiLabel = "-";
      
          if (checkboxSwitch.checked) {
            // "loco" => multiplicador SOLO en "bomb"
            if (itemName.includes("bomba")) {
              newRate = baseRate * thumbValue;
              // Mostrar siempre con 2 decimales => "x1.00"
              multiLabel = "x" + thumbValue.toFixed(2);
            } else {
              multiLabel = "-";
            }
          } else {
            // "normal" => multiplicador SOLO en "tomato"
            if (itemName.includes("tomate")) {
              newRate = baseRate * thumbValue;
              multiLabel = "x" + thumbValue.toFixed(2);
            } else {
              multiLabel = "-";
            }
          }
      
          // Guardamos todo en rowData para la segunda pasada
          rowData.push({
            row,
            multiNEl,
            multiFEl,
            newRate,
            multiLabel // Para enseñar luego en la columna multiN
          });
        });
      
        // Calcular la suma de todas las newRate
        let totalRate = 0;
        rowData.forEach(item => {
          totalRate += item.newRate;
        });
      
        // Evitar divisiones por cero (si totalRate = 0, ninguna prob > 0)
        if (totalRate === 0) {
          totalRate = 1; // Evitar NaN; o bien deja todo en 0%
        }
      
        // ---------- SEGUNDA PASADA: normalizar a 100% ----------
        rowData.forEach(item => {
          const { multiNEl, multiFEl, newRate, multiLabel } = item;
          // Normalizar
          const finalProb = (newRate / totalRate) * 100;
      
          // Actualizar celdas
          multiNEl.textContent = multiLabel;                  // x1.5 o -
          multiFEl.textContent = finalProb.toFixed(2) + "%";  // 0.00% ... 100.00%
        });
      }
      
      

    setTimeout(() => {
        updateThumbPosition();
        if(!blockCoinsFree){updateFinalCostMulti();}
        updateFinalProbMulti();
    }, 100);

    
      


    /* MODE CHECKBOX */
    let blockCoinsFree = false;
    
    checkboxSwitch.addEventListener("change", handleCheckboxSwitch);
    handleCheckboxSwitch();

    function handleCheckboxSwitch(){
        if(checkboxSwitch.checked){
            //LOCO
            blockCoinsFree = true;
            multiBetValue.textContent = 0;
            multiCostsFinal.textContent = 0;

            modoLocoDefault.style.opacity = "0";
            modoLocoActive.style.opacity = "1";
            multiModeLabel.classList.add("active");
            multiModeLabel.style.animation = 'letterSpacingIn 0.4s ease forwards';
            setTimeout(() => {
                multiModeLabel.textContent = "Modo Loco";
            }, 200);
            setTimeout(() => {
                multiModeLabel.style.animation = '';
            }, 400);
        }else{
            //NORMAL
            blockCoinsFree = false;
            multiBetValue.textContent = parseInt(betValueSelect.textContent.trim()) || 1;
            updateFinalCostMulti();

            modoLocoDefault.style.opacity = "1";
            modoLocoActive.style.opacity = "0";
            multiModeLabel.classList.remove("active");
            multiModeLabel.style.animation = 'letterSpacingIn 0.4s ease forwards';
            setTimeout(() => {
                multiModeLabel.textContent = "Modo Normal";
            }, 200);
            setTimeout(() => {
                multiModeLabel.style.animation = '';
            }, 400);
        }
        updateFinalProbMulti();
    }









    /* BET SLIDER VALUE ADJUST */
    betValueSelect.textContent = sliderTomatoes.value;
    let previousValue;

    sliderTomatoes.addEventListener('input', function() {
        betValueSelect.textContent = this.value;
        if(!blockCoinsFree){
            multiBetValue.textContent = this.value;
        }
        betValueSelect.innerHTML = betValueSelect.innerHTML.replace(/<br\s*\/?>/g, "");
        previousValue = betValueSelect.textContent.trim();

        if(!blockCoinsFree){updateFinalCostMulti();}
        updateWidths();
    });
    betValueSelect.addEventListener('input', function() {
        if(!blockCoinsFree){
            multiBetValue.textContent = betValueSelect.textContent.trim();
        }
        sliderTomatoes.value = betValueSelect.textContent.trim();

        if(!blockCoinsFree){updateFinalCostMulti();}
        updateWidths();
    });
    betValueSelect.addEventListener("focus", function () {
        betValueSelect.classList.add("active");
        betValueSelect.innerHTML = betValueSelect.innerHTML.replace(/<br\s*\/?>/g, "");
        previousValue = betValueSelect.textContent.trim();
    });
    betValueSelect.addEventListener("blur", function () {
        if(!blockCoinsFree){
            multiBetValue.textContent = parseInt(betValueSelect.textContent.trim());
        }
        betValueSelect.textContent = parseInt(betValueSelect.textContent.trim());
        betValueSelect.classList.remove("active");
        checkGoodInput();
    });

    function checkGoodInput(){
        betValueSelect.innerHTML = betValueSelect.innerHTML.replace(/<br\s*\/?>/g, "");
        let currentValue = betValueSelect.textContent.trim(); // Obtener el nuevo valor sin espacios
    
        // Validar si es vacío, solo espacios, salto de línea, NaN o null
        if (
            currentValue === "" || // Vacío
            currentValue === "0" || // Si es "0"
            isNaN(Number(currentValue)) || // No es un número válido
            currentValue === null || // Si es null
            currentValue === undefined || // Si es undefined
            currentValue > parseInt(betValueDB.textContent)
        ) {
            betValueSelect.textContent = previousValue;
            sliderTomatoes.value = previousValue;

            if(!blockCoinsFree){
                multiBetValue.textContent = previousValue;
                updateFinalCostMulti();
            }
            updateWidths();
        } else {
            previousValue = currentValue; // Guardar el nuevo valor si es válido
        }
    }




    /* sliderTomatoesContainer WIDTH ADJUST */
    function updateWidths() {
        const selectWidth = betValueSelect.offsetWidth;
        const dbWidth = betValueDB.offsetWidth;

        // Actualizar las variables CSS
        document.documentElement.style.setProperty('--betValueSelect-width', `${selectWidth}px`);
        document.documentElement.style.setProperty('--betValueDB-width', `${dbWidth}px`);
    }
    updateWidths();
    window.addEventListener('resize', updateWidths);





    /* CONTAINERS PERSPECTIVE */

    const setProp = (el, prop, value) => el.style.setProperty(prop, value);

    const onMouseUpdate = (e, el, container) => {
        const elRect = el.getBoundingClientRect();

        // Coordenadas relativas al contenedor
        const XRel = e.clientX - elRect.left;
        const YRel = e.clientY - elRect.top;
        const width = elRect.width;

        const scaleFactor = 12; // Cantidad de perspectiva
        const YAngle = -(0.5 - (XRel / width)) * scaleFactor;
        const XAngle = (0.5 - (YRel / width)) * scaleFactor;

        setProp(el, '--dy', `${YAngle}deg`);
        setProp(el, '--dx', `${XAngle}deg`);
    };

    const resetProps = (el) => {
        el.style.setProperty('--dy', '0');
        el.style.setProperty('--dx', '0');
    };

    let container = document.getElementById("startMatchContainer");
    const elements = container.querySelectorAll('.perspCont');

    const adjustHitboxes = (activeEl) => {
        elements.forEach(el => {
            if (el !== activeEl) {
                el.style.pointerEvents = "none"; // Desactiva eventos para evitar colisiones
            }
        });
    };

    const resetHitboxes = () => {
        elements.forEach(el => {
            el.style.height = ""; // Restablece la altura original
            el.style.pointerEvents = ""; // Reactiva los eventos
        });
    };

    elements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            el.classList.add('active');
            el.style.zIndex = "180";
            adjustHitboxes(el); // Ajusta las hitboxes de los demás elementos
            onMouseUpdate(e, el, container);
        }, false);

        el.addEventListener('mouseenter', (e) => {
            el.classList.add('active');
            el.style.zIndex = "180";
            adjustHitboxes(el); // Ajusta las hitboxes al entrar
            onMouseUpdate(e, el, container);
        }, false);

        el.addEventListener('mouseleave', () => {
            el.classList.remove('active');
            el.style.zIndex = "0";
            resetHitboxes(); // Restablece las hitboxes al salir
            resetProps(el);
        }, false);
    });

    
    


    /* STATS WIDTH ADJUST */
    let arrowState = false;

    function handleStatsWidth(isFromListener = false) {
        const selectWidthStats = getComputedStyle(document.documentElement).getPropertyValue('--betValueSelect-width');
        const dbWidthStats = getComputedStyle(document.documentElement).getPropertyValue('--betValueDB-width');

        const selectWidthValueStats = parseFloat(selectWidthStats) || 0;
        const dbWidthValueStats = parseFloat(dbWidthStats) || 0;
        const finalWidthStats = 444 + selectWidthValueStats + dbWidthValueStats;


        const statsTitle = document.querySelector('.statsTitle');
        const flecha = document.querySelector('.flecha');

        const statsTitleWidth = statsTitle ? statsTitle.offsetWidth : 0;
        const flechaWidth = flecha ? flecha.offsetWidth : 0;
        const finalWidthAuto = statsTitleWidth + flechaWidth + 108;


        const blankWidth = finalWidthStats-finalWidthAuto;

        if (isFromListener) {
            arrowState = !arrowState;
        }

        if(arrowState){
            //Expandido
            statsContainer.style.width = `${finalWidthStats}px`;
            statsContainer.style.height = "260px";
            flecha.classList.add("rotated");
            blank.style.width = `${blankWidth}px`;
            sliceIt.classList.add("down");
            startButton.style.marginTop = "0px";
        }else{
            //Contraído
            statsContainer.style.width = `${finalWidthAuto}px`;
            statsContainer.style.height = "15px";
            flecha.classList.remove("rotated");
            blank.style.width = "1px";
            sliceIt.classList.remove("down");
            startButton.style.marginTop = "40px";
        }
    }

    handleStatsWidth(false);
    setTimeout(() => {
        statsTittleContainer.click();
    }, 200);
    statsTittleContainer.addEventListener("click", () => handleStatsWidth(true));
    sliderTomatoes.addEventListener("input", () => handleStatsWidth());



    /* PERCENTAGE STATS MENU ADJUST */
    const statsContainers = document.querySelectorAll(".itemPercentage");
    const totalProbabilities = Object.values(probabilities).reduce((acc, value) => acc + value, 0);
    const normalizedProbabilities = Object.entries(probabilities).map(([key, value]) => {
        return { key, value: (value / totalProbabilities) * 100 };
    });

    statsContainers.forEach((statContainer, index) => {
        if (index < normalizedProbabilities.length) {
            const { key, value } = normalizedProbabilities[index];
            statContainer.textContent = `${value.toFixed(2)}%`;
        }
    });






});

