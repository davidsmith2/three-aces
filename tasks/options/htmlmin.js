module.exports = {
    dist: {
        options: {},
        files: [
        	{
	            expand: true,
	            cwd: '<%= yeoman.app %>',
	            src: '*.html',
	            dest: '<%= yeoman.dist %>'
        	}
        ]
    }
};
