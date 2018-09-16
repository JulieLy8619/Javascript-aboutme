# aboutme
about me from class 2 091018
******************************************
9-11-18 this lab 2 for CF 201
We are to create an "about me" page

Instructions for this lab:
User Stories for "About Me" (MVP)
("MVP" = "Minimum Viable Product" which is the most basic successful functionality of our project. Extensions, added features, and other enhancements fall under the category of "Stretch Goals.")

This is our first exposure to user stories. This is a device commonly used in software development to identify what the functionality and design of a product should be by considering the interests and motivations of people with varied multiple points of view.

User stories typically take the form of, "As X, I want Y, so that Z" but do not necessarily need that structure.

As a student, I want to create an About Me page as a demonstration of my skills with HTML.
As an eventual jobseeker, I want to get practice in creating a portfolio page so that I can make myself appealing to potential employers.
As an eventual jobseeker, I would like for potential employers to quickly learn a few things about me, such as a short bio, my education, an overview of my job experience, and my goals.
As a fun-loving human being, I want to give the visitors to my About Me page a guessing game that shows how fun-loving and interesting I am, and maybe include things about myself that would not ordinarily appear in a portfolio page.
As a developer, I want to use markup to structure my index.html page, so the layout is in the order of assembly I prefer, with effective use of the markup possibilities offered by HTML.
As a developer, I want to carefully design my scripts, so I can understand how to organize and write my code to achieve my goals in interactivity.
As a developer, I want to create a simple script for my index.html page using JavaScript, so that I can use the browser to send a response to the user.
As a developer, I want to receive and use the user's name, so that the program is personalized to their experience.
As a developer, I want to provide five questions to the user, so that they can guess the answers and get to know me.
As a developer, I want to notify the user after each question, so they are aware whether they were correct or not in their answers.
As a developer, I want to be able to debug my code by using well structured console messages.
As a developer, I want to manage my code through an online version control system, so I have the ability to work with others, manage my revisions, and keep a thorough record of my progress. 
Technical Requirements for "About Me" Follow the instructions in the adjacent "Setting Up a New Code 201 Project" document.
HTML, CSS, and JavaScript must be cleanly written with correct indentation and syntax. Look at examples online and in your textbook. Note that your JS must pass the rules in the linter that we installed.
Your JS file must contain a 'use strict' declaration at the top. Always.
Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have.
Follow the Add, Commit, Push process. It should be evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.
*************************************************
09-13-18 lab 3 added to what we did for lab 2
Assignment Overview: Lab 3
For this lab we will be adding a few things to the work we've done so far. Use the User Stories and the Technical Requirements to make a plan for how to proceed. Assume that all user stories from the previous lab carry over, except for the ones that are modified or are superseded here.

It can be very handy to take notes and sketch things out when you are planning your project and the code within it.

User Stories (MVP... what you must do as a minimum)
As a developer, I want to use thoughtful and descriptive console.log() statements throughout my code to help test my work and assist with debugging.
As a developer, I want to convert some of my appropriate biographical elements into unordered lists, such as my education summary and/or my work experience.
As a developer, I want to consider the user experience (UX) of my About Me and guessing game, trying to view it through the eyes of a user. Wait... maybe I should just write a user story for that...
As an end user of the About Me and guessing game, I want to have an informative, interesting, and fun experience in learning about the developer.
As a prospective job seeker, I want to consider adopting additional features that I have seen in the 'About Me' projects made by others, so that my 'About Me' can become more thorough and interesting than my original conception.
As a prospective job seeker, I want to make myself more personable by adding a Top Ten list to the bottom of my About Me page with an ordered list in HTML, for instance, my Top Ten Favorite Movies or my Top Ten Places I Want to Visit, or something along those lines.
As a prospective job seeker, I was to use CSS to creatively and tastefully style and layout my page.
As a prospective job seeker, I want to have five yes/no questions in my "about me" guessing game so that I have enough questions to cover a variety of things about me.
As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch this week?"), and indicates to the user whether the guess is "too high" or "too low", and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.
As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array (for instance, "Can you guess a state that I have lived in besides Washington?"), so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.
As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."
User Stories (Stretch goals... not required!)
As a developer, I want to make my code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions in my guessing game into arrays (or even one huge multidimensional array), and modifying the game logic such that a 'for' loop will control the flow from question to question.
Make the number-guessing question use a random number as its correct answer.
Move the guessing game to a separate HTML file, list the questions on the page, and then have the answers fill in on the page after the user provides the answers.
Technical Requirements
Per the user stories, you will need to include in your HTML at least one each of an ordered and an unordered list.
Use promptfor input and alert for output to the user, unless you are working on the third Stretch Goal.
Do not write any functions in your JavaScript.
Expect that you will probably need both 'for' and 'while' structures for your sixth and seventh questions. But not necessarily.
Submitting Your Assignment
Submit the link to your GitHub repo for this project.
Add a comment to this Canvas submission with answers to the following questions.
How did this go, overall?
What observations or questions do you have about what you've learned so far?
*********************************
9-15-18 jl lab 4, pair programming. Skylar Burger was my partner and helped me think through code too (because we had to re-arrange the order of the code to accomedate the actual request of the hw assignment)

Assignment Overview: Lab 4
Today will be your first exercise in pair programming. You will be assigned to work with a partner, and the two of you will work on and extend each other's About Me guessing game projects. Be sure to read and follow these instructions very carefully.

Since you have 4 hours in which to edit two projects, you'll need to work efficiently and limit your work to two hours on a single person's project. Time management is critical.

Pair Programming Basics
In pair programming, there are two developers working on a single body of code on a single computer.
One member of the pair is the Driver, and this person will be the one doing all of the actual typing work on the laptop. The Driver will be working on the Navigator's code by way of forking and cloning the Navigator's repository.
The other member of the pair is the Navigator, and this person will work with only their voice and their thoughts.
The Navigator does not touch the keyboard, nor does the Navigator work on their laptop "on the side". The Navigator is fully engaged with the work that the pair is doing, typically using a piece of scratch paper to sketch diagrams, take notes, or list ideas. At most the Navigator uses their laptop to perhaps keep a copy of this assignment document open or to look up something needed to write the code, such as a reference page like MDN.
Under no circumstances does the Navigator work on any code on their laptop: for the pair programming process to be effective, both parties must be fully engaged on the code they're working on together.
The lab time should be divided into two sections of approximately two hours each. At the halfway mark, you should swap roles and work on the other person's code. Remember to watch the clock and determine the best point to swap roles.
In the case of an odd number of students, one group will have three members and you should rotate through three roles: Driver, Navigator, Observer. Each person should take on each role one time. You will need to be even more mindful about watching the clock to ensure that equal time is devoted to all three projects.
General Workflow for this Assignment
Your pair will extend and refine each other's projects today. The person whose site is currently being worked on will be in the Navigator role, and the other person will be the Driver. Once starting work in lab, plan to spend an hour or two on one person's site, and then swap roles.
How To Get Code Ready For Work
Be sure to follow these instructions VERY carefully.

Note: Before starting these steps, make sure that both of your repositories are 'clean': in other words, everything is committed and pushed so that both the remote and local versions of your projects are in sync. This will prevent potential problems later.

Decide whose code you will work on first. The owner of that code (who will be the Navigator) provides the link to their GitHub repo to the other member of the pair (who will be the Driver). You can send this link over Slack, spell it verbally, or by carrier pigeon.

The Driver follows the link to that repo and creates a fork of the repo in GitHub like we did in class.

The Driver then goes to their fork of the repo (the URL should have the Driver's GitHub name in it) and copies the HTTPS link to that repo (the link have the Driver's GitHub name in it and should end in .git).

Inside of the Driver's main work directory on their laptop, make a directory with your partner’s name and then navigate (cd) into it. From there, enter the command git clone the-https-link-you-copied. That will create a local version of the forked repo on the Driver's laptop.

cd into that directory and enter code . in the terminal to open all of the files in VSCode.

Start working on the code!

Extend and Refine
You'll be making some edits to each other's sites. After each bit of work is completed (in other words, after each successful modification of a single question), be sure to do an add-commit-push cycle (a-c-p) to place the code on GitHub and preserve a versioned history of your work.

Move the logic for all questions into functions: Today we learned about functions, and now we'll move the logic for the individual questions into separate functions, and call those functions to run the game.

In its most basic sense, this is pretty simple and straightforward: 'wrap' the logic and variables for a given question with function someFuncNameYouChoose() { at the beginning, and add a closing curly brace } at the end. To make the function execute, just call it afterwards: someFuncNameYouChoose(); After completing this step the game should behave exactly as it did before. a-c-p

Update the README file: In the README file, add in the names of the Driver and Navigator and indicate that the code was worked on together. This is basic record-keeping so that you can keep up with how the code has been edited in a user-friendly format. a-c-p

Push to GitHub; Make a Pull Request
Once everything is finished, and the Driver has done the last edits and pushed them to GitHub, it's time to send the edited code to the owner (who has been in the Navigator role the whole time, of course). We do this with a GitHub feature called a Pull Request, which we generally refer to as a PR.

From the Driver's repo that is a fork of the Navigator's repo, hit the green button that says 'Create pull request'.

Follow the remaining steps as described onscreen and as shown here: https://help.GitHub.com/articles/using-pull-requests. (These instructions for doing a pull request from a forked repo to its source are deliberately vague, to give you practice in reading through instructions, trying things out, solving problems collaboratively, and getting guidance from documentation).

The owner of the code (the Navigator) then goes to their GitHub repo for the project and accepts the pull request. After that, in terminal on their laptop, while in the game directory, enter the command 'git pull origin master' to retrieve the modified code from GitHub.

When everything is finished for one person's project, submit the links for the last pull request made from the Driver to the Navigator (in both cases) in the Canvas assignment.

Stretch Goals (not required; only if your pair is feeling ambitious, and only after everything above, including the first PR, is completed)
Stretch Goal #1 (pair programming): For the five yes/no questions, your questions, the correct answers, and the two possible responses should be moved into three separate arrays. (The same applies if you've added in any other pieces to the questions besides the most basic structure.) Once this is done you can replace that content in the functions by accessing the arrays. If you have already done this, but with a similar architecture, that is fine. a-c-p

Stretch Goal #2 (pair programming): Depending upon time: If you have time, reduce the yes/no questions from five functions to one function, and then use a 'for' loop to iterate through the arrays and call the function for each question. a-c-p

Stretch Goal #3 (pair/solo): If you still want to work on some stuff together, explore each other's CSS and talk about how it is organized and what it is doing. Then feel free to adapt your CSS based on what you saw in your partner's code. This does not need to be pair-programmed.
