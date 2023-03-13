const { User } = require("../models");

module.exports = {
  // get on all users
  getUsers(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // get on single user by _id.
    // populated w/ thought and friend data
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.user_id })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with the entered ID." })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // post on new user
//   createUser
};



// example:
//   {
//     "username": "lernantino",
//     "email": "lernantino@gmail.com"
//   }
// put to update user by _id
// delete to remove user by _id
// bonus: remove associated thoughts when deleted
