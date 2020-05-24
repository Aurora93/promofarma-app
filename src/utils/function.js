"use strict";

/**
 * Validates if is an Function
 * 
 * @throws {TypeError} if is not a type of Function
 * 
 */

(function () {
    Function.isFunction = function (func) {
        return typeof func === "function";
    }

    Function.validate = function (func) {
        if (!this.isFunction(func)) throw new TypeError(func + " is not a function");
    }
})();