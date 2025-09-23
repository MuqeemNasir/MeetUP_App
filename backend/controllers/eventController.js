const Event = require('../models/meetup.models')

const createEvent = async (req, res) => {
    try {
        const newEvent = new Event(req.body)
        const saved = await newEvent.save()
        res.status(201).json({ message: 'Event Added Successfully', event: saved })
    } catch (error) {
        res.status(500).json({ error: "Failed to Store Details of Event." })
    }
}

const getAllEvents = async (req, res) => {
    try {
        const allEvents = await Event.find()
        if (allEvents.length !== 0) {
            res.status(200).json(allEvents)
        } else {
            res.status(400).json({ error: "No Event Found." })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Events." })
    }
}

const getEventsById = async(req, res) => {
    try{
        const event = await Event.findById(req.params.id)
        if(!event){
            res.status(404).json({error: "Event Not Found."})
        }else{
            res.status(200).json(event)
        }
    }catch(error){
        res.status(500).json({error: "Failed to fetch Event by Id"})
    }
}

const getEventsByTitle = async (req, res) => {
    const { title } = req.params
    try {
        const event = await Event.find({ title: { $regex: title, $options: "i" } })
        if (event.length !== 0) {
            res.status(200).json(event)
        } else {
            res.status(404).json({ error: "No Event found by title." })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Events by Title." })
    }
}

const getEventsByTags = async (req, res) => {
    const { tags } = req.params
    try {
        const event = await Event.find({ tags: { $in: [tags] } })
        if (event.length !== 0) {
            res.status(200).json(event)
        } else {
            res.status(404).json({ error: "No Event found by Tags." })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Event by Tags." })
    }
}

const getOnlineEvents = async (req, res) => {
    try {
        const event = await Event.find({ eventType: "Online" })
        if (event.length !== 0) {
            res.status(200).json(event)
        } else {
            res.status(404).json({ error: 'No Online Event Found.' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to Fetch Online Events.' })
    }
}


const getOfflineEvents = async (req, res) => {
    try {
        const event = await Event.find({ eventType: "Offline" })
        if (event.length !== 0) {
            res.status(200).json(event)
        } else {
            res.status(404).json({ error: 'No Offline Event Found.' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to Fetch Offline Events.' })
    }
}

module.exports = { createEvent, getAllEvents, getEventsById, getEventsByTitle, getEventsByTags, getOnlineEvents, getOfflineEvents }