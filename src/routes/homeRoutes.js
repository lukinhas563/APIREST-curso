import { Router } from "express";
import homeControler from '../controllers/HomeController';
const router = new Router();

router.get('/', homeControler.index);


export default router;
