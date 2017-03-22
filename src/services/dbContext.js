var MongoClient = require('mongodb').MongoClient;
var Config = require('./../../config').mongo;

const DEFAULT_COLLECTION = 'data';

const connect = (cb) => {
    const dbConnection = `mongodb://${Config.u}:${Config.p}@${Config.url}:${Config.port}/${Config.db}`;
    //"mongodb://sensor-user:diamondsword.987@ds123370.mlab.com:23370/sensor"
    console.log(dbConnection);
    
    MongoClient.connect(dbConnection, function (err, db) {
        if (err) { return console.log(err); }
        init(db);
        cb(err, db);
    });
};

const init = (db) => {
    var collection = db.collection(DEFAULT_COLLECTION);
    collection.createIndex({ timestamp: -1 }, function (err, result) { });
};

module.exports = {
    findLast: (cb) => {
        connect(function (err, db) {
            var collection = db.collection(DEFAULT_COLLECTION);
            collection
                .find()
                .sort({ timestamp: -1 })
                .toArray(function (error, docs) {
                    cb(err, docs[0]);
                });
        });
    },
    save: (item, cb) => {
        if (!item.hasOwnProperty('timestamp')) {
            let d = new Date();
            item.timestamp = d.toISOString();
        }

        var collection = db.collection(DEFAULT_COLLECTION);
        collection.insert(item, { w: 1 }, function (err, result) {
            cb(err, result);
        });
    }
};