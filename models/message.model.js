const mongoose = require('mongoose')
const UserModel = require('./user.model')

const messageSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true
	},
	author: {
		firstName: String,
		lastName: String
	}
})

module.exports = mongoose.model('message', messageSchema)
