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
                        if (error && error.message === "product with id " + productId + " is already in the cart") return;
                        else if (error && error.message !== "product with id " + productId + " is already in the cart" ) {
                            var feedback = new Feedback({ message: "Uy! Algo salió mal, estamos trabajando en ello." });
                            return products.container.replaceWith(feedback.container);
                        }
                        
                        retrieveProduct(productId, function(error, product) {
                            if (error) {
                                var feedback = new Feedback({ message: "Uy! Algo salió mal, estamos trabajando en ello." });
                                return products.container.replaceWith(feedback.container);
                            }

                            cart.addItem({ item: product });

                            products.disableAddToCart(productId);
                        });
                    });
                } catch(error) {
                    var feedback = new Feedback({ message: "Uy! Algo salió mal, estamos trabajando en ello." });
                    return products.container.replaceWith(feedback.container);
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
                        if (error) {
                            var feedback = new Feedback({ message: "Uy! Algo salió mal, estamos trabajando en ello." });
                            return cart.container.replaceWith(feedback.container);
                        }

                        retrieveProduct(productId, function(error, product) {
                            if (error) {
                                var feedback = new Feedback({ message: "Uy! Algo salió mal, estamos trabajando en ello." });
                                return cart.container.replaceWith(feedback.container);
                            }

                            cart.removeItem({ item: product });

                            products.enableAddToCart(productId);
                        });
                    })
                } catch(error) {
                    var feedback = new Feedback({ message: "Uy! Algo salió mal, estamos trabajando en ello." });
                    return cart.container.replaceWith(feedback.container);
                }
            }
        });

        this.container.append(cart.container);

        return cart;
    }.bind(this));
    
};

App.extendsFrom(Component);