let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light') 
  // Acessibilidade
  const mode = darkMode ? 'light' : 'dark' 
  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

  darkMode = !darkMode 
})

// (linha 1)
// O modo é dark, a primeira vez que eu clicar no botão esse modo é true ou seja (é dark), então ele vai escrever light para esse mode. O texto lá dentro vai estar light mode ativado!

// (linha 5) 
// Quando houver o click se tiver a class light na tag html (tira) e consequentemente fica dark, se não tiver o light lá dentro adiciona e consequentemente fica claro. Após o clique ele faz a troca do dark para o light. 

// (linha 7) 
// Aqui se o dark mode for verdadeiro, o mode receberá o light quando for clicado.

// (linha 8)
// O evento é para que eu possa pegar o currentTarget (identifica o alvo atual), ou seja o botão, vou procurar lá dentro o selector 'span'.

// *Por que eu usei o currentTarget ao invés do button?? A razão para usar event.currentTarget em vez de buttonToggle é que event.currentTarget é mais genérico e pode ser usado em qualquer função de manipulação de eventos, independentemente do elemento que está sendo clicado. Isso torna o código mais reutilizável.

// (linhas 7, 8 e 10)
//Esta parte do código atualiza o conteúdo de texto de um elemento ‘span’ para indicar qual modo (claro ou escuro) está atualmente ativado. Isso é útil para usuários de tecnologias assistivas, como leitores de tela, pois permite que eles saibam qual modo está atualmente ativado apenas pelo conteúdo de texto do site.

// (linha 10)
// É usada para alternar o valor da variável darkMode entre true e false a cada vez que o evento de clique é acionado. No início, darkMode é definido como true. Quando o botão é clicado, darkMode = !darkMode inverte o valor de darkMode. Se darkMode era true, ele se torna false. Se era false, ele se torna true. Essa alternância permite que o código saiba em qual modo (claro ou escuro) o site está atualmente, para que possa alternar para o outro modo na próxima vez que o botão for clicado. Isso é essencial para a funcionalidade de alternância de modo claro/escuro do site.
