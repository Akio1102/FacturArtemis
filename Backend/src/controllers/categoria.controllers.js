import Querys from "./../db/database.js";

export const getCategorias = async (req, res) => {
  const sql = `SELECT * FROM categorias`;
  Querys(res, [sql]);
};

export const getCategoriaID = async (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM categorias WHERE CategoriaID = ?`;
  Querys(res, [sql, id]);
};

export const postCategoria = async (req, res) => {
  const { CategoriaNombre, Descripcion, Imagen } = req.body;
  const category = {
    CategoriaNombre,
    Descripcion,
    Imagen,
  };
  const sql = `INSERT INTO categorias SET ?`;
  Querys(res, [sql, category]);
};

export const putCategoria = async (req, res) => {
  const { id } = req.params;
  const { CategoriaNombre, Descripcion, Imagen } = req.body;
  const category = {
    CategoriaNombre,
    Descripcion,
    Imagen,
  };
  const sql = `UPDATE categorias SET ? WHERE CategoriaID = ?`;
  Querys(res, [sql, category, id]);
};

export const deleteCategorias = async (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM categorias WHERE CategoriaID = ?`;
  Querys(res, [sql, id]);
};
