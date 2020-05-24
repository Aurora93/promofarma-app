"use strict";

function Cart(props) {
    var cart = document.createElement("section");
    Component.call(this, cart);
    cart.classList.add("cart");

    var cartContainer = document.createElement("div");
    cartContainer.classList.add("cart__container");

    var cartHeader = document.createElement("p");
    cartHeader.classList.add("cart__header");
    cartHeader.innerText = "MI CESTA:";
    cartContainer.append(cartHeader);

    var cartBar = document.createElement("div");
    cartBar.classList.add("cart__bar");
    cartContainer.append(cartBar);

    var cartProductList = document.createElement("div");
    cartProductList.classList.add("cart__product-list--hidden");

    var cartList = document.createElement("ul");
    cartList.classList.add("cart__list");

    props.results.forEach(function(result){
        var cartedProduct = new CartItem({ 
            result: result,
            onRemove: props.onRemove
        });
        
        cartList.append(cartedProduct.container);
    });

    var cartTotal = document.createElement("div");
    cartTotal.classList.add("cart__total");

    var cartTotalQuantity = document.createElement("div");
    cartTotalQuantity.classList.add("cart__quantity");

    var cartText = document.createElement("p");
    cartText.classList.add("cart__text");
    cartText.innerText = "TOTAL";
    cartTotalQuantity.append(cartText);

    var cartAmount = document.createElement("p");
    cartAmount.classList.add("cart__amount");
    cartAmount.innerText = "(" + props.results.length + (props.results.length === 1 ? " producto)" : " productos)");
    cartTotalQuantity.append(cartAmount);

    cartTotal.append(cartTotalQuantity);

    var cartTotalPrice = document.createElement("span");
    cartTotalPrice.classList.add("cart__total-price");
    cartTotalPrice.innerText = props.results.totalPrice();
    cartTotal.append(cartTotalPrice);

    cartProductList.append(cartList);
    cartContainer.append(cartProductList);
    cartContainer.append(cartTotal);
    cart.append(cartContainer);
};

Cart.extendsFrom(Component);

Cart.prototype.addItem = function(product) {
    debugger
    var newProductToCart = new CartItem({ 
        result: product,
        onRemove: console.log
    });
    document.querySelector("ul.cart__list").append(newProductToCart.container);
}

Cart.prototype.removeItem = function(product) {
    var productToRemoveFromCart = document.getElementById(product.id);
    document.querySelector("ul.cart__list").removeChild(productToRemoveFromCart);
}

Cart.prototype.totalPrice = function(cartArray) {
    document.querySelector(".cart__total-price").innerText = cartArray.totalPrice();
    document.querySelector(".cart__amount").innerText = "(" + cartArray.length + (cartArray.length === 1 ? " producto)" : " productos)");
}