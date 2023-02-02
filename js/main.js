// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
/**  alla selezione della difficoltà devo cambiare
 *  - la dimensione della griglia
 *  - devo assegnare una classe nel DOM per modificare height e width di square
 */
// const easyChallengeEl = document.getElementById("easy-level");
// const normalChallengeEl = document.getElementById("normal-level");
// const hardChallengeEl = document.getElementById("hard-level");

const challengeSelectEl = document.getElementById("challenge-select");

const gridEl = document.getElementById("grid");
const startButtonEl = document.getElementById("start-button");
const easy = 100;
const normal = 81;
const hard = 49;
let gridDimension = 0;
let classToAdd = "";

startButtonEl.addEventListener("click", function () {
  let levelChoice = challengeSelectEl.value;
  if (levelChoice == "easy") {
    classToAdd = "easy";
    gridDimension = easy;
  } else if (levelChoice == "normal") {
    classToAdd = "normal";
    gridDimension = normal;
  } else {
    classToAdd = "hard";
    gridDimension = hard;
  }
  generateGrid(gridEl, gridDimension);
});

// var e = document.getElementById("ddlViewBy");
// var value = e.value;
// var text = e.options[e.selectedIndex].text;

/****************************************************
 *                                                  *
 *                  FUNCTIONS                       *
 *                                                  *
 ****************************************************/

/**
 * Funzione che genera una griglia che seleziona il quadrato cliccato con un toggle
 * di dimensioni in base ai parametri inseriti.
 * @param {HTMLElement} gridEl Elemento in cui inserire la griglia generata
 * @param {int} dimension Dimensione della griglia
 */

function generateGrid(gridEl, dimension) {
  gridEl.innerHTML = "";
  for (let i = 0; i < gridDimension; i++) {
    // genero un div
    // lo aggiungo html
    const squareEl = document.createElement("div");
    squareEl.append(i + 1);

    // assegna un numero progressivo per ogni div
    // squareEl.append(i + 1);

    // aggiungo la classe per far si che diventi un quadrato e gli da i bordi
    squareEl.classList.add("square", classToAdd);

    //  aggiungo un addeventlistener sul click che faccia il "toggle" della classe .active
    squareEl.addEventListener("click", function () {
      this.classList.toggle("active");

      console.log(this.innerHTML);
    });

    //   aggiungo alla griglia
    gridEl.append(squareEl);
  }
}
