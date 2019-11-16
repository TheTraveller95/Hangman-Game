var wordsIndex = ["m o u s e","c o m p u t e r","d e s k","s m a r t p h o n e","i p h o n e", "m o n i t o r"]; //test words

document.onload=firstLoading();
wrongLetterArray = []
newWrongLetterArray = wrongLetterArray.slice()

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
    newSplitLetterArray = splitLetters.slice() //ne array for not chainging the original one
    var i
    for (i=0;i<newSplitLetterArray.length;i++){ //replace the element inside the clone array with a _
        newSplitLetterArray[i]="_"
    }
    var underscore = newSplitLetterArray.toString().replace(/,/gi, " ")
    var underscore2 = underscore.split()
    newWrongLetterArray=[]

    console.log(randomWord,wordToBeGuest);

    document.getElementById('guess-word').innerHTML = underscore2;
    /*document.getElementById(letter).style.backgroundColor="blue";
    document.getElementById(letter).style.color="white";*/
    guessLetter();
    backToNormal();

})

function guessLetter (letter){
    var i;
    x = letter
    for(i=0;i<splitLettersArray.length;i++){ 

        var test = splitLettersArray[i].includes(letter)

        if (test==true){

            function correctLetterFunction (){

                newSplitLetterArray.slice()
                var indices = [];
                var newSplitLettersArray2 = splitLettersArray.slice();
                var wordArray = newSplitLettersArray2.toString().replace(/,/gi, "");
                var l = letter;
                var idx = wordArray.indexOf(l);
                while (idx != -1) {
                indices.push(idx);
                idx = wordArray.indexOf(l, idx + 1);
                }
                console.log(indices);
                var t;

                for(t=0;t<indices.length;t++){
                    
                newSplitLetterArray.splice(indices[t],1,letter)
                }
                return newSplitLetterArray.toString().replace(/,/gi, " ");   
            }

            var myVar = correctLetterFunction()
            document.getElementById('guess-word').innerHTML = myVar;
            
            document.getElementById(x).style.backgroundColor="green";
            document.getElementById(x).style.color="transparent";


        } else{ 
            newWrongLetterArray.splice(0,0,letter);
            hangman();
            
            document.getElementById(x).style.backgroundColor="red";
            document.getElementById(x).style.color="transparent";
            console.log(newWrongLetterArray);    
        }
         
    } 
}


function backToNormal (){
    document.getElementById('a').style.backgroundColor="blue";
    document.getElementById('b').style.backgroundColor="blue";
    document.getElementById('c').style.backgroundColor="blue";
    document.getElementById('d').style.backgroundColor="blue";
    document.getElementById('e').style.backgroundColor="blue";
    document.getElementById('f').style.backgroundColor="blue";
    document.getElementById('g').style.backgroundColor="blue";
    document.getElementById('h').style.backgroundColor="blue";
    document.getElementById('i').style.backgroundColor="blue";
    document.getElementById('j').style.backgroundColor="blue";
    document.getElementById('k').style.backgroundColor="blue";
    document.getElementById('l').style.backgroundColor="blue";
    document.getElementById('m').style.backgroundColor="blue";
    document.getElementById('n').style.backgroundColor="blue";
    document.getElementById('o').style.backgroundColor="blue";
    document.getElementById('p').style.backgroundColor="blue";
    document.getElementById('q').style.backgroundColor="blue";
    document.getElementById('r').style.backgroundColor="blue";
    document.getElementById('s').style.backgroundColor="blue";
    document.getElementById('t').style.backgroundColor="blue";
    document.getElementById('u').style.backgroundColor="blue";
    document.getElementById('v').style.backgroundColor="blue";
    document.getElementById('w').style.backgroundColor="blue";
    document.getElementById('x').style.backgroundColor="blue";
    document.getElementById('y').style.backgroundColor="blue";
    document.getElementById('z').style.backgroundColor="blue";

    document.getElementById('a').style.color="white";
    document.getElementById('b').style.color="white";
    document.getElementById('c').style.color="white";
    document.getElementById('d').style.color="white";
    document.getElementById('e').style.color="white";
    document.getElementById('f').style.color="white";
    document.getElementById('g').style.color="white";
    document.getElementById('h').style.color="white";
    document.getElementById('i').style.color="white";
    document.getElementById('j').style.color="white";
    document.getElementById('k').style.color="white";
    document.getElementById('l').style.color="white";
    document.getElementById('m').style.color="white";
    document.getElementById('n').style.color="white";
    document.getElementById('o').style.color="white";
    document.getElementById('p').style.color="white";
    document.getElementById('q').style.color="white";
    document.getElementById('r').style.color="white";
    document.getElementById('s').style.color="white";
    document.getElementById('t').style.color="white";
    document.getElementById('u').style.color="white";
    document.getElementById('v').style.color="white";
    document.getElementById('w').style.color="white";
    document.getElementById('x').style.color="white";
    document.getElementById('w').style.color="white";
    document.getElementById('z').style.color="white";
}

function hangman(){

    draw1();

    if(newWrongLetterArray.length==1){
        ctx.fillStyle="white";
        ctx.fillRect(200,45,50,65)
    }

    if(newWrongLetterArray.length==2){
        /*var ctx = document.getElementById("hangman-game").getContext('2d');
            ctx.fillStyle = "transparent";
            ctx.lineWidth=1.5;
            ctx.fillRect(0, 0, 300, 200);*/
            ctx.beginPath();
            ctx.arc(220,60,10,0,2*Math.PI)
            ctx.stroke();
    }

    if(newWrongLetterArray.length==3){
        /*var ctx = document.getElementById("hangman-game").getContext('2d');
            ctx.fillStyle = "transparent";
            ctx.lineWidth=1.5;
            ctx.fillRect(0, 0, 300, 200);*/
            ctx.beginPath();
            ctx.moveTo(220,70);
            ctx.lineTo(220,90);
            ctx.stroke();
    }

    if(newWrongLetterArray.length==4){
        /*var ctx = document.getElementById("hangman-game").getContext('2d');
            ctx.fillStyle = "transparent";
            ctx.lineWidth=1.5;
            ctx.fillRect(0, 0, 300, 200);*/
            ctx.beginPath();
            ctx.moveTo(220,70);
            ctx.lineTo(205,80);
            ctx.stroke();
    }

    if(newWrongLetterArray.length==5){
        /*var ctx = document.getElementById("hangman-game").getContext('2d');
            ctx.fillStyle = "transparent";
            ctx.lineWidth=1.5;
            ctx.fillRect(0, 0, 300, 200);*/
            ctx.beginPath();
            ctx.moveTo(220,70);
            ctx.lineTo(235,80);
            ctx.stroke();
    }

    if(newWrongLetterArray.length==6){
        /*var ctx = document.getElementById("hangman-game").getContext('2d');
            ctx.fillStyle = "transparent";
            ctx.lineWidth=1.5;
            ctx.fillRect(0, 0, 300, 200);*/
            ctx.beginPath();
            ctx.moveTo(220,90);
            ctx.lineTo(235,105);
            ctx.stroke();
    }

    if(newWrongLetterArray.length==7){
       /*var ctx = document.getElementById("hangman-game").getContext('2d');
            ctx.fillStyle = "transparent";
            ctx.lineWidth=1.5;
            ctx.fillRect(0, 0, 300, 200);*/
            ctx.beginPath();
            ctx.moveTo(220,90);
            ctx.lineTo(205,105);
            ctx.stroke();
    }

    if(newWrongLetterArray.length==7){
       alert("You have one more shot! Click OK to continue")
    }

    if(newWrongLetterArray.length==8){
       alert("you lost: GAME OVER :(  Click OK to see the correct word");
       document.getElementById('guess-word').innerHTML=splitLettersArray.toString().replace(/,/gi, " ");
    }
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
     ctx = document.getElementById("hangman-game").getContext('2d');
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