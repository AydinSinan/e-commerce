const mongoose = require('mongoose')
const dbConnect = () => {
    try {
        mongoose.set('strictQuery',false);
        const conn = mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true})
        console.log('Database connected ')
    } catch (err) {
        console.log('Database error')
    }
}

module.exports = dbConnect