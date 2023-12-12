import { Router } from "express";
import userControler from '../controllers/UserController';
const router = new Router();

router.post('/', userControler.store);
router.get('/', userControler.index);
router.get('/:id', userControler.show);
router.put('/:id', userControler.update);
router.delete('/:id', userControler.delete);


export default router;

/*
index -> Lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/