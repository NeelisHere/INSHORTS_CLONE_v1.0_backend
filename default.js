const data = require('./constants/data')
const NewsModel = require('./models/News')

const defaultData = async () => {
    try {
        // await NewsModel.deleteMany({})
        await NewsModel.insertMany(data)
        console.log(`Data inserted successfully...`)
    } catch (error) {
        console.log(`[ERROR] Error in default-data insertion: ${error.message}`)
    }
}

module.exports = defaultData