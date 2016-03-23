var isTwelve = require('./');

function assert(condition) {
  if (!condition) throw "Failed";
}

assert(isTwelve(12))          // 12 is 12
