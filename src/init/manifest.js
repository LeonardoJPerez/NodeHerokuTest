'use strict';

module.exports = {
    connections: [
        {
            port: process.env.PORT || 8031,
            host: '0.0.0.0',
            labels: ['api']
        }
    ],
    registrations: require('./registers')
};