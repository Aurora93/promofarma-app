"use strict";

describe('Number.validate', function() {
    it("should succeed if the argument passed is a number", function() {
        var number = Math.random();
        var numberTested = Number.validate(number);

        expect(numberTested).not.to.throw;
        expect(numberTested).to.be.undefined;
    });

    it("should throw a TypeError if the argument passed is a string", function() {
        var notANumber = "some string";

        try {
            Number.validate(notANumber);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notANumber + " is not a number");
        }
    });

    it("should throw a TypeError if the argument passed is a function", function() {
        var notANumber = function(){};

        try {
            Number.validate(notANumber);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notANumber + " is not a number");
        }
    });

    it("should throw a TypeError if the argument passed is an array", function() {
        var notANumber = [];

        try {
            Number.validate(notANumber);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notANumber + " is not a number");
        }
    });

    it("should throw a TypeError if the argument passed is an boolean", function() {
        var notANumber = false;

        try {
            Number.validate(notANumber);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notANumber + " is not a number");
        }
    });

    it("should throw a TypeError if the argument passed is undefined", function() {
        var notANumber;

        try {
            Number.validate(notANumber);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notANumber + " is not a number");
        }
    });

    it("should throw a TypeError if the argument passed is null", function() {
        var notANumber = null;

        try {
            Number.validate(notANumber);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notANumber + " is not a number");
        }
    });

    it("should throw a TypeError if the argument passed is an object", function() {
        var notANumber = {};

        try {
            Number.validate(notANumber);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notANumber + " is not a number");
        }
    });
})