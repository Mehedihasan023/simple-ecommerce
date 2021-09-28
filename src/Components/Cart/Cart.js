import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h2 className="order-cart">Order summary</h2>
            <h5 className="order-cart">Items Ordered: {totalQuantity}</h5>

            <div className="total-cart">
                <div>
                    <p>Total:</p>
                    <p>Shippng:</p>
                    <p>Tax:   </p>
                    <p>Grand total:</p>
                </div>
                <div>
                    <p>${total.toFixed(2)}</p>
                    <p>${shipping.toFixed(2)}</p>
                    <p>${tax.toFixed(2)}</p>
                    <p>${grandTotal.toFixed(2)}</p>
                </div>
            </div>

        </div>
    );
};

export default Cart;