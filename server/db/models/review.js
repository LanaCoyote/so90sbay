'use strict';
var mongoose = require('mongoose');

    var schema = new mongoose.Schema({
        title: {
            type: String
        },
        body: {
            type: String,
            required: true
        },
        rating: {
            type: Number
        },
        user: {
            type: mongoose.Schema.Types.ObjectId, ref: "User"
        },
        product: {
            type: mongoose.Schema.Types.ObjectId, ref: "Product"
        }
    });


mongoose.model('Review', schema);