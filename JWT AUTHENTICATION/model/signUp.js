const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const Jwt = require("jsonwebtoken")

const mySchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true })

mySchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    const hashPass = await bcrypt.hash(this.password, 10)
    this.password = hashPass
    next()
})

mySchema.methods.isPassCorrect = async function (pass) {
    return await bcrypt.compare(pass, this.password)
}

mySchema.methods.generateToken = async function () {
    return await Jwt.sign(
    {
    email: this.email,
    userId: this._id.toString()
    },
    "tokenJWT",
    { expiresIn: "3h" })

}

const SignUp = mongoose.model("Users", mySchema)

module.exports = SignUp

