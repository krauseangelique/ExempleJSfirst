console.log(window.location);
console.log(document.head.dataset);
console.log("Ceci est mon dossier example.js");

//const bonjour = document.getElementById("bonjour");

// Pick a color
let colorRed = "red";
let colorParse = "blueviolet";
let colorWhite = "white";
let firstColor = "#e66465";
let secondColor = "#9198e5";
let bgColor = `linear-gradient(${firstColor}, ${secondColor})`;
let colorCoral = "coral";



// const hello = document.querySelector(".hello");
// hello.style.color = colorBlue;

/*
hello = document.getElementsByClassName("hello");
hello.style.color = colorBlue; // script.js:11 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
const ciao = document.getElementsByTagName("h3"); // script.js:19 Uncaught TypeError: Cannot set properties of undefined (setting 'color') 
*/
// const ciao = document.querySelector("h3");
// ciao.style.color = colorGreen;
/* Pick a heading
const headingID = "bonjour";
const headingClass = ".hello";
const headingTag = "h3";
*/
/*
// je pointe le style de mon élément html et je change sa couleur
bonjour.style.color = colorRed;

const hello = document.getElementsByClassName("hello"); // attention ce sera un tableau
hello[0].style.color = colorParse;

const ciao = document.getElementsByTagName("h3"); // Attention sera un tableau
ciao[0].style.color = colorWhite;

const body = document.querySelector("body");
body.style.background = bgColor; // ou document.body.style.background = bgColor;

const mbote = document.getElementsByName("mbote");
mbote[0].style.color = colorWhite;
*/
// Prompt
/*
const yourName = prompt("Comment t'appelles tu ?", "Entre ton prénom stp");
let index = 0;
console.log(yourName);
console.log(`salut ${yourName}`);
*/

// // window.prompt();
// console.log(parseInt(window.prompt()));
// // Alert et confirm
// const heading = document.getElementsByTagName("h1");

// if(window.confirm("Si tu cliques sur ok, j'autorise l'accès.")){
//     //console.log('Tu as bien Accès');
//     heading[0].style.color = "yellow";
// } else {
//     //console.log("Cela n'a pas fonctionné");
//     heading[0].style.color = "red";
// }


// le DOM : Thème sombre+
// textContent
// const titleHello = document.getElementById("bonjour");
// console.log(titleHello);
// const userName = window.prompt("Quel est ton prénom ?"); // le prénom de mon utilisateur
// titleHello.textContent = `Salut ${userName}`; 

// innerHTML
// const userTask = window.prompt("Que vas-tu faire aujourd'hui");
// const listTasks = document.getElementsByTagName("ul"); // Sera un tableau
// listTasks[0].innerHTML = `<li> Tâche 1 </li>`;
// listTasks[0].innerHTML = `<li>${userTask}</li>`;

// EventListener : Permet d'ajouter une "écoute" des évènements sur un élément HTML.Les parenthèses représentent un CONSTRUCTEUR
// document.getElementById("btn").addEventListener("click", function maFonction(){
//     console.log("La réaction au click fonctionne.");
// })
// la flèche permet de gagner du temps mais la fonction n'est accessible que à l'intérieur
// document.getElementById("btn").addEventListener("click", () => {
//   console.log("La réaction au click fonctionne.");
// });

/* BOUTONS */
/*
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log("Tu as cliqué sur le bouton");
});
let floorNumber = Math.floor(14.92);
console.log(floorNumber); // 14
let roundNumberO = Math.round(14.43);
console.log(roundNumberO); // 14
let roundNumber = Math.round(14.92);
console.log(roundNumber); // 15
let randomNumber = Math.random()*100;
console.log(randomNumber); // Chiffre compris entre [0, 100[
// changer la couleur * 255
*/

/* Notre but est de créer un background aléatoire à chaque fois qu'on clic sur le bouton BTN */
//const btn = document.getElementById("btn");
//console.log(btn);
/*
function randomNumber() {
    return Math.round(Math.random() * howManyTimes);
}
*/


btn.addEventListener("click", () => {
   // document.body.style.background = `rgba(250,0,0,0.5)`;
   const red = Math.round(Math.random() * 255); // voir Discord
   //const red = randomNumber(255);              
   const green = Math.round(Math.random() * 255);              
   const blue = Math.round(Math.random() * 255); 
   const opacity = Math.random(); 
   document.body.style.background = `rgba(${red}, ${green}, ${blue}, ${opacity})`;  
   
   // Notre but est de créer un box-shadow aléatoire
   // box-shadow: 0px 0px 25px black;
   const red2 = Math.round(Math.random() * 255);              
   const green2 = Math.round(Math.random() * 255);              
   const blue2 = Math.round(Math.random() * 255); 

  // document.getElementById("myDIV").style.boxShadow = "10px 20px 30px blue";
  btn.style.boxShadow = `0px 0px 25px rgb(${red2}, ${green2}, ${blue2})`;

  // Notre but est de créer un linear-gradient
  // background: linear-gradient(250deg,rgb(254, 180, 192), rgb(146, 146, 255));
    const red3 = Math.round(Math.random() * 255);
    const green3 = Math.round(Math.random() * 255);
    const blue3 = Math.round(Math.random() * 255);

    document.body.style.background = `linear-gradient(250deg, rgb(${red}, ${green}, ${blue}), rgb(${red3}, ${green3}, ${blue3}))`;



});

// let siriusTeamArray = ["Jeremy", "Ganaëlle", "Lucas"];
// siriusTeamArray.forEach((element) => {
    // console.log(element);
// })
const bonjour = document.getElementById("bonjour");

bonjour.addEventListener("mouseover", () => {
    console.log("Bonjour")
})

function hello() {
    console.log("Hello")
}
const ciao = () => {
    console.log("Ciao");
}

function mbote(params) {
    console.log(params);
}

document.querySelector(".hello").addEventListener("mouseover", hello);
document.querySelector("h3").addEventListener("mouseover", ciao);
document.getElementById("mbote").addEventListener("mouseover", () => {
    mbote("Vous êtes fatigués !");
});

// signboard (Panneau d'affichage)
// On va loger la variable const qu'on vient de créer 
//console.log(bonjour);
//console.log(hello);
// console.log(ciao);
// console.log(body);
// console.log(hello);
// console.log(mbote);