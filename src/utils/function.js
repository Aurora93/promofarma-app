"use strict";

/**
 * Function methods
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

    Function.prototype.extendsFrom = function(parent) {
        if (!(parent instanceof Function)) throw new TypeError(parent + " is not a Function");

        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this.name;
    };
})();