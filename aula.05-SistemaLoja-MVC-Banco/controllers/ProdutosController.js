import express from "express";
const router = express.Router();
// Importando o model de Produto
import Produto from "../models/Produto.js";

// ROTA PRODUTOS
router.get("/produtos", (req, res) => {
  Produto.findAll()
    .then((produtos) => {
      res.render("produtos", {
        produtos: produtos,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE CADASTRO DE PRODUTOS
router.post("/produtos/new", (req, res) => {
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;

  Produto.create({
    nome: nome,
    preco: preco,
    categoria: categoria,
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});
// ROTA DE EXCLUSÃO DE PRODUTOS
// ESSA ROTA POSSUI UM PARÂMETRO ID
router.get("/produtos/delete/:id", (req, res) => {
    // COLETAR O ID QUE VEIO NA URL
    const id = req.params.id
    // MÉTODO PARA EXCLUIR
    Produto.destroy({
        where:{
            id: id
        }
    }).then(() => {
        res.redirect("/produtos")
    }).catch((error) => {
        console.log(error)
    })
})

export default router;
