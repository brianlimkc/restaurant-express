require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const expressEJSLayouts = require('express-ejs-layouts')
const app = express()




mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => {
        console.log("mongoose running")
    })

/// Middleware

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(expressEJSLayouts)
app.use(methodOverride("_method"))

/// Routes



app.use("/", require("./routes/restaurants.routes"))
app.use("/location", require("./routes/locations.routes"))

app.listen(process.env.PORT, () => console.log(`running on ${process.env.PORT}`))
