// Importando o Express (CommonJS)
const express = require("express")
const app = express()

// Criando instância do servidor HTTP do Node.js
const http = require("http").createServer(app)

// Importando o Socket.io
const io = require("socket.io")(http);

// SOCKET.IO
io.on("connection", (socket) => {
    socket.on("join", (data) => {
        console.log(`${data.nickname} entrou no chat`);
    // Mandando os dados para o front
    io.emit("join", data);
    });

    socket.on("msg", (data) => {
        console.log(data)
        // Enviando para todos
        io.emit("showMsg", data)
    })
});



// Configurando EJS
app.set("view engine", "ejs")

// ROTA PRINCIPAL
app.get("/", (req,res) => {
    res.render("index")
})

const port = 3001;
const host = "0.0.0.0"
http.listen(port, host, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
})

