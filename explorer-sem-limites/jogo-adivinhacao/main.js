//variaveis da aplicação
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleKey)

// funções
function handleTryClick(event) { 
  event.preventDefault()  
  const inputNumber = document.querySelector("#inputNumber")

  switch (true) {
  case Number(inputNumber.value) == randomNumber:
    toogleScreen()
    screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
    break;
  case inputNumber.value < 0 || inputNumber.value > 10:      
    alert("Digite apenas números entre 0 e 10!")
    break;
  case inputNumber.value == 0:      
      alert("Insira um número!")
      break;
}
  inputNumber.value = ""
  xAttempts++ 
}

function handleResetClick() {
  toogleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toogleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleKey(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick() }
  }

