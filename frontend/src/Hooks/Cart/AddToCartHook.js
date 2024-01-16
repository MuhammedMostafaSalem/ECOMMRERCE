import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart } from './../../Redux/Actions/Cart/CartAction';
import { toast } from "react-toastify";

const AddToCartHook = (id, prodItem) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [indexColor, setIndexColor] = useState('');
    const [colorText, setColorText] = useState('');

    const increaseQuantity = () => {
        if(prodItem.quantity <= quantity) return;
        
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        setQuantity(quantity > 1 ? quantity - 1 : 1);
    }

    const colorClick = (index, color) => {
        setIndexColor(index)
        setColorText(color)
    }

    const addToCartHandler = async() => {
        await dispatch(addItemsToCart({
            productId: id,
            color: colorText,
            count: quantity
        }));
    }

    const res = useSelector(state => state.CartReducer.cartItems);
    const loading = useSelector(state => state.CartReducer.loading);

    let resMsg = []
    try {
        if(res.data.message) {
            resMsg = res.data.message;
        }
        else {
            resMsg = []
        }
    } catch(e) {}

    useEffect(() => {
        if(loading === false) {
            if(res) {
                if(resMsg === "Product added successfully to your cart") {
                    toast("Product added successfully to your cart");
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000)
                } else if(resMsg === "Json web Token is Invalid, Try again") {
                    toast("Please log in to add to cart");
                }
            }
        }
    }, [loading])

    return [
        quantity,
        increaseQuantity,
        decreaseQuantity,
        indexColor,
        colorClick,
        addToCartHandler
    ]
}

export default AddToCartHook