"use strict"

function loadJSON(callback) { 
    Function.validate(callback);
    
    var xobj = new XMLHttpRequest();

    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../../public/data/data.json', true); 

    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };

    xobj.addEventListener('error', function() {
        callback(new Error('Network error'));
    });

    xobj.send(null);  
}