"use strict";

/**
 * Validates if is an Number
 * 
 * @throws {TypeError} if is not an type of Number
 * 
 */

(function () {
    Number.isNumber = function (num) {
        return typeof num === "number";
    }

    Number.validate = function (num) {
        if (!this.isNumber(num)) throw new TypeError(num + " is not a number");
    }
})();