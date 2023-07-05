import { Router } from "express";
import {
  getProveedores,
  getProveedorID,
  postProveedor,
  putProveedor,
  deleteProveedor,
} from "../controllers/proveedor.controllers.js";

const router = Router();

router.get("/api/proveedor", getProveedores);
router.get("/api/proveedor/:id", getProveedorID);
router.post("/api/proveedor", postProveedor);
router.put("/api/proveedor/:id", putProveedor);
router.delete("/api/proveedor/:id", deleteProveedor);

export default router;
