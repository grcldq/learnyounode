'use strict';

const http = require('http');
const bl = require('bl');
const urls = process.argv.slice(2);

let content = Array(3);
let count = 0;

urls.forEach((url, index) => {
  http.get(url, (response) => {
    response.pipe(
      bl((err, data) => {
        if (err) return err;

        content[index] = data.toString();

        count++;

        if (count === 3) {
          content.forEach((lines) => console.log(lines));
        }
      })
    );
  });
});
