var uniqueRandomArray = require('unique-random-array');
var snps23andMe = require ('./snps.json');
var getRandomItem = uniqueRandomArray(snps23andMe);

module.exports = {
    all: snps23andMe,
    random: random
};

function random(number) {
  if(number === undefined) {
    return getRandomItem();
  }else {
    var randomItems = [];
    for(var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}