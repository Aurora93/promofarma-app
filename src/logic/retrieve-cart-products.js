"use strict";

/**
 * Get all the products from the cart
 * 
 * @returns {Array} array of the cart products
 *
 */

var retrieveCartProducts = function() {
    return context.cart;
}.bind(context);