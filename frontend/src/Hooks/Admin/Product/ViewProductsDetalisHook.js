import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../../Redux/Actions/Product/ProductAction";
import { getOneCategory } from "../../../Redux/Actions/Category/CategoryAction";
import prodimg from "../../../images/prod1.png"

const ViewProductsDetalisHook = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneProduct(id))
    }, [])

    const oneProduct = useSelector(state => state.ProductReducer.getOneProduct);
    const oneCategory = useSelector(state => state.CategoryReducer.getOneCategory);

    // to show product item
    let prodItem = []
    try {
        if(oneProduct.data.data) {
            prodItem = oneProduct.data.data;
        }
        else {
            prodItem = []
        }
    } catch(e) {}

    useEffect(() => {
        if(prodItem.category) {
            dispatch(getOneCategory(prodItem.category))
        }
    }, [prodItem])

    // to view images gallery
    let images = []
    if(prodItem.images) {
        images = prodItem.images.map((img) => {
            return {original: img}
        })
    }
    else {
        images = [
            {
                original: `${prodimg}`,
            },
        ]
    }

        // to show cat item
        let cat = []
        try {
            if(oneCategory.data.data) {
                cat = oneCategory.data.data;
            }
            else {
                cat = []
            }
        } catch(e) {}

    return [prodItem, images, cat]
}

export default ViewProductsDetalisHook