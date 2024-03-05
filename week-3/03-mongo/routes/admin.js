const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../../03-mongo/db/index");
const router = express.Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try {
        const username = req.body.username;
        const password = req.body.password;
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
    }
    catch (error) {
        res.status(500).json({
            msg: "currently not available"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

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
// app.listen(3000)
module.exports = router;