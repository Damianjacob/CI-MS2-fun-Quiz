// quiz variables
let currentCategory
let geographyQuestionIndex = 0;
let scienceQuestionIndex = 0;
let musicQuestionIndex = 0;
let animalsQuestionIndex = 0;
let timesAnswerChecked = 0;
let options = document.getElementsByClassName('answer-option');

document.addEventListener('DOMContentLoaded', function () {
    shuffleQuestions();
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (button.dataset.buttonType === 'confirm') {
                checkAnswer();
            } else if (button.dataset.buttonType === 'next') {
                goToNextQuestion()
            } else {
                currentCategory = button.dataset.buttonType;
                runQuiz(currentCategory)
            }
        });
    }
})

/**hides the category buttons that don't correspond to the current category */
function hideCategories() {
    let gButton = document.getElementById('geography-button');
    let sButton = document.getElementById('science-button');
    let mButton = document.getElementById('music-button');
    let aButton = document.getElementById('animals-button');

    if (currentCategory == 'geography') {
        sButton.style.visibility = 'hidden';
        mButton.style.visibility = 'hidden';
        aButton.style.visibility = 'hidden';
    } else if (currentCategory == 'science'){
        gButton.style.visibility = 'hidden';
        mButton.style.visibility = 'hidden';
        aButton.style.visibility = 'hidden';
    } else if (currentCategory == 'music'){
        gButton.style.visibility = 'hidden';
        sButton.style.visibility = 'hidden';
        aButton.style.visibility = 'hidden';
    } else if (currentCategory == 'animals'){
        gButton.style.visibility = 'hidden';
        sButton.style.visibility = 'hidden';
        mButton.style.visibility = 'hidden';
    } else {
        console.log('Error: unknown category')
    }
}

/**unhides all the category buttons */
function unhideCategories(){
    let categoryButtons = document.getElementsByClassName('category-button');
    for (btn of categoryButtons){
        btn.style.visibility = 'visible';
    }
}

/**
 * This adds an eventListener to each answer option in the quiz section.
 * If the user clicks on one option, first the background of all options
 * will be set to white, then the background of the option the user clicked on will
 * be set to light blue.
 * @options array composed by all elements with the class of answer-option.
 * declared under quiz variables at the top.
 */
for (option of options) {
    option.addEventListener('click', function () {
        for (option of options) {
            option.style.backgroundColor = 'white'
        }
        this.style.backgroundColor = 'lightBlue'
    })
}

/**runs the quiz and selects one of the four categories based on which button the user clicked on */
function runQuiz(quizCategory) {
    if (quizCategory === 'geography') {
        displayGeographyQuestion();
    } else if (quizCategory === 'science') {
        displayScienceQuestion();
    } else if (quizCategory === 'music') {
        displayMusicQuestion();
    } else if (quizCategory === 'animals') {
        displayAnimalsQuestion();
    } else {
        alert(`unknown category: ${quizCategory}`)
    }
}

/**This function shuffles the questions from the arrays in questions.js. 
 * It is called each time the DOM content is loaded (see eventListener at the top), 
 * so that every time the user reloads the page, there is a different order.
 */
function shuffleQuestions() {
    geographyQuestions.sort(function shuffle(a, b) {
        return 0.5 - Math.random();
    })

    scienceQuestions.sort(function shuffle(a, b) {
        return 0.5 - Math.random();
    })

    musicQuestions.sort(function shuffle(a, b) {
        return 0.5 - Math.random();
    })

    animalsQuestions.sort(function shuffle(a, b) {
        return 0.5 - Math.random();
    })
}

/**returns the question array that corresponds to the current category: geography,
 * science, music or animals.
 */
function returnQuestionArrayName() {
    if (currentCategory == 'geography') {
        return geographyQuestions;
    } else if (currentCategory == 'science') {
        return scienceQuestions;
    } else if (currentCategory == 'music') {
        return musicQuestions;
    } else if (currentCategory == 'animals') {
        return animalsQuestions;
    }
}

/**returns the variable *QuestionIndex based on which category the game is currently running */
function returnQuestionArrayIndex() {
    if (currentCategory == 'geography') {
        return geographyQuestionIndex;
    } else if (currentCategory == 'science') {
        return scienceQuestionIndex;
    } else if (currentCategory == 'music') {
        return musicQuestionIndex;
    } else if (currentCategory == 'animals') {
        return animalsQuestionIndex;
    }
}


/**
 * Compares the id of the radio button selected by the user to the 'for'
 * attribute of its label. Then it compares the innerText of the label
 * to the correct answer of the question, which is stored in the questions.js file. 
 * if the user selected the correct answer, this function will set the background color
 * of that answer label to green, otherwise it will set the background color of
 * the answer label selected by the user to red and the correct answer to green.
 */
function checkAnswer() {
    let questionArray = returnQuestionArrayName();
    let questionArrayIndex = returnQuestionArrayIndex();
    let answers = document.getElementsByClassName('answer-radio');
    let answerLabels = document.getElementsByTagName('label');


    let correctAnswer = questionArray[questionArrayIndex - 1].correctAnswer;
    timesAnswerChecked++

    // ** returns the radio button that the user has selected*/
    function getSelectedAnswerRadio() {
        for (answer of answers) {
            if (answer.checked) {
                return answer
            }
        }
    }

    let selectedRadioID = getSelectedAnswerRadio().getAttribute('id')

    /**returns the label attached to the radio button which the user has selected 
    */
    function getSelectedLabel() {
        for (aL of answerLabels) {
            if (aL.getAttribute('for') === selectedRadioID) {
                return aL;
            }
        }
    }

    let selectedLabel = getSelectedLabel()

    /** compares the innertext of the answer label selected by the user to the correct
    /* answer, which is stored in the questions.js file */
    if (selectedLabel.innerText === correctAnswer) {
        selectedLabel.style.backgroundColor = 'green'
        incrementScore()
        if (geographyQuestionIndex + scienceQuestionIndex + musicQuestionIndex + animalsQuestionIndex == 40) {
            wonTheGame();
        }
    } else {
        diminishLifePoints()
        if (lifePoints.innerText == 0) {
            gameOver()
        } else {
            selectedLabel.style.backgroundColor = 'red'
            for (aL of answerLabels) {
                if (aL.innerText === correctAnswer) {
                    aL.style.backgroundColor = 'green'
                }
            }
        }
    }
}

/** turns the background of all question labels to white and then calls the runQuiz function
 * with the current quiz category as parameter.
 * Is called when the user clicks on the "Next Question" button.
 */
function goToNextQuestion() {
    let answerLabels = document.getElementsByTagName('label');
    for (aL of answerLabels) {
        aL.style.backgroundColor = 'white'
    }
    runQuiz(currentCategory)
}

let score = document.getElementById('score')
let score2 = document.getElementById('score2')
let finalScore = document.getElementById('final-score')

/**
 * increments the innertext of the score span by 10 
 */
function incrementScore() {
    let questionArrayIndex = returnQuestionArrayIndex();
    if (timesAnswerChecked == questionArrayIndex) {
        score.innerText = parseInt(score.innerText) + 10;
    } else {
        alert(`Nice try! You can't submit the same answer twice :)`);
        timesAnswerChecked--;
    }
}

let lifePoints = document.getElementById('life-points');

/**
 * diminishes the innertext of the life-points span by 1
 */
function diminishLifePoints() {
    let questionArrayIndex = returnQuestionArrayIndex();
    if (timesAnswerChecked == questionArrayIndex) {
        lifePoints.innerText = parseInt(lifePoints.innerText) - 1;
    } else {
        alert(`You already submitted your answer to this question!`);
        timesAnswerChecked--;
    }
}

let gameOverMsg = document.getElementById('game-over-div');
/**displays the game over pop-up div, resets all the variables to their initial value, resets background colors and unhides all category buttons */
function gameOver() {
    score.innerText = 0;
    lifePoints.innerText = 5;
    geographyQuestionIndex = 0;
    scienceQuestionIndex = 0;
    musicQuestionIndex = 0;
    animalsQuestionIndex = 0;
    timesAnswerChecked = 0;
    unhideCategories();
    for (option of options) {
        option.style.backgroundColor = 'white'
    }
    question.innerText = 'Select a category to start a new round!';
    gameOverMsg.style.display = 'block';
    for (answer of answerOptions) {
        answer.innerText = '';
    }
}

let popUpMsgs = document.getElementsByClassName('pop-up-msgs');
for (msg of popUpMsgs) {
    msg.addEventListener('click', function () {
        this.style.visibility = 'hidden'
    })
}

let winnerMsg = document.getElementById('win-msg');
/**displays the winner message */
function wonTheGame() {
    finalScore.innerText = score.innerText;
    for (msg of popUpMsgs) {
        msg.style.visibility = 'hidden'
    }
    winnerMsg.style.display = 'block';
    question.innerText = 'Well done!';
}

let question = document.getElementById('question');
let answerOptions = document.getElementsByClassName('answer-option');

let geographyWinDiv = document.getElementById('geography-done')
/**
 * displays question and answers from the geographyQuestions array in questions.js and then
 * adds 1 to the geographyQuestionIndex variable. if that variable reaches the length of the geographyQuestions array,
 * an alert will say that there are no more geography questions.
 */
function displayGeographyQuestion() {
    if (geographyQuestionIndex < 10) {
        question.innerText = geographyQuestions[geographyQuestionIndex].question;
        hideCategories();
        let a = 0;
        for (answerOption of answerOptions) {
            answerOption.innerText = geographyQuestions[geographyQuestionIndex].answers[a];
            a++;
        }
        geographyQuestionIndex++;
    } else {
        geographyWinDiv.style.display = 'block';
        unhideCategories();
        for (option of options) {
            option.style.backgroundColor = 'white'
        }
        question.innerText = 'Select another category to continue!';
        timesAnswerChecked = 0;
    }
}

let scienceWinDiv = document.getElementById('science-done')
/**
 * displays question and answers from the scienceQuestions array in questions.js and then
 * adds 1 to the scienceQuestionIndex variable. if that variable reaches the length of the array,
 * an alert will say that there are no more science questions.
 */
function displayScienceQuestion() {
    if (scienceQuestionIndex < 10) {
        question.innerText = scienceQuestions[scienceQuestionIndex].question;
        hideCategories();
        let a = 0;
        for (answerOption of answerOptions) {
            answerOption.innerText = scienceQuestions[scienceQuestionIndex].answers[a];
            a++;
        }
        scienceQuestionIndex++;
    } else {
        scienceWinDiv.style.display = 'block';
        unhideCategories();
        for (option of options) {
            option.style.backgroundColor = 'white'
        }
        question.innerText = 'Select another category to continue!';
        timesAnswerChecked = 0;
    }
}

let musicWinDiv = document.getElementById('music-done');
/**
 * displays question and answers from the musicQuestions array in questions.js and then
 * adds 1 to the musicQuestionIndex variable. if that variable reaches the length of the array,
 * an alert will say that there are no more music questions.
 */
function displayMusicQuestion() {
    if (musicQuestionIndex < 10) {
        question.innerText = musicQuestions[musicQuestionIndex].question;
        hideCategories();
        let a = 0;
        for (answerOption of answerOptions) {
            answerOption.innerText = musicQuestions[musicQuestionIndex].answers[a];
            a++;
        }
        musicQuestionIndex++;
    } else {
        musicWinDiv.style.display = 'block';
        unhideCategories();
        for (option of options) {
            option.style.backgroundColor = 'white'
        }
        question.innerText = 'Select another category to continue!';
        timesAnswerChecked = 0;
    }
}

let animalsWinDiv = document.getElementById('animals-done');
/**
 * displays question and answers from the animalsQuestions array in questions.js and then
 * adds 1 to the animalsQuestionIndex variable. if that variable reaches the length of the array,
 * an alert will say that there are no more animals questions.
 */
function displayAnimalsQuestion() {
    if (animalsQuestionIndex < 10) {
        question.innerText = animalsQuestions[animalsQuestionIndex].question;
        hideCategories();
        let a = 0;
        for (answerOption of answerOptions) {
            answerOption.innerText = animalsQuestions[animalsQuestionIndex].answers[a];
            a++;
        }
        animalsQuestionIndex++;
    } else {
        animalsWinDiv.style.display = 'block';
        unhideCategories();
        for (option of options) {
            option.style.backgroundColor = 'white'
        }
        question.innerText = 'Select another category to continue!';
        timesAnswerChecked = 0;
    }
}

