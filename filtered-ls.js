const fs = require('fs');
const path = require('path');

const [,, pathName, fileType] = process.argv;

fs.readdir(pathName, 'utf8', ((err, files) => {
	files.forEach(file => {
	if (path.extname(file) === `.${fileType}`)
	console.log(file);
});

}));
