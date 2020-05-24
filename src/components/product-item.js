"use strict";

function ProductItem(props) {
    Component.call(this, document.createElement("li"));
    this.container.classList.add("product");
    this.container.dataset.productId = props.item.id;
    
    var productName = document.createElement("p");
    productName.classList.add("product__name");
    productName.innerText = props.item.name;
    this.container.append(productName);

    var productPrice = document.createElement("p");
    productPrice.classList.add("product__price");
    productPrice.innerText = props.item.price + " €";
    this.container.append(productPrice);

    var addToCartButton = document.createElement("img");
    addToCartButton.classList.add("product__add-to-cart");
    addToCartButton.src = "../../public/icons/add-to-cart.png";
    addToCartButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        props.onAddToCart(props.item.id);
    });

    this.container.append(addToCartButton);
};

ProductItem.extendsFrom(Component);