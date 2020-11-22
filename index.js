function getType(numbers) {
    const types = [
        "Airlines",
        "Airlines and financial",
        "American Express",
        "Visa",
        "MasterCard",
        "Discover",
        "Petroleum",
        "Health care and communications",
        "Government",
    ];
    return types[numbers[0] - 1];
}

function validateCard(sNumber) {
    let digits = [];
    let sum = 0;

    for (const i of sNumber) {
        digits.push(parseInt(i));
    }

    for (const [i, n] of digits.entries()) {
        if (i % 2 === 1) sum += n;
        else {
            if (n * 2 > 9) {
                sum += n * 2 - 9;
            } else sum += n * 2;
        }
    }

    const isValid = sum % 10 === 0;
    const type = getType(digits);

    if (!isValid) {
        return { isValid: false };
    }
    return { isValid: isValid, type: type };
}

function validateImei(sNumber) {
    let digits = [];
    let sum = 0;

    for (const i of sNumber) {
        digits.push(parseInt(i));
    }

    for (const [i, n] of digits.entries()) {
        if (i % 2 === 0) sum += n;
        else {
            if (n * 2 > 9) {
                sum += n * 2 - 9;
            } else sum += n * 2;
        }
    }

    return { isValid: sum % 10 === 0 };
}

module.exports = {
    validateCard: validateCard,
    validateImei: validateImei,
};
