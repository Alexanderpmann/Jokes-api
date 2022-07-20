// Bring in the Jokes model
const Jokes = require("../models/jokes.model");

// BASIC CRUD COMMANDS

// CREATE
module.exports.createJoke = (req,res) => {
    Jokes.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({message: "Something went wrong when creating a joke!", error: err}))
}

// READ ONE
module.exports.findOneJoke = (req,res) => {
    Jokes.find({_id: req.params._id})
        .then(singleJoke => res.json(singleJoke))
        .catch(err => res.json({message: "Something went wrong when finding one joke!", error: err}))
}

// READ ALL
module.exports.findAllJokes = (req,res) => {
    Jokes.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json({message: "Something went wrong when finding all jokes!", error: err}))
}

// UPDATE
module.exports.updateJoke = (req,res) => {
    Jokes.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
        .then(updateJoke => res.json(updateJoke))
        .catch(err => res.json({message: "Something went wrong when updating one joke!", error: err}))
}

// DELETE
module.exports.deleteJoke = (req,res) => {
    Jokes.deleteOne({_id: req.params._id})
        .then(deleteJoke => res.json(deleteJoke))
        .catch(err => res.json({message: "Something went wrong when deleting one joke!", error: err}))
}