import state from './state.js' // Importando o estado da aplicação atual.
import * as events from './events.js'
import * as timer from './timer.js'

export function start(minutes, seconds) { // começou o start aqui
  state.minutes = minutes // pegou os minutes e atualizou o state /  Atribui o valor do parâmetro minutes à propriedade minutes do objeto state.
  state.seconds = seconds // pegou o seconds e atualizou o state / Atribui o valor do parâmetro seconds à propriedade seconds do objeto state.

  // Portanto, essa função é usada para definir o estado do temporizador em termos de minutos e segundos. Isso pode ser útil, por exemplo, ao iniciar um temporizador com um tempo específico.

  events.registerControls() // coloco aqui para executar o evento
  
  events.setMinutes() // coloco aqui para executar o evento
  
  timer.updateDisplay() // coloco aqui para executar o evento
}