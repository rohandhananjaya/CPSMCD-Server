const express =  require('express')
const env = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded(
    {
    extended:false
    }
))

app.use('/api/farmers', require('./routes/routeFarmers'))
app.use('/api/officers',require('./routes/routerOfficer'))
app.use(errorHandler)
app.listen(port, () => console.log(`CPSMCD Server started on port : ${port}`))