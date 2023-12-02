import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../Redux/Actions/Product/ProductAction";

const GetAllProductsHook = () => {
    const dispatch = useDispatch();

    const products = useSelector(state => state.ProductReducer.allProduct);
    const loading = useSelector(state => state.ProductReducer.loading);

    useEffect(() => {
        if(products) {
            dispatch(getAllProducts())
        }
    }, [products])

    let itemsProduct = []
    try {
        if(products.data.data) {
            itemsProduct = products.data.data;
        }
        else {
            itemsProduct = []
        }
    } catch(e) {}

    return [itemsProduct, loading]
}

export default GetAllProductsHook