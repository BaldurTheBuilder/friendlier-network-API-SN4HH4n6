const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    // thoughtText: string, required, must be between 1-280 characters.
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },

    // createdAt: date, defaults to current timestamp
    createdAt: {
      type: Date,
      default: Date.now,
      methods: {
        // getter method to format timestamp on query
        // unclear on how this is to be formatted. Should revisit.
        getTimestamp() {
          return this.createdAt;
        },
      },
    },

    // username: string, required. Is the user that created this thought.
    username: {
      type: String,
      required: true,
    },

    // reactions (replies): array of nested documents created w/ reactionSchema
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// reactionCount: virtual that retrieves lenght of thought's reacitons array field on query.
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;