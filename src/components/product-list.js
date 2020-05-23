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
        var product = new Product({ result: result });

        productListUL.append(product.container);
    });

    productListContainer.append(productListUL);
    productList.append(productListContainer);
};

ProductList.extendsFrom(Component);