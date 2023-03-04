const getPool = require("../../database/getPool");

const selectPostById = async (id, user) => {
  const pool = getPool();

  let sqlQuery;

  if (!user) {
    sqlQuery = `
        SELECT 
            U.name, 
            P.id, 
            P.description, 
            P.image, 
            P.userId, 
            P.creationDate,
            COUNT(L.id) AS likes
        FROM posts P
        LEFT JOIN users U ON U.id = P.userId
        LEFT JOIN likes L ON L.postId = P.id
        WHERE P.id=?
    `;
  } else {
    sqlQuery = `
        SELECT 
            U.name, 
            P.id, 
            P.description, 
            P.image, 
            P.userId, 
            P.creationDate,
            COUNT(L.id) AS likes,
            (SELECT COUNT(id) FROM likes WHERE userId=? AND postId=?) as userLikes
        FROM posts P
        LEFT JOIN users U ON U.id = P.userId
        LEFT JOIN likes L ON L.postId = P.id
        WHERE P.id=?
    `;
  }

  let values = user ? [user.id, id, id] : [id];

  const [[post]] = await pool.query(sqlQuery, values);
  return post;
};

module.exports = selectPostById;
