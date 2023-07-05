import express from "express";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import categoriaRoutes from "./routes/categorias.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import proveedorRoutes from "./routes/proveedor.routes.js";
import facturaDetalleRoutes from "./routes/facturadetalle.routes.js";

const app = express();
const puerto = 4000;

const __dirname = dirname(fileURLToPath(import.meta.url));

//Port
app.set("PORT", puerto);

//MiddleWare
app.use(express.json());
app.use(cors());

//Routes
app.use(categoriaRoutes);
app.use(productosRoutes);
app.use(proveedorRoutes);
app.use(facturaDetalleRoutes);

app.use(express.static(join(__dirname, "../../FrontEnd")));
/* app.use("/home", express.static(__dirname + `/FrontEnd`)); */
export default app;
