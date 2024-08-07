const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        username : {
            type: String,
            required : [true, "Please provide unique Username"],
            unique: [true, "Username Exist"]
        },
        password: {
            type: String,
            required: [true, "Please provide a password"],
            unique : false,
        },
        email: {
            type: String,
            required : [true, "Please provide a unique email"],
            unique: true,
        },
        firstName: { type: String},
        lastName: { type: String},
        mobile : { type : Number},
        address: { type: String},
        profile: { type: String}
    })

    const User = mongoose.model("User", userSchema);

    module.exports = User