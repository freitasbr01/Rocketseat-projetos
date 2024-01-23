import { Router } from './router.js'

const router = new Router() // criada uma nova instância da class Router

// Estas linhas adicionam várias rotas ao objeto router
router.add("/", "pages/home.html") // Aqui é como se eu tivesse chamando uma função com argumentos
router.add("/about", "pages/about.html")
router.add("/contact", "pages/contact.html")
router.add(404, "pages/404.html")

// Esta linha chama o método handle() do objeto router, que carrega o conteúdo da página correspondente à rota atual e insere-o no elemento <div id="app"></div>.
router.handle()

window.onpopstate = () => handle() // Esta linha adiciona um ouvinte de evento ao objeto window para o evento onpopstate, que é disparado quando a sessão de histórico (a lista de sites visitados) é modificada. Quando esse evento é disparado, a função handle() é chamada.
window.route = () => router.route() // Esta linha adiciona a função route() do objeto router ao objeto window, permitindo que seja chamada a partir do HTML. A função route() é chamada quando um link é clicado. Ela atualiza a URL da página e chama a função handle().




// AQUI SÓ ESTOU DIRIGINDO O CARRO, SÓ OPERO ELE.





















/*

(LINHA 8 a 10)
// o evento disparo é o click
// Verifica se eu passei um evento aqui OU se eu não passei o evento, pega o que está na janela.

(LINHA 12)
// Adiciona uma nova entrada ao histórico de sessão do navegador com o URL do link clicado (event.target.href), mas sem recarregar a página. Isso é útil para criar navegação de página única (SPA) onde a página não é recarregada ao navegar.
// Coloque os dados no historico e avise que estou sim mudando de pagina já que isso também foi retirado com o preventDefault mas só fica no histórico não muda nada, vai mudar com o pathname.

(LINHA 18 e 19)
// Vai dentro do location encontre o pathname e coloque aqui fora como uma constante. O nome disso é desestruturar, eu to tirando de dentro do objeto. Eu to desestruturando o location para pegar apenas o pathname dele. É uma propriedade que retorna o caminho e o nome do arquivo da página atual.
// Através do location.pathname eu consigo ter acesso ao /contact (e aos outros) se eu tiver mapeado o contact eu vou conseguir descobrir qual que é a pagina dele.

(LINHA 20 a 22)
// Prometo pra você que vou buscar essa rota. Então/Quando concluir prometo que vou executar essa função.

(TUDO)
Primeiro eu desabilitei a mudança automatica da pagina só que ao fazer isso eu não estava avisando pra minha janela para onde eu estava indo, dessa forma ele estava entendendo que todo link ficava na mesma pagina e atraves do window.history.pushState({}, "", event.href )  ele começa a colocar no histórico que eu estou sim mudando de página, mas fica só no histórico não mudou nada ainda. Agora tudo que eu peciso vou pegar no handle
  
*/