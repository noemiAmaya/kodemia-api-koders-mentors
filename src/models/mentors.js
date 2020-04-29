const mongoose = require('mongoose')
const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 4,
    maxLength: 100,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  module: {
    type: String,
    required: true
  }

})

module.exports = mongoose.model('Mentors', mentorSchema)
