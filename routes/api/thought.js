const router = require("express").Router();

const {
  findAllThoughts,
  findThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughts");

router.route("/").get(findAllThoughts).post(createThought);

router.route("/:id").get(findThought).put(updateThought).delete(deleteThought);

router
  .route("/:thoughtId/reactions")
  .post(createReaction)
  .delete(deleteReaction);

module.exports = router;
