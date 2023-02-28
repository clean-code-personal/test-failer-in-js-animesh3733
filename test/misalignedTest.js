const assert = require('chai').assert;
const obj = require('../misaligned/misaligned.js');

describe('Misaligned', function() {
  describe('index_to_number()', function() {
    it('should return "00" for row 0 and column 0', function() {
      assert.equal(obj.index_to_number(0, 0), '00');
    });
  });

  describe('print_color_map()', function() {
    it('should return 25', function() {
      assert.equal(obj.print_color_map(), 25);
    });
  });
});
