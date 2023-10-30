import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../../Redux/Actions/Auth/ForgotPasswordAction";
import { toast } from "react-toastify";

const ResetpasswordHook = (token) => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState("");

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }


    const resetPasswordSubmit = async(e) => {
        e.preventDefault();

        await dispatch(resetPassword(token, {
            password,
            confirmPassword,
        }))
    }
    const { error, success } = useSelector((state) => state.ForgotPasswordReducer);

    useEffect(() => {
        if (error) {
            console.log(error);
            dispatch(clearErrors());

            if(error.data.message === "Password does not password") {
                setErrors('Password does not password');
            }
        }

        if (success) {
            // console.log(success);
            toast("Password Updated Successfully");
            setTimeout(() => {
                setPassword("")
                setConfirmPassword("")
            }, 1000)
            setTimeout(() => {
                window.location.pathname = "/login";
            }, 2000)
        }
    }, [error, success, dispatch])


    return [password, onChangePassword, confirmPassword, onChangeConfirmPassword, resetPasswordSubmit, errors]
}

export default ResetpasswordHook