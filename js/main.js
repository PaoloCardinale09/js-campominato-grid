// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// TODO: creare una funzione che genera una griglia
//      - generare un elemento div nel DOM
//      - aggiugere
// Creare un bottone e richiamarlo
//
//
//

const gridEl = document.getElementById("grid");
const gridDimension = 100;
generateGrid(gridEl);

/****************************************************
 *                                                  *
 *                  FUNCTIONS                       *
 *                                                  *
 ****************************************************/

/**
 * Funzione che genera una griglia che seleziona il quadrato cliccato con un toggle
 *  in base ai parametri inseriti
 * @param {HTMLElement} gridEl Elemento in cui inserire la griglia generata
 * @param {int} dimension Dimensione della griglia
 */

function generateGrid(gridEl, dimension) {
  for (let i = 0; i < gridDimension; i++) {
    // genero un div
    // lo aggiungo html
    const sqaureEl = document.createElement("div");

    // aggiungo la classe per far si che diventi un quadrato e gli da i bordi
    sqaureEl.classList.add("square");

    //  aggiungo un addeventlistener sul click che faccia il "toggle" della classe .active
    sqaureEl.addEventListener("click", function () {
      this.classList.toggle("active");
    });

    //   aggiungo alla griglia
    gridEl.append(sqaureEl);
  }
}
