"use strict";

describe("retrieveCartProducts", function() {
    var randomProduct;

    it("should succeed on retrieving the products from the cart, which are bound to the context", function() {
        var results = retrieveCartProducts();
        
        expect(results).to.exist;
        expect(results).to.be.instanceof(Array);
        expect(results.length).to.equal(0);
    });

    it("should retrieve an array of the products that has previously been added to the cart", function(done) {
        loadJSON(function(response) {
            var data = JSON.parse(response);
            
            randomProduct = data[Math.floor(Math.random() * data.length)];

            context.cart.push(randomProduct);

            var results = retrieveCartProducts();

            expect(results).to.exist;
            expect(results).to.be.instanceof(Array);
            expect(results.length).to.equal(1);
            for(var property in results[0]) {
                expect(results[0][property]).to.equal(randomProduct[property]);
            }

            done();
        });
    });
}.bind(context));