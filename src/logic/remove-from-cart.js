"use strict";

/**
 * Removes a product from the cart array
 * 
 * @param {string} productId product's unique id
 * 
 * @param {function} callback the callback return function
 * 
 * @returns {function} it returns nothing if it succeed or an Error if the product does not exist or the product is not in the cart
 *
 */

var removeFromCart = function(productId, callback) {
    Number.validate(productId);
    Function.validate(callback);

    call("../../public/data/data.json", undefined, function(error, response) {
        if (error) return callback(error);

        var data = JSON.parse(response.content);

        var product = data.find(function(item) { return item.id === productId });
        if (!product) return callback(new Error("product with id " + productId + " does not exist"));

        var productInCart = context.cart.find(function(id) { return id === productId });
        if (!productInCart) return callback(new Error("product with id " + productId + " not found in the cart"));

        context.cart.splice(context.cart.findIndex(function(id) { return id === productId }), 1);

        callback();
    })
}.bind(context);