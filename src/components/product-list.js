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
        var product = new Product({ 
            result: result,
            onAddToCart: props.onAddToCart 
        });

        productListUL.append(product.container);
    });

    productListContainer.append(productListUL);
    productList.append(productListContainer);
};

ProductList.extendsFrom(Component);

ProductList.prototype.enableAddToCart = function(productId) {
    document.getElementById(productId).querySelector(".product__add-to-cart--disabled").className = "product__add-to-cart";
    document.getElementById(productId).querySelector(".product__price--disabled").className = "product__price";
}

ProductList.prototype.disableAddToCart = function(productId) {
    document.getElementById(productId).querySelector(".product__add-to-cart").className = "product__add-to-cart--disabled";
    document.getElementById(productId).querySelector(".product__price").className = "product__price--disabled";
}