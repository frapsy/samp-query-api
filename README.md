# Samp Query API

Query mechanism for SA:MP server based on https://wiki.sa-mp.com/wiki/Query

## Usage
```
const SA = require('./samp-query-api');

// get info
SA.info(host, 7777)
  .then(result => console.log(result))
  .catch(error => console.log(error.message));

// get rules
SA.rules(host, 7777)
  .then(result => console.log(result))
  .catch(error => console.log(error.message));
```
