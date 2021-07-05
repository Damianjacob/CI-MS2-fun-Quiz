
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

/**
 * This adds an eventListener to each answer option in the quiz section.
 * If the user clicks on one option, first the background of all options
 * will be set to white, then the background of the option the user clicked on will
 * be set to light blue.
 */
let options = document.getElementsByClassName('answer-option');
for (option of options){
    option.addEventListener('click', function(){
        for (option of options){
            option.style.backgroundColor = 'white'
        }
        this.style.backgroundColor = 'lightBlue'
    })
}

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
    let answers = document.getElementsByClassName('answer-radio');
    let answerLabels = document.getElementsByTagName('label');
    let correctAnswer = geographyQuestions[geographyQuestionIndex - 1].correctAnswer;
    function getSelectedAnswerRadio(){
        for (answer of answers){
            if (answer.checked){
                return answer.getAttribute('id')
            }
        }
    }
    
    let selectedRadioID = getSelectedAnswerRadio()

    function getSelectedLabel(){
        for (aL of answerLabels){
            if (aL.getAttribute('for') === selectedRadioID){
                return aL.getAttribute('for');
            }
        }
    }

    let selectedLabel = getSelectedLabel()
    console.log(`the first element of answerlabels is ${answerLabels[0].innerText}`)
    console.log(`the answerlabels are ${answerLabels}`)
    console.log(`the selected label is ${selectedLabel}`)
    console.log(`the selected radio id is ${selectedRadioID}`)
    console.log(`the correct answer is ${correctAnswer}`)

    }

function diminishLifePoints(){

}

function gameOver(){

}

let geographyQuestionIndex = 0;

function displayGeographyQuestion(){
    if (geographyQuestionIndex < 10) {
        let question = document.getElementById('question');
        question.innerText  = geographyQuestions[geographyQuestionIndex].question;
        let answerOptions = document.getElementsByClassName('answer-option');
        let a = 0;
        for (answerOption of answerOptions){  
            answerOption.innerText = geographyQuestions[geographyQuestionIndex].answers[a];
            a++;
        }
        geographyQuestionIndex++;
    } else {
        alert('There are no more geography questions!')
    }
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

