"use strict";

function Product(props) {
    var product = document.createElement("li");
    product.classList.add("product");
    Component.call(this, product);
    
    var productName = document.createElement("p");
    productName.classList.add("product__name");
    productName.innerText = props.result.name;
    product.append(productName);

    var productPrice = document.createElement("p");
    productPrice.classList.add("product__price");
    productPrice.innerText = props.result.price + " €";
    product.append(productPrice);

    var addToCartButton = document.createElement("img");
    addToCartButton.classList.add("product__add-to-cart");
    addToCartButton.src = "../../public/icons/add-to-cart.png";
    addToCartButton.addEventListener("click", function(event) {
        event.preventDefault();
        // if (addToCartButton.className === "product__add-to-cart") addToCartButton.className += "--disabled";
        // else addToCartButton.className = "product__add-to-cart";
        if (addToCartButton.className === "product__add-to-cart") {
            addToCartButton.className += "--disabled";
            productPrice.className += "--disabled";
        } else return;
        //TODO: mover datos de product-list a cart
    });
    product.append(addToCartButton);

    return product.container;
};

Product.extendsFrom(Component);