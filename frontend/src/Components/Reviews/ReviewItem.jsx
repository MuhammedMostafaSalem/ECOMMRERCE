import React from 'react'
import { FaRegStar, FaStar } from "react-icons/fa6";
import { Button, Card, Modal } from 'react-bootstrap';
import { TiTimes } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
import EditReviewHook from '../../Hooks/Review/EditReviewHook';
import Rating from 'react-rating';
import DeleteReviewHook from '../../Hooks/Review/DeleteReviewHook';

const ReviewItem = ({avatar, userName, rating, review, id}) => {
    const [
        ID,
        editReview,
        onChangeReview,
        editRating,
        onChangeRating,
        showEdit,
        handleCloseEdit,
        handleShowEdit,
        onSubmitEdit
    ] = EditReviewHook();
    const [
        idDelete,
        showDelete,
        handleCloseDelete,
        handleShowDelete,
        onSubmitDelete
    ] = DeleteReviewHook();

    return (
        <Card className="reviewItem">
            <Modal
                show={showEdit} 
                onHide={handleCloseEdit}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title>Edit Review ID: {ID}</Modal.Title>
                </Modal.Header>
                <Modal.Body id="contained-modal-title-vcenter">
                    <div className="mb-3 d-flex flex-column">
                        <label>Rating</label>
                        <Rating
                            emptySymbol={<FaRegStar />}
                            fullSymbol={<FaStar />}
                            fractions={2}
                            className='fs-5 text-warning'
                            initialRating={editRating}
                            onChange={onChangeRating}
                        />
                    </div>
                    <div
                        className="mb-3"
                    >
                        <label>Review</label>
                        <textarea value={editReview} onChange={onChangeReview} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                    </div>
                </Modal.Body>
                <div className="btn product-cart-add mx-3 mb-3" onClick={() => onSubmitEdit(ID)}>Edit</div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showDelete} 
                onHide={handleCloseDelete}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body id="contained-modal-title-vcenter">
                    <h3>
                    Are you sure you want to delete this ID ({idDelete})?
                    </h3>
                </Modal.Body>
                <div className="btn product-cart-add mx-3 mb-3" onClick={() => onSubmitDelete(idDelete)}>Delete</div>
            </Modal>


    
            <img variant="top" src={avatar} alt='' />
            <p>{userName}</p>
            <div className='rating'>
                <FaStar className='text-warning' />
                <div>{rating}</div>
            </div>
            <span className="reviewItemComment">{review}</span>
            <div className='icons'>
                <MdEdit onClick={() => handleShowEdit(id, rating, review)} />
                <TiTimes onClick={() => handleShowDelete(id)} />
            </div>
        </Card>
    )
}

export default ReviewItem