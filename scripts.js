var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock');
    pickPaper = document.getElementById('js-playerPick_paper');
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };


var newGameElem = document.getElementById('js-newGameElement');
    pickElem = document.getElementById('js-playerPickElement');
    resultsElem = document.getElementById('js-resultsTableElement');
    playTo = document.getElementById('js-playingTo');
    input = document.getElementById('js-inputN');


function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
        playTo.style.display = 'block';
        input.style = 'display: block; margin: 30px auto; width: 100px';
        reset();
        break;
        
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
        whoIsWinner.style = 'display: block; margin: 30px; font-size: 30px; color: green';


    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
        playTo.style.display = 'none';
        input.style = 'display: none'; 
    }
}

setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');


function newGame() {
    player.name = prompt('Please enter your name', 'imię gracza');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();
        reset();

        playerNameElem.innerHTML = player.name;
    }
}

function playerPick(playerPick) {
    console.log(playerPick);
}


function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');


function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}


function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
     
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    }

    setGamePoints();
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}


var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');


var whoIsWinner = document.getElementById("js-winner");
    scoreWinning = 10;

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;

    if (player.score === scoreWinning || computer.score === scoreWinning) {
        gameState = "ended";
        setGameElements();
    }
    if(player.score === scoreWinning) {
        whoIsWinner.innerHTML = "The winner is " + player.name.toUpperCase();
    }
    else if (computer.score === scoreWinning) {
        whoIsWinner.innerHTML = "The winner is COMPUTER";
    }
}

function reset() {
    playerPointsElem.innerHTML = player.score= 0;
    computerPointsElem.innerHTML = computer.score = 0;
    playerPickElem.innerText = 'Player Selection';
    computerPickElem.innerText = 'Computer Selection';
    playerResultElem.innerText = 'Player Score';
    computerResultElem.innerText = 'Computer Score';
}

input.addEventListener("change", function() {
    inputNumber.textContent = this.value;
    scoreWinning = Number(this.value);
    reset();
});

















