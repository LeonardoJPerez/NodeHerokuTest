'use strict';

const Glue = require('glue');
const Path = require('path');
const Manifest = require('./manifest');

Glue.compose(Manifest, { relativeTo: __dirname }, (err, server) => {
    if (err) {
        throw err;
    }

    server.register(require('inert'), () => { });

    server.route({
        method: ['GET', 'POST'],
        path: '/pub/{param*}',
        handler: {
            directory: {
                path: Path.join(__dirname, '../public'),
                redirectToSlash: true,
                index: true
            }
        }
    });

    server.start((err) => {
        console.log(`Server running at: ${server.info.uri}`);
        console.log('Available routes:');
        var info = server.table()[0];
        info.table.forEach((route) => {
            console.log('\t', route.public.method.toUpperCase(), ' ', route.public.path);
        });
    });
});