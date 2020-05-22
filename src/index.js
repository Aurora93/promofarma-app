'use strict';

// var array = [
//     {
//         "name": "LaJusticia colágeno con magnesio 450comp",
//         "image": "/Users/Au/promofarma-app/public/product-images/lajusticia-colageno.jpg",
//         "price": 14.35
//     }
// ]

function App() {
    var app = document.createElement("main");
    app.classList.add("main");

    Component.call(this, app);

    loadJSON(function(response) {  
        var data = JSON.parse(response);
        
        var productList = new ProductList({ results: data });
        app.append(productList.container);

        var cart = new Cart({ results: data });
        app.append(cart.container);
    });
};

App.extendsFrom(Component);