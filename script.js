const eyesR = [
"eyeR/campbell.png",
"eyeR/eyeR.png",
"eyeR/3.png"
];

const eyesL = [
"eyeL/eyeL.png",
"eyeL/2.png",
];

const earsR = [
"earR/earR.png",
];

const earsL = [
"earL/earL.png"
];

const noses = [
"nose/nose.png",
"nose/1.png",
];

const faces = [
"faces/face.png",
"faces/2.png",
"faces/3.png",
"faces/4.png",
"faces/5.png"
];

const mouths = [
"mouth/mouth.png",
"mouth/1.png",
"mouth/Screenshot 2025-04-26 185253.png"
]
;
const hairs = [
    "hair/hair.png",
    "hair/2.png"
];

const genders = [
    "girl",
    "boy",
    "boygirl",
    "potato",
    "entity",
    "redacted",
    "3boy + 2girl",
    "superhero"
];

const pronouns = [
    "he",
    "him",
    "they",
    "them",
    "she",
    "her",
    "it",
    "its",
    "",
    "ze",
    "hir",
    "fae",
    "faer",
];

const randomFace = faces[Math.floor(Math.random() * faces.length)];
const randomEarR = earsR[Math.floor(Math.random() * earsR.length)];
const randomEarL = earsL[Math.floor(Math.random() * earsL.length)];
const randomEyeL = eyesL[Math.floor(Math.random() * eyesL.length)];
const randomEyeR = eyesR[Math.floor(Math.random() * eyesR.length)];
const randomNose = noses[Math.floor(Math.random() * noses.length)];
const randomMouth = mouths[Math.floor(Math.random() * mouths.length)];
const randomHair = hairs[Math.floor(Math.random() * hairs.length)];

const pronoun1 = pronouns[Math.floor(Math.random() * pronouns.length)];
const pronoun2 = pronouns[Math.floor(Math.random() * pronouns.length)];
const gender = genders[Math.floor(Math.random() * genders.length)];


document.getElementById("face").src=randomFace;
document.getElementById("earR").src=randomEarR;
document.getElementById("earL").src=randomEarL;
document.getElementById("eyeL").src=randomEyeL;
document.getElementById("eyeR").src=randomEyeR;
document.getElementById("nose").src=randomNose;
document.getElementById("mouth").src=randomMouth;
document.getElementById("hair").src = randomHair;

document.getElementById("gender").innerHTML = gender;
document.getElementById("pron").innerHTML = pronoun1 + "/" + pronoun2;

document.getElementById("face").style.transform = "translate(0px, 0px)";
document.getElementById("earR").style.transform = "translate(-70px, 0px)";
document.getElementById("earL").style.transform = "translate(70px, 0px)";
document.getElementById("mouth").style.transform = "translate(0px, 70px)";
document.getElementById("eyeR").style.transform = "translate(-50px, 0px)";
document.getElementById("eyeL").style.transform = "translate(10px, 0px)";
document.getElementById("nose").style.transform = "translate(0px, 10px)";
document.getElementById("hair").style.transform = "translate(0px, -30px)";
document.getElementById("hair").style.transform += "scale(1.2, 1.2)";