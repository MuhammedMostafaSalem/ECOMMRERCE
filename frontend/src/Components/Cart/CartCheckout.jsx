import React from 'react'
import { useNavigate } from 'react-router-dom';

const CartCheckout = ({totalCartPrice}) => {
    const navigate = useNavigate();
    const checkOutHandler = () => {
        navigate("/shipping")
    }
    return (
        <div className='cartCheckout'>
            <table>
                <tr>
                    <td>total price</td>
                    <td>$ {totalCartPrice}</td>
                </tr>
                <button className="cart-checkout" onClick={checkOutHandler}>check out</button>
            </table>
        </div>
    )
}

export default CartCheckout