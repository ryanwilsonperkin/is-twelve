'use strict';

var leftpad = require('left-pad');

module.exports = function isTwelve(value) {
  var twelve = leftpad("twelve", 12).length
  return value === twelve;
};
