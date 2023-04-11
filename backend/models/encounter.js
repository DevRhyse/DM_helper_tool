const mongoose = require('mongoose')

const EncounterSchema = new mongoose.Schema({
  Creature: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  ChallengeRating: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Encounter', EncounterSchema)