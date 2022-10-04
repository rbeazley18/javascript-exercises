const ftoc = function (tempF) {
    const newTemp = (tempF - 32) / 1.8;
    return parseFloat(newTemp.toFixed(1));
};

const ctof = function (tempC) {
    const newTemp = tempC * 1.8 + 32;
    return parseFloat(newTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};
