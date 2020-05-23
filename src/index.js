'use strict';

function App() {
    var app = document.createElement("main");
    app.classList.add("main");

    Component.call(this, app);

    loadJSON(function(response) {  
        var data = JSON.parse(response);
        data.map(function(product){
            product.addedToCart = false;
        });
        var cartList = data.filter(function(product) { return product.addedToCart });

        function newProductList() {
            var productList = new ProductList({ 
                results: data,
                onAddToCart: function(productId) {
                    try {
                        addToCart(data, productId);
                        cartList = data.filter(function(product) { return product.addedToCart });
                        
                        app.querySelector("section.cart").replaceWith(newCart().container);
                        
                    } catch(error) {

                    }
                }
            });
            
            return productList;
        }

        
        app.append(newProductList().container);
        
        function newCart() {
            var cart = new Cart({ 
                results: cartList 
            });
            return cart;
        }
        app.append(newCart().container);
    });
};

App.extendsFrom(Component);