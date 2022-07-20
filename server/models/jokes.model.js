// bring in mongoose so we can properly create a schema (database)
const mongoose = require('mongoose');

// We make our model
const JokeSchema = new mongoose.Schema({
    joke: String,
    punchline: String
});

// Finzalize setting up the model
const Jokes = mongoose.model("Joke", JokeSchema);
// We need to export the table (collection) to the other areas of my project 
module.exports = Jokes;