const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get('/', (req,res) => {
    res.send("It's working")
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})


