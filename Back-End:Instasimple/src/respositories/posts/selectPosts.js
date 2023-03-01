const getPool = require("../../database/getPool");

const selectPosts = async (queryParams, user) => {
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
        `;
  } else {
    sqlQuery = `SELECT 
        U.name, 
        P.id, 
        P.description, 
        P.image, 
        P.userId, 
        P.creationDate,
        COUNT(L.id) AS likes,
        (SELECT COUNT(id) FROM likes WHERE userId=? AND postId=P.id) as userLikes
    FROM posts P
    LEFT JOIN users U ON U.id = P.userId
    LEFT JOIN likes L ON L.postId = P.id
    `;
  }
  /* if (queryParams) { */
  let values = user ? [user.id] : [];
  let clause = "WHERE";
  for (const key in queryParams) {
    const value = queryParams[key];
    sqlQuery += ` ${clause} ${key} LIKE ?`;
    values.push(`%${value}%`);
    clause = "AND";
  }
  sqlQuery += "GROUP BY P.id ORDER BY P.creationDate DESC";
  const [post] = await pool.query(sqlQuery, values);
  return post;
  /* }; */

  /* const [post] = await pool.query(sqlQuery);
  return post; */
};

module.exports = selectPosts;
