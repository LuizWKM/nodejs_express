// Importando o Express na aplicação
const express = require("express"); // CommonJS Modules
// Criando uma instância do Express
const app = express();

// Definindo o EJS como renderizador de páginas
app.set('view engine', 'ejs')

// CRIANDO A ROTA PRINCIPAL
app.get("/", (req, res) => {
  // Será renderizada a página index.ejs que está na pasta 'views'
  res.render('index');
});

// ROTA PERFIL
// :nome é um parâmetro obrigatório
// :nome? é um parâmetro opcional
app.get("/perfil/nome", (req, res) => {
  const nome = req.params.nome;
  res.render('perfil')

  nome: nome
});

// ROTA DE VÍDEOS
// :playlist? e :video? - parâmetros opcionais
app.get("/videos", (req, res) => {
  res.render('videos')
});

// ROTA DE PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = ['Computador', 'Celular', 'Tablet', 'Notebook']
  const produto = req.params.produto
  res.render("produtos", {
    //Enviando a variável para página
    // Será chamado na página
    produto: produto, // Variável que está na index (req.params)
    listaProdutos: listaProdutos
    // Na página produtos.ejs haverá uma testagem de condição
  })
});

// Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
