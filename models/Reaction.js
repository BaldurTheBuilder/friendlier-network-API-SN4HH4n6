// SCHEMA ONLY. Subdocument in Thought model.

const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    // reactionId: uses Mongoose's ObjectId datatype, default set to a new ObjectId
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    // reactionBody: string, required, 280 character max
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },

    // username: string, required
    username: {
      type: String,
      required: true,
    },

    // createdAt: date, defaults to current timestamp, uses getter method to format timestamp on query
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
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// reactionCount: virtual that retrieves lenght of thought's reacitons array field on query.
reactionSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

module.exports = reactionSchema;
