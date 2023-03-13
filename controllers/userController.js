const { User } = require("../models");

module.exports = {
  // get on all users
  getUsers(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // get on single user by _id.
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.user_id })
      .populate({path: 'friends', select: '-__v'})
      .populate({path: 'thoughts', select: '-__v'})
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with the entered ID." })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // post on new user
  //   example:
  //     {
  //       "username": "lernantino",
  //       "email": "lernantino@gmail.com"
  //     }
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
};

// put to update user by _id
// delete to remove user by _id
// bonus: remove associated thoughts when deleted
