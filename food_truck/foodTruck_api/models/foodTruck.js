var mongoose = require('mongoose');

var foodTruckSchema = new mongoose.Schema({
    name: {
        type: String,
        rquired: 'name cannot be blank'
    }
});

var foodTruck = mongoose.model('foodTruck', foodTruckSchema);

module.exports = foodTruck;
