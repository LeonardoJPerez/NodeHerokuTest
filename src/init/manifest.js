'use strict';

module.exports = {
    connections: [
        {
            port: 80,
            host: 'leo-test-app.herokuapp.com',
            labels: ['api']
        }
    ],
    registrations: require('./registers')
};