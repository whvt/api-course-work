const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const Card = require('./cards-model')
const Test1 = require('./tests-model')
const Test2 = require('./test2-model')
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

router.get('/test1', async function (req, res) {
  const test1 = await Test1.find()
  res.json({ test1 })
})

router.get('/test2', async function (req, res) {
  const test2 = await Test2.find()
  res.json({ test2 })
})

//take cards from the collection
router.get('/cards', async function (req, res) {
  const cards = await Card.find()
  res.json({ cards })
})

//take tests from the collection

router.post('/create-test', async function (req, res) {
  const { question, answers, c_answer } = req.body
  const test = new Test({
    question,
    answers: [...answers],
    c_answer,
  })

  await test.save()
  res.status(200).send('ok')
})

router.post('/create-card', async (req, res) => {
  const { question, answer } = req.body

  const newCard = new Card({ question, answer })

  await newCard.save()

  res.status(200).send('card created')
})
