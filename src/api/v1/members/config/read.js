'use strict';

const locationService = require('./../../../../services/location');
const membersService = require('./../../../../services/members');

module.exports = {
    getMembersByLocation: {
        handler: (request, reply) => {
            locationService.getLocationCoordinates(request.params.zipcode)
                .then((res) => {
                    membersService.getMembersByLocation(res.geometry.location)
                        .then((res) => {
                            reply(JSON.stringify(res.results, null, 4));
                        }, (error) => {
                            reply(JSON.stringify(error, null, 4));
                        });
                });
        }
    },
    getMemberByBioguideId: {
        handler: (request, reply) => {
            membersService.getMembersByBioguideId(request.params.bid)
                .then((res) => {
                    reply(JSON.stringify(res.results[0], null, 4));
                }, (error) => {
                    reply(JSON.stringify(error, null, 4));
                });
        }
    },
    searchMembers: {
        handler: (request, reply) => {
            console.log(request.query);
            membersService.searchMembersByString(request.query.q)
                .then((res) => {
                    reply(JSON.stringify(res.results, null, 4));
                }, (error) => {
                    reply(JSON.stringify(error, null, 4));
                });
        }
    }
}