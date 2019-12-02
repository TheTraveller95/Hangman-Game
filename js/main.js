var wordsIndex = ["miami","guayaquil","dublin","turin","moscow", "quito","berlin","prague","milan","madrid","lisbon","paris","rome","brasilia","lima",
"chicago","boston","santiago","bogota","tokyo","philadelphia","manhattan","panama","toronto","beijing","london","amsterdam","bangkok","sydney",
"houston","nashville","monterrey","dubai","belfast","barcelona","athens","oslo","singapore","nairobi","honolulu","cali","montevideo"]; //test words

document.onload=firstLoading();
wrongLetterArray = []
newWrongLetterArray = wrongLetterArray.slice()

function firstLoading(){
    document.getElementById("home-page");
    document.getElementById("footer-section");
    document.getElementById("game-page").style.display="none";
    document.getElementById('navbarTogglerDemo03').style.display= 'none';
    document.getElementById('home').style.fontWeight= 'bold';
    document.getElementById('game').style.fontWeight= 'normal';
    draw();
}

function playNow(){
    document.getElementById("home-page").style.display="none";
    document.getElementById("you-won").style.display='none';
    document.getElementById('you-lost').style.display = 'none';
    document.getElementById('navbarTogglerDemo03').style.display= 'none';
    document.getElementById("footer-section");
    document.getElementById("game-page").style.display="block";
    document.getElementById("game").style.fontWeight= 'bold';
    document.getElementById('home').style.fontWeight= 'normal';
    document.getElementById('guess-word').style.display= 'none';
    if (document.getElementById('start-button').innerHTML= 'Restart'){
        document.getElementById('start-button').innerHTML= document.getElementById('start-button').innerHTML.replace('Restart','Start');
    };
    draw1();
    backToNormal();
}

$("#play-now-link").click(function(){
    playNow();
})

/*document.getElementsByClassName('box').addEventListener('click', function(){
    if(getRandomWord ===undefined ){
        alert('click on Start')
    }
})*/

$('.box').click(function(){
    if(newSplitLetterArray===undefined ){
        alert('click on Start');
    }
}) // DO NOT WORK

$('#home').click(function(){
    document.getElementById("home-page").style.display='block';
    document.getElementById("footer-section").style.display='block';
    document.getElementById("game-page").style.display="none";
    document.getElementById('navbarTogglerDemo03').style.display= 'none';
    document.getElementById('home').style.fontWeight= 'bold';
    document.getElementById('game').style.fontWeight= 'normal';   
    draw();
})

$('#game').click(function(){
    playNow();
})

function backToNormal (){

    ctx =   document.getElementById("hangman-game").getContext('2d'); //clear the hangman drowing
            ctx.clearRect(173, 45, 100, 80);

    document.getElementById("you-won").style.display='none';
    document.getElementById('you-lost').style.display = 'none';
   
    letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    letters.forEach(function (letter){
        document.getElementById(letter).style.backgroundColor="blue";
        document.getElementById(letter).style.color="white";
        document.getElementById(letter).disabled = false;
    })
}

$("#start-button").click(function getRandomWord(){
    var randomWord =Math.floor(Math.random() * wordsIndex.length); //get random index from the array
    var wordToBeGuest = wordsIndex[randomWord]; //get the word related to the random index
    splitLettersArray = []
    var splitLetters = wordToBeGuest.split(""); //divides all the letters inside the word to be guest
    splitLettersArray.push(splitLetters);
    newSplitLetterArray = splitLetters.slice() //ne array for not chainging the original one
    newSplitLetterArray.fill('_') //replace the element inside the clone array with a _
    var underscore = newSplitLetterArray.toString().replace(/,/gi, " ")
    var underscore2 = underscore.split()
    newWrongLetterArray=[]
    document.getElementById('guess-word').innerHTML = underscore2;
    document.getElementById('guess-word').style.display= 'block';
    guessLetter();
    backToNormal();
})

function guessLetter (letter){ //function called once the letters are clicked
    x = letter

    for(let i=0;i<splitLettersArray.length;i++){ 
        var test = splitLettersArray[i].includes(letter)

        if (test==true){  //check if the word in the array contain the clicked letter
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
                for(let t=0;t<indices.length;t++){        
                newSplitLetterArray.splice(indices[t],1,letter) //replace the "_" in the right location with the clicked letter
                }
                xy = newSplitLetterArray.toString().replace(/,/gi, " ");
                return xy;
            }
            var myVar = correctLetterFunction()
            document.getElementById('guess-word').innerHTML = myVar; //it displays the word
            document.getElementById(x).style.backgroundColor="green"; //change the color of the clicked letter button 
            document.getElementById(x).style.color="transparent"; //change the color of the clicked letter button 
            document.getElementById(x).disabled= true; //disable the button after having cliked it
        } else{ 
            newWrongLetterArray.splice(0,0,letter);
            hangman();
            document.getElementById(x).style.backgroundColor="red"; //change the color of the clicked letter button 
            document.getElementById(x).style.color="transparent"; //change the color of the clicked letter button 
            document.getElementById(x).disabled= true; //disable the button after having cliked it
        } 

        xyArray = xy.split(" ")
        for(let i=0;i<xyArray.length;i++){
            won = xyArray.includes("_")
            if(won == false){ //check if the entire word has been guest
                youWon();
            }
        }
    } 
}


function youWon (){
    xyArray=[];
    newSplitLetterArray.fill('_');
    delete xy;
    backToNormal();
    happyman();
    document.getElementById("you-won").style.display='block';
    document.getElementById('start-button').innerHTML= document.getElementById('start-button').innerHTML.replace('Start','Restart');
    letters.forEach(function (letter){
        document.getElementById(letter).disabled = true;
    })
}


function hangman(){

    draw1();

    if(newWrongLetterArray.length==2){
            ctx.beginPath();
            ctx.arc(220,60,10,0,2*Math.PI)
            ctx.stroke();
    }

    if(newWrongLetterArray.length==3){
            ctx.beginPath();
            ctx.moveTo(220,70);
            ctx.lineTo(220,90);
            ctx.stroke();
    }

    if(newWrongLetterArray.length==4){
            ctx.beginPath();
            ctx.moveTo(220,70);
            ctx.lineTo(205,80);
            ctx.stroke();
    }

    if(newWrongLetterArray.length==5){
            ctx.beginPath();
            ctx.moveTo(220,70);
            ctx.lineTo(235,80);
            ctx.stroke();
    }

    if(newWrongLetterArray.length==6){
            ctx.beginPath();
            ctx.moveTo(220,90);
            ctx.lineTo(235,105);
            ctx.stroke();
    }

    if(newWrongLetterArray.length==7){
            ctx.beginPath();
            ctx.moveTo(220,90);
            ctx.lineTo(205,105);
            ctx.stroke();
    }

    if(newWrongLetterArray.length==7){
       alert("You have one more shot! Click OK/CLOSE to continue")
    }

    if(newWrongLetterArray.length==8){
       document.getElementById('you-lost').style.display = 'block';
       document.getElementById('guess-word').innerHTML=splitLettersArray.toString().replace(/,/gi, " ");
       document.getElementById('start-button').innerHTML= document.getElementById('start-button').innerHTML.replace('Start','Restart');
       letters.forEach(function (letter){
            document.getElementById(letter).disabled = true;
        })
    }
}

function happyman(){
    
    draw1();

    ctx.beginPath();
            ctx.arc(220,75,10,0,2*Math.PI)
            ctx.stroke();
    
    ctx.beginPath();
            ctx.moveTo(220,85);
            ctx.lineTo(220,105);
            ctx.stroke();

    ctx.beginPath();
            ctx.moveTo(220,85);
            ctx.lineTo(175,70);
            ctx.stroke();

    ctx.beginPath();
            ctx.moveTo(220,85);
            ctx.lineTo(265,70);
            ctx.stroke();

    ctx.beginPath();
            ctx.moveTo(220,105);
            ctx.lineTo(265,120);
            ctx.stroke();

    ctx.beginPath();
            ctx.moveTo(220,105);
            ctx.lineTo(175,120);
            ctx.stroke();
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
        ctx.lineWidth=5;
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

$('#hamburger').click(function(){
    $('#navbarTogglerDemo03').slideToggle()
})