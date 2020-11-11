const mongoose = require('mongoose')
const schema = mongoose.Schema

const personSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  parent: { type: String },
})

module.exports = mongoose.model('Person', personSchema)
