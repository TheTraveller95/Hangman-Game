# The Hangman Game

This little and funny game was born from the custom in hanging the criminals who had been sentenced to death. These ones, before been killed 
could demand the "Rite of Words and Life." 
In the home pageof my project, you will find the story and explanation of this rite.
The game consists in guessin a word related to a determined topic, having as tips only the number of letters contained in it.
The player can try letter by letter in order to find the ones that actually compose the word to be guest.
Every time that the choosen letter is a wrong one, a piece of the hangman will be drawn down. The game ends if the palyer guesses the word 
before the entire hangman is drawn (in this case the palyer win) or, on the other hand, when the player drew the full hangman by choosing 7 wrong 
letters.

## UX

The main goal of this project is to let the users have fun by playing this funny game. The user does not need much time to play it because it
begins and ends every time he guesses the word or looses. It can be played during a bus riding or when waiting to be atended by the doctor.

In order to see some of this project mockups, please find them inside the Mockups folder.

## Features

The webpage structure has been created in only one HTML file divided in 2 main sections: the home page and the game page.
Depending on which of them the user is, the other one is hidded.
These 2 section have in common the same navbar (with the game title and the 2 buttons related to the 2 main sections) and the same footer 
where you can find 3 social media links related to my profiles of Instagram, LinkedIN and Facebook 
All the interctive functions are stored in the JS file which contains both JS and jQuery.
The whole webpage is finally styled by a dedicated CSS file.

### Home page

The home page is enterely contained in its own div. It is divided in 2 parts:
    - the article which explains the history and birth of the Hangman game
    - a little box containing the hangman stand drawing and a button that brings the player directly to the game page

### Game page

The game page, as the home one, is contained into its own div and divided in 3 main parts:
    - the game rules
    - the actual game section with:
        - a canvas element where the hangman will be drawn step by step
        - the letter bank which are all buttons that when clicked activates an event listener in JS and runs the related functions
        -the Start button, another event listener that when clicked makes the game begin

## Existing Features

The most important part of this project is the interaction that the user can have with the webpage. Being a game, the user will be part
of the game he/she is playing. The victory or loss depends on the ability of the player in guessing the right word.
When the Start button is clicked, the game chooses one word completely randomly from an array containing many city names.
The word wont be displayed but in its place some underscores will be shown. The underscores number depend on how many letters the word contains.
Every time the player guesses a letter, this will replace the underscore in the exact location.
If the letter is a wrong one, a function will be called and a piece of the hangman will be drawn.
If the user looses, the correct word is completely displayed. 