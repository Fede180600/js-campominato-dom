// [] Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.

// [] Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

// [] I numeri nella lista delle bombe non possono essere duplicati.

// [] In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

// [] La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.

// [] Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// Prelevo il button play
document.getElementById('play').addEventListener("click", function() {
    // Prelevo il contenitore della griglia
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';
    // Prelevo il valore di select
    const gameDifficulty = document.getElementById('difficulty').value;
    console.log(gameDifficulty);
    // Rimuovo il titolo
    document.getElementById('my-title').classList.add('d-none');

    // Genero 100 cells se il valore di select è: easy
    if (gameDifficulty === 'easy') {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-item-xs');
            cell.innerHTML = i + 1;
            gridContainer.append(cell);
        
            // Aggiungere la classe hover al click
            cell.addEventListener("click", function() {
                this.classList.add('active');
            });
        
        }
    };

    // Genero 81 cells se il valore di select è: normal
    if (gameDifficulty === 'hard') {
        for (let i = 0; i < 81; i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-item-sm');
            cell.innerHTML = i + 1;
            gridContainer.append(cell);
        
            // Aggiungere la classe hover al click
            cell.addEventListener("click", function() {
                this.classList.add('active');
            });
        
        }
    };

    // Genero 49 cells se il valore di selectè: crazy
    if (gameDifficulty === 'crazy') {
        for (let i = 0; i < 49; i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-item-lg');
            cell.innerHTML = i + 1;
            gridContainer.append(cell);
        
            // Aggiungere la classe hover al click
            cell.addEventListener("click", function() {
                this.classList.add('active');
            });
        
        }
    };
});