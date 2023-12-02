import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import MultiImageInput from 'react-multiple-image-input';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import CreateProductsHook from './../../../Hooks/Admin/Product/CreateProductsHook';
import { IoMdAddCircleOutline } from "react-icons/io";
import { CompactPicker } from 'react-color';

const AddProduct = () => {
    const [
        show,
        handleClose,
        handleShow,
        catID,
        onCatIdChange,
        catOptions,
        prodName,
        onNameChange,
        description,
        onDescriptionChange,
        price,
        onPriceChange,
        qty,
        onQtyChange,
        images,
        setImages,
        handelSubmit,
        showColor,
        colors,
        onColorChange,
        handelChangeComplete,
        removeColor,
    ] = CreateProductsHook();


    const animatedComponents = makeAnimated();

    return (
        <div className='productListHeading'>
            <h1>ALL PRODUCTS</h1>
            <div className='btn' onClick={handleShow}>Add Products</div>



            <Modal className='modalAddProd' show={show} onHide={handleClose} size='lg'>
                <Modal.Header>
                    <Modal.Title>Add new product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='multiImages'>
                        <MultiImageInput
                            images={images}
                            setImages={setImages}
                            theme="light"
                            allowCrop={false}
                            cropConfig={{ maxHeight: 800 }}
                            max={5}
                        />
                        <Form.Control
                            type="text"
                            placeholder="Product name"
                            value={prodName}
                            onChange={onNameChange}
                        />
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Product description"
                            value={description}
                            onChange={onDescriptionChange}
                            />
                        <Form.Control
                            type="number"
                            placeholder="Product price"
                            value={price}
                            onChange={onPriceChange}
                            />
                        <Form.Control
                            type="number"
                            placeholder="Product quantity"
                            value={qty}
                            onChange={onQtyChange}
                        />
                        <Select
                            name="category"
                            // value={catID}
                            onChange={onCatIdChange}
                            options={catOptions}
                            className="basic-single"
                            classNamePrefix="select"
                            placeholder="Product category"
                            components={animatedComponents}
                        />
                        <div className="text-form ms-1">Product Color</div>
                        <div className="d-flex">
                            {
                                colors.length >= 1 ?
                                    colors.map((item, index) => (
                                        <div
                                            key={index}
                                            onClick={() => removeColor(item)}
                                            className="color ms-2 mt-1"
                                            style={{ backgroundColor: item }} >
                                        </div>
                                    ))
                                : null
                            }
                            <IoMdAddCircleOutline className='AddProdColor' onClick={onColorChange} />
                            {
                                showColor === true ?
                                    <CompactPicker onChangeComplete={handelChangeComplete} />
                                : null
                            }
                        </div>
                        <div className='d-flex gap-2 justify-content-end'>
                            <Button variant="secondary" onClick={handleClose}>
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

export default AddProduct