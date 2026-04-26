let scene = "pirate";
let characters = [
    {
        name: "baby",
        moveTimer: 0,
        moveTime: 15,
        killTimer: 0,
        killTime: 15,
        rng: 0.5,
        cam: 0,
        menuImg: "assets/characterSelect/baby.png",
        difficulty: 0,
        element: document.getElementById("baby"),
        description: "she will say a voiceline and then find her in cams 1,2,5 and shock it",
    },
    {
        name: "funtime freddy",
        moveTimer: 0,
        moveTime: 15,
        killTimer: 0,
        killTime: 3.5,
        side: "left",
        rng: 0.5,
        cam: 0,
        attacking: false,
        attack: 0,
        menuImg: "assets/characterSelect/funtimeFreddy.png",
        difficulty: 0,
        firstFrame: false,
        element: null,
        description: "is either in the left or right if he says bon bon go get him close the corresponding door but if he says get ready for a surprise close the opposite door",
    },
    {
        name: "ballora",
        moveTimer: 0,
        moveTime: 15,
        killTimer: 0,
        killTime: 3,
        rng: 0.5,
        side: 0,
        menuImg: "assets/characterSelect/ballora.png",
        difficulty: 0,
        element: null,
        description: "you will hear music and you have to close the door where its panning",
    },
    {
        name: "funtime foxy",
        moveTimer: 0,
        moveTime: 6,
        killTimer: 0,
        killTime: 10,
        leaveTimer: 0,
        leaveTime: 1,
        rng: 0.5,
        phase: 0,
        menuImg: "assets/characterSelect/funtimeFoxy.png",
        difficulty: 0,
        element: null,
        description: "hes in cam 7 and once he leaves close the right door",
    },
    {
        name: "bonnet",
        rng: 0.5,
        moveTimer: 0,
        moveTime: 15,
        x: 110,
        menuImg: "assets/characterSelect/bonnet.png",
        difficulty: 0,
        element: document.getElementById("bonnet"),
        description: "click nose",
    },
    {
        name: "ennard",
        rng: 0.5,
        moveTimer: 0,
        moveTime: 8, // pp 5mt
        killTimer: 0,
        killTime: 4,
        leaveTimer: 0,
        leaveTime: 0.7,
        side: 0,
        phase: 0,
        menuImg: "assets/characterSelect/ennard.png",
        difficulty: 0,
        element: null,
        description: "appears in either the left or right door or vent and you have to close them when you hear a loud bang",
    },
    {
        name: "bidybab",
        rng: 0.5,
        moveTimer: 0,
        moveTime: 8, // pp 5mt
        killTimer: 0,
        killTime: 3,
        leaveTimer: 0,
        leaveTime: 0.7,
        phase: 0,
        menuImg: "assets/characterSelect/bidybab.png",
        difficulty: 0,
        element: null,
        description: "appears in the top vent shock him to make him go back before he kills you",
    },
    {
        name: "electrobab",
        rng: 0.5,
        moveTimer: 0,
        moveTime: 15,
        menuImg: "assets/characterSelect/electrobab.png",
        difficulty: 0,
        side: 3,
        element: null,
        description: "shock the cam he is in its either cam03 or cam04",
    },
    {
        name: "yenndo",
        rng: 0.5,
        killTime: 0,
        side: 0,
        leaveTimer: 0,
        leaveTime: 0.5,
        camsOpened: false,
        active: false,
        menuImg: "assets/characterSelect/yenndo.png",
        difficulty: 0,
        element: document.getElementById("yenndo"),
        description: "he appears once you close cams if hes on the right close the right door if hes on the left close the left door if hes on the middle close the vent",
    },
    {
        name: "lolbit",
        rng: 0.5,
        moveTimer: 0,
        moveTime: 30,
        killTimer: 0,
        killTime: 5,
        side: 0,
        camsOpened: false,
        sequence: 0,
        index: 0,
        menuImg: "assets/characterSelect/lolbit.png",
        difficulty: 0,
        element: document.getElementById("lolbit"),
        textElement: document.getElementById("lolbitSequence"),
        description: "press the number on the top of your screen or he will take your power"
    },
    {
        name: "minireena 2",
        rng: 0.5,
        moveTimer: 0,
        moveTime: 15,
        minireenas: [],
        menuImg: "assets/characterSelect/minireena.png",
        difficulty: 0,
        element: document.getElementById("minireena2"),
        description: "appears in the cams but will be highlighted hes taking your oxygen"
    },
    {
        name: "minireena 1",
        rng: 0.5,
        moveTimer: 0,
        moveTime: 8,
        killTimer: 0,
        killTime: 5,
        leaveTimer: 0,
        leaveTime: 0.5,
        side: 0,
        camsOpened: false,
        sequence: 0,
        index: 0,
        active: false,
        menuImg: "assets/characterSelect/minireena2.png",
        difficulty: 0,
        element: document.getElementById("minireena"),
        description: "he has a 20% chance to appear when you close cams put the mask on"
    },
];
let activeCharacters = [];
const sounds = {
    babySound: "assets/soundEffects/babySound.mp3",
    ffIntro: "assets/soundEffects/funtimeFreddyIntro.mp3",
    ffLTR: "assets/soundEffects/funtimeFreddyLTR.mp3",
    ffRTL: "assets/soundEffects/funtimeFreddyRTL.mp3",
    ffAttack1: "assets/soundEffects/funtimeFreddyAttack1.mp3",
    ffAttack2: "assets/soundEffects/funtimeFreddyAttack2.mp3",
    bonk: "assets/soundEffects/bonk.mp3",
    shock: "assets/soundEffects/shock.ogg",
    balloraLeft: "assets/soundEffects/balloraLeft.mp3",
    balloraRight: "assets/soundEffects/balloraRight.mp3",
    ennardSound: "assets/soundEffects/ennard.mp3",
    bidybab1: "assets/soundEffects/bidybab1.ogg",
    bidybab2: "assets/soundEffects/bidybab2.ogg",
    bidybabBang: "assets/soundEffects/bidybabBang.mp3",
    bonnet: "assets/soundEffects/bonnet.ogg",
    lolbit: "assets/soundEffects/LOL.ogg",
}
let sfx = {};
for (let key in sounds) {
    sfx[key] = new Audio(sounds[key]);
}
for (let i = 0; i<characters.length; i++) {
    const charDiv = document.createElement("div");
    charDiv.id = "char_"+i;
    charDiv.classList.add("charDiv");
    charDiv.style.backgroundImage = "url(" + characters[i].menuImg + ")";
    document.getElementById("characters").appendChild(charDiv);
    
    const plusDiff = document.createElement("button");
    plusDiff.textContent = "+";
    plusDiff.dataset.char = i;
    plusDiff.id = "pd_"+i;
    plusDiff.style = "position: absolute; left: 0; bottom: 0; font-size: 2vh; border: none; padding: 0; width: 3vh; height: 3vh; border: solid black 0.2vh;";
    charDiv.appendChild(plusDiff);

    const minusDiff = document.createElement("button");
    minusDiff.textContent = "-";
    minusDiff.dataset.char = i;
    minusDiff.id = "md_"+i;
    minusDiff.style = "position: absolute; left: 0; bottom: 3vh; font-size: 2vh; border: none; padding: 0; width: 3vh; height: 3vh; border: solid black 0.2vh;";
    charDiv.appendChild(minusDiff);

    const charDiff = document.createElement("div");
    charDiff.dataset.char = i;
    charDiff.dataset.difficulty = 0;
    charDiff.id = "cd_"+i;
    charDiff.style = "position: absolute; right: 0; bottom: 0; font-size: 6vh; color: white; text-shadow: 0 0 1vh black; font-family: arial;";
    charDiff.textContent = "0";
    charDiv.appendChild(charDiff);
}
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState == "hidden") {
        location.reload();
    }
});
window.addEventListener("contextmenu", (e) => {e.preventDefault()});
document.getElementById("deathText").addEventListener("click", (e) => {
    if (e.target.id == "retry") {
        scene = "ingame";
        resetFF();
    }
    if (e.target.id == "btnMenu") {
        scene = "menu";
        resetFF();
    }
});
document.getElementById("characters").addEventListener("mousedown", (e) => {
    if (e.target.id.includes("pd_")) {
        let char = e.target.dataset.char;
        let cd = characters[char].difficulty;
        if (keys["shift"]) {
            cd = 20;
        }
        cd++;
        if (cd >= 20) {
            cd = 20;
        }
        characters[char].difficulty = cd;
        document.getElementById("cd_" + char).textContent = cd;
    }
    if (e.target.id.includes("md_")) {
        let char = e.target.dataset.char;
        let cd = characters[char].difficulty;
        if (keys["shift"]) {
            cd = 0;
        }
        cd--;
        if (cd <= 0) {
            cd = 0;
        }
        characters[char].difficulty = cd;
        document.getElementById("cd_" + char).textContent = cd;
    }
});
document.getElementById("characters").addEventListener("mousemove", (e) => {
    if (e.target.id == "characters") {return; document.getElementById("characterDescription").style.display = "none";};
    document.getElementById("characterDescription").style.display = "block";
    document.getElementById("charName").textContent = characters[e.target.id.match(/(\d+)/)[0]].name;
    document.getElementById("charDescription").textContent = characters[e.target.id.match(/(\d+)/)[0]].description;
});
document.getElementById("characters").addEventListener("mouseleave", (e) => {
    document.getElementById("characterDescription").style.display = "none";
});
let lastTime = 0;
let firstFrame = [false,false,false,false];
function resetFF() {
    for (let i = 0; i<firstFrame.length; i++) {
        firstFrame[i] = false;
    }
}
let mouse = {x: 0,y: 0};
window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    document.getElementById("characterDescription").style.left = mouse.x / window.innerWidth * 100 + "vw";
    document.getElementById("characterDescription").style.top = mouse.y / window.innerHeight * 100 + "vh";
});
let keys = {};
let camStatic = 1;
document.getElementById("camButtons").addEventListener("mousedown", (e) => {
    if (e.target.dataset.cam == undefined) return;
    for (let i = 1; i<8; i++) {
        document.getElementById("cam" + i).style.backgroundColor = "white";
    }
    cams.cam = Number(e.target.dataset.cam);
    document.getElementById("cam"+(cams.cam+1)).style.backgroundColor = "orange";
    camStatic = 0.9;
});
document.getElementById("volumeRange").addEventListener("change", (e) => {
    for (let key in sfx) {
        sfx[key].volume = document.getElementById("volumeRange").value / 100;
    }
});
document.getElementById("startButton").addEventListener("click", (e) => {scene = "ingame";});
document.getElementById("cam1").style.backgroundColor = "orange";
let shocking = false;
let shockTransition = 0;
window.addEventListener("keydown", (e) => {
    keys[e.key.toLowerCase()] = true;
    if (e.key.toLowerCase() == "a") {
        doors[0] = !doors[0];
        if (doors[0]) {
            document.getElementById("leftDoor").style.display = "block";
        } else {
            document.getElementById("leftDoor").style.display = "none";
        }
    }
    if (e.key.toLowerCase() == "w") {
        doors[1] = !doors[1];
        if (doors[1]) {
            document.getElementById("vent").style.display = "block";
        } else {
            document.getElementById("vent").style.display = "none";
        }
    }
    if (e.key.toLowerCase() == "d") {
        doors[2] = !doors[2];
        if (doors[2]) {
            document.getElementById("rightDoor").style.display = "block";
        } else {
            document.getElementById("rightDoor").style.display = "none";
        }
    }
    if (e.key.toLowerCase() == "s") {
        cams.opened = !cams.opened;
        if (mask) {
            cams.opened = false;
        }
        camStatic = 1;
        if (cams.opened) {
            document.getElementById("cams").style.display = "block";
        } else {
            document.getElementById("cams").style.display = "none";
        }
    }
    if (e.key.toLowerCase() == " ") {
        if (!cams.opened) {
            mask = !mask;
        }
        if (mask) {
            document.getElementById("mask").style.display = "block";
        } else {
            document.getElementById("mask").style.display = "none";
        }
    }
    if (e.key.toLowerCase() == "e" && cams.opened) {
        shocking = true;
        shockTransition = 0.6;
        sfx.shock.pause();
        sfx.shock.currentTime = 0;;
        sfx.shock.play();
    }
});
window.addEventListener("keyup", (e) => {
    keys[e.key.toLowerCase()] = false;
});
let cams = {
    opened: false,
    cam: 0,
};
let mask = false;
let doors = [false,false,false];
let shakeIntensity = 0;
let power = 100;
let oxygen = 100;
let ingameTimer = 0;
let powerDrain = 0;
const textDisplay = [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
];
document.getElementById("bonnetHitbox").addEventListener("mousedown", (e) => {
    for (let i = 0; i<activeCharacters.length; i++) {
        if (activeCharacters[i].name == "bonnet") {
            activeCharacters[i].moveTime[0] = 0;
            activeCharacters[i].x = 110;
            sfx.bonnet.pause();
            sfx.bonnet.currentTime = 0;
        }
    }
});
function ingame(dt, time) {
    if (!firstFrame[1]) {
        resetFF();
        firstFrame[1] = true;
        document.getElementById("menu").style.display = "none";
        document.getElementById("ingame").style.display = "block";
        document.getElementById("deathScreen").style.display = "none";

        document.getElementById("leftDoor").style.display = "none";
        document.getElementById("rightDoor").style.display = "none";
        document.getElementById("vent").style.display = "none";
        document.getElementById("mask").style.display = "none";
        document.getElementById("cams").style.display = "none";
        cams = {
            opened: false,
            cam: 0,
        };
        doors = [false,false,false];
        mask = false;
        ingameTimer = 0;
        power = 100;
        oxygen = 100;
        ingameTimer = 0;
        activeCharacters = [];
        shakeIntensity = 0;
        for (let i = 0; i<characters.length; i++) {
            if (characters[i].element != null)
                characters[i].element.style.display = "none";
            if (characters[i].difficulty != 0) {
                activeCharacters.push({ ...characters[i] });
            }
        }
        for (let i = 0; i<activeCharacters.length; i++) {
            let ac = activeCharacters[i];
            if (ac.name == "minireena 2") {
                ac.minireenas = [];
            }
        }
        console.log(activeCharacters, characters);
    }
    ingameTimer += dt;
    document.getElementById("officeBG").style.backgroundPosition = mouse.x / window.innerWidth * 100 + "%" + mouse.y / window.innerWidth * 100 + "%";
    document.getElementById("leftDoor").style.backgroundPosition = mouse.x / window.innerWidth * 100 + "%" + mouse.y / window.innerWidth * 100 + "%";
    document.getElementById("rightDoor").style.backgroundPosition = mouse.x / window.innerWidth * 100 + "%" + mouse.y / window.innerWidth * 100 + "%";
    document.getElementById("vent").style.backgroundPosition = mouse.x / window.innerWidth * 100 + "%" + mouse.y / window.innerWidth * 100 + "%";
    document.getElementById("camsBG").style.backgroundImage = "url(assets/cam" + (cams.cam+1) + ".png)";
    powerDrain = 0;
    for (let key in doors) {
        if (doors[key]) {
            powerDrain++;
        }
    }
    if (cams.opened) {powerDrain++};
    document.getElementById("power").textContent = Math.floor(power) + "%";
    document.getElementById("oxygen").textContent = Math.floor(oxygen) + "%";
    shakeIntensity -= dt * 3;
    if (shakeIntensity <= 0) {shakeIntensity = 0;}
    document.getElementById("ingame").style.transform = `translate(${Math.random()*shakeIntensity-shakeIntensity/2}%, ${Math.random()*shakeIntensity-shakeIntensity/2}%)`;
    for (let i = 0; i<7; i++) {
        document.getElementById("cam" + (i+1)).style.animationName = "";
    }
    for (let i = 0; i<activeCharacters.length; i++) {
        let ac = activeCharacters[i];
        if (ac.name == "baby") {
            if (ac.moveTimer === 0) {
                ac.rng = Math.random() + 0.5;
            }
            ac.moveTimer += dt * (ac.difficulty / 10+1);
            if (ac.moveTimer >= ac.moveTime) {
                if (ac.killTimer === 0) {
                    sfx.babySound.play();
                    ac.cam = Math.round(Math.random() * 2);
                    if (ac.cam == 2) {
                        ac.cam = 4;
                    }
                }
                ac.killTimer += dt * (ac.difficulty / 10+1);
                if (cams.opened) {
                    if (cams.cam == ac.cam) {
                        ac.element.style.display = "block";
                        if (shocking) {
                            ac.moveTimer = 0;
                            ac.killTimer = 0;
                            ac.element.style.display = "none";
                        }
                    } else {
                        ac.element.style.display = "none";
                    }
                }
                if (ac.killTimer >= ac.killTime) {
                    die("baby");
                }
            }
        } else if (ac.name == "funtime freddy") {
            if (!ac.firstFrame) {
                sfx.ffIntro.play();
                ac.firstFrame = true;
            }
            if (ac.moveTimer === 0) {
                ac.rng = Math.random() + 0.5;
            }
            if (ac.side == "left") {
                if (cams.cam == 2) {
                    document.getElementById("camsBG").style.backgroundImage = "url(assets/funtimeFreddy/left.png";
                }
            } else {
                if (cams.cam == 3) {
                    document.getElementById("camsBG").style.backgroundImage = "url(assets/funtimeFreddy/right.png";
                }
            }
            if (ac.attacking) {
                if (ac.killTimer === 0) {
                    if (Math.random() > 0.5) {
                        sfx.ffAttack1.pause();
                        sfx.ffAttack1.currentTime = 0;
                        sfx.ffAttack1.play();
                        ac.attack = 0;
                    } else {
                        sfx.ffAttack2.pause();
                        sfx.ffAttack2.currentTime = 0;
                        sfx.ffAttack2.play();
                        ac.attack = 1;
                    }
                }
                ac.killTimer += dt;
                if (ac.killTimer >= ac.killTime) {
                    if (ac.side == "left") {
                        if (ac.attack == 0) {
                            if (doors[0]) {
                                ac.attacking = false;
                                ac.killTime[0] = 0;
                                sfx.bonk.pause();
                                sfx.bonk.currentTime = 0;
                                sfx.bonk.play();
                            } else {
                                die("funtime freddy");
                            }
                        } else {
                            if (doors[2]) {
                                ac.attacking = false;
                                ac.killTime[0] = 0;
                                sfx.bonk.pause();
                                sfx.bonk.currentTime = 0;
                                sfx.bonk.play();
                            } else {
                                die("funtime freddy");
                            }
                        }
                    }
                    if (ac.side == "right") {
                        if (ac.attack == 0) {
                            if (doors[2]) {
                                ac.attacking = false;
                                ac.killTime[0] = 0;
                                sfx.bonk.pause();
                                sfx.bonk.currentTime = 0;
                                sfx.bonk.play();
                            } else {
                                die("funtime freddy");
                            }
                        } else {
                            if (doors[0]) {
                                ac.attacking = false;
                                ac.killTime[0] = 0;
                                sfx.bonk.pause();
                                sfx.bonk.currentTime = 0;
                                sfx.bonk.play();
                            } else {
                                die("funtime freddy");
                            }
                        }
                    }
                }
            } else {
                ac.moveTimer += dt * (ac.difficulty / 10+1);
                if (ac.moveTimer >= ac.moveTime) {
                    if (Math.random() > 0.5) {
                        if (ac.side == "right") {
                            ac.side = "left";
                            sfx.ffRTL.pause();
                            sfx.ffRTL.currentTime = 0;
                            sfx.ffRTL.play();
                        } else {
                            ac.side = "right";
                            sfx.ffLTR.pause();
                            sfx.ffLTR.currentTime = 0;
                            sfx.ffLTR.play();
                        }
                        ac.moveTimer = 0;
                    } else {
                        ac.attacking = true;
                    }
                }
            }
        } else if (ac.name == "ballora") {
            if (ac.moveTimer === 0) {
                ac.rng = Math.random() + 0.5;
            }
            ac.moveTimer += dt * (ac.difficulty / 10+1) * ac.rng;
            if (ac.moveTimer >= ac.moveTime) {
                if (ac.killTimer === 0) {
                    ac.side = Math.round(Math.random());
                    const sound = [sfx.balloraLeft, sfx.balloraRight];
                    sound[ac.side].currentTime = 0;
                    sound[ac.side].pause();
                    sound[ac.side].play();
                }
                ac.killTimer += dt * (ac.difficulty / 10+1);
                if (ac.killTimer >= ac.killTime) {
                    if (doors[ac.side*2]) {
                        ac.killTimer = 0;
                        ac.moveTimer = 0;
                        sfx.balloraLeft.currentTime = 0;
                        sfx.balloraLeft.pause();
                        sfx.balloraRight.currentTime = 0;
                        sfx.balloraRight.pause();
                        sfx.bonk.pause();
                        sfx.bonk.currentTime = 0;
                        sfx.bonk.play();
                    } else {
                        die("ballora");
                    }
                }
            }
        } else if (ac.name == "funtime foxy") {
            if (ac.moveTimer === 0) {
                ac.rng = Math.random() + 0.5;
            }
            ac.moveTimer += dt * (ac.difficulty / 10+1) * ac.rng;
            if (cams.cam == 6) {
                document.getElementById("camsBG").style.backgroundImage = "url(assets/funtimeFoxy/" + (ac.phase+1) + ".png)";
            }
            if (ac.moveTimer >= ac.moveTime) {
                ac.moveTimer = 0;
                if (ac.phase != 4) {
                    ac.phase++;
                }
            }
            if (ac.phase == 4) {
                if (doors[2]) {
                    ac.leaveTimer += dt;
                    if (ac.leaveTimer >= ac.leaveTime) {
                        ac.leaveTimer = 0;
                        ac.killTimer = 0;
                        ac.moveTimer = 0;
                        ac.phase = 0;
                        sfx.bonk.pause();
                        sfx.bonk.currentTime = 0;
                        sfx.bonk.play();
                    }
                } else {
                    ac.killTimer += dt * (ac.difficulty / 10+1);
                    if (ac.killTimer >= ac.killTime) {
                        die("funtime foxy");
                    }
                }
            }
        } else if (ac.name == "bonnet") {
            ac.moveTimer += dt * (ac.difficulty / 10+1);
            if (ac.moveTimer >= ac.moveTime) {
                ac.element.style.left = ac.x + "vw";
                ac.element.style.display = "block";
                ac.x -= dt * (ac.difficulty / 10+1) * 12;
                sfx.bonnet.play();
                if (ac.x <= 0) {
                    die("bonnet");
                }
            } else {
                ac.element.style.display = "none";
            }
        } else if (ac.name == "ennard") {
            if (ac.moveTimer == 0) {
                ac.rng = Math.random() + 0.5;
                ac.side = Math.round(Math.random()*2);
            }
            ac.moveTimer += dt * (ac.difficulty / 10+1) * ac.rng;
            const sides = ["left", "top", "right"];
            if (ac.moveTimer >= ac.moveTime) {
                if (ac.phase != 2) {
                    ac.phase++;
                    ac.moveTimer = 0.1;
                    if (ac.phase == 2) {
                        sfx.ennardSound.play();
                        shakeIntensity = 3;
                    }
                }
            }
            let side2 = ac.side;
            if (side2 === 1) {
                side2 = 4;
            }
            if (side2 === 2) {
                side2 = 1;
            }
            if (ac.phase >= 1) {
                if (cams.cam == side2) {
                    document.getElementById("camsBG").style.backgroundImage = "url(assets/ennard/" + sides[ac.side] + (ac.phase) + ".png)";
                }
            }
            if (ac.phase == 2) {
                if (doors[ac.side]) {
                    ac.leaveTimer += dt;
                    if (ac.leaveTimer >= ac.leaveTime) {
                        ac.leaveTimer = 0;
                        ac.moveTimer = 0;
                        ac.killTimer = 0;
                        ac.phase = 0;
                        sfx.bonk.pause();
                        sfx.bonk.currentTime = 0;
                        sfx.bonk.play();
                        sfx.ennardSound.pause();
                        sfx.ennardSound.currentTime = 0;
                    }
                } else {
                    ac.killTimer += dt;
                    if (ac.killTimer >= ac.killTime) {
                        die("ennard");
                    }
                }
            }
        } else if (ac.name == "bidybab") {
            if (ac.moveTimer == 0.1) {
                ac.rng = Math.random() + 0.5;
            }
            let ennardVent = false;
            for (let a = 0; a<activeCharacters.length; a++) {
                let ac2 = activeCharacters[a];
                if (ac2.name == "ennard") {
                    if (ac2.side == 1) {
                        ennardVent = true;
                    }
                }
            }
            if (!doors[1] && !ennardVent) {
                ac.moveTimer += dt * (ac.difficulty / 10+1);
            }
            if (ac.moveTimer >= ac.moveTime) {
                ac.phase++;
                ac.moveTimer = 0.1;
                if (ac.phase == 1) {sfx.bidybab1.pause(); sfx.bidybab1.currentTime = 0; sfx.bidybab1.play();}
                if (ac.phase == 2) {sfx.bidybab2.pause(); sfx.bidybab2.currentTime = 0; sfx.bidybab2.play();}
                if (ac.phase == 3) {sfx.bidybabBang.pause(); sfx.bidybabBang.currentTime = 0; sfx.bidybabBang.play(); shakeIntensity = 3;}
                if (ac.phase == 4) {die("bidybab")}
            }
            if (!ennardVent) {
                if (ac.phase != 0 && cams.cam == 4) {
                    if (ac.phase >= 4) {
                        document.getElementById("camsBG").style.backgroundImage = "url(assets/bidybab/3.png)";
                    } else {
                        document.getElementById("camsBG").style.backgroundImage = "url(assets/bidybab/" + ac.phase + ".png)";
                    }
                }
            }

            if (cams.cam == 4 && shocking) {
                ac.phase--;
                if (ac.phase == -1) {
                    ac.phase = 0;
                }
            }
        } else if (ac.name == "electrobab") {
            if (ac.moveTimer === 0) {
                ac.side = Math.round(Math.random()+2);
            }
            ac.moveTimer += dt * (ac.difficulty / 10+1);
            if (ac.moveTimer >= ac.moveTime) {
                powerDrain += 0.5;
                document.getElementById("cam" + (ac.side+1)).style.animationName = "camAnim";
                if (cams.opened && cams.cam == ac.side) {
                    document.getElementById("camsBG").style.backgroundImage = "url(assets/electrobab/" + ac.side + ".png)";
                    if (shocking) {
                        ac.moveTimer = 0;
                    }
                }
            }
        } else if (ac.name == "yenndo") {
            if (cams.opened) {
                ac.camsOpened = true;
                if (ac.active) {
                    die("yenndo");
                }
            } else {
                if (ac.camsOpened) {
                    if (Math.random() < ac.difficulty / 20) {
                        ac.active = true;
                        ac.side = Math.round(Math.random()*2);
                    }
                }
                ac.camsOpened = false;
            }
            if (ac.active) {
                const bgRect = document.getElementById("officeBG");
                ac.element.style.left = -(parseFloat(bgRect.style.backgroundPositionX) - 75 * ac.side-75) / 2 * window.innerHeight / 726 + "%";
                ac.element.style.top = -(parseFloat(bgRect.style.backgroundPositionY)) / 4 + 20 + "%";
                ac.element.style.display = "block";
                if (doors[ac.side]) {
                    ac.active = false;
                }
            } else {
                ac.element.style.display = "none";
            }
        } else if (ac.name == "lolbit") {
            if (ac.moveTimer === 0) {
                ac.sequence = Math.round(Math.random() * 7+1);
                ac.rng = Math.random() +0.5;
            }
            ac.moveTimer += dt * (ac.difficulty / 10 +1) * ac.rng;
            if (ac.moveTimer >= ac.moveTime) {
                ac.element.style.display = "block";
                ac.textElement.textContent = ac.sequence;
                if (keys["0"]) {power--;}
                if (keys["1"]) {power--;}
                if (keys["2"]) {power--;}
                if (keys["3"]) {power--;}
                if (keys["4"]) {power--;}
                if (keys["5"]) {power--;}
                if (keys["6"]) {power--;}
                if (keys["7"]) {power--;}
                if (keys["8"]) {power--;}
                if (keys[String(ac.sequence)]) {
                    ac.index++;
                    power++;
                    ac.sequence = Math.round(Math.random() * 7+1);
                    if (ac.index >= 3) {
                        ac.moveTimer = 0;
                        ac.index = 0;
                        ac.killTimer = 0;
                    }
                }
                sfx.lolbit.play();
                ac.killTimer += dt * ac.killTimer+dt/8; // pp /2
                powerDrain += ac.killTimer;
            } else {
                ac.element.style.display = "none";
            }
        } else if (ac.name == "minireena 1") {
            if (cams.opened) {
                ac.camsOpened = true;
                if (ac.active) {
                    die("minireena");
                }
            } else {
                if (ac.camsOpened) {
                    if (Math.random() < 0.2) {
                        ac.active = true;
                    }
                }
                ac.camsOpened = false;
            }
            if (ac.active) {
                ac.element.style.display = "block";
                if (mask) {
                    ac.leaveTimer += dt;
                    if (ac.leaveTimer >= ac.leaveTime) {
                        ac.leaveTimer = 0;
                        ac.active = false;
                        ac.camsOpened = false;
                    }
                }
            } else {
                ac.element.style.display = "none";
            }
        } else if (ac.name == "minireena 2") {
            if (ac.moveTimer === 0) {
                ac.rng = Math.random() + 0.5;
            }
            ac.moveTimer += dt * (ac.difficulty / 10 +1) * ac.rng;
            if (ac.moveTimer >= ac.moveTime) {
                ac.moveTimer = 0;
                ac.minireenas.push([Math.round(Math.random()*6),0]);
            }
            ac.element.style.display = "none";
            for (let a = 0; a<ac.minireenas.length; a++) {
                ac.minireenas[a][1] += dt * ac.minireenas[a][1]+dt/40;
                oxygen -= ac.minireenas[a][1];
                document.getElementById("cam" + (ac.minireenas[a][0]+1)).style.animationName = "camAnim";
                if (cams.cam == ac.minireenas[a][0]) {
                    ac.element.style.display = "block";
                    if (shocking) {
                        ac.minireenas.splice(a, 1);
                    }
                }
            }
        }
    }
    oxygen += dt * 10;
    if (oxygen >= 100) {
        oxygen = 100;
    }
    if (oxygen <= 0) {
        die("oxygen");
    }
    camStatic -= dt * 4;
    shockTransition -= dt * 3;
    document.getElementById("shock").style.opacity = shockTransition;
    if (camStatic < 0.2) {camStatic = 0.2};
    document.getElementById("camStatic").style.opacity = camStatic;
    for (let key in keys) {
        keys[key] = false;
    }
    shocking = false;
    power -= powerDrain * dt / 2; // pp /1;
}
function menu(dt, time) {
    if (!firstFrame[0]) {
        resetFF();
        firstFrame[0] = true;
        document.getElementById("menu").style.display = "block";
        document.getElementById("ingame").style.display = "none";
        document.getElementById("pirate").style.display = "none";
        document.getElementById("deathScreen").style.display = "none";
        saveFile.pirate = true;
    }
    document.getElementById("menuBG").style.backgroundPositionX = -time / 100 + "vw";
}
function die(killer) {
    scene = "dead";
    resetFF();
    for (let key in sfx) {
        sfx[key].pause();
        sfx[key].currentTime = 0;
    }
    document.getElementById("killerText").textContent = "yuo deid to " + killer;
    document.getElementById("ingame").style.display = "none";
    document.getElementById("deathScreen").style.display = "block";
}
document.getElementById("antiPirate").addEventListener("change", (e) => {
    if (document.getElementById("antiPirate").files.length === 1) {
        if (document.getElementById("antiPirate").files[0].name == "SisterLocation.exe") {
            scene = "menu";
            pirate = true;
            save();
        }
    }
});
let pirate = false;
let saveFile = {
    pirate: false,
}
function save() {
    saveFile = {
        pirate: pirate,
    }
    localStorage.setItem("dataSL", JSON.stringify(saveFile));
}
function load() {
    let data = localStorage.getItem("dataSL");
    let dataParsed = JSON.parse(data);
    console.log(dataParsed)
    if (dataParsed == null) return;
    if (dataParsed.pirate !== undefined) pirate = dataParsed.pirate;
}
load();
function update(time) {
    const dt = (time - lastTime) / 1000;
    lastTime = time;
    if (scene == "ingame") {
        ingame(dt, time)
    } else if (scene == "menu") {
        menu(dt, time);
    } else if (scene == "pirate") {
        if (pirate) {
            scene = "menu";
        }
    }
    requestAnimationFrame(update);
}
requestAnimationFrame(update);