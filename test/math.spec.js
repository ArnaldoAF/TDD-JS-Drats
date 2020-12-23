const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

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

        expect(math.multiply(5, 5)).to.equal(25);
    });

    it('Test Equals Objects', function() {
        const obj = {
            name: "Arnaldo"
        }
        const objClone = {
            name: "Arnaldo"
        }

        expect(obj).to.deep.equal(objClone);

        //expect(obj).to.have.property('name').
        //equal('Arnaldo');
    })

    it('Calls req qith sum and index values', function() {
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();

        math.printSum(req, res, 5, 5);
        //expect(res.load.calledOnce).to.be.true;
        expect(res.load.args[0][0]).to.equal('index');
        //expect(res.load.args[0][1]).to.equal(10);
    })
});