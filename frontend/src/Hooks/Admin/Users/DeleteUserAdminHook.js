import { useDispatch } from "react-redux";
import { deleteUserAdmin } from "../../../Redux/Actions/Admin/UsersAdminAction";
import { toast } from "react-toastify";
import { useState } from "react";

const DeleteUserAdminHook = () => {
    const dispatch = useDispatch();
    const [showDeleteUser, setShowDeleteUser] = useState(false);

    const handleCloseDeleteUser = () => setShowDeleteUser(false);
    const handleShowDeleteUser = (id) => {
        console.log(id)
        setShowDeleteUser(true);
    }

    // const deleteUser = useSelector((state) => state.UsersAdminReducer.deleteUser);

    const deleteUserHandler = async (id) => {
        await dispatch(deleteUserAdmin(id))
        toast('User Deleted Successfully');
        handleCloseDeleteUser();
    }

    return [deleteUserHandler, showDeleteUser, handleCloseDeleteUser, handleShowDeleteUser]
}

export default DeleteUserAdminHook