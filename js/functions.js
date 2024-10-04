/*
eka versio:

const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext"
]

let randomizedWord = ''
let maskedWord = ''
let guessCount = 0
const newGame = () => {
    const random = Math.floor(Math.random() * 10)
    randomizedWord = words[random]
    maskedWord = "*".repeat(randomizedWord.length)
    output.innerHTML = maskedWord
    guessCount = 0
    span.textContent = guessCount
}

const win = () => {
    alert(`You have guessed right, the word is ${randomizedWord}.`)
    newGame()
}

/*teköälyn ehdottama:
alempana opettajan versio, molemmat toimivia*/

/* const replaceFoundChars = (guess) => {
    let newMaskedWord = ''
    for (let i = 0; i < randomizedWord.length; i++) {
        if (randomizedWord[i].toLowerCase() === guess.toLowerCase()) {
            newMaskedWord += randomizedWord[i]
        } else {
            newMaskedWord += maskedWord[i]
        }
    }
    maskedWord = newMaskedWord
    output.innerHTML = maskedWord
} */

/* const replaceFoundChars = (guess) => {
    for (let i = 0; i < randomizedWord.length; i++) {
        const char = randomizedWord.substring(i, i + 1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i, 1, guess)
            newString = newString.join('')
            maskedWord = newString
        }
    }
    output.innerHTML = maskedWord
}

newGame()

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()

        const guess = input.value
        guessCount++
        span.textContent = guessCount

        if (guess.toLowerCase() === randomizedWord.toLowerCase()) {
            win()
        } else if (guess.length === 1) {
            replaceFoundChars(guess)
            if (maskedWord.toLowerCase() === randomizedWord.toLowerCase()) {
                win()
            }
        } else {
            alert("You guessed wrong!")
        }
        input.value = ''
    }
}) */





const input = document.querySelector('input');
const output = document.getElementById('word'); // Näytettävä maskattu sana
const span = document.querySelector('span'); // Arvausten määrä

const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext"
];

let randomizedWord = '';  // Satunnainen sana
let maskedWord = '';  // Maskattu sana
let guessCount = 0;  // Arvausten määrä

// Uuden pelin aloittaminen
const newGame = () => {
    const random = Math.floor(Math.random() * words.length); // Valitaan satunnainen sana
    randomizedWord = words[random];  // Tallennetaan satunnainen sana
    maskedWord = "*".repeat(randomizedWord.length);  // Piilotetaan sana tähtimerkeillä
    console.log("Random word:", randomizedWord);  // Konsoliin satunnainen sana
    output.textContent = maskedWord;  // Päivitetään maskattu sana
    guessCount = 0;  // Nollataan arvausten määrä
    span.textContent = guessCount;  // Näytetään arvausten määrä
};

// Oikeiden kirjainten löytäminen ja korvaaminen
const replaceFoundChars = (guess) => {
    let newMaskedWord = '';  // Uusi maskattu sana
    for (let i = 0; i < randomizedWord.length; i++) {
        if (randomizedWord[i].toLowerCase() === guess.toLowerCase()) {
            newMaskedWord += randomizedWord[i];  // Korvataan oikea kirjain
        } else {
            newMaskedWord += maskedWord[i];  // Jätetään muut kirjaimet ja tähdet ennalleen
        }
    }
    maskedWord = newMaskedWord;  // Päivitetään maskattu sana
    output.textContent = maskedWord;  // Näytetään uusi maskattu sana
};

// Voiton käsittely
const win = () => {
    alert(`You have guessed right, the word is ${randomizedWord}.`);
    newGame();  // Aloitetaan uusi peli
};

// Peli alkaa
newGame();

// Käyttäjän arvauksen käsittely
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();  // Estetään lomakkeen lähetys

        const guess = input.value.toLowerCase();  // Käyttäjän arvaus
        guessCount++;  // Lisätään arvausten määrää
        span.textContent = guessCount;  // Päivitetään arvausten määrä

        if (guess === randomizedWord.toLowerCase()) {
            win();  // Jos käyttäjä arvaa koko sanan oikein
        } else if (guess.length === 1) {
            replaceFoundChars(guess);  // Jos käyttäjä arvaa kirjaimen
            if (maskedWord.toLowerCase() === randomizedWord.toLowerCase()) {
                win();  // Jos kaikki kirjaimet on arvattu oikein
            }
        } else {
            alert("You guessed wrong!");  // Jos arvaus on väärä
        }
        input.value = '';  // Tyhjennetään syöte
    }
})