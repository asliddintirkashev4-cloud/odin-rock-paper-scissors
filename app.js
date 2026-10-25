let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
const choiceButtons = document.querySelectorAll('[data-choice]');
const result = document.querySelector('#result');
const history = document.querySelector('#history');

function renderScore() {
  document.querySelector('#human-score').textContent = humanScore;
  document.querySelector('#computer-score').textContent = computerScore;
}

function playRound(humanChoice) {
  if (humanScore === 5 || computerScore === 5) return;
  const computerChoice = getComputerChoice();
  const winner = getRoundResult(humanChoice, computerChoice);
  roundNumber += 1;
  let message = `Both chose ${humanChoice}. This round is a draw.`;
  if (winner === 'human') {
    humanScore += 1;
    message = `You win this round. ${humanChoice} beats ${computerChoice}.`;
  } else if (winner === 'computer') {
    computerScore += 1;
    message = `Computer wins this round. ${computerChoice} beats ${humanChoice}.`;
  }
  const item = document.createElement('li');
  item.textContent = `Round ${roundNumber}: ${humanChoice} / ${computerChoice}. ${winner === 'draw' ? 'Draw' : winner === 'human' ? 'You score' : 'Computer scores'}.`;
  history.prepend(item);
  result.textContent = message;
  renderScore();
  if (humanScore === 5 || computerScore === 5) {
    result.textContent += humanScore === 5 ? ' You won the match!' : ' Computer won the match.';
    choiceButtons.forEach(button => { button.disabled = true; });
  }
}

choiceButtons.forEach(button => button.addEventListener('click', () => playRound(button.dataset.choice)));
document.querySelector('#reset').addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  roundNumber = 0;
  history.replaceChildren();
  choiceButtons.forEach(button => { button.disabled = false; });
  result.textContent = 'Choose rock, paper or scissors to begin.';
  renderScore();
});
