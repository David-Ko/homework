
function Hangman(){

    let keyboard = document.querySelector(".keyboard")
    function makeKeyboard () {
        for (let i = 65; i < 91; i++){
            let character = String.fromCharCode(i)
            let letter = document.createElement("div")
            letter.classList.add("letter")
            letter.innerText = `${character}`
            keyboard.append(letter)
        };
    };
    makeKeyboard();

    let letter = document.querySelectorAll(".letter");
    let clickedLetter = "";
    let guessedLetters = [];
    function keyColor () {
        letter.forEach(node=>{
            node.addEventListener("click", event=>{
                event.target.classList.add("key-color")
                clickedLetter = event.target.textContent
                if (matchedLetter() && !alreadyGuessed()){
                    guessedLetters.push(clickedLetter);
                    correctLetter();
                } else if (alreadyGuessed()) {
                    alert("You've already tried this letter")
                } else {
                    guessedLetters.push(clickedLetter);
                    incorrectLetter();
                };
            });
        });
    };
    keyColor();

    const mySecretWordArray = ["STRANGER", "MONITOR", "CANADA", "LUKE"]
    let randomIndex = Math.floor(Math.random()*mySecretWordArray.length)
    const secretWord = mySecretWordArray[randomIndex]
    const secretWordLength = secretWord.length
    let horizontalBars = document.querySelector(".horizontal-bar")
    for (let i = 0; i < secretWordLength; i++) {
        let individualBar = document.createElement("div")
        individualBar.classList.add("underline")
        horizontalBars.append(individualBar)
    };

    function matchedLetter () {
        return (secretWord.indexOf(clickedLetter) >= 0)
    };

    let correctAnswerLength = 0

    function correctLetter(){
        for (let index = 0; index < secretWordLength; index ++){
            if (secretWord[index]===clickedLetter){
                document.querySelector(".horizontal-bar").children[index].innerText = `${clickedLetter}`
                correctAnswerLength += 1;
            };
            if (correctAnswerLength === secretWordLength){
                alert("you won")
                document.location.reload()
            }
        };
    };

    let pictureIndex = 0
    function incorrectLetter(){
        let pictures = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']
        if (pictureIndex <= 4){
            pictureIndex += 1 
            document.querySelector("img").setAttribute("src", `${pictures[pictureIndex-1]}`)
        } else {
            document.querySelector("img").setAttribute("src", "6.jpg")
            alert("you died")
            document.location.reload()
        };
    };

    function alreadyGuessed() {
        return guessedLetters.indexOf(clickedLetter) >= 0;
    };
};

Hangman();