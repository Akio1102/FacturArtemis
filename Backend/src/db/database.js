import mysql from "promise-mysql";
import config from "../config.js";

const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
});

const getConnection = () => {
  return connection;
};

const Querys = async (res, sqlQuery) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(...sqlQuery);
    console.log(result);
    res.status(200);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export default Querys;
