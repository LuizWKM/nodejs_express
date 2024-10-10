//Primeiro passo:
import express from "express";

//Segundo passo: 
const app = express();

//Sexto passo:
import FilmesController from "./controllers/FilmesController.js"

//Oitavo passo:
import connection from "./config/sequelize-config.js";

//Quinto passo:
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

//Setimo passo:
app.use("/", FilmesController);

//Nono passo:
    connection.authenticate().then(() => {
        console.log("Conexão com o banco de dados feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    });

connection.query("CREATE DATABASE IF NOT EXISTS filmes;"). then(() => {
    console.log("O banco de dados está criado");
}).catch((error) => {
    console.log(error);
})

//Terceiro passo:
const port = 8080
app.listen(port, (error) => {
    if(error){
        console.log(`Erro ao iniciar o servidor: ${error}.`)
    } else {
        console.log(`Servidor rodando em http://localhost:${port}`);
    }
});