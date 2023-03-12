const {Schema, model} = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
        // username: string, unique, required, trimmed
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },

        // email: string, required, unique, matching a valid email (see mongoose matching validation)
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: () => Promise.resolve(false),
                message: 'Email validation failed'
            }
        },

        thoughts: [thoughtSchema],

        friends: [userSchema]

    }
);

// thoughts: array of _id values referencing Thought model

// friends: array of _id values referencing User model (self-reference)



// friendCount: virtual in schema settings. Retrieves length of user's friends array field when queried.

const User = model('user', userSchema);

module.exports = User;