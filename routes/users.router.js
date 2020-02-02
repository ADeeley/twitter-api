var express = require('express');
var router = express.Router();
const UserModel = require('../models/user.model')

router.route('/user')
	.get(async (req, res) => {
		const { firstName } = req.body;
		const user = await UserModel.find({
			firstName
		}).lean().exec()

		res.status(200).json(user)
	})
	.post(async (req, res) => {
		const { firstName, lastName } = req.body;
		const user = await UserModel.create({
			firstName,
			lastName
		})

		res.status(201).json(user.toJSON())
	})


module.exports = router;
