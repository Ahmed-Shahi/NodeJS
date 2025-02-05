const SignUp = require("../model/signUp")

async function handleCreateNewUser(req, res) {

    try {
        const { UserName, Email, Password } = req.body

        const Entry = await SignUp.create({
            userName: UserName,
            email: Email,
            password: Password
        })

        return res.status(201).json({ Message: "Successfully Created!!", token: await Entry.generateToken() })
    }
    catch {
        return res.status(400).json({ Message: "Invalid Input!!" })
    }
}

async function handleLoginUser(req, res) {
    try {
        const { Email, Password } = req.body
        const user = await SignUp.findOne({ email: Email })

        if (!user) {
            return res.status(400).json({ Message: "User Not Found!!!" });
        }

        const pass = await user.isPassCorrect(Password)

        if (!pass) {
            return res.status(400).json({ Message: "Invalid Password!!!" });
        }

        return res.status(200).json({ Message: "User Found!!!" , Token: await user.generateToken()})
    } catch {
        return res.json({ Message: "Server Error" })
    }
}


module.exports = {
    handleCreateNewUser,
    handleLoginUser,
}