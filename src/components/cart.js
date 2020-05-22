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
        var cartedProduct = new CartItem({ result: result });

        cartList.append(cartedProduct.container);
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