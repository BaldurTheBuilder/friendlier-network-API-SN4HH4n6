// username: string, unique, required, trimmed

// email: string, required, unique, matching a valid email (see mongoose matching validation)

// thoughts: array of _id values referencing Thought model

// friends: array of _id values referencing User model (self-reference)



// friendCount: virtual in schema settings. Retrieves length of user's friends array field when queried.