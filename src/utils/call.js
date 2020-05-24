"use strict"

/**
 * Loads the JSON file located on the data directory
 *
 * @param {function} callback the callback return function
 *
 * @returns {function} returns the database or returns a callback with a new Error if a network error ocurred
 */

function call(url, options = {method : 'GET'}, callback) {
    if (typeof url !== 'string') throw new TypeError(url + ' is not a string');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    var xhr = new XMLHttpRequest;

    var method = options.method;
    var body = options.body;
    var headers = options.headers;

    xhr.open(method, url);

    for (const key in headers ){
        xhr.setRequestHeader(key, headers[key]);
    }

    xhr.addEventListener('load', function (event) {
        var self = event.target;

        callback(undefined, {
            content: self.responseText,
            status: self.status
        });
    });

    xhr.addEventListener('error', function() {
        callback(new Error('Network error'));
    })

    xhr.send(body);
}