const { Router } = require("express");

const { loginController } = require("./../../controllers");

const router = new Router();

// @desc login page
// @rout POST /api/login
router.post("/api/login", loginController);

module.exports = router;
