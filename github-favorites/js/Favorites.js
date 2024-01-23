  // (PASSO 8 - Importa a classe GithubUser do arquivo GithubUser.js
import { GithubUser } from "./GithubUser.js"

// CLASSE QUE VAI CONTER A LÓGICA DOS DADOS E COMO OS DADOS SERÃO ESTRUTURADOS
// PASSO 9: Exporta a classe Favorites
export class Favorites {
  constructor(root) {  // PASSO 10: é automaticamente chamado quando uma nova instância da classe é criada.
    this.root = document.querySelector(root) // // PASSO 11: Seleciona o elemento do DOM correspondente ao seletor recebido, estou procurando o app e colocando no this root.
    // Passo 12: Chama o método load
    this.load()
  }

   // Passo 13: Define o método load
  load() {
    // Passo 14: Carrega os favoritos salvos no localStorage ou define um array vazio se não houver nada salvo
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  // Passo 15: Define o método save
  save() {
    // Passo 16: Salva os favoritos no localStorage
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }

  // Passo 17: Define o método add que recebe um nome de usuário como argumento
  async add(username) {
    try {
      // Passo 18: Verifica se o usuário já existe nos favoritos
      const userExists = this.entries.find(entry => entry.login === username)

      // Passo 19: Se o usuário já existir, lança um erro
      if(userExists) {
        throw new Error('Usuário já cadastrado!')
      }

    // Passo 20: Busca as informações do usuário na API do Github  
    const user = await GithubUser.search(username)

    // Passo 21: Se o usuário não for encontrado, lança um erro
      if(user.login === undefined) {
        throw new Error('Usuário não encontrado!')
      }

      // Passo 22: Adiciona o usuário aos favoritos
      this.entries = [user, ...this.entries] // Criando um novo array colocando usuario e trazendo de volta todos os outros elementos que eu tinha no array (lembrando do principio de imutabilidade).
      // Passo 23: Atualiza a visualização dos favoritos
      this.update()
      // Passo 24: Salva os favoritos atualizados
      this.save()

    } catch(error) {
      alert(error.message) // Passo 25: Se ocorrer algum erro, exibe uma mensagem de alerta com o erro
    }
  }

  // Passo 26: Define o método delete que recebe um usuário como argumento
  delete(user) {
    // Passo 27: Filtra os favoritos para remover o usuário recebido
    // Higher-order functions 
    // estou recriando um array e só preciso ver o que vou ter dentro desse array, se eu retonar falso ele elimina do array se eu retornar true ele coloca no array
    const filteredEntries = this.entries.filter(entry => entry.login != user.login) // Se o login do entry atual for diferente do login do user, o entry será incluído em filteredEntries.

    // Passo 28: Atualiza os favoritos com a lista filtrada
    this.entries = filteredEntries
    this.update()
    this.save()
  }
}


// CLASSE QUE VAI CRIAR A VISUALIZAÇÃO E EVENTOS DO HTML
export class FavoritesView extends Favorites {
  constructor(root) { // recebi o app primeiro aqui e depois passei para o super que passou para o constructor anterior
    super(root) // é como se eu tivesse criando um link entre os dois, entre FavoritesView e Favorites, vai chamar o constructor anterior.

    this.tbody = this.root.querySelector('table tbody')

    // daqui para baixo já existe o this.entries
    this.update()
    this.onadd()
  }

  onadd() {
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
      const { value } = this.root.querySelector('.search input')

      this.add(value)
    }
  }

  // VOU CRIAR O HTML DIRETAMENTE NESSA FAVORITESVIEW
  // toda vez que mudar um dado ou eu fizer uma ação essa função vai rodar sempre.
  update() {
    this.removeAllTr() // vai remover as linhas

    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que deseja deletar essa linha?')
        if(isOk) {
          this.delete(user)
        }
      }

      this.tbody.append(row) // é uma funcionalidade da DOM e ela vai receber um elemento HTML da DOM
    })    

  }

  createRow() {
    // preciso criar meu tr pela DOM pelo meu js
    const tr = document.createElement('tr')

    // preciso colocar/adicionar esse conteudo dentro do tr
    tr.innerHTML = ` 
      <td class="user">
        <img src="https://github.com/maykbrito.png" alt="Imagem de maykbrito">
        <a href="https://github.com/maykbrito" target="_blank">
          <p>Mayk Brito</p>
          <span>maykbrito</span>
        </a>
      </td>
      <td class="repositories">76</td>
      <td class="followers">9589</td>
      <td>
        <button class="remove">&times;</button>
      </td>
    `
    return tr // ela vai retornar no meu tr porque agora eu vou usar essa estrutura da função para cada elemento que eu tiver dos meus dados.
  }

  // sempre ao atualizar minha listagem vai remover os elementos, essa é a primeira ação
  removeAllTr() {
    this.tbody.querySelectorAll('tr')
    .forEach((tr) => { // essa função foi executada para cada um tr
      tr.remove()
    })
  }
}


