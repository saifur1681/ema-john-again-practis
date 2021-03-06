import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)
    // total price......
    let total = 0;
    let totalQuantity = 0;
    // let seller = " ";
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        totalQuantity = totalQuantity + product.quantity;
        total = total + product.price * product.quantity;
        // seller = product.seller;
        // const ul = document.getElementsByClassName('ul-div');
        // const li = document.createElement('li');
        // li.innerText = seller;
        // ul.appendChild(li);
    };
    // tax...
    let tax = total / 10;
    // shipping.....
    let shipping = tax + tax;
    //after order total...
    let orderTotal = total + tax + shipping;

    return (
        <div>
            <div className="cart-header">
                <h2>Order Summary</h2>
                {/* <div>
                    <ul className="ul-div" >Seller: {seller}</ul>
                </div> */}
                <h3>Ordered Item: {totalQuantity}</h3>
            </div>

            <div className="cart-details">
                <p>Total Before tax: ${total.toFixed(2)}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p>Shipping: ${shipping.toFixed(2)}</p>
                <p className="order-total" >Order Total: ${orderTotal.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Cart;