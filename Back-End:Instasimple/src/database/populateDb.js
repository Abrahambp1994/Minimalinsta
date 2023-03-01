require("dotenv").config();
const bcrypt = require("bcrypt");
const getPool = require("./getPool");


const populateDb = async () => {
  try {
    const pool = getPool();

    console.log("Insertando datos de users...");

    await pool.query(`
        INSERT INTO users (email, password, name) VALUES 
        ("fernando@email.com", "${await bcrypt.hash(
          "123456",
          10
        )}", "Fernando"),
        ("pilar@email.com", "${await bcrypt.hash(
          "123456",
          10
        )}", "Pilar"),
        ("sara@email.com", "${await bcrypt.hash(
          "123456",
          10
        )}", "Sara"),
        ("antonio@email.com", "${await bcrypt.hash(
            "123456",
            10
          )}", "Antonio")
    `);

    console.log("Insertando datos de posts...");

    await pool.query(`
        INSERT INTO posts (image, description, userId) VALUES 
        ("8a05d41d-0db9-451b-9d5c-99077dfb61c6.jpeg", "Preciosa casita de campo en Grand Teton, Estados Unidos", 1),
        ("e9dbc1f2-35de-4863-93b7-860540a08fcb.jpeg", "No hay nada mejor que despertarse con estas vistas... (Appalachian Mountains, en Estados Unidos).", 2),
        ("a153bbb2-4c41-4eda-b487-f9db4f20cf50.jpeg", "Leyendo en mi lugar favorito. North Twin Peak, Canadá.", 3),
        ("d2849a5e-2a6d-4428-b207-bb7f4e78393b.jpeg", "Estoy completamente enamorado de este pueblito del norte de Francia! Locronan es un pueblo tan bonito y acogedor... no me quiero ir!", 4),
        ("a6d0d122-5bbf-4edb-8c9b-350dd3b61a2b.jpeg", "Nada como despertar frente alos Alpes de Suiza. ¡Qué bello es vivir!", 4)

    `);

    /*console.log("Insertando datos de likes...");

    await pool.query(`
        INSERT INTO likes (postId, userId) VALUES 
        (1, 2),
        (1, 3),
        (2, 1)
    `); */
    
    console.log("¡Datos insertados! 🥳");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

populateDb();
