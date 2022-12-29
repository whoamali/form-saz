const { Router } = require("express");

const { getName } = require("./../../controllers");

const router = new Router();

// @desc get user name
// @rout GET /api/getname
router.get("/api/getname", getName);

module.exports = router;
