"use strict";

var retrieveProduct = function(productId, callback) {
    loadJSON(function(response) {
        var data = JSON.parse(response);

        var product = data.find(function(item) { return item.id === productId });

        return callback(undefined, product);
    })
}.bind(context);