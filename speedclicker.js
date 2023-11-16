let area = document.querySelector('.container');
let timer = document.querySelector('.timer');
let clicks = document.querySelector('.clicks');
let endGame = document.querySelector('.gamemessage');
let restart = document.querySelector('.restart');
let finalScore = document.querySelector('.myscore');
let highScore = document.querySelector('.highscore');
let theScore = 0;
let gameOver = false;

if (window.localStorage.theHighScore) {
    highScore.innerHTML = `High Score : ${Number(window.localStorage.theHighScore)}`
}

function gameStart () {
    if(!gameOver) {
        clicks.innerHTML ='0';
        theScore +=1;
        if (theScore === 1) {
            let counter = setInterval(countdown, 1000);
            function countdown () {
                timer.innerHTML -=1;
                if (timer.innerHTML === "0") {
                    clearInterval(counter);
                    gameOver = true;
                    endGame.style.display = 'flex';
                    area.style.opacity = '0.1';
                    finalScore.innerHTML = `${theScore}`
                }
            }
        }
        clicks.innerHTML = theScore;
        if (window.localStorage.theHighScore > theScore) {
            highScore.innerHTML = `High Score : ${Number(window.localStorage.theHighScore)}`;
        } else {
            window.localStorage.theHighScore = theScore;
            highScore.innerHTML = `High Score : ${Number(window.localStorage.theHighScore)}`;
        }
    } 
}

area.addEventListener('touchStart', function() {
    gameStart();
})
restart.addEventListener('touchStart', function() {
    clicks.innerHTML ='Click Me!';
    endGame.style.display = 'none';
    area.style.removeProperty('opacity');
    timer.innerHTML = '5';
    gameOver = false;
    theScore = 0;
    highScore.innerHTML = `High Score : ${window.localStorage.theHighScore}`;
})