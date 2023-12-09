import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).send({
        mensagem: 'Usando o GET em Rotas de pedidos'
    })
});


router.post('/', (req, res) => {

    const pedido = {
        id: req.body.id,
        quantidade: req.body.quantidade
    }

    res.status(201).send({
        mensagem: 'Pedido criado',
        PedidoCriado: pedido
    });
});

// RETORNA OS DADOS DE UM PRODUTO
router.get('/:id', (req, res) => {
    const id = req.params.id;

    res.status(200).send({
        mensagem: 'Voce passou um ID',
        id: id
    });


});


router.patch('/', (req, res) => {
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota pedidos'
    });
});

router.delete('/', (req, res) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota pedidos'
    });
});

export { router };