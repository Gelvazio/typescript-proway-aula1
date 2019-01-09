require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./static'));
app.use('/resources/bootstrap', express.static('./node_modules/bootstrap/dist'));

const m1 = (req, res, next) => {
    console.log('Middleware 01');
    next();
};
const m2 = (req, res, next) => {
    console.log('Middleware 02');
    next();
};

const m3 = (req, res, next) => {
    console.log('Middleware 03');
    res.send('Middleware executado com sucesso');
}

app.all('*', (req, res, next) => {
    console.log('Autorizador');
    next();
});

app.get('/', [m1,m2,m3]);

app.post('/login', (req, res, next) => {
    console.log(req.body.email);
    res.send('Email=' + req.body.email);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`serve rodando na porta ${port}`));