"use strict";

if (typeof Object.prototype.extendsFrom === 'undefined') {
    Object.prototype.extendsFrom = function(parent) {
        if (!(parent instanceof Object)) throw new TypeError(parent + " is not an Object");

        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this.name;
    };
}