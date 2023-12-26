export const addDecimails = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
    // calculate item price
    state.itemsPrice = addDecimails(state.cartItems.reduce((acc, item) => acc + item.price * item.
    qty, 0));

    //calculate shipping price ( neu order tren 100$ thi free, duoi thi 10$ ship)
    state.shippingPrice = addDecimails(state.itemsPrice > 100 ? 0 : 10);

    // calulate tax price (15% tax)
    state.taxPrice = addDecimails(
        Number((0.15 * state.itemsPrice).toFixed(2))
    );

    //calculate total price
    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice)+
        Number(state.taxPrice)
    ).toFixed(2);

    localStorage.setItem('cart', JSON.stringify(state));

    return state;
}