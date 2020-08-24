# is-twelve

## Install
```bash
npm install is-twelve
```

## Usage

```javascript
isTwelve = require('is-twelve');

isTwelve(12);
// => true

isTwelve(4);
// => false

isTwelve("12");
// => false

isTwelve("Twelve");
// => false
```


## Related Projects

This module determines if a variable is 12. If you need to determine if a variable is _not_ 12, check out https://github.com/mreinstein/is-not-twelve
