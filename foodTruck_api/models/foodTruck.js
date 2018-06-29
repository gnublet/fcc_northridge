var mongoose = require('mongoose');

var foodTruckSchema = new mongoose.Schema({
    vendorName: String,
    location: { type: String, coordinates: [Number]},
    foodType: String,
    metadata: {
        url: String,
        phoneNum: String,
        companyName: String,
        image_link: String
    },
    veganOptions: { type: Boolean, default: false},
    vegetarianOptions: { type: Boolean, default: false},
    amenities: [String],
    ratings: {
        avgRating: { type: Number, min: 0, max: 5 },
        numRatings: Number
    }
    // spacetime:
    // {
    // spacetime: Number,
    // lat: Number,
    // long: Number,
    // zip_code: Number,
    // time_start: Number,
    // time_end: Number,
    // date_start: Date,
    // date_end: Date,
    // timezone: String
    // }
    });

var foodTruck = mongoose.model('foodTruck', foodTruckSchema);

module.exports = foodTruck;
