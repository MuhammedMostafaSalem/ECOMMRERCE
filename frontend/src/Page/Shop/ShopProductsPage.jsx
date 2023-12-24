import React from 'react'
import './Shop.css'
import { Col, Row } from 'react-bootstrap';
import SideFilter from '../../Components/Utilities/SideFilter';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import Pagination from './../../Components/Utilities/Pagination/Pagination';
import ViewSearchProductsHook from '../../Hooks/Admin/Product/ViewSearchProductsHook';

const ShopProductsPage = () => {
const [items, pagination, onPress, getProducts] = ViewSearchProductsHook();

    return (
        <div style={{ minHeight: '593px'}}>
            <div className='divContainer'>
                <Row>
                    <Col lg='2' md='3' sm='4'>
                        <SideFilter />
                    </Col>
                    <Col lg='10' md='9' sm='8' className='sideProducts'>
                        <h4 className="productsHeading">products</h4>
                        <CardProductsContainer products={items} />
                        {
                            pagination > 1 ?
                                <Pagination pageCount={pagination} onPress={onPress} />
                            : null
                        }
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ShopProductsPage