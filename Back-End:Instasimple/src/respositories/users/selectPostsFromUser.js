const getPool = require("../../database/getPool");

const selectPostsFromUser = async (userId, user) => {
  const pool = getPool();

  let sqlQuery;

  if (user) {
    sqlQuery = `
    SELECT 
    posts.id,
    posts.image,
    posts.description,
    posts.userId,
    posts.creationDate,
    COUNT(likes.id) AS likes,
    (SELECT 
            COUNT(likes.id)
        FROM
            likes
        WHERE
            likes.userId = ?
                AND likes.postId = posts.id) AS userLikes
FROM
    posts
        LEFT JOIN
    likes ON posts.id = likes.postId
WHERE
    posts.userId = ?
GROUP BY posts.id
ORDER BY creationDate DESC;`;
  } else {
    sqlQuery = `
    SELECT posts.id, 
      posts.image, 
      posts.description, 
      posts.userId, 
      posts.creationDate ,
      COUNT(likes.id) AS likes
    FROM posts 
    LEFT JOIN likes ON posts.id = likes.postId
    WHERE posts.userId = ? 
    GROUP BY posts.id
    ORDER BY creationDate DESC`;
  }

  const [postsFromUser] = await pool.query(
    sqlQuery,
    user ? [user.id, userId] : [userId]
  );

  return postsFromUser;
};

module.exports = selectPostsFromUser;
