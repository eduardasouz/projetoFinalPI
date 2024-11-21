const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express()
const PORT = 3000;

//Middleware para ler as requisições HTPP que vierem do front
app.use(bodyParser.json())

//Rotas(Isso é o endereço que você vai chamar no front, isso é o que sera executado)
app.use('./api/auth', authRoutes);

app.listem(PORT, ()=>{
    console.log('Servidor rodando na porta ${POT}')

})

