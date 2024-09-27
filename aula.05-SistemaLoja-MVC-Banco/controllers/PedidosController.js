import express from "express";
const router = express.Router();
// Importando o model de Pedido
import Pedido from "../models/Pedido.js";

// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
  Pedido.findAll()
    .then((pedidos) => {
      res.render("pedidos", {
        pedidos: pedidos,
      });
    })
    .catch((error) => {
      console.log(erro);
    });
});

// ROTA DE CADASTRO DE PEDIDOS
router.post("/pedidos/new", (req, res) => {
  const numero = req.body.numero;
  const valor = req.body.valor;
  Pedido.create({
    numero: numero,
    valor: valor,
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(error);
    });
});
// ROTA DE EXCLUSÃO DE PEDIDOS
// ESSA ROTA POSSUI UM PARÂMETRO ID
router.get("/pedidos/delete/:id", (req, res) => {
  // COLETAR O ID QUE VEIO NA URL
  const id = req.params.id
  // MÉTODO PARA EXCLUIR
  Pedido.destroy({
    where:{
      id: id
    }
  }).then(() => {
    res.redirect("/pedidos")
  }).catch(error => {
    console.log(error)
  })
})
export default router;
