module.exports = {
    options: {
        sassDir: '<%= yeoman.app %>/styles',
        cssDir: '.tmp/styles',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: 'app/bower_components',
        relativeAssets: true
    },
    dist: {},
    server: {
        options: {
            debugInfo: true
        }
    }
};
