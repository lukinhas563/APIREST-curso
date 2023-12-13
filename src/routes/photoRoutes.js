import { Router } from "express";
import multer from "multer";

import photoControler from '../controllers/PhotoController';
import multerConfig from "../config/multerConfig";

const upload = multer(multerConfig);
const router = new Router();

router.post('/', upload.single('foto'), photoControler.store);


export default router;
