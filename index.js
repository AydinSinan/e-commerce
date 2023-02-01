const bodyParser = require('body-parser');
const express = require('express');
const dbConnect = require('./config/dbConnect');
const { noFound, errorHandler } = require('./middlewares/errorHandler');
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3000
const authRouter = require('./routes/authRoute')
dbConnect()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use("/api/user", authRouter)
app.use(noFound)
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
})