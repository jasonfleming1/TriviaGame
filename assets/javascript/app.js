//global variab les
//================================================================

var questionArray = [
    {
        question: "Which fruit tastes like a blueberry?",
        choices: ["Apples ", "Pears ", "Blueberries ", "Watermelon "],
        correct: 2,
        correctText: "The correct answer is blueberries!",
        correctImage: "I didn't make it this far"
    },
    {
        question: "What is the best?",
        choices: ["Hot dogs ", "Pizza ", "Popcorn ", "My Answer"],
        correct: 3,
        correctText: "The correct answer is My Answer!",
        correctImage: "I didn't make it this far"
    },
    {
        question: "Why are you here",
        choices: ["Lonely ", "Bored ", "Sad ", "Happy "],
        correct: 2,
        correctText: "The correct answer is Sad!",
        correctImage: "I didn't make it this far"
    }];

//canned responses
var correct = "Great job ";
var incorrect = "Too bad ";
var timeIsUp = "Time has expired ";

//quiz controls
var quizLength = questionArray.length; //number quiz questions
var currentQ = 0; //current question user is guessing
var countCorrect = 0; //holds correct guesses
var countWrong = 0; //holds wrong guesses
var noResponse = 0; //holds no response counts

//timers

var time;
var seconds;

//var qc
console.log("Quiz duration is " + quizLength + " questions")
console.log(questionArray)

//GAME PLAY
//================================================================

$(document).ready(function () {

    //Showing the theme and intro page
    $("#timerBlock").hide();
    $("#questionBlock").hide();
    $("#choicesBlock").hide();
    $("#answerBlock").hide();
    $("#timerBlock2").hide();
    $("#gameOver").hide();

    //Clicking start retreives the first question and answer
    $("#startGame").click(function () {
        $("#hideJumbotron").hide();
        currentQ = 0;
        getQuestion();
    });

    //Game play
    //================================================================

    //Here we retrieve a question from our questions object
    function getQuestion() {
        $("#timerBlock").show();
        $("#questionBlock").show();
        $("#choicesBlock").show();
        $("#timerBlock2").hide();
        $("#answerBlock").hide();
        $("#gameOver").hide();
        $("#question").html(questionArray[currentQ].question);
        questionTimer();
   
        //Here we retrieve the answers from our questions object
        for (var i = 0; i < questionArray[currentQ].choices.length; i++) {
            var theChoice = $("<button>");
            theChoice.text(questionArray[currentQ].choices[i]);
            theChoice.attr({ "data-index": i });
            theChoice.addClass("isSelected");
            $("#choices").append(theChoice);
        }

        //Here a user can make a selection
        $(".isSelected").on("click", function () {
            userChoice = $(this).data("index");
            clearInterval(time);
            theAnswer();
        });
    }
    //Here we are evaluating the choice
    function theAnswer() {
        $("#timerBlock").hide();
        $("#questionBlock").hide();
        $("#choicesBlock").hide();
        $("#timerBlock2").show();
        $("#answerBlock").show();
        $("#gameOver").hide();
        $(".thisChoice").empty();

        if (questionArray[currentQ].correct === userChoice) {
            countCorrect++;
            $("#answers").html(correct + questionArray[currentQ].correctText);
            currentQ++;
            nextEvent();
        } else if (questionArray[currentQ].correct !== userChoice) {
            countWrong++;
            $("#answers").html(incorrect + questionArray[currentQ].correctText);
            currentQ++;
            nextEvent();
        }
        else {
            noResponse++;
            $("#answers").html(timeIsUp + questionArray[currentQ].correctText);
            currentQ++;
            nextEvent();
        }
        console.log(" Correct " + countCorrect)
        console.log(" Wrong " + countWrong)
        console.log(" No answer " + noResponse)

    }

    //Question Timer
    //================================================================
    //Here we limiting the response time to 15
    function questionTimer() {
        seconds = 20;
        $("#timer").html("00:" + seconds);
        time = setInterval(questionCountdown, 1000);
    }

    //Here we are controlling the timer and time events
    function questionCountdown() {
        seconds--;
        if (seconds < 10) {
            $("#timer").html("00:0" + seconds);
            $("#timer").css({ "color": "red" });
        } else {
            $("#timer").html("00:" + seconds);
        }
        if (seconds < 1) {
            noResponse++;
            theAnswer();
        }
    }

    //Here we will get the next question or show the results - i had a second timer but ran out of time
    function nextEvent() {
        if (currentQ===quizLength) {
            setTimeout(theResults, 1000);
        } else {
            $(".isSelected").empty();
            $("#choices").empty();
            setTimeout(getQuestion, 1000);
        }
    }

    function theResults() {
        $("#timerBlock").hide();
        $("#questionBlock").hide();
        $("#choicesBlock").hide();
        $("#timerBlock2").hide();
        $("#answerBlock").hide();
        $("#gameOver").show();
        $("#totalQuestions").html(quizLength);
        $("#countCorrect").html(countCorrect);
        $("#countWrong").html(countWrong);
        $("#noResponse").html(noResponse);
        $("#restartBtn").click(function() {
           restart();
        }
        )};

    function restart() {
        currentQ = 0;
        countCorrect = 0;
        countWrong = 0;
        noResponse = 0;
        $(".isSelected").empty();
        $("#choices").empty();
        getQuestion();
    }

});