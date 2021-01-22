'use strict';
const http = require('http');
const bl = require('bl');

http.get(process.argv[2], (response) => {
  // pipe is a function called on a readable stream that is passed a parameter of a writable stream
  response.pipe(
    bl((err, data) => {
      data = data.toString();

      console.log(data.length);
      console.log(data);
    })
  );
});
