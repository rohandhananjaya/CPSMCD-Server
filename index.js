const express =  require('express')
const env = require('dotenv').config()
const colors = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded(
    {
    extended:false
    }
))


app.use('/api/users',require('./routes/routeSysUsers'))
app.use('/api/crops',require('./routes/routeCrops'))
app.use(errorHandler)
app.listen(port, () => console.log(`CPSMCD Server started on port : ${port}`))