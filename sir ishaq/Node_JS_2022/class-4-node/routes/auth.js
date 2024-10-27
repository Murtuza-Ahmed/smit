const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

router.get("/signin", usersController.getSignIn)

router.get("/signup", usersController.getSignUp)

router.post("/signin", usersController.postSignIn)

router.post("/signup", usersController.postSignUp)

module.exports = router;