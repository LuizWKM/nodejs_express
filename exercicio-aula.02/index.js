// Importando o Express na aplicação
const express = require("express"); // CommonJS Modules
// Criando uma instância do Express
const app = express();

// Definindo o EJS como renderizador da página
app.set('view engine', 'ejs')

// CRIANDO A ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.render('index')
});


app.get("/perfil/:nome?", (req, res) => {
  // Coletando o parâmetro e guardando na variável
  const nome = req.params.nome;
  // Verificando se o parâmetro nome existe
  res.render('perfil', 
  {
  nome: nome
  });
});
// ROTA DE VÍDEOS
// :playlist? e :video? - parâmetros opcionais
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;
  res.render('videos', 
  {
  playlist: playlist,
  video: video
  });

  
});

// Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
