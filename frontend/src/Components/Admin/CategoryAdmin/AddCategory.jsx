import React from 'react'
import CreateCategoryAdminHook from '../../../Hooks/Admin/Category/CreateCategoryAdminHook'
import { Button, Form, Modal } from 'react-bootstrap';

const AddCategory = () => {
    const [
        img,
        onImageChange,
        name,
        onNameChange,
        showCreateCat,
        handleCloseCreateCat,
        handleShowCreateCat,
        handleCreateCatSubmit
    ] = CreateCategoryAdminHook();

    return (
        <div className='productListHeading'>
            <h1>ALL CATEGORY</h1>
            <div className='btn' onClick={handleShowCreateCat}>Add Category</div>


            <Modal
                show={showCreateCat}
                onHide={handleCloseCreateCat}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">Add new category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group id="registerImage" className="mb-3 d-flex gap-3 align-items-center" controlId="exampleForm.ControlTextarea1">
                            <img src={img} alt="" />
                            <Form.Control
                                type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={onImageChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Enter the new category name"
                                autoFocus
                                value={name}
                                onChange={onNameChange}
                            />
                        </Form.Group>

                        <div className='d-flex gap-2 justify-content-end'>
                            <Button variant="secondary" onClick={handleCloseCreateCat}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleCreateCatSubmit}>
                            Save Changes
                            </Button>
                            
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddCategory