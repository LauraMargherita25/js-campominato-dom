/*const gridContainer = document.querySelector(".grid");
let inputDifficulty = document.querySelector("#select_difficulty"); 
let btnPlay = document.querySelector("#play");





btnPlay.addEventListener("click", function(){

    gridContainer.innerHTML = "";
    gridContainer.classList.add("grid");
    gridContainer.classList.remove("low", "midium", "high");

    let userDifficulty = inputDifficulty.value;

    if (userDifficulty == "low") {

        gridContainer.classList.add("low")
        gridContainer.style.visibility = "visible";

        for (let i = 1; i <= 36; i++) {
    
            const square = document.createElement("div");
            square.classList.add("square");
            square.innerHTML = i;
            gridContainer.append(square);
        }

    } else if (userDifficulty == "midium"){
        
        gridContainer.classList.add("midium")
        gridContainer.style.visibility = "visible";
        
        for (let i = 1; i <= 64; i++) {
    
            const square = document.createElement("div");
            square.classList.add("square");
            square.innerHTML = i;
            gridContainer.append(square);
        }
        
    } else if (userDifficulty == "high"){

        gridContainer.classList.add("high")
        gridContainer.style.visibility = "visible";

        for (let i = 1; i <= 100; i++) {
    
            const square = document.createElement("div");
            square.classList.add("square");
            square.innerHTML = i;
            gridContainer.append(square);
        }

    } 
})*/




/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.*/

const arrBomb100 = [];

for (let i = 0; i < 16; i++) {
    
    // creo un num rnd tra 1 e 100
    let bombs100 = Math.floor(Math.random() * 100) +1;

    // controllo se il num rnd c'è già nell'array
    while (arrBomb100.includes(bombs100) == true) {     //se c'è già
        bombs100 = Math.floor(Math.random() * 100) +1;  //ne genero uno nuovo
    }

    // aggiungo il num rnd nell'array
    arrBomb100.push(bombs100);
}
console.log(arrBomb100);





const arrBomb81 = [];

for (let i = 0; i < 16; i++) {
    
    // creo un num rnd tra 1 e 81
    let bombs81 = Math.floor(Math.random() * 81) +1;

    // controllo se il num rnd c'è già nell'array
    while (arrBomb81.includes(bombs81) == true) {     //se c'è già
        bombs81 = Math.floor(Math.random() * 81) +1;  //ne genero uno nuovo
    }

    // aggiungo il num rnd nell'array
    arrBomb81.push(bombs81);
}
console.log(arrBomb81);





const arrBomb49 = [];

for (let i = 0; i < 16; i++) {
    
    // creo un num rnd tra 1 e 49
    let bombs49 = Math.floor(Math.random() * 49) +1;

    // controllo se il num rnd c'è già nell'array
    while (arrBomb49.includes(bombs49) == true) {     //se c'è già
        bombs49 = Math.floor(Math.random() * 49) +1;  //ne genero uno nuovo
    }

    // aggiungo il num rnd nell'array
    arrBomb49.push(bombs49);
}
console.log(arrBomb49);





// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina