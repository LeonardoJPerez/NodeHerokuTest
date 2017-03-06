'use strict';

const locationService = require('./../../../../services/location');

module.exports = {
    getLocation: {
        validate: {},
        pre: [],
        handler: (request, reply) => {
            locationService.getLocationCoordinates(request.params.zipcode)
                .then((res) => {
                    reply(JSON.stringify(res, null, 4));
                }, (error) => {
                    reply(JSON.stringify(error, null, 4));
                });
        }
    }
}