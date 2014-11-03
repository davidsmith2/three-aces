module.exports = {
	compass: {
		files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
		tasks: ['compass']
	},

	livereload: {
		files: [

			'<%= yeoman.app %>/*.html',
			'{.tmp,<%= yeoman.app %>}/styles/{,**/}*.css',
			'{.tmp,<%= yeoman.app %>}/scripts/{,**/}*.js',
			'{.tmp,<%= yeoman.app %>}/templates/{,**/}*.hbs',
			'<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',

			'test/spec/{,**/}*.js'
		],
		tasks: ['exec'],
		options: {
			livereload: true
		}
	}
};
