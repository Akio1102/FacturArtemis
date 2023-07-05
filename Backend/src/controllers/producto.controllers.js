import Querys from "../db/database.js";

export const getProductos = async (req,res)=>{
    try {
        const sql = `SELECT * FROM productos`;
        Querys (req,[sql])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getProductoID = async (req,res)=>{
    try {
        const { id } = req.params;
        const sql = `SELECT * FROM productos WHERE ProductoID = ?`;
        Querys (req,[sql,id])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const postProducto = async (req,res)=>{
    try {
        const { ProductoNombre, ProveedorID,CategoriaID,CantidadPorUnidad,PrecioUnitario,UnidadesStock,UnidadesPedidas,NivelReorden,Discontinuado } = req.body;
        const producto ={ProductoNombre, ProveedorID,CategoriaID,CantidadPorUnidad,PrecioUnitario,UnidadesStock,UnidadesPedidas,NivelReorden,Discontinuado}
        const sql = `INSERT INTO productos SET ?`;
        Querys (req,[sql,producto])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const putProducto = async (req,res)=>{
    try {
        const { id } = req.params;
        const { ProductoNombre, ProveedorID,CategoriaID,CantidadPorUnidad,PrecioUnitario,UnidadesStock,UnidadesPedidas,NivelReorden,Discontinuado } = req.body;
        const producto ={ProductoNombre, ProveedorID,CategoriaID,CantidadPorUnidad,PrecioUnitario,UnidadesStock,UnidadesPedidas,NivelReorden,Discontinuado}
        const sql = `UPDATE productos SET ? WHERE ProductoID = ?`;
        Querys (req,[sql,producto,id])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deleteProducto = async (req,res)=>{
    try {
        const { id } = req.params;
        const sql = `DELETE FROM productos WHERE ProductoID = ?`;
        Querys (req,[sql,id])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}