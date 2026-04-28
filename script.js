let scene = "loading";
let characters = [
    {
        name: "baby",
        moveTimer: 0,
        moveTime: 30,
        killTimer: 0,
        killTime: 15,
        rng: 0.5,
        cams: [],
        menuImg: "assets/characterSelect/baby.png",
        difficulty: 0,
        element: document.getElementById("baby"),
        description: "she will say a voiceline and then find her in cams 1,2,5 and shock it",
        hardDescription: "she appears faster",
        vHardDescription: "theres 2 of them gg",
        uHardDescription: "she appears faster",
        perfectDescription: "theres 3 of them and they appear in cams 1-5",
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
        moveTime: 30,
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
        moveTime: 12,
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
        moveTime: 25,
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
        moveTime: 25,
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
        moveTime: 15,
        killTimer: 0,
        killTime: 3,
        leaveTimer: 0,
        leaveTime: 0.7,
        phase: 0,
        menuImg: "assets/characterSelect/bidybab.png",
        difficulty: 0,
        element: null,
        description: "appears in the top vent shock him to make him go back before he kills you. If ennard is in the vent bidybab doesnt move",
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
        moveTime: 50,
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
        name: "minireena 1",
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
        name: "minireena 2",
        rng: 0.5,
        moveTimer: 0,
        moveTime: 15,
        killTimer: 0,
        killTime: 5,
        leaveTimer: 0,
        leaveTime: 0.25,
        side: 0,
        camsOpened: false,
        active: false,
        menuImg: "assets/characterSelect/minireena2.png",
        difficulty: 0,
        element: document.getElementById("minireena"),
        description: "he has a 20% chance to appear when you close cams put the mask on"
    },
    {
        name: "NotThatBruh",
        rng: 0.5,
        moveTimer: 0,
        moveTime: 60,
        killTimer: 0,
        killTime: 1,
        leaveTimer: 0,
        leaveTime: 0.1,
        menuImg: "assets/characterSelect/notThatBruh.png",
        difficulty: 0,
        element: null,
        description: "he will make a voiceline before he makes loud banging noises close the top vent",
    },
    {
        name: "glungus",
        x: 0,
        y: 0,
        menuImg: "assets/characterSelect/glungus.png",
        difficulty: 0,
        element: document.getElementById("glungus"),
        description: "glungus follows your mouse.",
    },
    {
        name: "triple T",
        moveTimer: 0,
        moveTime: 45,
        killTimer: 0,
        killTime: 5,
        menuImg: "assets/characterSelect/tripleT.png",
        difficulty: 0,
        element: null,
        description: "in CAM06 theres a audio lure button. once you hear tung tung tung sahur you need to press the audio lure button or else....",
    },
    {
        name: "plushtrap",
        moveTimer: 0,
        moveTime: 35,
        killTimer: 0,
        killTime: 10,
        leaveTimer: 0,
        leaveTime: 1.5,
        menuImg: "assets/characterSelect/plushTrap.png",
        difficulty: 0,
        element: document.getElementById("plushtrap"),
        description: "appears in CAM06 and you just gotta look at him",
    },
    {
        name: "grillrat.exe",
        moveTimer: 0,
        moveTime: 60,
        killTimer: 0,
        killTime: 15,
        cam: 0,
        menuImg: "assets/characterSelect/damon.png",
        difficulty: 0,
        element: null,
        description: "a sound cue will play and you have to search every cam to find grillrat.exe",
    },
    {
        name: "GoofyGoober",
        killTimer: 0,
        killTime: 10,
        menuImg: "assets/characterSelect/goofyGoober.png",
        difficulty: 0,
        element: document.getElementById("goofyGoober"),
        description: "when you open cams he will slowly fade in. close cams to reset his killTimer",
    },
    {
        name: "4_YT",
        menuImg: "assets/characterSelect/4_YT.png",
        difficulty: 0,
        element: null,
        description: "Night multiplier goes up",
    },
    {
        name: "bonnie",
        moveTimer: 0,
        moveTime: 43,
        killTimer: 0,
        killTime: 5,
        leaveTimer: 0,
        leaveTime: 1,
        menuImg: "assets/characterSelect/bonnie.png",
        difficulty: 0,
        element: document.getElementById("bonnie"),
        description: "Appears in the office just put the mask on. he will make a buzzing sound",
    },
    {
        name: "golden freddy",
        moveTimer: 0,
        moveTime: 15,
        killTimer: 0,
        killTime: 1.2,
        leaveTimer: 0,
        leaveTime: 0.25,
        camsOpened: false,
        active: false,
        menuImg: "assets/characterSelect/goldenFreddy.png",
        difficulty: 0,
        element: document.getElementById("goldenFreddy"),
        description: "can appear when you close cams and you need to put the mask on or open cams",
    },
    {
        name: "irl candy",
        moveTimer: 0,
        moveTime: 25,
        killTimer: 0,
        killTime: 10,
        leaveTimer: 0,
        leaveTime: 1,
        menuImg: "assets/characterSelect/irlCandy.png",
        difficulty: 0,
        door: 0,
        element: document.getElementById("irlCandy"),
        description: "he appears on the doors close it to avoid him",
    },
    {
        name: "pandimai",
        moveTimer: 0,
        moveTime: 43,
        killTimer: 0,
        killTime: 10,
        menuImg: "assets/characterSelect/pandimai.png",
        difficulty: 0,
        cam: 0,
        element: document.getElementById("pandimai"),
        bambooElement: document.getElementById("bamboo"),
        description: "once he appears in the office you have to find bamboo in the cams",
    },
    {
        name: "natrwqfsfasxc",
        timer: 0,
        killTimer: 0,
        killTime: 25,
        menuImg: "assets/characterSelect/natrwqfsfasxc.png",
        difficulty: 0,
        element: document.getElementById("natrwqfsfasxc"),
        description: "he is in the office and his killTimer is increasing and you have to click him to reset his killTimer",
    },
];
let activeCharacters = [];
const everyImage = [
    "assets/bidybab/1.png",
    "assets/bidybab/2.png",
    "assets/bidybab/3.png",
    "assets/electrobab/2.png",
    "assets/electrobab/3.png",
    "assets/ennard/left1.png",
    "assets/ennard/left2.png",
    "assets/ennard/right1.png",
    "assets/ennard/right2.png",
    "assets/ennard/top1.png",
    "assets/ennard/top2.png",
    "assets/funtimeFoxy/1.png",
    "assets/funtimeFoxy/2.png",
    "assets/funtimeFoxy/3.png",
    "assets/funtimeFoxy/4.png",
    "assets/funtimeFoxy/5.png",
    "assets/funtimeFreddy/left.png",
    "assets/funtimeFreddy/right.png",
    "assets/ingameCharacters/baby.png",
    "assets/ingameCharacters/bamboo.png",
    "assets/ingameCharacters/bonnet.gif",
    "assets/ingameCharacters/bonnie.png",
    "assets/ingameCharacters/goldenFreddy.gif",
    "assets/ingameCharacters/minireena.png",
    "assets/ingameCharacters/minireena2.png",
    "assets/ingameCharacters/pandimai.gif",
    "assets/ingameCharacters/plushtrap.png",
    "assets/ingameCharacters/yenndo.png",
    "assets/ingameCharacters/lolbit.png",
    "assets/office/0.png",
    "assets/office/1.png",
    "assets/office/2.png",
    "assets/office/3.png",
    "assets/office/4.png",
    "assets/office/5.png",
    "assets/cam1.png",
    "assets/cam2.png",
    "assets/cam3.png",
    "assets/cam4.png",
    "assets/cam5.png",
    "assets/cam6.png",
    "assets/cam7.png",
    "assets/leftDoor.png",
    "assets/mask.png",
    "assets/powerOut.png",
    "assets/rightDoor.png",
    "assets/static.gif",
    "assets/vent.png",
    "assets/warning.png",
];
const everyLoadedImage = [];
let loadedCount = 0;
for (let i = 0; i<everyImage.length; i++) {
    const img = new Image();
    img.src = everyImage[i];
    img.onload = () => {
        loadedCount++;
    };
    everyLoadedImage.push(img);
}
const sounds = {
    babySound: "assets/soundEffects/babySound.mp3",
    ffIntro: "assets/soundEffects/funtimeFreddyIntro.mp3",
    ffLTR: "assets/soundEffects/funtimeFreddyLTR.mp3",
    ffRTL: "assets/soundEffects/funtimeFreddyRTL.mp3",
    ffAttack1: "assets/soundEffects/funtimeFreddyAttack1.mp3",
    ffAttack2: "assets/soundEffects/funtimeFreddyAttack2.mp3",
    bonk: "assets/soundEffects/bonk.mp3",
    shock: "assets/soundEffects/shock.mp3",
    balloraLeft: "assets/soundEffects/balloraLeft.mp3",
    balloraRight: "assets/soundEffects/balloraRight.mp3",
    ennardSound: "assets/soundEffects/ennard.mp3",
    bidybab1: "assets/soundEffects/bidybab1.ogg",
    bidybab2: "assets/soundEffects/bidybab2.ogg",
    bidybabBang: "assets/soundEffects/bidybabBang.mp3",
    bonnet: "assets/soundEffects/bonnet.ogg",
    lolbit: "assets/soundEffects/LOL.ogg",
    mask: "assets/soundEffects/mask.mp3",
    doorClose: "assets/soundEffects/doorClose.mp3",
    ntbVoiceLine: "assets/soundEffects/notThatBruhVoiceLine.mp3",
    ntb: "assets/soundEffects/notThatBruh.mp3",
    ambience: "assets/soundEffects/ambience.mp3",
    win: "assets/soundEffects/win.mp3",
    tripleTTheme: "assets/soundEffects/tripleTTheme.mp3",
    damonSound: "assets/soundEffects/damonSound.mp3",
    menuTheme: "assets/soundEffects/menuTheme.mp3",
    cognitionTheme: "assets/soundEffects/cognitionTheme.mp3",
    pbcTheme: "assets/soundEffects/pbcTheme.mp3",
    buzzSound: "assets/soundEffects/buzzSound.mp3",
    camOpen: "assets/soundEffects/camOpen.wav",
    camClose: "assets/soundEffects/camClose.mp3",
    camChange: "assets/soundEffects/camChange.mp3",
    powerOut: "assets/soundEffects/powerOut.wav",
    powerOutAmbience: "assets/soundEffects/powerOutAmbience.wav",
    buttonPress: "assets/soundEffects/buttonPress.wav",
}
let sfx = {};
let sfxLoadedCount = 0;
for (let key in sounds) {
    sfx[key] = new Audio(sounds[key]);
    sfx[key].preservesPitch = false;
}
const maxModes = [
    ["Custom Night", [
         0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0
    ]],
    ["Stereo Madness", [
         1, 1, 1, 1, 1, 1,
         1, 1, 1, 1, 1, 1,
         1, 1, 1, 1, 1, 1,
         1, 1, 1, 1, 1, 1
    ]],
    ["Checkerboard", [
        20, 0,20, 0,20, 0,
         0,20, 0,20, 0,20,
        20, 0,20, 0,20, 0,
         0,20, 0,20, 0,20,
    ]],
    ["Checkerboard 2", [
         0,20, 0,20, 0,20,
        20, 0,20, 0,20, 0,
         0,20, 0,20, 0,20,
        20, 0,20, 0,20, 0,
    ]],
    ["Almost Super Golden Freddy", [
        20,20,20,20,20,20,
        20,20,20,20,20,20,
         0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0
    ]],
    ["Almost idk what mode", [
         0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0,
        20,20,20,20,20,20,
        20,20,20,20,20,20,
    ]],
    ["Grind Time 2.0", [
        10,10,10,10,10,10,
        10,10,10,10,10,10,
        10,10,10,10,10,10,
        10,10,10,10,10,10
    ]],
    ["Unfuntime Gala", [
        20,20,20,20,20,20,
        20,20,20,20,20,20,
        20,20,20,20,20,20,
        20,20,20,20,20,20
    ]],
];
let difficultyModeNames = [
    "Unfuntime Gala",
    "Hardtime Gala",
    "Arbys Meat Mountain",
    "COGNITION",
    "PERFECT BEEMACOPHONY",
]
let maxModesIndex = 0;
let multiplier = 1;
let nightMult = 1;
function difficultyModeName() {
    if (maxModesIndex === maxModes.length-1) {
        if (ingameDifficulty == "normal mode") {
            document.getElementById("modeName").textContent = difficultyModeNames[0];
        }
        if (ingameDifficulty == "hard mode") {
            document.getElementById("modeName").textContent = difficultyModeNames[1];
        }
        if (ingameDifficulty == "very hard mode") {
            document.getElementById("modeName").textContent = difficultyModeNames[2];
        }
        if (ingameDifficulty == "ultra hard mode") {
            document.getElementById("modeName").textContent = difficultyModeNames[3];
        }
        if (ingameDifficulty == "perfect mode") {
            document.getElementById("modeName").textContent = difficultyModeNames[4];
        }
    }
}
document.getElementById("menuMode").addEventListener("click", (e) => {
    if (e.target.id == "leftMode") {
        maxModesIndex--;
        if (maxModesIndex === -1) {
            maxModesIndex = maxModes.length-1;
        }
        for (let i = 0; i<characters.length; i++) {
            characters[i].difficulty = maxModes[maxModesIndex][1][i];
            document.getElementById("cd_" + i).textContent = characters[i].difficulty;
            document.getElementById("modeName").textContent = maxModes[maxModesIndex][0];
        }
        difficultyModeName();
    }
    if (e.target.id == "rightMode") {
        maxModesIndex++;
        if (maxModesIndex === maxModes.length) {
            maxModesIndex = 0;
        }
        for (let i = 0; i<characters.length; i++) {
            characters[i].difficulty = maxModes[maxModesIndex][1][i];
            document.getElementById("cd_" + i).textContent = characters[i].difficulty;
            document.getElementById("modeName").textContent = maxModes[maxModesIndex][0];
        }
        difficultyModeName();
    }
});
const difficulties = [
    "normal mode",
    "hard mode",
    "very hard mode",
    "ultra hard mode",
    "perfect mode",
];
const difficultyNames = [
    "normalMode",
    "hardMode",
    "VHardMode",
    "UHardMode",
    "perfectMode",
];
let ingameDifficulty = "normal mode";
document.getElementById("difficulties").addEventListener("click", (e) => {
    if (e.target.id == "difficulties") return;
    for (let i = 0; i<difficultyNames.length; i++) {
        document.getElementById(difficultyNames[i]).style.color = "white";
        if (difficultyNames[i] == e.target.id) {
            ingameDifficulty = difficulties[i];
        }
    }
    document.getElementById(e.target.id).style.color = "lime";
    document.getElementById("menu").style.filter = "";
    document.getElementById("ingame").style.filter = "";
    if (ingameDifficulty == difficulties[2]) {
        document.getElementById("menu").style.filter = "url(#VHMFilter)";
        document.getElementById("ingame").style.filter = "url(#VHMFilter)";
    }
    if (ingameDifficulty == difficulties[3]) {
        document.getElementById("menu").style.filter = "url(#UHMFilter)";
        document.getElementById("ingame").style.filter = "url(#UHMFilter)";
    }
    if (ingameDifficulty == difficulties[4]) {
        document.getElementById("menu").style.filter = "grayscale(1) contrast(1.5)";
        document.getElementById("ingame").style.filter = "grayscale(1) contrast(1)";
    }
    difficultyModeName();
}); 
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
    charDiff.style = "position: absolute; right: 0; bottom: 0; font-size: 6vh; color: white; text-shadow: 0 0 1vh black; font-family: pixel";
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
function checkMaxMode() {
    document.getElementById("modeName").textContent = "Custom Night";
    for (let i = 0; i<maxModes.length; i++) {
        let charactersCheckMatching = 0;
        for (let a = 0; a<characters.length; a++) {
            if (maxModes[i][1][a] == characters[a].difficulty) {
                charactersCheckMatching++;
            }
        }
        if (charactersCheckMatching == characters.length-1) {
            maxModesIndex = i;
            document.getElementById("modeName").textContent = maxModes[i][0];
        }
    }
}
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
        checkMaxMode();
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
        checkMaxMode();
        characters[char].difficulty = cd;
        document.getElementById("cd_" + char).textContent = cd;
    }
});
document.getElementById("characters").addEventListener("mousemove", (e) => {
    if (e.target.id == "characters") {document.getElementById("characterDescription").style.display = "none"; return;};
    document.getElementById("characterDescription").style.display = "block";
    document.getElementById("charName").textContent = characters[e.target.id.match(/(\d+)/)[0]].name;
    document.getElementById("charDescription").textContent = "";
    document.getElementById("charHardDescription").textContent = "";
    document.getElementById("charVHardDescription").textContent = "";
    document.getElementById("charUHardDescription").textContent = "";
    document.getElementById("charPerfectDescription").textContent = "";
    if (ingameDifficulty == "normal mode") {
        document.getElementById("charDescription").textContent = characters[e.target.id.match(/(\d+)/)[0]].description;
    } else if (ingameDifficulty == "hard mode") {
        document.getElementById("charHardDescription").textContent = "MoveTimer goes faster";
    } else if (ingameDifficulty == "very hard mode") {
        document.getElementById("charVHardDescription").textContent = characters[e.target.id.match(/(\d+)/)[0]].vHardDescription;
    } else if (ingameDifficulty == "ultra hard mode") {
        document.getElementById("charUHardDescription").textContent = characters[e.target.id.match(/(\d+)/)[0]].uHardDescription;
    } else if (ingameDifficulty == "perfect mode") {
        document.getElementById("charPerfectDescription").textContent = characters[e.target.id.match(/(\d+)/)[0]].perfectDescription;
    }
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
        document.getElementById("cam" + i).style.backgroundColor = "rgb(25,25,25)";
    }
    sfx.camChange.pause();
    sfx.camChange.currentTime = 0;
    sfx.camChange.play();
    cams.cam = Number(e.target.dataset.cam);
    document.getElementById("cam"+(cams.cam+1)).style.backgroundColor = "orange";
    camStatic = 0.9;
    if (cams.cam == 5) {
        document.getElementById("tripleTLure").style.display = "block";
    } else {
        document.getElementById("tripleTLure").style.display = "none";
    }
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
    if (scene == "ingame") {
        if (power >= 0) {
            if (e.key.toLowerCase() == "a") {
                doors[0] = !doors[0];
                sfx.doorClose.pause();
                sfx.doorClose.currentTime = 0;
                sfx.doorClose.play();
                if (doors[0]) {
                    document.getElementById("leftDoor").style.display = "block";
                } else {
                    document.getElementById("leftDoor").style.display = "none";
                }
            }
            if (e.key.toLowerCase() == "w") {
                doors[1] = !doors[1];
                sfx.doorClose.pause();
                sfx.doorClose.currentTime = 0;
                sfx.doorClose.play();
                if (doors[1]) {
                    document.getElementById("vent").style.display = "block";
                } else {
                    document.getElementById("vent").style.display = "none";
                }
            }
            if (e.key.toLowerCase() == "d") {
                doors[2] = !doors[2];
                sfx.doorClose.pause();
                sfx.doorClose.currentTime = 0;
                sfx.doorClose.play();
                if (doors[2]) {
                    document.getElementById("rightDoor").style.display = "block";
                } else {
                    document.getElementById("rightDoor").style.display = "none";
                }
            }
            if (e.key.toLowerCase() == "s" && !mask) {
                cams.opened = !cams.opened;
                camStatic = 1;
                if (cams.opened) {
                    document.getElementById("cams").style.display = "block";
                    sfx.camOpen.pause();
                    sfx.camOpen.currentTime = 0;
                    sfx.camOpen.play();
                } else {
                    document.getElementById("cams").style.display = "none";
                    sfx.camClose.pause();
                    sfx.camClose.currentTime = 0;
                    sfx.camClose.play();
                    sfx.camOpen.pause();
                    sfx.camOpen.currentTime = 0;
                }
            }
            if (e.key.toLowerCase() == "e" && cams.opened) {
                shocking = true;
                shockTransition = 0.6;
                sfx.shock.pause();
                sfx.shock.currentTime = 0;;
                sfx.shock.play();
            }
        }
        if (e.key.toLowerCase() == " ") {
            if (!cams.opened) {
                mask = !mask;
                sfx.mask.pause();
                sfx.mask.currentTime = 0;
                sfx.mask.play();
            }
            if (mask) {
                document.getElementById("mask").style.display = "block";
            } else {
                document.getElementById("mask").style.display = "none";
            }
        }
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
            activeCharacters[i].moveTimer = 0;
            activeCharacters[i].x = 110;
            sfx.bonnet.pause();
            sfx.bonnet.currentTime = 0;
            sfx.buttonPress.pause();
            sfx.buttonPress.currentTime = 0;
            sfx.buttonPress.play();
        }
    }
});
document.getElementById("tripleTLure").addEventListener("mousedown", (e) => {
    for (let i = 0; i<activeCharacters.length; i++) {
        if (activeCharacters[i].name == "triple T") {
            activeCharacters[i].moveTimer = 0;
            activeCharacters[i].killTimer = 0;
            sfx.tripleTTheme.pause();
            sfx.tripleTTheme.currentTime = 0;
        }
    }
});
document.getElementById("bamboo").addEventListener("mousedown", (e) => {
    for (let i = 0; i<activeCharacters.length; i++) {
        if (activeCharacters[i].name == "pandimai") {
            activeCharacters[i].moveTimer = 0;
            activeCharacters[i].killTimer = 0;
            document.getElementById("bamboo").style.display = "none";
        }
    }
});
document.getElementById("natrwqfsfasxc").addEventListener("mousedown", (e) => {
    for (let i = 0; i<activeCharacters.length; i++) {
        if (activeCharacters[i].name == "natrwqfsfasxc") {
            activeCharacters[i].killTimer = 0;
            sfx.buttonPress.pause();
            sfx.buttonPress.currentTime = 0;
            sfx.buttonPress.play();
        }
    }
});
let winOpacity = 0;
let officeFrame = 0;
let officeFrameTime = 0;
let powerOutFrame = false;
function ingame(dt, time) {
    if (!firstFrame[1]) {
        resetFF();
        firstFrame[1] = true;
        powerOutFrame = false;
        nightMult = 1;
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
        winOpacity = 0;
        for (let i = 0; i<characters.length; i++) {
            if (characters[i].element != null)
                characters[i].element.style.display = "none";
            if (characters[i].difficulty != 0) {
                activeCharacters.push({ ...characters[i] });
            }
        }
        for (let i = 0; i<activeCharacters.length; i++) {
            let ac = activeCharacters[i];

            if (ac.name == "baby") {
                ac.cams = [];
            } else if (ac.name == "minireena 1") {
                ac.minireenas = [];
            }
        }
        for (let key in sfx) {
            sfx[key].pause();
            sfx[key].currentTime = 0;
        }
    }
    ingameTimer += dt;
    let seconds = ingameTimer % 60;
    document.getElementById("ingameTimer").textContent = textDisplay[Math.floor(ingameTimer/60)];
    document.getElementById("ingameTimer2").textContent = Math.floor(ingameTimer/60) + (seconds > 10 ? ":" : ":0") + Math.floor(seconds);
    if (ingameTimer >= 360) {
        scene = "win";
    }
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
    let missShock = false;
    if (shocking) {
        missShock = true;
    }
    let charMode = 0;
    if (ingameDifficulty == "hard mode") {
        charMode = 1;
    } else if (ingameDifficulty == "very hard mode") {
        charMode = 2;
    } else if (ingameDifficulty == "ultra hard mode") {
        charMode = 3;
    } else if (ingameDifficulty == "perfect mode") {
        charMode = 4;
    }
    document.getElementById("powerWarning").style.display = "none";
    document.getElementById("oxygenWarning").style.display = "none";
    for (let i = 0; i<activeCharacters.length; i++) {
        let ac = activeCharacters[i];
        if (ac.name == "baby") {
            if (ac.moveTimer === 0) {
                ac.rng = Math.random() + 0.5;
            }
            if (charMode >= 1) {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult * 1.5;
            } else {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult;
            }
            if (ac.moveTimer >= ac.moveTime) {
                if (ac.killTimer === 0) {
                    sfx.babySound.play();
                    for (let i = 0; i<0.5+charMode/2; i++) {
                        if (ac.charMode >= 4) {
                            ac.cams.push(Math.round(Math.random() * 4));
                        } else {
                            ac.cams.push(Math.round(Math.random() * 2));
                            if (ac.cams[ac.cams.length-1] == 2) {
                                ac.cams[ac.cams.length-1] = 4 
                            }
                        }
                    }
                }
                ac.killTimer += dt * (ac.difficulty / 18+1);
                if (ac.cams.length == 0) {
                    ac.moveTimer = 0;
                    ac.killTimer = 0;
                    ac.element.style.display = "none";
                }
                if (cams.opened) {
                    ac.element.style.display = "none";
                    for (let a = 0; a<ac.cams.length; a++) {
                        if (cams.cam == ac.cams[a]) {
                            ac.element.style.display = "block";
                            if (shocking) {
                                missShock = false;
                                ac.cams.splice(a, 1);
                            }
                        }
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
                console.log(ac.killTimer);
                ac.killTimer += dt;
                if (ac.killTimer >= ac.killTime) {
                    if (ac.side == "left") {
                        if (ac.attack == 0) {
                            if (doors[0]) {
                                ac.attacking = false;
                                ac.killTimer = 0;
                                sfx.bonk.pause();
                                sfx.bonk.currentTime = 0;
                                sfx.bonk.play();
                            } else {
                                die("funtime freddy");
                            }
                        } else {
                            if (doors[2]) {
                                ac.attacking = false;
                                ac.killTimer = 0;
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
                if (charMode >= 1) {
                    ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult * 1.5;
                } else {
                    ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult;
                }
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
            if (charMode >= 1) {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult * 1.5;
            } else {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult;
            }
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
            if (charMode >= 1) {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult * 1.5;
            } else {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult;
            }
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
                    ac.killTimer += dt;
                    if (ac.killTimer >= ac.killTime) {
                        die("funtime foxy");
                    }
                }
            }
        } else if (ac.name == "bonnet") {
            if (charMode >= 1) {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult * 1.5;
            } else {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult;
            }
            if (ac.moveTimer >= ac.moveTime) {
                ac.element.style.left = ac.x + "vw";
                ac.element.style.display = "block";
                ac.x -= dt * (ac.difficulty / 18+1) * 12;
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
            if (charMode >= 1) {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult * 1.5;
            } else {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult;
            }
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
                if (charMode >= 1) {
                    ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult * 1.5;
                } else {
                    ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult;
                }
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
                missShock = false;
                if (ac.phase == -1) {
                    ac.phase = 0;
                }
            }
        } else if (ac.name == "electrobab") {
            if (ac.moveTimer === 0) {
                ac.side = Math.round(Math.random()+2);
                ac.rng = Math.random() + 0.5;;
            }
            ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult * (charMode+4)/4;
            if (ac.moveTimer >= ac.moveTime) {
                powerDrain += 0.5;
                document.getElementById("powerWarning").style.display = "block";
                document.getElementById("cam" + (ac.side+1)).style.animationName = "camAnim";
                if (cams.opened && cams.cam == ac.side) {
                    document.getElementById("camsBG").style.backgroundImage = "url(assets/electrobab/" + ac.side + ".png)";
                    if (shocking) {
                        ac.moveTimer = 0;
                        missShock = false;
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
                oxygen -= 70 * dt;
                document.getElementById("oxygenWarning").style.display = "block";
            } else {
                ac.element.style.display = "none";
            }
        } else if (ac.name == "lolbit") {
            if (ac.moveTimer === 0) {
                ac.sequence = Math.round(Math.random() * 3+1); // pp 7
                ac.rng = Math.random() +0.5;
            }
            if (charMode >= 1) {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult * 1.5;
            } else {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult;
            }
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
                    ac.sequence = Math.round(Math.random() * 3+1); // pp 7
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
        } else if (ac.name == "minireena 2") {
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
        } else if (ac.name == "minireena 1") {
            if (ac.moveTimer === 0) {
                ac.rng = Math.random() + 0.5;
            }
            if (charMode >= 1) {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult * 1.5;
            } else {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult;
            }
            if (ac.moveTimer >= ac.moveTime) {
                ac.moveTimer = 0;
                ac.minireenas.push([Math.round(Math.random()*6),0]);
            }
            ac.element.style.display = "none";
            for (let a = 0; a<ac.minireenas.length; a++) {
                ac.minireenas[a][1] += (dt * ac.minireenas[a][1]+dt)/50;
                oxygen -= ac.minireenas[a][1];
                document.getElementById("oxygenWarning").style.display = "block";
                document.getElementById("cam" + (ac.minireenas[a][0]+1)).style.animationName = "camAnim";
                if (cams.cam == ac.minireenas[a][0]) {
                    ac.element.style.display = "block";
                    if (shocking) {
                        ac.minireenas.splice(a, 1);
                        missShock = false;
                    }
                }
            }
        } else if (ac.name == "NotThatBruh") {
            if (ac.moveTimer === 0) {
                ac.rng = Math.random() + 0.5;
            }
            if (charMode >= 1) {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult * 1.5;
            } else {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult;
            }
            if (ac.moveTimer >= ac.moveTime-4*(ac.difficulty / 18 +1) * nightMult * (charMode+4)/4 && ac.moveTimer <= ac.moveTime-3*(ac.difficulty / 18 +1) * nightMult * (charMode+4)/4) {
                sfx.ntbVoiceLine.play();
            }
            if (ac.moveTimer >= ac.moveTime) {
                ac.killTimer += dt;
                sfx.ntb.play();
                if (doors[1]) {
                    ac.leaveTimer += dt;
                    if (ac.leaveTimer >= ac.leaveTime) {
                        ac.leaveTimer = 0;
                        ac.killTimer = 0;
                        ac.moveTimer = 0;
                        sfx.bonk.pause();
                        sfx.bonk.currentTime = 0;
                        sfx.bonk.play();
                        sfx.ntb.currentTime = 0;
                        sfx.ntb.pause();
                    }
                } else {
                    if (ac.killTimer >= ac.killTime) {
                        die("NotThatBruh");
                    }
                }
            }
        } else if (ac.name == "glungus") {
            let percMouseX = mouse.x / window.innerWidth * 100;
            let percMouseY = mouse.y / window.innerHeight * 100;
            ac.x = ac.x * (1 - dt * (ac.difficulty/10+1)) + percMouseX * dt * (ac.difficulty/10+1);
            ac.y = ac.y * (1 - dt * (ac.difficulty/10+1)) + percMouseY * dt * (ac.difficulty/10+1);
            ac.element.style.left = ac.x + "vw";
            ac.element.style.top = ac.y + "vh";
            ac.element.style.display = "block";
        } else if (ac.name == "triple T") {
            if (ac.moveTimer === 0) {
                ac.rng = Math.random() + 0.5;
            }
            if (charMode >= 1) {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult * 1.5;
            } else {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult;
            }
            if (ac.moveTimer >= ac.moveTime) {
                sfx.tripleTTheme.play();
                ac.killTimer += dt;
                if (ac.killTimer >= ac.killTime) {
                    die("Triple T");
                }
            }
        } else if (ac.name == "plushtrap") {
            if (ac.moveTimer === 0) {
                ac.rng = Math.random() + 0.5;
            }
            if (charMode >= 1) {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult * 1.5;
            } else {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult;
            }
            ac.element.style.display = "none";
            if (ac.moveTimer >= ac.moveTime) {
                if (cams.opened && cams.cam == 5) {
                    ac.element.style.display = "block";
                    ac.leaveTimer += dt;
                    if (ac.leaveTimer >= ac.leaveTime) {
                        ac.leaveTimer = 0;
                        ac.killTimer = 0;
                        ac.moveTimer = 0;
                    }
                } else {
                    ac.killTimer += dt;
                    if (ac.killTimer >= ac.killTime) {
                        die("plushtrap")
                    }
                }
            }
        } else if (ac.name == "grillrat.exe") {
            if (ac.moveTimer === 0) {
                ac.rng = Math.random() + 0.5;
                ac.cam = Math.round(Math.random() * 6);
                ac.killTimer = 0;
            }
            if (charMode >= 1) {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult * 1.5;
            } else {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult;
            }
            if (ac.moveTimer >= ac.moveTime) {
                if (ac.killTimer === 0) {
                    sfx.damonSound.play();
                }
                ac.killTimer += dt;
                if (ac.killTimer >= ac.killTime) {
                    die("GRILLRAT.exe");
                }
                if (cams.opened && cams.cam == ac.cam) {
                    document.getElementById("camsBG").style.backgroundImage = "url(assets/characterSelect/damon.png)";
                    if (shocking) {
                        missShock = false;
                        ac.moveTimer = 0;
                        ac.killTimer = 0;
                        sfx.damonSound.pause();
                        sfx.damonSound.currentTime = 0;
                    }
                }
            }
        } else if (ac.name == "GoofyGoober") {
            if (cams.opened) {
                if (charMode >= 1) {
                    ac.killTimer += dt * (ac.difficulty / 18+1) * nightMult * 1.5;
                } else {
                    ac.killTimer += dt * (ac.difficulty / 18+1) * nightMult;
                }
                if (ac.killTimer >= ac.killTime) {
                    die("GoofyGoober");
                }
                ac.element.style.opacity = ac.killTimer / ac.killTime;
                ac.element.style.display = "block";
            } else {
                ac.killTimer = 0;
                ac.element.style.display = "none";
            }
        } else if (ac.name == "4_YT") {
            if (charMode >= 4) {
                nightMult = (360/(14400*2)*ac.difficulty*5/2)+1;
            } else {
                nightMult += (dt/(14400*2)*ac.difficulty*(charMode+2)/2);
            }
        } else if (ac.name == "bonnie") {
            if (ac.moveTimer === 0) {
                ac.rng = Math.random() + 0.5;
            }
            if (charMode >= 1) {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult * 1.5;
            } else {
                ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult;
            }
            ac.element.style.display = "none";
            if (ac.moveTimer >= ac.moveTime) {
                const bgRect = document.getElementById("officeBG");
                ac.element.style.left = -(parseFloat(bgRect.style.backgroundPositionX)-100) / 2 * window.innerHeight / 726 + "%";
                ac.element.style.top = -(parseFloat(bgRect.style.backgroundPositionY) +60) / 4 + 20 + "%";
                ac.element.style.display = "block";
                sfx.buzzSound.play();
                if (mask) {
                    ac.leaveTimer += dt;
                    if (ac.leaveTimer >= ac.leaveTime) {
                        ac.leaveTimer = 0;
                        ac.killTimer = 0;
                        ac.moveTimer = 0;
                        sfx.buzzSound.pause();
                        sfx.buzzSound.currentTime = 0;
                    }
                } else {
                    ac.killTimer += dt;
                    if (ac.killTimer >= ac.killTime) {
                        die("bonnie");
                    }
                }
            }
        } else if (ac.name == "golden freddy") {
            if (cams.opened) {
                ac.camsOpened = true;
                ac.active = false;
                ac.killTimer = 0;
            } else {
                if (ac.camsOpened) {
                    if (Math.random() < ac.difficulty / 40) {
                        ac.active = true;
                    }
                }
                ac.camsOpened = false;
            }
            if (ac.active) {
                const bgRect = document.getElementById("officeBG");
                ac.element.style.left = -(parseFloat(bgRect.style.backgroundPositionX) - 170) / 2 * window.innerHeight / 726 + "%";
                ac.element.style.top = -(parseFloat(bgRect.style.backgroundPositionY)) / 4 + 20 + "%";
                ac.element.style.display = "block";
                ac.killTimer += dt;
                if (mask) {
                    ac.active = false;
                    ac.killTimer = 0;
                }
                if (ac.killTimer >= ac.killTime) {
                    die("golden freddy");
                }
            } else {
                ac.element.style.display = "none";
            }
        } else if (ac.name == "irl candy") {
            if (ac.moveTimer == 0) {
                ac.rng = Math.random() + 0.5;
                ac.door = Math.round(Math.random())*2;
            }
            ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult * (charMode+4)/4;
            ac.element.style.display = "none";
            if (ac.moveTimer >= ac.moveTime) {
                ac.element.style.display = "block";
                const bgRect = document.getElementById("officeBG");
                ac.element.style.left = -(parseFloat(bgRect.style.backgroundPositionX) - 115*ac.door-30) / 2 * window.innerHeight / 726 + "%";
                ac.element.style.top = -(parseFloat(bgRect.style.backgroundPositionY)) / 4 + 40 + "%";
                if (doors[ac.door]) {
                    ac.leaveTimer += dt;
                    ac.element.style.display = "none";
                    if (ac.leaveTimer >= ac.leaveTime) {
                        ac.leaveTimer = 0;
                        ac.killTimer = 0;
                        ac.moveTimer = 0;
                        sfx.bonk.pause();
                        sfx.bonk.currentTime = 0;
                        sfx.bonk.play();
                    }
                } else {
                    ac.killTimer += dt;
                    if (ac.killTimer >= ac.killTime) {
                        die("irl candy");
                    }
                }
            }
        } else if (ac.name == "pandimai") {
            if (ac.moveTimer == 0) {
                ac.rng = Math.random() + 0.5;
                ac.cam = Math.round(Math.random()*6);
            }
            ac.moveTimer += dt * (ac.difficulty / 18+1) * ac.rng * nightMult * (charMode+4)/4;
            ac.element.style.display = "none";
            ac.bambooElement.style.display = "none";
            if (ac.moveTimer >= ac.moveTime) {
                ac.element.style.display = "block";
                const bgRect = document.getElementById("officeBG");
                ac.element.style.left = -(parseFloat(bgRect.style.backgroundPositionX) - 50) / 2 * window.innerHeight / 726 + "%";
                ac.element.style.top = -(parseFloat(bgRect.style.backgroundPositionY)) / 4 + 40 + "%";
                if (cams.opened && cams.cam == ac.cam) {
                    ac.bambooElement.style.display = "block";
                } else {
                    ac.bambooElement.style.display = "none";
                }
                ac.killTimer += dt;
                if (ac.killTimer >= ac.killTime) {
                    die("pandimai");
                }
            }
        } else if (ac.name == "natrwqfsfasxc") {
            ac.element.style.display = "block";
            ac.timer += dt * nightMult * (charMode+2)/2;
            ac.element.style.transform = `translate(calc(-50% + ${Math.sin(ac.timer)*500}%),calc(-50% + ${Math.sin(ac.timer) * Math.cos(ac.timer)*500}%))`;
            ac.killTimer += dt * (ac.difficulty / 18+1) * (charMode+8)/8;
            ac.element.style.filter = `brightness(${ac.killTimer / ac.killTime * 10})`;
            if (ac.killTimer >= ac.killTime) {
                die("natrwqfsfasxc");
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
    document.getElementById("nightMult").textContent = nightMult.toFixed(2) + "x";
    document.getElementById("shock").style.opacity = shockTransition;
    if (camStatic < 0.2) {camStatic = 0.2};
    document.getElementById("camStatic").style.opacity = camStatic;
    for (let key in keys) {
        keys[key] = false;
    }
    shocking = false;
    if (missShock) {
        power -= 3;
    }
    if (power <= 0) {
        if (!powerOutFrame) {
            doors[0] = false;
            doors[1] = false;
            doors[2] = false;
            cams.opened = false;
            document.getElementById("leftDoor").style.display = "none";
            document.getElementById("rightDoor").style.display = "none";
            document.getElementById("vent").style.display = "none";
            document.getElementById("cams").style.display = "none";
            document.getElementById("officeBG").style.backgroundImage = "url(assets/powerOut.png)";
            sfx.powerOut.play();
            sfx.pbcTheme.pause();
            sfx.cognitionTheme.pause();
            sfx.ambience.pause();
            sfx.pbcTheme.currentTime = 0;
            sfx.cognitionTheme.currentTime = 0;
            sfx.ambience.currentTime = 0;
        }
        document.getElementById("power").textContent = "0%";
        sfx.powerOutAmbience.play();
        powerOutFrame = true;
    } else {
        if (ingameDifficulty == "perfect mode") {
            sfx.pbcTheme.play();
        } else if (ingameDifficulty == "ultra hard mode") {
            sfx.cognitionTheme.play();
        } else {
            sfx.ambience.play();
        }
        officeFrameTime += dt;
        if (officeFrameTime >= 0.04) {
            officeFrameTime = 0;
            officeFrame++;
            if (officeFrame >= 5) {
                officeFrame = 0;
            }
            document.getElementById("officeBG").style.backgroundImage = "url(assets/office/"+officeFrame+".png)";
        }
    }
    power -= powerDrain * dt / 2;
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
        for (let key in sfx) {
            sfx[key].pause();
            sfx[key].currentTime = 0;
        }
    }
    sfx.menuTheme.play();
    document.getElementById("menuBG").style.backgroundPositionX = -time / 100 + "vw";
}
function die(killer) {
    scene = "dead";
    resetFF();
    for (let key in sfx) {
        sfx[key].pause();
        sfx[key].currentTime = 0;
    }
    document.getElementById("deathTime").textContent = document.getElementById("ingameTimer2").textContent;
    document.getElementById("killerText").textContent = "yuo deid to " + killer;
    document.getElementById("ingame").style.display = "none";
    document.getElementById("deathScreen").style.display = "block";
}
let winTime = 0;
function win(dt,time) {
    if (!firstFrame[2]) {
        resetFF();
        firstFrame[2] = true;
        winOpacity = 0;
        for (let key in sfx) {
            sfx[key].pause();
            sfx[key].currentTime = 0;
        }
        sfx.win.play();
        winTime = 0;
        document.getElementById("win").style.display = "block";
        document.getElementById("winPower").textContent = "Power: " + document.getElementById("power").textContent;
        document.getElementById("winModeName").textContent = "GG's on " + document.getElementById("modeName").textContent;
    }
    winTime += dt;
    if (winTime > 11) {
        scene = "menu";
        document.getElementById("win").style.display = "none";
    }
    winOpacity += dt/4;
    document.getElementById("win").style.opacity = winOpacity;
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
    } else if (scene == "dead") {
        for (let key in sfx) {
            sfx[key].pause();
            sfx[key].currentTime = 0;
        }
    } else if (scene == "pirate") {
        if (pirate) {
            scene = "menu";
        }
    } else if (scene == "win") {
        win(dt,time);
    } else if (scene == "loading") {
        if (loadedCount === everyImage.length) {
            scene = "menu";
        }
    }
    requestAnimationFrame(update);
}
requestAnimationFrame(update);