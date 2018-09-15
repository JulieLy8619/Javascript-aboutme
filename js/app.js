'use strict';
//self notes about this statement: (will not be in future programs)
//this ensure we use strict coding like var variablename
//not strict coding then one could create variables without var
//tells browser to not run loose code
//the eslinter will check code based on the file type. like it will check for html code in this file.
//but it doesn't check for JS code since it is in html


/* 9-13-18 JUST COMMENTING THIS OUT FOR NOW FOR TESTING 
//ask user name
var userName = prompt('Greetings and Salutations, what do you call yourself?');
alert("Nice to meet you, " + userName);
console.log('User\'s name: ' + userName)

//tell user I am quizzing them
alert("Let's play a game, a guessing game");

//ask Gender question, answer: No
var genderAnswer = prompt('Am I a male?');

//from class review, it is suggested to assign the .toUpperCase to a varialble to use that in the if statement so the code looks cleaner
if (genderAnswer.toUpperCase() === 'YES' || genderAnswer.toUpperCase() === 'Y') {
    alert('Good try, but I am a female');
} else if (genderAnswer.toUpperCase() === "NO" || genderAnswer.toUpperCase() === 'N') {
    alert('Good job, I am a female');
} else {
    alert('That was not a "yes" or "no" answer');
}
console.log('User\'s answer to if I am a male: ' + genderAnswer)

//ask food question, answer: Yes
var foodAnswer = prompt('Do I love chinese food?');
if (foodAnswer.toUpperCase() === 'YES' || foodAnswer.toUpperCase() === 'Y') {
    alert('Yes, I LOOOOOVE Chinese food');
} else if (foodAnswer.toUpperCase() === "NO" || foodAnswer.toUpperCase() === 'N') {
    alert('Good try, maybe I can introduce you to some delicious chinese food');
} else {
    alert('That was not a "yes" or "no" answer');
}
console.log('User\'s answer to if I love Chinese food: ' + foodAnswer)

//ask 301 class question, answer: No
var classAnswer = prompt('Am I taking Code Fellows 301?');
if (classAnswer.toUpperCase() === 'YES' || classAnswer.toUpperCase() === 'Y') {
    alert('Good try, but we are still in 201');
} else if (classAnswer.toUpperCase() === "NO" || classAnswer.toUpperCase() === 'N') {
    alert('Good job, we are in 201');
} else {
    alert('That was not a "yes" or "no" answer');
}
console.log('User\'s answer to 301 class: ' + classAnswer)

//ask python questions, answer: Yes
var pythonAnswer = prompt('Do I want to take Python');
if (pythonAnswer.toUpperCase() === 'YES' || pythonAnswer.toUpperCase() === 'Y') {
    alert('Good job, I do plan on Python 401 at Code Fellows');
} else if (pythonAnswer.toUpperCase() === "NO" || pythonAnswer.toUpperCase() === 'N') {
    alert('Good try, but I do plan on Python 401 at Code Fellows');
} else {
    alert('That was not a "yes" or "no" answer');
}
console.log('User\'s answer to python question: ' + pythonAnswer)

//ask amazing question, but its not really a question, there is only one right answer ;), answer: yes
var amazingAnswer = prompt('Am I AMAZING!?!?!?!?');
if (amazingAnswer.toUpperCase() === 'YES' || amazingAnswer.toUpperCase() === 'Y') {
    alert('Great job, I knew I was amazing and glad others notice too \;\)');
} else if (amazingAnswer.toUpperCase() === "NO" || amazingAnswer.toUpperCase() === 'N') {
    alert('We\'re not going to be good friends, we can change that still');
} else {
    alert('That was not a "yes" or "no" answer');
}
console.log('User\'s answer to if i am amazing: ' + amazingAnswer)

//question 6, guess a number and play too high too low up to 4 times
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
    } else if (userGuess > 36) {
        alert ('Good guess, but my favorite number is lower');
    } else if (userGuess < 36) {
        alert ('Good guess, but my favorite number is higher');
    } else {
        alert ('You need to guess a number');
    }
    countGuesses--;
    console.log('users guess ' + userGuess)
    console.log('count guesses ' + countGuesses)
}

if (guessedRight==false){
    alert('Good effort, my favorite number is 36');
}

*/

//question 7, has multiple answers, up to 6 guesses, and a comment they got # of # right
var countGuessesQ7 = 6;
var numRight = 0;
var userGuessQ7 = prompt('Where is a top destinations of mine? You have 6 guesses, may the odds ever be in your favor');
var userAnswerArray = [userGuessQ7];
console.log('user array ' + userAnswerArray)

//collects users answers and enters it into an array
for (var i = 1; i < 6; i++) {
    //this is to check there was a guess even done
    while (!userGuessQ7){
        var userGuessQ7 = prompt('You need to make a guess...else Welcome to the INFINITE LOOP OF DOOOOOOOOM...');
        userAnswerArray[(i-1)] = userGuessQ7;
    }

    userGuessQ7= prompt('Where is a top destinations of mine? You have ' + (countGuessesQ7-1) + ' guesses left');
    userAnswerArray[i] = userGuessQ7;
    //console.log(userAnswerArray.length)
    console.log('user array ' + userAnswerArray)
    countGuessesQ7--;
    console.log('users guess ' + userGuessQ7)
    console.log('count guesses ' + countGuessesQ7)
}

//compares users answers to real answers
var juliesAnswers= ['disneyland','disneyworld','thailand','sweeden','japan','vegas','iceland','greenland']
for (var j=0; j<juliesAnswers.length; j++){
    //console.log('in j loop '+j)
    //console.log('julies guess in j loop ' + juliesAnswers[j])
    for (var k=0; k<userAnswerArray.length; k++){
        //console.log('in k loop '+k)
        //console.log('users guess in k loop ' + userAnswerArray[k])
        //console.log('julies guess in jk loop ' + juliesAnswers[j])
        if(userAnswerArray[k].toLowerCase() == juliesAnswers[j]) {
            console.log('users guess in array in comparison ' + userAnswerArray[k])
            console.log('julies guess in array in comparison ' + juliesAnswers[j])
            numRight++;
        }
    }
}


//tells them how many right and answers
if (numRight>0){
    alert('You got ' + numRight + ' right out of 6');
    alert('The possible answers were: Disneyland or Disneyworld, Thailand, Sweeden, Japan, Vegas, Iceland, Greenland');
} else {
    alert('The possible answers were: Disneyland or Disneyworld, Thailand, Sweeden, Japan, Vegas, Iceland, Greenland');
}
console.log('num right ' + numRight)
