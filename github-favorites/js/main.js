import { FavoritesView } from "./Favorites.js"; // (PASSO 1)

new FavoritesView("#app") // (PASSO 2)
// Cria uma nova instância da classe FavoritesView e passa o seletor "#app" como argumento. Isso significa que a visualização de favoritos será anexada ao elemento com o ID app na sua página HTML.

// Agora eu vou para a class no constructor do FavoritesView e no root recebendo o app e passei o app para o super que é o constructor anterior