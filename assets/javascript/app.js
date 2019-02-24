//total trivia requirements
// 1. multiple choice or true/fals questions
// 2. the quiz is timed
// 3. user response may only be one answer
// 4. at the end of the game show the number of correct responses

//app flow
// 1. when the page loads the user sees the theme and a begin button
// 2. clicking begin triggers several events
        // hide start button
        // first question is presented
        // choices are presented
        // a timer starts
        // a submit button appears
// 3. there are several options for ending
    //an answer is submitted
    //if true then provide a positive feedback and increment the score
    //if false then provide negative feedback and do nothing to the socre
    //if timeup then provide negative feedback and do nothign to the score
// 4. when user has answered all questions trigger an alert with scores

//  $('#myAlert').on('closed.bs.alert', function () {do something…})

// Here are the global variables
// ==========================================================================================

var questionArray = [ 
    {
    question: "What is the best fruit?",
    choices: ["Apples", "Pears", "Blueberries", "Watermelon"],
    correct: 2,
}, {
    question: "What is the highest number?",
    choices: [300, 50, 451, 900],
    correct: 3,
}];

var currentQuestion; //the question to answer
var totalQuestions = questionArray.length; //gets the array length
var answeredCounter; //counts total number of questions answered
var correctCounter; //counts number of correct guesses
var wrongCounter; //counts number of wrong guesses
var noneCounter; //counts number of time-out questions
var feedback = {
    positive: "You are correct!",
    negative: "You are incorrect!",
    timeout: "You are out of time!",
}

console.log(totalQuestions)
console.log(questionArray[0])
console.log(questionArray[1])

// Here we present a start button and the theme
// ==========================================================================================
$(document).ready(function () {

    // hide the game space before user begins game
    $("#questions").hide();
    $("#answers").hide();
    $("#gameOver").hide();
    
    //display game space when users clicks begin
    $("#startGame").click(function() {
        restart();
    });


// Here are some functions
// ==========================================================================================
    
    //function to restart the game
    function restart() {
        $("#questions").show();
        $("#hideJumbotron").hide();
        currentQuestion = 0; //reads the index
        totalQuestions = 0;
        answeredCounter = 0;
        correctCounter = 0;
        wrongCounter = 0;
        noneCounter = 0;
        getQuestions();
    }

    //function to play the game

        function getQuestions () {
        $("#question").html(questionArray[currentQuestion].question);
        
        for (var i = 0; i < 5; i++) {
            $("#choices").text(questionArray[currentQuestion].choices);
        }
    }

// Here are some function calls
// ==========================================================================================
    
    //restarts the game
    $("#gameOver").click(function() {
        restart();
    });










})