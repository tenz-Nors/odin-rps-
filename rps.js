
function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random()*arr.length);
  const item = arr[randomIndex];
  return item;
}
const array = ['rock','paper','scissor'];
const computerMove = getComputerChoice(array);

const playerMove = prompt('Type your move : ');

if (playerMove===computerMove) {
  alert(`it\'s a TIE, computer chose ${playerMove}`)
} else if (playerMove==='rock' && computerMove==='scissor') {
  alert('YOU WIN, computer chose scissor')
} else if (playerMove==='rock' && computerMove==='paper') {
  alert('YOU LOOSE, computer chose paper')
} else if(playerMove==='paper' && computerMove==='scissor') {
  alert('YOU LOOSE, computer chose scissor')
} else if (playerMove==='paper' && computerMove==='rock') {
  alert('YOU WIN, computer chose rock')
} else if(playerMove==='scissor' && computerMove==='paper') {
  alert('YOU WIN, computer chose paper')
} else if(playerMove==='scissor' && computerMove==='rock') {
  alert('YOU LOOSE, computer chose rock')
} else {
  alert('please type either {rock, paper, scissor}')
};


