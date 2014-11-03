module.exports = function (grunt) {
	grunt.registerTask('default', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
		}
		grunt.option('force', true);
		grunt.task.run([
			'clean:server',
			'compass:server',
			'connect:testserver',
			'express:dev',
			'exec',
			'open',
			'watch'
		]);
	});
};
