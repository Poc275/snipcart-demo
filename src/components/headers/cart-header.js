import React from "react"
import { Link } from "gatsby"

const CartHeader = () => (
    <li className="onhover-div mobile-cart">
        <span className="cart-qty-cls snipcart-items-count"></span>
        <Link className="snipcart-checkout" to={`/`}>
            <img src={`${process.env.BASE_URL}/assets/images/icon/cart.png`} className="img-fluid" alt=""/>
            <i className="fa fa-shopping-cart"></i>
        </Link>
    </li>
)

export default CartHeader