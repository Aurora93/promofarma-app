"use strict";

function App() {
    Component.call(this, document.createElement("main")); 
    this.container.classList.add("main");

    var products;
    var productList = retrieveAllProducts(function(items) {
        products = new ProductList({ 
            items: items,
            onAddToCart: function(productId) {
                try {
                    addToCart(productId, function(error) {
                        if (error) return; //TODO
                        
                        retrieveProduct(productId, function(error, product) {
                            if (error) console.error(error);

                            cart.addItem({ item: product });

                            products.disableAddToCart(productId);
                        });
                    });
                } catch(error) {
                    console.error(error);
                }
            }
        })
        
        this.container.append(products.container);

        return products;
    }.bind(this));

    var cart;
    var cartList = retrieveCartProducts(function(items) {
        cart = new CartList({ 
            items: items,
            onRemove: function(productId) {
                try {
                    removeFromCart(productId, function(error) {
                        if (error) return; //TODO

                        retrieveProduct(productId, function(error, product) {
                            if (error) return console.log(error);

                            cart.removeItem({ item: product });

                            products.enableAddToCart(productId);
                        });
                    })
                } catch(error) {
                    console.error(error);
                }
            }
        });

        this.container.append(cart.container);

        return cart;
    }.bind(this));
    
};

App.extendsFrom(Component);