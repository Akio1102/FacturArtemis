import { Router } from "express";
import {
  getCategorias,
  postCategorias,
} from "../controllers/categoria.controllers.js";

const router = Router();

router.get("/api/categorias", getCategorias);
router.post("/api/categorias", postCategorias);

export default router;
