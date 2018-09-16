'use strict';

var totalAllQuestionsRight = 0;

//******functions********//
//ask user name
var getName = function() {

    var userName = prompt('Greetings and Salutations, what do you call yourself?');
    alert("Nice to meet you, " + userName);
    console.log('User\'s name: ' + userName)
}

//ask Gender question, answer: No
var getGenderAnswer = function() {
    var genderAnswer = prompt('Am I a male?');

    //from class review, it is suggested to assign the .toUpperCase to a varialble to use that in the if statement so the code looks cleaner
    if (genderAnswer.toUpperCase() === 'YES' || genderAnswer.toUpperCase() === 'Y') {
        alert('Good try, but I am a female');
    } else if (genderAnswer.toUpperCase() === "NO" || genderAnswer.toUpperCase() === 'N') {
        alert('Good job, I am a female');
        totalAllQuestionsRight++;
        console.log('Q1 ' + totalAllQuestionsRight);
    } else {
        alert('That was not a "yes" or "no" answer');
    }
    console.log('User\'s answer to if I am a male: ' + genderAnswer)
}

//ask food question, answer: Yes
var getFoodAnswer = function() {
    var foodAnswer = prompt('Do I love chinese food?');
    if (foodAnswer.toUpperCase() === 'YES' || foodAnswer.toUpperCase() === 'Y') {
        alert('Yes, I LOOOOOVE Chinese food');
        totalAllQuestionsRight++;
        console.log('Q2 ' + totalAllQuestionsRight);
    } else if (foodAnswer.toUpperCase() === "NO" || foodAnswer.toUpperCase() === 'N') {
        alert('Good try, maybe I can introduce you to some delicious chinese food');
    } else {
        alert('That was not a "yes" or "no" answer');
    }
    console.log('User\'s answer to if I love Chinese food: ' + foodAnswer)
}

//ask 301 class question, answer: No
var getClassAnswer = function() {
    var classAnswer = prompt('Am I taking Code Fellows 301?');
    if (classAnswer.toUpperCase() === 'YES' || classAnswer.toUpperCase() === 'Y') {
        alert('Good try, but we are still in 201');
    } else if (classAnswer.toUpperCase() === "NO" || classAnswer.toUpperCase() === 'N') {
        alert('Good job, we are in 201');
        totalAllQuestionsRight++;
        console.log('Q3 ' + totalAllQuestionsRight);
    } else {
        alert('That was not a "yes" or "no" answer');
    }
    console.log('User\'s answer to 301 class: ' + classAnswer)
}

//ask python questions, answer: Yes
var getPythonAnswer = function() {
    var pythonAnswer = prompt('Do I want to take Python');
    if (pythonAnswer.toUpperCase() === 'YES' || pythonAnswer.toUpperCase() === 'Y') {
        alert('Good job, I do plan on Python 401 at Code Fellows');
        totalAllQuestionsRight++;
        console.log('Q4 ' + totalAllQuestionsRight);
    } else if (pythonAnswer.toUpperCase() === "NO" || pythonAnswer.toUpperCase() === 'N') {
        alert('Good try, but I do plan on Python 401 at Code Fellows');
    } else {
        alert('That was not a "yes" or "no" answer');
    }
    console.log('User\'s answer to python question: ' + pythonAnswer)
}

//ask amazing question, but its not really a question, there is only one right answer ;), answer: yes
var getAmazingAnswer = function() {
    var amazingAnswer = prompt('Am I AMAZING!?!?!?!?');
    if (amazingAnswer.toUpperCase() === 'YES' || amazingAnswer.toUpperCase() === 'Y') {
        alert('Great job, I knew I was amazing and glad others notice too \;\)');
        totalAllQuestionsRight++;
        console.log('Q5 ' + totalAllQuestionsRight);
    } else if (amazingAnswer.toUpperCase() === "NO" || amazingAnswer.toUpperCase() === 'N') {
        alert('Clearly you don\'t know me well enough yet, because I am AMAZING');
    } else {
        alert('That was not a "yes" or "no" answer');
    }
    console.log('User\'s answer to if i am amazing: ' + amazingAnswer)
}

//question 6, guess a number and play too high too low up to 4 times
var guessNumGame = function() {
    var countGuesses = 4;
    var guessedRight = false;

    while (countGuesses > 0) {
        var userGuess = prompt('What is my FAVORITE number? Note: ' + countGuesses + ' guesses left');

        //this is to check there was a guess even done
        while (!userGuess){
            var userGuess = prompt('You need to make a guess of SOMETHING...');
        }

        if (userGuess == 36) {
            alert ('Ta-D!a Confetti! Balloons! You got it, 36 is my favorite number');
            countGuesses = -10; //so i escape the loop
            guessedRight = true; //so i know if I need to tell them the right answer later or not
            totalAllQuestionsRight++;
            console.log('Q6 ' + totalAllQuestionsRight);
        } else if (userGuess > 36) {
            alert ('Good guess, but my favorite number is lower');
        } else if (userGuess < 36) {
            alert ('Good guess, but my favorite number is higher');
        } else {
            alert ('You were supposed to guess a number');
        }
        countGuesses--;
        console.log('users guess ' + userGuess)
        console.log('count guesses ' + countGuesses)
    }

    if (guessedRight==false){
        alert('Good effort, my favorite number is 36');
    }
}

//question 7, has multiple answers, up to 6 guesses, and a comment they got # of # right
var multiGuessGame = function() {
    var countGuessesQ7 = 6;
    var numRight = 0;
    var userArrayCount = 0;
    var userGuessQ7;
    // var userGuessQ7 = prompt('Where is a top destinations of mine? You have 6 guesses, may the odds ever be in your favor');
    var userAnswerArray = [];
    console.log('start user array ' + userAnswerArray);
    var juliesAnswers = ['disneyland','disneyworld','thailand','sweden','japan','vegas','iceland','greenland'];

    //collects users answers and enters it into an array

    do {
        do {
            userGuessQ7= prompt('Where is a top destinations of mine? You have ' + (countGuessesQ7) + ' guesses left');

            userAnswerArray[userArrayCount] = userGuessQ7;
            console.log('user array ' + userAnswerArray);
        } while(!userGuessQ7);
        countGuessesQ7--;
    //console.log(userAnswerArray.length)

    //   for (var i = 1; i < 6; i++) {
        //this is to check there was a guess even done
        // while (!userGuessQ7){
        //     var userGuessQ7 = prompt('You need to make a guess...else Welcome to the INFINITE LOOP OF DOOOOOOOOM...');
        //     userAnswerArray[(i-1)] = userGuessQ7;
        // }

        //compares users answers to real answers
        for (var j=0; j<juliesAnswers.length; j++){
            //console.log('in j loop '+j)
            //console.log('julies guess in j loop ' + juliesAnswers[j])
            if(userGuessQ7.toLowerCase() == juliesAnswers[j]) {
                alert('Great job, ' + userGuessQ7 + ' is one');
                totalAllQuestionsRight++;
                console.log('Q7 ' + totalAllQuestionsRight);
                console.log('julies guess in array in comparison ' + juliesAnswers[j]);
                numRight++;
            } /*else {
               alert('Good try, but ' + userGuessQ7 + ' is not one')
               console.log ('did not match comparison '+ userGuessQ7)
            } */
        }

        console.log('user array ' + userAnswerArray);

    //console.log('users guess ' + userGuessQ7)
    console.log('count guesses ' + countGuessesQ7);
    userArrayCount++;
    } while(countGuessesQ7 > 0);

    //tells them how many right and answers
    if (numRight>0){
    alert('For question 7 of your 6 guesses, you got ' + numRight + ' right out of 8 places');
    alert('The possible answers were: Disneyland or Disneyworld, Thailand, Sweeden, Japan, Vegas, Iceland, Greenland');
    } else {
    alert('The possible answers were: Disneyland or Disneyworld, Thailand, Sweeden, Japan, Vegas, Iceland, Greenland');
    }
    console.log('num right ' + numRight);
}
    //alert('Thank you for taking my quiz you got ' + totalAllQuestionsRight + ' right of 12.');


//*********call functions**********//
getName();

////tell user I am quizzing them
alert("Let's play a game, a guessing game");

getGenderAnswer();
getFoodAnswer();
getClassAnswer();
getPythonAnswer();
getAmazingAnswer();
guessNumGame();
multiGuessGame();

//tell them how they did (12 because 6 questions plus the 6 from my question 7, so 12)
alert('Thank you for taking my quiz you got ' + totalAllQuestionsRight + ' right of 12.');
