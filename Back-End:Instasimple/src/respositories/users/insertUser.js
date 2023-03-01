const getPool = require("../../database/getPool");

const insertUser = async (user) => {
  const { email, encryptedPassword, name } = user;

  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO users (email, password, name) VALUES (?, ?, ?)",
    [email, encryptedPassword, name]
  );

  return insertId;
};

module.exports = insertUser;