// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.length==0 || num<3 || num>1000000 || (num.length>1 && num[0]=="0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 3 and 1000000.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the number ${num}.<p>`;
        txt += `There are ${digitFactorialChains(num)} chains with a starting number below ${num}, that contain exactly sixty non-repeating terms.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the number of chains with a starting number
    below n, that contain exactly sixty non-repeating terms
    digitFactorialChains(2000)    returns 6
    digitFactorialChains(100000)  returns 42
    digitFactorialChains(500000)  returns 282
    digitFactorialChains(1000000) returns 402
*/
function digitFactorialChains(n) {
    function sumDigitsFactorials(number) {
        let sum = 0;
        while (number > 0) {
            sum += factorials[number % 10];
            number = Math.floor(number/10);
        }
        return sum;
    }

    const factorials = [1];
    for (let i=1;i<10;i++) {
        factorials.push(factorials[factorials.length-1]*i);
    }

    const sequences = {
        169: 3,
        871: 2,
        872: 2,
        1454: 3,
        45362: 2,
        45461: 2,
        3693601: 3
    };

    let result = 0;
    for (let i=2;i<n;i++) {
        let curNum = i;
        let chainLength = 0;
        let curSequence = [];
        while (curSequence.indexOf(curNum) === -1) {
            curSequence.push(curNum);
            curNum = sumDigitsFactorials(curNum);
            chainLength++;
            if (sequences.hasOwnProperty(curNum) > 0) {
                chainLength += sequences[curNum];
                break;
            }
        }

        if (chainLength === 60) result++;
        for (let j=1;j<curSequence.length;j++) {
            sequences[curSequence[j]] = chainLength - j;
        }
    }

    return result;
}