/**
 * Function takes a time as an argument and parses it to text according English grammar rules.
 *
 * @param time
 * @constructor
 * @author Ivanov Dmitry
 */
const NumberToText = require('number-to-text/converters/en-us');
const capitalize = require('lodash.capitalize');
const plural = require('plural');
const defaultConfig = {
  print_daytime : false,
  numbers_to_text: false
};

const TimeToText = function(time, cfg = {}) {
    let parsedTime = time.split(':');
    let result = '';
    let hour = null;
    let originalHour = null;
    let minute = null;
    let originalMinute = null;
    let evening = false;
    let stopAdditions = false;
    let config = Object.assign(Object.assign({},defaultConfig), cfg);

    if (
        typeof parsedTime[0] != "undefined" &&
        parsedTime[0] >= 0 &&
        parsedTime[0] <=23
    ) {
        originalHour = hour = parseInt(parsedTime[0]);
    }

    if (
        typeof parsedTime[1] != "undefined" &&
        parsedTime[1] >= 0 &&
        parsedTime[1] <= 59
    ) {
        originalMinute = minute = parseInt(parsedTime[1]);
    }

    if (minute == null || hour == null) {
        return result;//Incorrect date has been received.
    }

    if (hour > 12) {
        evening = true;
        hour = hour - 12;
    }

    if (minute >30) {
        hour = hour + 1;
        minute = 60 - minute;
    }

    let hourText = hour;
    let minuteText = minute;

    if (config.numbers_to_text) {
        hourText = NumberToText.convertToText(hour);
        minuteText = NumberToText.convertToText(minute);
    }


    if (originalMinute %5 == 0 && originalMinute != 0) {
        switch (originalMinute) {
            case 15:
            case 45:
                    result = 'quarter';
                break;
            case 30:
                    result = 'half';
                break;
            default:
                    result = minuteText;
                break
        }
    } else if (originalMinute  > 0 && originalMinute <= 59) {
        result = minuteText;
    } else if (minute == 0) {
        switch (hour) {
            case 0:
                    stopAdditions = true;
                    result = 'midnight';
                break;
            case 12:
                    stopAdditions = true;
                    result = 'noon';
                break;
            default:
                    result = hourText + " o'clock";
                break;
        }

    }

    if (!stopAdditions) {
        if (originalMinute != 0) {
            if (originalMinute <= 30) {
                result = result + ' past ' + hourText;
            } else {
                result = result + ' to ' + hourText;
            }
        }

        if (config.print_daytime) {
            if (evening) {
                result = result + ' in the evening';
            } else {
                result = result + ' in the morning';
            }
        }
    }

    result = "It's " + result;

    return capitalize(result.toLowerCase());
}

module.exports = TimeToText;