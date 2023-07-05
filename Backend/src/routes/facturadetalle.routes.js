import { Router } from "express";
import {
  getFacturasDetalle,
  getFacturaDetalleID,
  postFacturaDetalle,
  putFacturaDetalle,
  deleteFacturaDetalle,
} from "../controllers/facturadetalle.controllers.js";

const router = Router();

router.get("/api/productos", getFacturasDetalle);
router.get("/api/productos/:FacturaID-:ProductoID", getFacturaDetalleID);
router.post("/api/productos", postFacturaDetalle);
router.put("/api/productos/:FacturaID-:ProductoID", putFacturaDetalle);
router.delete("/api/productos/:FacturaID-:ProductoID", deleteFacturaDetalle);

export default router;
