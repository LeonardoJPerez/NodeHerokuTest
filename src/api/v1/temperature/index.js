'use strict';

const Hoek = require('hoek');

exports.register = function (server, options, next) {
    options = Hoek.applyToDefaults({ basePath: '' }, options);

    server.route([
        {
            method: 'GET',
            path: options.basePath + '/temperature',
            config: require('./config/read').getTemperature
        },
        {
            method: 'POST',
            path: options.basePath + '/temperature',
            config: require('./config/write').saveTemperature
        },
        // {
        //     method: 'GET',
        //     path: options.basePath + '/members/search', //?q={argument}
        //     config: require('./config/read').searchMembers
        // }
    ]);

    next();
};

exports.register.attributes = {
    name: 'members',
    version: '1.0.0'
};