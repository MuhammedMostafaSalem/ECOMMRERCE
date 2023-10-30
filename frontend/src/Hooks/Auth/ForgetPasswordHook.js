
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, forgotPassword } from '../../Redux/Actions/Auth/ForgotPasswordAction';
import { toast } from 'react-toastify';
const ForgetPasswordHook = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const forgotPasswordSubmit = async(e) => {
        e.preventDefault();

        await dispatch(forgotPassword({
            email,
        }))
    }

    const { error, message } = useSelector((state) => state.ForgotPasswordReducer);

    useEffect(() => {
        if (error) {
            // console.log(error);
            dispatch(clearErrors());

            if(error.data.message === "User not found") {
                setErrors('User not found');
            }
        }
        if (message) {
            // console.log(message);
            toast(`${message.message}`)
        }
    }, [error, message, dispatch])


    return [email, onChangeEmail, errors, forgotPasswordSubmit]
}

export default ForgetPasswordHook