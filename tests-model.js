const mongoose = require('mongoose')

const Schema = mongoose.Schema

let test = new Schema(
  {
    question: String,
    answers: [String],
    c_answer: Number,
  },
  { collection: 'Tests' }
)

module.exports = mongoose.model('Tests', test)
