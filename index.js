/******
 * Brewery App Bootcamp Challenge: create a functioning version of the Simon game.
 * See README for details.
 * *****/

/****** STEP 2 ******
 * Q3: Create a new array that holds the values of the coloured buttons.
 * Q5: Create a new empty array that will hold the randomly generated colours.
 *******************/

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

/****** STEP 4 ******
 * Q3: Create a new empty array that will hold the user clicks.
 *******************/

var userClickedPattern = [];

/****** STEP 7 ******
 * Q1: Use jQuery to detect when a keyboard key has been pressed for the first time.
 *     Call nextSequence() on the first key press.
 * Q2: Create a new variable called level and set to 0.
 * Q3: Change the h1 title from the "Press A Key to Start" to "Level 0".
 *******************/

var level = 0;
var started = false;

$(document).keypress(function () {
    if(!started) {
        nextSequence();
        $("#level-title").text("Level " + level);
        started = true;
    }
});

/****** STEP 4 ******
 * Q1: Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
 * Q2: Inside the handler a new variable will store the id of the button that was clicked.
 * Q4: Add the contents of the userChosenColour to the end of the userClickedPattern array.
 *******************/

$(".btn ").click(function() {
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);

    /****** STEP 5 ******
     * Q4: Play corresponding button sound when user clicks on a button.
    ********************/
    playSound(userChosenColour);
    animatePress(userChosenColour);

    /****** STEP 8 ******
     * Q2: Call checkAnswer after a user has clicked their answer. Pass in the index of
     *     the last answer.
     *******************/
    checkAnswer(userClickedPattern.length - 1);
});

/****** STEP 8 ******
 * Q1: Create a new checkAnswer() that takes a parameter of currentLevel.
 *******************/

function checkAnswer(currentLevel) {
    var wrongAns = new Audio("sounds/wrong.mp3"); // Part of STEP 9

    /****** STEP 8 ******
     * Q3: Write an if statement to check if the most recent answer is the same as the gamePattern.
     * Q4: Within this if statement write a new one that check that user has finished their sequence.
     * Q5: Call nextSequence() after 1000 millisecond delay.
     *******************/

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        /****** STEP 9 ******
         * Q1: Play wrong.mp3 if the user gets an answer wrong.
         * Q2: game-over CSS class is applied to the whole body for 200 milliseconds.
         * Q3: Change the h1 title to say "Game Over, Press Any Key to Restart".
         *******************/
        wrongAns.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        /****** STEP 10 ******
         * Q2: Call the startOver() function.
         *******************/
        startOver();
    }
}


// STEP 2 Q1: Create a new function called nextSequence()
function nextSequence() {

    /****** STEP 8 ******
     * Q6: When triggered, reset the userClickedPattern array to an empty array.
     *     Read for the next level.
     *******************/
    userClickedPattern = [];

    /****** STEP 7 ******
     * Q4: Increase the variable level by 1 every time nextSequence() is called.
     * Q5: Update the h1 tag with the change of the level value.
     *******************/
    level++;
    $("#level-title").text("Level " + level);

    /****** STEP 2 ******
     * Q2: Create a variable that generates a random number between 0 and 3.
     * Q4: Uses randomNumber to select a random colour from the buttonColour array.
     * Q6: Adds the new random colour to the end of the gamePattern array.
     *******************/

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    /****** STEP 3 ******
     * Q1: Use jQuery to select the button with the same ID as randomChosenColour.
     * Q2: Animates a flash to the chosen button.
     * Q3: Play the corresponding sound file to the button randomly selected (call back).
     *******************/

    $("randomChosenColour").ready(function nextSequence() {
        if(randomChosenColour === "green") {
            $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            playSound(randomChosenColour);
        } else if (randomChosenColour === "red") {
            $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            playSound(randomChosenColour);
        } else if (randomChosenColour === "yellow") {
            $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            playSound(randomChosenColour);
        } else {
            $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            playSound(randomChosenColour);
        }
    });
}

/****** STEP 3 ******
 * Q3: Play the corresponding sound file to the button randomly selected.
 *******************/

function playSound(event) {
    switch(event) {

        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;

        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;

        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;

        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;

        default: console.log("no case");
    }
}

/****** STEP 6 ******
 * Q1: Create a new function called animatePress() with the parameter currentColour.
 * Q3: Use jQuery to add the CSS pressed class to the button that gets clicked.
 * Q4: Remove the class after 100 milliseconds.
 *******************/

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

/****** STEP 10 ******
 * Q1: Create a new function called startOver()
 * Q3: Reset the level, gamePattern and started variables if this function is called.
 *******************/
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
