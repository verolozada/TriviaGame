//NOTE: cons cannot be reassigned., Let can be. 




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

// function  to create the buttons for the answers
function buttons() {
    for (var i = 0; i < questions.length; i++) {
        var question = questions[i].q
        $("#quiz").append(question);
        for (var j = 0; j < questions[i].answers.length; j++) {
            var items = $("<li>");
            var button = $("<button>")
            button.addClass("btn")
            button.attr("data-name", questions[i].answers[j])
            button.text(questions[i].answers[j])
            items.append(button);
            $("#quiz").append(items);
        }
    }
}
buttons();

// user choice 
function select() {
    $("#quiz").on("click", ".btn", function () {
        var userChoice = $(this).attr("data-name");
        console.log(userChoice);
        if (userChoice === "2002") {
            win();
        } else {
            lose();
        }
    });
}
select();

// win or lose
function win() {
    var win = $("div")
    win.text("CONGRATULATIONS");
    $("#quiz").append(win);
}

function lose () {
    var lose = $("div")
    // lose.text("OH NO! The correct answer is " + questions[1].correctAns);
    lose.text("OH NO! You lost!");
    $("#quiz").append(lose);
}