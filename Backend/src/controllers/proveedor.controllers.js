import Querys from "../db/database.js";

export const getProveedores = async (req,res)=>{
    try {
        const sql = `SELECT * FROM proveedores`;
        Querys (req,[sql])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getProveedorID = async (req,res)=>{
    try {
        const { id } = req.params;
        const sql = `SELECT * FROM proveedores WHERE ProveedorID = ?`;
        Querys (req,[sql,id])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const postProveedor = async (req,res)=>{
    try {
        const { Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax,Pagina } = req.body;
        const provedor = {
            Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax,Pagina
        };
        const sql = `INSERT INTO proveedores SET ?`;
        Querys (req,[sql,provedor])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const putProveedor = async (req,res)=>{
    try {
        const { id } = req.params;
        const { Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax,Pagina } = req.body;
        const provedor = {
            Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax,Pagina
        };
        const sql = `UPDATE proveedores SET ? WHERE ProveedorID = ?`;
        Querys (req,[sql,provedor,id])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deleteProveedor = async (req,res)=>{
    try {
        const { id } = req.params;
        const sql = `DELETE FROM proveedores WHERE ProveedorID = ?`;
        Querys (req,[sql,id])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}