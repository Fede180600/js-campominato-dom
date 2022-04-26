// [*] Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.

// [*] Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

// [*] I numeri nella lista delle bombe non possono essere duplicati.

// [*] In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

// [*] La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.

// [*] Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// Prelevo il button play
document.getElementById('play').addEventListener("click", function() {
    // Prelevo il contenitore della griglia
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';
    // Prelevo il valore di select
    const gameDifficulty = document.getElementById('difficulty').value;
    // Rimuovo il titolo
    document.getElementById('my-title').classList.add('d-none');
    // Numeri del computer
    const computerNumbers = getNumbers(100, 1);
    console.log(computerNumbers);
    const safeCells = [];
    const winNumbers = 100 - computerNumbers.length;

    // Genero 100 cells 
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-item-xs');
        const cellNumber = document.createElement('span');
        cellNumber.innerHTML = i + 1;
        gridContainer.append(cell);
        cell.append(cellNumber);
        
        // Aggiungere la classe hover al click
        cell.addEventListener("click", function() {
            const clickedNumber = parseInt(this.querySelector('span').textContent);
            if ( computerNumbers.includes(clickedNumber) ) {
                this.classList.add('bomb');
                endGame(safeCells.length, "lose")

            } else {
                this.classList.add('active');
                // Rendo la cella non cliccabile nuovamente
                this.style.pointerEvents = "none";

                // Aggiungo il numero cliccatto alla array dei numeri giusti
                safeCells.push(clickedNumber);
                console.log(safeCells);
                // Se la lunghezza dell'array di numeri azzecati è uguale a quella dei tentativi massimi:
                if (safeCells.length >= winNumbers) {
                    endGame(safeCells.length, "win")
                }
            }
        });
        
        function endGame(safeNumbersquantity, winLose) {
            const safeNumbersQuantity = safeCells.length;
            const resultTitle = document.getElementById('my-result');
            let resultMessage;
            // Se l'utente ha perso 
            if (winLose === "lose") {
                // Stampa il messaggio "Hai perso" e il numero di tentativi azzeccati
                resultMessage = `Hai perso, hai indovinato ${safeNumbersQuantity} numeri`
            } else {
                // Stampa "Hai vinto"
                resultMessage = "Hai vinto!"
            }
            resultTitle.innerHTML = resultMessage;
            resultTitle.classList.remove('d-none');

        }
        
    };
    


    function getNumbers(max, min) {
        bombsNumber = [];

        for(let i = 1; i <= 16; i++) {
            rndInteger = Math.floor(Math.random() * max ) + min;
            if ( bombsNumber.includes(rndInteger) == true) {
                i = i - 1;
            } else {
                if ( rndInteger > max == false) {
                    bombsNumber.push(rndInteger);
                }
            }
        }
        return bombsNumber;
    }

});
