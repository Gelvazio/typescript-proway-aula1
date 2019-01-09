require('dotenv').config();


console.log('NODE_ENV=',process.env.NODE_ENV);
console.log('VERSION=',process.env.VERSION);
console.log('AUTHOR=',process.env.AUTHOR);
console.log('AUTHOR_EMAIL=',process.env.AUTHOR_EMAIL);

console.log(__dirname);
console.log(__filename);
require('./pasta2/modulo04')();