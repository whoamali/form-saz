const { Router } = require("express");

const { changeName, changePassword } = require("./../../controllers");

const router = new Router();

// @desc change user name
// @rout POST /api/changename
router.post("/api/changename", changeName);

// @desc change user password
// @rout POST /api/changepassword
router.post("/api/changepassword", changePassword);

module.exports = router;
