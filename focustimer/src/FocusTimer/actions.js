import state from './state.js' // os states precisam estar atualizados aqui
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running') // atualizei o state isRunning com a informação de verdadeiro ou falso, se colocou retorna (true), se tirou retorna (false), a class running está no html especificamente nos filhos do controls (no css temos essa tag configurada). 
  timer.countdown() // Toda vez que eu clico no play ele vai rodar o countdown (contagem regressiva).
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false // atualizando o estado
  document.documentElement.classList.remove('running') // vai remover a class running
  timer.updateDisplay() // foi executado para voltar para a contagem inicial depois que o botão pause foi para play 'reset'.
  sounds.buttonPressAudio.play()
}

export function set() {
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus() // vai focar o campo de edição
} // é um método do DOM em js que é usado para definir um novo valor para um atributo de um elemento HTML. 
// name: O nome do atributo que você deseja definir.
// value: O novo valor que você deseja definir para o atributo.

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on') // atualizando o stado ao alternar fazendo o clique.

  if(state.isMute) {
    sounds.bgAudio.play()
    return
  } // Se o state estiver mudo pode tocar, se não pode pausar.

  sounds.bgAudio.pause()
}

// vou adicionar um atributo "contenteditable" quando eu der um clique. Significa que quando eu clicar no set eu vou poder editar o cronômetro.

