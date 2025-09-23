const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    topic: {
        type: String,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
    },
    eventType: {
        type: String,
        enum: ["Online", "Offline"],
        required: true,
    },
    thumbnailURL:{
        type: String,
    },
    description: {
        type: String,
    },
    speaker: [{
        name: {type: String, required: true},
        image: {type: String},
        designation: {type: String}
    }],
    venue: {
        type: String,
    },
    address:{
        type: String,
    },
    price: {
       type: String, 
       default: "Free",
    },
    dressCode: {
        type: String
    },
    ageRestriction: {
        type: String
    },
    tags: [{
        type: String,
    }],

})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event