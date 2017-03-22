'use strict';

const locationService = require('./../../../../services/location');
const temperatureService = require('./../../../../services/temperature/');

module.exports = {
    saveTemperature: {
        handler: (request, reply) => {
            temperatureService
                .saveTemperature(request.payload)
                .then((res) => {
                    reply(JSON.stringify(res, null, 4));
                }, (error) => {
                    reply(JSON.stringify(error, null, 4));
                });
        }
    }
}