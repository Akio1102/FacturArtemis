import Querys from "../db/database.js";

export const getProveedores = async (req, res) => {
  const sql = `SELECT * FROM proveedores`;
  Querys(res, [sql]);
};

export const getProveedorID = async (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM proveedores WHERE ProveedorID = ?`;
  Querys(res, [sql, id]);
};

export const postProveedor = async (req, res) => {
  const {
    Compania,
    Contacto,
    Titulo,
    Direccion,
    Ciudad,
    Regiones,
    CodigoPostal,
    Pais,
    Telefono,
    Fax,
    Pagina,
  } = req.body;
  const provedor = {
    Compania,
    Contacto,
    Titulo,
    Direccion,
    Ciudad,
    Regiones,
    CodigoPostal,
    Pais,
    Telefono,
    Fax,
    Pagina,
  };
  const sql = `INSERT INTO proveedores SET ?`;
  Querys(res, [sql, provedor]);
};

export const putProveedor = async (req, res) => {
  const { id } = req.params;
  const {
    Compania,
    Contacto,
    Titulo,
    Direccion,
    Ciudad,
    Regiones,
    CodigoPostal,
    Pais,
    Telefono,
    Fax,
    Pagina,
  } = req.body;
  const provedor = {
    Compania,
    Contacto,
    Titulo,
    Direccion,
    Ciudad,
    Regiones,
    CodigoPostal,
    Pais,
    Telefono,
    Fax,
    Pagina,
  };
  const sql = `UPDATE proveedores SET ? WHERE ProveedorID = ?`;
  Querys(res, [sql, provedor, id]);
};

export const deleteProveedor = async (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM proveedores WHERE ProveedorID = ?`;
  Querys(res, [sql, id]);
};
