var isTwelve = require('./');

function assert(condition) {
  if (!condition) throw "Failed";
}

assert(isTwelve(12))          // 12 is 12
assert(!isTwelve(4))          // 4 is not 12
assert(!isTwelve("12"))       // "12" is not 12
assert(!isTwelve("Twelve"))   // "Twelve" is not 12
