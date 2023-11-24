import React from 'react'
import CreateSubcategoryhook from '../../../Hooks/Admin/Subcategory/CreateSubcategoryhook'
import { Button, Form, Modal } from 'react-bootstrap';

const AddSubcategory = () => {
    const [
        subCatName,
        onChangeName,
        catId,
        onCatIdChange,
        catData,
        handelSubmit,
        showCreateSubcat,
        handleCloseCreateSubcat,
        handleShowCreateSubcat
    ] = CreateSubcategoryhook();

    return (
        <div className='productListHeading'>
            <h1>ALL SUBCATEGORY</h1>
            <div className='btn' onClick={handleShowCreateSubcat}>Add Subcategory</div>


            
            <Modal
                show={showCreateSubcat}
                onHide={handleCloseCreateSubcat}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">Add new subcategory</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Enter the new category name"
                                autoFocus
                                value={subCatName}
                                onChange={onChangeName}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Select aria-label="Default select example" onChange={onCatIdChange}>
                                <option value="0">Choose the subcategory name</option>
                                {
                                    catData ?
                                        catData.map((item) => {
                                            return (
                                                <option key={item._id} value={catId ? item._id : catId}>{item.name}</option>
                                            )
                                        })
                                    : null
                                }
                            </Form.Select>
                        </Form.Group>

                        <div className='d-flex gap-2 justify-content-end'>
                            <Button variant="secondary" onClick={handleCloseCreateSubcat}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handelSubmit}>
                            Save Changes
                            </Button>
                            
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddSubcategory