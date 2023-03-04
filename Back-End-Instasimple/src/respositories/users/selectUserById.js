const getPool = require("../../database/getPool");

const selectUserById = async (userId) => {
  const pool = getPool();

  const [[user]] = await pool.query(
    "SELECT id, email, name FROM users WHERE id = ?",
    [userId]
  );

  return user;
};

module.exports = selectUserById;
