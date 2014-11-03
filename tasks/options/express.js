module.exports = {
	options: {
		// Override defaults here
		port: '9000'
	},
	dev: {
		options: {
			script: 'server/app.js'
		}
	},
	prod: {
		options: {
			script: 'server/app.js'
		}
	},
	test: {
		options: {
			script: 'server/app.js'
		}
	}
};
