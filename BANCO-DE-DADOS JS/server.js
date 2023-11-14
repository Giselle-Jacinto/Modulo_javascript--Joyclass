const express = require('express');
const mysql = require('mysql');
const app = express();

const conexao = mysql.createConnection({
    host: 'seu_host',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'seu_banco_de_dados'
});

app.get('/testar-conexao', (req, res) => {
    try {
        // Tenta estabelecer a conexão
        conexao.connect();
        res.send('Conexão bem-sucedida! Frase positiva aqui.');

    } catch (erro) {
        res.status(500).send('Erro na conexão: ' + erro.message);

    } finally {
        // Encerra a conexão, independentemente de ter ocorrido um erro ou não
        conexao.end();
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
