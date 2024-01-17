// Consegna esercizio 

// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: Nell’array delle bombe non potranno esserci due numeri uguali.


// In seguito l'utente clicca su una cella
    // se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
    // Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.


// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.





// prendiamo le variabili 
let grid = document.getElementById("grid")
let btn = document.getElementById("btn")

// prendiamo le variabili di vittoria e sconfitta 
let playerLoses = document.getElementById("playerLoses")
let playerWins = document.getElementById("playerWins")

// prendiamo la variabile del punteggio  
let score = document.getElementById("score")

// funzione che genera i numeri casuali  
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// array bombe 
let bombArray = []

// ciclo while per far riempire l'array vuoto 
while (bombArray.length < 16) {

    let randomNum = randomNumber(1,100)

    if (!bombArray.includes(randomNum)){
        bombArray.push(randomNum)
    }

} 

// controlliamo i valori in console 
console.log(bombArray)

// definiamo la variabile della somma 
let sum = 0

// aggiungiamo l'addEventListener al click del play button 
btn.addEventListener("click", function(){

    // ciclo for che genera la griglia di 100 caselle 
    for(let i = 1; i <= 100; i++){
        let gridCell = document.createElement("div")
        gridCell.classList.add("box")
        grid.append(gridCell)
        gridCell.innerHTML = `<span> ${i} </span>`

        // addEventListener al click delle celle
        gridCell.addEventListener("click", function(){

            // se clicchiamo una cella con una bomba si ferma il gioco
            if (bombArray.includes(i)){
                this.classList.add("bomb-cell")
                console.log("hai perso")
                grid.classList.add("result")
                playerLoses.classList.remove("d-none")
                score.innerHTML = `<span> You scored: ${sum}</span>`
                score.classList.add("score")
            } else { // altrimenti vado avanti 
                this.classList.add("clicked-cell")
                console.log(i)
                console.log(sum++)
                
            }

            // definizione della vittoria 
            if(sum == 84){
                console.log("hai vinto")
                grid.classList.add("result")
                playerWins.classList.remove("d-none")
                score.innerHTML = `<span> You scored: ${sum}</span>`
                score.classList.add("score")
            }
        
            
        })
    }
})

