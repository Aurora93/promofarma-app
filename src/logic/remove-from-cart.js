"use strict";

var removeFromCart = function(productId, callback) {
    Number.validate(productId);
    Function.validate(callback);

    loadJSON(function(response) {
        var data = JSON.parse(response);

        var product = data.find(function(item) { return item.id === productId });
        if (!product) return callback(new Error("product with id " + productId + " does not exist"));

        var productInCart = context.cart.find(function(item) { return item.id === productId });
        if (!productInCart) return callback(new Error("product with id " + productId + " not found in the cart"));

        context.cart.splice(context.cart.findIndex(function(item) { return item.id === productId }), 1);

        callback();
    })
}.bind(context);