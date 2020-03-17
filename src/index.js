let simpleUnits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let smallTens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let bigTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {
    if(number < 10) {
        return getSmallNumbers(number);
    } else if(number >= 10 && number < 20) {
        return getSmallNumbers(number);
    } else if(number >=20 && number < 100) {
        return getBigTens(number);
    } else if(number >= 100 && number < 1000) {
        return getBigNumbers(number);
    } 
    
    /* Числа от 0 до 20 */
    function getSmallNumbers(number) {
        if(number < 10) {
            return simpleUnits[number];
        } else if(number >= 10 && number < 20) {
            return smallTens[number - 10];
        }
    }

    /* Числа от 0 до 100 */
    function getBigTens(number) {
        if(number%10 == 0) {
            return bigTens[number / 10];
        }
        
        let numArray = number.toString().split('');
        let first = bigTens[Number(numArray[0])].toString();
        let second = simpleUnits[Number(numArray[1])].toString();
        return number = first + " " + second;
    } 

    /* Числа от 100 до 1000 */
    function getBigNumbers(number) {
        if(number%100 == 0) {
            return number = simpleUnits[number/100] + ' ' + 'hundred';
        }

        let numArr = number.toString().split('');
        let firstUnit = simpleUnits[Number(numArr[0])] + ' ' + 'hundred';
        let secondUnits = numArr[1] + numArr[2];
        secondUnits = Number(secondUnits);
        if(secondUnits < 20) {
            secondUnits = getSmallNumbers(secondUnits);
        } else if(secondUnits >=20 && secondUnits < 100) {
            secondUnits = getBigTens(secondUnits);
        }
       
        return firstUnit + ' ' + secondUnits;
    }
 } 