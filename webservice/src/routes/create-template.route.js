const Joi = require('joi')

const { nftService } = require('../services')

module.exports = {
	method: 'POST',
	path: '/create-template',
	handler: ({ payload: { input } }) =>
		// console.log("credentials - auth",credentials,auth)
		nftService.createTemplate(input),
	options: {
		// validate: {
		// 	payload: Joi.object({
		// 		input: Joi.object({
		// 			category: Joi.string().required(),
		// 			name: Joi.string().required(),
		// 			metadata: Joi.object().required()
		// 		}).required()
		// 	}).options({ stripUnknown: true })
		// }
	}
}
