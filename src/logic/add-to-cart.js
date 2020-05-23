"use strict";

function addToCart(data, productId) {
    // Array.validate(data);
    // Number.validate(productId);

    var product = data.find(function(item) { return item.id === productId });
    if (!product) throw new Error("product with id " + productId + " does not exist");
    if (product.addedToCart) throw new Error("product with id " + productId + " has already been carted");

    return data[data.findIndex(function(item) { return item.id === productId })].addedToCart = true;
};