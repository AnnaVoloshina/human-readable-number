module.exports = function toReadable (number) {

    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
    if (number <= 10) {  //  0...10
        return units[number];
    } else if (number > 10 && number < 20) {  //  11...19
        return teens[number - 11];
    } else if (number % 10 === 0 && number >= 20 && number <= 90) {  //  20, 30, 40, ... , 90
        return tens[number / 10 - 2];
    } else if (number % 10 !== 0 && number > 20 && number < 100) {  //  21...29, 31...39, ..., 91...99
        return `${tens[Math.trunc(number / 10) - 2]} ${units[number % 10]}`;
    } else if (number % 100 === 0 && number >= 100 && number <= 900) {  //  100, 200, 300, ..., 900
        return `${units[Math.trunc(number / 100)]} hundred`;
    } else if (number % 100 !== 0 && number > 100 && number <= 999 && number % 100 <= 10) {  //  101...110, 201...210, ..., 901...910
        return `${units[Math.trunc(number / 100)]} hundred ${units[number % 100]}`;
    } else if (number % 100 !== 0 && number > 100 && number <= 999 && Math.trunc((number % 100) / 10) === 1) {  //  111...119, 211...219, ..., 911...919
        return `${units[Math.trunc(number / 100)]} hundred ${teens[(number % 100) - 11]}`;
    } else if (number % 10 === 0 && number > 100 && number <= 999 && (number % 100) / 10 >= 2) {  //  120, 130, ... , 190, 220, 230, ..., 290, ..., 920, 930, ..., 990
        return `${units[Math.trunc(number / 100)]} hundred ${tens[Math.trunc(number / 10) % 10 - 2]}`;
    } else if (number % 100 !== 0 && number > 100 && number <= 999 && (number % 100) > 20) {  //  121...199, 221...299, ..., 921...999
        return `${units[Math.trunc(number / 100)]} hundred ${tens[Math.trunc(number / 10) % 10 - 2]} ${units[number % 10]}`;
    };

}

