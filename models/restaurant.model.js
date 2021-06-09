const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name: {required: true, type: String},
    address: {
        street: {required: true, type: String},
        postal: {required: true, type: Number},
    },
    owner: {required: true, type: String},
    districts: {
        type: Schema.Types.ObjectId,
        ref: "District"
    },
    cuisines: [{
        type: Schema.Types.ObjectId,
        ref: "Cuisine"
    }],
})


module.exports = mongoose.model('Restaurant', restaurantSchema)
