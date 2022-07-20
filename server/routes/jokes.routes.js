const JokesController = require("../controllers/jokes.controller");

module.exports = app => {
    // CREATE
    app.post("/api/jokes/create", JokesController.createJoke);
    // READ ONE
    app.get("/api/jokes/:_id", JokesController.findOneJoke)
    // READ ALL
    app.get("/api/jokes", JokesController.findAllJokes);
    // UPDATE
    app.put("/api/jokes/update/:_id", JokesController.updateJoke);
    // DELETE
    app.delete("/api/jokes/delete/:_id", JokesController.deleteJoke);
}