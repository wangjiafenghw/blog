var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pageQuery = async (page, pageSize, Model, populate, queryParams, sortParams) => {
    var start = (page - 1) * pageSize;
    var $page = {
        pageNumber: page
    };
    let count, array;
    await Model.count(queryParams).exec((err, _count) => {
        if(err) throw err
        count = _count;
    })
    await Model.find(queryParams).skip(start).limit(pageSize).populate(populate).sort(sortParams).exec((err, doc) => {
        if(err) throw err
        array = doc;
    })
    $page.pageCount = (count - 1) / pageSize + 1;
    $page.count = count;
    $page.results = array;
    return $page;
};

module.exports = {
    pageQuery: pageQuery
};

