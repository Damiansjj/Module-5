import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal = parseFloat(await userInput.question("Geef een getal in: "));
let getal1= parseFloat(await userInput.question("Geef een getal in: "));

max(getal,getal1)
min(getal,getal1)

function min(getal,getal1){
let kleingetal = Math.min(getal,getal1)
console.log("het kleinste getal is "+ kleingetal);}

function max(getal,getal1){
let grootgetal= Math.max(getal,getal1)
console.log("het groote getal is "+ grootgetal );}