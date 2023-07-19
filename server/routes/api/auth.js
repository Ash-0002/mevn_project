const express = require("express");
const router = express.Router();
const authcontrollers = require("../../controllers/authController");


router.post("/register", authcontrollers.register);

router.post("/login", authcontrollers.login);

router.post("/logout", authcontrollers.logout);

router.post("/refresh", authcontrollers.refresh);

router.get("/user", authcontrollers.user);

module.exports = router;