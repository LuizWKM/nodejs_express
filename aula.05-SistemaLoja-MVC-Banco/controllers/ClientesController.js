import express from "express";
const router = express.Router();
// Importando o model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  });
});

// ROTA DE CADASTRO DE CLIENTES
router.post("/clientes/new", (req, res) => {
  // RECEBENDO OS DADOS DO FORMULÁRIO E GRAVANDO NAS VARIÁVEIS
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  }).then(() => {
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error)
  })
});
// ROTA DE EXCLUSÃO DE CLIENTES
// ESSA ROTA POSSUI UM PARÂMETRO ID
router.get("/clientes/delete/:id", (req,res) => {
        // COLETAR O ID QUE VEIO NA URL
        const id = req.params.id
        // MÉTODO PARA EXCLUIR
        Cliente.destroy({
            where: {
                id : id
            }
        }).then(() => {
            res.redirect("/clientes")
        }).catch(error => {
            console.log(error)
        })
})

export default router;
