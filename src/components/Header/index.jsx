import React, { useState } from 'react';
import { BrowserRouter as Link } from 'react-router-dom'
import logo from '../../assets/images/Logo.png';
import "../../App.css"
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from '../SearchBox.jsx';
import { CiLight } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { FaShieldAlt } from "react-icons/fa";




const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <header className='d-flex align-items-center'>
                <div className='container-fluid w-100'>
                    <div className='row d-flex align-items-center w-100'>
                        <div className='col-sm-3 part1'>
                            <Link to={'/'} className='d-flex align-items-center'><img src={logo} className='logo' />
                                <span className='txt'>Aiwan e Tijarat Hospital</span>
                            </Link>
                        </div>


                        <div className='col-sm-3 d-flex align-items-center part2 p1-4'>
                            <Button className={'rounded-circle'}><MdMenuOpen /></Button>


                            {/* <Button><MdOutlineMenu /></Button> */}
                            <SearchBox />
                        </div>

                        <div className='col-sm-6 d-flex align-items-center justify-content-end part3 '>
                            <Button className='rounded-circle'><CiLight /></Button>
                            <Button className='rounded-circle'><MdEmail /></Button>
                            <Button className='rounded-circle'><IoIosNotifications /></Button>

                            <div className='myAccwrapper'>
                                <Button className='myAcc d-flex align-items-center' onClick={handleClick} >
                                    <div className='userImg'>
                                        <span className='rounded-circle'>
                                            <img src="http://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="" />
                                        </span>
                                    </div>

                                    <div className='userInfo'>
                                        <h4>Muhammad Bilal</h4>
                                        <p className='mb-0'>@muhammadbilal</p>
                                    </div>
                                    <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={open}
                                        onClose={handleClose}
                                        onClick={handleClose}
                                        slotProps={{
                                            paper: {
                                                elevation: 0,
                                                sx: {
                                                    overflow: 'visible',
                                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                    mt: 1.5,
                                                    '& .MuiAvatar-root': {
                                                        width: 32,
                                                        height: 32,
                                                        ml: -0.5,
                                                        mr: 1,
                                                    },
                                                    '&::before': {
                                                        content: '""',
                                                        display: 'block',
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 14,
                                                        width: 10,
                                                        height: 10,
                                                        bgcolor: 'background.paper',
                                                        transform: 'translateY(-50%) rotate(45deg)',
                                                        zIndex: 0,
                                                    },
                                                },
                                            },
                                        }}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <Divider />
                                        <MenuItem onClick={handleClose}>
                                            <ListItemIcon>
                                                <PersonAdd fontSize="small" />
                                            </ListItemIcon>
                                            My account
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <ListItemIcon>
                                            <FaShieldAlt fontSize="small"/>
                                            </ListItemIcon>
                                            Reset Password
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <ListItemIcon>
                                                <Logout fontSize="small" />
                                            </ListItemIcon>
                                            Logout
                                        </MenuItem>
                                    </Menu>

                                </Button>

                            </div>

                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header



