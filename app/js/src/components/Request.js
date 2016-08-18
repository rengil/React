var m = require('mithril');

var Request = {};

Request.getMyData = function () {
  return m.request({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts'
  });
};

module.exports = Request;
