var uniqueRandomArray = require('unique-random-array');
var snps23andMe = require ('./snps.json');


module.exports = {
    all: snps23andMe,
    random: uniqueRandomArray(snps23andMe)
};