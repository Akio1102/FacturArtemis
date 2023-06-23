import { Router } from "express";
import { methodsHTTP } from "../controllers/categoria.controllers.js";

const router = Router();

router.get("/", methodsHTTP.getCategorias);

export default router;
