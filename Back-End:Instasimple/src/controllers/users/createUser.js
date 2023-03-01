const bcrypt = require("bcrypt");
const { selectUserByEmail, insertUser } = require("../../respositories/users");
const { createUserSchema } = require("../../schema/users");
const { generateError } = require("../../utils");

const createUser = async (req, res, next) => {
  try {
    await createUserSchema.validateAsync(req.body);

    const { email, password, name } = req.body;

    const userWithSameEmail = await selectUserByEmail(email);

    if (userWithSameEmail) {
      generateError("Already exists an user with that email", 400);
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const insertId = await insertUser({
      email,
      encryptedPassword,
      name,
    });

    res.status(201).send({ status: "ok", data: { id: insertId, email, name } });
  } catch (error) {
    next(error);
  }
};

module.exports = createUser;