// (PASSO 3)
export class GithubUser { 
  static search(username) { // (PASSO 4 - Define um método estático chamado search que recebe um nome de usuário como argumento)
    const endpoint = `https://api.github.com/users/${username}` // (PASSO 5 -  Define a URL da API do Github para buscar informações do usuário)

    // (PASSO 6 - Faz uma requisição para a URL definida e retorna a resposta convertida em JSON.
    return fetch(endpoint) 
    .then(data => data.json())
    
    // (PASSO 7 - Retorna um objeto com as informações desejadas do usuário)
    .then(({login, name, public_repos, followers}) => ({ // forma desestruturada
      login,
      name,
      public_repos,
      followers,
    }))
  }
}









// STATIC - Métodos estáticos são chamados diretamente na classe e não em instâncias da classe.