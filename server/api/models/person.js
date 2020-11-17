const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    gender: { type: String },
    mother: Schema.Types.Mixed,
    father: Schema.Types.Mixed,
    parents: Schema.Types.Mixed,
    children: Schema.Types.Mixed,
    siblings: Schema.Types.Mixed,
})

module.exports = mongoose.model('Person', personSchema)
