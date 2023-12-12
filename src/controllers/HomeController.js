import Aluno from '../models/Aluno';

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
            nome: 'Lucas',
            sobrenome: 'Montenegro',
            email: 'lucasmontenegro@gmail.com',
            idade: 26,
            peso: 80,
            altura: 1.75,
        })
        res.json(novoAluno);
    }
}

export default new HomeController();