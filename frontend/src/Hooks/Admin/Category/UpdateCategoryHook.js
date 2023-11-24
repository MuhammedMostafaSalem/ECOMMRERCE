import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateCategory } from "../../../Redux/Actions/Category/CategoryAction";

const UpdateCategoryHook = () => {
    const dispatch = useDispatch();

    const [ID, setID] = useState('')
    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const [showEditcategory, setShowEditcategory] = useState(false);

    const handleCloseEditCategory = () => setShowEditcategory(false);
    const handleShowEditCategory = (id, nameCat, imgCat) => {
        setID(id)
        setName(nameCat)
        setImg(imgCat)
        setShowEditcategory(true);
    }

    const onImageChange = (e) => {
        if(e.target.files && e.target.files[0]) {
            setImg(URL.createObjectURL(e.target.files[0]))
            setSelectedFile(e.target.files[0])
        }
    }

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const validationValues = () => {
        if(name === '' || img === '') {
            toast('Please enter your new data or close')
            return;
        }
    }

    const handleEditSubmit = async (idCat) => {
        validationValues();

        await dispatch(updateCategory(idCat, {
            name,
            image: selectedFile
        }))
        toast('Updated Category ID Successfully');
        handleCloseEditCategory();
    }

    return [
        ID,
        img,
        onImageChange,
        name,
        onNameChange,
        showEditcategory,
        handleCloseEditCategory,
        handleShowEditCategory,
        handleEditSubmit
    ]
}

export default UpdateCategoryHook