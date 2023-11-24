import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../../../images/Profile.png";
import { createCategory } from "../../../Redux/Actions/Category/CategoryAction";
import { useEffect } from "react";
import { toast } from "react-toastify";

const CreateCategoryAdminHook = () => {
    const dispatch = useDispatch();

    const [img, setImg] = useState(Profile)
    const [name, setName] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const [showCreateCat, setShowCreateCat] = useState(false);

    const handleCloseCreateCat = () => setShowCreateCat(false);
    const handleShowCreateCat = () => {
        setShowCreateCat(true);
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
        if(name === '' || selectedFile === null ||img === Profile) {
            toast('Please enter your new data or close')
            return;
        }
    }

    const handleCreateCatSubmit = async (e) => {
        e.preventDefault();
        validationValues();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", selectedFile);

        await dispatch(createCategory(formData));
        handleCloseCreateCat();
    }

    const createCat = useSelector(state => state.CategoryReducer.createCategory);
    const loading = useSelector(state => state.CategoryReducer.loading);

    let createCatDate = []
    try {
        if(createCat.data) {
            createCatDate = createCat.data;
        }
        else {
            createCatDate = []
        }
    } catch(e) {}

    useEffect(() => {
        if(loading) {
            if(createCatDate) {
                console.log(createCatDate)
                if(createCatDate.status === "success") {
                    setImg(Profile)
                    setName('')
                    setSelectedFile(null)
                    toast('The category has been added successfully')
                }
            }
        }
    }, [loading])

    return [
        img,
        onImageChange,
        name,
        onNameChange,
        showCreateCat,
        handleCloseCreateCat,
        handleShowCreateCat,
        handleCreateCatSubmit
    ]
}

export default CreateCategoryAdminHook