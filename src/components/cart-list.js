"use strict";

function CartList(props) {
    Component.call(this, document.createElement("section"));
    this.container.classList.add("cart");

    this.quantity = 0;
    this.total = 0;
    this.onRemove = props.onRemove;

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

    props.items.forEach(function(item){
        var cartedProduct = new CartItem({ 
            item: item,
            onRemove: this.onRemove
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
    cartAmount.innerText = "(" + this.quantity + (this.quantity === 1 ? " producto)" : " productos)");
    cartTotalQuantity.append(cartAmount);

    cartTotal.append(cartTotalQuantity);

    var cartTotalPrice = document.createElement("span");
    cartTotalPrice.classList.add("cart__total-price");
    cartTotalPrice.innerText = parseFloat(this.total.toFixed(2)) + " €";
    cartTotal.append(cartTotalPrice);

    cartProductList.append(cartList);
    cartContainer.append(cartProductList);
    cartContainer.append(cartTotal);

    this.container.append(cartContainer);
};

CartList.extendsFrom(Component);

CartList.prototype.addItem = function(props) {
    var newProductToCart = new CartItem({ 
        item: props.item, 
        onRemove: this.onRemove
    });
    document.querySelector("ul.cart__list").append(newProductToCart.container);

    this.quantity++;
    this.total += props.item.price;

    document.querySelector(".cart__amount").innerText = "(" + this.quantity + (this.quantity === 1 ? " producto)" : " productos)");
    document.querySelector(".cart__total-price").innerText = this.total.toFixed(2) + " €";
}

CartList.prototype.removeItem = function(props) {
    var productToRemoveFromCart = document.querySelector('[data-cart-id= "' + props.item.id + '"]');
    
    productToRemoveFromCart.remove();

    this.quantity === 0 ? this.quantity : this.quantity--;
    this.total -= props.item.price;
    
    document.querySelector(".cart__amount").innerText = "(" + this.quantity + (this.quantity === 1 ? " producto)" : " productos)");
    document.querySelector(".cart__total-price").innerText = parseFloat(this.total.toFixed(2)) + " €";
}