import state from './state.js'
import { controls } from './elements.js'
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js'

// Vamos registrar todos os cliques, vou observar os elementos dos controles e saber em qual eu cliquei.
export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action // target apontou para o elemento clicado e acessou o data action.
    // Dataset em js é uma propriedade dos elementos HTML que permite armazenar dados personalizados. Esses dados podem ser acessados e modificados por meio do JavaScript. O Data- alguma coisa são atributos de dados personalizados no HTML, posso escolher o nome que eu quiser. Você pode acessá-los usando a propriedade dataset diretamente no js.

    if(typeof actions[action] != 'function') { // se não for função para, se for executar o actions
      return
    } /* “acessar o valor no objeto actions que corresponde à chave action”
    actions: Este é o nome do objeto que estamos acessando.
    action: Esta é a chave que estamos usando para acessar um valor específico no objeto actions.
    actions[action]: Esta é a sintaxe usada para acessar o valor no objeto actions que corresponde à chave action. */
    actions[action]()
  })
}

export function setMinutes() {
el.minutes.addEventListener('focus', () => {
el.minutes.textContent = ''
}) // Quando estiver em foco apaga os números.

el.minutes.onkeypress = (event) => /\d/.test(event.key) // Só aceita números. Este código JavaScript é um manipulador de eventos que é acionado quando uma tecla é pressionada (onkeypress) no elemento el.minutes. Este código permite apenas a entrada de dígitos no elemento el.minutes quando uma tecla é pressionada.  A expressão regular /\d/ verifica se a tecla pressionada (event.key) é um dígito (0-9). O método test() retorna true se a tecla pressionada for um dígito e false caso contrário.

el.minutes.addEventListener('blur', (event) => {
  let time = event.currentTarget.textContent
  time = time > 60 ? 60 : time // operação ternario (pergunta, sim ou não, são três partes) time é maior que 60? sim ou não. Se tiver maior que 60 deixa como 60, se não deixa o time mesmo

  state.minutes = time // depois da logica acima atualiza o estado acima.
  state.seconds = 0

  updateDisplay() // Depois da logica acima faz um updateDisplay
  el.minutes.removeAttribute('contenteditable') // Retira a opção de editar após toda lógica acima.
})
}






// O event.target vai apontar para qual elemento foi clicado

// Expressão regular - Permite observar determinado caracter ou conjunto de caracteres, é como se ela fosse lendo um a um dos caracteres.