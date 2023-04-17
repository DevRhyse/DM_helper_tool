const mongoose = require('mongoose')

const EncounterSchema = new mongoose.Schema({
  creature: {
    type: String,
    required: true,
  },
  challengeRating: {
    type: Number,
    required: true
  },
  completed: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Encounter', EncounterSchema)