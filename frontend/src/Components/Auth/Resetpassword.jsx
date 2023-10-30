import React, { useState } from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, useParams } from 'react-router-dom';
import ResetpasswordHook from '../../Hooks/Auth/ResetpasswordHook';

const Resetpassword = ({match}) => {
    let { token } = useParams();
    const [password, onChangePassword, confirmPassword, onChangeConfirmPassword, resetPasswordSubmit, errors] = ResetpasswordHook(token);

    // for show and hide password
    const [showPass, setShowPass] = useState(false)
    const handleShowPass = () => {
        setShowPass(!showPass)
    }
    const [showPassConfirm, setShowPassConfirm] = useState(false)
    const handleShowPassConfirm = () => {
        setShowPassConfirm(!showPassConfirm)
    }
    
    return (
        <div>
            <div className="resetPasswordContainer">
                <div className="resetPasswordBox">
                    <h2 className="resetPasswordHeading">Update Your Password</h2>

                    <form className="resetPasswordForm" onSubmit={resetPasswordSubmit}>
                        {errors && <p style={{color: "red", fontSize: "13px"}}>{errors}</p>}
                        <div>
                            <LockOpenIcon />
                            <input
                                type={showPass? "text": "password"}
                                placeholder="New Password"
                                required
                                value={password}
                                onChange={onChangePassword}
                            />
                            {
                                showPass ? <VisibilityOffIcon onClick={handleShowPass} className='iconShow' />
                                : <VisibilityIcon onClick={handleShowPass} className='iconShow' />
                            }
                        </div>
                        <div className="loginPassword">
                            <LockIcon />
                            <input
                                type={showPassConfirm? "text": "password"}
                                placeholder="Confirm Password"
                                required
                                value={confirmPassword}
                                onChange={onChangeConfirmPassword}
                            />
                            {
                                showPassConfirm ? <VisibilityOffIcon onClick={handleShowPassConfirm} className='iconShow' />
                                : <VisibilityIcon onClick={handleShowPassConfirm} className='iconShow' />
                            }
                        </div>
                        <Link to="/login" style={{width: "100%"}}>
                            <input
                                type="submit"
                                value="Update"
                                className="resetPasswordBtn"
                                onClick={resetPasswordSubmit}
                            />
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Resetpassword