//NOTE: cons cannot be reassigned., Let can be. 

let wins = 0;
let losses = 0;
//create questions for the quiz with the respectives answers.
const questions = [
    {
        q: "What's the name of Hank Pym's daughter in Ant-Man? ",
        answers: ["Hope Thomson", "Hope Van Pym", "Hope Van Dyne", "Hope Smith"],
        correctAns: "Hope Van Dyne",
        img: "assets/images/Hope.jpg"
    },
    {
        q: "When was the first Spiderman Movie released?",
        answers: ["2002", "2005", "2000", "2003"],
        correctAns: "2002",
        img: "assets/images/spiderman.jpg"
    },
    {
        q: "How many Infity Gems does Thanos Have?",
        answers: ["8", "6", "5", "10"],
        correctAns: "6",
        img: "assets/images/infinity.jpg"
    },
    {
        q: "What is the last activation word used by Helmut Zemo to activate the Winter Soldier in Captain America: Civil War?",
        answers: ["Devyat(Nine)", "Gruzovoy Vagon (Freight Car)", "Zhelaniye (Longing)", "Rassvet (Daybreak)"],
        correctAns: "Gruzovoy Vagon (Freight Car)",
        img: "assets/images/wintersoldier.jpg"
    },
    {
        q: "What are the 'real' names of Quicksilver & Scarlet Witch ?",
        answers: ["Sergei & Natasha", "Vasily & Lynda", "Pietro & Wanda", "Anatoly & Wanda"],
        correctAns: "Pietro & Wanda",
        img: "assets/images/wandaAndpietro.jpg"
    },
    {
        q: "Which Infinity Stone does Vision has embedded into his forehead?",
        answers: ["The Space Stone", "The Soul Stone", "The Time Stone", "The Mind Stone"],
        correctAns: "The Mind Stone",
        img: "assets/images/vision.jpg"
    },
    {
        q: "What is Peter Quill a.k.a Star Lord’s ship called in Guardians of the Galaxy?",
        answers: ["The Milano", "The Nova", "The Knowhere", "The Klyn"],
        correctAns: "The Milano",
        img: "assets/images/milano.jpg"
    },
    {
        q: "What is Tony Stark’s mother called??",
        answers: ["Martha Stark", "Peggy Stark", "Ashely Stark", "Maria Stark"],
        correctAns: "Maria Stark",
        img: "assets/images/mariaStark.png"
    }
];

let count = 0;
let seconds;
let time;
let pic;
let sec;
let time1;

// function  to create the buttons for the answers
function question() {
    $("#quiz").empty();
    $("#time").empty();
    seconds = 12;
    time = setInterval(decrement, 1000);
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
        if ((userChoice === questions[count].correctAns)) {
            win();
        } else {
            lose();
        }
    });
}

function timer() {
    $("#time").text("Time Left: " + seconds);
}

function decrement() {
    seconds--;
    $("#time").text("Time Left: " + seconds);
    if (seconds === 0) {
        unanwsered();
    }
}

// select the correct answer
function win() {
    clearInterval(time);
    wins++;
    $("#quiz").text("CONGRATS! That's the correct answer");
    showImage();
    count++;
    if (count < questions.length) {
        setTimeout(question, 3000);
    } else {
        setTimeout(resume, 3000);
    }

}

// select the wrong answer
function lose() {
    clearInterval(time);
    $("#quiz").text("Oh No! The correct answer is: " + questions[count].correctAns);
    showImage();
    count++;
    losses++;
    if (count < questions.length) {
        setTimeout(question, 3000);
    } else {
        setTimeout(resume, 3000);
    }
}

// when you run out of time
function unanwsered() {
    clearInterval(time);
    $("#quiz").text("Time's Up! " + "The correct answer is: " + questions[count].correctAns);
    showImage();
    count++;
    if (count < questions.length) {
        setTimeout(question, 3000);
    }
    else {
        setTimeout(resume, 3000);
    }
}

function resume() {
    $("#time").empty();
    $("#quiz").empty();
    $("#correct").text("Correct Answers: " + wins);
    $("#incorrect").text("Wrong Answers: " + losses);
    sec = 5;
    time1 = setInterval(decrement1,1000);
    setTimeout(myFunction, 5000);
}

function showImage() {
    let image = $("<img>")
    image.attr("src", questions[count].img)
    image.addClass("pics")
    $("#quiz").append(image);
 
}

function decrement1 () {
    sec--;
    $("#startover").text("Game will start over in:  " + sec + " seconds");
}

function myFunction() {
    location.reload();
}
question();
select();
timer();


