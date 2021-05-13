const mongoose = require('mongoose')

const Schema = mongoose.Schema

let test = new Schema(
  {
    question: String,
    c_answer: String,
    w_answer: String,
  },
  { collection: 'Tests' }
)

module.exports = mongoose.model('tests', test)
