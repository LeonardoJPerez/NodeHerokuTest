'use strict';

var utils = require('./../../common/utils');

module.exports = {
    getLocationCoordinates: (zipcode) => {
        let apiUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&sensor=false`;
        return utils.executeRequest(apiUrl)
            .then((res) => {
                return res.results[0];
            });
    }
}