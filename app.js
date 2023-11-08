// Generar un número aleatorio entre 1 y 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
    
let attempts = 3;  // Número de intentos permitidos

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const attemptsSpan = document.getElementById('attempts');
    
    const userGuess = parseInt(guessInput.value);
    
    if (attempts > 0) {
        if (userGuess === randomNumber) {
            message.textContent = '¡Adivinaste! El número era ' + randomNumber;
            message.style.color = 'green';
            guessInput.disabled = true;
        } else if (userGuess < randomNumber) {
            message.textContent = 'El número es mayor. Intenta de nuevo.';
            message.style.color = 'red';
            guessInput.value = '';
            guessInput.focus();
            attempts--;
        } else {
            message.textContent = 'El número es menor. Intenta de nuevo.';
            message.style.color = 'red';
            guessInput.value = '';
            guessInput.focus();
            attempts--;
        }
        
        attemptsSpan.textContent = attempts;
        
        if (attempts === 0 && userGuess !== randomNumber) {
            message.textContent = 'Se acabaron los intentos. El número era ' + randomNumber;
            message.style.color = 'red';
            guessInput.disabled = true;
        }
    }
}

window.onload = function() {
    const attemptsSpan = document.getElementById('attempts');
    attemptsSpan.textContent = attempts;
};