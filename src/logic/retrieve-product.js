"use strict";

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