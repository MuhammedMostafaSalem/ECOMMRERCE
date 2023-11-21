import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../../Redux/Actions/Admin/UsersAdminAction";

const GetOneUserHook = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneUser(id))
    }, [])

    const oneUser = useSelector(state => state.UsersAdminReducer.oneUser);

    let item = []
    try {
        if(oneUser.data.user) {
            item = oneUser.data.user;
        }
        else {
            item = []
        }
    } catch(e) {}

    return [item]
}

export default GetOneUserHook