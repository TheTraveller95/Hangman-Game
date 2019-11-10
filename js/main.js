var wordsIndex = ["m o u s e","c o m p u t e r","d e s k","s m a r t p h o n e","i p h o n e", "m o n i t o r"]; //test words

document.onload=firstLoading();

function firstLoading(){
    document.getElementById("home-page");
    document.getElementById("footer-section");
    document.getElementById("game-page").style.display="none";
    draw();
}

$("#play-now-link").click (function playNow(){
    document.getElementById("home-page").style.display="none";
    document.getElementById("footer-section");
    document.getElementById("game-page").style.display="block";
    draw1();
})

$("#start-button").click(function getRandomWord(){
    var randomWord =Math.floor(Math.random() * wordsIndex.length); //get random index from the array
    var wordToBeGuest = wordsIndex[randomWord]; //get the word related to the random index
    splitLettersArray = []
    var splitLetters = wordToBeGuest.split(" ");
    splitLettersArray.push(splitLetters);
    var newSplitLetterArray = splitLetters.slice() //ne array for not chainging the original one
    var i
    for (i=0;i<newSplitLetterArray.length;i++){ //replace the element inside the clone array with a _
        newSplitLetterArray[i]="_"
    }
    var underscore = newSplitLetterArray.toString().replace(/,/gi, " ")

    console.log(randomWord,wordToBeGuest);

    document.getElementById('guess-word').innerHTML = underscore;
    guessLetter();

})

function guessLetter (){
    //var letterInTheWord = document.getElementsByClassName("letter");
    var i;
    //var letter =document.getElementsByClassName("letter");
    for(i=0; i<splitLettersArray.length; i++){

        for(i=0;i<27;i++){
            var letter =document.getElementsByClassName("letter");
            if(letter[i].id===splitLettersArray[i]){
                //document.getElementsByClassName("letter").value.style.display = "block";
                console.log(letter[i].id)
            } else {
            console.log(Error)
            }
        }
    }
    /*for(i=0;i<27;i++){
    var letter =document.getElementsByClassName("letter");
    console.log(letter[i].id)
    }*/

}


function draw(){
    var ctx = document.getElementById("hangman-draw").getContext('2d');
        ctx.fillStyle = "transparent";
        ctx.lineWidth=1.5;
        ctx.fillRect(0, 0, 300, 200);
        ctx.beginPath();//first bottom bar
            ctx.moveTo(5,130);
            ctx.lineTo(185,130);
            ctx.stroke();
        ctx.beginPath(); //vertical bar
            ctx.moveTo(20,20);
            ctx.lineTo(20,130);
            ctx.stroke();
        ctx.beginPath(); //top bar
            ctx.moveTo(20,20);
            ctx.lineTo(250,20);
            ctx.stroke();
        ctx.beginPath(); //top vertical bar
            ctx.moveTo(250,20);
            ctx.lineTo(250,50);
            ctx.stroke();
        ctx.beginPath(); // diagonal line
            ctx.moveTo(20,60);
            ctx.lineTo(70,20);
            ctx.stroke();
}

function draw1(){
    var ctx = document.getElementById("hangman-game").getContext('2d');
        ctx.fillStyle = "transparent";
        ctx.lineWidth=1.5;
        ctx.fillRect(0, 0, 300, 200);
        ctx.beginPath();//first bottom bar
            ctx.moveTo(20,130);
            ctx.lineTo(170,130);
            ctx.stroke();
        ctx.beginPath(); //vertical bar
            ctx.moveTo(35,20);
            ctx.lineTo(35,130);
            ctx.stroke();
        ctx.beginPath(); //top bar
            ctx.moveTo(35,20);
            ctx.lineTo(220,20);
            ctx.stroke();
        ctx.beginPath(); //top vertical bar
            ctx.moveTo(220,20);
            ctx.lineTo(220,50);
            ctx.stroke();
        ctx.beginPath(); // diagonal line
            ctx.moveTo(35,60);
            ctx.lineTo(70,20);
            ctx.stroke();
}