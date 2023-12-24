import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../Redux/Actions/Product/ProductAction';

const ViewHomeProductsHook = () => {
    const dispatch = useDispatch();

    const products = useSelector(state => state.ProductReducer.allProduct);

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    let itemsProduct = []
    try {
        if(products.data.data) {
            itemsProduct = products.data.data.slice(0, 8);
        }
        else {
            itemsProduct = []
        }
    } catch(e) {}

    return [itemsProduct]
}

export default ViewHomeProductsHook