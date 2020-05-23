"use strict";

(function () {
    Object.isObject = function (obj) {
        return obj instanceof Object;
    }

    Object.validate = function (obj) {
        if (!this.isObject(obj)) throw new TypeError(obj + " is not an object");
    }
})();