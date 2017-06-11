var config = require('config.json');
var express = require('express');
var router = express.Router();
var newsService = require('services/news.service');

// routes
router.post('/', create);               // Create One
router.get('/', getAll);                // Read Many
router.get('/:_id', getOne);            // Read One
router.put('/:_id', update);            // Update One
router.delete('/:_id', _delete);        // Delete One
                                        // Disable One
                                        // Revert One
                                        // History One
                                        // Upload Many
                                        // Update Many
                                        // Revert Many
                                        // History Many

module.exports = router;

function create(req, res) {
    //check access here
    newsService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    //check access here
    newsService.getAll()
        .then(function (news) {
            res.send(news);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getOne(req, res) {
    //check access here
    newsService.getById(req.params._id)
        .then(function (news) {
            if (news) {
                res.send(news);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    // check access here
    newsService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function _delete(req, res) {
    // check access here
    newsService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
