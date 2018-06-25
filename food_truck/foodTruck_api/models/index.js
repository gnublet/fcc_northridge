var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/foodTruck');

mongoose.Promise = Promise;

module.exports.foodTruck = require('./foodTruck');
