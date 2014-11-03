module.exports = {
    options: {
        cssDir: '.tmp/styles',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        imagesDir: '<%= yeoman.app %>/images',
        importPath: '<%= yeoman.app %>/styles',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        relativeAssets: true,
        sassDir: '<%= yeoman.app %>/styles'
    },
    dist: {},
    server: {
        options: {
            debugInfo: true
        }
    }
};
