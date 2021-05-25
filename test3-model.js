const mongoose = require('mongoose')

const Schema = mongoose.Schema

let test3 = new Schema(
  {
    question: String,
    answers: [String],
    c_answer: Number,
  },
  { collection: 'Test3' }
)

module.exports = mongoose.model('Test3', test3)
