//this ensure we use strict coding like var variablename
//not strict coding then one could create variables without var
//tells browser to not run loose code
//the eslinter will check code based on the file type. like it will check for html code in this file.
//but it doesn't check for JS code since it is in html
'use strict';

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
