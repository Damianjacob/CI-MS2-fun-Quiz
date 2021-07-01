// this code is not working for some reason, find out why
document.addEventListener('DOMContentLoaded', function() {
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

function shuffleQuestions(){
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

function displayGeographyQuestion(){
    alert('You clicked on the geography button')
    let question = document.getElementById('question');
    question.innerText  = geographyQuestions[0].question;
    shuffleQuestions();
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

