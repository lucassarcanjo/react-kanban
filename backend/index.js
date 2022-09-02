require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const uuid = require('uuid').v4;
var cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.url, req.params, req.body);
    next();
})

app.post('/login', (req, res) => {

    const { login, senha } = req.body;
    const { DEFAULT_LOGIN, DEFAULT_PASSWORD, JWT_SECRET } = process.env;
    if (login === DEFAULT_LOGIN && senha === DEFAULT_PASSWORD) {
        const token = jwt.sign({ user: `${DEFAULT_LOGIN}` }, JWT_SECRET, { expiresIn: '1h' });
        return res.json(token);
    }
    res.status = 401;
    res.end();
});

const jwtValidation = (req, res, next) => {
    try {
        const { JWT_SECRET } = process.env;
        const auth = req.headers.authorization;
        const token = auth.replace('Bearer ', '');
        if (auth) {
            const decoded = jwt.verify(token, JWT_SECRET);
            res.locals = { user: decoded.user };
            console.info('JWT Middleware - validated token for user: ' + decoded.user);
        }
        else throw new Error("token not found");
    }
    catch (err) {
        console.info('JWT Middleware - error validating token\n' + err);
        res.sendStatus(401);
        return res.end();
    }
    next();
};

app.use(jwtValidation);

let cards = [];

app.get('/cards', (req, res) => {

    res.json(cards);
    res.end();

});

app.post('/cards', (req, res) => {

    const { titulo, conteudo, lista, id } = req.body;
    if (titulo && conteudo && lista && !id) {
        const card = { titulo, conteudo, lista, id: uuid() };
        cards.push(card);
        res.status(201).json(card);
    }
    else return res.sendStatus(400);

});

const validateAndLogAlterationOrDeletion = (req, res, next) => {

    const urlID = req.params.id;
    const dateTime = new Date().toLocaleString('pt-br');

    if (!urlID) return res.sendStatus(400);

    const card = cards.find(x => x.id === urlID);
    if (!card) return res.sendStatus(404);

    if (req.method === 'PUT') {
        const { titulo, conteudo, lista, id } = req.body;
        if (urlID !== id) return res.status(400).json({ error: 'ids não correspondem' });
        if (!(titulo && conteudo && lista && id)) return res.sendStatus(400);
        console.info(`${dateTime} - Card ${urlID} - ${card.titulo} - Alterar`);
    }

    else if (req.method === 'DELETE') {
        console.info(`${dateTime} - Card ${urlID} - ${card.titulo} - Remover`);
    }

    next();
}

app.use('/cards/:id', validateAndLogAlterationOrDeletion);

app.put('/cards/:id', (req, res) => {
    const { titulo, conteudo, lista, id } = req.body;
    const card = cards.find(x => x.id === id);
    card.titulo = titulo;
    card.conteudo = conteudo;
    card.lista = lista;
    return res.status(200).json(card);
});

app.delete('/cards/:id', (req, res) => {

    const { id } = req.params;
    cards = cards.filter(x => x.id !== id);
    res.json(cards);
});

app.listen(5000, () => console.log('listening on http://localhost:5000'));