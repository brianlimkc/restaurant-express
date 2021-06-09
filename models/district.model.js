const mongoose = require('mongoose')
const Schema = mongoose.Schema

const districtSchema = new Schema({
    district: String
})

module.exports = mongoose.model('District', districtSchema)
