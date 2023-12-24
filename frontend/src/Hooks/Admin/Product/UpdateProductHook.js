import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../Redux/Actions/Category/CategoryAction";
import { updateProduct } from "../../../Redux/Actions/Product/ProductAction";
import { toast } from "react-toastify";

const UpdateProductHook = () => {
    const dispatch = useDispatch();

    const [ID, setID] = useState('')
    const [images, setImages] = useState([]);
    const [prodName, setProdName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState(1);
    const [catID, setCatID] = useState('');
    //to show hide color picker
    const [showColor, setShowColor] = useState(false);
    //to store all pick color
    const [colors, setColors] = useState([]);
    const [showEditProduct, setShowEditProduct] = useState(false);

    const handleCloseEditProduct = () => setShowEditProduct(false);
    const handleShowEditProduct = (id, nameProd, imgProd, des, Price, qty, cat, color) => {
        setID(id)
        setProdName(nameProd)
        setImages(imgProd)
        setDescription(des)
        setPrice(Price)
        setQty(qty)
        setCatID(cat)
        setColors(color)
        setShowEditProduct(true);
    }

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

    //convert url to file
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

    // convert url to file
    const convertURLtoFile = async(url) => {
        const response = await fetch(url, {mode: "cors"});
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = { type: `image/${ext}` };
        return new File([data], Math.random(), metadata)
    }

    const handelSubmit = async (idProd) => {
        //convert base 64 image to file 
        let imgCover;
        if(images[0].length <= 1000) {
            convertURLtoFile(images[0]).then(val => imgCover = val)
        } else {
            imgCover = dataURLtoFile(images[0], Math.random() + ".png")
        }
        let itemImages = []
        //convert array of base 64 image to file 
        Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                if (images[index].length <= 1000) {
                    convertURLtoFile(images[index]).then(val => itemImages.push(val))
                }
                else {
                    itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"))
                }
            }
        )

        const formData = new FormData();
        formData.append('title', prodName);
        formData.append('description', description);
        formData.append('quantity', qty);
        formData.append('price', price);
        formData.append('category', catID);
        setTimeout(() => {
            formData.append('imageCover', imgCover);
            itemImages.map((item) => formData.append("images", item));
        }, 1000)
        colors.map((color) => formData.append("availableColors", color))

        setTimeout(async() => {
            await dispatch(updateProduct(idProd, formData))
            toast('Updated Product ID Successfully');
            handleCloseEditProduct();
        }, 1000)
    }

    return [
        showEditProduct,
        handleCloseEditProduct,
        handleShowEditProduct,
        ID,
        images,
        setImages,
        prodName,
        onNameChange,
        description,
        onDescriptionChange,
        price,
        onPriceChange,
        qty,
        onQtyChange,
        catID,
        onCatIdChange,
        catOptions,
        catData,
        handelSubmit,
        showColor,
        colors,
        onColorChange,
        handelChangeComplete,
        removeColor
    ]
}

export default UpdateProductHook