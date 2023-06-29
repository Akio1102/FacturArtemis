import { Router } from "express";
import {
  getCategorias,
  getCategoria,
  postCategoria,
  putCategoria,
  deleteCategorias,
} from "../controllers/categoria.controllers.js";

const router = Router();

router.get("/api/categorias", getCategorias);
router.get("/api/categorias/:id", getCategoria);
router.post("/api/categorias", postCategoria);
router.put("/api/categorias/:id", putCategoria);
router.delete("/api/categorias/:id", deleteCategorias);

export default router;
