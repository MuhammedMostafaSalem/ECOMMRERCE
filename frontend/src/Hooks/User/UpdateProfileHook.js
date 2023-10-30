import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import Profile from "../../images/Profile.png"
import { clearErrors, updateProfile } from "../../Redux/Actions/User/ProfileAction";

const UpdateProfileHook = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState(Profile);
    const [avatarPreview, setAvatarPreview] = useState(Profile);
    const [errors, setErrors] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
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
        if(avatar === Profile) {
            setErrors('Please enter your personal iamge')
            return;
        }
    }

    const updateProfileSubmit = (e) => {
        e.preventDefault();
        validationValues();

        const myForm = new FormData();
        myForm.append("name", name);
        myForm.append("email", email);
        myForm.append("avatar", avatar);

        dispatch(updateProfile(myForm));
    }

    const updateProfileDataChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        }

        reader.readAsDataURL(e.target.files[0]);
    }

    const { isUpdated, error } = useSelector((state) => state.ProfileReducer);
    // const { user } = useSelector((state) => state.AuthReducer);

    useEffect(() => {
        // if(user) {
        //     console.log(user)
        // }

        if (error) {
            console.log(error);
            dispatch(clearErrors());
        }

        if(isUpdated) {
            console.log(isUpdated)
        }
    }, [isUpdated, error, dispatch])
    
    return [name, onChangeName, email, onChangeEmail, updateProfileSubmit, updateProfileDataChange, avatarPreview, errors]
}

export default UpdateProfileHook