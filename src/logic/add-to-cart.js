"use strict";

var addToCart = function(productId, callback) {
    Number.validate(productId);
    
    loadJSON(function(response) {
        var data = JSON.parse(response);
        
        var product = data.find(function(item) { return item.id === productId });
        if (!product) return callback(new Error("product with id " + productId + " does not exist"));
        
        var productInCart = context.cart.find(function(item) { return item.id === productId });
        if (productInCart) return callback(new Error("product with id " + productId + " is already in the cart"));

        context.cart.push(product);
        callback();
    })
}.bind(context);