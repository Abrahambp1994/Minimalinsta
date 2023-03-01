const getPool = require("../../database/getPool");

const insertPost = async (post) => {
  const { description, userId, imageName } = post;

  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO posts (description, userId, image) VALUES (?, ?, ?)",
    [description, userId, imageName]
  );

  return insertId;
};

module.exports = insertPost;