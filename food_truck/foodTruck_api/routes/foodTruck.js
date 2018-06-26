var express = require('express'),
        router = express.Router(),
        db = require('../models'),
        helpers = require('../helpers/foodTruck');

router.route('/')
.get(helpers.getTrucks)
.post(helpers.createTruck);

router.route('/:id')
.get(helpers.getTruck)
.put(helpers.updateTruck)
.delete(helpers.deleteTruck);

module.exports = router;
