const express = require('express')
const connectDB = require('./database/db.js')
const defaultData = require('./default.js')
const route = require('./routes/route.js')
const cors = require('cors')
const dotenv = require('dotenv').config()


const PORT = process.env.PORT || 5000

const app = express()

connectDB()

app.use(cors())
app.use('/api/v1', route)



app.get('/', (req, res) => {
    res.send('Welcome')
})


app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}/`)
})

// defaultData()



