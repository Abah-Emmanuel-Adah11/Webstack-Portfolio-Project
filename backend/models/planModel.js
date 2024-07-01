const mongoose = require('mongoose')

const planSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('plan', planSchema)