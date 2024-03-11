// ROTAS DE USUÁRIO

const { Router } = require("express") // Funcionalidade de rotas;

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router();
// Representa um conjunto de rotas específicas para manipular requisições relacionadas aos usuários. O Router() é um método do Express que cria um novo roteador.

const usersController = new UsersController();

usersRoutes.post("/", usersController.create)
// Quando alguém fizer uma requisição POST para esse caminho, a função create(request, response) será executada para processar a requisição.

usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;