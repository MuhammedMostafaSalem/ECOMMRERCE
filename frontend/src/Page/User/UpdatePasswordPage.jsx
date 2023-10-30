import React, { useState } from 'react'
import './User.css'
import '../Auth/Auth.css'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const UpdatePasswordPage = () => {
    // for show and hide password
    const [showshowPass, setShowPass] = useState(false)
    const handleShowPass = () => {
        setShowPass(!showshowPass)
    }

    return (
        <div className='LoginSignUpContainer'>
            <div className='LoginSignUpBox'>
                <form className="loginForm">
                    <h2 className="updateProfileHeading" style={{fontSize: '1.1rem', fontWeight: '500'}}>Update Profile</h2>
                    <div className="loginEmail">
                        <VpnKeyIcon />
                        <input
                            type="email"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="loginPassword">
                        <LockOpenIcon />
                        <input
                            type={showshowPass? "text": "password"}
                            placeholder="Old Password"
                            required
                        />
                        {
                            showshowPass ? <VisibilityOffIcon onClick={handleShowPass} className='iconShow' />
                            : <VisibilityIcon onClick={handleShowPass} className='iconShow' />
                        }
                    </div>
                    <div className="loginPassword">
                        <LockIcon />
                        <input
                            type={showshowPass? "text": "password"}
                            placeholder="New Password"
                            required
                        />
                        {
                            showshowPass ? <VisibilityOffIcon onClick={handleShowPass} className='iconShow' />
                            : <VisibilityIcon onClick={handleShowPass} className='iconShow' />
                        }
                    </div>
                    <input
                        type="submit"
                        value="Change"
                        className="updateProfileBtn"
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