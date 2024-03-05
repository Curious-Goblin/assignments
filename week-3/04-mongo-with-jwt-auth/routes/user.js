const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "12345678"


// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password
    const existingUser = await Admin.findOne({ username: username })
    if (existingUser) {
        res.json({
            msg: "this username already exists"
        })
    }
    else {
        await User.create({
            username,
            password
        })
        res.json({
            msg: "user created successfully"
        })
    }
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    const existingUser = User.findOne({ username: username })
    if (existingUser) {
        const jwtToken = jwt.sign({ username: username, password: password }, JWT_SECRET)
        res.json({
            token: jwtToken
        })
    }
    else {
        res.json({
            msg: "user does not exists"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const token = req.headers.authorization
    const words = token.split(" ")
    const jwtToken = words[1]
    const decodedToken = jwt.decode(jwtToken)
    const username = decodedToken.username

    await User.updateOne({
        username: username
    },
        {
            "$push": {
                purchasedCourses: courseId
            }
        })
    res.json({
        msg: "purchase Complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const token = req.headers.authorization
    const words = token.split(" ")
    const jwtToken = words[1]
    const decodedToken = jwt.decode(jwtToken)
    const username = decodedToken.username
    const user = await User.findOne({ username: username })
    console.log(user.purchasedCourses)
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        courses: courses
    })
});

module.exports = router