const mongoose = require('mongoose')
const Schema = mongoose.Schema

function capitalize(val) {
    if (typeof val !== 'string') val = ''
    return val.charAt(0).toUpperCase() + val.substring(1)
}

const personSchema = new Schema({
    firstName: { type: String, set: capitalize, trim: true },
    lastName: { type: String, set: capitalize, trim: true },
    gender: { type: String },
    birthday: { type: Date },
    currentDay: { type: String },
    mother: Schema.Types.Mixed,
    father: Schema.Types.Mixed,
    parents: Schema.Types.Mixed,
    children: Schema.Types.Mixed,
    siblings: Schema.Types.Mixed,
})

module.exports = mongoose.model('Person', personSchema)
