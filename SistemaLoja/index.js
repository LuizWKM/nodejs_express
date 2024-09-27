// Importando o Express com ES6 Modules
import express from "express";
//Iniciando o Express na variável app
const app = express();

// Importando os Controllers (onde estão as rotas)
import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";
import ProdutosController from "./controllers/ProdutosController.js";
// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// Definindo o uso das rotas dos Controllers
app.use("/", ClientesController);
app.use("/", PedidosController);
app.use("/", ProdutosController);

app.get("/", (req, res) => {
  res.render("index");
});

const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
