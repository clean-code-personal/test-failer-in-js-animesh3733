const expect = require('chai');

const obj = require('./misaligned.js');

result = obj.print_color_map();

expect(obj.index_to_number(0,0)).equals('01');
expect(result).equals(25);
console.log('All is well (maybe!)');
