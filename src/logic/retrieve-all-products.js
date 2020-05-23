"use strict";

function retrieveAllProducts(callback) {
    Function.validate(callback);
    
    loadJSON(function(response) {
        var data = JSON.parse(response);

        return callback(data);
    })
}