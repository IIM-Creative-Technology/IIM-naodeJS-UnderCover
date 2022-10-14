var mongoose = require('mongoose')

var Schema = mongoose.Schema

const PlayerModel = new Schema( {
    name: String,
    role: String,
    word: String,
    vote: Boolean,
    alive: Boolean,
})

export = mongoose.model("Player", PlayerModel)
