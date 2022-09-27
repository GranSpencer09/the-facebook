const router = require("express").Router();

const {
  findAllThoughts,
  findThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughts");

router.route("/").get(findAllThoughts).post(createThought);

router.route("/:id").get(findThought).put(updateThought).delete(deleteThought);

module.exports = router;
