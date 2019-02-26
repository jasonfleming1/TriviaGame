//interaction requirements
//================================================================

// 1. On page load set a function that shows the theme and a start button
// 2. When start is clicked present the first question
// 3a. If timeup then show the correct answer and present the next question
// 3b. If submit a guess capture the user's guess, compare to answer, show correct answer and present the next question
// 4. Repeat 3a and 3b until currentQ = quizLength. 
// 5. when currentQ = quizlength then show final stats to user 

//functions needed
//================================================================
// 1. a function that gets + shows question, choices, starts question timer, and a submit button
// 2. a timer function for question display duration
// 3. a timer function for answer display duration
// 4. a reset game function

//events that trigger values pseudocode
//================================================================
// 1. what displays the first question and answer
// 2. what captures the response 
// 3. what evalutates the response to the correct answer
// 4. when do we display the answer
// 5. when do we compare current question to quiz length
// 6. when do we know to show the result

//game vars
//================================================================

var questionArray = [ 
    {
    question: "Which fruit tastes like a blueberry?",
    choices: ["Apples ", "Pears ", "Blueberries ", "Watermelon "],
    correct: "Blueberries",
}, 
    {
    question: "What is the best?",
    choices: ["Hot dogs ", "Pizza ", "Popcorn ", "My Answer"],
    correct: "My Answer"
},
    {
    question: "Why are you here",
    choices: ["Lonely ", "Bored ", "Sad ", "Happy "],
    correct: "Sad"
}];

//quiz controls
var quizLength = questionArray.length; //number quiz questions
var currentQ = 0; //current question user is guessing 
var questionTimer = 20; //duration to display questions
var answerTimer = 6; //display answer duration
var correct = 0; //holds correct guesses
var wrong = 0; //holds wrong guesses
var responseCorrect = "You are Correct!"; //correct guess response
var responseWrong = "You are Wrong!"; //incorrect guess response
var timesUp = "Time is Up!"; //timer is at 00 response

//var qc==>

console.log("Quiz duration is " + quizLength + "questions");
console.log(currentQ)
console.log(questionTimer)
console.log(answerTimer)
console.log(correct);
console.log(wrong);

//game
//================================================================

$(document).ready(function () {

    // hide the game space before user begins game
    $("#questions").hide();
    $("#answers").hide();
    $("#gameOver").hide();

    // start the game

    $("#startGame").click(function() {  //onclick
        $("#hideJumbotron").hide();     //hide the intro to the game and "start" button
        $("#questions").show();         //show the question to the user
        $("#question").html("stuff")    //QC line to be removed
        currentQuestion = 0;            //set the current question to the first question
        getQuestion();                 //call the game play function
    });

    // present the questions
    
});
