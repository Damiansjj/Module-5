import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
 
 
let GrootGetalReeks = parseFloat(await userInput.question("Geef een getal in "));
perfectNumber(GrootGetalReeks)
 
function perfectNumber(GrootGetalReeks)
 {
 for(let a = 1 ; a < 100; a++){
    let som = 0
 
    for(let b = 1; b < a; b++){
       
        if(a % b == 0){
            som += b
        }
    }
    if(som == a){
    console.log(a + " is een perfect getal")
    }
 }}