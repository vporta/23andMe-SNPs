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

        it("should contain chromosome 'chromosome'", function() {
            expect(SNPs.all).to.have.any.keys('chromosome');
        });
    });

    describe('random', function() {
        it('it should return a random item from the SNPs.all', function() {
            var randomItem = SNPs.random();
            expect(SNPs.all).to.include(randomItem);
        })
    })
});