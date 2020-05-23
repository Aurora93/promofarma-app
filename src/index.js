'use strict';

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