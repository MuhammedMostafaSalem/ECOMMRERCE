import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';
import ForgetPasswordHook from '../../Hooks/Auth/ForgetPasswordHook';

const Forgotpassword = () => {
    const [email, onChangeEmail, errors, forgotPasswordSubmit] = ForgetPasswordHook();

    return (
        <div className="forgotPasswordContainer">
            <div className="forgotPasswordBox">
                <h2 className="forgotPasswordHeading">Forgot Password</h2>
                
                <form className="forgotPasswordForm" onSubmit={forgotPasswordSubmit}>
                    {errors && <p style={{color: "red", fontSize: "13px"}}>{errors}</p>}
                    <div className="forgotPasswordEmail">
                        <MailOutlineIcon />
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            name="email"
                            value={email}
                            onChange={onChangeEmail}
                        />
                    </div>

                    <Link to="/password/reset/:token" style={{width: "100%"}}>
                        <input
                        type="submit"
                        value="Send"
                        className="forgotPasswordBtn"
                        onClick={forgotPasswordSubmit}
                        />
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Forgotpassword