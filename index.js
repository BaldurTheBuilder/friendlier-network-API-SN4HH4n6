const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// add back in to allow routes
// app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
  });
});

// WHEN I enter the command to invoke the application the server is started and mongoose models are synced w/ the mongoDB database
// WHEN I open API GET routes in Insomnia for users and thoughts the data for each routes is displayed in formatted JSON
// WHEN I test API POST, PUT, and DELETE routes in Insomnia, CRUD functions for users work.
// WHEN I test API POST and DELETE routes in Insomnia, Create and Delete reactions from thoughts, and Create friends on a friend list
// revisit: reaction and thought models. Verify the getTimestamp methods are functioning. Verify how they're supposed to be formatted.