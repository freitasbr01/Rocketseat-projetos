import { GithubUser } from "./GithubUser.js"

// Lógica e estrutura dos dados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)

    this.load()
  }

  load() { // Carrega os favoritos no localstorage ou define um array vazio
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  save() { // Salva os favoritos no localstorage
    localStorage.setItem('github-favorites:', JSON.stringify(this.entries))
  }

  // o parametro que foi passado para cá foi o valor do input do botão de favoritar
  async add(username) {
    try {

      // verifica se o usuário já existe nos favoritos
      const userExists = this.entries.find(entry => entry.login === username)

      if(userExists) {
        throw new Error('Usuário já cadastrado!')
      }

      // Busca as informações do usuário no github
      const user = await GithubUser.search(username)

      if(user.login === undefined) {
        throw new Error('Usuário não encontrado!')
      }

      this.entries = [user, ...this.entries]

      this.update()
      this.save()

    } catch(error) {
      alert(error.message)
    }     
  }

  delete(user) {
    const filteredEntries = this.entries.filter(entry => entry.login != user.login)

    this.entries = filteredEntries
    this.update()
    this.save()
  }
}

// Criando o HTML nessa classe
export class FavoritesView extends Favorites {
  constructor(root) { 
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
    this.onadd()
  }

  onadd() {
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
      const { value } = this.root.querySelector('.search input')

      this.add(value) // está chamando uma função e o valor do parametro é o login
    }
  }

  //Toda vez que mudar algum dado ou fizer alguma ação essa função vai rodar
  // está preenchendo os elementos que foram criados pela função createRow() com conteúdo específico.
  update() {
    this.removeAllTr()

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
          this.delete(user) // se ele confirmar para remover chama essa função
        }
      }

      this.tbody.append(row) // está adicionando a linha de tabela criada (row) ao corpo da tabela (tbody). Isso significa que a linha de tabela preenchida com os detalhes do usuário será adicionada ao final da tabela.
    })

  }

  // é uma função que cria uma nova linha de tabela (<tr>) e retorna essa linha.
  createRow() {
    const tr = document.createElement('tr') // é usado para criar um novo elemento HTML no documento.
    
    tr.innerHTML = // é usado para definir ou alterar o conteúdo HTML de um elemento no documento.
    `
      <td class="user">
          <img src="https://github.com/maykbrito.png" alt="Imagem de maykbrito">
          <a href="https://github.com/maykbrito" target="_blank">
            <p>Mayk Brito</p>
            <span>/maykbrito</span>
          </a>
      </td>
  
      <td class="repositories">123</td>
  
      <td class="followers">1234</td>
  
      <td>
        <button class="remove">Remover</button>
      </td>
    `
    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr')
    .forEach((tr) => {
      tr.remove()
    })
  }
}