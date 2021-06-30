// This is where all the questions are stored

let geographyQuestions = {
    questionNumber: '1',
    question: 'Which is the tallest mountain on the earth?',
    answers: [
        {answer: 'Mount Everest', isCorrectAnswer: true},
        {answer: 'K2', isCorrectAnswer: false},
        {answer: 'Monte Rosa', isCorrectAnswer: false},
        {answer: 'Lhotse', isCorrectAnswer: false}
    ]
}

let scienceQuestions = {

}

let musicQuestions = {

}

let animalsQuestions = {

}

// this code is not working for some reason, find out why
document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');
    
    console.log(buttons)
    for (let button of buttons){
        button.addEventListener('click', function(){
            if (button.dataset.buttonType === 'confirm'){
                alert('you are clicking thesubmit button');
            } else {
                console.log('you are clicking a button');
            }
        });
    }

    alert('page is loaded')
})

// this is the code from the lesson, adapt it and see if it works (it doesn't, wtf is wrong)
// document.addEventListener("DOMContentLoaded", function() {
//     let buttons = document.getElementsByTagName("button");

//     for (let button of buttons) {
//         button.addEventListener("click", function() {
//             if (this.getAttribute("button-type") === "confirm") {
//                 checkAnswer();
//             } else {
//                 let gameType = this.getAttribute("button-type");
//                 runGame(gameType);
//             }
//         });
//     }

// })

/**runs the game */
function runQuiz(quizCategory){
    console.log('running this quiz')
}

function checkAnswer(){
    console.log('checking answer')
}

function incrementScore(){

}

function diminishLifePoints(){

}

function gameOver(){

}

function displayGeographyQuestion(){

}

function displayScienceQuestion(){

}

function displayMusicQuestion(){

}

function displayAnimalsQuestion(){

}

