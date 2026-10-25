function getComputerChoice(random = Math.random) {
  const number = Math.floor(random() * 3);
  if (number === 0) return 'rock';
  if (number === 1) return 'paper';
  return 'scissors';
}

function getRoundResult(humanChoice, computerChoice) {
  const human = String(humanChoice).trim().toLowerCase();
  const computer = String(computerChoice).trim().toLowerCase();
  const choices = ['rock', 'paper', 'scissors'];
  if (!choices.includes(human) || !choices.includes(computer)) {
    throw new RangeError('Choose rock, paper or scissors.');
  }
  if (human === computer) return 'draw';
  if ((human === 'rock' && computer === 'scissors') ||
      (human === 'paper' && computer === 'rock') ||
      (human === 'scissors' && computer === 'paper')) return 'human';
  return 'computer';
}

if (typeof module !== 'undefined') module.exports = { getComputerChoice, getRoundResult };
