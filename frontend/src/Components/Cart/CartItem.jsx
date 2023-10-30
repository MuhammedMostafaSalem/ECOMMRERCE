import React from 'react'

const CartItem = () => {
    return (
        <tr>
            <td>
                <div className='cartInfo'>
                    <img src='https://picsum.photos/id/1018/1000/600/' alt="" />
                    <div>
                        <p>product name</p>
                        <span>Price: $123</span>
                        <div className='cartRemove'>remove</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="cartInput">
                    <button>
                    -
                    </button>
                    <span>1</span>
                    <button>
                    +
                    </button>
                </div>
            </td>
            <td>$ 150</td>
        </tr>
    )
}

export default CartItem