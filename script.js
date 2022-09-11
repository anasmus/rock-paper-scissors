const choices = {
'rock': 'fa-regular fa-hand-back-fist',
    'paper': 'fa-regular fa-hand',
    'scissors': 'fa-regular fa-hand-scissors'
}
const choicesArray = ['rock', 'paper', 'scissors'];
const userChoiceField = document.getElementById('userChoice');
const computerChoiceField = document.getElementById('computerChoice');
const gameStatus = document.getElementById('gameStatus');
const gameDescription = document.getElementById('gameDescription');
const userScore = document.getElementById('userScore');
const computerScore = document.getElementById('computerScore');
const gameStatusOutput = ['It\'s a tie!', 'You won!', 'You lost!'];
const gameDescriptionOutput = ['ties with', 'beats', 'is beaten by'];

document.querySelectorAll('.selection').forEach(item => {
    item.addEventListener('click', selectionHandler)
});
function selectionHandler(e) {
    const userSelection = e.target.classList[0];
    const computerSelection = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    displaySelection(userSelection, userChoiceField);
    displaySelection(computerSelection, computerChoiceField);
    gameHandler(userSelection, computerSelection);
}
function displaySelection(selectionId, selectionField) {
    selectionField.className = choices[selectionId];
}
function gameHandler(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        resultOutcome = 0;
    }
    if (
        userChoice === 'rock' && computerChoice === 'scissors' ||
        userChoice === 'paper' && computerChoice === 'rock' ||
        userChoice === 'scissors' && computerChoice === 'paper'
    ) {
        resultOutcome = 1;
    }
    if (
        userChoice === 'rock' && computerChoice === 'paper' ||
        userChoice === 'paper' && computerChoice === 'scissors' ||
        userChoice === 'scissors' && computerChoice === 'rock'
    ) {
        resultOutcome = 2;
    }
    gameStatus.innerText = gameStatusOutput[resultOutcome];
    gameDescription.innerText = `${userChoice} ${gameDescriptionOutput[resultOutcome]} ${computerChoice}`;
    if (resultOutcome === 1) {
        userScore.innerText = parseInt(userScore.innerHTML) + 1;
    } else if (resultOutcome === 2) {
        computerScore.innerText = parseInt(computerScore.innerHTML) + 1;
    }
    if (parseInt(userScore.innerHTML) >= 5 || parseInt(computerScore.innerHTML) >= 5) {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('finalResult').style.display = 'flex';
        if (parseInt(userScore.innerHTML) >= 5) {
            document.getElementById('finalResultText').innerText = 'You won!';
        } else {
            document.getElementById('finalResultText').innerText = 'You lost!';
        }
    }
}