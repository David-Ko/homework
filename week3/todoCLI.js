const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(
    `Welcome to ToDo CLI!\n--------------------\n(v) View ∙ (n) New ∙ (cX) Complete ∙ (dX) Delete ∙ (q) Quit\n>`, 
    ()=>{
        console.log('hi')
        rl.close();
    }

);