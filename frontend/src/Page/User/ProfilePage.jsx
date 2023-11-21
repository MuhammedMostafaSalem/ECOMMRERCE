import React from 'react'
import './User.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loggedUser } from '../../Redux/Actions/Auth/AuthActions'

const ProfilePage = ({user}) => {
    const dispatch = useDispatch();

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
        dispatch(loggedUser())
    }, [dispatch])

    return (
        <div className='divContainer'>
            <div className="profileContainer">
                <div className='myProfile'>
                    <h1>My Profile</h1>
                    <div className='ProfileImg'>
                        <img src={userAvatar} alt='' />
                    </div>
                    <Link to="/account/update">Edit Profile</Link>
                </div>

                <div className='userInfo'>
                    <div className='info'>
                        <h4>Full Name</h4>
                        <p>{userIn.name}</p>
                    </div>
                    <div className='info'>
                        <h4>Email</h4>
                        <p>{userIn.email}</p>
                    </div>
                    <div className='info'>
                        <h4>Joined On</h4>
                        <p>{String(userIn.createdAt).substring(0, 10)}</p>
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