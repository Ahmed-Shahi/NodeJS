const SignUp = require("../model/signUp")

async function handleCreateNewUser(req, res) {

    try {
        const { UserName, Email, Password } = req.body

        const Entry = await SignUp.create({
            userName: UserName,
            email: Email,
            password: Password
        })

        return res.status(201).json({ Message: "Successfully Created!!" })
    }
    catch {
        return res.status(400).json({ Message: "Invalid Input!!" })
    }
}

async function handleLoginUser(req, res) {

    const { Email, Password } = req.body
    const user = await SignUp.findOne({ email: Email })

    if (!user) {
        return res.status(400).json({ Message: "User Not Found!!!" });
    }

    if (user.password !== Password) {
        return res.status(400).json({ Message: "Invalid Password!!!" });
    }

    return res.status(200).json({ Message: "User Found!!!" })

}


module.exports = {
    handleCreateNewUser,
    handleLoginUser,
}