const { Router } = require("express");

const { singupController } = require("./../../controllers");

const router = new Router();

// @desc register page
// @rout POST /api/singup
router.post("/api/singup", singupController);

module.exports = router;
