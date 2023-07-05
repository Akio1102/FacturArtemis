import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import proveedorRoutes from "./routes/proveedor.routes.js";
import facturaDetalleRoutes from "./routes/facturadetalle.routes.js";

const app = express();
const puerto = 4000;

//Port
app.set("PORT", puerto);

//MiddleWare
app.use(express.json());

//Routes
app.use(categoriaRoutes);
app.use(productosRoutes);
app.use(proveedorRoutes);
app.use(facturaDetalleRoutes);
export default app;
