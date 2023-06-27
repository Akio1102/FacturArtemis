import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";

const app = express();
const puerto = 4000;

//Port
app.set("PORT", puerto);

//MiddleWare
app.use(express.json());

//Routes
app.use(categoriaRoutes);
export default app;
