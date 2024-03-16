const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "123456"
const app = express()
app.use(cors())
app.use(express.json())
const { User } = require("./index")

app.post('/user/signin', async (req, res) => {
    const username = req.headers.username
    const password = req.headers.password
    const response = await User.findOne({ username: username })
    if (response) {
        res.json({
            username: username,
            description: response.description,
            linkedIn: response.linkedIn,
            gitHub: response.gitHub,
            interests: response.interests
        })
    }
    else {
        const token = jwt.sign({ username: username }, JWT_SECRET)
        await User.create({
            username: username,
            password: password
        })
        res.json({
            msg: "user created and signed in",
            token: token
        })
    }
})

app.put('/user/details', async (req, res) => {
    try {
        const token = req.headers.authorization
        const decodedToken = jwt.verify(token, JWT_SECRET)
        if (decodedToken.username) {
            const description = req.body.description
            const interests = req.body.interests
            const linkedIn = req.body.linkedIn
            const gitHub = req.body.gitHub
            await User.updateOne(
                {
                    username: decodedToken.username
                },
                {
                    $set: {
                        [`interests.${0}`]: interests[0],
                        [`interests.${1}`]: interests[1],
                        [`interests.${2}`]: interests[2],
                        description: description,
                        linkedIn: linkedIn,
                        gitHub: gitHub
                    }
                })
            res.json({
                msg: "details added",
                username: decodedToken.username
            })
        }

        else {
            res.json({
                msg: "you are not authenticated"
            })
        }

    }
    catch (e) {
        res.json({
            msg: "wrong authorization token"
        })
    }
})

app.listen(3000, () => {
    console.log("server is running on 3000")
})