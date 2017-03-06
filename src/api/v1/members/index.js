'use strict';

const Hoek = require('hoek');

exports.register = function (server, options, next) {
    options = Hoek.applyToDefaults({ basePath: '' }, options);

    server.route([
        {
            method: 'GET',
            path: options.basePath + '/members/{zipcode}',
            config: require('./config/read').getMembersByLocation
        },
        {
            method: 'GET',
            path: options.basePath + '/member/{bid}',
            config: require('./config/read').getMemberByBioguideId
        },
        {
            method: 'GET',
            path: options.basePath + '/members/search', //?q={argument}
            config: require('./config/read').searchMembers
        }
    ]);

    next();
};

exports.register.attributes = {
    name: 'members',
    version: '1.0.0'
};