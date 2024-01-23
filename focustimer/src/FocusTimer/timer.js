import state from './state.js' // aqui o state está atualizado
import * as el from './elements.js'
import { reset } from './actions.js'
import { kitchenTimer } from './sounds.js'

export function countdown() {

clearTimeout(state.countdownId) // limpa e começa tudo de novo a cada play, ajustando bug, lembra que na primeira vez ele é null, não tem nada o que limpar vai rodar setTimeout, lá embaixo.

if(!state.isRunning) {
  return
} // Se não está correndo eu vou parar "retornar". Não é para fazer o countdown.

// transformando em formato número e salvando na variavel.
let minutes = Number(el.minutes.textContent) 
let seconds = Number(el.seconds.textContent)

seconds-- // quando o play for clicado ele tem que imediantamente tirar 1s

if(seconds < 0) {
  seconds = 59
  minutes--
} // Esta parte do código é executada quando o número de segundos se torna negativo. Quando isso acontece, ele redefine os segundos para 59 e diminui o número de minutos em 1. Isso é típico em um temporizador, onde, após cada minuto, os segundos começam a contar novamente de 59.

if(minutes < 0) {
  reset() // aqui ele reset apenas o botão de pause para play
  kitchenTimer.play()
  return // Para a função
}

// Chamando a função e atualiza o display com os dados.
updateDisplay(minutes, seconds)

state.countdownId = setTimeout(() => countdown(), 1000)
}
// Toda vez que eu clico no play ele vai rodar o countdown.
// setTimeout(() =>, 100) - vai executar uma função depois de determinado tempo no js, o tempo é em ms.
// Estou fazendo uma recursão que é quando uma função chama ela mesma dentro da própria função.
// Quando der o play a primeira vez ele vai contar o iniciou e ai ele vai fazer um timeout de 1s, então daqui a 1s ele vai executar denovo e vai ficar executando a cada segundo. Vai ficar assim até que eu pare ela, isso vai acontecer quando eu clicar em pause, e o estado consequentemente vai mudar.
// STATE.COUNTDOWNID // Toda vez que eu criar um setTimeout eu vou memorizar ele, vou guardar ele no meu estado.
// setTimeout quando criado ele retorna pra gente um ID um número de identificado dele, como se fosse um RG, então eu sei que ele existe e todas as vezes que eu iniciar essa parte da minha aplicação eu vou limpar o timeout, vou zerar ele, retirando aquele bug claerTimeout(state.countdownId). O id é limpado eliminado e começa tudo denovo.



// quando entrar aqui na função vai verificar se eu passei o valor para os parametros, se não eu pego do state.
export function updateDisplay(minutes, seconds) { 
  minutes = minutes ?? state.minutes 
  seconds = seconds ?? state.seconds 
  // Se eu não passar o valor para o minutes vai ser null.
  // Se o minutes for null o operador ?? vai estar observando. Esse cara é null? Então pega esse valor 'state.minutes'e coloca no lugar.

  el.minutes.textContent = String(minutes).padStart(2, "0") // Vem aqui e atualizar os minutes. Preencha o começo. Quero ver sempre dois caracteres. Quando tiver somente um caracter coloco o caracter 0.
  el.seconds.textContent = String(seconds).padStart(2, "0") // Vem aqui e atualizar os seconds.
}




// Recursão - é quando uma função chama ela mesma em um determinado momento, só que a recursão precisa ser parada em algum momento.