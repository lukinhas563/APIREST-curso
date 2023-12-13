import { Router } from "express";
import photoControler from '../controllers/PhotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, photoControler.store);

export default router;
