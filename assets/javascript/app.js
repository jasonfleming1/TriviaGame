//global variab les
//================================================================

var questionArray = [
    {
        question: "Which fruit tastes like a blueberry?",
        choices: ["Apples ", "Pears ", "Blueberries ", "Watermelon ",],
        correct: 2,
        correctText: "The correct answer is blueberries!",
        correctImage: "I didn't make it this far"
    },
    {
        question: "What is the world's most popular fruit??",
        choices: ["Bananas ", "Watermelon ", "Apples ", "Tomatoes"],
        correct: 3,
        correctText: "The correct answer is Tomatoes!",
        correctImage: "I didn't make it this far"
    },
    {
        question: "What is the world's least popular fruit?",
        choices: ["Cherry ", "Lime ", "Peach ", "Pomegranate "],
        correct: 3,
        correctText: "The correct answer is Pomegranate!",
        correctImage: "I didn't make it this far"
    }];

//canned responses
var correct = "Great job! ";
var incorrect = "Too bad! ";
var timeIsUp = "Time has expired! ";

//quiz controls
var quizLength = questionArray.length; //number quiz questions
var currentQ = 0; //current question user is guessing
var countCorrect = 0; //holds correct guesses
var countWrong = 0; //holds wrong guesses
var noResponse = 0; //holds no response counts

//timers
var time;
var seconds;

//controls
var isAnswered = 2;

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
            isAnswered = 1;
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


        if ((questionArray[currentQ].correct == userChoice) && (isAnswered == 1)) {
            $("#answers").html(correct + questionArray[currentQ].correctText);
            countCorrect++;
            currentQ++;
            isAnswered = 2;
            nextEvent();
    } 

        else if ((questionArray[currentQ].correct !== userChoice) && (isAnswered == 1)) {
            $("#answers").html(incorrect + questionArray[currentQ].correctText);
            countWrong++;
            currentQ++;
            nextEvent();
        }

        else  {
            userChoice = 0;
            $("#answers").html(timeIsUp + questionArray[currentQ].correctText);
            noResponse++;
            currentQ++;
            nextEvent();
        }

    }

    //Question Timer
    //================================================================
    //Here we limiting the response time to 15
    function questionTimer() {
        seconds = 10;
        $("#timer").html("00:" + seconds);
        time = setInterval(questionCountdown, 1000);
    }

    //Here we are controlling the timer and time events
    function questionCountdown() {
        seconds--;
        if (seconds < 1) {
            theAnswer();
        }
        else if (seconds < 10) {
            $("#timer").html("00:0" + seconds);
            $("#timer").css({ "color": "red" });
        } 

        else {
            $("#timer").html("00:" + seconds);
        }
    }

    //Here we will get the next question or show the results - i had a second timer but ran out of time
    function nextEvent() {
        if (currentQ==quizLength) {
            setTimeout(theResults, 3000);
        } else {
            isAnswered = 2;
            $(".isSelected").empty();
            $("#choices").empty();
            setTimeout(getQuestion, 3000);
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