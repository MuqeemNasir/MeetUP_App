const express = require('express')
const cors = require('cors')
const app = express()
const {initializeDatabase} = require('./db/db.connect')
app.use(express.json())

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

initializeDatabase()

const eventRoutes = require('./routes/events.routes')

app.use("/api/events", eventRoutes)

if (process.env.NODE_ENV !== "serverless"){
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () =>{
        console.log(`Server running on port ${PORT}`)
    })
}

module.exports = app