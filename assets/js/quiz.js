let currentCategory

document.addEventListener('DOMContentLoaded', function() {
    shuffleQuestions();
    let buttons = document.getElementsByTagName('button');
    
    for (let button of buttons){
        button.addEventListener('click', function(){
            if (button.dataset.buttonType === 'confirm'){
                checkAnswer();
            } else if (button.dataset.buttonType === 'next'){
                goToNextQuestion()
            } else {
                currentCategory = button.dataset.buttonType;
                runQuiz(currentCategory)
            }
        });
    }
})


let options = document.getElementsByClassName('answer-option');

/**
 * This adds an eventListener to each answer option in the quiz section.
 * If the user clicks on one option, first the background of all options
 * will be set to white, then the background of the option the user clicked on will
 * be set to light blue.
 */
for (option of options){
    option.addEventListener('click', function(){
        for (option of options){
            option.style.backgroundColor = 'white'
        }
        this.style.backgroundColor = 'lightBlue'
    })
}

/**runs the quiz and selects one of the four categories based on which button the user clicked on */
function runQuiz(quizCategory){
    if (quizCategory === 'geography'){       
        displayGeographyQuestion();
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

/**
 * Compares the id of the radio button selected by the user to the 'for'
 * attribute of its label. Then it compares the innerText of the label
 * to the correct answer of the question, which is stored in the questions.js file. 
 * if the user selected the correct answer, this function will set the background color
 * of that answer label to green, otherwise it will set the background color of
 * the answer label selected by the user to red and the correct answer to green.
 */
function checkAnswer(){
    let answers = document.getElementsByClassName('answer-radio');
    let answerLabels = document.getElementsByTagName('label');
    let correctAnswer = geographyQuestions[geographyQuestionIndex - 1].correctAnswer;

    // ** returns the radio button that the user has selected*/
    function getSelectedAnswerRadio(){
        for (answer of answers){
            if (answer.checked){
                return answer
            }
        }
    }
    
    let selectedRadioID = getSelectedAnswerRadio().getAttribute('id')

    /**returns the label attached to the radio button which the user has selected */
    function getSelectedLabel(){
        for (aL of answerLabels){
            if (aL.getAttribute('for') === selectedRadioID){
                return aL;
            }
        }
    }

    let selectedLabel = getSelectedLabel()

    //*compares the innertext of the answer label selected by the user to the correct
    /*answer, which is stored in the questions.js file */
    if (selectedLabel.innerText === correctAnswer){
        selectedLabel.style.backgroundColor = 'green'
        incrementScore()
        alert(`That's correct!`)    
    } else {
        selectedLabel.style.backgroundColor = 'red'
        for (aL of answerLabels){
            if (aL.innerText === correctAnswer){
                aL.style.backgroundColor = 'green'
            }
        }
        diminishLifePoints()
        alert(`Oh no! Your answer is ${selectedLabel.innerText}, but the correct answer was ${correctAnswer}`)
        if 
    }

    // tests to see if the functions work properly
    console.log(`the answerlabels are ${answerLabels}`)
    console.log(`the selected label is ${selectedLabel.innerText}`)
    console.log(`the selected radio id is ${selectedRadioID}`)
    console.log(`the correct answer is ${correctAnswer}`)
}

function goToNextQuestion(){
    let answerLabels = document.getElementsByTagName('label');
    for (aL of answerLabels){
        aL.style.backgroundColor = 'white'
    }
    runQuiz(currentCategory)
}

let score = document.getElementById('score')

/**
 * increments the innertext of the score span by 10 
 */
function incrementScore(){ 
    score.innerText = parseInt(score.innerText) + 10
}

let lifePoints = document.getElementById('life-points');

/**
 * diminishes the innertext of the life-points span by 1
 */
function diminishLifePoints(){
    lifePoints.innerText = parseInt(lifePoints.innerText) - 1;
    if (lifePoints.innerText == 0){
        gameOver()
    }
}

function gameOver(){
    alert(`Game Over! Your Score is ${score.innerText}`)
    score.innerText = 0
    lifePoints.innerText = 5
    geographyQuestionIndex = 0
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

