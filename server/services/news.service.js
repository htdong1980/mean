var config = require('config.json');
var _ = require('lodash');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('news');

var service = {};

service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;

function getAll() {
    var deferred = Q.defer();

    db.news.find().toArray(function (err, news) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        deferred.resolve(news);
    });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.news.findById(_id, function (err, news) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (news) {
            deferred.resolve(news);
        } else {
            // news not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(newsParam) {
    var deferred = Q.defer();

    createNews();

    function createNews() {
        var news = newsParam;

        db.news.insert(
            news,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function update(_id, newsParam) {
    var deferred = Q.defer();

    updateNews();

    function updateNews() {
        // fields to update
        var set = {
            title: newsParam.title,
            content: newsParam.content,
            author: newsParam.author,
            publish: newsParam.publish,
        };

        db.news.update(
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

    db.news.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}
