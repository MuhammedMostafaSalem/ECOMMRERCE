import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import Profile from "../../images/Profile.png"
import { clearErrors, updateProfile } from "../../Redux/Actions/User/ProfileAction";
import { useNavigate } from "react-router-dom";
import { UPDATE_PROFILE_RESET } from "../../Redux/Types";
import { loggedUser } from "../../Redux/Actions/Auth/AuthActions";
import { toast } from "react-toastify";

const UpdateProfileHook = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState(Profile);
    const [selectedFile, setSelectedFile] = useState(null)
    const [errors, setErrors] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
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
            setErrors('Please enter your new email')
            return;
        }
        // if(avatar === Profile) {
        //     setErrors('Please enter your personal iamge')
        //     return;
        // }
    }

    const updateProfileSubmit = (e) => {
        e.preventDefault();
        validationValues();

        const myForm = new FormData();
        myForm.append("name", name);
        myForm.append("email", email);
        myForm.append("avatar", selectedFile);

        dispatch(updateProfile(myForm));
    }

    // const updateProfileDataChange = (e) => {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         if (reader.readyState === 2) {
    //             setAvatarPreview(reader.result);
    //             setAvatar(reader.result);
    //         }
    //     }

    //     reader.readAsDataURL(e.target.files[0]);
    // }

    const { error, isUpdated, loading } = useSelector((state) => state.ProfileReducer);
    const { user } = useSelector((state) => state.AuthReducer);

    let userIn = []
    let userAvatar = []
    try {
        if(user.user) {
            userIn = user.user;
        }
        if(user.user.avatar) {
            userAvatar = user.user.avatar;
        }
        else {
            userIn = []
            userAvatar = []
        }
    } catch(e) {}

    useEffect(() => {
        if(user) {
        setName(userIn.name)
        setEmail(userIn.email)
        setAvatar(userAvatar)
        }
        if (error) {
            console.log(error);
            dispatch(clearErrors());
        }

        if(isUpdated) {
            console.log(isUpdated)
            toast('Updated profile successfully')
            dispatch(loggedUser())

            setTimeout(() => {
                setName('')
                setEmail('')
                setAvatar(Profile)
            }, 1000)

            setTimeout(() => {
                navigate('/account');
            }, 3000)

            dispatch({
                type: UPDATE_PROFILE_RESET,
            });
        }
    }, [isUpdated, error, dispatch, navigate, user])
    
    return [
        name,
        onChangeName,
        email,
        onChangeEmail,
        avatar,
        onImageChange,
        updateProfileSubmit,
        errors
    ]
}

export default UpdateProfileHook