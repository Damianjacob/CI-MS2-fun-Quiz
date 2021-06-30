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

/**runs the game */
function runQuiz(quizCategory){
    if (quizCategory === 'geography'){
        displayGeographyQuestion();
    }
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

