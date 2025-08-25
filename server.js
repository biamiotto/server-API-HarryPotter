import express from "express";
import dados from "./src/data/dados.js"

const {bruxos, varinhas, animais, pocoes, casas} = dados;

const app= express();
const serverPort = 3000;

app.get("/", (req, res) => {
    res.send("Bem Vindo(a) ao Mundo de Hogwards! 🏰 Minha API de Harry Potter está ativa!")
});

app.get("/bruxos", (req, res) => {
    if (bruxos.length > 0) {
        res.status(200).json(bruxos);
    } else {
        res.status(404).json({
            mensagem: "Nenhum bruxo encontrado!"
        })
    }
})

app.get("/bruxos/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id)
    const bruxo = bruxos.find(b => b.id === id);
    
    if(bruxo) {
        res.status(200).json(bruxo);
    } else {
        res.status(404).json({
        mensagem: "ID do bruxo não encontrado!"
        })
    }
});

app.get("/bruxos/nome/:nome", (req, res) => {
    let nome = req.params.nome.toLowerCase();

    const bruxosEncontrados = bruxos.filter(b => b.nome.
toLowerCase().includes(nome));

    if(bruxosEncontrados.length > 0) {
        res.status(200).json(bruxosEncontrados);
    } else {
        res.status(404).json({
            mensagem: "Nenhum bruxo encontrado com esse nome!"
        })
    }
}); 

app.get("/bruxos/casa/:casa", (req, res) => {
    let casa = req.params.casa;

    const bruxosDaCasa = bruxos.filter(b => b.casa.toLowerCase() === casa.
toLowerCase());
    
    if (bruxosDaCasa.length > 0) {
       res.status(200).json(bruxosDaCasa);
    } else {
        res.status(404).json({
            mensagem: "Nenhum bruxo encontrado nessa casa!"
        })
    }
})

app.get('/casas', (req, res) => {
    res.json({
      casas: [
        { nome: "Grifinória", animal: "🦁", fundador: "Godrico Gryffindor" },
        { nome: "Sonserina", animal: "🐍", fundador: "Salazar Slytherin" },
        { nome: "Corvinal", animal: "🦅", fundador: "Rowena Ravenclaw" },
        { nome: "Lufa-lufa", animal: "🦡", fundador: "Helga Hufflepuff" }
      ]
    });
  });

app.get("/varinhas", (req, res) => {
    if (varinhas.length > 0) {
        res.status(200).json(varinhas);
    } else {
        res.status(404).json({
            mensagem: "Nenhuma varinha encontrada!"
        })
    }
})

app.get("/animais", (req, res) => {
    if (animais.length > 0) {
        res.status(200).json(animais);
    } else {
        res.status(404).json({
            mensagem: "Nenhum animal encontrado!"
        })
    }
})

app.get("/pocoes", (req, res) => {
    if (pocoes.length > 0) {
        res.status(200).json(pocoes);
    } else {
        res.status(404).json({
            mensagem: "Nenhuma poção encontrada!"
        })
    }
})

app.get("/varinhas/id/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id)
    const varinha = varinhas.find(v => v.id === id);
    console.log(varinha);

    if (varinha) {
        res.status(200).json(varinha);
    } else {
        res.status(404).json({
            mensagem: "ID de nenhuma varinha encontrado!"
        })
    }
})

app.get("/animais/id/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id)
    const animal = animais.find(a => a.id === id);
    console.log(animal);

    if (animal) {
        res.status(200).json(animal);
    } else {
        res.status(404).json({
            mensagem: "ID de nenhum animal encontrado!"
        })
    }
})

app.get("/pocoes/id/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id)
    const pocao = pocoes.find(p => p.id === id);
    console.log(pocao);

    if (pocao) {
        res.status(200).json(pocao);
    } else {
        res.status(404).json({
            mensagem: "ID de nenhuma poção encontrado!"
        })
    }
})

app.listen(serverPort, () => {
    console.log(`Servidor Funcionando na porta ${serverPort}!`)
});