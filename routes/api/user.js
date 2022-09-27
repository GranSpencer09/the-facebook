const router = require("express").Router();
const {
  getAllUsers,
  createUser,
  findUser,
} = require("../../controllers/users");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(findUser);

module.exports = router;
