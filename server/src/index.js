import express from "express";
import axios from 'axios'
import cors from 'cors'
import dotenv from 'dotenv'
const port = 3000
dotenv.config()

const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(cors())

app.get('/', (req,res) => {
    res.send("It's working")
})

app.post('/slack-submit', (req, res) => {
	axios
		.post(process.env.SLACK_WEBHOOK_URL, {
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


