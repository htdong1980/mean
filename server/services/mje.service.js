var config = require('config.json');
var _ = require('lodash');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('mjes');

var service = {};

service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;

function getAll() {
    var deferred = Q.defer();

    db.mjes.find().toArray(function (err, mjes) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        deferred.resolve(mjes);
    });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.mjes.findById(_id, function (err, mje) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (mje) {
            deferred.resolve(mje);
        } else {
            // mjes not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(mjeParam) {
    var deferred = Q.defer();

    createMje();

    function createMje() {
        var mje = mjeParam;

        db.mjes.insert(
            mje,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function update(_id, mjeParam) {
    var deferred = Q.defer();

    updateMje();

    function updateMje() {
        // fields to update
        var set = {
            lge: mjeParam.lge,
            docDate: mjeParam.docDate,
            desc: mjeParam.desc,
            entryDate: mjeParam.entryDate,
            user: mjeParam.user,
            entries: mjeParam.entries,
        };

        db.mjes.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);
                deferred.resolve();
            });
    }

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    db.mjes.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}
