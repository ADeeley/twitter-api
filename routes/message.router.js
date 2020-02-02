const express = require('express');
const router = express.Router();
const HttpStatus = require('http-status-codes')
const MessageModel = require('../models/message.model');

router.route('/messages')
	.get(async (req, res) => {
		const { firstName, lastName } = req.body;
		let query = {};
		if (firstName && lastName) {
			query = {
				author: {
					firstName,
					lastName
				}
			}
		}
		const user = await MessageModel.find(query).lean().exec();
		res.status(HttpStatus.OK).json(user);
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

		res.status(HttpStatus.CREATED).json(user.toJSON());
	})

module.exports = router;
