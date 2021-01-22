'use strict'; //https://www.w3schools.com/js/js_strict.asp

const path = require('path');
const fs = require('fs');

module.exports = (dirname, ext, callback) => {
  let files = [];

  fs.readdir(dirname, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }

    data.forEach((file) => {
      if (path.extname(file) === `.${ext}`) files.push(file);
    });

		return callback(null, files);
  });
};
