const express = require("express");
const cors = require("cors")
const mainRouter = require("./routes/surveyRoutes")
const bodyparser = require("body-parser")
const config = require("./config")

const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use("/api/surveys", mainRouter)

app.listen(config.port, () => {
    console.log("server is running at 3000")
})