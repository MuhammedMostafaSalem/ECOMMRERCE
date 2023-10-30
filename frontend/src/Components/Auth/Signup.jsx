import React, { useState } from 'react'
import FaceIcon from '@mui/icons-material/Face';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RegisterHook from '../../Hooks/Auth/RegisterHook';

const Register = ({registerTab}) => {
    const [name, email, password, avatarPreview, registerSubmit, registerDataChange, errors] = RegisterHook();
    
    // for show and hide password
    const [showshowPass, setShowPass] = useState(false)
    const handleShowPass = () => {
        setShowPass(!showshowPass)
    }

    return (
        <div
            className="signUpForm"
            ref={registerTab}
            onSubmit={registerSubmit}
        >
            {errors && <p style={{color: "red", fontSize: "13px"}}>{errors}</p>}
            <div className="signUpName">
                <FaceIcon />
                <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                />
            </div>
            <div className="signUpEmail">
                <MailOutlineIcon />
                <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                />
            </div>
            <div className="signUpPassword">
                <LockOpenIcon />
                <input
                    type={showshowPass? "text": "password"}
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                />
                {
                    showshowPass ? <VisibilityOffIcon onClick={handleShowPass} className='iconShow' />
                    : <VisibilityIcon onClick={handleShowPass} className='iconShow' />
                }
            </div>
            <div id="registerImage">
                <img src={avatarPreview} alt="Avatar Preview" />
                <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                />
            </div>

            <input type="submit" value="Register" className="signUpBtn" onClick={registerSubmit} />
        </div>
    )
}

export default Register