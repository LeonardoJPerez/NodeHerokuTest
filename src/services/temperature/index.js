'use strict';

const utils = require('./../../common/utils');
const config = require('./../../../config');
var DbContext = require('../../services/dbContext');

const baseUrl = config.api.congress.url;

module.exports = {
    getTemperature: () => {
        return new Promise((fulfill, reject) => {
            DbContext.findLast((err, item) => {
                if (err) {
                    reject(err);
                } else {
                    fulfill(item);
                }
                return item;
            });
        });
    },
    getTemperatureFromPressure: () => {

    }
};