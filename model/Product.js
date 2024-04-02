const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    grams: {
        type: Number,
        required: false
    },
    calories: {
        type: Number,
        required: false
    },
    photo: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema);