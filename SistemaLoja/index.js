const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/clientes", (req, res) => {
  res.render("clientes.ejs");
});

app.get("/pedidos", (req,res) => {
  res.render("pedidos.ejs");
});

app.get("/produtos", (req, res) => {
  res.render("produtos.ejs");
});

const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
