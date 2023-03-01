const assert = require('chai').assert;
const { alertFailureCount, alertInCelcius } = require('../alerter/alerter.js');
const { describe, it } = require('mocha'); 

describe('alertInCelcius', function() {
  it('should increase alertFailureCount when networkAlertSub returns a non-ok response', function() {
    alertInCelcius(400.5);
    alertInCelcius(303.6);
    alertInCelcius(32);

    assert.equal(alertFailureCount,1); 
    });
});
