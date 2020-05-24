"use strict";

/**
 * Gets all the products from the database
 * 
 * @param {function} callback the callback return function
 *
 * @returns {function} it returns an array of all products of the database
 */

function retrieveAllProducts(callback) {
    Function.validate(callback);
    
    loadJSON(function(response) {
        var data = JSON.parse(response);

        return callback(data);
    })
}