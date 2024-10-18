import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
 
 
let getal = parseFloat(await userInput.question("Geef een getal in: "));
let maal = 0;
 
do
{
    if(getal < 1)
    {
        console.error("Getal moet 1 of hoger zijn!");
        getal = parseFloat(await userInput.question("Geef een getal in: "));
       
    }
 
}while(getal < 1);
 
 
for(let i = 1; getal >= i; i++)
{
    if(i == 1)
    {
        process.stdout.write("" + i);
    }
    else
    {
        process.stdout.write(" X " + i);
    }
   
}
 
process.stdout.write(" = ");
 
let resultaat = factorial(getal);
 
process.stdout.write("" + resultaat);
 
 
function factorial(getal)
{
    let resultaat = 1;
 
    for(let i = 1; i <= getal; i++)
    {
        resultaat *= i;
    }
 
    return resultaat;
}