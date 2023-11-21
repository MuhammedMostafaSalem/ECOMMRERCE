import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../Redux/Actions/Admin/UsersAdminAction";

const GetAllUsersAdminHook = () => {
    const dispatch = useDispatch();

    const allUsers = useSelector((state) => state.UsersAdminReducer.allUsers);
    const loading = useSelector((state) => state.UsersAdminReducer.loading);
    
    useEffect(() => {
        if(allUsers) {
            dispatch(getAllUsers())
        }
    }, [allUsers])

    let itemsUsers = []
    try {
        if(allUsers.data.users) {
            itemsUsers = allUsers.data.users;
        }
        else {
            itemsUsers = []
        }
    } catch(e) {}

    return [itemsUsers, loading]
}

export default GetAllUsersAdminHook