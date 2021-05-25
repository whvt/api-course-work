const mongoose = require('mongoose')

const Schema = mongoose.Schema

let test2 = new Schema(
  {
    question: String,
    answers: [String],
    c_answer: Number,
  },
  { collection: 'Test2' }
)

module.exports = mongoose.model('Test2', test2)
