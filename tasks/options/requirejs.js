module.exports = {
    dist: {
        options: {
            baseUrl: 'app/scripts',
            optimize: 'none',
            paths: {
                'templates': '../../.tmp/scripts/templates'
            },
            preserveLicenseComments: false,
            useStrict: true,
            wrap: true,
            pragmasOnSave: {
                excludeHbsParser : true,
                excludeHbs: true,
                excludeAfterBuild: true
            }
        }
    }
};
