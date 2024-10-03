import express from "express";
const router = express.Router();

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  const cliente = [
    {
      num: 1,
      nome: "Carlos da Silva",
      cpf: "458.115.770-60",
      endereco:
        "Quadra QE 11 Área Especial C, nº435, Guará I. CEP: 71090-285. Brasília - Distrito Federal",
    },
    {
      num: 2,
      nome: "Joaquim Magno",
      cpf: "648.453.620-15",
      endereco:
        "Rua Cristiano Olsen, nº254, Jardim Sumaré. CEP: 16015-244. Araçatuba - São Paulo",
    },
    {
      num: 3,
      nome: "Charles Emmanuel",
      cpf: "571.147.050-77",
      endereco:
        "Rua da Imprensa, nº97, Monte Castelo. CEP: 79002-290. Campo Grande - Mato Grosso do Sul",
    },
    {
      num: 4,
      nome: "Guilherme Cabral",
      cpf: "155.050.150-00",
      endereco:
        "Rua Domingos Olímpio, nº42, Casa, Centro. CEP: 62011-140. Sobral - Ceará",
    },
  ];
  res.render("clientes", {
    cliente: cliente,
  });
});

export default router;
