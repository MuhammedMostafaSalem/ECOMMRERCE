import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { getAllCategories } from './../../../Redux/Actions/Category/CategoryAction';
import { toast } from "react-toastify";
import { createProduct } from "../../../Redux/Actions/Product/ProductAction";

const CreateProductsHook = () => {
    const dispatch = useDispatch();

    const [images, setImages] = useState({});
    const [prodName, setProdName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState(1);
    const [catID, setCatID] = useState('');
    //to show hide color picker
    const [showColor, setShowColor] = useState(false);
    //to store all pick color
    const [colors, setColors] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch])

    const categories = useSelector(state => state.CategoryReducer.allCategories);

    let catData = []
    try {
        if(categories.data.data) {
            catData = categories.data.data;
        }
        else {
            catData = []
        }
    } catch(e) {}

    
    const catOptions = catData.map(item => {
        return { value: item._id, label: item.name }
    });

    const onNameChange = (e) => {
        setProdName(e.target.value)
    }
    const onDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const onPriceChange = (e) => {
        setPrice(e.target.value)
    }
    const onQtyChange = (e) => {
        setQty(e.target.value)
    }
    const onCatIdChange = (e) => {
        setCatID(e.value)
    }
    const onColorChange = () => {
        setShowColor(!showColor)
    }

    //when choose new color
    const handelChangeComplete = (color) => {
        setColors([...colors, color.hex])
        setShowColor(!showColor)
    }
    const removeColor = (color) => {
        const newColor = colors.filter((e) => e !== color)
        setColors(newColor)
    }

    const validationValues = () => {
        if(images.length <= 0) {
            toast('Please enter product image')
            return;
        }
        if(prodName === '') {
            toast('Please enter product name')
            return;
        }
        if(description === '') {
            toast('Please enter product description')
            return;
        }
        if(price === '') {
            toast('Please enter product price')
            return;
        }
        if(qty === '') {
            toast('Please enter product quantity')
            return;
        }
        if(catID === '') {
            toast('Please enter product category')
            return;
        }
    }

    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }

    const handelSubmit = async (e) => {
        e.preventDefault();

        //convert base 64 image to file 
        const imgCover = dataURLtoFile(images[0], Math.random() + ".png")
        //convert array of base 64 image to file 
        const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                return dataURLtoFile(images[index], Math.random() + ".png")
            }
        )

        const formData = new FormData();
        formData.append('title', prodName);
        formData.append('description', description);
        formData.append('quantity', qty);
        formData.append('price', price);
        formData.append('imageCover', imgCover);
        formData.append('category', catID);
        itemImages.map((item) => formData.append("images", item));
        colors.map((color) => formData.append("availableColors", color))

        await dispatch(createProduct(formData));
        validationValues();
    }

    const product = useSelector(state => state.ProductReducer.newProduct);
    const loading = useSelector(state => state.ProductReducer.loading);

    useEffect(() => {
        if(loading === false) {
            if(product) {
                setImages({})
                setColors([])
                setProdName('')
                setDescription('')
                setPrice('')
                setQty('')
                setCatID('')
                if(product.status === 201) {
                    toast('Added product successfully');
                    setTimeout(() => {
                        handleClose();
                    }, 1000)
                }
            }
        }
    }, [loading])

    return [
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
    ]
}

export default CreateProductsHook