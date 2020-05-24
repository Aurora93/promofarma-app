"use strict";

/**
 * Adds a new product to the cart array
 * 
 * @param {string} productId product's unique id
 * 
 * @param {function} callback the callback return function
 * 
 * @returns {function} it returns nothing if it succeed or an Error if the product does not exist or the product is already in the cart
 *
 */


var addToCart = function(productId, callback) {
    Number.validate(productId);
    Function.validate(callback);
    
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