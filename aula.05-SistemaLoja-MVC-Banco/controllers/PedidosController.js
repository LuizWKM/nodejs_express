import express from "express";
const router = express.Router();
// Importando o model de Pedido
import Pedido from "../models/Pedido.js"

// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
  Pedido.findAll().then((pedidos) => {
    res.render("pedidos", {
      pedidos: pedidos,
    });
  }).catch(error => {
     console.log(erro)
  })
});
export default router;
