var chai = require('chai');
var expect = chai.expect;

describe('Add Test', function() {
    var num1 = 2;
    var num2 = 3;
    it('should have 5 when adding num1 and num2', function() {
        var result = num1 + num2;
        expect(result).to.equal(5);
    });

    it('should have 1 when subtracting num2 and num1', function() {
        var result = num2 - num1;
        expect(result).to.equal(1);
    });

    it('should have 6 when multiplying num2 and num2', function() {
        var result = num2 * num1;
        expect(result).to.equal(6);
    });
});