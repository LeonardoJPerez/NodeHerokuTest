'use strict';

const utils = require('./../../common/utils');
const config = require('./../../../config');

const baseUrl = config.api.congress.url;

module.exports = {
    getMembersByLocation: (location) => {
        let apiUrl = `${baseUrl}/legislators/locate?latitude=${location.lat}&longitude=${location.lng}`;
        return utils.executeRequest(apiUrl);
    },
    getMembersByBioguideId: (bid) => {
        let apiUrl = `${baseUrl}/legislators?bioguide_id=${bid}&all_legislators=true`;
        return utils.executeRequest(apiUrl);
    },
    searchMembersByString: (searchString) => {
        let apiUrl = `${baseUrl}/legislators?query=${searchString}`;
        return utils.executeRequest(apiUrl);
    }
};