"use strict";

function ProductList(props){
    Component.call(this, document.createElement("section"));
    this.container.classList.add("product-list");

    var productListContainer = document.createElement("div");
    productListContainer.classList.add("product-list__container");

    var productListUL = document.createElement("ul");
    productListUL.classList.add("product-list__list");
    
    props.items.forEach(function(item) {
        var product = new ProductItem({ 
            item: item,
            onAddToCart: props.onAddToCart 
        });

        productListUL.append(product.container);
    });

    productListContainer.append(productListUL);

    this.container.append(productListContainer);
};

ProductList.extendsFrom(Component);

ProductList.prototype.enableAddToCart = function(productId) {
    document.querySelector('[data-product-id="' + productId + '"]').querySelector(".product-item__add-to-cart--disabled").className = "product-item__add-to-cart";
    document.querySelector('[data-product-id="' + productId + '"]').querySelector(".product-item__price--disabled").className = "product-item__price";
}

ProductList.prototype.disableAddToCart = function(productId) {
    document.querySelector('[data-product-id="' + productId + '"]').querySelector(".product-item__add-to-cart").className = "product-item__add-to-cart--disabled";
    document.querySelector('[data-product-id="' + productId + '"]').querySelector(".product-item__price").className = "product-item__price--disabled";
}