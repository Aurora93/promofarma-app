function Cart(props) {
    var cart = document.createElement("section");
    Component.call(this, cart);
    cart.classList.add("cart");

    var cartContainer = document.createElement("div");
    cartContainer.classList.add("cart__container");

    var cartHeader = document.createElement("p");
    cartHeader.classList.add("cart__header");
    cartHeader.innerText = "MI CESTA:"
    cartContainer.append(cartHeader);

    var cartBar = document.createElement("div");
    cartBar.classList.add("cart__bar");
    cartContainer.append(cartBar);

    var cartProductList = document.createElement("div");
    cartProductList.classList.add("cart__product-list--hidden");

    var cartList = document.createElement("ul");
    cartList.classList.add("cart__list");

    props.results.forEach(function(result){
        var cartedProduct = document.createElement("li");
        cartedProduct.classList.add("cart__product");

        var cartLeft = document.createElement("div");
        cartLeft.classList.add("cart__left");

        var cartImage = document.createElement("img");
        cartImage.classList.add("cart__image");
        cartImage.src = "../../public/product-images/" + result.image;
        cartLeft.append(cartImage);

        var cartName = document.createElement("p");
        cartName.classList.add("cart__name");
        cartName.innerText = result.name;
        cartLeft.append(cartName);

        cartedProduct.append(cartLeft);

        var cartPrice = document.createElement("div");
        cartPrice.classList.add("cart__price");

        var cartPriceValue = document.createElement("span");
        cartPriceValue.classList.add("cart__price-value");
        cartPriceValue.innerText = result.price + " €";
        cartPrice.append(cartPriceValue);

        var cartDeleteButton = document.createElement("button");
        cartDeleteButton.classList.add("cart__delete-button");
        cartDeleteButton.innerText = "Eliminar";
        cartDeleteButton.addEventListener("click", function(event) {
            event.preventDefault();

            cartDeleteButton.innerText === "Eliminar" ? 
            cartDeleteButton.innerText = "Eliminado!"
            :
            cartDeleteButton.innerText = "Eliminar";

            //TODO do the actual delete
        });
        cartPrice.append(cartDeleteButton);

        cartedProduct.append(cartPrice);

        cartList.append(cartedProduct);
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
    cartAmount.innerText = "(" + props.results.length + (props.results.length === 1 ? " producto)" : " productos)");
    cartTotalQuantity.append(cartAmount);

    cartTotal.append(cartTotalQuantity);

    var cartTotalPrice = document.createElement("span");
    cartTotalPrice.classList.add("cart__total-price");
    cartTotalPrice.innerText = props.results.reduce(function(accum, item){
        return accum += item.price;
    }, 0) + " €";
    cartTotal.append(cartTotalPrice);

    cartProductList.append(cartList);
    cartContainer.append(cartProductList);
    cartContainer.append(cartTotal);
    cart.append(cartContainer);
};

Cart.extendsFrom(Component);