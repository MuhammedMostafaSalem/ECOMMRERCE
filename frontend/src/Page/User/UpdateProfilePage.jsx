import React from 'react'
import './User.css'
import FaceIcon from '@mui/icons-material/Face';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import UpdateProfileHook from '../../Hooks/User/UpdateProfileHook';

const UpdateProfilePage = () => {
    const [name, onChangeName, email, onChangeEmail, updateProfileSubmit, updateProfileDataChange, avatarPreview, errors] = UpdateProfileHook();

    return (
        <div className='divContainer'>
            <div className="updateProfileContainer">
                <div className="updateProfileBox">
                    <h2 className="updateProfileHeading">Update Profile</h2>

                    <form className="updateProfileForm" onSubmit={updateProfileSubmit}>
                        {errors && <p style={{color: "red", fontSize: "13px"}}>{errors}</p>}
                        <div className="updateProfileName">
                            <FaceIcon />
                            <input
                                type="text"
                                placeholder="Name"
                                required
                                name="name"
                                value={name}
                                onChange={onChangeName}
                            />
                        </div>
                        <div className="updateProfileEmail">
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

                        <div id="updateProfileImage">
                            <img src={avatarPreview} alt="Avatar Preview" />
                            <input
                                type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={updateProfileDataChange}
                            />
                        </div>
                        <input
                            type="submit"
                            value="Update"
                            className="updateProfileBtn"
                            onClick={updateProfileSubmit}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfilePage