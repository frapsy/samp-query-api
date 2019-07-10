const SA = require('./samp-query-api');


SA.info('185.169.134.115', 7777)
  .then(result => console.log(result))
  .catch(error => console.log(error.message));
