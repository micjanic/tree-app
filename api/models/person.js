const mongoose = require('mongoose')
const schema = mongoose.Schema

const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
})

module.exports = mongoose.model('Person', personSchema)
