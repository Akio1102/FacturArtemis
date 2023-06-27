import getConnection from "./../db/database.js";

export const getCategorias = async (req, res) => {
  try {
    const connection = await getConnection();
    const sql = "SELECT * FROM categorias";
    const result = await connection.query(sql);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const postCategorias = async (req, res) => {
  try {
    console.log(req.body);
    const { CategoriaNombre, Descripcion, Imagen } = req.body;

    const connection = await getConnection();
    const sql = `INSERT INTO categorias (CategoriaNombre, Descripcion, Imagen) VALUES (?,?,?)`;
    const result = await connection.query(sql, [
      CategoriaNombre,
      Descripcion,
      Imagen,
    ]);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
