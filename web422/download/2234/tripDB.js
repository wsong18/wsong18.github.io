const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
    "tripduration": Number,
    "start station id": Number,
    "start station name": String,
    "end station id": Number,
    "end station name": String,
    "bikeid": Number,
    "usertype": String,
    "birth year": Number,
    "gender": Number,
    "start station location": {
        "type": {type: String},
        "coordinates": [Number]
    },
    "end station location": {
        "type": {type: String},
        "coordinates": [Number]
    },
    "start time": Date,
    "stop time": Date
});
