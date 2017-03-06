'use strict';

const Hoek = require('hoek');

exports.register = function (server, options, next) {
    options = Hoek.applyToDefaults({ basePath: '' }, options);

    server.route([
        {
            method: 'GET',
            path: options.basePath + '/location/{zipcode}',
            config: require('./config/read').getLocation
        }
    ]);

    next();
};

exports.register.attributes = {
    name: 'location',
    version: '1.0.0'
};