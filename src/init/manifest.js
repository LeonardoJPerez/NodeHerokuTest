'use strict';

module.exports = {
    connections: [
        {
            port: 8031,
            host: 'localhost',
            labels: ['api']
        }
    ],
    registrations: require('./registers')
};