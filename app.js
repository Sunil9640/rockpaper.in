const computerchoiceDisplay = document.getElementById('computer-choice')
const userchoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possiblechoices = document.querySelectorAll('button')
let userchoice
let computerchoice


possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener('click',(e)=>{
  userchoice = e.target.id 
  userchoiceDisplay.innerHTML = userchoice
   generatecomputerchoice()
   getresult()
}))
 
function generatecomputerchoice(){
  const randomNumber = Math.floor(Math.random() * 3)+1
  if (randomNumber ===1){
    computerchoice = 'rock'
  }
  if (randomNumber ===2){
    computerchoice = 'scissor'
  }
  if (randomNumber ===3){
    computerchoice = 'paper'
  }
  computerchoiceDisplay.innerHTML = computerchoice
} 

function getresult(){
  if (computerchoice === userchoice){
    result ="it's a draw"
  }
  if (computerchoice === 'rock' && userchoice=== 'paper'){
    result ="you win"
  }
  if (computerchoice === 'paper' && userchoice==='rock'){
    result ="you lose"
  }
  if (computerchoice === 'scissors' && userchoice==='rock'){
    result ="you win"
  }
  if (computerchoice === 'rock' && userchoice==='scissors'){
    result ="you lose"
  }
  if (computerchoice === 'paper' && userchoice==='scissors'){
    result ="you win"
  }
  if (computerchoice === 'scissors' && userchoice==='paper'){
    result ="you lose"
  }
  resultDisplay.innerHTML =result
}


