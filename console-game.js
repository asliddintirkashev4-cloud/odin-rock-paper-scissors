function getHumanChoice() {
  const answer = prompt('Rock, paper or scissors?');
  return answer === null ? null : answer.trim().toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    const winner = getRoundResult(humanChoice, computerChoice);
    if (winner === 'human') humanScore += 1;
    if (winner === 'computer') computerScore += 1;
    console.log(`${humanChoice} / ${computerChoice}: ${winner}`);
    console.log(`You ${humanScore} : ${computerScore} Computer`);
  }
  for (let round = 0; round < 5; round += 1) {
    const choice = getHumanChoice();
    if (choice === null) { console.log('Game cancelled.'); return; }
    if (!['rock', 'paper', 'scissors'].includes(choice)) {
      console.log('Invalid input. Enter rock, paper or scissors.');
      round -= 1;
      continue;
    }
    playRound(choice, getComputerChoice());
  }
  console.log(humanScore === computerScore ? 'The game is a draw.' : humanScore > computerScore ? 'You win the game!' : 'Computer wins the game.');
  document.querySelector('#console-status').textContent = `Finished five rounds. You ${humanScore} : ${computerScore} Computer. See the console for each round.`;
}
document.querySelector('#start-console').addEventListener('click', playGame);
