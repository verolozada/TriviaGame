//NOTE: cons cannot be reassigned., Let can be. 

let wins = 0;
let losses= 0;
//create questions for the quiz with the respectives answers.
const questions = [
    {
        q: "What's the name of Hank Pym's daughter in Ant-Man? ",
        answers: ["Hope Thomson", "Hope Van Pym", "Hope Van Dyne", "Hope Smith"],
        correctAns: "Hope Van Dyne"
    },
    {
        q: "When was the first Spiderman Movie released?",
        answers: ["2002", "2005", "2000", "2003"],
        correctAns: "2002"
    },
    {
        q: "How many Infity Gems does Thanos Have?",
        answers: ["8", "6", "5", "10"],
        correctAns: "6"
    }
];

let count = 0;
let seconds;
let time;

// function  to create the buttons for the answers
function question() {
    $("#quiz").empty();
    $("#time").empty();
    let question = questions[count].q
    $("#quiz").append(question);
    for (let j = 0; j < questions[count].answers.length; j++) {
        let items = $("<li>");
        let button = $("<button>")
        button.addClass("btn")
        button.attr("data-name", questions[count].answers[j])
        button.text(questions[count].answers[j])
        items.append(button);
        $("#quiz").append(items);
    }
}

// compare user choice with the correct answer
function select() {
    $("#quiz").on("click", ".btn", function () {
        let userChoice = $(this).attr("data-name");
        if ((userChoice === questions[count].correctAns) ) {
            win();
            // question();
        } else {
            lost();
            // question();
        }
        if (count === questions.length) {
            count= 0;
            alert("Game Over");
            // show a resume of the game (wins and losses)
        }
    });
}

function timer() {
seconds = 12;
$("#time").text(seconds);
time = setInterval(decrement, 1000);
}

function decrement() {
    seconds--;
    $("#time").text(seconds);
    if (seconds < 1) {
        clearInterval(time)
        $("#quiz").text("Time's Up!");
        resume();
    }
}

function win() {
    count++;
    wins++;
    console.log(wins)
    $("#quiz").text("CONGRATS");
    //go to the next question after 3 seconds
}

function lost() {
    $("#quiz").text("Oh No! The correct answer was: " + questions[count].correctAns);
    count++;
    losses++;
    //go to the next question after 3 seconds
}

// Time's up or questions ended show resume page

question();
select();
timer();

function resume() {
    $("#time").empty();
    $("#quiz").empty();
    $("#correct").text("Correct Answers: " + wins);
    $("#incorrect").text("Wrong Answers: " + losses);
}



