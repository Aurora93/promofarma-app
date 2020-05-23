"use strict"

describe("loadJSON", function() {
    it("should succeed if the argument passed is a function", function(done) {
        loadJSON(function(results){
            expect(results).not.to.throw;
            expect(results).to.exist;
            expect(results).to.be.a("string");
            
            var data = JSON.parse(results);
            expect(data).to.exist;
            expect(data).to.be.instanceof(Array);
            
            data.forEach(product => {
                expect(product).to.exist;
                expect(product).to.be.instanceof(Object);

                expect(product.name).to.exist;
                expect(product.name).to.be.a("string");
                expect(product.price).to.exist;
                expect(product.price).to.be.a("number");
                expect(product.id).to.exist;
                expect(product.id).to.be.a("number");
                expect(product.image).to.exist;
                expect(product.image).to.be.a("string");
            });

            done();
        });
    });

    it("should throw TypeError if the argument passed is a string", function() {
        var notAFunction = "Hello World!";

        try{
            loadJSON(notAFunction)
        }catch(error){
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAFunction + " is not a function");
        }
    });

    it("should throw TypeError if the argument passed is a number", function() {
        var notAFunction = 123;

        try{
            loadJSON(notAFunction)
        }catch(error){
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAFunction + " is not a function");
        }
    });

    it("should throw TypeError if the argument passed is a boolean", function() {
        var notAFunction = true;

        try{
            loadJSON(notAFunction)
        }catch(error){
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAFunction + " is not a function");
        }
    });

    it("should throw TypeError if the argument passed is an array", function() {
        var notAFunction = {};

        try{
            loadJSON(notAFunction)
        }catch(error){
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAFunction + " is not a function");
        }
    });

    it("should throw TypeError if the argument passed is an object", function() {
        var notAFunction = {};

        try{
            loadJSON(notAFunction)
        }catch(error){
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAFunction + " is not a function");
        }
    });

    it("should throw TypeError if the argument passed is an undefined", function() {
        var notAFunction = undefined;

        try{
            loadJSON(notAFunction)
        }catch(error){
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAFunction + " is not a function");
        }
    });

    it("should throw TypeError if the argument passed is a null", function() {
        var notAFunction = null;

        try{
            loadJSON(notAFunction)
        }catch(error){
            expect(error).to.exist;
            expect(error).to.be.instanceof(TypeError);
            expect(error.message).to.equal(notAFunction + " is not a function");
        }
    });
});