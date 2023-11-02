
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearErrors, loginUser } from '../../Redux/Actions/Auth/AuthActions';
import { useNavigate } from 'react-router-dom';
import Cookie from 'cookie-universal'

const LoginHook = () => {
    const cookies = Cookie()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const validationValues = () => {
        if(email === "") {
            setErrors("Please enter your email");
            toast("Please enter your email");
            return;
        }
        if(password === "") {
            setErrors("Please enter your password");
            return;
        }
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        validationValues();
        await dispatch(loginUser({
            email,
            password
        }));
    }

    const { error, user } = useSelector((state) => state.AuthReducer);

    useEffect(() => {
        if (error) {
            // console.log(error);
            dispatch(clearErrors());

            // When the same user data is entered again
            if(error.data) {
                if(error.data.message === "Invalid email") {
                    setErrors('Invalid email')
                }
                if(error.data.message === "Invalid password") {
                    setErrors("Invalid password")
                }
            }
        }
        if(user) {
            // console.log(user)
            if(user.data) {
                cookies.set('token', user.data.token)
                // localStorage.setItem('token', user.data.token)
                // localStorage.setItem('user', JSON.stringify(user.data.user))
                toast('Logged successfully')
                setTimeout(() => {
                    setEmail("")
                    setPassword("")
                }, 1000)
                setTimeout(() => {
                    // window.location.pathname = '/'
                    navigate('/')
                }, 2000);
            }
        }
    }, [error, user, dispatch, navigate])

    return [email, onChangeEmail, password, onChangePassword, onSubmit, errors]
}

export default LoginHook