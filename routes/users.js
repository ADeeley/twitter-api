var express = require('express');
var router = express.Router();
const User = require('../models/user.model')

router.route('/user')
	.get(async (req, res) => {
		const { firstName } = req.body;
		const user = await User.find({
			firstName
		}).lean().exec()

		res.status(200).json(user)
	})
	.post(async (req, res) => {
		const { firstName, lastName } = req.body;
		const user = await User.create({
			firstName,
			lastName
		})

		res.status(201).json(user.toJSON())
	})


module.exports = router;
