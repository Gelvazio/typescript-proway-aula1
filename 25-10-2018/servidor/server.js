const express = require('express');
const bodyParser = require('body-parser');
const contatoRoutes = require('./contatos-router');
const alunoRoutes = require('./alunos-router');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
contatoRoutes.build(app);
alunoRoutes.build(app);

app.listen(3000,()=>{
  console.log('servidor rodando na porta '+3000);
});