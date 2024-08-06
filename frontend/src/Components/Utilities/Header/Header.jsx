import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../Redux/Actions/Auth/AuthActions';
import Cookie from 'cookie-universal'
import { Modal } from 'react-bootstrap';
import SearchHook from '../../../Hooks/Search/SearchHook';

const Header = ({isAuthenticated, user}) => {
    const cookies = Cookie();
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
    
    const [active, setActive] = useState(false);
    const toggledActive = () => setActive (!active);
    useEffect(() => {
        let handler = () =>  {
            setActive(false)
        }
        document.addEventListener('mousedown', handler);
    })

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


    const [keyword, onChangeSearch] = SearchHook();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='divNavbar' >
            <Modal
                className='searchModal'
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div id="contained-modal-title-vcenter">
                    <input
                        type='search'
                        placeholder='Search a product ...'
                        className='inputSearch'
                        value={keyword}
                        onChange={onChangeSearch}
                    />
                    <button className='btnSearch' >Search</button>
                </div>
            </Modal>



            <header>
                <Hamburger toggled={open} toggle={setOpen} color={open ? "#b696e0" : "#000"} />
                {
                    isAuthenticated === true ?
                        <div className='menu-container'>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='searchBox' id={active ? 'active' : ''}>
                                    <input
                                        type='search'
                                        placeholder='Search a product ...'
                                        
                                    />
                                    <SearchIcon onClick={toggledActive} />
                                    </div>
                                    <SearchIcon onClick={handleShow} />
                                <div className='imgUser' onClick={()=>{setOpenMenuUser(!openMenuUser)}}>
                                    {/* <img src={userAvatar} alt='' /> */}
                                    <div>{userIn.name}</div>
                                </div>
                            </div>
        
                            <div className={`dropdownMenuUser ${openMenuUser? 'active' : ''}`}>
                                <ul>
                                    {
                                        userIn.role === 'admin' ?
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
                                        <DropdownItem icon={<LocalMallOutlinedIcon />} text = {"Cart"}/>
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