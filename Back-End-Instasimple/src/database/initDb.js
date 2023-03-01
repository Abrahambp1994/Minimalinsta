require("dotenv").config();
const getPool = require("./getPool");


const initDb = async () => {
  try {
    const pool = getPool();

    console.log("Borrando tablas...");
    
    await pool.query("DROP TABLE IF EXISTS likes;");
    await pool.query("DROP TABLE IF EXISTS posts;");
    await pool.query("DROP TABLE IF EXISTS users;");
    

    console.log("Creando tablas...");

    await pool.query(`
        CREATE TABLE users (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            name VARCHAR(50) NOT NULL
        );
    `);

     await pool.query(`
        CREATE TABLE posts (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
            image VARCHAR (100) NOT NULL,
            description VARCHAR(5000),          
            userId INT UNSIGNED NOT NULL,
            FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE,
            creationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP    
        );
    `);

    await pool.query(`
        CREATE TABLE likes (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            userId INT UNSIGNED NOT NULL,
            postId INT UNSIGNED NOT NULL,
            FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE,
            FOREIGN KEY (postId) REFERENCES posts (id) ON DELETE CASCADE
        );
    `);

    console.log("¡Tablas creadas! 😁");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

initDb();
