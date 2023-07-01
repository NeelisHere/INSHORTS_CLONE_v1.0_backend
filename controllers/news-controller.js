const NewsModel = require('../models/News')

module.exports = async (req, res) => {
    try {
        const data = await NewsModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: data.message })
    }
}