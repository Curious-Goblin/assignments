const jwt=require('jsonwebtoken')
const  JWT_SECRET  = "12345678"


function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization;
    const words = token.split(" ")
    const jwtToken = words[1]
    try {
        const decodedValue=jwt.verify(jwtToken, JWT_SECRET)
        if(decodedValue.username)
        {
            next()
        }
        else
        {
            res.status(403).json({
                msg:"you are not authenticated"
            })
        }
    }
    catch (error) {
        res.json({
            msg: "incorrect inputs"
        })
    }
}

module.exports = userMiddleware;