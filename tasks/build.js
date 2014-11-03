module.exports = function (grunt) {
	grunt.registerTask('build', [
		'createDefaultTemplate',
		'handlebars',
		'compass:dist',
		'useminPrepare',
		'requirejs',
		'imagemin',
		'htmlmin',
		'concat',
		'cssmin',
		'uglify',
		'copy',
		'usemin'
	]);
};
