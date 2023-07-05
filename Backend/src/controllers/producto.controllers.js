import Querys from "../db/database.js";

export const getProductos = async (req, res) => {
  const sql = `SELECT * FROM productos`;
  Querys(res, [sql]);
};

export const getProductoID = async (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM productos WHERE ProductoID = ?`;
  Querys(res, [sql, id]);
};

export const postProducto = async (req, res) => {
  const {
    ProductoNombre,
    ProveedorID,
    CategoriaID,
    CantidadPorUnidad,
    PrecioUnitario,
    UnidadesStock,
    UnidadesPedidas,
    NivelReorden,
    Discontinuado,
  } = req.body;
  const producto = {
    ProductoNombre,
    ProveedorID,
    CategoriaID,
    CantidadPorUnidad,
    PrecioUnitario,
    UnidadesStock,
    UnidadesPedidas,
    NivelReorden,
    Discontinuado,
  };
  const sql = `INSERT INTO productos SET ?`;
  Querys(res, [sql, producto]);
};

export const putProducto = async (req, res) => {
  const { id } = req.params;
  const {
    ProductoNombre,
    ProveedorID,
    CategoriaID,
    CantidadPorUnidad,
    PrecioUnitario,
    UnidadesStock,
    UnidadesPedidas,
    NivelReorden,
    Discontinuado,
  } = req.body;
  const producto = {
    ProductoNombre,
    ProveedorID,
    CategoriaID,
    CantidadPorUnidad,
    PrecioUnitario,
    UnidadesStock,
    UnidadesPedidas,
    NivelReorden,
    Discontinuado,
  };
  const sql = `UPDATE productos SET ? WHERE ProductoID = ?`;
  Querys(res, [sql, producto, id]);
};

export const deleteProducto = async (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM productos WHERE ProductoID = ?`;
  Querys(res, [sql, id]);
};
