import React from 'react';
import './Product.css';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const { name, img, seller, stock, price, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>only {stock} left in stock -order soon</small></p>

                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                />
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular">{cartIcon}
                    Add to cart</button>
            </div>
        </div>
    );
};

export default Product;