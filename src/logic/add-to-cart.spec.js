"use strict";

describe("addToCart", function() {
    it("should succeed on adding an specific product to the cart. When done so, it should disable the product to be added again", function(done) {
        loadJSON(function(results) {
            var data = JSON.parse(results);
            var randomProduct = data[Math.floor(Math.random() * data.length)];

            var result = addToCart(randomProduct);
            expect(result).to.be.undefined;

            done();
        })
    })
})