const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static('public'));

const port = 8080;

app.get("/", (req, res) => {
  res.render("index");
})

app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  }  else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});