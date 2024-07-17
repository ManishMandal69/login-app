const mongoose = require('mongoose')
const dotenv = require('dotenv')


dotenv.config()

const connectDB = async() => {
    await mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Database Connected Successfully");
}).catch(()=>{
    console.log("Database Connection Failed");
})}

module.exports = {connectDB}