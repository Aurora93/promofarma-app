"use strict";

/**
 * Validates if is an Object
 * 
 * @throws {TypeError} if is not an instance of Object
 * 
 */

(function () {
    Object.isObject = function (obj) {
        //return obj instanceof Object;
        return obj.constructor === Object;
    }

    Object.validate = function (obj) {
        if (!this.isObject(obj)) throw new TypeError(obj + " is not an object");
    }
})();