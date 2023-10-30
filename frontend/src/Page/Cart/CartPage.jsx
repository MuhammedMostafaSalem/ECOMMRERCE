import React from 'react'
import './Cart.css'
import CartItem from '../../Components/Cart/CartItem'
import CartCheckout from '../../Components/Cart/CartCheckout'

const CartPage = () => {
    return (
        <div className='cartPage divContainer mb-4' style={{minHeight: '593px'}}>
            <table>
                <tr>
                    <th>product</th>
                    <th>quantity</th>
                    <th>subtotal</th>
                </tr>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </table>
            <CartCheckout />
        </div>
    )
}

export default CartPage