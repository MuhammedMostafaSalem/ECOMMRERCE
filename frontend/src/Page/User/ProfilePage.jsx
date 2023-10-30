import React from 'react'
import './User.css'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className='divContainer'>
            <div className="profileContainer">
                <div className='myProfile'>
                    <h1>My Profile</h1>
                    <div className='ProfileImg'>
                        <img src={user.avatar.url} alt='' />
                    </div>
                    <Link to="/account/update">Edit Profile</Link>
                </div>

                <div className='userInfo'>
                    <div className='info'>
                        <h4>Full Name</h4>
                        <p>{user.name}</p>
                    </div>
                    <div className='info'>
                        <h4>Email</h4>
                        <p>{user.email}</p>
                    </div>
                    <div className='info'>
                        <h4>Joined On</h4>
                        <p>{String(user.createdAt).substring(0, 10)}</p>
                    </div>
    
                    <div className='btnGroup'>
                        <Link to="/orders">My Orders</Link>
                        <Link to="/password/update">Change Password</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage