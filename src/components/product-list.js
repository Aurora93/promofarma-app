"use strict";

function ProductList(props){
    var productList = document.createElement("section");
    Component.call(this, productList);
    productList.classList.add("product-list");

    var productListContainer = document.createElement("div");
    productListContainer.classList.add("product-list__container");

    var productListUL = document.createElement("ul");
    productListUL.classList.add("product-list__list");
    
    props.results.forEach(function(result) {
        var product = document.createElement("li");
        product.classList.add("product-list__product");
        
        var productName = document.createElement("p");
        productName.classList.add("product-list__name");
        productName.innerText = result.name;
        product.append(productName);

        var productPrice = document.createElement("p");
        productPrice.classList.add("product-list__price");
        productPrice.innerText = result.price + " €";
        product.append(productPrice);

        var addToCartButton = document.createElement("img");
        addToCartButton.classList.add("product-list__add-to-cart");
        addToCartButton.src = "../../public/icons/add-to-cart.png";
        addToCartButton.addEventListener("click", function(event) {
            event.preventDefault();
            // if (addToCartButton.className === "product-list__add-to-cart") addToCartButton.className += "--disabled";
            // else addToCartButton.className = "product-list__add-to-cart";
            if (addToCartButton.className === "product-list__add-to-cart") addToCartButton.className += "--disabled";
            else return;
            //TODO: mover datos de product-list a cart
        });
        product.append(addToCartButton);

        productListUL.append(product);
    });

    productListContainer.append(productListUL);
    productList.append(productListContainer);
};

ProductList.extendsFrom(Component);