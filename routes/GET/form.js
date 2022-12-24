const { Router } = require("express");

const { getForm } = require("./../../controllers");

const router = new Router();

// @desc get form list
// @rout GET /api/form
router.get("/api/form", getForm);

module.exports = router;
