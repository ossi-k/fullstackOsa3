require('dotenv').config()
const express = require('express')
const { response } = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')


app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())
app.use(express.static('build'))


let persons = [ {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
},
{
    name: "Ada Lovelace",
    number: "39-44-532523",
    id: 2
},
{
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
},
{
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
},
{
    name: "Päivittyykö?",
    number: "57817",
    id: 5
}
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  //res.send(persons)
  Person.find({}).then(persons => {
    res.json(persons)
  }) 
})

app.get('/api/info', (req, res) => {
    const pvm = new Date
    res.send(`Phonebook has info for ${persons.length} people <br/><br/> ${pvm}`)   
  })

app.get('/api/persons/:id', (req, res) => {
/*   const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)

  if(person) {
    res.json(person)
  } else {
    res.status(404).end()
  } */
  Person.findById(req.params.id).then(person => {
    res.json(person)
  })
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  
  res.status(204).end()
})

const generateId = () => {
  const id = Number((Math.random() * 1000).toFixed(0))
  return id
}

app.post('/api/persons/', (req, res) => {
  const body = req.body

  if(!body.name) {
    return res.status(400).json({
      error: 'name is missing'
    })
  } else if(!body.number) {
    return res.status(400).json({
      error: 'number is missing'
    })
  } else if(persons.filter(person => person.name === body.name).length > 0) {
    return res.status(400).json({
      error: "name must be unique"
    })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
    id: generateId()
  })

  // persons = persons.concat(person)
  person.save().then(savedPerson => {
    res.json(savedPerson)
  })

  // res.json(person)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})