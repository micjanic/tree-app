const mongoose = require('mongoose')
const schema = mongoose.Schema

const personSchema = new schema({
    firstName: { type: String },
    lastName: { type: String },
    mother: { type: String },
    father: { type: String },
    parents: { type: Array },
    children: { type: Array },
})

module.exports = mongoose.model('Person', personSchema)
