import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSubcategory } from "../../../Redux/Actions/Subcategory/SubcategoryAction";
import { toast } from "react-toastify";

const UpdateSubcategoryHook = () => {
    const dispatch = useDispatch();

    const [IdSubcat, setIdSubcat] = useState('');
    const [name, setName] = useState('');
    const [showEditSubcat, setShowEditSubcat] = useState(false);

    const handleCloseEditSubcat = () => setShowEditSubcat(false);
    const handleShowEditSubcat = (id, name) => {
        setIdSubcat(id)
        setName(name)
        setShowEditSubcat(true);
    }

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const validationValues = () => {
        if(name === '') {
            toast('Please enter your new subcategory name')
            return;
        }
    }

    const handleEditSubmit = async (idSubcat) => {
        validationValues();

        await dispatch(updateSubcategory(idSubcat, {
            name
        }))
        handleCloseEditSubcat();
        setName('')
        toast('Updated Subcategory ID Successfully');
    }

    return [
        IdSubcat,
        name,
        onNameChange,
        handleEditSubmit,
        showEditSubcat,
        handleCloseEditSubcat,
        handleShowEditSubcat,
    ]
}

export default UpdateSubcategoryHook