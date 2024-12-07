const matricola = "629234";
let attempts = 0;
let startTime = Date.now();

function checkGuess() {
    const guess = document.getElementById("guess").value;
    const feedback = document.getElementById("feedback");
    const stats = document.getElementById("stats");

    if (guess.length !== 6 || isNaN(guess)) {
        feedback.innerHTML = "Hai inserito caratteri non validi o un numero non a 6 cifre! Riprova.";
        feedback.className = "feedback incorrect";
        return;
    }

    attempts++;
    if (guess === matricola) {
        const timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);
        feedback.innerHTML = `Bravo, hai trovato il mio numero di matricola: ${matricola}!!`;
        feedback.className = "feedback correct";
        stats.innerHTML = `Tentativi: ${attempts} | Tempo impiegato: ${timeTaken} secondi`;
    } else {
        feedback.innerHTML = "Non e' giusto<br>Feedback sulle cifre:<br>";
        feedback.className = "feedback incorrect";
        for (let i = 0; i < 6; i++) {
            const digitClass = matricola[i] === guess[i] ? 'digit correct' : 'digit incorrect';
            feedback.innerHTML += `<span class="${digitClass}">${guess[i]}</span>`;
        }
        stats.innerHTML = `Tentativi: ${attempts}`;
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
}