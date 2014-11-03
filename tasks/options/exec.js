module.exports = {
	mocha: {
		command: 'mocha-phantomjs http://localhost:<%= connect.testserver.options.port %>/test',
		stdout: true
	}
};
