const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
        })
        console.log('Connected to database...')
    } catch (error) {
        console.log(`[ERROR]: Connecting to the database:`,error)
    }
}

module.exports = connectDB