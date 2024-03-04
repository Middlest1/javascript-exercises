


const leapYears = function (checkYear) {
    let isLeapYear = true;
    let notLeapYear = false;

    if ((checkYear % 4 === 0 && checkYear % 100 !== 0) || (checkYear % 400 === 0)) {
        return isLeapYear;
    } else {
        return notLeapYear;
    }
};

leapYears(2000);

// Do not edit below this line
module.exports = leapYears;
