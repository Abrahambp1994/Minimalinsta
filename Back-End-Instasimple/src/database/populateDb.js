require("dotenv").config();
const bcrypt = require("bcrypt");
const getPool = require("./getPool");

const populateDb = async () => {
  try {
    const pool = getPool();

    console.log("Insertando datos de users...");

    await pool.query(`
        INSERT INTO users (email, password, name) VALUES 
        ("lauren@email.com", "${await bcrypt.hash("123456", 10)}", "Lauren"),
        ("adrian@email.com", "${await bcrypt.hash("123456", 10)}", "Adrián"),
        ("alex@email.com", "${await bcrypt.hash("123456", 10)}", "Alex"),
        ("sofia@email.com", "${await bcrypt.hash("123456", 10)}", "Sofía")
    `);

    console.log("Insertando datos de posts...");

    await pool.query(`
        INSERT INTO posts (image, description, userId) VALUES 
        ("1b20de8e-28f6-497a-89ec-f6bd542396ce.jpeg", "Catedral de Saint Giles en Edimburgo, Escocia", 1),
        ("2ea5be42-aaa4-4d5f-906e-75242fae00aa.jpeg", "Gaitero amenizando la mañana en Royal Mile, Edimburgo, Escocia", 2),
        ("5df38dfe-5eff-401e-a07c-581a49e56905.jpeg", "Rafting por el río Dujanec, Eslovaquia", 4),
        ("38f9d863-3220-4d5b-b3bb-2697c1facde7.jpeg", "Estatua de Alejandro Magno en frente del ayuntamiento de Edimburgo, Escocia", 3),
        ("6057dee5-f3e1-4f18-bfd7-be139b71ea5c.jpeg", "Ovejas pastando en Highlands, Escocia", 1),
        ("cd11f74f-38e8-4a97-ab36-d930aa2433a6.jpeg", "Galeria Victor Manuel II en Milán, Italia", 4)
    `);

    console.log("Insertando datos de likes...");

    await pool.query(`
        INSERT INTO likes (postId, userId) VALUES 
        (1, 2),
        (2, 3),
        (3, 4),
        (4, 4),
        (5, 1),
        (6, 3)
    `);

    console.log("¡Datos insertados! 🥳");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

populateDb();
