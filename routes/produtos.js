import express from 'express';
const router = express.Router();

// RETORNA TODOS OS PRODUTOS
router.get('/', (req, res) => {
    res.status(200).send({
        mensagem: 'Usando o GET em Rotas de produtos'
    })
});

// INSERE UM PRODUTO
router.post('/', (req, res) => {

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    }

    res.status(201).send({
        mensagem: 'Insere um produto',
        produtoCriado: produto
    });
});

// RETORNA OS DADOS DE UM PRODUTO
router.get('/:id', (req, res) => {
    const id = req.params.id;

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Voce descobrir o id ESPEFCIAL',
            id: id,
        });
    } else {
        res.status(200).send({
            mensagem: 'Voce passou um ID',
            id: id
        });
    }

});

router.patch('/', (req, res) => {
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota produtos'
    });
});

router.delete('/', (req, res) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota produtos'
    });
});

export { router };