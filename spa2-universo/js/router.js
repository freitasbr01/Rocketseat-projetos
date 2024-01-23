export class Router {
  routes = {}

  add(routeName, page) {
  this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {

    const { pathname } = window.location
    let route = this.routes[pathname] || this.routes["/404"] // Tente obter a rota correspondente ao pathname atual. Se essa rota não existir, use a rota ‘/404’”. 

    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  
    
    const body = document.querySelector('#container')
    body.classList.remove('body-home', 'body-universe','body-explorer')

    switch(pathname) {
      case '/':
        body.classList.add('body-home');
        break;
      case '/universe':
        body.classList.add('body-universe');
        break;
      case '/explorer':
        body.classList.add('body-explorer');
        break;
      default:
        break;
    }

    document.querySelectorAll('nav a').forEach((item) => {
      item.classList.remove('active')
    })

    document.querySelector(`nav a[href="${pathname}"]`).classList.add('active');

  }
  
}

/* [linha 17] - Esta é a declaração de uma função chamada handle. Esta função é um método do objeto Router.

[linha 18] - Esta linha está usando a desestruturação para extrair a propriedade pathname do objeto window.location. window.location é um objeto embutido no JavaScript que contém informações sobre a URL atual. pathname é a parte da URL que vem após o nome do host e a porta, mas antes da string de consulta e do fragmento.

[linha 19] - Esta linha está tentando encontrar a rota correspondente ao pathname atual no objeto routes do roteador. Se não encontrar uma rota correspondente, ele usará a rota 404 como fallback. O operador || é usado aqui para fornecer um valor padrão caso this.routes[pathname] seja undefined.

[linha 21] - A função fetch é uma função embutida no JavaScript que é usada para fazer solicitações HTTP. Neste caso, está sendo usada para solicitar o conteúdo da página HTML da rota atual.

[linha 22] - fetch retorna uma promessa que resolve para o objeto de resposta da solicitação HTTP. O método text é chamado no objeto de resposta para obter o corpo da resposta como uma string. O resultado é passado para o próximo manipulador then.
Nesta linha, data é o objeto de resposta e data.text() é um método que lê o corpo da resposta e retorna uma nova Promessa que resolve para o texto da resposta. Este método é útil quando você quer obter o corpo da resposta como uma string, que é o que você está fazendo no seu código para obter o HTML da página.

[linha 23 e 24] - Este é o próximo manipulador then, que recebe a string HTML do manipulador then anterior. Ele seleciona o elemento com o id app no documento usando document.querySelector('#app') e define seu innerHTML para a string HTML. Isso efetivamente carrega o conteúdo da página HTML na página atual.

//Em resumo, essa função handle() é responsável por obter dinamicamente o conteúdo de uma rota específica e atualizar o conteúdo da página com base nessa rota. Essa abordagem é comum em aplicações de página única (SPA), onde o conteúdo é carregado dinamicamente sem recarregar a página inteira. */