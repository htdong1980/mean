var config = require('config.json');
var express = require('express');
var router = express.Router();
var mjeService = require('services/mje.service');

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
    mjeService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    //check access here
    mjeService.getAll()
        .then(function (mjes) {
            res.send(mjes);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getOne(req, res) {
    //check access here
    mjeService.getById(req.params._id)
        .then(function (mjes) {
            if (mjes) {
                res.send(mjes);
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
    mjeService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function _delete(req, res) {
    // check access here
    mjeService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
