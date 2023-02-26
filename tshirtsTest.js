const {expect} = require('chai');
const obj = require('./tshirts.js');

expect(obj.size(38)).equals('L');
expect(obj.size(37)).equals('S');
expect(obj.size(40)).equals('M');
expect(obj.size(43)).equals('L');
console.log('All is well (maybe!)');
