const getPool = require("../../database/getPool");

const selectLikeByPostAndUser = async (postId, userId) => {
  const pool = getPool();

  const [[like]] = await pool.query(
    "SELECT * FROM likes WHERE postId = ? AND userId = ?",
    [postId, userId]
  );

  return like;
};

module.exports = selectLikeByPostAndUser;
