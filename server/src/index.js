import express from "express";
import axios from 'axios'
import cors from 'cors'
const port = 3000

const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(cors())

app.get('/', (req,res) => {
    res.send("It's working")
})

app.post('/slack-submit', (req, res) => {
	axios
		.post('https://hooks.slack.com/services/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', {
			blocks: [
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: "Congratulations on finishing your task!",
					},
				},
			],
		})
		.then(() => {
			res.send('Success')
		})
		.catch(() => {
			res.send('Fail')
		})
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})


