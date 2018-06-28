var mongoose = require('mongoose');

var foodTruckSchema = new mongoose.Schema({
    vendorName: String,
    location: {
        type: "Point",
    coordinates: [String]
    },
    foodType: String,
    metadata: {
    url: String,
    phoneNum: String,
    companyName: String,
    image_link: String
    },
    veganOptions: Boolean,
    vegetarianOptions: Boolean,
    amenities: [String],
    ratings: {
    avgRating: String,
    numRatings: String
    },
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
