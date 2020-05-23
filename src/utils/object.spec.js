"use strict";

describe('Object.validate', function() {
    it("should succeed if the argument passed is an object constructor", function() {
        function NewConstructor(name) { 
            this.name = name;
        };
        var constructorTested = Object.validate(new NewConstructor("Promofarma"));

        expect(constructorTested).not.to.throw;
        expect(constructorTested).to.be.undefined;
    });

    it("should throw a TypeError if the argument passed is a string", function() {
        var notAConstructor = "some string";

        try {
            Object.validate(notAConstructor);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAConstructor + " is not an object");
        }
    });

    it("should throw a TypeError if the argument passed is a number", function() {
        var notAConstructor = 10;

        try {
            Object.validate(notAConstructor);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAConstructor + " is not an object");
        }
    });

   it("should throw a TypeError if the argument passed is an array", function() {
        var notAConstructor = [];

        try {
            Object.validate(notAConstructor);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAConstructor + " is not an object");
        }
    });

    it("should throw a TypeError if the argument passed is an boolean", function() {
        var notAConstructor = false;

        try {
            Object.validate(notAConstructor);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAConstructor + " is not an object");
        }
    });

    it("should throw a TypeError if the argument passed is undefined", function() {
        var notAConstructor;

        try {
            Object.validate(notAConstructor);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAConstructor + " is not an object");
        }
    });

    it("should throw a TypeError if the argument passed is null", function() {
        var notAConstructor = null;

        try {
            Object.validate(notAConstructor);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAConstructor + " is not an object");
        }
    });

    it("should throw a TypeError if the argument passed is a function without being a constructor", function() {
        var notAConstructor = function () {};

        try {
            Object.validate(notAConstructor);
        } catch(error) {
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAConstructor + " is not an object");
        }
    });
})