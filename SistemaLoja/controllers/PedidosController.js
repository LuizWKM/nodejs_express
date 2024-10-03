//Importando o express
import express from "express";
//Escolhendo a variavel para ser o router
const router = express.Router();

// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
  const pedidos = [
    {
      nump: 1,
      valor: "388,80",
    },
    {
      nump: 2,
      valor: "3723,00",
    },
    {
      nump: 3,
      valor: "99,00",
    },
    {
      nump: 4,
      valor: "208,90",
    },
  ];
  res.render("pedidos", {
    pedidos: pedidos,
  });
});
export default router;
