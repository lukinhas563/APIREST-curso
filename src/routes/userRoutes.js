import { Router } from "express";
import userControler from '../controllers/UserController';
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Não deveria existir
router.get('/', userControler.index); // Lista usuários
// router.get('/:id', userControler.show); // Lista usuário

router.post('/', userControler.store);
router.put('/', loginRequired, userControler.update);
router.delete('/', loginRequired, userControler.delete);


export default router;

/*
index -> Lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/