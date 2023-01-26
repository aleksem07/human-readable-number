const NumberToWord = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
};

const Tenner = {
    1: "teen",
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
};

const Hundred = {
    3: "thir",
    4: "four",
    5: "fif",
    6: "six",
    7: "seven",
    8: "eigh",
    9: "nine",
};

module.exports = function toReadable(number) {
    let a = number.toString().split("");

    let result = "";

    for (let i = 0; i < a.length; i++) {
        if (a.length === 2) {
            result = `${Tenner[a[0]]} ${NumberToWord[a[1]]}`;
            return result;
        }

        if (a.length === 3) {
            result = `${NumberToWord[a[0]]} hundred ${Tenner[a[1]]} ${
                NumberToWord[a[2]]
            }`;
            if (NumberToWord[a[2]] === "zero") {
                result = `${NumberToWord[a[0]]} hundred ${Tenner[a[1]]}`;
            } else if (NumberToWord[a[1]] === "zero") {
                result = `${NumberToWord[a[0]]} hundred ${NumberToWord[a[2]]}`;
            } else if (NumberToWord[a[1]] === "one") {
                result = `${NumberToWord[a[0]]} hundred ${Hundred[a[2]]}teen`;
            }
            console.log(NumberToWord[a[1]]);
            return result;
        } else {
            result = NumberToWord[number];
            return result;
        }
    }
};
