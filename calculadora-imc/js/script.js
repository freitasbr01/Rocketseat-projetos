import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notANumber, calculateIMC } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value 
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {       // se retornar true ele vai entrar aqui e exbir a mesnagem
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateIMC(weight, height) // se retornar false o showAlertError ele vai aceitar e executar.
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}
























//CALCULANDO O IMC
/* porque que nesse codigo o calculo do IMC o height foi dividido por 100?
A altura geralmente é medida em centímetros, mas a fórmula do IMC requer que a altura seja medida em metros, precisamos converter. 1 metro é igual a 100 centímetros, dividimos a altura por 100 para fazer essa conversão.*/