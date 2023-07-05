import Querys from "./../db/database.js";

export const getCategorias = async (req, res) => {
  try {
    const sql = `SELECT * FROM categorias`;
    Querys(res, [sql]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getCategoriaID = async (req, res) => {
  try {
    const { id } = req.params;
    const sql = `SELECT * FROM categorias WHERE CategoriaID = ?`;
    Querys(res, [sql,id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const postCategoria = async (req, res) => {
  try {
    const { CategoriaNombre, Descripcion, Imagen } = req.body;
    const category = {
      CategoriaNombre,
      Descripcion,
      Imagen,
    };
    const sql = `INSERT INTO categorias SET ?`;
    Querys(res, [sql,category]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const putCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { CategoriaNombre, Descripcion, Imagen } = req.body;
    const category = {
      CategoriaNombre,
      Descripcion,
      Imagen,
    };
    const sql = `UPDATE categorias SET ? WHERE CategoriaID = ?`;
    Querys(res, [sql,category,id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteCategorias = async (req, res) => {
  try {
    const { id } = req.params;
    const sql = `DELETE FROM categorias WHERE CategoriaID = ?`;
    Querys(res, [sql,id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
