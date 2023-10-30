import { useEffect, useState } from 'react';
import { clearErrors, register } from '../../Redux/Actions/Auth/AuthActions';
import Profile from '../../images/Profile.png'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const RegisterHook = () => {
    const dispatch = useDispatch();
    const [userDate, setUserDate] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = userDate;
    const [avatar, setAvatar] = useState(Profile);
    const [avatarPreview, setAvatarPreview] = useState(Profile);
    const [errors, setErrors] = useState('');

    const validationValues = () => {
        if(name === '') {
            setErrors('Name Required')
            return;
        }
        if(email === '') {
            setErrors('Please enter your email')
            return;
        }
        if(password === '') {
            setErrors('Password Required')
            return;
        }
        if(avatar === Profile) {
            setErrors('Please enter your personal iamge')
            return;
        }
    }
    const registerSubmit = (e) => {
        e.preventDefault();
        validationValues()
    
        const myForm = new FormData();
    
        myForm.append("name", name);
        myForm.append("email", email);
        myForm.append("password", password);
        myForm.append("avatar", avatar);
        dispatch(register(myForm));
    };

    const registerDataChange = (e) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();
    
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            };

            reader.readAsDataURL(e.target.files[0]);
        } else {
            setUserDate({ ...userDate, [e.target.name]: e.target.value });
        }
    };

    const { error, user } = useSelector((state) => state.AuthReducer);

    useEffect(() => {
        if (error) {
            // console.log(error);
            dispatch(clearErrors());
            // When the same user data is entered again
            if(error.data){
                if(error.data.message === "User validation failed: name: Name should have more than 4 characters") {
                    setErrors('Name should have more than 4 characters')
                }
                if(error.data.message === "User validation failed: email: Please Enter a valid Email") {
                    setErrors('Email should be like: example@gmail.com')
                }
                if(error.data.message === "User validation failed: password: Password should be greater than 8 characters") {
                    setErrors('Password must be greater than or equal to 8 characters')
                }
            }
        }


        if(user) {
            // console.log(user)
            // When user data is entered for the first time
            if(user.status === 'success') {
                // localStorage.setItem('token', user.token);
                toast('Register Successfully');
                setTimeout(() => {
                    setUserDate({
                        name: "",
                        email: "",
                        password: "",
                    })
                    setAvatarPreview(Profile)
                }, 3000)
            }
        }
    }, [user, error, dispatch])

    return [name, email, password, avatarPreview, registerSubmit, registerDataChange, errors]
}

export default RegisterHook