const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let myStuff = []; 
//The above "myStuff" array will be storing the todo's that a user enters.
function userInput(answer){
    if (answer === 'v'){
        viewList();
    } else if (answer === 'n'){
        addNewItem();
    } else if (answer[0] === 'c') {
        completeItem(answer);
    } else if (answer[0] === 'd') {
        deleteItem(answer);
    } else if (answer === 'q'){
        quitList();
    } else {
        console.log(`You must enter one of the following: v, n, cX (where X is a number), dX (where X is a number), q`);
        menu();
    };
};

function menu () {rl.question(
    `Welcome to ToDo CLI!\n--------------------\n(v) View ∙ (n) New ∙ (cX) Complete ∙ (dX) Delete ∙ (q) Quit\n>`, 
    userInput)};
    menu();

function viewList (){
    console.log(`You're viewing your to-do list`);
    if (myStuff.length === 0) {
         console.log('but your to-do list is empty')
    } else {
    for (let i = 0; i < myStuff.length; i++){
            if (myStuff[i][0] === false) {
                console.log (`${i}  [ ] ${myStuff[i][1]}`)
                } else if (myStuff[i][0] === true) {
                    console.log(`${i}  [✓] ${myStuff[i][1]}`)
           }
        }
    };
    menu();
};

function addNewItem (){
    console.log(`you're adding a new to-do item`);
    rl.question(`What task would you like to add?\n`, answer =>{
        myStuff.push([false, answer]);
        menu();
    });
};

function completeItem (answer) {
    let userInputNumber = '';
    for (let i = 1; i<answer.length; i++){
        userInputNumber += answer[i]
    };

    myStuff[userInputNumber][0] = true;
    console.log(`Completed "${myStuff[userInputNumber][1]}"`)
    menu();
};

function deleteItem (answer) {
        let userInputNumber = '';
        for (let i = 1; i<answer.length; i++){
            userInputNumber += answer[i]
        };

        let itemToDelete = myStuff.splice(userInputNumber,1) 
        console.log(`Deleted "${itemToDelete[0][1]}"`);
        menu();
};

function quitList (){
    console.log(`See you soon! 😄`);
    rl.close();
};

//Nov 23, 2018
//The above is just to create a general/barebone structure
//of the code.  This is just to build something, so that
//I can see the "main page" of todoCLI.js asking a user to
//choose from the v, n, cX, dX and q options.

/**
 * MY  PROPOSED  ALGORITHM - Nov 23, 2018
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

 /** Nov 25, 2018
  * I realized I started coding for the "stretch" homework.
  * So, I decided to rewrite my code for the "non-stretch" homework first.
  * I will tackle the "stretch" homework later.
  * 
  * 
  * 
  ** Nov 30, 2018
  *  I cleaned up my code by deleting unneccesary comments and empty spaces.
  *  I cleaned up my code by indenting properly.
  *  I cleaned up my code by naming my variable with meaningful word choices.
  */