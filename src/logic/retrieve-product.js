"use strict";

/**
 * Gets a target product from the database
 * 
 * @param {string} productId product's unique id
 * 
 * @param {function} callback the callback return function
 *
 * @returns {function} it returns the product
 */

var retrieveProduct = function(productId, callback) {
    Number.validate(productId);
    Function.validate(callback);

    loadJSON(function(response) {
        var data = JSON.parse(response);

        var product = data.find(function(item) { return item.id === productId });

        if (!product) return callback(new Error("product with id " + productId + " does not exist"));
        
        return callback(undefined, product);
    })
}.bind(context);