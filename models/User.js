const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");

const userSchema = new Schema(
  {
    // username: string, unique, required, trimmed
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    // email: string, required, unique, matching a valid email (see mongoose matching validation)
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: () => Promise.resolve(false),
        message: "Email validation failed",
      },
    },

    // thoughts: array of _id values referencing Thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    // friends: array of _id values referencing User model (self-reference)
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// friendCount: virtual in schema settings. Retrieves length of user's friends array field when queried.
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
