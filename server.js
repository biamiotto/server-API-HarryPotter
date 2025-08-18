import express from "express";
import bruxos from "./src/data/bruxos.js"

const app= express();
const serverPort = 3000;

app.get("/", (req, res) => {
    res.send("Minha API de Harry Potter está ativa!")
});

app.get("/bruxos", (req, res) => {
    res.json(bruxos);
});

app.get("/bruxos/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id)
    const bruxo = bruxos.find(b => b.id === id);
    
    if(bruxo) {
        res.status(200).json(bruxo);
    } else {
        res.status(404).json({
        mensagem: "Bruxo não encontrado!"
        })
    }
})

app.listen(serverPort, () => {
    console.log(`Servidor Funcionando na porta ${serverPort}!`)
});