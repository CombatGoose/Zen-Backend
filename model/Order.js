const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    cardNumber: {
        type: Number,
        required: true
    },
    delivery: {
        address: {
            type: String,
            required: false
        },
        typeDel: {
            type: String,
            required: true
        }
    },
    createdAt: {
        type: Date,
        required: true
    },
    finishPrice: {
        type: Number,
        required: true
    },
    wishes: {
        type: String,
        required: false
    },
    orderProducts: [
        {
            productName: {
                type: String,
                required: true
            },
            productPrice: {
                type: Number,
                required: true
            },
            count: {
                type: Number,
                required: true
            },
            imgSrc: {
                type: String,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model('Order', orderSchema);