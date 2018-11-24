const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(
    `Welcome to ToDo CLI!\n--------------------\n(v) View ∙ (n) New ∙ (cX) Complete ∙ (dX) Delete ∙ (q) Quit\n>`, 
    ()=>{
        console.log(`Sorry, code isn't written yet. Check later.`)
        rl.close();
    }

);
//The above is just to create a general/barebone structure
//of the code.  This is just to build something, so that
//I can see the "main page" of todoCLI.js asking a user to
//choose from the v, n, cX, dX and q options.

/**
 * MY  PROPOSED  ALGORITHM
 * step 1 - create a general/barebone structure to show the 
 *          interface as soon as todoCLI.js is run in the terminal.
 * step 2 - In the callback function of rl.question(), call 
 *          another function called "userInput".
 * step 3 - In this "userInput" function, there will be various "if...else" statements
 *          responsible for the available choices.  
 *          I expect to use the following methods for each option:
 *          view -->  fs.readFile, rl.close()
 *          new -->   fs.writeFile, rl.close()
 *          complete->fs.writeFile, rl.close()
 *          delete--> fs.unlink, rl.close()
 *          quit -->  rl.close()
 */