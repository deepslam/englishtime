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

describe("Check the whole hour 14:00", () => {
    it('Should be right 14:00 value', function() {
        TimeToText('14:00').should.equal("It's 2 o'clock");
    });
    it('Should be right 14:01 value', function() {
        TimeToText('14:01').should.equal("It's 1 past 2");
    });
    it('Should be right 14:02 value', function() {
        TimeToText('14:02').should.equal("It's 2 past 2");
    });
    it('Should be right 14:03 value', function() {
        TimeToText('14:03').should.equal("It's 3 past 2");
    });
    it('Should be right 14:04 value', function() {
        TimeToText('14:04').should.equal("It's 4 past 2");
    });
    it('Should be right 14:05 value', function() {
        TimeToText('14:05').should.equal("It's 5 past 2");
    });
    it('Should be right 14:06 value', function() {
        TimeToText('14:06').should.equal("It's 6 past 2");
    });
    it('Should be right 14:07 value', function() {
        TimeToText('14:07').should.equal("It's 7 past 2");
    });
    it('Should be right 14:08 value', function() {
        TimeToText('14:08').should.equal("It's 8 past 2");
    });
    it('Should be right 14:09 value', function() {
        TimeToText('14:09').should.equal("It's 9 past 2");
    });
    it('Should be right 14:10 value', function() {
        TimeToText('14:10').should.equal("It's 10 past 2");
    });

    it('Should be right 14:11 value', function() {
        TimeToText('14:11').should.equal("It's 11 past 2");
    });
    it('Should be right 14:12 value', function() {
        TimeToText('14:12').should.equal("It's 12 past 2");
    });
    it('Should be right 14:13 value', function() {
        TimeToText('14:13').should.equal("It's 13 past 2");
    });
    it('Should be right 14:14 value', function() {
        TimeToText('14:14').should.equal("It's 14 past 2");
    });
    it('Should be right 14:15 value', function() {
        TimeToText('14:15').should.equal("It's quarter past 2");
    });
    it('Should be right 14:16 value', function() {
        TimeToText('14:16').should.equal("It's 16 past 2");
    });
    it('Should be right 14:17 value', function() {
        TimeToText('14:17').should.equal("It's 17 past 2");
    });
    it('Should be right 14:18 value', function() {
        TimeToText('14:18').should.equal("It's 18 past 2");
    });
    it('Should be right 14:19 value', function() {
        TimeToText('14:19').should.equal("It's 19 past 2");
    });
    it('Should be right 14:20 value', function() {
        TimeToText('14:20').should.equal("It's 20 past 2");
    });

    it('Should be right 14:21 value', function() {
        TimeToText('14:21').should.equal("It's 21 past 2");
    });
    it('Should be right 14:22 value', function() {
        TimeToText('14:22').should.equal("It's 22 past 2");
    });
    it('Should be right 14:23 value', function() {
        TimeToText('14:23').should.equal("It's 23 past 2");
    });
    it('Should be right 14:24 value', function() {
        TimeToText('14:24').should.equal("It's 24 past 2");
    });
    it('Should be right 14:25 value', function() {
        TimeToText('14:25').should.equal("It's 25 past 2");
    });
    it('Should be right 14:26 value', function() {
        TimeToText('14:26').should.equal("It's 26 past 2");
    });
    it('Should be right 14:27 value', function() {
        TimeToText('14:27').should.equal("It's 27 past 2");
    });
    it('Should be right 14:28 value', function() {
        TimeToText('14:28').should.equal("It's 28 past 2");
    });
    it('Should be right 14:29 value', function() {
        TimeToText('14:29').should.equal("It's 29 past 2");
    });
    it('Should be right 14:30 value', function() {
        TimeToText('14:30').should.equal("It's half past 2");
    });

    it('Should be right 14:31 value', function() {
        TimeToText('14:31').should.equal("It's 29 to 3");
    });
    it('Should be right 14:32 value', function() {
        TimeToText('14:32').should.equal("It's 28 to 3");
    });
    it('Should be right 14:33 value', function() {
        TimeToText('14:33').should.equal("It's 27 to 3");
    });
    it('Should be right 14:34 value', function() {
        TimeToText('14:34').should.equal("It's 26 to 3");
    });
    it('Should be right 14:35 value', function() {
        TimeToText('14:35').should.equal("It's 25 to 3");
    });
    it('Should be right 14:36 value', function() {
        TimeToText('14:36').should.equal("It's 24 to 3");
    });
    it('Should be right 14:37 value', function() {
        TimeToText('14:37').should.equal("It's 23 to 3");
    });
    it('Should be right 14:38 value', function() {
        TimeToText('14:38').should.equal("It's 22 to 3");
    });
    it('Should be right 14:39 value', function() {
        TimeToText('14:39').should.equal("It's 21 to 3");
    });
    it('Should be right 14:40 value', function() {
        TimeToText('14:40').should.equal("It's 20 to 3");
    });

    it('Should be right 14:41 value', function() {
        TimeToText('14:41').should.equal("It's 19 to 3");
    });
    it('Should be right 14:42 value', function() {
        TimeToText('14:42').should.equal("It's 18 to 3");
    });
    it('Should be right 14:43 value', function() {
        TimeToText('14:43').should.equal("It's 17 to 3");
    });
    it('Should be right 14:44 value', function() {
        TimeToText('14:44').should.equal("It's 16 to 3");
    });
    it('Should be right 14:45 value', function() {
        TimeToText('14:45').should.equal("It's quarter to 3");
    });
    it('Should be right 14:46 value', function() {
        TimeToText('14:46').should.equal("It's 14 to 3");
    });
    it('Should be right 14:47 value', function() {
        TimeToText('14:47').should.equal("It's 13 to 3");
    });
    it('Should be right 14:48 value', function() {
        TimeToText('14:48').should.equal("It's 12 to 3");
    });
    it('Should be right 14:49 value', function() {
        TimeToText('14:49').should.equal("It's 11 to 3");
    });
    it('Should be right 14:50 value', function() {
        TimeToText('14:50').should.equal("It's 10 to 3");
    });

    it('Should be right 14:51 value', function() {
        TimeToText('14:51').should.equal("It's 9 to 3");
    });
    it('Should be right 14:52 value', function() {
        TimeToText('14:52').should.equal("It's 8 to 3");
    });
    it('Should be right 14:53 value', function() {
        TimeToText('14:53').should.equal("It's 7 to 3");
    });
    it('Should be right 14:54 value', function() {
        TimeToText('14:54').should.equal("It's 6 to 3");
    });
    it('Should be right 14:55 value', function() {
        TimeToText('14:55').should.equal("It's 5 to 3");
    });
    it('Should be right 14:56 value', function() {
        TimeToText('14:56').should.equal("It's 4 to 3");
    });
    it('Should be right 14:57 value', function() {
        TimeToText('14:57').should.equal("It's 3 to 3");
    });
    it('Should be right 14:58 value', function() {
        TimeToText('14:58').should.equal("It's 2 to 3");
    });
    it('Should be right 14:59 value', function() {
        TimeToText('14:59').should.equal("It's 1 to 3");
    });

});

describe("Check the whole hour 15:00", () => {
    it('Should be right 15:00 value', function() {
        TimeToText('15:00').should.equal("It's 3 o'clock");
    });
    it('Should be right 15:01 value', function() {
        TimeToText('15:01').should.equal("It's 1 past 3");
    });
    it('Should be right 15:02 value', function() {
        TimeToText('15:02').should.equal("It's 2 past 3");
    });
    it('Should be right 15:03 value', function() {
        TimeToText('15:03').should.equal("It's 3 past 3");
    });
    it('Should be right 15:04 value', function() {
        TimeToText('15:04').should.equal("It's 4 past 3");
    });
    it('Should be right 15:05 value', function() {
        TimeToText('15:05').should.equal("It's 5 past 3");
    });
    it('Should be right 15:06 value', function() {
        TimeToText('15:06').should.equal("It's 6 past 3");
    });
    it('Should be right 15:07 value', function() {
        TimeToText('15:07').should.equal("It's 7 past 3");
    });
    it('Should be right 15:08 value', function() {
        TimeToText('15:08').should.equal("It's 8 past 3");
    });
    it('Should be right 15:09 value', function() {
        TimeToText('15:09').should.equal("It's 9 past 3");
    });
    it('Should be right 15:10 value', function() {
        TimeToText('15:10').should.equal("It's 10 past 3");
    });

    it('Should be right 15:11 value', function() {
        TimeToText('15:11').should.equal("It's 11 past 3");
    });
    it('Should be right 15:12 value', function() {
        TimeToText('15:12').should.equal("It's 12 past 3");
    });
    it('Should be right 15:13 value', function() {
        TimeToText('15:13').should.equal("It's 13 past 3");
    });
    it('Should be right 15:14 value', function() {
        TimeToText('15:14').should.equal("It's 14 past 3");
    });
    it('Should be right 15:15 value', function() {
        TimeToText('15:15').should.equal("It's quarter past 3");
    });
    it('Should be right 15:16 value', function() {
        TimeToText('15:16').should.equal("It's 16 past 3");
    });
    it('Should be right 15:17 value', function() {
        TimeToText('15:17').should.equal("It's 17 past 3");
    });
    it('Should be right 15:18 value', function() {
        TimeToText('15:18').should.equal("It's 18 past 3");
    });
    it('Should be right 15:19 value', function() {
        TimeToText('15:19').should.equal("It's 19 past 3");
    });
    it('Should be right 15:20 value', function() {
        TimeToText('15:20').should.equal("It's 20 past 3");
    });

    it('Should be right 15:21 value', function() {
        TimeToText('15:21').should.equal("It's 21 past 3");
    });
    it('Should be right 15:22 value', function() {
        TimeToText('15:22').should.equal("It's 22 past 3");
    });
    it('Should be right 15:23 value', function() {
        TimeToText('15:23').should.equal("It's 23 past 3");
    });
    it('Should be right 15:24 value', function() {
        TimeToText('15:24').should.equal("It's 24 past 3");
    });
    it('Should be right 15:25 value', function() {
        TimeToText('15:25').should.equal("It's 25 past 3");
    });
    it('Should be right 15:26 value', function() {
        TimeToText('15:26').should.equal("It's 26 past 3");
    });
    it('Should be right 15:27 value', function() {
        TimeToText('15:27').should.equal("It's 27 past 3");
    });
    it('Should be right 15:28 value', function() {
        TimeToText('15:28').should.equal("It's 28 past 3");
    });
    it('Should be right 15:29 value', function() {
        TimeToText('15:29').should.equal("It's 29 past 3");
    });
    it('Should be right 15:30 value', function() {
        TimeToText('15:30').should.equal("It's half past 3");
    });

    it('Should be right 15:31 value', function() {
        TimeToText('15:31').should.equal("It's 29 to 4");
    });
    it('Should be right 15:32 value', function() {
        TimeToText('15:32').should.equal("It's 28 to 4");
    });
    it('Should be right 15:33 value', function() {
        TimeToText('15:33').should.equal("It's 27 to 4");
    });
    it('Should be right 15:34 value', function() {
        TimeToText('15:34').should.equal("It's 26 to 4");
    });
    it('Should be right 15:35 value', function() {
        TimeToText('15:35').should.equal("It's 25 to 4");
    });
    it('Should be right 15:36 value', function() {
        TimeToText('15:36').should.equal("It's 24 to 4");
    });
    it('Should be right 15:37 value', function() {
        TimeToText('15:37').should.equal("It's 23 to 4");
    });
    it('Should be right 15:38 value', function() {
        TimeToText('15:38').should.equal("It's 22 to 4");
    });
    it('Should be right 15:39 value', function() {
        TimeToText('15:39').should.equal("It's 21 to 4");
    });
    it('Should be right 15:40 value', function() {
        TimeToText('15:40').should.equal("It's 20 to 4");
    });

    it('Should be right 15:41 value', function() {
        TimeToText('15:41').should.equal("It's 19 to 4");
    });
    it('Should be right 15:42 value', function() {
        TimeToText('15:42').should.equal("It's 18 to 4");
    });
    it('Should be right 15:43 value', function() {
        TimeToText('15:43').should.equal("It's 17 to 4");
    });
    it('Should be right 15:44 value', function() {
        TimeToText('15:44').should.equal("It's 16 to 4");
    });
    it('Should be right 15:45 value', function() {
        TimeToText('15:45').should.equal("It's quarter to 4");
    });
    it('Should be right 15:46 value', function() {
        TimeToText('15:46').should.equal("It's 14 to 4");
    });
    it('Should be right 15:47 value', function() {
        TimeToText('15:47').should.equal("It's 13 to 4");
    });
    it('Should be right 15:48 value', function() {
        TimeToText('15:48').should.equal("It's 12 to 4");
    });
    it('Should be right 15:49 value', function() {
        TimeToText('15:49').should.equal("It's 11 to 4");
    });
    it('Should be right 15:50 value', function() {
        TimeToText('15:50').should.equal("It's 10 to 4");
    });

    it('Should be right 15:51 value', function() {
        TimeToText('15:51').should.equal("It's 9 to 4");
    });
    it('Should be right 15:52 value', function() {
        TimeToText('15:52').should.equal("It's 8 to 4");
    });
    it('Should be right 15:53 value', function() {
        TimeToText('15:53').should.equal("It's 7 to 4");
    });
    it('Should be right 15:54 value', function() {
        TimeToText('15:54').should.equal("It's 6 to 4");
    });
    it('Should be right 15:55 value', function() {
        TimeToText('15:55').should.equal("It's 5 to 4");
    });
    it('Should be right 15:56 value', function() {
        TimeToText('15:56').should.equal("It's 4 to 4");
    });
    it('Should be right 15:57 value', function() {
        TimeToText('15:57').should.equal("It's 3 to 4");
    });
    it('Should be right 15:58 value', function() {
        TimeToText('15:58').should.equal("It's 2 to 4");
    });
    it('Should be right 15:59 value', function() {
        TimeToText('15:59').should.equal("It's 1 to 4");
    });

});