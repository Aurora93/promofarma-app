"use strict";

function App() {
    var app = document.createElement("main");
    app.classList.add("main");

    Component.call(this, app);

    var productList = retrieveAllProducts(function(results) {
        var products = new ProductList({ 
            results: results,
            onAddToCart: function(productId) {
                try {
                    addToCart(productId, function(error) {
                        if (error) return; //TODO
                        
                        retrieveProduct(productId, function(error, product) {
                            if (error) console.error(error);

                            cart.addItem(product);
                            
                            cart.totalPrice(retrieveCartProducts());
                            products.disableAddToCart(productId);
                        });
                    });
                } catch(error) {
                    console.error(error);
                }
            }
        })
        
        app.insertBefore(products.container, cart.container);
    });

    var cart = new Cart({ 
        results: retrieveCartProducts(),
        onRemove: function(productId) {
            try {
                removeFromCart(productId, function(error) {
                    if (error) return; //TODO

                    retrieveProduct(productId, function(error, product) {
                        if (error) return console.log(error);

                        cart.removeItem(product);

                        cart.totalPrice(retrieveCartProducts());
                        productList.enableAddToCart(productId);
                    });
                })
            } catch(error) {
                console.error(error);
            }
        }
    });
    
    app.append(cart.container); 
};

App.extendsFrom(Component);