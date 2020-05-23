"use strict";

describe('Array.validate', function() {
    it("should succeed if the argument passed is an array", function() {
        var array = [];
        var arrayTested = Array.validate(array);

        expect(arrayTested).not.to.throw;
        expect(arrayTested).to.be.undefined;
    });

    it("should throw a TypeError if the argument passed is a string", function() {
        var notAnArray = "some string";

        try {
            Array.validate(notAnArray);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAnArray + " is not an array");
        }
    });

    it("should throw a TypeError if the argument passed is a function", function() {
        var notAnArray = function(){};

        try {
            Array.validate(notAnArray);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAnArray + " is not an array");
        }
    });

    it("should throw a TypeError if the argument passed is a number", function() {
        var notAnArray = 5;

        try {
            Array.validate(notAnArray);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAnArray + " is not an array");
        }
    });

    it("should throw a TypeError if the argument passed is an boolean", function() {
        var notAnArray = false;

        try {
            Array.validate(notAnArray);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAnArray + " is not an array");
        }
    });

    it("should throw a TypeError if the argument passed is undefined", function() {
        var notAnArray;

        try {
            Array.validate(notAnArray);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAnArray + " is not an array");
        }
    });

    it("should throw a TypeError if the argument passed is null", function() {
        var notAnArray = null;

        try {
            Array.validate(notAnArray);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAnArray + " is not an array");
        }
    });

    it("should throw a TypeError if the argument passed is an object", function() {
        var notAnArray = {};

        try {
            Array.validate(notAnArray);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAnArray + " is not an array");
        }
    });
})