const express = require('express')
const morgan = require('morgan')
const connect = require('./connect')
const { json, urlencoded } = require('body-parser')
const app = express()
const userRouter = require('./routes/users.router')
const messageRouter = require('./routes/message.router')

app.use(morgan('dev'))
app.use(urlencoded({ extended: true }))
app.use(json())
app.use('/', userRouter);
app.use('/', messageRouter);

app.get('/', (req, res) => {
	res.send('OK')
})

connect('mongodb://localhost:27017/todo')
	.then(() => app.listen(4000, () => {
		console.log('server on http://localhost:4000')
	}))
	.catch(e => console.error(e))
