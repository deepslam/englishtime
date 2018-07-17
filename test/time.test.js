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
    TimeToText('10:41').should.equal("It's 19 to 11");

    TimeToText('6:00').should.equal("It's 6 o'clock");
    TimeToText('6:05').should.equal("It's 5 past 6");
    TimeToText('6:15').should.equal("It's quarter past 6");
    TimeToText('6:30').should.equal("It's half past 6");
    TimeToText('6:35').should.equal("It's 25 to 7");
    TimeToText('6:45', { numbers_to_text: true }).should.equal("It's quarter to seven");
    TimeToText('6:55').should.equal("It's 5 to 7");
    TimeToText('7:00').should.equal("It's 7 o'clock");

    TimeToText('22:05', { print_daytime: true }).should.equal("It's 5 past 10 in the evening");
    TimeToText('10:05', { print_daytime: true }).should.equal("It's 5 past 10 in the morning");

});