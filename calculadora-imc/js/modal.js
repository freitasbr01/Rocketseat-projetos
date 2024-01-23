
export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if(event.key === 'Escape') {
    Modal.close()
  }
}










//ESTRUTURANDO OS DADOS MODAL COM OBJECT LITERALS COM PROPRIEDADE E VALOR
/* Porque estamos fazendo isso?
Porque essa estrutura de dados vai dar mais clareza pra mim o que é responsabilidade do modal.
Forma normal de escrever o open ou close
open: function() {}
Forma abreviada
open() {}
*/