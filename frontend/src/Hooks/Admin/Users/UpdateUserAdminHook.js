import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserRole } from "../../../Redux/Actions/Admin/UsersAdminAction";
import { toast } from "react-toastify";

const UpdateUserAdminHook = () => {
    const dispatch = useDispatch();
    const [role, setRole] = useState("");
    const [showEditRole, setShowEditRole] = useState(false);

    const handleCloseEditRole = () => setShowEditRole(false);
    const handleShowEditRole = (id) => {
        console.log(id)
        setShowEditRole(true);
    }
    const onChangeRole = (e) => {
        setRole(e.target.value);
    }
    // const updateUserAdmin = useSelector((state) => state.UsersAdminReducer.updateUserRole);

    const updateUserRoleHandler = async(id) => {
        await dispatch(updateUserRole(id, {
            role,
        }));
        toast('User Updated Successfully');
        handleCloseEditRole();
    };

    return [role, onChangeRole, updateUserRoleHandler, showEditRole, handleCloseEditRole, handleShowEditRole]
}

export default UpdateUserAdminHook