"use strict";

function CartItem(props) {
    var cartedProduct = document.createElement("li");
    cartedProduct.classList.add("cart-item");
    cartedProduct.setAttribute("id", props.result.id);
    Component.call(this, cartedProduct);

    var cartLeft = document.createElement("div");
    cartLeft.classList.add("cart-item__left");

    var cartImage = document.createElement("img");
    cartImage.classList.add("cart-item__image");
    cartImage.src = "../../public/product-images/" + props.result.image;
    cartLeft.append(cartImage);

    var cartName = document.createElement("p");
    cartName.classList.add("cart-item__name");
    cartName.innerText = props.result.name;
    cartLeft.append(cartName);

    cartedProduct.append(cartLeft);

    var cartPrice = document.createElement("div");
    cartPrice.classList.add("cart-item__price");

    var cartPriceValue = document.createElement("span");
    cartPriceValue.classList.add("cart-item__price-value");
    cartPriceValue.innerText = props.result.price + " €";
    cartPrice.append(cartPriceValue);

    var cartDeleteButton = document.createElement("button");
    cartDeleteButton.classList.add("cart-item__delete-button");
    cartDeleteButton.innerText = "Eliminar";
    cartDeleteButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        props.onRemove(props.result.id);
    });
    cartPrice.append(cartDeleteButton);

    cartedProduct.append(cartPrice);

    return cartedProduct.container;
};

CartItem.extendsFrom(Component);