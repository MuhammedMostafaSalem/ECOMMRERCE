import React, { useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import LoginHook from '../../Hooks/Auth/LoginHook';

const Login = ({loginTab}) => {
    const [email, onChangeEmail, password, onChangePassword, onSubmit, errors] = LoginHook();

    // for show and hide password
    const [showshowPass, setShowPass] = useState(false)
    const handleShowPass = () => {
        setShowPass(!showshowPass)
    }

    return (
        <div className="loginForm" ref={loginTab} onSubmit={onSubmit}>
            {errors && <p style={{color: "red", fontSize: "13px"}}>{errors}</p>}
            <div className="loginEmail">
                <MailOutlineIcon />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    value={email}
                    onChange={onChangeEmail}
                />
            </div>
            <div className="loginPassword">
                <LockOpenIcon />
                <input
                    type={showshowPass? "text": "password"}
                    placeholder="Password"
                    name="password"
                    required
                    value={password}
                    onChange={onChangePassword}
                />
                {
                    showshowPass ? <VisibilityOffIcon onClick={handleShowPass} className='iconShow' />
                    : <VisibilityIcon onClick={handleShowPass} className='iconShow' />
                }
            </div>
            <Link to="/password/forgot">Forget Password ?</Link>
            <input type="submit" value="Login" className="loginBtn" onClick={onSubmit} />
        </div>
    )
}

export default Login