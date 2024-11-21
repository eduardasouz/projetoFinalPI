const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express()
const PORT = 3000;

app.use(bodyParser.json())

app.use('./api/auth', authRoutes);

app.listem(PORT, ()=>{
    console.log('Servidor rodando na porta ${POT}')

})

