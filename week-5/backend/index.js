const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://poddarsourabh9939:Sourabhh%40123@cluster0.scewquy.mongodb.net/buisnessCard")
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    description: String,
    interests: [
        a = String,
        b = String,
        c = String
    ]
})

const User = mongoose.model('User', UserSchema)

module.exports = { User }