const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get('/', (req,res) => {
    res.send("It's working")
})

app.post('/', (req,res) => {
    axios.post('https://hooks.slack.com/services/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', {text: 'tbd'})
}).then(()=> {
    res.send("Success")
}).catch(() => {
    res.send("Fail")
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})


