'use strict';

var unirest = require('unirest');
var config = require('./../../config');

module.exports = {
    executeRequest: (uriPath) => {
        return new Promise((fulfill, reject) => {
            var Request = unirest.get(uriPath);
            Request
                .header(config.api.congress.header)
                .end((response) => {
                    if (response.status === 200) {
                        fulfill(response.body);
                    } else {
                        reject(response.error);
                    }
                });
        });
    }
}