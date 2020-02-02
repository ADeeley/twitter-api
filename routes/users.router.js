const express = require('express');
const router = express.Router();
const HttpStatus = require('http-status-codes')
const UserModel = require('../models/user.model')

router.route('/user')
	.get(async (req, res) => {
		const { firstName } = req.body;
		const user = await UserModel.find({
			firstName
		}).lean().exec()

		res.status(HttpStatus.OK).json(user)
	})
	.post(async (req, res) => {
		const { firstName, lastName } = req.body;
		const user = await UserModel.create({
			firstName,
			lastName
		})

		res.status(HttpStatus.CREATED).json(user.toJSON())
	})


module.exports = router;
