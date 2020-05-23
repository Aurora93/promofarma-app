"use strict";

require("./function");
var chai = require("chai");
var expect = chai.expect;

describe('Function', () => {
    it("should not throw an error if the argument passed is a function", () => {
        var callback = function () { };
        var functionTested = Function.validate(callback);

        expect(functionTested).not.to.throw;
        expect(functionTested).to.be.undefined;
    });

    it("should throw a TypeError if the argument passed is a string", () => {
        var notACallback = "some string";

        try {
            Function.validate(notACallback);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notACallback + " is not a function");
        }
    });

    it("should throw a TypeError if the argument passed is a number", () => {
        var notACallback = 10;

        try {
            Function.validate(notACallback);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notACallback + " is not a function");
        }
    });
   it("should throw a TypeError if the argument passed is an array", () => {
        var notACallback = [];

        try {
            Function.validate(notACallback);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notACallback + " is not a function");
        }
    });

    it("should throw a TypeError if the argument passed is an boolean", () => {
        var notACallback = false;

        try {
            Function.validate(notACallback);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notACallback + " is not a function");
        }
    });

    it("should throw a TypeError if the argument passed is undefined", () => {
        var notACallback;

        try {
            Function.validate(notACallback);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notACallback + " is not a function");
        }
    });
    it("should throw a TypeError if the argument passed is null", () => {
        var notACallback = null;

        try {
            Function.validate(notACallback);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notACallback + " is not a function");
        }
    });

    it("should throw a TypeError if the argument passed is an object", () => {
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