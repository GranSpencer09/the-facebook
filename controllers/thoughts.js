const { User, Thought } = require("../models");

const thoughtController = {
  //GET to get all thoughts
  findAllThoughts(req, res) {
    Thought.find()
      .populate("reactions")
      .then(async (thoughts) => {
        return res.json(thoughts);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  //GET to get a single thought by its _id
  findThought(req, res) {
    Thought.findOne({ _id: req.params.id })
      .populate("reactions")
      .then(async (thought) => {
        return res.json(thought);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  //POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
  createThought(req, res) {
    Thought.create(req.body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: _id } },
          { new: true }
        );
      })
      .then(async (thought) => {
        return res.json(thought);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  //PUT to update a thought by its _id
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then(async (thought) => {
        return res.json(thought);
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json(err);
      });
  },
  //DELETE to remove a thought by its _id
  deleteThought(req, res) {
    Thought.deleteOne({ _id: req.params.id })
      .then(async (thought) => {
        return res.json(thought);
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json(err);
      });
  },

  // POST to create a reaction stored in a single thought's reactions array field
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then(async (thought) => {
        return thought
          ? res.json(thought)
          : res.status(404).json({ msg: "No thought with that id" });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // DELETE to pull and remove a reaction by the reaction's reactionId value
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then(async (thought) => {
        return thought
          ? res.json(thought)
          : res.status(404).json({ msg: "No thought with that id" });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
};

module.exports = thoughtController;
