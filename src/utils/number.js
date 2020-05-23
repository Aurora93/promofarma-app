"use strict";

(function () {
    Number.isNumber = function (num) {
        return typeof num === "number";
    }

    Number.validate = function (num) {
        if (!this.isNumber(num)) throw new TypeError(num + " is not a number");
    }
})();