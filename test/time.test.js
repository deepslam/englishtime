const TimeToText = require('../index');
const chai = require('chai');
const should = chai.should();  // Using Should style

it('Check wrong times', function() {
    TimeToText('24:05').should.equal("");
    TimeToText('10:65').should.equal("");
    TimeToText('sfgsf').should.equal("");
    TimeToText('0').should.equal("");
});

it('Check usual times', function() {
    TimeToText('10:00').should.equal("It's 10 o'clock");
    TimeToText('10:05').should.equal("It's 5 past 10");
    TimeToText('22:05').should.equal("It's 5 past 10 in the evening", { print_daytime: true });
    TimeToText('10:05').should.equal("It's 5 past 10 in the morning", { print_daytime: true });
});