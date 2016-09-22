var expect = require('chai').expect;
var SNPs = require('./index');

describe('23andme-snps', function() {

    describe('all', function() {
        
        it('an array of objects!', function() {
        expect(SNPs.all).to.satisfy(isArrayOfObjects);

            function isArrayOfObjects(array) {
              return array.every(function(item) {
                return typeof item === 'object';
              });
            }
        }); 

    });

    describe('random', function() {
        it('it should return a random item from the SNPs.all', function() {
            var randomItem = SNPs.random();
            expect(SNPs.all).to.include(randomItem);
        });
        it('should return an array of random items if passed a number', function() {
            var randomItems = SNPs.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item) {
                expect(SNPs.all).to.include(item);
            });
        });
    });
});