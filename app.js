import express from 'express';
export const app = express();

import morgan from 'morgan';
import bodyParser from 'body-parser';
import { router as rotasProdutos } from './routes/produtos.js';
import { router as rotasPedidos } from './routes/pedidos.js';

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
})

app.use('/produtos', rotasProdutos);
app.use('/pedidos', rotasPedidos);

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 400;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
});