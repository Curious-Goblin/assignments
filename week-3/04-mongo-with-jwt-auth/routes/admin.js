const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin,User, Course } = require('../db')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "12345678"


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    const existingUser = await Admin.findOne({ username: username })
    if (existingUser) {
        res.json({
            msg: "this username already exists"
        })
    }
    else {
        await Admin.create({
            username,
            password
        })
        res.json({
            msg: 'admin created successfully'
        })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    const existingUser = await Admin.findOne({ username: username })
    if(existingUser)
    {
        const jwtToken = jwt.sign({ username: username, password: password }, JWT_SECRET)
        res.json({
            token: jwtToken
        })
    }
    else 
    {
        res.json({
            msg:"user does not exist"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const imageLink = req.body.imageLink

    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    })

    res.json({
        msg: 'course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const response = await Course.find({})
    res.json({
        courses: response
    })
});

module.exports = router;