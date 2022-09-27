const router = require("express").Router();
const thought = require("./thought");
const user = require("./user");

router.use("/thought", thought);
router.use("/user", user);

module.exports = router;
