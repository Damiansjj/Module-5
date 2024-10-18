import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let max = 10;
let min = 1;
let randomGetal = random(min, max); 
let vraag; 

do {
    vraag = parseFloat(await userInput.question("Raad een getal tussen 1 - 10? "));
    
    if (vraag < randomGetal) {
        console.log("hoger is het getal!");}
    else if (vraag >  randomGetal) {
        console.log("Lager is het getal!")}
    else {
        console.log("Gebruiker heeft het goed geraden")
    }
} while (vraag !== randomGetal);

console.log("Het juiste getal was: " + randomGetal);
