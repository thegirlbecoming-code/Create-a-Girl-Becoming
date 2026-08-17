/*==========================================
THE GIRL BECOMING
Version 1.0
==========================================*/

const Game = {

    currentScreen: "welcome",

    currentTab: "skin",

    data: {

        background: "",

        body: "",

        skin: 0,

        eyes: 0,

        eyebrows: 0,

        eyelashes: 0,

        nose: 0,

        mouth: 0,

        blush: 0,

        freckles: 0,

        hairFront: 0,

        hairBack: 0,

        hairColor: "#5B3A29",

        outfit: 0,

        shoes: 0,

        accessory: 0,

        name: "",

        personality: "",

        favoriteColor: "",

        career: ""

    }

};

/*==========================================
ASSETS
==========================================*/

const Assets = {

    skinColors: [

        "#FCE5D8",

        "#F7D1B4",

        "#E7B38A",

        "#C98E63",

        "#A56B47",

        "#7A4D33"

    ],

    eyeStyles: [],

    noses: [],

    mouths: [],

    hairs: [],

    outfits: [],

    accessories: [],

    backgrounds: []

};

/*==========================================
ELEMENTS
==========================================*/

const UI = {

    welcome:

        document.getElementById("welcomeScreen"),

    game:

        document.getElementById("game"),

    menu:

        document.getElementById("menu"),

    character:

        document.getElementById("character"),

    tabs:

        document.querySelectorAll("[data-tab]"),

    start:

        document.getElementById("startButton")

};

/*==========================================
START GAME
==========================================*/

UI.start.addEventListener(

    "click",

    ()=>{

        UI.welcome.classList.add("hidden");

        UI.game.classList.remove("hidden");

        Game.currentScreen="creator";

        buildMenu();

        renderCharacter();

    }

);

/*==========================================
TAB SYSTEM
==========================================*/

UI.tabs.forEach(

button=>{

button.addEventListener(

"click",

()=>{

Game.currentTab=

button.dataset.tab;

buildMenu();

}

);

}

);

/*==========================================
BUILD MENU
==========================================*/

function buildMenu(){

UI.menu.innerHTML="";

const title=document.createElement("h2");

title.textContent=

Game.currentTab;

UI.menu.appendChild(title);

switch(Game.currentTab){

case"skin":

buildSkinMenu();

break;

case"hair":

buildHairMenu();

break;

case"face":

buildFaceMenu();

break;

case"clothes":

buildClothesMenu();

break;

case"accessories":

buildAccessoryMenu();

break;

case"backgrounds":

buildBackgroundMenu();

break;

}

}

/*==========================================
RENDER
==========================================*/

function renderCharacter(){

document.getElementById(

"bodyLayer"

).style.background=

Assets.skinColors[

Game.data.skin

];

}

/*==========================================
PLACEHOLDER MENUS
==========================================*/

function buildSkinMenu(){}

function buildHairMenu(){}

function buildFaceMenu(){}

function buildClothesMenu(){}

function buildAccessoryMenu(){}

function buildBackgroundMenu(){}
/*==========================================
SKIN MENU
==========================================*/

function buildSkinMenu(){

Assets.skinColors.forEach((color,index)=>{

const card=document.createElement("div");

card.className="optionCard";

card.innerHTML=`

<div
class="optionPreview"
style="
background:${color};
border-radius:50%;
height:80px;
">
</div>

<div class="optionName">

Skin ${index+1}

</div>

`;

card.onclick=()=>{

Game.data.skin=index;

renderCharacter();

saveGame();

};

UI.menu.appendChild(card);

});

}

/*==========================================
FACE MENU
==========================================*/

function buildFaceMenu(){

["Cute","Round","Sleepy","Sparkly","Soft"].forEach((eye,index)=>{

const card=document.createElement("div");

card.className="optionCard";

card.innerHTML=`

<div class="optionPreview">

👁

</div>

<div class="optionName">

${eye}

</div>

`;

card.onclick=()=>{

Game.data.eyes=index;

renderCharacter();

saveGame();

};

UI.menu.appendChild(card);

});

}

/*==========================================
HAIR MENU
==========================================*/

function buildHairMenu(){

clearMenu();

addSection("Hair");

const grid=addGrid();

const hairs=[

"Long Waves",

"Straight",

"Braids",

"Ponytail",

"Twin Tails",

"Curly",

"Short Bob"

];

hairs.forEach((hair,index)=>{

grid.appendChild(

createOptionCard({

title:hair,

image:

`assets/hair/thumbs/${index}.png`,

selected:

Game.data.hairFront===index,

onClick:()=>{

Game.data.hairFront=index;

Game.data.hairBack=index;

renderCharacter();

saveGame();

}

})

);

});

}

UI.menu.appendChild(card);

});

}

/*==========================================
CLOTHES
==========================================*/

function buildClothesMenu(){

const outfits=[

"Coquette",

"Casual",

"School",

"Sleepwear",

"Elegant",

"Picnic"

];

outfits.forEach((outfit,index)=>{

const card=document.createElement("div");

card.className="optionCard";

card.innerHTML=`

<div class="optionPreview">

👗

</div>

<div class="optionName">

${outfit}

</div>

`;

card.onclick=()=>{

Game.data.outfit=index;

renderCharacter();

saveGame();

};

UI.menu.appendChild(card);

});

}

/*==========================================
ACCESSORIES
==========================================*/

function buildAccessoryMenu(){

const accessories=[

"None",

"Bow",

"Flower",

"Headband",

"Glasses",

"Star Clip"

];

accessories.forEach((item,index)=>{

const card=document.createElement("div");

card.className="optionCard";

card.innerHTML=`

<div class="optionPreview">

🎀

</div>

<div class="optionName">

${item}

</div>

`;

card.onclick=()=>{

Game.data.accessory=index;

renderCharacter();

saveGame();

};

UI.menu.appendChild(card);

});

}

/*==========================================
BACKGROUNDS
==========================================*/

function buildBackgroundMenu(){

const backgrounds=[

"Bedroom",

"Library",

"Garden",

"Cafe",

"Beach",

"Pink Room"

];

backgrounds.forEach((bg,index)=>{

const card=document.createElement("div");

card.className="optionCard";

card.innerHTML=`

<div class="optionPreview">

🖼️

</div>

<div class="optionName">

${bg}

</div>

`;

card.onclick=()=>{

Game.data.background=index;

renderCharacter();

saveGame();

};

UI.menu.appendChild(card);

});

}

/*==========================================
LAYER IDS
==========================================*/

const Layers = {

background:
document.getElementById("backgroundLayer"),

body:
document.getElementById("bodyLayer"),

eyes:
document.getElementById("eyesLayer"),

eyebrows:
document.getElementById("eyebrowLayer"),

eyelashes:
document.getElementById("eyelashLayer"),

nose:
document.getElementById("noseLayer"),

mouth:
document.getElementById("mouthLayer"),

blush:
document.getElementById("blushLayer"),

freckles:
document.getElementById("freckleLayer"),

hairBack:
document.getElementById("hairBackLayer"),

hairFront:
document.getElementById("hairFrontLayer"),

outfit:
document.getElementById("outfitLayer"),

shoes:
document.getElementById("shoeLayer"),

accessory:
document.getElementById("accessoryLayer"),

effect:
document.getElementById("effectLayer")

};

/*==========================================
SAVE
==========================================*/

function saveGame(){

localStorage.setItem(

"girlBecomingSave",

JSON.stringify(Game.data)

);

}

/*==========================================
LOAD
==========================================*/

function loadGame(){

const save=

localStorage.getItem(

"girlBecomingSave"

);

if(save){

Game.data=

JSON.parse(save);

}

}

/*==========================================
RESET
==========================================*/

document

.getElementById(

"resetButton"

)

.addEventListener(

"click",

()=>{

if(

confirm(

"Reset your character?"

)

){

localStorage.removeItem(

"girlBecomingSave"

);

location.reload();

}

}

);

/*==========================================
RENDER CHARACTER
==========================================*/

function renderCharacter(){

Layers.body.style.background=

Assets.skinColors[

Game.data.skin

];

/* These become PNGs later */

Layers.background.src=

`assets/backgrounds/${Game.data.background}.png`;

Layers.eyes.src=

`assets/eyes/${Game.data.eyes}.png`;

Layers.nose.src=

`assets/noses/${Game.data.nose}.png`;

Layers.mouth.src=

`assets/mouths/${Game.data.mouth}.png`;

Layers.hairBack.src=

`assets/hair/${Game.data.hairBack}_back.png`;

Layers.hairFront.src=

`assets/hair/${Game.data.hairFront}_front.png`;

Layers.outfit.src=

`assets/outfits/${Game.data.outfit}.png`;

Layers.accessory.src=

`assets/accessories/${Game.data.accessory}.png';

}

/*==========================================
STARTUP
==========================================*/

window.onload=()=>{

loadGame();

renderCharacter();

};
/*==========================================
CHARACTER RENDERER
==========================================*/

function asset(path){

    return `assets/${path}`;

}

function renderCharacter(){

    /* ---------- Background ---------- */

    Layers.background.src =
        asset(`backgrounds/${Game.data.background}.png`);

    /* ---------- Body ---------- */

    Layers.body.src =
        asset(`body/base.png`);

    Layers.body.style.filter =
        `drop-shadow(0 6px 10px rgba(0,0,0,.08))`;

    Layers.body.style.background =
        Assets.skinColors[Game.data.skin];

    /* ---------- Face ---------- */

    Layers.eyes.src =
        asset(`eyes/${Game.data.eyes}.png`);

    Layers.eyebrows.src =
        asset(`eyebrows/${Game.data.eyebrows}.png`);

    Layers.eyelashes.src =
        asset(`eyelashes/${Game.data.eyelashes}.png`);

    Layers.nose.src =
        asset(`noses/${Game.data.nose}.png`);

    Layers.mouth.src =
        asset(`mouths/${Game.data.mouth}.png`);

    Layers.blush.src =
        asset(`blush/${Game.data.blush}.png`);

    Layers.freckles.src =
        asset(`freckles/${Game.data.freckles}.png`);

    /* ---------- Hair ---------- */

    Layers.hairBack.src =
        asset(`hair/${Game.data.hairBack}_back.png`);

    Layers.hairFront.src =
        asset(`hair/${Game.data.hairFront}_front.png`);

    /* ---------- Outfit ---------- */

    Layers.outfit.src =
        asset(`outfits/${Game.data.outfit}.png`);

    /* ---------- Shoes ---------- */

    Layers.shoes.src =
        asset(`shoes/${Game.data.shoes}.png`);

    /* ---------- Accessories ---------- */

    Layers.accessory.src =
        asset(`accessories/${Game.data.accessory}.png`);

}
/*==========================================
OPTION CARD ENGINE
==========================================*/

function createOptionCard({

title,

image,

onClick,

selected=false

}){

const card=document.createElement("div");

card.className="optionCard";

if(selected){

card.classList.add("selected");

}

const preview=document.createElement("img");

preview.className="optionImage";

preview.src=image;

preview.alt=title;

preview.onerror=()=>{

preview.src="assets/ui/placeholder.png";

};

const label=document.createElement("div");

label.className="optionName";

label.textContent=title;

card.appendChild(preview);

card.appendChild(label);

card.onclick=()=>{

document

.querySelectorAll(".optionCard")

.forEach(c=>{

c.classList.remove("selected");

});

card.classList.add("selected");

onClick();

};

return card;

}

/*==========================================
MENU HELPERS
==========================================*/

function clearMenu(){

UI.menu.innerHTML="";

}

function addSection(title){

const h=document.createElement("h2");

h.textContent=title;

UI.menu.appendChild(h);

}

function addGrid(){

const grid=document.createElement("div");

grid.className="optionGrid";

UI.menu.appendChild(grid);

return grid;

}
