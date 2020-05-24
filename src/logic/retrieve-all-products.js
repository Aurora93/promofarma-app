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
    
    call("../../public/data/data.json", undefined, function(error, response) {
        if (error) return callback(error);

        var data = JSON.parse(response.content);

        return callback(data);
    })
}