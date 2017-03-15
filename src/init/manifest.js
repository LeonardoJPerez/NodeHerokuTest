'use strict';

const Path = require('path');

module.exports = {
    connections: [
        {
            port: +process.env.PORT || 8031,
            host: '0.0.0.0',
            labels: ['api'],
            routes: {
                files: {
                    relativeTo: Path.join(__dirname, 'public')
                }
            }
        }
    ],
    registrations: require('./registers')
};