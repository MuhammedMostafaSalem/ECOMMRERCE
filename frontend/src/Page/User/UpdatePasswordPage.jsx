import React, { useState } from 'react'
import './User.css'
import '../Auth/Auth.css'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import UpdatePasswordHook from '../../Hooks/User/UpdatePasswordHook';

const UpdatePasswordPage = () => {
    const [
        oldPassword,
        onChangeOldPassword,
        newPassword,
        onChangeNewPassword,
        confirmPassword,
        onChangeConfirmPassword,
        updateProfilePasswordSubmit,
        errors
    ] = UpdatePasswordHook();
    // for show and hide password
    const [showPass1, setShowPass1] = useState(false)
    const [showPass2, setShowPass2] = useState(false)
    const [showPass3, setShowPass3] = useState(false)
    const handleShowPass1 = () => {
        setShowPass1(!showPass1)
    }
    const handleShowPass2 = () => {
        setShowPass2(!showPass2)
    }
    const handleShowPass3 = () => {
        setShowPass3(!showPass3)
    }

    return (
        <div className='LoginSignUpContainer'>
            <div className='LoginSignUpBox'>
                <form className="loginForm" onSubmit={updateProfilePasswordSubmit}>
                    {errors && <p style={{color: "red", fontSize: "13px"}}>{errors}</p>}
                    <h2 className="updateProfileHeading" style={{fontSize: '1.1rem', fontWeight: '500'}}>Update Profile</h2>
                    <div className="loginEmail">
                        <VpnKeyIcon />
                        <input
                            type={showPass1? "text": "password"}
                            placeholder="Old Password"
                            required
                            value={oldPassword}
                            onChange={onChangeOldPassword}
                        />
                        {
                            showPass1 ? <VisibilityOffIcon onClick={handleShowPass1} className='iconShow' />
                            : <VisibilityIcon onClick={handleShowPass1} className='iconShow' />
                        }
                    </div>
                    <div className="loginPassword">
                        <LockOpenIcon />
                        <input
                            type={showPass2? "text": "password"}
                            placeholder="New Password"
                            required
                            value={newPassword}
                            onChange={onChangeNewPassword}
                        />
                        {
                            showPass2 ? <VisibilityOffIcon onClick={handleShowPass2} className='iconShow' />
                            : <VisibilityIcon onClick={handleShowPass2} className='iconShow' />
                        }
                    </div>
                    <div className="loginPassword">
                        <LockIcon />
                        <input
                            type={showPass3? "text": "password"}
                            placeholder="Confirm Password"
                            required
                            value={confirmPassword}
                            onChange={onChangeConfirmPassword}
                        />
                        {
                            showPass3 ? <VisibilityOffIcon onClick={handleShowPass3} className='iconShow' />
                            : <VisibilityIcon onClick={handleShowPass3} className='iconShow' />
                        }
                    </div>
                    <input
                        type="submit"
                        value="Change"
                        className="updateProfileBtn"
                        onClick={updateProfilePasswordSubmit}
                    />
                </form>
            </div>
        </div>
        )
    }
    <div className='divContainer'>
        <div className="updateProfileContainer">
            <div className="updateProfileBox">
                <h2 className="updateProfileHeading">Update Profile</h2>
                {

                    // <form className="updateProfileForm">
                    //     <div className="updateProfileName">
                    //         <VpnKeyIcon />
                    //         <input
                    //             type="text"
                    //             placeholder="Name"
                    //             required
                    //             name="name"
                    //         />
                    //     </div>
                    //     <div className="updateProfileEmail">
                    //         <LockOpenIcon />
                    //         <input
                    //             type={showshowPass? "text": "password"}
                    //             placeholder="Old Password"
                    //             required
                    //             name="email"
                    //         />
                    //         {
                    //             showshowPass ? <VisibilityOffIcon onClick={handleShowPass} className='iconShow' />
                    //             : <VisibilityIcon onClick={handleShowPass} className='iconShow' />
                    //         }
                    //     </div>
                    //     <div className="updateProfileEmail">
                    //         <LockIcon />
                    //         <input
                    //             type="email"
                    //             placeholder="Email"
                    //             required
                    //             name="email"
                    //         />
                    //     </div>

                    //     <input
                    //         type="submit"
                    //         value="Change"
                    //         className="updateProfileBtn"
                    //     />
                    // </form>
                }
            </div>
        </div>
    </div>

export default UpdatePasswordPage