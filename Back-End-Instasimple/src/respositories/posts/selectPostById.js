const getPool = require("../../database/getPool");

const selectPostById = async (id, user) => {
  const pool = getPool();

  //TENED EN CUENTA QUE DEBE SOPORTAR SI VIENE UN USUARIO

  const [[post]] = await pool.query(
    "SELECT U.name, P.id, P.description, P.image, P.userId, P.creationDate, COUNT(L.id) AS likes FROM posts P LEFT JOIN users U on P.userId = U.id LEFT JOIN likes L ON L.postId = P.id WHERE P.id = ?",
    [id]
  );
  let values = user ? [user.id] : [];

  return post[values];
};

module.exports = selectPostById;
