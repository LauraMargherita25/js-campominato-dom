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

/*const arrNomi = ['Henri', 'Francesco', 'Giovanni', 'Marco', 'Carla'];
const arrCognomi = ['Kapidani', 'Totti', 'Rossi', 'Bianchi', 'Verdi', 'Gialli', 'Violetti'];

const arrNomiIndexes = [];
const arrCognomiIndexes = [];

for (let i = 0; i < 3; i++) {
	let indexRandomNome = Math.floor(Math.random() * arrNomi.length);
	while (arrNomiIndexes.includes(indexRandomNome)) {
		indexRandomNome = Math.floor(Math.random() * arrNomi.length);
	}
	arrNomiIndexes.push(indexRandomNome);
	const nome = arrNomi[indexRandomNome];

	let indexRandomCognome = Math.floor(Math.random() * arrCognomi.length);
	while (arrCognomiIndexes.includes(indexRandomCognome)) {
		indexRandomCognome = Math.floor(Math.random() * arrCognomi.length);
	}
	arrCognomiIndexes.push(indexRandomCognome);
	const cognome = arrCognomi[indexRandomCognome];

	const nomeFinale = nome + ' ' + cognome;
	console.log(nomeFinale);
}

console.log(arrNomiIndexes);
console.log(arrCognomiIndexes);*/


/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.*/

const arrBomb100 = [];

for (let i = 0; i < 16; i++) {
    
    // create 16 random number
    const bombs100 = Math.floor(Math.random() * 100) +1;

    // ad ogni iterazione pusho il num rnd nell'arr
    arrBomb100.push(bombs100);
    console.log(arrBomb100);


}