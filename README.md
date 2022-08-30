# The Simon Game Challenge

This is my solution for Udemy's and App Brewery's Web Development Bootcamp [Simon Game Challenge](https://www.udemy.com/course/the-complete-web-development-bootcamp/). The goal of this challenge is to use JavaScript and jQuery to recreate [this version of the Simon Game](https://londonappbrewery.github.io/Simon-Game/). 

## Table of Contents
- [Overview](#overview)
- [Step 1](#step-1)
- [Step 2](#step-2)
- [Step 3](#step-3)
- [Step 4](#step-4)
- [Step 5](#step-5)
- [Step 6](#step-6)
- [Step 7](#step-7)
- [Step 8](#step-8)
- [Step 9](#step-9)
- [Step 10](#step-10)

## Overview
The following shows the instructions I was given for this challenge. Instructions highlighted blue represemt which steps are applicable to my final solution. The external JS solution file is annotated. 

## Step 1

Our game logic will be created inside an external Javascript file.

1. Create a new file called **game.js**

2. Link to this new external JS file from your **index.html**

3. Add an **alert** to game.js and test that the alert gets triggered when you load up index.html in Chrome.

4. Add jQuery to your website and test that it's successfully loaded by opening Chrome developer tools and typing `$("h1")`

## Step 2
1. Inside **game.js** create a **new function** called `nextSequence()`

2. **Inside** the new function generate a new **random number** between **0** and **3**, and store it in a **variable** called `randomNumber`

3. At the top of the **game.js** file, create a new **array** called `buttonColours` and set it to hold the sequence `"red", "blue", "green", "yellow"`.

4. Create a new variable called `randomChosenColour` and use the `randomNumber` from step 2 to select a random colour from the `buttonColours` array.

5. At the top of the **game.js** file, create a new empty array called `gamePattern`.

6. Add the new `randomChosenColour` generated in step 4 to the end of the `gamePattern`.

## Step 3
1. Use jQuery to select the button with the same id as the `randomChosenColour`

2. Use Google/Stackoverflow to figure out how you can use **jQuery** to animate a flash to the button selected in step 1. 

3. Use Google/Stackoverflow to figure out how you can use **Javascript** to **play the sound** for the button colour selected in step 1. 

## Step 4
1. Use **jQuery** to detect when any of the buttons are **clicked** and trigger a **handler function**.

2. **Inside** the handler, create a new variable called `userChosenColour` to store the **id** of the button that **got clicked**.

--> So if the Green button was clicked, `userChosenColour` will equal its **id** which is `"green"`.

3. At the top of the **game.js** file, create a new **empty** array with the name `userClickedPattern`.

4. Add the contents of the variable `userChosenColour` created in step 2 to the end of this new `userClickedPattern`

At this stage, if you log the `userClickedPattern` you should be able to build up an array in the console by clicking on different buttons.

## Step 5
1. In the same way we played sound in `nextSequence()`, when a user **clicks on a button**, the corresponding sound should be played. e.g if the Green button is clicked, then green.mp3 should be played.

2. Create a new function called `playSound()` that takes a single input parameter called `name`.

3. Take the code we used to play sound in the `nextSequence()` function and move it to `playSound()`.

4. Refactor the code in `playSound()` so that it will work for both playing sound in `nextSequence()` and when the user **clicks a button**. 

## Step 6
1. Create a new function called `animatePress()`, it should take a single input parameter called `currentColour`.

2. Take a look inside the **styles.css** file, you can see there is a class called "`pressed`", it will add a box shadow and changes the background colour to grey. 

3. Use **jQuery** to add this `pressed` class to the button that gets clicked inside `animatePress()`.

4. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds. 

## Step 7
1. Use **jQuery** to detect when a **keyboard key** has been pressed, when that happens for the first time, call `nextSequence()`.

You'll need a way to keep track of whether if the game has started or not, so you only call `nextSequence()` on the first keypress.

2. Create a new variable called `level` and start at level **0**.

3. The **h1** title starts out saying **"Press A Key to Start"**, when the game has started, change this to say **"Level 0".**

4. Inside `nextSequence()`, **increase** the **level** by **1** every time `nextSequence()` is called.

5. Inside `nextSequence()`, **update** the **h1** with this change in the value of level.

## Step 8
1. Create a new function called `checkAnswer()`, it should take one input with the name `currentLevel`

2. Call `checkAnswer()` after a user has clicked and chosen their answer, passing in the **index of the last answer** in the user's sequence.

e.g. If the user has pressed **red, green, red, yellow**, the index of the last answer is **3**.

3. Write an **if statement** inside `checkAnswer()` to check if the most recent user answer is the same as the game pattern. If so then **log** "`success`", otherwise **log** "`wrong`".

You can now use these log statements along with logging the values of `userClickedPattern` and `gamePattern` in the **Chrome Developer Tools** console to check whether if your code is performing as you would expect and **debug** your code as needed. Once you're done, feel free to remove these log statements.

4. If the user got the most recent answer **right** in step 3, then check that they have finished their sequence with another if statement.

5. Call `nextSequence()` after a **1000 millisecond** delay.

6. Once `nextSequence()` is triggered, reset the `userClickedPattern` to an **empty array** ready for the next level.

## Step 9
1. In the **sounds** folder, there is a sound called **wrong.mp3**, **play this sound** if the user got one of the answers **wrong**.

2. In the **styles.css** file, there is a **class** called "`game-over`", apply this class to the body of the website when the user gets one of the answers **wrong** and then **remove** it after **200 milliseconds**.

3. Change the **h1** title to say "`Game Over, Press Any Key to Restart`" if the user got the answer wrong.

## Step 10
1. Create a new function called `startOver()`.

2. Call `startOver()` if the user gets the sequence **wrong**.

3. Inside this function, you'll need to **reset** the values of `level`, `gamePattern` and `started` variables.
