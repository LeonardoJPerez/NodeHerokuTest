'use strict';

module.exports = {
    connections: [
        {
            host: 'leo-test-app.herokuapp.com',
            port: 80,
            //host: 'localhost',
            //port: 8031,
            labels: ['api']
        }
    ],
    registrations: require('./registers')
};