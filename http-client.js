'use strict';
const http = require('http');

const url = process.argv[2];

http
  .get(url, (response) => {
    const { statusCode } = response;

    // error
    if (statusCode !== 200) return;

    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
  })
  .on('error', console.error);
