"use strict";

/**
 * Calculates the sum of the prices of the products
 * 
 * @return {Number} is the total price
 * 
 */

if (typeof Array.prototype.totalPrice === 'undefined') {
    Array.prototype.totalPrice = function () {
        return this.reduce(function(accum, item){
            return accum += item.price;
        }, 0).toFixed(2) + " €";
    }
}