import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        trim: true
    },
    email: {
        type: String,
    },
    password: String
})

export default mongoose.model("user", userSchema)