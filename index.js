/**
 * Function takes a time as an argument and parses it to text according English grammar rules.
 *
 * @param time
 * @constructor
 * @author Ivanov Dmitry
 */
const numbers = require('number-to-text');

function TimeToText(time) {
    let parsedTime = time.split(':');
    let result = '';
    let hour = null;
    let minute = null;
    let hourText = '';
    let minuteText = '';

    if (
        typeof parsedTime[0] != "undefined" &&
        parsedTime[0] >= 0 &&
        parsedTime[0] <=23
    ) {
        hour = parsedTime[0];
    }

    if (
        typeof parsedTime[1] != "undefined" &&
        parsedTime[1] >= 0 &&
        parsedTime[1] <= 59
    ) {
        minute = parsedTime[1];
    }

    if (minute == null || hour == null) {
        return result;//Incorrect date has been received.
    }

    hourText = numbers(hour);
    minuteText = numbers(minute);

    if (minute  > 0 && minute < 30) {

    } else if (minute > 30) {

    } else if (minute == 0) {

        switch (hour) {
            case 0:

                break;
            case 12:

                break;
            case 15:

                break;
            default:
        }

    } else if (minute == 30) {

    }
}

module.exports = TimeToText;