import React, { useState } from 'react'
import './Header.css'
import { Squash as Hamburger } from 'hamburger-react';
import logo from "../../../images/logo.png";
import {motion, AnimatePresence} from "framer-motion";
import { Link, NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { toast } from 'react-toastify';
// import Profile from '../../../images/Profile.png'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../Redux/Actions/Auth/AuthActions';
import Cookie from 'cookie-universal'

const Header = ({isAuthenticated, user}) => {
    const cookies = Cookie();
    const dispatch = useDispatch();

    const logoutUser = async() => {
        await dispatch(logout());
        cookies.remove('token');
        toast("Logged Out Successfully");
    }
    
    
    
    const [open, setOpen] = useState(false)
    //lets start animation
    const item={
        exit:{
            opacity:0,
            height:0,
            transition:{
                ease:"easeInOut",
                duration:0.3,
                delay:1.2
            }
        }
    }


    // create an active page link
    const nav_links = [
        {
            path: '/',
            name: 'Home',
        },
        {
            path: '/shop',
            name: 'Shop',
        }
    ]


    const [openMenuUser, setOpenMenuUser] = useState(false);
    const DropdownItem = (props) => {
        return(
            <li className={`dropdownItem ${openMenuUser? 'active' : ''}`} onClick={()=>{setOpenMenuUser(false)}}>
                <span> {props.text} </span>
                <p className='p'>{props.icon}</p>
            </li>
        );
    }

    return (
        <div className='divNavbar' >
            <header>
                <Hamburger toggled={open} toggle={setOpen} color={open ? "#b696e0" : "#000"} />
                {
                    isAuthenticated === true ?
                        <div className='menu-container'>
                            <div className='imgUser' onClick={()=>{setOpenMenuUser(!openMenuUser)}}>
                                <img src={user.data.user.avatar.url} alt='' />
                            </div>
        
                            <div className={`dropdownMenuUser ${openMenuUser? 'active' : ''}`}>
                                <ul>
                                    {
                                        user.data.user.role === 'admin' ?
                                            <Link to='/admin/dashboard'>
                                                <DropdownItem icon={<DashboardIcon />} text = {"Dashboard"}/>
                                            </Link>
                                        : null
                                    }
                                    <Link to='/account'>
                                        <DropdownItem icon={<PersonIcon />} text = {"Profile"}/>
                                    </Link>
                                    <Link to='/orders'>
                                        <DropdownItem icon={<ListAltIcon />} text = {"Orders"}/>
                                    </Link>
                                    <Link to='/cart'>
                                        <DropdownItem icon={<LocalMallOutlinedIcon />} text = {"Cart (0)"}/>
                                    </Link>
                                    <DropdownItem icon={<LogoutIcon onClick={logoutUser} />} text = {"Logout"}/>
                                </ul>
                            </div>
                        </div>
                    : null
                }
            </header>
            <AnimatePresence>
                {
                    open && (
                        <motion.div
                            id={open ? "open" : "notOpen"}
                            className='divNavbar-nav'
                            variants={item}
                            initial={{height:0,opacity:0}}
                            animate={{height:"102vh", opacity:1}}
                            transition={{duration:1}}
                            exit="exit"
                        >
                            <motion.img
                                initial={{y:-80,opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{delay:1}}
                                exit={{
                                    opacity:0,
                                    y:-90,
                                    transition:{
                                        ease:"easeInOut",
                                        delay:1
                                    }
                                }}
                                className='logo'
                                src={logo} 
                                alt=''
                            />
                            <motion.ul
                                initial={{y:-80,opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{delay:1.5}}
                                exit={{
                                    opacity:0,
                                    y:-90,
                                    transition:{
                                        ease:"easeInOut",
                                        delay:.8
                                    }
                                }}
                            >
                                {
                                    nav_links.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink
                                                    to={item.path}
                                                    className={(navClass) => 
                                                        navClass.isActive ? 'nav_active' : ''
                                                    }
                                                    onClick={()=> setOpen(false)}
                                                >
                                                    {item.name}
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </motion.ul>
                            <motion.ul
                                initial={{y:-80,opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{delay:2}}
                                exit={{
                                    opacity:0,
                                    y:-90,
                                    transition:{
                                        ease:"easeInOut",
                                        delay:.6
                                    }
                                }}
                            >
                                <li>
                                    <NavLink
                                        to='/search'
                                        className={(navClass) => 
                                            navClass.isActive ? 'nav_active' : ''
                                        }
                                        onClick={()=> setOpen(false)}
                                    >
                                        <SearchIcon />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/cart'
                                        className={(navClass) => 
                                            navClass.isActive ? 'nav_active' : ''
                                        }
                                        onClick={()=> setOpen(false)}
                                    >
                                        <LocalMallOutlinedIcon />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/login'
                                        className={(navClass) => 
                                            navClass.isActive ? 'nav_active' : ''
                                        }
                                        onClick={()=> setOpen(false)}
                                    >
                                        <PersonOutlineIcon />
                                    </NavLink>
                                </li>
                            </motion.ul>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default Header