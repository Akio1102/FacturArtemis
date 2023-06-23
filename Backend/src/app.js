import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";

const app = express();
const puerto = 7000;

app.set("PORT", puerto);
app.use("/api/categorias", categoriaRoutes);
export default app;
