
document.addEventListener('DOMContentLoaded', function() {
    shuffleQuestions();
    let buttons = document.getElementsByTagName('button');
    
    for (let button of buttons){
        button.addEventListener('click', function(){
            if (button.dataset.buttonType === 'confirm'){
                checkAnswer();
            } else {
                let category = button.dataset.buttonType;
                runQuiz(category)
            }
        });
    }
})

let answerElements = document.getElementsByClassName('answer-options');
answerElements.addEventListener('click', function(){
    this.dataset.selected = true;
    for (answer of answerElements){
        answer.style.backgroundColor = 'blue';
    }
})

let geographyIndex = 0
/**runs the quiz and selects one of the four categories based on which button the user clicked on */
function runQuiz(quizCategory){
    if (quizCategory === 'geography'){       
        displayGeographyQuestion();
        geographyIndex++;
        console.log(geographyIndex)
    } else if (quizCategory === 'science'){
        displayScienceQuestion();
    } else if (quizCategory === 'music'){
        displayMusicQuestion();
    } else if (quizCategory === 'animals'){
        displayAnimalsQuestion();
    } else {
        alert(`unknown category: ${quizCategory}`)
    }
}

/**This function shuffles the questions from the arrays in questions.js. 
 * It is called each time the DOM content is loaded (see eventListener at the top), 
 * so that every time the user reloads the page, there is a different order.
 */
function shuffleQuestions(){
    geographyQuestions.sort(function shuffle(a, b){
        return 0.5 - Math.random();
    })

    scienceQuestions.sort(function shuffle(a, b){
        return 0.5 - Math.random();
    })

    musicQuestions.sort(function shuffle(a, b){
        return 0.5 - Math.random();
    })

    geographyQuestions.sort(function shuffle(a, b){
        return 0.5 - Math.random();
    })
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

let geographyQuestionIndex = 0;

function displayGeographyQuestion(){
    let question = document.getElementById('question');
    question.innerText  = geographyQuestions[geographyQuestionIndex].question;
    let answerOptions = document.getElementsByClassName('answer-option');
    let a = 0;
    for (answerOption of answerOptions){  
        answerOption.innerText = geographyQuestions[geographyQuestionIndex].answers[a];
        a++;
    }
    geographyQuestionIndex++;
}

function displayScienceQuestion(){
    alert('You clicked on the science button')
}

function displayMusicQuestion(){
    alert('You clicked on the music button')
}

function displayAnimalsQuestion(){
    alert('You clicked on the animals button')
}

