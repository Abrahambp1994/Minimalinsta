const getPool = require("../../database/getPool");

const deleteLike = async (postId, userId) => {
  const pool = getPool();

  await pool.query("DELETE FROM likes WHERE postId = ? AND userId = ?", [
    postId,
    userId,
  ]);
};

module.exports = deleteLike;
