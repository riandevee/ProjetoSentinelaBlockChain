const express = require('express');
const leitor = require('fs');
const app = express();
const porta = 3000;


app.use(express.static('./'));


app.get('/api/blockchain', (req, res) => {
    if (leitor.existsSync('./BancodeDados.json')) {
        const dados = JSON.parse(leitor.readFileSync('./BancodeDados.json', 'utf8'));
        res.json(dados);
    } else {
        res.json([]);
    }
});

app.listen(porta, () => {
    console.log(` Dashboard rodando em http://localhost:${porta}`);
});
