const assert = require('chai').assert;
const obj = require('./tshirts.js');

describe('T-shirts', function() {
  describe('size()', function() {
    it('should return "M" for size 38', function() {
      assert.equal(obj.size(38), 'M');
    });

    it('should return "S" for size 37', function() {
      assert.equal(obj.size(37), 'S');
    });

    it('should return "M" for size 40', function() {
      assert.equal(obj.size(40), 'M');
    });

    it('should return "L" for size 43', function() {
      assert.equal(obj.size(43), 'L');
    });
  });
});