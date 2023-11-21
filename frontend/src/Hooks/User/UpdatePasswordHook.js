import { useDispatch, useSelector } from "react-redux"
import { clearErrors, updateProfilePassword } from "../../Redux/Actions/User/ProfileAction";
import { useEffect, useState } from "react";
import { UPDATE_PASSWORD_RESET } from "../../Redux/Types";
import { toast } from "react-toastify";

const UpdatePasswordHook = () => {
    const dispatch = useDispatch();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState('');

    const onChangeOldPassword = (e) => {
        setOldPassword(e.target.value);
    }
    const onChangeNewPassword = (e) => {
        setNewPassword(e.target.value);
    }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const validationValues = () => {
        if(oldPassword === '') {
            setErrors('Old password Required')
            return;
        }
        if(newPassword === '') {
            setErrors('New password Required')
            return;
        }
        if(confirmPassword === '') {
            setErrors('Confirm password Required')
            return;
        }
    }

    const updateProfilePasswordSubmit = (e) => {
        e.preventDefault();
        validationValues();

        const myForm = new FormData();
        myForm.append("oldPassword", oldPassword);
        myForm.append("newPassword", newPassword);
        myForm.append("confirmPassword", confirmPassword);

        dispatch(updateProfilePassword(myForm));
    }

    const { error, isUpdated } = useSelector((state) => state.ProfileReducer);

    useEffect(() => {
        if(error) {
            console.log(error)
            dispatch(clearErrors());
            if(error.data.message === "Old password is incorrect") {
                setErrors('Old password is incorrect')
            }
            if(error.data.message === "password does not match") {
                setErrors('Password does not match')
            }
        }

        if(isUpdated) {
            console.log(isUpdated)
            dispatch({
                type: UPDATE_PASSWORD_RESET
            });

            if(isUpdated.status === "success") {
                toast('Updated Password Successfully');
                setTimeout(() => {
                    setOldPassword("")
                    setNewPassword("")
                    setConfirmPassword("")
                }, 1000)
            }
        }
    }, [dispatch, error, isUpdated])

    return [
        oldPassword,
        onChangeOldPassword,
        newPassword,
        onChangeNewPassword,
        confirmPassword,
        onChangeConfirmPassword,
        updateProfilePasswordSubmit,
        errors
    ]
}

export default UpdatePasswordHook