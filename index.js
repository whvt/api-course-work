const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const cards = require('./model')
const router = express.Router()
const port = 4000

var uri =
  'mongodb+srv://whvt:!23_Yyapchizh!23_@cluster0.zizmy.mongodb.net/MedDB?retryWrites=true&w=majority'

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })

const connection = mongoose.connection

connection.once('open', function () {
  console.log('MongoDB database connection established successfully')
})

app.use('/', router)

app.listen(process.env.PORT || port, function () {
  console.log('Server is running on Port: ' + port)
})

//take items from the collection
router.get('/cards', async function (req, res) {
  const Cards = await cards.find({})
  res.json({ cards: Cards })
})
