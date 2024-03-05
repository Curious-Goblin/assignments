const { User } = require('../db')

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.get('username');
    const password = req.get('password');
    const existingUser = await User.findOne({ username: username, password: password })
    if (existingUser) {
        next();
    }
    else {
        res.status(500).send('the login credentials are wrong');
    }
}

module.exports = userMiddleware;