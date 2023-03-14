const express =  require('express')
const env = require('dotenv').config()

const port = process.env.PORT || 5000

const app = express()

app.use('/api/farmers', require('./routes/routeFarmers'))
app.use('/api/officers',require('./routes/routerOfficer'))

app.listen(port, () => console.log(`CPSMCD Server started on port : ${port}`))