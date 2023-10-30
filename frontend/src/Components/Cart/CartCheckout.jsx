import React from 'react'

const CartCheckout = () => {
    return (
        <div className='cartCheckout'>
            <table>
                <tr>
                    <td>total price</td>
                    <td>$ 123123</td>
                </tr>
                <button className="cart-checkout">check out</button>
            </table>
        </div>
    )
}

export default CartCheckout