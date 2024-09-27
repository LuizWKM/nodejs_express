// Importando o express
import express from "express";
//Escolhendo a variavel para ser o router
const router = express.Router();

// ROTA PRODUTOS
router.get("/produtos", function (req, res) {
  const produtos = [
    {
      img: "imgs/fob.png",
      nomep: "Headphone Fone de Ouvido Havit HV-H2002d",
      pre: "179,90",
      cat: "Fones para Jogos",
    },
    {
      img: "imgs/ps5b.png",
      nomep: "PlayStation®5 Slim Edição Digital com 2 Jogos",
      pre: "3732,00",
      cat: "Consoles",
    },
    {
      img: "imgs/mouseb.png",
      nomep: "Mouse Gamer Redragon Cobra",
      pre: "99,00",
      cat: "Mouses para Jogos",
    },
    {
      img: "imgs/ventiladorb.png",
      nomep: "Ventilador de Mesa MONDIAL 110V",
      pre: "109,90",
      cat: "Ventiladores de Mesa",
    },
  ];
  res.render("produtos", {
    produtos: produtos,
  });
});

export default router