const mongoose = require('mongoose')
const schema = mongoose.Schema

const parentSchema = new schema({
  firstName: { type: String },
  lastName: { type: String },
  children: { type: Array },
})

const personSchema = new schema({
  firstName: { type: String },
  lastName: { type: String },
  parents: [parentSchema],
  children: { type: Array },
})

module.exports = mongoose.model('Person', personSchema)
