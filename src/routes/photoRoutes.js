import { Router } from "express";
import photoControler from '../controllers/PhotoController';

const router = new Router();

router.post('/', photoControler.store);

export default router;
