"use strict";

function Product(props) {
    var product = document.createElement("li");
    product.classList.add("product-list__product");
    product.setAttribute("id", props.result.id);
    Component.call(this, product);
    
    var productName = document.createElement("p");
    productName.classList.add("product-list__name");
    productName.innerText = props.result.name;
    product.append(productName);

    var productPrice = document.createElement("p");
    productPrice.classList.add("product-list__price");
    productPrice.innerText = props.result.price + " €";
    product.append(productPrice);

    var addToCartButton = document.createElement("img");
    addToCartButton.classList.add("product-list__add-to-cart");
    addToCartButton.src = "../../public/icons/add-to-cart.png";
    addToCartButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        props.onAddToCart(props.result.id);
    });
    product.append(addToCartButton);

    return product.container;
};

Product.extendsFrom(Component);