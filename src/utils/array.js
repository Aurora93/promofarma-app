"use strict";

(function () {
    Array.isArray = function (arr) {
        return arr instanceof Array;
    }

    Array.validate = function (arr) {
        if (!this.isArray(arr)) throw new TypeError(arr + " is not an array");
    }
})();