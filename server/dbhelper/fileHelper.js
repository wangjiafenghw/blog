const mongoose  = require('mongoose');
const File      = mongoose.model('File');

const app = module.exports;

app.uploadFile = async (() => {
    console.log('ok')
})