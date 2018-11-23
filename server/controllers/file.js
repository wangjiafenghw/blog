'use strict'

const mongoose = require("mongoose");
const File = mongoose.model("File");
const uuid = require("uuid");
const xss = require("xss");

exports.uploadFile = async (ctx, next) => {
    
}