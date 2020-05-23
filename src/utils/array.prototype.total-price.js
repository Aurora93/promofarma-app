"use strict";

if (typeof Array.prototype.totalPrice === 'undefined') {
    Array.prototype.totalPrice = function () {
        return this.reduce(function(accum, item){
            return accum += item.price;
        }, 0).toFixed(2) + " €";
    }
}