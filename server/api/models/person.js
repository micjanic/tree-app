const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    mother: Schema.Types.Mixed,
    father: Schema.Types.Mixed,
    parents: Schema.Types.Mixed,
    children: { type: Array },
})

module.exports = mongoose.model('Person', personSchema)
