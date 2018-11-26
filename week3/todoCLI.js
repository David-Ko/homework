const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let myStuff = [];
function userInput(answer){
    
    if (answer === 'v'){
        viewList();
    } else if (answer === 'n'){
        addNewItem();
    } else if (answer[0] === 'c') {
        completeItem(answer);
        // myStuff[answer[1]][0] = true;
        // console.log(`Completed "${myStuff[answer[1]][1]}"`)
        // menu();
    } else if (answer[0] === 'd') {
        deleteItem(answer);
        // let x = myStuff.splice(answer[1],1) //this deletes the task and UPDATES your list
        // console.log(`Deleted "${x[0][1]}"`);
        // menu();
    } else if (answer === 'q'){
        quitList();
    } else {
        console.log(`You must enter one of the following: v, n, cX, dX, q`);
        menu();
    }
}

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
}

function addNewItem (y){
    console.log(`you're adding a new to-do item`);
    rl.question(`What task would you like to add?\n`, answer =>{
        myStuff.push([false, answer]);
        menu();
    });
}

function completeItem (answer) {
    let y = '';
    for (let i = 1; i<answer.length; i++){
        y += answer[i]
    }

    myStuff[y][0] = true;
    console.log(`Completed "${myStuff[y][1]}"`)
    menu();
}

function deleteItem (answer) {
        let y = '';
        for (let i = 1; i<answer.length; i++){
            y += answer[i]
        }

        let x = myStuff.splice(y,1) //this deletes the task and UPDATES your list
        console.log(`Deleted "${x[0][1]}"`);
        menu();
}

function quitList (){
    console.log(`See you soon! 😄`);
    rl.close();
}

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
  */