//total trivia requirements======================================
// 1. multiple choice or true/fals questions
// 2. the quiz is timed
// 3. user response may only be one answer
// 4. at the end of the game show the number of correct responses
// 5. link to your portfolio

//app flow=======================================================
//1. the user will see a begin button when the page loads
//2. a question will be displayed with answers
//3. a submit button will be availble to check the response against an answer
//4. the system will present feedback on the answer's accuracy and will keep track of right and wrong replies
//5. when all questions have been answered an alert will provdie the overall scored and the game may be replayed

// ==========================================================================================
// Setting variables -- content to be real later
// ==========================================================================================

//questions
var questionArray = [ 

    {
    question: "Which fruit tastes like a blueberry?",
    choices: ["Apples ", "Pears ", "Blueberries ", "Watermelon "],
    correct: 2,
}, {
    question: "What is the highest number?",
    choices: [300, 50, 451, 900],
    correct: 3,
}];

//counts
var currentQuestion; //tracks the index of questionArray so we can display the right question/answer
var correctCounter; //counts number of correct guesses
var wrongCounter; //counts number of wrong guesses
var noneCounter; //counts number of time-out questions

//response to guesses
var feedback = {
    positive: "You are correct!",
    negative: "You are incorrect!",
    timeout: "You are out of time!",
}

//timer values
var timerRunning = false;
var time = 15;

// QA our vars
console.log(questionArray.length)
console.log(questionArray[0])
console.log(questionArray[1])
console.log(feedback)

// Here we present the intro to the game
// ==========================================================================================
$(document).ready(function () {

    // hide the game space before user begins game
    $("#questions").hide();
    $("#answers").hide();
    $("#gameOver").hide();

// Here we begin the game play when the user clicks the "begin" button
// ==========================================================================================

    $("#startGame").click(function() {  //onclick
        $("#hideJumbotron").hide();     //hide the intro to the game and "start" button
        $("#questions").show();         //show the question to the user
        $("#question").html("stuff")    //QC line to be removed
        currentQuestion = 0;            //set the current question to the first question
        getQuestion();                 //call the game play function
    });

// Display Question
// ==========================================================================================

        function getQuestion () {                                      //retrieve a quesiton from the array of questions
        $("#question").html(questionArray[currentQuestion].question);   //using the currentQuestion from "startGame" click
        for (var i = 0; i < 5; i++) {                                   //iterate through object to get and display all choices
            $("#choices").text(questionArray[currentQuestion].choices); //need to enable radio buttons or word clicks                                                              
        }
        startTimer();
        if(time==0) {
            
        }
    }

// Display Results
// ==========================================================================================



// Timer Functions
// ==========================================================================================
   function startTimer () {
       timerRunning = true;
       time--;
       $("#timer").text(time);
   }

   function stopTimer () {
    timerRunning = false;
}


// Restart Function
// ==========================================================================================
    
function restart() {
    $("#questions").show();
    $("#hideJumbotron").hide();
    getQuestions();
    }

// Calling a function for test
// ==========================================================================================
    
    //restarts the game
    $("#gameOver").click(function() {
        restart();
    });

//  $('#myAlert').on('closed.bs.alert', function () {do something…})








})