const router = require("express").Router();
const {
  getAllUsers,
  createUser,
  findUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/users");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(findUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
