"use strict";
 // get json and filter

/**
 * Get all the products from the cart
 * 
 * @returns {Array} array of the cart products
 *
 */

var retrieveCartProducts = function(callback) {
    call("../../public/data/data.json", undefined, function(error, response) {
        if (error) return callback(error);

        var data = JSON.parse(response.content);

        var itemsInCart = data.filter(function(item) { 
            return context.cart.indexOf(item.id) !== -1;
        });

        debugger
        callback(itemsInCart);
    })
}.bind(context);