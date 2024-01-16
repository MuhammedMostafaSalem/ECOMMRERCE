import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllCart } from "../../Redux/Actions/Cart/CartAction";

const GetAllCartHook = () => {
    const dispatch = useDispatch();
    const allCart = useSelector(state => state.CartReducer.getAllCart);
    const loading = useSelector(state => state.CartReducer.loading);

    useEffect(() => {
        if(allCart) {
            dispatch(getAllCart())
        }
    }, [allCart])

    let cartProducts = []
    try {
        if(allCart.data.data.products) {
            cartProducts = allCart.data.data.products;
        }
        else {
            cartProducts = []
        }
    } catch(e) {}

    let numOfCartItems = []
    try {
        if(allCart.data) {
            numOfCartItems = allCart.data;
        }
        else {
            numOfCartItems = []
        }
    } catch(e) {}

    let totalCartPrice = []
    try {
        if(allCart.data.data.totalCartPrice) {
            totalCartPrice = allCart.data.data.totalCartPrice;
        }
        else {
            totalCartPrice = []
        }
    } catch(e) {}

    return [totalCartPrice, cartProducts, loading, numOfCartItems]
}

export default GetAllCartHook