'use strict';

const Glue = require('glue');
const Manifest = require('./manifest');

Glue.compose(Manifest, { relativeTo: __dirname }, (err, server) => {
    if (err) {
        throw err;
    }
    server.start((err) => {
        console.log(`Server running at: ${server.connections[0].info.uri}`);
        console.log('Available routes:');
        var info = server.table()[0];
        info.table.forEach((route) => {
            console.log('\t', route.public.method.toUpperCase(), ' ', route.public.path);
        });
    });
});