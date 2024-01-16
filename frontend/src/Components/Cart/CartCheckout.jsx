import React from 'react'

const CartCheckout = ({totalCartPrice}) => {
    return (
        <div className='cartCheckout'>
            <table>
                <tr>
                    <td>total price</td>
                    <td>$ {totalCartPrice}</td>
                </tr>
                <button className="cart-checkout">check out</button>
            </table>
        </div>
    )
}

export default CartCheckout