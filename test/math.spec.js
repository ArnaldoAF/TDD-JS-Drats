const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect

describe('Math class', function() {
    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);

        math.sum(5, 5, (value) => {
            expect(value).to.equal(10);
            done();
        });
    })
    it('Multiply two numbers', function() {
        const math = new Math();
        const obj = {
            name: "Arnaldo"
        }
        const objClone = {
            name: "Arnaldo"
        }

        expect(obj).to.deep.equal(objClone);

        //expect(obj).to.have.property('name').
        //equal('Arnaldo');



        //expect(math.multiply(5, 5)).to.equal(25);

    });
});