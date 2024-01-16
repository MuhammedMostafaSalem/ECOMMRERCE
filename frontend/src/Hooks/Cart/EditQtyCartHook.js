import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../../Redux/Actions/Cart/CartAction";

const EditQtyCartHook = (prodItem, prodCount, prodQty) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(prodCount);

    const onChangeCount = (e) => {
        const inputValue = parseInt(e.target.value, 10);

        if (!isNaN(inputValue)) {
            if (inputValue >= 1 && inputValue <= prodQty) {
                setQuantity(inputValue);
            } else {
                setQuantity(inputValue < 1 ? 1 : prodQty);
            }
        }
    }

    const handleUpdateQuantity = async() => {
        await dispatch(updateQuantity(prodItem._id, {
            count: quantity
        }));
    };

    return [
        quantity,
        handleUpdateQuantity,
        onChangeCount
    ]
}

export default EditQtyCartHook