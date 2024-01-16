import React from 'react'
import './Cart.css'
import CartItem from '../../Components/Cart/CartItem'
import CartCheckout from '../../Components/Cart/CartCheckout'
import GetAllCartHook from '../../Hooks/Cart/GetAllCartHook'
import Loader from '../../Components/Utilities/Loader/Loader'

const CartPage = () => {
    const [totalCartPrice, cartProducts, loading, numOfCartItems] = GetAllCartHook();
    
    return (
        <div className='cartPage divContainer mb-4' style={{minHeight: '272px'}}>
            {
                loading === false ?
                    numOfCartItems.numOfCartItems === 0 ?
                        <h4 className='text-center align-center'>No Product in Your Cart</h4>
                    :
                        <table>
                            <tr>
                                <th>product</th>
                                <th>quantity</th>
                                <th>subtotal</th>
                            </tr>
                            {
                                cartProducts.map((item, index) => (
                                    <CartItem prodItem={item} key={index} />
                                ))
                            }
                        </table>
                : <Loader />
            }
            {
                numOfCartItems.numOfCartItems === 0 ? null :
                <CartCheckout totalCartPrice={totalCartPrice} />
            }
        </div>
    )
}

export default CartPage