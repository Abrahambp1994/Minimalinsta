const getPool = require("../../database/getPool");

const insertLike = async (postId, userId) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO likes (postId, userId) VALUES (?, ?)",
    [postId, userId]
  );

  return insertId;
};

module.exports = insertLike;
