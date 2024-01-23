export class Router {  
  routes = {} // Aqui, um objeto vazio é criado e atribuído à propriedade routes. Este objeto será usado para armazenar as rotas da aplicação.

  // Este é o método add(), que recebe dois parâmetros: routeName e page. Este método adiciona uma nova rota ao objeto routes, usando routeName como chave e page como valor.
  add(routeName, page) {
    this.routes[routeName] = page
  }

  // IMPEDE O COMPORTAMENTO PADRÃO DE UM NAVEGADOR AO CLICAR EM UM LINK DO ROTEADOR (RECARREGAR A PAGINA)
  // Este é o método route(), que é chamado quando um link é clicado. Ele recebe um objeto de evento como parâmetro. O método preventDefault() é chamado para evitar que a página seja recarregada.
  route(event) {
    event = event || window.event //  Esta linha é usada para garantir a compatibilidade entre diferentes navegadores. Em alguns navegadores mais antigos, o objeto do evento não é passado automaticamente para o manipulador de eventos e deve ser acessado através do objeto global window. Portanto, essa linha de código está basicamente dizendo “use o evento que foi passado como argumento, mas se ele não existir, use window.event”.
    event.preventDefault()

    window.history.pushState({}, "", event.target.href) // Esta linha usa o método pushState() do objeto history para adicionar uma nova entrada ao histórico do navegador. Isso atualiza a URL da página sem recarregar a página.

    this.handle() // Esta linha chama o método handle(), que carrega o conteúdo da página correspondente à rota atual.
  }

  // ATUALIZA A VISUALIZAÇÃO NA PAGINA
  handle() {
    const { pathname } = window.location // Este é o método handle(). Ele extrai o pathname (o caminho da URL) do objeto location.
    const route = this.routes[pathname] || this.routes[404] // Esta linha obtém a rota correspondente ao pathname do objeto routes. Se não houver uma rota correspondente, a rota 404 é usada.

    // Estas linhas usam a função fetch() para carregar o conteúdo da página HTML correspondente à rota. O conteúdo é então inserido no elemento <div id="app"></div>.
    // A função fetch() é usada para carregar o conteúdo da página HTML correspondente à rota especificada. route é uma variável que contém o caminho para o recurso que você deseja buscar.
    // Depois que a promessa retornada pela função fetch() é resolvida, ela retorna um objeto Response. O método text() é chamado neste objeto Response para ler o corpo da resposta e retornar outra promessa que resolve com o texto.
    // Depois que a promessa retornada pelo método text() é resolvida, ela retorna o texto da resposta. Este texto é então inserido no elemento HTML com o id app. O método querySelector('#app') é usado para selecionar este elemento e a propriedade innerHTML é usada para inserir o texto HTML.
    // Prometo que vou buscar essa rota. Então/Quando concluir prometo que vou executar essa função. // data é usado para acessar o objeto Response e extrair o corpo da resposta como texto.
    fetch(route) 
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }

}

// AQUI CRIEI TODO O MOTOR DO CARRO, A LOGICA.
// Esta é a definição da classe Router. Ela tem um objeto routes para armazenar todas as rotas. A função add() adiciona uma nova rota ao objeto routes. A função route() é chamada quando um link é clicado. Ela atualiza a URL da página e chama a função handle(). A função handle() carrega o conteúdo da página correspondente à rota atual e insere-o no elemento <div id="app"></div>.