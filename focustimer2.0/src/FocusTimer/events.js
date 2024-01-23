import { controls } from './elements.js'
import { cards } from './elements.js'
import * as actions from './actions.js'

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if(typeof actions[action] != 'function') {
    return
  }

  actions[action]() //  action é usado como uma chave para acessar a função correspondente no objeto actions. // função play foi chamada indiretamente através do objeto actions
  })
}

export function registerCards() {
  cards.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if(typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })
}


