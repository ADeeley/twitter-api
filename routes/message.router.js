var express = require('express');
var router = express.Router();
const MessageModel = require('../models/message.model')
const UserModel = require('../models/user.model')

router.route('/message')
	.get(async (req, res) => {
		const { firstName, lastName } = req.body;
		const user = await MessageModel.find({
			author: {
				firstName,
				lastName
			}
		}).lean().exec()

		res.status(200).json(user)
	})
	.post(async (req, res) => {
		const { firstName, lastName, text } = req.body;
		const user = await MessageModel.create({
			text,
			author: {
				firstName,
				lastName
			}
		})

		res.status(201).json(user.toJSON())
	})

module.exports = router;
