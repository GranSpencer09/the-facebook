const { User, Thought } = require("../models");
const ObjectId = require("mongodb").ObjectId;

const userController = {
  //GET all users
  getAllUsers(req, res) {
    User.find()
      .then(async (users) => {
        return res.json(users);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // POST a new user
  createUser(req, res) {
    User.create(req.body)
      .then(async (user) => {
        return res.json(user);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  //GET a single user by its _id and populated thought and friend data
  findUser(req, res) {
    User.findOne({ _id: req.params.id })
      .select("-__v")
      .populate("friends")
      .populate("thoughts")
      .then(async (user) => {
        return res.json(user);
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json(err);
      });
  },
  //PUT to update a user by its _id
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then(async (user) => {
        return res.json(user);
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json(err);
      });
  },

  // DELETE to remove user by its _id
  deleteUser(req, res) {
    User.deleteOne({ _id: req.params.id })
      .then(async (user) => {
        return res.json(user);
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json(err);
      });
  },
  //We import the ObjectId() function from MongoDB

  // POST to add a new friend to a user's friend list
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      // add to set allows us to prevent duplicates from being added
      { $push: { friends: req.params.friendId } },
      { new: true }
    )
      .then(async (user) => {
        return res.json(user);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // DELETE to remove a friend from a user's friend list
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then(async (user) => {
        return res.json(user);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
};

module.exports = userController;
