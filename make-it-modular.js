'use strict'; //https://www.w3schools.com/js/js_strict.asp

const mymodule = require('./mymodule');

const [, , dirname, ext] = process.argv;

mymodule(dirname, ext, (err, data) => {
  data.forEach((file) => console.log(file));
});

