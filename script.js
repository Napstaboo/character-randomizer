const eyesR = [
"eyeR/campbell.png",
"eyeR/eyeR.png",
"eyeR/3.png",
"eyeR/ed-eye-1.png",
"eyeR/ed-eye-2.png",
"eyeR/ed-eye-3.png",
"eyeR/ed-eye-4.png",
"eyeR/ed-eye-5.png",
"eyeR/lefteye_nolid.png",
];

const eyesL = [
"eyeL/eyeL.png",
"eyeL/2.png",
"eyeL/ed-eye-1.png",
"eyeL/ed-eye-2.png",
"eyeL/ed-eye-3.png",
"eyeL/ed-eye-4.png",
"eyeL/ed-eye-5.png",
"eyeL/righteye_nolid.png",
];

const earsR = [
"earR/earR.png",
"earR/rightear_real.png",
];

const earsL = [
"earL/earL.png",
"earL/leftear_real.png",
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
"mouth/Screenshot 2025-04-26 185253.png",
"mouth/ed-mouth-2.png",
"mouth/ed-mouth-3.png",
"mouth/ed-mouth-4.png",
"mouth/ed-mouth-5.png",
"mouth/ed-mouth-6.png",
"mouth/ed-mouth-7.png"
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

const randomFace = randomChoice(faces);
const randomEarR = randomChoice(earsR);
const randomEarL = randomChoice(earsL);
const randomEyeL = randomChoice(eyesL);
const randomEyeR = randomChoice(eyesR);
const randomNose = randomChoice(noses);
const randomMouth = randomChoice(mouths);
const randomHair = randomChoice(hairs);

const pronoun1 = pronouns[Math.floor(Math.random() * pronouns.length)];
const pronoun2 = pronouns[Math.floor(Math.random() * pronouns.length)];
const gender = genders[Math.floor(Math.random() * genders.length)];


function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  function generateSyllable() {
    const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "z", "ng"];
    const vowels = ["a", "e", "i", "o", "u", "y", "ae", "io", "ou"];
    return randomChoice(consonants) + randomChoice(vowels);
  }
  
  function randomName(syllablesCount) {
    let name = "";
    for (let i = 0; i < syllablesCount; i++) {
      name += generateSyllable();
    }
    return name.charAt(0).toUpperCase() + name.slice(1); // Capitalize
  }
  
  window.onload = function() {
    const firstName = randomName(2, 3); // 2-3 syllables
    const lastName = randomName(2, 4); // 2-4 syllables
    const fullName = firstName + " " + lastName;
    document.getElementById('profile-name').textContent = fullName;

    document.getElementById("face").src=randomFace;
    document.getElementById("earR").src=randomEarR;
    document.getElementById("earL").src=randomEarL;
    document.getElementById("eyeL").src=randomEyeL;
    document.getElementById("eyeR").src=randomEyeR;
    document.getElementById("nose").src=randomNose;
    document.getElementById("mouth").src=randomMouth;
    document.getElementById("hair").src = randomHair;

    document.getElementById("gender").innerHTML = "GENDER: " + gender;
    document.getElementById("pron").innerHTML = "PRONOUNS: " + pronoun1 + "/" + pronoun2;

    document.getElementById("face").style.transform = "translate(0px, 0px)";
    document.getElementById("earR").style.transform = "translate(-70px, 0px)";
    document.getElementById("earL").style.transform = "translate(70px, 0px)";
    document.getElementById("mouth").style.transform = "translate(0px, 70px)";
    document.getElementById("eyeR").style.transform = "translate(-50px, 0px)";
    document.getElementById("eyeL").style.transform = "translate(10px, 0px)";
    document.getElementById("nose").style.transform = "translate(0px, 10px)";
    document.getElementById("hair").style.transform = "translate(0px, -30px)";
    document.getElementById("hair").style.transform += "scale(1.2, 1.2)";

  }




