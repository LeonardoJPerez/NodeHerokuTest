const options = {
    basePath: '/v1',
    select: ['api'],
    uglify: true
};

module.exports = [
    {
        plugin: {
            register: './../api/v1/location',
            options: options
        }
    },
    {
        plugin: {
            register: './../api/v1/members',
            options: options
        }
    }
]