const express = require('express')
const app = express()
const port = 5005

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Han:go12go@boilerplate.pdkzz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB connected!')).catch(err => console.log(err))
// mongodb+srv://Han:<password>@boilerplate.pdkzz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.get('/', (req, res) => res.send('Hello, World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


