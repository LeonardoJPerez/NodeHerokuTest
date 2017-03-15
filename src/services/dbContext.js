var MongoClient = require('mongodb').MongoClient;

const connect = (cb) => {
    MongoClient.connect("mongodb://sensor-user:diamondsword.987@ds123370.mlab.com:23370/sensor", function (err, db) {
        if (err) { return console.dir(err); }
        init(db);
        cb(err, db);
    });
};

const init = (db) => {
    var collection = db.collection('data');
    collection.createIndex({ timeStamp: -1 }, function (err, result) { });
};

module.exports = {
    findLast: (cb) => {
        connect(function (err, db) {
            var collection = db.collection('data');
            var d = new Date();

            var doc1, doc2, doc3;
            setTimeout(() => {
                doc1 = { timeStamp: d.toISOString(), 'temp': '35.9' };
                setTimeout(() => {
                    doc2 = { timeStamp: d.toISOString(), 'temp': '34.6' };
                    setTimeout(() => {
                        doc3 = { timeStamp: d.toISOString(), 'temp': '40.6' };

                        collection.insert([doc1, doc2, doc3], { w: 1 }, function (err, result) {
                            collection
                                .find()
                                .sort({ timeStamp: -1 })
                                .toArray(function (error, docs) {
                                    cb(err, docs[0]);
                                });
                        });
                    }, 5000);
                }, 5000);
            }, 5000);
        });
    },
    save: () => {
    }
};