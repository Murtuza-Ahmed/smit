const express = require("express");
// const { addTodo, getAllTodos } = require("../controllers/todo");
const { createUser, login } = require("../controllers/auth");

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        await login(req.body.email, req.body.password);
        res.status(200).send("successfully login");
    } catch (err) {
        res.send(err);
    };
});

router.post("/signup", async (req, res) => {
    try {
        await createUser(req.body.email, req.body.password);
        res.status(200).send("successfully create");
    } catch (err) {
        res.send(err);
    };
});

module.exports = router;