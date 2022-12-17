const { Router } = require("express");

const { authController } = require("./../../controllers");

const router = new Router();

// @desc authenticate page
// @rout POST /api/auth
router.post("/api/auth", authController);

module.exports = router;
