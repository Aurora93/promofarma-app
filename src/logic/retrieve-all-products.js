"use strict";

function retrieveAllProducts(callback) {
    loadJSON(function(response) {
        var data = JSON.parse(response);

        return callback(data);
    })
}