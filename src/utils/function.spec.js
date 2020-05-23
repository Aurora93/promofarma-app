"use strict";

describe('Function.validate', function() {
    it("should succeed if the argument passed is a function", function() {
        var callback = function () { };
        var functionTested = Function.validate(callback);

        expect(functionTested).not.to.throw;
        expect(functionTested).to.be.undefined;
    });

    it("should throw a TypeError if the argument passed is a string", function() {
        var notACallback = "some string";

        try {
            Function.validate(notACallback);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notACallback + " is not a function");
        }
    });

    it("should throw a TypeError if the argument passed is a number", function() {
        var notACallback = 10;

        try {
            Function.validate(notACallback);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notACallback + " is not a function");
        }
    });

    it("should throw a TypeError if the argument passed is an array", function() {
        var notACallback = [];

        try {
            Function.validate(notACallback);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notACallback + " is not a function");
        }
    });

    it("should throw a TypeError if the argument passed is an boolean", function() {
        var notACallback = false;

        try {
            Function.validate(notACallback);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notACallback + " is not a function");
        }
    });

    it("should throw a TypeError if the argument passed is undefined", function() {
        var notACallback;

        try {
            Function.validate(notACallback);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notACallback + " is not a function");
        }
    });

    it("should throw a TypeError if the argument passed is null", function() {
        var notACallback = null;

        try {
            Function.validate(notACallback);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notACallback + " is not a function");
        }
    });

    it("should throw a TypeError if the argument passed is an object", function() {
        var notACallback = {};

        try {
            Function.validate(notACallback);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notACallback + " is not a function");
        }
    });
})