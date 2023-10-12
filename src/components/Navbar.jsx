import React from 'react'
import {HiHome} from 'react-icons/hi'
import {MdWorkspaces} from 'react-icons/md'
import {BsChatSquareTextFill} from 'react-icons/bs'
import {FaBell} from 'react-icons/fa'
import { Avatar } from '@material-ui/core'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-left'>
            <div className='navbar__logo'>
                <span >C</span>
                <span className='blinking-letter small'>Q</span>
            </div>
            <div className='navbar__search'>
                <label htmlFor='search'></label>
                <input id='search' type='text' placeholder='#Explore'></input>
            </div>
        </div>
        <div className='navbar-right'>
            <div className='navbar-icon'>
                <HiHome className='icon home'/>
                <span className='home-text'>Home</span>
            </div>
            <div className='navbar-icon' >
                <MdWorkspaces className='icon'/>
            </div>
            <dv className='navbar-icon'>
                <BsChatSquareTextFill className='icon'/>
            </dv>
            <div className='navbar-icon'>
                <FaBell className='icon'/>
            </div>
            <div classname='navbar-button'>
                <button className='btn'> Ask Question</button>
            </div>
            <div className='navar-avatar'>
                <Avatar alt='user' src='https://media.licdn.com/dms/image/C5112AQEKhP8DbB0mZQ/article-cover_image-shrink_720_1280/0/1520179924375?e=2147483647&v=beta&t=NYxzVw01LZbqWkAyJ2ga0EmyVgTMtT5xGHHXvPay7lA'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar