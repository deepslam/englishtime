const TimeToText = require('../index');
var should = require('chai').should();

describe('Check wrong times', function() {
    TimeToText('24:05').should.equal("");
    TimeToText('10:65').should.equal("");
    TimeToText('sfgsf').should.equal("");
    TimeToText('0').should.equal("");
});

describe('Check usual times', function() {
    TimeToText('10:05').should.equal("It's 5 past ten");
});