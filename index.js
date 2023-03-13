const express =  require('express')
const env = require('dotenv').config()

const port = process.env.PORT || 5000

const app = express()

app.use('/api/farmers', require('./routes/routeFarmers'))

app.listen(port, () => console.log(`Server started on port : ${port}`))