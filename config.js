'use strict';

module.exports = {
    api: {
        congress: {
            url: 'https://congress.api.sunlightfoundation.com',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    },
    server: {
        port: 8831,
        host: 'localhost'
    },
    mongo: {
        url: "ds123370.mlab.com",
        port: 23370,
        u: "sensor-user",
        p: "diamondsword.987",
        db: "sensor"
    }
};