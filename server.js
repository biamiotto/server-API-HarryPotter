import express from "express";
import bruxos from "./src/data/bruxos.js"

const app= express();
const serverPort = 3000;

app.get("/", (req, res) => {
    res.send("Minha API de Harry Potter está ativa!")
});

app.get("/bruxos", (req, res) => {
    res.json(bruxos);
})

app.listen(serverPort, () => {
    console.log(`Servidor Funcionando na porta ${serverPort}`)
});