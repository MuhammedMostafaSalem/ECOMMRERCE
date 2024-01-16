import React from 'react'
import DeleteOneCartHook from '../../Hooks/Cart/DeleteOneCartHook';
import { Button, Modal } from 'react-bootstrap';
import EditQtyCartHook from '../../Hooks/Cart/EditQtyCartHook';

const CartItem = ({prodItem}) => {
    let prodCount = prodItem.count;
    let prodQty = prodItem.product.quantity;
    const [
        quantity,
        handleUpdateQuantity,
        onChangeCount
    ] = EditQtyCartHook(prodItem, prodCount, prodQty);
    const [
        idOneDelete,
        showDeleteOneCart,
        handleCloseDeleteOneCart,
        handleShowDeleteOneCart,
        deleteOneCartHandler
    ] = DeleteOneCartHook();

    return (
        <tr>
            <Modal show={showDeleteOneCart} onHide={handleCloseDeleteOneCart}>
                <Modal.Body>
                    <h3>
                    Are you sure you want to delete this cart ID ({idOneDelete})?
                    </h3>
                </Modal.Body>
                <Modal.Footer style={{borderTop: "none"}}>
                    <Button variant="danger" onClick={handleCloseDeleteOneCart}>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={() => deleteOneCartHandler(idOneDelete)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <td>
                <div className='cartInfo'>
                    <img src={prodItem.product.imageCover} alt="" />
                    <div>
                        <p>{prodItem.product.title}</p>
                        <span>Price: ${prodItem.product.price}</span>
                        {
                            prodItem.color === '' ? null :
                            <div
                                className="color border"
                                style={{ backgroundColor: prodItem.color }}
                            ></div>
                        }
                        <div className='cartRemove' onClick={() => handleShowDeleteOneCart(prodItem._id)}>remove</div>
                    </div>
                </div>
            </td>
            <td className='cartQTY'>
                <input
                    type="number"
                    value={quantity}
                    onChange={onChangeCount}
                    style={{ width: "40px", height: "25px" }}
                />
                <div onClick={handleUpdateQuantity} style={{padding: "0.2px 5px"}} className='btn btn-dark'>add</div>
            </td>
            <td>$ {prodItem.price}</td>
        </tr>
    )
}

export default CartItem