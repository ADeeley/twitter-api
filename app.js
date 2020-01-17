const express = require('express')
const morgan = require('morgan')
const connect = require('./connect')
const { json, urlencoded } = require('body-parser')
const app = express()
const User = require('./models/user.model')

app.use(morgan('dev'))
app.use(urlencoded({ extended: true }))
app.use(json())

app.get('/', (req, res) => {
	res.send('OK')
})

app.post('/user', (req, res) => {
	console.log(req.body);
	const data = req.body;
	User.create({
		firstName: data.firstName,
		lastName: data.lastName
	})
	res.send(req.body)
})
/*
app.get('/user', (req, res) => {
	console.log(req.body);
	const data = req.body;
	const result = User.find({
		firstName: data.firstName,
	})
	console.log(result)
	res.send(result)
}) */

connect('mongodb://localhost:27017/todo')
	.then(() => app.listen(4000, () => {
		console.log('server on http://localhost:4000')
	}))
	.catch(e => console.error(e))
