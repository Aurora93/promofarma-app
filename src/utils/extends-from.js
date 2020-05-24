"use strict";

/**
 * Creates an inheritance from a target parent Object and establishes the Constructor name
 * 
 * @throws {TypeError} if the parent is not a Constructor Function
 * 
 */

if (typeof Object.prototype.extendsFrom === 'undefined') {
    Object.prototype.extendsFrom = function(parent) {
        if (!(parent instanceof Object)) throw new TypeError(parent + " is not an Object");

        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this.name;
    };
}