import { useEffect, useState } from 'react';
import { clearErrors, register } from '../../Redux/Actions/Auth/AuthActions';
import Profile from '../../images/Profile.png'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Cookie from 'cookie-universal'

const RegisterHook = () => {
    const cookies = Cookie()
    const dispatch = useDispatch();
    // const [userDate, setUserDate] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    // });
    // const { name, email, password } = userDate;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState(Profile);
    // const [avatarPreview, setAvatarPreview] = useState(Profile);
    const [selectedFile, setSelectedFile] = useState(null)
    const [errors, setErrors] = useState('');

    // when name, email & password change save it
    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    // when image change save it
    const onImageChange = (e) => {
        if(e.target.files && e.target.files[0]) {
            setAvatar(URL.createObjectURL(e.target.files[0]))
            setSelectedFile(e.target.files[0])
        }
    }

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
        myForm.append("avatar", selectedFile);
        dispatch(register(myForm));
    };

    // const registerDataChange = (e) => {
    //     if (e.target.name === "avatar") {
    //         const reader = new FileReader();
    
    //         reader.onload = () => {
    //             if (reader.readyState === 2) {
    //                 setAvatarPreview(reader.result);
    //                 setAvatar(reader.result);
    //             }
    //         };

    //         reader.readAsDataURL(e.target.files[0]);
    //     } else {
    //         setUserDate({ ...userDate, [e.target.name]: e.target.value });
    //     }
    // };

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
                cookies.set('token', user.token, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 5,
                });
                // localStorage.setItem('token', user.token);
                toast('Register Successfully');
                setTimeout(() => {
                    // setUserDate({
                    //     name: "",
                    //     email: "",
                    //     password: "",
                    // })
                    // setAvatarPreview(Profile)
                    setName("")
                    setEmail("")
                    setPassword("")
                    setAvatar(Profile)
                }, 3000)
            }
        }
    }, [user, error, dispatch])

    // return [name, email, password, avatarPreview, registerSubmit, registerDataChange, errors]
    return [
        name,
        onNameChange,
        email,
        onEmailChange,
        password,
        onPasswordChange,
        avatar,
        onImageChange,
        registerSubmit,
        errors
    ]
}

export default RegisterHook