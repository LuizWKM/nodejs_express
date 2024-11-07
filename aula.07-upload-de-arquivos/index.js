import express from 'express'
// Importando o multer
import multer from 'multer'
const app = express()

//Configurações
app.use(express.static('public'));
app.set('view engine', 'ejs');

const upload = multer({dest: "public/uploads/"})

// ROTA PRINCIPAL
app.get("/", (req,res) =>{
    res.render("index")
})

// ROTA DE UPLOAD
app.post("/upload", upload.single("file"),(req,res) => {
    res.redirect("/");
});


const port = 8081
app.listen(port, (error) => {
    if(error){
        console.log(`Ocorreu um erro! ${error}`);
    } else {
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}.`);
    }
});