
const express = require('express')
const router = express.Router()

const {
    createEvent,
    getAllEvents,
    getEventsById,
    getEventsByTags,
    getEventsByTitle,
    getOnlineEvents,
    getOfflineEvents
} = require('../controllers/eventController')

router.post("/", createEvent)

router.get("/", getAllEvents)
router.get("/eventId/:id", getEventsById)
router.get("/filter/title/:title", getEventsByTitle)
router.get("/filter/tags/:tags", getEventsByTags)
router.get("/online", getOnlineEvents)
router.get("/offline", getOfflineEvents)

module.exports = router