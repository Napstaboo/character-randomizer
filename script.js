const eyesR = [
"eyeR/campbell.png",
"eyeR/eyeR.png",
"eyeR/righteye_nolid.png
]

const eyesL = [
"eyeL/eyeL.png",
"eyeL/lefteye_nolid.png"
]

const earsR = [
"earR/earR.png",
"earR/rightear_real.png"
]

const earsL = [
"earL/earL.png",
"earL/leftear_real.png
]

const noses = [
"nose/nose.png"
]

const faces = [
"faces/face.png"
]

const mouths = [
"mouth/mouth.png"
]

const hairs = [
    "hair/hair.png"
]

const randomFace = faces[Math.floor(Math.random() * faces.length)];
const randomEarR = earsR[Math.floor(Math.random() * earsR.length)];
const randomEarL = earsL[Math.floor(Math.random() * earsL.length)];
const randomEyeL = eyesL[Math.floor(Math.random() * eyesL.length)];
const randomEyeR = eyesR[Math.floor(Math.random() * eyesR.length)];
const randomNose = noses[Math.floor(Math.random() * noses.length)];
const randomMouth = mouths[Math.floor(Math.random() * mouths.length)];
const randomHair = hairs[Math.floor(Math.random() * hairs.length)];


document.getElementById("face").src=randomFace
document.getElementById("earR").src=randomEarR
document.getElementById("earL").src=randomEarL
document.getElementById("eyeL").src=randomEyeL
document.getElementById("eyeR").src=randomEyeR
document.getElementById("nose").src=randomNose
document.getElementById("mouth").src=randomMouth
document.getElementById("hair").src = randomHair

document.getElementById("face").style.transform = "translate(0px, 0px)"
document.getElementById("earR").style.transform = "translate(-70px, 0px)"
document.getElementById("earL").style.transform = "translate(70px, 0px)"
document.getElementById("mouth").style.transform = "translate(0px, 70px)"
document.getElementById("eyeR").style.transform = "translate(-50px, 0px)"
document.getElementById("eyeL").style.transform = "translate(10px, 0px)"
document.getElementById("nose").style.transform = "translate(0px, 10px)"
document.getElementById("hair").style.transform = "translate(0px, -30px)"
document.getElementById("hair").style.transform += "scale(1.2, 1.2)"
