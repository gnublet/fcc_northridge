var mongoose = require('mongoose');
mongoose.set('debug', true);
// environment variable
var url = process.env.DATABASEURL || 'mongodb://localhost/foodTruck';
mongoose.connect(url);

mongoose.Promise = Promise;

module.exports.foodTruck = require('./foodTruck');
