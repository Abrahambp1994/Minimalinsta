const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateError } = require("../../utils");
const { selectUserById, selectPostsFromUser } = require("../../respositories/users");

const myUser = async (req, res, next) => {
    try {
        const userId = req.auth.id;
        const user = await selectUserById(userId);
        if (!user) {
            generateError("User doesn't exist", 404);
        };
        const postsFromUser = await selectPostsFromUser(userId);
        user.posts = postsFromUser;
        res.status(200).send({ status: "ok", data: user });
    } catch (error) {
        next(error);
    }
}

module.exports = myUser;