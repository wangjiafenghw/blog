'use strict'

const mongoose = require("mongoose");
const Schema   = mongoose.Schema

const TestSchema = new Schema({
    num : { type: Number },
    time: { type: Date, default: Date.now()}
})

const Test = mongoose.model("Test", TestSchema);
module.exports = Test;