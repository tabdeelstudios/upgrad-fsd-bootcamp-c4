var modifyCart = (function () {
    var cartPrice = 0;

    function calculateCart(amount) {
        cartPrice = cartPrice + amount;
    }

    return {
        addProduct: function () {
            calculateCart(100);
        },
        removeProduct: function () {
            calculateCart(-100);
        },
        value: function () {
            return cartPrice;
        }
    };
})();

console.log(modifyCart.value());
modifyCart.addProduct();
modifyCart.addProduct();
console.log(modifyCart.value());
modifyCart.removeProduct();
console.log(modifyCart.value());
