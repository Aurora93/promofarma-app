"use strict";

function CartItem(props) {
    Component.call(this, document.createElement("li"));
    this.container.classList.add("cart-item");
    this.container.dataset.cartId = props.item.id;
    
    var cartLeft = document.createElement("div");
    cartLeft.classList.add("cart-item__left");

    var cartImage = document.createElement("img");
    cartImage.classList.add("cart-item__image");
    cartImage.src = "../../public/product-images/" + props.item.image;
    cartLeft.append(cartImage);

    var cartName = document.createElement("p");
    cartName.classList.add("cart-item__name");
    cartName.innerText = props.item.name;
    cartLeft.append(cartName);

    this.container.append(cartLeft);

    var cartPrice = document.createElement("div");
    cartPrice.classList.add("cart-item__price");

    var cartPriceValue = document.createElement("span");
    cartPriceValue.classList.add("cart-item__price-value");
    cartPriceValue.innerText = props.item.price + " €";
    cartPrice.append(cartPriceValue);

    var cartDeleteButton = document.createElement("button");
    cartDeleteButton.classList.add("cart-item__delete-button");
    cartDeleteButton.innerText = "Eliminar";
    cartDeleteButton.addEventListener("click", function(event) {
        event.preventDefault();
        debugger
        props.onRemove(props.item.id);
    });
    cartPrice.append(cartDeleteButton);

    this.container.append(cartPrice);
}

CartItem.extendsFrom(Component);