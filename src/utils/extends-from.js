"use strict";

Object.prototype.extendsFrom = function(parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this.name;
}